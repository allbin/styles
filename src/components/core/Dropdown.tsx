import React, {
  useCallback,
  useState,
  useMemo,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import {
  IconCheck,
  IconCheckboxChecked,
  IconCheckboxEmpty,
  IconChevronDown,
} from '@/icons';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/helpers/classnames';
import { Slot } from '@radix-ui/react-slot';
import useClickOutside from '@/hooks/useClickOutside';
import useListPlacement from '@/hooks/useListPlacement';
import { FormattedMessage } from 'react-intl';
import Button from './Button';

// The placement logic needs the cap as a number of pixels; other CSS units are
// left for the stylesheet to apply.
const parsePxHeight = (value?: string): number | undefined => {
  const match = value?.match(/^(\d+(?:\.\d+)?)px$/);
  return match ? parseFloat(match[1]) : undefined;
};

const dropdownVariants = cva(
  [
    'flex',
    'relative',
    'font-medium',
    'items-center',
    'justify-between',
    'py-1',
    'px-2',
    'w-full',
    'border',
    'transition-colors',
    'rounded-md',
    'active:opacity-80',
    'focus:outline-none',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-inset',
    'focus-visible:ring-primary-600',
    'cursor-pointer',
  ],
  {
    variants: {
      variant: {
        default: [
          'border-background-400',
          'bg-background-50 hover:bg-background-200',
        ],
        outline: '',
      },
      disabled: {
        true: '',
        false: '',
      },
      error: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        disabled: true,
        className: [
          'border-gray-400',
          'text-gray-400',
          'active:opacity-100',
          'disabled:pointer-events-none',
          'hover:bg-transparent',
          'cursor-default',
        ],
      },
      {
        variant: 'default',
        error: true,
        className: [
          'text-red-700',
          'ring-1',
          'ring-red-600',
          'hover:ring-red-800',
          'focus:outline-red-600',
        ],
      },
    ],
    defaultVariants: {
      variant: 'default',
    },
  },
);

const COLORS = {
  default: 'text-primary-500 hover:text-primary-800',
  red: 'text-red-500 hover:text-red-900',
  green: 'text-green-500 hover:text-green-800',
};

interface OptionsBaseProps {
  color?: 'red' | 'green' | 'default';
}

export interface OptionsType extends OptionsBaseProps {
  id: string;
  label: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
  category?: never;
  value?: string;
}

interface CategoryOptionType extends OptionsBaseProps {
  id?: never;
  label?: never;
  category: string;
  disabled?: never;
  description?: never;
}

export type OptionsProps = OptionsType | CategoryOptionType;

export interface BaseProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dropdownVariants> {
  asChild?: boolean;
  id: string;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  optionsContainerMaxHeight?: string;
  dropDownWidth?: string;
  options: OptionsProps[];
  containerRef?: React.RefObject<HTMLElement>;
  preventReselect?: boolean;
}

interface SingleSelectProps extends BaseProps {
  multiSelect?: false;
  value?: OptionsType;
  onValueChange: (value: OptionsType) => void;
}

interface MultiSelectProps extends BaseProps {
  multiSelect: true;
  value?: OptionsType[];
  onValueChange: (value: OptionsType[]) => void;
}

type DropdownProps = SingleSelectProps | MultiSelectProps;

export interface DropdownHandle {
  /** Moves focus to the field. */
  focus: () => void;
  /** Moves focus to the field and opens the options list. */
  open: () => void;
}

