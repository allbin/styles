import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../helpers/classnames';
//import { Tooltip } from 'react-tooltip';

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

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  invalid?: boolean;
  placeholder?: string;
}

const ShadInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, invalid, placeholder, ...props }, ref) => {
    const invalidClass = invalid
      ? [
          'text-red-7000',
          'ring-1',
          'ring-red-600',
          'hover:ring-red-800',
          'focus:outline-red-600',
        ]
      : '';
    console.log(invalid);
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant }), invalidClass, className)}
        ref={ref}
        placeholder={placeholder}
        {...props}
      />
    );
  },
);
ShadInput.displayName = 'Input';

export { ShadInput };
