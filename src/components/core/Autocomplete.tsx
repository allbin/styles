import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Fuse from 'fuse.js';
import { FormattedMessage } from 'react-intl';
import { IconChevronDown } from '@/icons';
import { cn } from '@/helpers/classnames';
import useClickOutside from '@/hooks/useClickOutside';
import useListPlacement from '@/hooks/useListPlacement';
import Input from './Input';

// The height cap lives here rather than in a Tailwind class since the placement
// logic has to compare it against the space around the field.
const MAX_OPTIONS_HEIGHT = 256;

export interface AutocompleteOption {
  value: string;
  label: string;
  description?: React.ReactNode;
  endContent?: React.ReactNode;
  disabled?: boolean;
}

export interface AutocompleteProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'value' | 'defaultValue' | 'onChange' | 'type' | 'min' | 'max' | 'size'
> {
  id: string;
  options: AutocompleteOption[];
  placeholder: string;
  value?: string;
  label?: string;
  helperText?: string;
  helperTextReserveSpace?: boolean;
  error?: string;
  disabled?: boolean;
  // Accepts whatever is typed as the value instead of only the option values.
  freeSolo?: boolean;
  optionsContainerHeight?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  // The element the options list is kept inside of, defaults to the viewport.
  containerRef?: React.RefObject<HTMLElement>;
  onValueChange: (value: string) => void;
  onSearchChange?: (search: string) => void;
}

