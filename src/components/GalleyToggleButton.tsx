import React from 'react';

import { IconBus } from '@allbin/icons';

import ToggleButton from './core/ToggleButton';

const GalleryToggleButton: React.FC = () => {
  const [toggled, setToggled] = React.useState(false);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="text-sm font-semibold leading-6">Button with icon</div>
        <ToggleButton
          id="button-icon"
          value={toggled}
          onToggle={() => {
            setToggled(!toggled);
          }}
        >
          <IconBus className="size-6" />
        </ToggleButton>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-sm font-semibold leading-6">Button with label</div>
        <ToggleButton
          id="button-icon"
          value={toggled}
          onToggle={() => {
            setToggled(!toggled);
          }}
        >
          <div className="text-xl">Bus</div>
        </ToggleButton>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-sm font-semibold leading-6">
          Button with icon and label
        </div>
        <ToggleButton
          id="button-icon"
          tooltip="Bus tooltip"
          value={toggled}
          onToggle={() => {
            setToggled(!toggled);
          }}
        >
          <IconBus className="size-6" />
          <div className="text-xl">Bus</div>
        </ToggleButton>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-sm font-semibold leading-6">
          Disabled button with tooltip
        </div>
        <ToggleButton
          id="button-icon"
          disabled
          tooltip="Bus tooltip"
          value={toggled}
          onToggle={() => {
            setToggled(!toggled);
          }}
        >
          <IconBus className="size-6" />
          <div className="text-xl">Bus</div>
        </ToggleButton>
      </div>
    </div>
  );
};

export default GalleryToggleButton;
