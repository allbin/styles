import React from 'react';
import { Root, Track, Range, Thumb } from '@radix-ui/react-slider';
import { cn } from '../../helpers/classnames';
import { Tooltip } from 'react-tooltip';

interface SliderProps {
  id: string;
  value: number[];
  min: number;
  max: number;
  onChange: (value: number[]) => void;
  step?: number;
  label?: string;
  tooltip?: string;
  disabled?: boolean;
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
  minStepsBetweenThumbs,
  className,
}) => {
  return (
    <div className={cn(className)}>
      <Tooltip noArrow place="top-start" id="slider-tooltip" delayShow={500} />
      <label
        data-tooltip-id="slider-tooltip"
        data-tooltip-content={tooltip}
        htmlFor={id}
        className="text-sm font-medium leading-6"
      >
        {label}
      </label>
      <Root
        id={id}
        value={value}
        min={min}
        max={max}
        step={step}
        onValueChange={(value) => onChange(value)}
        className={cn(
          'relative mt-1 flex w-full cursor-pointer touch-none select-none items-center',
          disabled && 'cursor-default',
        )}
        disabled={disabled}
        minStepsBetweenThumbs={minStepsBetweenThumbs}
      >
        <Track
          className={cn(
            'relative h-2 w-full grow overflow-hidden rounded-full bg-secondary-400',
            disabled && 'bg-gray-300',
          )}
        >
          <Range
            className={cn(
              'absolute h-full bg-secondary-600',
              disabled && 'bg-gray-400',
            )}
          />
        </Track>
        {value.map(
          (_, i) => (
            <Thumb
              key={i}
              className={cn(
                'focus-visible:ring-ring block h-5 w-5 rounded-full border-2 border-secondary-500 bg-background-200 ring-offset-background-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                disabled &&
                  'border-gray-300 bg-gray-300 ring-gray-300 ring-offset-gray-300',
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
