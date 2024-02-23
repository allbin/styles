/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms')({strategy: 'class'}),
    ],
  }
  ```
*/
import React from 'react';
import { Tooltip } from 'react-tooltip';
import { cn } from '../../helpers/classnames';

interface CheckboxProps {
  id: string;
  value?: boolean;
  label?: string;
  description?: string;
  tooltip?: string;
  disabled?: boolean;
  className?: string;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  value,
  label,
  description,
  tooltip,
  disabled,
  className,
  onChange,
}) => {
  return (
    <>
      <Tooltip place="top" id="checkbox-tooltip" delayShow={500} />
      <div
        data-tooltip-id="checkbox-tooltip"
        data-tooltip-content={tooltip}
        className={cn(
          'group relative flex w-fit cursor-pointer items-start',
          disabled && 'cursor-default',
          className,
        )}
      >
        <div className="flex h-6 items-center">
          <input
            disabled={disabled}
            checked={value}
            onChange={() => onChange && onChange(!value)}
            id={id}
            name={id}
            type="checkbox"
            className={cn(
              'form-checkbox size-5 cursor-pointer rounded border-primary-300 bg-background-50 text-primary-600 checked:bg-primary-500 focus:ring-primary-600 group-hover:bg-primary-300 checked:group-hover:bg-primary-700',
              disabled &&
                'cursor-default border-gray-300 bg-gray-300 text-gray-500 checked:bg-gray-300 group-hover:bg-gray-300 checked:group-hover:bg-gray-300',
              disabled &&
                'dark:border-gray-800 dark:bg-gray-800 dark:hover:border-gray-800 dark:group-hover:bg-gray-800 dark:checked:group-hover:bg-gray-800',
            )}
          />
        </div>
        {(label || description) && (
          <div className="ml-3 text-sm leading-6">
            <label
              htmlFor={id}
              className={cn(
                'cursor-pointer font-medium text-text-900 group-hover:text-primary-700',
                disabled &&
                  'cursor-default text-text-700 group-hover:text-text-700',
              )}
            >
              {label ?? <span>&nbsp;</span>}
            </label>
            {description && <p className="text-text-700">{description}</p>}
          </div>
        )}
      </div>
    </>
  );
};

export default Checkbox;
