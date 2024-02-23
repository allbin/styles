import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '../../helpers/classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  tooltip?: string;
  filled?: boolean;
  red?: true;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  tooltip,
  className,
  filled,
  children,
  red,
  ...props
}) => {
  return (
    <button
      onClick={() => onClick?.()}
      data-tooltip-id="button-tooltip"
      data-tooltip-content={tooltip}
      className={cn(
        'flex min-h-[36px] items-center justify-center gap-2 rounded-md border border-primary-600 px-5 py-1 font-medium transition-colors hover:bg-primary-200 active:opacity-85 disabled:border-gray-400 disabled:bg-transparent disabled:text-gray-400',
        red &&
          'border-red-700 text-red-800 hover:bg-red-500/50 hover:text-red-600',
        filled &&
          'border-primary-500 bg-primary-500 text-text-50 hover:border-primary-500 hover:bg-primary-700 disabled:border-primary-300 disabled:bg-primary-300 disabled:text-text-700 disabled:hover:border-primary-300 disabled:hover:bg-primary-300',
        filled &&
          red &&
          'border-red-700 bg-red-700 text-red-50 hover:border-red-800 hover:bg-red-600 hover:text-red-50 disabled:border-red-900/80 disabled:bg-red-900/80 disabled:text-red-900 disabled:hover:border-red-900/80 disabled:hover:bg-red-900/80',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
