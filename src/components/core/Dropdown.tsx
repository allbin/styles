import React, {
  useCallback,
  useState,
  useMemo,
  useEffect,
  useRef,
} from 'react';
import {
  IconCheck,
  IconCheckboxChecked,
  IconCheckboxEmpty,
  IconChevronDown,
} from '@/icons';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../helpers/classnames';
import { Slot } from '@radix-ui/react-slot';
import { Tooltip } from 'react-tooltip';
import useClickOutside from '@/hooks/useClickOutside';
import { FormattedMessage } from 'react-intl';
import Button from './Button';

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

const optionsColor = {
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
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dropdownVariants> {
  asChild?: boolean;
  id: string;
  placeholder: string;
  disabled?: boolean;
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  optionsContainerHeight?: string;
  dropDownWidth?: string;
  options: OptionsProps[];
  containerRef?: React.RefObject<HTMLElement>;
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

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
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
      optionsContainerHeight,
      dropDownWidth,
      disabled = false,
      asChild = false,
      multiSelect = false,
      containerRef,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'div';

    const dropdownRef = useRef<HTMLDivElement>(null);
    const optionsRef = useRef<HTMLDivElement>(null);
    const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [isOpen, setIsOpen] = useState(false);
    const [clickEnabled, setClickEnabled] = useState(true);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [selectedValues, setSelectedValues] = useState<OptionsType[]>([]);

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
          const isSelected = selectedIds.includes(value.id);
          const newSelectedIds = isSelected ? [] : [value.id];
          const newSelectedValues = isSelected ? [] : [value];

          setSelectedIds(newSelectedIds);
          setSelectedValues(newSelectedValues);

          // Type assertion is safe here because we know multiSelect is false
          (onValueChange as (value: OptionsType) => void)(
            newSelectedValues[0] || undefined,
          );
          closeDropdown();
        }
      },
      [selectedIds, selectedValues, multiSelect, closeDropdown, onValueChange],
    );

    useClickOutside([dropdownRef, optionsRef], clickEnabled, () => {
      if (isOpen) {
        closeDropdown();
      }
    });

    useEffect(() => {
      if (!isOpen || !dropdownRef.current || !optionsRef.current) return;

      const calculatePosition = () => {
        const dropdownElement = dropdownRef.current;
        const optionsElement = optionsRef.current;

        if (!dropdownElement || !optionsElement) return;

        const container = containerRef?.current || window;
        let containerRect: DOMRect;
        let containerHeight: number;
        let containerWidth: number;

        if (container === window) {
          containerHeight = window.innerHeight;
          containerWidth = window.innerWidth;
          containerRect = new DOMRect(0, 0, containerWidth, containerHeight);
        } else {
          containerRect = (container as HTMLElement).getBoundingClientRect();
          containerHeight = containerRect.height;
          containerWidth = containerRect.width;
        }

        const dropdownRect = dropdownElement.getBoundingClientRect();

        let spaceBelow: number;
        let spaceAbove: number;

        if (container === window) {
          spaceBelow = containerHeight - dropdownRect.bottom;
          spaceAbove = dropdownRect.top;
        } else {
          spaceBelow = containerRect.bottom - dropdownRect.bottom;
          spaceAbove = dropdownRect.top - containerRect.top;
        }

        let desiredOptionsHeight = optionsElement.scrollHeight;
        if (optionsContainerHeight) {
          desiredOptionsHeight = parseInt(
            optionsContainerHeight.replace(/\D/g, ''),
            10,
          );
        }

        const buffer = 20;
        const requiredSpace = desiredOptionsHeight + buffer;

        let finalHeight = desiredOptionsHeight;
        let shouldPositionAbove = false;

        if (spaceBelow >= requiredSpace) {
          finalHeight = desiredOptionsHeight;
          shouldPositionAbove = false;
        } else if (spaceAbove >= requiredSpace) {
          finalHeight = desiredOptionsHeight;
          shouldPositionAbove = true;
        } else {
          const availableSpaceAbove = Math.max(120, spaceAbove - buffer);
          const availableSpaceBelow = Math.max(120, spaceBelow - buffer);

          if (availableSpaceAbove > availableSpaceBelow) {
            finalHeight = availableSpaceAbove;
            shouldPositionAbove = true;
          } else {
            finalHeight = availableSpaceBelow;
            shouldPositionAbove = false;
          }
        }

        if (finalHeight < desiredOptionsHeight) {
          optionsElement.style.maxHeight = `${finalHeight}px`;
          optionsElement.style.overflowY = 'auto';
        } else if (optionsContainerHeight) {
          optionsElement.style.maxHeight = optionsContainerHeight;
          optionsElement.style.overflowY = 'auto';
        } else {
          optionsElement.style.maxHeight = 'none';
          optionsElement.style.overflowY = 'visible';
        }

        if (shouldPositionAbove) {
          optionsElement.style.bottom = '100%';
          optionsElement.style.top = 'auto';
        } else {
          optionsElement.style.top = '100%';
          optionsElement.style.bottom = 'auto';
        }
      };

      // Use a short delay to ensure DOM is ready
      const timer = setTimeout(calculatePosition, 10);

      const handleEvents = () => {
        if (isOpen) {
          calculatePosition();
        }
      };

      window.addEventListener('resize', handleEvents);
      window.addEventListener('scroll', handleEvents, true);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', handleEvents);
        window.removeEventListener('scroll', handleEvents, true);
      };
    }, [isOpen, optionsContainerHeight, containerRef]);

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

    const handleEscape = useCallback(() => {
      const escapeKeyDown = (event: KeyboardEvent) => {
        if (event.code === 'Escape') {
          closeDropdown();
        }
      };

      const dropdownElement = dropdownRef.current;
      if (dropdownElement) {
        dropdownElement.addEventListener('keydown', escapeKeyDown);

        return () => {
          dropdownElement.removeEventListener('keydown', escapeKeyDown);
        };
      }
    }, [dropdownRef, closeDropdown]);

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

    const handleClickOpenClose = useCallback(() => {
      if (disabled) {
        return;
      }

      setIsOpen((prev) => {
        const newState = !prev;
        if (newState) {
          handleEscape();
          checkCurrentIndex();
        }
        return newState;
      });
      setClickEnabled(false);
    }, [disabled, handleEscape, checkCurrentIndex]);

    const handleKeyDownOpenClose = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.code === 'Space' || event.code === 'Enter') {
          event.preventDefault();
          setClickEnabled(false);
          handleClickOpenClose();
        }
      },
      [handleClickOpenClose],
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
      },
      [handleChange, getSelectableRefs],
    );

    useEffect(() => {
      if (!value) {
        return;
      }

      if (multiSelect && Array.isArray(value)) {
        setSelectedValues(value);
        setSelectedIds(value.map((v) => v.id));
      } else if (!multiSelect && !Array.isArray(value)) {
        setSelectedValues(value ? [value] : []);
        setSelectedIds(value ? [value.id] : []);
      }
    }, [value, multiSelect]);

    const renderSelectedValue = () => {
      if (selectedValues.length === 0) {
        return (
          <span className="pr-1 font-light italic text-text-600">
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
        {id ? <Tooltip id={id} delayShow={300} delayHide={1} /> : null}
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
          ref={ref}
          onClick={handleClickOpenClose}
          onKeyDown={handleKeyDownOpenClose}
          tabIndex={0}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={`${id}-listbox`}
          aria-labelledby={label ? `${id}-label` : undefined}
          aria-label={label ? undefined : placeholder}
          {...props}
        >
          <span className="truncate">{renderSelectedValue()}</span>
          <IconChevronDown
            className={cn(
              'size-4 min-w-4 transition-transform',
              isOpen && 'rotate-180',
            )}
          />
        </Comp>
        {helperText && (
          <span className="absolute bottom-full pl-2 text-base text-text-700">
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
              className,
            )}
            style={
              optionsContainerHeight ? { height: optionsContainerHeight } : {}
            }
          >
            {multiSelect && (
              <div className="mb-1 flex items-center justify-between border-b border-background-300 pb-1">
                <span className="text-sm text-text-900">
                  <FormattedMessage
                    defaultMessage="{count} valda"
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
                  <FormattedMessage defaultMessage="Rensa val" />
                </Button>
              </div>
            )}
            {options.length === 0 && (
              <span className="text-sm italic text-text-600">
                <FormattedMessage defaultMessage="Inga alternativ tillgängliga" />
              </span>
            )}
            {options.map((op, index) => {
              let icon = null;
              if (multiSelect) {
                if (op.id && selectedIds.includes(op.id)) {
                  icon = (
                    <IconCheckboxChecked className="mr-2 size-5 min-w-5" />
                  );
                } else {
                  icon = <IconCheckboxEmpty className="mr-2 size-5 min-w-5" />;
                }
              } else if (op.id && selectedIds.includes(op.id)) {
                icon = <IconCheck className="mr-2 size-5 min-w-5" />;
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
                    'flex cursor-pointer items-center rounded-md p-2 hover:bg-primary-300 focus:outline-none',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-600',
                    op.id && selectedIds.includes(op.id)
                      ? 'bg-primary-500 text-contrast-primary'
                      : '',
                    op.category &&
                      'mt-2 cursor-default text-sm font-semibold hover:bg-transparent',
                    op.color === 'red' && optionsColor.red,
                    op.color === 'green' && optionsColor.green,
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
                  role={!op.category ? 'option' : undefined}
                  aria-selected={
                    !op.category && op.id
                      ? selectedIds.includes(op.id)
                      : undefined
                  }
                >
                  {icon}
                  <div className="flex flex-col leading-4">
                    <span>{op.label || op.category}</span>
                    {op.description && (
                      <span className="text-sm leading-3 text-text-700">
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