const Autocomplete = React.forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      id,
      options,
      placeholder,
      value,
      label,
      helperText,
      helperTextReserveSpace,
      error,
      disabled = false,
      freeSolo = false,
      optionsContainerHeight,
      startAdornment,
      endAdornment,
      containerRef,
      onValueChange,
      onSearchChange,
      className,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const optionsRef = useRef<HTMLDivElement>(null);
    const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [focusedIndex, setFocusedIndex] = useState(-1);

    const { placeAbove, maxListHeight } = useListPlacement({
      isOpen,
      anchorRef: wrapperRef,
      listRef: optionsRef,
      containerRef,
      maxHeight: MAX_OPTIONS_HEIGHT,
    });

    const setInputRef = useCallback(
      (node: HTMLInputElement | HTMLTextAreaElement | null) => {
        inputRef.current = node as HTMLInputElement | null;
        if (typeof ref === 'function') {
          ref(node as HTMLInputElement | null);
        } else if (ref) {
          ref.current = node as HTMLInputElement;
        }
      },
      [ref],
    );

    const selectedOption = useMemo(
      () => options.find((op) => op.value === value),
      [options, value],
    );

    const fuse = useMemo(
      () =>
        new Fuse(options, {
          keys: ['label'],
          threshold: 0.1,
          distance: 1000,
        }),
      [options],
    );

    const matchingOptions = useMemo(() => {
      const query = search.trim();
      // An untouched field shows every option instead of filtering on the label
      // of the already selected option, or on a free solo value typed earlier.
      if (
        !query ||
        query === selectedOption?.label ||
        (freeSolo && query === value?.trim())
      ) {
        return options;
      }
      return fuse.search(query).map((result) => result.item);
    }, [fuse, search, options, selectedOption, freeSolo, value]);

    const closeOptions = useCallback(() => {
      setIsOpen(false);
      setFocusedIndex(-1);
    }, []);

    // A free solo field keeps whatever the user typed, so leaving the field
    // without picking an option turns the search string into the value. Typing
    // the exact label of an option still counts as picking that option.
    const closeAndCommitSearch = useCallback(() => {
      if (freeSolo) {
        const typedOption = options.find(
          (op) => op.label === search && !op.disabled,
        );
        const nextValue = typedOption ? typedOption.value : search;
        if (nextValue !== value) {
          onValueChange(nextValue);
        }
      }
      closeOptions();
    }, [freeSolo, options, search, value, onValueChange, closeOptions]);

    const openOptions = useCallback(() => {
      if (disabled) {
        return;
      }
      setIsOpen(true);
      setFocusedIndex(
        selectedOption && !selectedOption.disabled
          ? matchingOptions.findIndex((op) => op.value === selectedOption.value)
          : -1,
      );
    }, [disabled, selectedOption, matchingOptions]);

    const handleChange = useCallback(
      (option: AutocompleteOption) => {
        if (option.disabled) {
          return;
        }
        setSearch(option.label);
        onValueChange(option.value);
        closeOptions();
      },
      [onValueChange, closeOptions],
    );

    // Returns the first option that can be picked when walking from `start` in
    // the given direction, or -1 when the list holds no such option.
    const findEnabledIndex = useCallback(
      (start: number, step: 1 | -1) => {
        for (let i = start; i >= 0 && i < matchingOptions.length; i += step) {
          if (!matchingOptions[i].disabled) {
            return i;
          }
        }
        return -1;
      },
      [matchingOptions],
    );

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        switch (event.key) {
          case 'ArrowDown':
            event.preventDefault();
            if (!isOpen) {
              openOptions();
              return;
            }
            setFocusedIndex((prev) => {
              const next = findEnabledIndex(prev + 1, 1);
              return next === -1 ? prev : next;
            });
            break;
          case 'ArrowUp':
            event.preventDefault();
            if (!isOpen) {
              openOptions();
              return;
            }
            setFocusedIndex((prev) => {
              const next =
                prev <= 0
                  ? findEnabledIndex(0, 1)
                  : findEnabledIndex(prev - 1, -1);
              return next === -1 ? prev : next;
            });
            break;
          case 'Home': {
            if (!isOpen) {
              return;
            }
            event.preventDefault();
            const first = findEnabledIndex(0, 1);
            if (first !== -1) {
              setFocusedIndex(first);
            }
            break;
          }
          case 'End': {
            if (!isOpen) {
              return;
            }
            event.preventDefault();
            const last = findEnabledIndex(matchingOptions.length - 1, -1);
            if (last !== -1) {
              setFocusedIndex(last);
            }
            break;
          }
          case 'Enter':
            event.preventDefault();
            if (!isOpen) {
              openOptions();
              return;
            }
            if (focusedIndex >= 0 && focusedIndex < matchingOptions.length) {
              handleChange(matchingOptions[focusedIndex]);
            } else {
              closeAndCommitSearch();
            }
            break;
          case 'Escape':
            event.preventDefault();
            closeOptions();
            break;
          case 'Tab':
            closeAndCommitSearch();
            break;
        }
      },
      [
        isOpen,
        focusedIndex,
        matchingOptions,
        findEnabledIndex,
        openOptions,
        closeOptions,
        closeAndCommitSearch,
        handleChange,
      ],
    );

    useClickOutside([wrapperRef, optionsRef], !isOpen, () => {
      closeAndCommitSearch();
    });

    // The search field mirrors the selected option while the list is closed so
    // an abandoned search never lingers in the field. A free solo field falls
    // back to the raw value since that value need not match an option.
    useEffect(() => {
      if (isOpen) {
        return;
      }
      setSearch(selectedOption?.label ?? (freeSolo ? (value ?? '') : ''));
    }, [selectedOption, isOpen, freeSolo, value]);

    useEffect(() => {
      if (focusedIndex < 0) {
        return;
      }
      optionRefs.current[focusedIndex]?.scrollIntoView?.({ block: 'nearest' });
    }, [focusedIndex]);

    return (
      <div className="relative flex w-full" ref={wrapperRef}>
        <div aria-live="polite" aria-atomic="true" className="sr-only">
          {isOpen && search && (
            <FormattedMessage
              defaultMessage="{count, plural, =0 {Inga resultat hittade} one {Ett resultat hittades} other {{count} resultat hittades}}"
              values={{ count: matchingOptions.length }}
            />
          )}
        </div>
        <Input
          {...props}
          ref={setInputRef}
          id={id}
          type="text"
          label={label ?? ''}
          placeholder={placeholder}
          helperText={helperText}
          helperTextReserveSpace={helperTextReserveSpace}
          error={error}
          disabled={disabled}
          className={className}
          value={search}
          autoComplete="off"
          startAdornment={startAdornment}
          endAdornment={
            endAdornment ?? (
              <IconChevronDown
                className={cn(
                  'size-4 min-w-4 transition-transform',
                  isOpen && 'rotate-180',
                )}
              />
            )
          }
          onChange={(event) => {
            setSearch(event.target.value);
            setFocusedIndex(-1);
            onSearchChange?.(event.target.value);
            if (!isOpen) {
              setIsOpen(true);
            }
          }}
          onFocus={() => {
            openOptions();
            inputRef.current?.select();
          }}
          onKeyDown={handleKeyDown}
          role="combobox"
          aria-autocomplete="list"
          aria-controls={`${id}-listbox`}
          aria-expanded={isOpen}
          aria-activedescendant={
            focusedIndex >= 0 && matchingOptions[focusedIndex]
              ? `${id}-option-${focusedIndex}`
              : undefined
          }
        />
        {isOpen && (
          <div
            ref={optionsRef}
            id={`${id}-listbox`}
            role="listbox"
            aria-label={label || placeholder}
            className={cn(
              'absolute z-50 flex w-full flex-col overflow-y-auto overflow-x-hidden overscroll-contain rounded-md border border-background-300 bg-background-100 p-2 shadow-lg',
              placeAbove ? 'bottom-full' : 'top-full',
            )}
            style={{
              height: optionsContainerHeight,
              maxHeight: maxListHeight ?? MAX_OPTIONS_HEIGHT,
            }}
          >
            {matchingOptions.length === 0 && (
              <span className="text-sm italic text-text-600">
                <FormattedMessage
                  id="autocomplete.no_results"
                  defaultMessage="Inga resultat hittade"
                />
              </span>
            )}
            {matchingOptions.map((op, index) => {
              const isSelected = op.value === value;
              const isFocused = index === focusedIndex;

              return (
                <div
                  key={op.value}
                  id={`${id}-option-${index}`}
                  ref={(el) => {
                    optionRefs.current[index] = el;
                  }}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={op.disabled || undefined}
                  // Keeps focus in the search field when picking an option.
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => handleChange(op)}
                  className={cn(
                    'flex cursor-pointer items-center justify-between gap-2 rounded-md px-2 py-1.5 text-text-900 hover:bg-primary-300',
                    isSelected && 'bg-primary-500 text-contrast-primary',
                    isFocused && 'ring-2 ring-inset ring-primary-600',
                    op.disabled &&
                      'cursor-default text-text-700 hover:bg-transparent',
                  )}
                >
                  <div className="flex min-w-0 flex-col leading-5">
                    <span className="truncate">{op.label}</span>
                    {op.description && (
                      <span
                        className={cn(
                          'truncate text-sm leading-4 text-text-800',
                          isSelected && 'text-contrast-primary opacity-80',
                          op.disabled && 'text-text-700',
                        )}
                      >
                        {op.description}
                      </span>
                    )}
                  </div>
                  {op.endContent}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  },
);
Autocomplete.displayName = 'Autocomplete';

export { Autocomplete };
