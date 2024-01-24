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
      onClick={() => onClick && onClick()}
      data-tooltip-id="button-tooltip"
      data-tooltip-content={tooltip}
      className={cn(
        'flex min-h-[36px] items-center justify-center gap-2 rounded border border-primary-600 px-4 py-1 font-medium hover:bg-primary-200 disabled:border-gray-400 disabled:bg-transparent disabled:text-opacity-70 disabled:hover:bg-transparent',
        red && 'border-red-400 text-red-800 hover:bg-red-200',
        filled &&
          'disabled:bg-primary-90 border-primary-600 bg-primary-600 text-text-50 hover:border-primary-500 hover:bg-primary-700 disabled:hover:border-primary-600 disabled:hover:bg-primary-600',
        filled &&
          red &&
          'border-orange-700 bg-orange-700 hover:border-red-400 hover:bg-orange-800 disabled:border-orange-700 disabled:bg-orange-700 disabled:hover:border-orange-700 disabled:hover:bg-orange-700',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
