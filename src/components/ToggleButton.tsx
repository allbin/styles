import React, { PropsWithChildren } from 'react';
import { cn } from '../helpers/classnames';
import { Tooltip } from 'react-tooltip';

interface ToggleButtonProps {
  id: string;
  value: boolean | undefined;
  onToggle: () => void;
  disabled?: boolean;
  tooltip?: string;
  className?: string;
}

const ToggleButton: React.FC<PropsWithChildren<ToggleButtonProps>> = ({
  id,
  value,
  onToggle,
  disabled,
  tooltip,
  children,
  className,
}) => {
  return (
    <>
      <Tooltip id={id} />
      <button
        data-tooltip-id={id}
        data-tooltip-content={tooltip}
        data-tooltip-delay-show={300}
        className={cn(
          'flex items-center justify-center gap-1 rounded border border-primary-600 bg-background-50 p-1 text-primary-700',
          value && 'bg-primary-600 text-primary-50',
          disabled &&
            'cursor-default border-background-600 bg-background-300 text-primary-600 opacity-50',
          className,
        )}
        onClick={disabled ? undefined : onToggle}
      >
        {children}
      </button>
    </>
  );
};

export default ToggleButton;
