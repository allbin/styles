import React from 'react';
import { cn } from '../helpers/classnames';
import { Tooltip } from 'react-tooltip';

interface InputProps {
  id: string;
  label?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  invalid?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  disabled,
  onChange,
  value,
  placeholder,
  icon,
  invalid,
}) => {
  return (
    <div className="relative grow">
      {label && (
        <label
          htmlFor={id}
          className="mb-1 block text-sm font-medium leading-6 text-primary-900"
        >
          {label}
        </label>
      )}
      <div className="relative grow rounded-md shadow-sm">
        {icon && (
          <div
            className={cn(
              'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-primary-500',
              invalid && 'text-red-700',
            )}
          >
            {icon}
          </div>
        )}
        <input
          id={id}
          disabled={disabled}
          className={cn(
            'block w-full rounded-md border-0 bg-background-50 py-1.5 pl-2 ring-1 ring-inset ring-secondary-300 placeholder:text-text-400 focus:ring-0 focus:ring-accent-600 disabled:bg-background-300/50',
            invalid && 'text-red-700 ring-red-600 focus:ring-red-600',
            icon && 'pl-10',
          )}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      {invalid && (
        <Tooltip anchorSelect={'#' + id} variant="error">
          {invalid}
        </Tooltip>
      )}
    </div>
  );
};

export default Input;
