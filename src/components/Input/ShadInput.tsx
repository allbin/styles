import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../helpers/classnames';

const inputVariants = cva('', {
  variants: {
    variant: {
      filled: 'bg-primary-200',
      outline: 'border-primary-600',
    },
  },
  defaultVariants: {
    variant: 'outline',
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const ShadInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
ShadInput.displayName = 'Input';

export { ShadInput };
