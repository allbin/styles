import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../helpers/classnames';
import { Spinner } from '../spinner';
import { Tooltip } from 'react-tooltip';
import { Link, type LinkProps } from '@tanstack/react-router';

const buttonVariants = cva(
  [
    'flex',
    'font-medium',
    'items-center',
    'justify-center',
    'gap-2',
    'border',
    'w-max',
    'text-text-950',
    'border-background-400',
    'transition-colors',
    'rounded-md',
    'disabled:active:opacity-100',
    'disabled:pointer-events-none',
    'active:opacity-80',
    'hover:bg-background-300',
    'focus:outline-none',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-inset',
    'focus-visible:ring-primary-600',
    'focus-visible:shadow-[0_0_0_3px_inset_white]',
    'h-min',
    // 'whitespace-nowrap',
  ],
  {
    variants: {
      variant: {
        filled: ['text-contrast-primary', 'border-primary-500'],
        outline: ['disabled:border-background-200', 'disabled:text-text-700'],
        ghost: [
          'border-transparent',
          'bg-transparent',
          'hover:bg-background-300',
        ],
      },
      size: {
        sm: ['px-3', 'py-0', 'text-base'],
        md: ['px-4', 'py-1', 'text-base'],
        lg: ['px-5', 'py-2', 'text-lg'],
        xl: ['px-6', 'py-3', 'text-xl'],
      },
      color: {
        base: [],
        red: ['border-red-800', 'hover:bg-red-200'],
        green: ['border-green-600', 'hover:bg-green-200'],
        blue: ['border-blue-600', 'hover:bg-blue-200'],
        yellow: ['border-yellow-500', 'hover:bg-yellow-200'],
      },
      icon: {
        true: ['aspect-square'],
        false: [],
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
          'hover:bg-primary-400',
          'hover:border-primary-400',
          'disabled:bg-background-500',
          'disabled:text-text-700',
          'disabled:border-none',
        ],
      },
      {
        color: 'red',
        variant: 'outline',
        class: ['border-red-800', 'text-red-800', 'focus-visible:bg-red-200'],
      },
      {
        color: 'red',
        variant: 'filled',
        class: [
          'bg-red-600',
          'border-red-600',
          'text-contrast-red',
          'hover:bg-red-600',
          'disabled:bg-red-800/60',
          'disabled:text-red-900',
        ],
      },
      {
        color: 'red',
        variant: 'ghost',
        class: ['border-transparent', 'focus-visible:bg-red-200'],
      },
      {
        color: 'green',
        variant: 'outline',
        class: [
          'border-green-500',
          'text-green-500',
          'focus-visible:bg-green-200',
        ],
      },
      {
        color: 'green',
        variant: 'filled',
        class: [
          'bg-green-600',
          'border-green-600',
          'text-contrast-green',
          'hover:bg-green-400',
          'disabled:bg-green-800/60',
          'disabled:text-green-700',
        ],
      },
      {
        color: 'green',
        variant: 'ghost',
        class: ['border-transparent', 'focus-visible:bg-green-200'],
      },
      {
        color: 'blue',
        variant: 'outline',
        class: [
          'border-blue-500',
          'text-blue-500',
          'focus-visible:bg-blue-200',
        ],
      },
      {
        color: 'blue',
        variant: 'filled',
        class: [
          'bg-blue-600',
          'border-blue-600',
          'text-contrast-blue',
          'hover:bg-blue-400',
          'disabled:bg-blue-800/60',
          'disabled:text-blue-700',
        ],
      },
      {
        color: 'blue',
        variant: 'ghost',
        class: ['border-transparent', 'focus-visible:bg-blue-200'],
      },
      {
        color: 'yellow',
        variant: 'outline',
        class: [
          'border-yellow-500',
          'text-yellow-500',
          'focus-visible:bg-yellow-200',
        ],
      },
      {
        color: 'yellow',
        variant: 'filled',
        class: [
          'bg-yellow-500',
          'border-yellow-500',
          'text-contrast-yellow',
          'hover:bg-yellow-400',
          'disabled:bg-yellow-800/60',
          'disabled:text-yellow-700',
        ],
      },
      {
        color: 'yellow',
        variant: 'ghost',
        class: ['border-transparent', 'focus-visible:bg-yellow-200'],
      },
      {
        size: 'sm',
        hasStartEndIcon: true,
        class: ['[&>*:first-child]:size-4'],
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
        class: ['p-1', '[&>*:first-child]:size-4'],
      },
      {
        size: 'md',
        icon: true,
        class: ['p-1.5', '[&>*:first-child]:size-5'],
      },
      {
        size: 'lg',
        icon: true,
        class: ['p-2', '[&>*:first-child]:size-7'],
      },
      {
        size: 'xl',
        icon: true,
        class: ['p-2.5', '[&>*:first-child]:size-8'],
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

export interface ButtonProps
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
  href?: string;
  target?: string;
  to?: LinkProps['to'];
  params?: LinkProps['params'];
  search?: LinkProps['search'];
}

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
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
      href,
      to,
      params,
      search,
      target,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : to ? Link : href ? 'a' : 'button';
    const isAnchor = !!href && !asChild && !to;
    const isLink = !!to && !asChild;

    const buttonClassNames = cn(
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
    );

    const content = (
      <>
        {id ? <Tooltip id={id} delayShow={300} delayHide={1} /> : null}
        {loading && <Spinner style={{ color: 'unset' }} className="size-5" />}
        {!loading && startIcon}
        {props.children}
        {!loading && endIcon}
      </>
    );

    if (isLink) {
      return (
        // @ts-expect-error - Polymorphic component with dynamic types
        <Link
          to={to}
          params={params}
          search={search}
          className={buttonClassNames}
          id={id}
          data-tooltip-id={id}
          data-tooltip-content={toolTip}
          aria-busy={loading ? 'true' : undefined}
          aria-disabled={loading || props.disabled}
          {...props}
        >
          {content}
        </Link>
      );
    }

    return (
      // @ts-expect-error - Polymorphic component with dynamic types
      <Comp
        className={buttonClassNames}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        {...(isAnchor ? { href, target } : { type })}
        id={id}
        data-tooltip-id={id}
        data-tooltip-content={toolTip}
        aria-busy={loading ? 'true' : undefined}
        aria-disabled={loading || props.disabled}
        disabled={loading || props.disabled}
        {...props}
      >
        {content}
      </Comp>
    );
  },
);

Button.displayName = 'Button';
export default Button;
