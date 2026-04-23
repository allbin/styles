import * as React from 'react';
import { Spinner } from '../spinner';
import Button from './Button';
import type { LinkProps } from '@tanstack/react-router';

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | null;
  variant?: 'outline' | 'filled' | 'ghost' | null;
  round?: boolean;
  loading?: boolean;
  color?: 'red' | 'green' | 'blue' | 'yellow';
  asChild?: boolean;
  href?: string;
  to?: LinkProps['to'];
  params?: LinkProps['params'];
  search?: LinkProps['search'];
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      color,
      icon,
      size,
      variant,
      round = false,
      loading,
      asChild = false,
      href,
      to,
      params,
      search,
      ...props
    },
    ref,
  ) => {
    return (
      <Button
        ref={ref}
        size={size}
        variant={variant}
        className={className}
        color={color}
        icon={true}
        round={round}
        asChild={asChild}
        href={href}
        to={to}
        params={params}
        search={search}
        {...props}
      >
        {loading && <Spinner />}
        {!loading && icon}
      </Button>
    );
  },
);

IconButton.displayName = 'IconButton';
export default IconButton;
