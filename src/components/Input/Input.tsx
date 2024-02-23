import React from 'react';
import { cn } from '../../helpers/classnames';
import { Tooltip } from 'react-tooltip';

interface InputProps {
  id: string;
  label?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  tooltip?: string;
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
  tooltip,
  invalid,
}) => {
  return (
    <div
      className="group relative grow"
      data-tooltip-id={id}
      data-tooltip-content={invalid ?? tooltip}
      data-tooltip-variant={invalid ? 'error' : undefined}
    >
      {id ? <Tooltip id={id} delayShow={300} delayHide={1} /> : null}
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
              'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-secondary-500 group-focus-within:text-text-700 group-hover:text-primary-700',
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
            'block w-full rounded-md border-0 border-secondary-500 bg-background-50 px-2 py-1.5 ring-1 ring-inset ring-secondary-300 placeholder:text-text-700 hover:ring-primary-600 focus:ring-0 disabled:bg-background-300/50 disabled:text-text-700/50 disabled:ring-primary-300',
            invalid &&
              'text-red-700 ring-1 ring-red-600 hover:ring-red-800 focus:outline-red-600',
            icon && 'pl-10',
          )}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
