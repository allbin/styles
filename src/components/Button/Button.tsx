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
      color: {
        base: [],
        red: [],
        green: [],
      },
    },
    compoundVariants: [
      {
        color: 'red',
        variant: 'outline',
        class: [
          'border-red-700',
          'text-red-700',
          'hover:bg-red-200',
          'hover:text-red-600',
        ],
      },
      {
        color: 'red',
        variant: 'filled',
        class: [
          'bg-red-700',
          'text-text-50',
          'hover:border-red-800',
          'hover:bg-red-600',
          'hover:text-red-50',
          'disabled:border-red-900/80',
          'disabled:bg-red-900/60',
          'disabled:text-red-900',
          'disabled:hover:border-red-900/80',
          'disabled:hover:bg-red-900/60',
        ],
      },
      {
        color: 'green',
        variant: 'outline',
        class: [
          'border-green-700',
          'text-green-700',
          'hover:bg-green-200',
          'hover:text-green-600',
        ],
      },
      {
        color: 'green',
        variant: 'filled',
        class: [
          'bg-green-700',
          'text-text-50',
          'hover:border-green-800',
          'hover:bg-green-600',
          'hover:text-green-50',
          'disabled:border-green-900/80',
          'disabled:bg-green-900/60',
          'disabled:text-green-900',
          'disabled:hover:border-green-900/80',
          'disabled:hover:bg-green-900/60',
        ],
      },
    ],
    defaultVariants: {
      variant: 'outline',
      size: 'md',
      color: 'base',
    },
  },
);

export const iconSizes = {
  sm: 'size-3',
  md: 'size-5',
  lg: 'size-6',
  xl: 'size-7',
};

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  round?: boolean;
  icon?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      color,
      icon,
      startIcon,
      endIcon,
      type = 'button',
      loading = false,
      round,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    const buttonSize = (size && iconSizes[size]) || iconSizes.md;

    const roundClasses = round ? 'rounded-full' : 'rounded-md';
    const iconClasses = icon
      ? ['aspect-square', 'rounded-full', 'p-0']
      : ['px-5', 'py-1'];

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, color, className }),
          roundClasses,
          iconClasses,
        )}
        ref={ref}
        type={type}
        {...props}
      >
        {loading && <Spinner className={buttonSize} />}
        {!loading && startIcon && (
          <span className={buttonSize}>{startIcon}</span>
        )}
        {props.children}
        {!loading && endIcon && <span className={buttonSize}>{endIcon}</span>}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export default Button;
