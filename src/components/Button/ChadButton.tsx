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
    'rounded-md',
    'border',
    'px-5',
    'py-1',
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
        // icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'md',
    },
  },
);

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

    const getButtonSize = () => {
      const buttonClassNames = cn(buttonVariants({ variant, size, className }));

      return buttonClassNames.includes('text-sm')
        ? 'size-3'
        : buttonClassNames.includes('text-base')
          ? 'size-5'
          : buttonClassNames.includes('text-lg')
            ? 'size-6'
            : buttonClassNames.includes('text-xl')
              ? 'size-7'
              : 'size-5';
    };

    const buttonSize = getButtonSize();

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
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

export { ChadButton, buttonVariants };
