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
    'border-primary-600',
    'transition-colors',
    'rounded-md',
    'disabled:active:opacity-100',
    'disabled:pointer-events-none',
    'active:opacity-80',
    'hover:bg-primary-200',
  ],
  {
    variants: {
      variant: {
        filled: ['text-text-50', 'border-primary-500'],
        outline: ['disabled:border-gray-400', 'disabled:text-gray-400'],
        ghost: ['border-none', 'bg-transparent', 'hover:bg-transparent'],
      },
      size: {
        sm: ['h-[24px]', 'text-sm'],
        md: ['h-[36px]', 'text-base'],
        lg: ['h-[48px]', 'text-lg'],
        xl: ['h-[60px]', 'text-xl'],
      },
      color: {
        base: [],
        red: ['border-red-700', 'hover:bg-red-200'],
        green: ['border-green-700', 'hover:bg-green-200'],
      },
      icon: {
        true: ['aspect-square', 'p-0'],
        false: ['px-5', 'py-1'],
      },
      round: {
        true: ['rounded-full'],
        false: [],
      },
      hasStartEndIcon: {
        true: [],
        false: [],
      },
      hasColor: {
        true: ['text-text-50'],
        false: [],
      },
    },
    compoundVariants: [
      {
        color: 'base',
        variant: 'filled',
        class: [
          'bg-primary-500',
          'hover:bg-primary-700',
          'disabled:bg-primary-300',
          'disabled:text-text-700',
          'disabled:border-none',
        ],
      },
      {
        color: 'red',
        variant: 'outline',
        class: ['border-red-700', 'text-red-700'],
      },
      {
        color: 'red',
        variant: 'filled',
        class: [
          'bg-red-700',
          'hover:bg-red-600',
          'disabled:bg-red-900/60',
          'disabled:text-red-900',
        ],
      },
      {
        color: 'green',
        variant: 'outline',
        class: ['border-green-700', 'text-green-700'],
      },
      {
        color: 'green',
        variant: 'filled',
        class: [
          'bg-green-700',
          'hover:bg-green-600',
          'disabled:bg-green-900/60',
          'disabled:text-green-900',
        ],
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
        class: ['[&>*:first-child]:size-7'],
      },
      {
        size: 'xl',
        icon: true,
        class: ['[&>*:first-child]:size-9'],
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
            hasStartEndIcon: !!startIcon || !!endIcon,
            hasColor: !!color,
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
