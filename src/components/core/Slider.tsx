import React from 'react';
import { Root, Track, Range, Thumb } from '@radix-ui/react-slider';
import { cn } from '../../helpers/classnames';
import { Tooltip } from 'react-tooltip';

interface SliderProps {
  id: string;
  value: number[];
  min?: number;
  max?: number;
  onChange: (value: number[]) => void;
  step?: number;
  label?: string;
  tooltip?: string;
  disabled?: boolean;
  disabledTooltip?: string;
  minStepsBetweenThumbs?: number;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({
  id,
  value,
  min,
  max,
  onChange,
  step,
  label,
  tooltip,
  disabled,
  disabledTooltip,
  minStepsBetweenThumbs,
  className,
}) => {
  return (
    <div className={cn(className)}>
      <Tooltip noArrow place="top" id={id} delayShow={500} />
      {label && (
        <label
          data-tooltip-id={id}
          data-tooltip-content={tooltip}
          htmlFor={id}
          className="mb-1 ml-[7px] block text-sm font-medium leading-6 text-primary-900"
        >
          {label}
        </label>
      )}
      <Root
        data-tooltip-id={id}
        data-tooltip-content={disabled ? disabledTooltip : undefined}
        id={id}
        value={value}
        min={min || 0}
        max={max || 1}
        step={step || 0.001}
        onValueChange={(value) => onChange(value)}
        className={cn(
          'group relative flex w-full cursor-pointer touch-none select-none items-center py-1',
          disabled && 'cursor-default',
        )}
        disabled={disabled}
        minStepsBetweenThumbs={minStepsBetweenThumbs}
      >
        <Track
          className={cn(
            'relative h-2 w-full grow overflow-hidden rounded-full bg-primary-300 group-hover:bg-primary-400',
            disabled && '!bg-gray-300',
          )}
        >
          <Range
            className={cn(
              'absolute h-full bg-primary-600 group-hover:bg-primary-700',
              disabled && '!bg-gray-400',
            )}
          />
        </Track>
        {value.map(
          (_, i) => (
            <Thumb
              key={i}
              className={cn(
                'block size-5 rounded-full border-2 border-primary-500 bg-primary-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-hover:size-6 group-active:bg-primary-600',
                disabled &&
                  'border-gray-300 bg-gray-300 ring-gray-300 ring-offset-gray-300 focus:ring-0 group-hover:size-5 group-active:bg-gray-300',
              )}
            />
          ),
          [],
        )}
      </Root>
    </div>
  );
};

export default Slider;
