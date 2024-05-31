import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../helpers/classnames';
import { Spinner } from '../spinner';

const buttonVariants = cva(
  [
    'flex',
    'relative',
    'font-medium',
    'items-center',
    'justify-center',
    'gap-2',
    'border',
    'transition-colors',
    'rounded-md',
    'disabled:border-gray-400',
    'disabled:bg-primary-300',
    'disabled:text-primary-600',
    'disabled:active:opacity-100',
    'disabled:pointer-events-none',
    'active:opacity-80',
    'after:content-[""]',
    'after:absolute',
    'after:top-0',
    'after:left-0',
    'after:w-full',
    'after:h-full',
    'after:rounded-md',
    'after:bg-black',
    'after:opacity-0',
    'hover:after:opacity-10',
    'active:after:opacity-30',
    'disabled:after:opacity-50',
    'disabled:after:mix-blend-difference',
  ],
  {
    variants: {
      variant: {
        filled: ['border-primary-500', 'bg-primary-500', 'text-text-50'],
        outline: ['border-primary-600', 'bg-transparent'],
        ghost: ['border-none', 'bg-transparent'],
      },
      size: {
        sm: ['h-[24px]', 'text-sm'],
        md: ['h-[36px]', 'text-base'],
        lg: ['h-[48px]', 'text-lg'],
        xl: ['h-[60px]', 'text-xl'],
      },
      color: {
        base: [],
        red: ['border-red-700', 'text-red-700'],
        green: ['border-green-700', 'text-green-700'],
      },
      icon: {
        true: ['aspect-square', 'rounded-full', 'after:rounded-full', 'p-0'],
        false: ['px-5', 'py-1'],
      },
      round: {
        true: ['rounded-full', 'after:rounded-full'],
        false: [],
      },
      hasStartEndIcon: {
        true: [],
        false: [],
      },
    },
    compoundVariants: [
      {
        color: 'red',
        variant: 'outline',
        class: ['border-red-700', 'text-red-700'],
      },
      {
        color: 'red',
        variant: 'filled',
        class: ['bg-red-700', 'text-text-50'],
      },
      {
        color: 'green',
        variant: 'outline',
        class: ['border-green-700', 'text-green-700'],
      },
      {
        color: 'green',
        variant: 'filled',
        class: ['bg-green-700', 'text-text-50'],
      },
      {
        size: 'sm',
        hasStartEndIcon: true,
        class: ['[&>*:first-child]:size-3'],
      },
      {
        size: 'md',
        hasStartEndIcon: true,
        class: ['[&>*:first-child]:size-5'],
      },
      {
        size: 'lg',
        hasStartEndIcon: true,
        class: ['[&>*:first-child]:size-6'],
      },
      {
        size: 'xl',
        hasStartEndIcon: true,
        class: ['[&>*:first-child]:size-7'],
      },
      {
        size: 'sm',
        icon: true,
        class: ['[&>*:first-child]:size-3'],
      },
      {
        size: 'md',
        icon: true,
        class: ['[&>*:first-child]:size-5'],
      },
      {
        size: 'lg',
        icon: true,
        class: ['[&>*:first-child]:size-6'],
      },
      {
        size: 'xl',
        icon: true,
        class: ['[&>*:first-child]:size-8'],
      },
    ],
    defaultVariants: {
      variant: 'outline',
      size: 'md',
      color: 'base',
      round: false,
      icon: false,
      hasStartEndIcon: false,
    },
  },
);

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
      size = 'md',
      color,
      icon = false,
      startIcon,
      endIcon,
      type = 'button',
      loading = false,
      round = false,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const hasStartEndIcon = !!startIcon || !!endIcon;

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            color,
            className,
            icon,
            round,
            hasStartEndIcon,
          }),
        )}
        ref={ref}
        type={type}
        {...props}
      >
        {loading && <Spinner />}
        {!loading && startIcon && <span>{startIcon}</span>}
        {props.children}
        {!loading && endIcon && <span>{endIcon}</span>}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export default Button;
