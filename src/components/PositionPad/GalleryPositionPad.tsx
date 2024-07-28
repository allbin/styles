import React from 'react';
import PositionPad, { Position } from '../core/PositionPad';

const GalleryPositionPad: React.FC = () => {
  const [position, setPosition] = React.useState<Position | undefined>(
    undefined,
  );

  const cardinals_selectable = ['top', 'right', 'left', 'bottom'];
  const ordinals_selectable = [
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
  ];

  return (
    <div className="flex flex-col gap-4">
      <PositionPad
        disabled
        label="A disabled PositionPad"
        selected={undefined}
        onSelect={() => {
          /* nop */
        }}
      />
      <PositionPad
        label="A PositionPad with only cardinals selectable, interactable"
        selectable={['top', 'right', 'left', 'bottom']}
        selected={
          cardinals_selectable.includes(position as string)
            ? position
            : undefined
        }
        onSelect={(position) => {
          setPosition(position);
        }}
      />
      <PositionPad
        label="A PositionPad with only ordinals selectable, interactable"
        selectable={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
        selected={
          ordinals_selectable.includes(position as string)
            ? position
            : undefined
        }
        onSelect={(position) => {
          setPosition(position);
        }}
      />
      <PositionPad
        label="A PositionPad with everything selectable, interactable"
        selected={position}
        onSelect={(position) => {
          setPosition(position);
        }}
      />
    </div>
  );
};

export default GalleryPositionPad;