const Dropdown = React.forwardRef<DropdownHandle, DropdownProps>(
  (
    {
      className,
      variant,
      id,
      placeholder,
      options,
      onValueChange,
      value,
      label,
      errorMessage,
      error = false,
      helperText,
      optionsContainerMaxHeight,
      dropDownWidth,
      disabled = false,
      asChild = false,
      multiSelect = false,
      containerRef,
      preventReselect = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'div';

    const dropdownRef = useRef<HTMLDivElement>(null);
    const fieldRef = useRef<HTMLDivElement>(null);
    const optionsRef = useRef<HTMLDivElement>(null);
    const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [isOpen, setIsOpen] = useState(false);
    const [openRequested, setOpenRequested] = useState(false);
    const [clickEnabled, setClickEnabled] = useState(true);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [selectedValues, setSelectedValues] = useState<OptionsType[]>([]);

    const { placeAbove, maxListHeight } = useListPlacement({
      isOpen,
      anchorRef: dropdownRef,
      listRef: optionsRef,
      containerRef,
      maxHeight: parsePxHeight(optionsContainerMaxHeight),
    });

    const selectableOptions = useMemo(() => {
      return options.filter((opt) => !opt.category);
    }, [options]);

    const getSelectableRefs = useCallback(() => {
      return optionRefs.current.filter((el) => el !== null);
    }, [optionRefs]);

    const closeDropdown = useCallback(() => {
      setIsOpen(false);
      setClickEnabled(true);
      setTimeout(() => {
        if (dropdownRef.current) {
          dropdownRef.current.focus();
        }
      }, 0);
    }, []);

    const handleChange = useCallback(
      (value: OptionsType) => {
        if (preventReselect && !multiSelect && selectedIds.includes(value.id)) {
          closeDropdown();
          return;
        }

        if (multiSelect) {
          const newSelectedIds = selectedIds.includes(value.id)
            ? selectedIds.filter((id) => id !== value.id)
            : [...selectedIds, value.id];

          const newSelectedValues = selectedValues.filter(
            (v) => v.id !== value.id,
          );
          if (!selectedIds.includes(value.id)) {
            newSelectedValues.push(value);
          }

          setSelectedIds(newSelectedIds);
          setSelectedValues(newSelectedValues);

          // Type assertion is safe here because we know multiSelect is true
          (onValueChange as (value: OptionsType[]) => void)(newSelectedValues);
        } else {
          // Single-select does not toggle off: that would pass undefined to a
          // required onValueChange. preventReselect skips the callback instead.
          setSelectedIds([value.id]);
          setSelectedValues([value]);

          // Type assertion is safe here because we know multiSelect is false
          (onValueChange as (value: OptionsType) => void)(value);
          closeDropdown();
        }
      },
      [
        selectedIds,
        selectedValues,
        multiSelect,
        closeDropdown,
        onValueChange,
        preventReselect,
      ],
    );

    useClickOutside([dropdownRef, optionsRef], clickEnabled, () => {
      if (isOpen) {
        closeDropdown();
      }
    });

    const checkCurrentIndex = useCallback(() => {
      setTimeout(() => {
        const selectableRefs = getSelectableRefs();
        if (selectedValues.length > 0) {
          const currentIndex = selectableOptions.findIndex(
            (op) => op.id === selectedValues[0]?.id,
          );
          if (currentIndex > -1) {
            const selectedElement = selectableRefs[currentIndex];
            if (selectedElement) {
              selectedElement.focus();
            }
          }
        }
      }, 0);
    }, [selectedValues, selectableOptions, getSelectableRefs]);

    // Handle focus leaving the dropdown component
    const handleBlur = useCallback(
      (event: React.FocusEvent) => {
        // Check if the new focus target is still within the dropdown
        const currentTarget = event.currentTarget;
        const relatedTarget = event.relatedTarget as Node | null;

        // If focus is moving to somewhere outside the dropdown, close it
        if (relatedTarget && !currentTarget.contains(relatedTarget)) {
          closeDropdown();
        }
      },
      [closeDropdown],
    );

    const openDropdown = useCallback(() => {
      if (disabled) {
        return;
      }
      setIsOpen(true);
      setClickEnabled(false);
      checkCurrentIndex();
    }, [disabled, checkCurrentIndex]);

    const handleClickOpenClose = useCallback(() => {
      if (disabled) {
        return;
      }

      if (isOpen) {
        closeDropdown();
        return;
      }
      openDropdown();
    }, [disabled, isOpen, openDropdown, closeDropdown]);

    // An open asked for through the ref can arrive in the same commit the
    // dropdown mounted in, before the selected value has been picked up from
    // the props, so it is carried out on the following render instead.
    useEffect(() => {
      if (!openRequested) {
        return;
      }
      setOpenRequested(false);
      openDropdown();
    }, [openRequested, openDropdown]);

    useImperativeHandle(
      ref,
      () => ({
        focus: () => fieldRef.current?.focus(),
        open: () => {
          fieldRef.current?.focus();
          setOpenRequested(true);
        },
      }),
      [],
    );

    const handleKeyDownOpenClose = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.code === 'Escape' && isOpen) {
          event.preventDefault();
          closeDropdown();
          return;
        }
        if (event.code === 'Space' || event.code === 'Enter') {
          event.preventDefault();
          setClickEnabled(false);
          handleClickOpenClose();
        }
      },
      [handleClickOpenClose, isOpen, closeDropdown],
    );

    const handleKeyDownUpOptions = useCallback(
      (
        event: React.KeyboardEvent<HTMLDivElement>,
        option: OptionsType,
        index: number,
      ) => {
        const selectableRefs = getSelectableRefs();
        if (event.code === 'Space' || event.code === 'Enter') {
          event.preventDefault();
          handleChange(option);
        }
        if (event.code === 'ArrowDown') {
          event.preventDefault();
          const nextElement = selectableRefs[index + 1];
          if (nextElement) {
            nextElement.focus();
          }
        }
        if (event.code === 'ArrowUp') {
          event.preventDefault();
          const previousElement = selectableRefs[index - 1];
          if (previousElement) {
            previousElement.focus();
          }
        }
        if (event.code === 'Escape') {
          event.preventDefault();
          closeDropdown();
        }
      },
      [handleChange, getSelectableRefs, closeDropdown],
    );

    useEffect(() => {
      if (!value) {
        setSelectedValues([]);
        setSelectedIds([]);
        return;
      }

      if (multiSelect && Array.isArray(value)) {
        setSelectedValues(value);
        setSelectedIds(value.map((v) => v.id));
      } else if (!multiSelect && !Array.isArray(value)) {
        setSelectedValues([value]);
        setSelectedIds([value.id]);
      }
    }, [value, multiSelect]);

    const renderSelectedValue = (): React.ReactNode => {
      if (selectedValues.length === 0) {
        return (
          <span className="pr-1 font-light italic text-text-700">
            {/* pr-1 to prevent text from being cut off */}
            {placeholder}
          </span>
        );
      }

      if (multiSelect) {
        return selectedValues.map((v) => v.label).join(', ');
      }

      return selectedValues[0].label;
    };

    return (
      <div
        className={cn(
          'relative flex w-full',
          dropDownWidth && `w-[${dropDownWidth}]`,
        )}
        ref={dropdownRef}
        onBlur={handleBlur}
      >
        {label && (
          <label
            id={`${id}-label`}
            className="absolute bottom-full left-0 block pb-1 text-base font-medium leading-4 text-text-900"
          >
            {label}
          </label>
        )}
        <Comp
          id={id}
          data-tooltip-id={id}
          data-tooltip-content={
            error && errorMessage ? errorMessage : undefined
          }
          data-tooltip-variant={'error'}
          className={cn(
            dropdownVariants({ variant, disabled, error }),
            dropDownWidth && `w-[${dropDownWidth}]`,
            className,
          )}
          ref={fieldRef}
          role="combobox"
          onClick={handleClickOpenClose}
          onKeyDown={handleKeyDownOpenClose}
          tabIndex={disabled ? -1 : 0}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={`${id}-listbox`}
          aria-labelledby={label ? `${id}-label` : undefined}
          aria-label={label ? undefined : placeholder}
          aria-invalid={error || undefined}
          aria-disabled={disabled || undefined}
          {...props}
        >
          <span className="min-h-5 truncate">{renderSelectedValue()}</span>
          <IconChevronDown
            className={cn(
              'size-4 min-w-4 transition-transform',
              isOpen && 'rotate-180',
            )}
            aria-hidden="true"
          />
        </Comp>
        {helperText && (
          <span
            className={cn(
              'absolute top-full ml-[7px] text-base leading-4 text-text-700',
            )}
          >
            {helperText}
          </span>
        )}
        {isOpen && (
          <div
            ref={optionsRef}
            id={`${id}-listbox`}
            role="listbox"
            aria-multiselectable={multiSelect}
            className={cn(
              'absolute z-50 flex w-full flex-col overflow-y-auto overflow-x-hidden overscroll-contain rounded-md border border-background-300 bg-background-100 p-2 shadow-lg',
              placeAbove ? 'bottom-full' : 'top-full',
              className,
            )}
            style={{ maxHeight: maxListHeight ?? optionsContainerMaxHeight }}
          >
            {multiSelect && (
              <div className="mb-1 flex items-center justify-between border-b border-background-300 pb-1">
                <span className="text-sm text-text-900">
                  <FormattedMessage
                    id="dropdown.selected_count"
                    defaultMessage="{count} selected"
                    values={{ count: selectedIds.length }}
                  />
                </span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIds([]);
                    setSelectedValues([]);
                    (onValueChange as (value: OptionsType[]) => void)([]);
                  }}
                  className="text-sm"
                >
                  <FormattedMessage
                    id="dropdown.clear_selection"
                    defaultMessage="Clear selection"
                  />
                </Button>
              </div>
            )}
            {options.length === 0 && (
              <span className="text-sm italic text-text-700">
                <FormattedMessage
                  id="dropdown.no_options"
                  defaultMessage="No options available"
                />
              </span>
            )}
            {options.map((op, index) => {
              let icon = null;
              if (multiSelect) {
                if (op.id && selectedIds.includes(op.id)) {
                  icon = (
                    <IconCheckboxChecked
                      className="mr-2 size-5 min-w-5"
                      aria-hidden="true"
                    />
                  );
                } else {
                  icon = (
                    <IconCheckboxEmpty
                      className="mr-2 size-5 min-w-5"
                      aria-hidden="true"
                    />
                  );
                }
              } else if (op.id && selectedIds.includes(op.id)) {
                icon = (
                  <IconCheck
                    className="mr-2 size-5 min-w-5"
                    aria-hidden="true"
                  />
                );
              }

              return (
                <div
                  ref={(el) => {
                    if (!op.category) {
                      optionRefs.current[index] = el;
                    }
                  }}
                  onClick={() =>
                    op.category ? null : handleChange(op as OptionsType)
                  }
                  className={cn(
                    'flex cursor-pointer items-center rounded-md px-2 py-1.5 text-text-900 hover:bg-primary-300 focus:outline-none',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-600 active:opacity-80',
                    op.id && selectedIds.includes(op.id)
                      ? 'bg-primary-500 text-contrast-primary'
                      : '',
                    op.category &&
                      'mt-2 cursor-default pl-1 text-sm font-semibold hover:bg-transparent',
                    op.color === 'red' && COLORS.red,
                    op.color === 'green' && COLORS.green,
                  )}
                  tabIndex={!op.category ? 0 : -1}
                  onKeyDown={(e) =>
                    handleKeyDownUpOptions(
                      e,
                      op as OptionsType,
                      selectableOptions.findIndex((so) => so.id === op.id),
                    )
                  }
                  data-index={
                    !op.category &&
                    selectableOptions.findIndex((so) => so.id === op.id)
                  }
                  key={op.id ?? op.category}
                  data-type={!op.category ? ['option'] : undefined}
                  role={!op.category ? 'option' : 'presentation'}
                  aria-selected={
                    !op.category && op.id
                      ? selectedIds.includes(op.id)
                      : undefined
                  }
                >
                  {icon}
                  <div className="flex flex-col leading-5">
                    <span>
                      {op.label || op.category}
                      {op.category ? ':' : null}
                    </span>
                    {op.description && (
                      <span
                        className={cn(
                          'text-sm leading-4',
                          op.id && selectedIds.includes(op.id)
                            ? 'text-contrast-primary opacity-80'
                            : 'text-text-800',
                        )}
                      >
                        {op.description}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  },
);

export { Dropdown };
