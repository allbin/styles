import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '../../helpers/classnames';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  tooltip?: string;
  filled?: boolean;
  ghost?: boolean;
  red?: true;
  round?: boolean;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  tooltip,
  className,
  filled,
  children,
  ghost,
  red,
  round,
  ...props
}) => {
  return (
    <button
      onClick={() => onClick?.()}
      data-tooltip-id="button-tooltip"
      data-tooltip-content={tooltip}
      className={cn(
        'flex min-h-[36px] items-center justify-center gap-2 rounded-md border border-primary-600 px-5 py-1 font-medium transition-colors hover:bg-primary-200 active:opacity-80 disabled:border-gray-400 disabled:bg-transparent disabled:text-gray-400 disabled:active:opacity-100',
        ghost && 'border-none bg-transparent hover:bg-primary-100',
        red &&
          'border-red-700 text-red-800 hover:bg-red-400/20 hover:text-red-600',
        filled &&
          'border-primary-500 bg-primary-500 text-text-50 hover:border-primary-500 hover:bg-primary-700 disabled:border-primary-300 disabled:bg-primary-300 disabled:text-text-700 disabled:hover:border-primary-300 disabled:hover:bg-primary-300',
        filled &&
          red &&
          'border-red-700 bg-red-700 text-red-50 hover:border-red-800 hover:bg-red-600 hover:text-red-50 disabled:border-red-900/80 disabled:bg-red-900/60 disabled:text-red-900 disabled:hover:border-red-900/80 disabled:hover:bg-red-900/60',
        round && 'rounded-full',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
