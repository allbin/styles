import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../helpers/classnames';
import { Spinner } from '../spinner';
import { Tooltip } from 'react-tooltip';

const buttonVariants = cva(
  [
    'flex',
    'font-medium',
    'items-center',
    'justify-center',
    'gap-2',
    'w-fit',
    'border',
    'border-primary-600',
    'transition-colors',
    'rounded-md',
    'disabled:active:opacity-100',
    'disabled:pointer-events-none',
    'active:opacity-80',
    'hover:bg-primary-200',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-primary-600',
  ],
  {
    variants: {
      variant: {
        filled: ['text-contrast-primary', 'border-primary-500'],
        outline: ['disabled:border-gray-400', 'disabled:text-gray-400'],
        ghost: [
          'border-none',
          'bg-transparent',
          'hover:bg-primary-500',
          'hover:text-contrast-primary',
        ],
      },
      size: {
        sm: ['h-[24px]', 'text-sm'],
        md: ['h-[36px]', 'text-base'],
        lg: ['h-[48px]', 'text-lg'],
        xl: ['h-[60px]', 'text-xl'],
      },
      color: {
        base: [],
        red: ['border-red-600', 'hover:bg-red-200'],
        green: ['border-green-600', 'hover:bg-green-200'],
        blue: ['border-blue-600', 'hover:bg-blue-200'],
        yellow: ['border-yellow-600', 'hover:bg-yellow-200'],
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
        true: [],
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
        class: ['border-red-500', 'text-red-500'],
      },
      {
        color: 'red',
        variant: 'filled',
        class: [
          'bg-red-600',
          'text-contrast-red',
          'hover:bg-red-400',
          'disabled:bg-red-800/60',
          'disabled:text-red-700',
        ],
      },
      {
        color: 'green',
        variant: 'outline',
        class: ['border-green-500', 'text-green-500'],
      },
      {
        color: 'green',
        variant: 'filled',
        class: [
          'bg-green-600',
          'text-contrast-green',
          'hover:bg-green-400',
          'disabled:bg-green-800/60',
          'disabled:text-green-700',
        ],
      },
      {
        color: 'blue',
        variant: 'outline',
        class: ['border-blue-500', 'text-blue-500'],
      },
      {
        color: 'blue',
        variant: 'filled',
        class: [
          'bg-blue-600',
          'text-contrast-blue',
          'hover:bg-blue-400',
          'disabled:bg-blue-800/60',
          'disabled:text-blue-700',
        ],
      },
      {
        color: 'yellow',
        variant: 'outline',
        class: ['border-yellow-500', 'text-yellow-500'],
      },
      {
        color: 'yellow',
        variant: 'filled',
        class: [
          'bg-yellow-600',
          'text-contrast-yellow',
          'hover:bg-yellow-400',
          'disabled:bg-yellow-800/60',
          'disabled:text-yellow-700',
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
  toolTip?: string;
  id?: string;
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
      toolTip,
      id,
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
        data-tooltip-id={id}
        data-tooltip-content={toolTip}
        {...props}
      >
        {id ? <Tooltip id={id} delayShow={300} delayHide={1} /> : null}
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
