import React from 'react';
import { cn } from '../helpers/classnames';
import { Tooltip } from 'react-tooltip';

export interface ToggleButtonOption {
  value: string;
  label?: string;
  tooltip?: string;
  icon?: React.ReactNode;
}

interface ToggleButtonGroupProps {
  id: string;
  options: ToggleButtonOption[];
  value: string | undefined;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
  id,
  options,
  value,
  onChange,
  disabled,
  className,
}) => {
  return (
    <div className="flex">
      {options.map((option) => (
        <button
          data-tooltip-id={id}
          data-tooltip-content={option.tooltip}
          key={option.value}
          className={cn(
            'flex cursor-pointer items-center justify-between border border-l-0 border-primary-600 bg-background-50 p-1 text-primary-600 ring-inset first:rounded-l first:border-l last:rounded-r hover:bg-primary-100',
            disabled &&
              'cursor-default bg-background-300 opacity-50 ring-background-600 hover:bg-background-300',
            value === option.value &&
              'bg-primary-600 text-primary-200 hover:bg-primary-500 disabled:hover:bg-primary-600',
            className,
          )}
          onClick={() => (disabled ? undefined : onChange(option.value))}
          disabled={disabled}
        >
          <div className="flex grow items-center justify-center gap-1">
            {option.icon && <div>{option.icon}</div>}
            {option.label && <div>{option.label}</div>}
          </div>
          <Tooltip id={id} delayShow={300} delayHide={1} />
        </button>
      ))}
    </div>
  );
};

export default ToggleButtonGroup;
