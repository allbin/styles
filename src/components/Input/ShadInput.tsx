import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../helpers/classnames';
// import { Tooltip } from 'react-tooltip';

const inputVariants = cva(
  [
    'block w-full',
    'rounded-md',
    'border-0',
    'border-secondary-500',
    'bg-background-50',
    'px-2',
    'py-1.5',
    'ring-1',
    'ring-inset',
    'ring-secondary-300',
    'placeholder:text-text-700',
    'hover:ring-primary-600',
    'focus:ring-0',
    'disabled:bg-background-300/50',
    'disabled:text-text-700/50',
    'disabled:ring-primary-300',
  ],
  {
    variants: {
      variant: {
        outline: '',
      },
    },
    defaultVariants: {
      variant: 'outline',
    },
  },
);

const inputClasses = {
  invalid: [
    'text-red-7000',
    'ring-1',
    'ring-red-600',
    'hover:ring-red-800',
    'focus:outline-red-600',
  ],
  startAdornment: ['pl-10'],
  endAdornment: ['pr-10'],
};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  invalid?: boolean;
  placeholder?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const ShadInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      variant,
      invalid,
      placeholder,
      startAdornment,
      endAdornment,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="group relative grow">
        <div className="relative grow rounded-md shadow-sm">
          {startAdornment && (
            <div
              className={cn([
                'pointer-events-none',
                'absolute',
                'inset-y-0',
                'left-0',
                'flex',
                'items-center',
                'pl-3',
                'text-secondary-500',
                'group-focus-within:text-text-7000',
                'group-hover:text-primary-700',
              ])}
            >
              {startAdornment}
            </div>
          )}
          <input
            type={type}
            className={cn(
              inputVariants({ variant }),
              invalid && inputClasses.invalid,
              startAdornment && inputClasses.startAdornment,
              endAdornment && inputClasses.endAdornment,
              className,
            )}
            ref={ref}
            placeholder={placeholder}
            {...props}
          />
          {endAdornment && (
            <div
              className={cn([
                'pointer-events-none',
                'absolute',
                'inset-y-0',
                'right-0',
                'flex',
                'items-center',
                'pr-3',
                'text-secondary-500',
                'group-focus-within:text-text-7000',
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
ShadInput.displayName = 'Input';

export { ShadInput };
