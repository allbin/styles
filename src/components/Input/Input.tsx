import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../helpers/classnames';
import { Tooltip } from 'react-tooltip';

const inputVariants = cva(
  [
    'block',
    'w-full',
    'rounded-md',
    'border-0',
    'px-2',
    'py-1.5',
    'focus:ring-0',
    'focus:outline-primary-500',
    'disabled:bg-background-300/50',
    'disabled:text-text-700/50',
    'disabled:ring-primary-300',
    'bg-background-50',
  ],
  {
    variants: {
      variant: {
        outline: [
          'border-secondary-500',
          'ring-1',
          'ring-inset',
          'ring-secondary-300',
          'placeholder:text-text-300',
          'hover:ring-primary-600',
        ],
        error: [
          'text-red-700',
          'ring-1',
          'ring-red-600',
          'hover:ring-red-800',
          'focus:outline-red-600',
        ],
      },
      adornment: {
        start: ['pl-10'],
        end: ['pr-10'],
      },
    },
    defaultVariants: {
      variant: 'outline',
    },
  },
);

export interface BaseInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  error?: string;
  placeholder?: string;
  helperText?: string;
  toolTip?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

type InputTypesProps =
  | {
      type?: 'text' | 'email' | 'tel';
      value?: string;
      min?: never;
      max?: never;
    }
  | { type: 'number'; value?: number; min?: number; max?: number };

type InputIdLabelProps =
  | { id?: string; label?: never }
  | { id: string; label: string };

type InputProps = BaseInputProps & InputTypesProps & InputIdLabelProps;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      className,
      type = 'text',
      value,
      min,
      max,
      variant,
      toolTip,
      error,
      label,
      placeholder,
      helperText,
      startAdornment,
      endAdornment,
      onChange,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className="group relative grow"
        data-tooltip-id={id}
        data-tooltip-content={error ? error : toolTip}
        data-tooltip-variant={error ? 'error' : 'dark'}
      >
        {id ? <Tooltip id={id} delayShow={300} delayHide={1} /> : null}
        {label && (
          <label
            htmlFor={id}
            className="absolute left-0 top-[-24px] mb-1 block text-sm font-medium leading-6 text-primary-900"
          >
            {label}
          </label>
        )}
        {helperText && (
          <span className="absolute bottom-[-24px] mt-1 text-sm text-text-700">
            {helperText}
          </span>
        )}
        <div className="relative grow rounded-md shadow-sm">
          {startAdornment && (
            <div
              className={cn([
                'absolute',
                'inset-y-0',
                'left-0',
                'flex',
                'items-center',
                'pl-3',
                'text-primary-500',
                'group-focus-within:text-text-700',
                'group-hover:text-primary-700',
              ])}
            >
              {startAdornment}
            </div>
          )}
          <input
            type={type}
            value={value}
            className={cn(
              inputVariants({
                variant: error ? 'error' : variant,
              }),
              className,
              startAdornment && 'pl-10',
              endAdornment && 'pr-10',
            )}
            ref={ref}
            placeholder={placeholder}
            onChange={onChange}
            min={min}
            max={max}
            {...props}
          />
          {endAdornment && (
            <div
              className={cn([
                'absolute',
                'inset-y-0',
                'right-0',
                'flex',
                'items-center',
                'pr-3',
                'text-primary-500',
                'group-focus-within:text-text-700',
                'group-hover:text-primary-700',
              ])}
            >
              {endAdornment}
            </div>
          )}
        </div>
      </div>
    );
  },
);
Input.displayName = 'Input';

export default Input;
