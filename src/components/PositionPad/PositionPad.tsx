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

export type Position = 'tl' | 't' | 'tr' | 'l' | 'c' | 'r' | 'bl' | 'b' | 'br';
const all_positions: Position[] = [
  'tl',
  't',
  'tr',
  'l',
  'c',
  'r',
  'bl',
  'b',
  'br',
];

const icon_by_position = {
  tl: ArrowUpLeftIcon,
  t: ArrowUpIcon,
  tr: ArrowUpRightIcon,
  r: ArrowRightIcon,
  c: ArrowsPointingInIcon,
  l: ArrowLeftIcon,
  bl: ArrowDownLeftIcon,
  b: ArrowDownIcon,
  br: ArrowDownRightIcon,
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
  const selectable_positions = selectable || all_positions;
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {label && (
        <div className="text-sm leading-6">
          <label className="font-medium">{label}</label>
        </div>
      )}
      <div className="flex flex-wrap justify-center">
        {all_positions.map((position) => {
          const Icon = icon_by_position[position];
          return (
            <div
              key={position}
              className="flex basis-1/3 justify-center"
              id={position}
            >
              {selectable_positions.includes(position) && (
                <button
                  onClick={() => onSelect(position)}
                  disabled={disabled}
                  className={cn(
                    'm-1 grow cursor-pointer rounded border border-primary-600 p-2 text-primary-600 hover:bg-primary-200',
                    selected === position &&
                      'bg-primary-600 text-primary-50 hover:bg-primary-700',
                    disabled &&
                      'cursor-default border border-background-300 bg-background-200 text-background-300 hover:bg-background-200',
                  )}
                >
                  <Icon className={cn('m-auto size-6')} />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PositionPad;
