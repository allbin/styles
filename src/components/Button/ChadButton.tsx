import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../helpers/classnames';
import { Spinner } from '../spinner';

const buttonVariants = cva(
  [
    'flex',
    'font-medium',
    'items-center',
    'justify-center',
    'gap-2',
    'border',
    'transition-colors',
    'disabled:border-gray-400',
    'disabled:bg-transparent',
    'disabled:text-gray-400',
    'disabled:active:opacity-100',
  ],
  {
    variants: {
      variant: {
        filled: [
          'border-primary-500',
          'bg-primary-500',
          'text-text-50',
          'hover:border-primary-500',
          'hover:bg-primary-700',
          'disabled:border-primary-300',
          'disabled:bg-primary-300',
          'disabled:text-text-700',
          'disabled:hover:border-primary-300',
          'disabled:hover:bg-primary-300',
        ],
        outline: [
          'border-primary-600',
          'hover:bg-primary-200',
          'active:opacity-80',
        ],
        ghost: ['border-none', 'bg-transparent', 'hover:bg-primary-100'],
      },
      size: {
        sm: ['h-[24px]', 'text-sm'],
        md: ['h-[36px]', 'text-base'],
        lg: ['h-[48px]', 'text-lg'],
        xl: ['h-[60px]', 'text-xl'],
      },
      use: {
        standard: ['px-5', 'py-1', 'rounded-md'],
        icon: ['px-0', 'py-0', 'aspect-square', 'rounded-full'],
      },
    },
    defaultVariants: {
      use: 'standard',
      variant: 'outline',
      size: 'md',
    },
  },
);

const iconSizes = {
  sm: 'size-3',
  md: 'size-5',
  lg: 'size-6',
  xl: 'size-7',
};

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
}

const ChadButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      use,
      variant,
      size,
      startIcon,
      endIcon,
      loading = false,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    const buttonSize = (size && iconSizes[size]) || iconSizes.md;

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, use, className }))}
        ref={ref}
        {...props}
      >
        {loading && <Spinner className={`${buttonSize}`} />}
        {!loading && startIcon && (
          <span className={`${buttonSize}`}>{startIcon}</span>
        )}
        {props.children}
        {!loading && endIcon && (
          <span className={`${buttonSize}`}>{endIcon}</span>
        )}
      </Comp>
    );
  },
);
ChadButton.displayName = 'ChadButton';

export { ChadButton, buttonVariants, iconSizes };