import React from 'react';
import NavElement from './NavElement';
import { HomeIcon } from '@heroicons/react/24/outline';

const LeftPanel: React.FC = () => {
  return (
    <div className="size-full bg-background-200">
      <div className="flex flex-col gap-1 p-4">
        <span className="mb-3 text-sm font-bold">Level - 200</span>
        <NavElement to="/">
          <HomeIcon className="size-5" />
          Start
        </NavElement>
        <NavElement to="/colors">Colors</NavElement>
        <NavElement to="/fonts">Text and fonts</NavElement>
        <NavElement to="/icons">Icons</NavElement>
        <span className="mt-3 text-sm font-bold">Gallery</span>
        <NavElement to="/gallery/button">Button</NavElement>
        <NavElement to="/gallery/checkbox">Checkbox</NavElement>
        <NavElement to="/gallery/dropdown">Dropdown</NavElement>
        <NavElement to="/gallery/input">Input</NavElement>
        <NavElement to="/gallery/positionpad">PositionPad</NavElement>
        <NavElement to="/gallery/slider">Slider</NavElement>
        <NavElement to="/gallery/textarea">Textarea</NavElement>
        <NavElement to="/gallery/toast">Toast</NavElement>
        <NavElement to="/gallery/togglebutton">ToggleButton</NavElement>
        <NavElement to="/gallery/togglebuttongroup">
          ToggleButtonGroup
        </NavElement>
      </div>
    </div>
  );
};

export default LeftPanel;
