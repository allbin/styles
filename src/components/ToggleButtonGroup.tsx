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
      <Tooltip id={id} />
      {options.map((option, i, arr) => (
        <button
          data-tooltip-id={id}
          data-tooltip-content={option.tooltip}
          data-tooltip-delay-show={300}
          data-tooltip-delay-hide={1}
          key={option.value}
          className={cn(
            'flex cursor-pointer items-center justify-between border border-primary-600 bg-background-50 p-1 text-primary-600',
            i === 0 && 'rounded-l',
            i === arr.length - 1 && 'rounded-r',
            i > 0 && 'border-l-0',
            disabled &&
              'cursor-default border-background-600 bg-background-300 opacity-50',
            value === option.value && 'bg-primary-600 text-primary-200',
            className,
          )}
          onClick={() => (disabled ? undefined : onChange(option.value))}
          disabled={disabled}
        >
          <div className="flex grow items-center justify-center gap-1">
            {option.icon && <div>{option.icon}</div>}
            {option.label && <div>{option.label}</div>}
          </div>
        </button>
      ))}
    </div>
  );
};

export default ToggleButtonGroup;
