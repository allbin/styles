import React from 'react';

import {
  ArrowUpLeftIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
  ArrowRightIcon,
  ArrowDownRightIcon,
  ArrowDownIcon,
  ArrowDownLeftIcon,
  ArrowLeftIcon,
  ArrowsPointingInIcon,
} from '@heroicons/react/24/outline';
import { cn } from '../../helpers/classnames';

export type Position =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'left'
  | 'center'
  | 'right'
  | 'bottom-left'
  | 'bottom'
  | 'bottom-right';

const allPositions: Position[] = [
  'top-left',
  'top',
  'top-right',
  'left',
  'center',
  'right',
  'bottom-left',
  'bottom',
  'bottom-right',
];

const iconByPosition = {
  'top-left': ArrowUpLeftIcon,
  top: ArrowUpIcon,
  'top-right': ArrowUpRightIcon,
  right: ArrowRightIcon,
  center: ArrowsPointingInIcon,
  left: ArrowLeftIcon,
  'bottom-left': ArrowDownLeftIcon,
  bottom: ArrowDownIcon,
  'bottom-right': ArrowDownRightIcon,
};

interface PositionPadProps {
  label?: string;
  selectable?: Position[];
  selected: Position | undefined;
  onSelect: (position?: Position) => void;
  disabled?: boolean;
  className?: string;
}

const PositionPad: React.FC<PositionPadProps> = ({
  label,
  selectable,
  selected,
  onSelect,
  disabled,
  className,
}) => {
  const selectablePositions = selectable || allPositions;
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {label && (
        <div className="text-sm leading-6">
          <label className="font-medium">{label}</label>
        </div>
      )}
      <div className="flex flex-wrap justify-center">
        {allPositions.map((position) => {
          const Icon = iconByPosition[position];
          const positionDisabled =
            disabled || !selectablePositions.includes(position);
          return (
            <div key={position} className="flex basis-1/3 justify-center">
              <button
                onClick={() => onSelect(position)}
                disabled={positionDisabled}
                className={cn(
                  'm-1 grow cursor-pointer rounded border border-primary-600 p-2 text-primary-600 hover:bg-primary-200',
                  selected === position &&
                    'bg-primary-600 text-primary-50 hover:bg-primary-700',
                  positionDisabled &&
                    'cursor-default border border-background-300 bg-background-200 text-background-300 hover:bg-background-200',
                  !selectablePositions.includes(position) && 'opacity-0',
                )}
              >
                <Icon className={cn('m-auto size-6')} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PositionPad;
