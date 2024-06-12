import * as React from 'react';
import { useState, useMemo } from 'react';
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/24/solid';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../helpers/classnames';
import { Slot } from '@radix-ui/react-slot';
import { Tooltip } from 'react-tooltip';
import useOnClickOutside from 'react-cool-onclickoutside';

const dropdownVariants = cva(
  [
    'flex',
    'relative',
    'font-medium',
    'items-center',
    'justify-between',
    'h-[36px]',
    'px-2',
    'border',
    'transition-colors',
    'rounded-md',
    'active:opacity-80',
    'cursor-pointer',
  ],
  {
    variants: {
      variant: {
        default: ['border-primary-600', 'hover:bg-primary-200'],
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
      color: {
        default: '',
        red: '',
        green: '',
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
}

interface CategoryOptionType extends OptionsBaseProps {
  id?: never;
  label?: never;
  category: string;
  disabled?: never;
  description?: never;
}

export type OptionsProps = OptionsType | CategoryOptionType;

interface DropdownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dropdownVariants> {
  asChild?: boolean;
  id: string;
  placeholder: string;
  disabled?: boolean;
  value?: OptionsType;
  options: OptionsProps[];
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  onValueChange?: (value: OptionsType) => void;
}

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      className,
      variant,
      id,
      placeholder,
      options,
      onChange,
      value,
      label,
      errorMessage,
      error = false,
      helperText,
      disabled = false,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'div';

    const [isOpen, setIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<string>();
    const [selectedValue, setSelectedValue] = useState<OptionsType>();

    useMemo(() => {
      if (value) {
        setSelectedValue(value);
        setSelectedId(value.id);
      }
    }, [value]);

    const handleChange = (value: OptionsType) => {
      const isSelected = selectedId === value.id;
      setSelectedId(isSelected ? undefined : value.id);
      setSelectedValue(isSelected ? undefined : value);
      setIsOpen(false);
      console.log('From component: ', value);
    };

    const optionsRef = useOnClickOutside(() => {
      setIsOpen(false);
    });

    return (
      <div className="relative">
        {id ? <Tooltip id={id} delayShow={300} delayHide={1} /> : null}
        {label && (
          <label
            htmlFor={id}
            className="absolute left-0 top-[-24px] mb-1 block pl-2 text-sm font-medium leading-6 text-primary-900"
          >
            {label}
          </label>
        )}
        <Comp
          data-tooltip-id={id}
          data-tooltip-content={
            error && errorMessage ? errorMessage : undefined
          }
          data-tooltip-variant={'error'}
          className={cn(
            dropdownVariants({ variant, disabled, error }),
            className,
          )}
          ref={ref}
          onClick={() => {
            !disabled && setIsOpen(!isOpen);
          }}
          onChange={onChange}
          {...props}
        >
          {selectedValue ? (
            selectedValue.label
          ) : (
            <span className="italic">{placeholder}</span>
          )}
          <ChevronDownIcon className="size-4" />
        </Comp>
        {helperText && (
          <span className="absolute bottom-[-24px] mt-1 pl-2 text-sm text-text-700">
            {helperText}
          </span>
        )}
        {isOpen && (
          <div
            ref={optionsRef}
            className={cn(
              [
                'absolute',
                'top-10',
                'z-50',
                'flex',
                'w-[200px]',
                'cursor-pointer',
                'flex-col',
                'gap-2',
                'rounded-md',
                'border',
                'border-primary-600',
                'bg-primary-100',
                'p-2',
              ],
              className,
            )}
          >
            {options &&
              options.map((opt) => (
                <div
                  onClick={() =>
                    opt.category ? null : handleChange(opt as OptionsType)
                  }
                  className={cn(
                    selectedId && selectedId === opt.id ? 'bg-primary-200' : '',
                    'flex items-center rounded-md p-2 hover:bg-primary-200',
                    opt.category &&
                      'mt-2 border-b text-sm font-semibold hover:bg-transparent',
                    opt.color === 'red' && optionsColor.red,
                    opt.color === 'green' && optionsColor.green,
                  )}
                  key={opt.id}
                >
                  {selectedId && selectedId === opt.id && (
                    <CheckIcon className="mr-2 size-4" />
                  )}
                  {opt.label || opt.category}
                </div>
              ))}
          </div>
        )}
      </div>
    );
  },
);

export { Dropdown };
