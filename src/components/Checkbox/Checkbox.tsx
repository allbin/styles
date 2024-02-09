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
  value?: boolean;
  label?: string;
  description?: string;
  tooltip?: string;
  id?: string;
  disabled?: boolean;
  className?: string;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  value,
  label,
  description,
  tooltip,
  id,
  disabled,
  className,
  onChange,
}) => {
  return (
    <>
      <Tooltip place="top-start" id="checkbox-tooltip" delayShow={500} />
      <div
        onClick={() => onChange && onChange(!value)}
        data-tooltip-id="checkbox-tooltip"
        data-tooltip-content={tooltip}
        className={cn(
          'group relative flex cursor-pointer items-start',
          disabled && 'cursor-default',
          className,
        )}
      >
        <div className="flex h-6 items-center">
          <input
            disabled={disabled}
            checked={value}
            id={id}
            name={id}
            type="checkbox"
            className={cn(
              'form-checkbox cursor-pointer rounded border-accent-300 bg-background-100 text-accent-600 focus:ring-accent-600 group-hover:bg-accent-300 checked:group-hover:bg-accent-700',
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
              className={cn(
                'cursor-pointer font-medium text-text-900 group-hover:text-accent-700',
                disabled &&
                  'cursor-default text-text-700 group-hover:text-text-700',
              )}
            >
              {label ? label : <span>&nbsp;</span>}
            </label>
            {description && <p className="text-text-500">{description}</p>}
          </div>
        )}
      </div>
    </>
  );
};

export default Checkbox;
