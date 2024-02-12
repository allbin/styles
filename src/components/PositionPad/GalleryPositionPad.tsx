import React from 'react';
import PositionPad, { Position } from './PositionPad';

const GalleryPositionPad: React.FC = () => {
  const [position, setPosition] = React.useState<Position | undefined>(
    undefined,
  );

  const cardinals_selectable = ['t', 'r', 'l', 'b'];
  const ordinals_selectable = ['tl', 'tr', 'bl', 'br'];

  return (
    <div>
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
        selectable={['t', 'r', 'l', 'b']}
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
        selectable={['tl', 'tr', 'bl', 'br']}
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
