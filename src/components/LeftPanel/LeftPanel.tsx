import React from 'react';
import NavElement from './NavElement';
import { HomeIcon } from '@heroicons/react/24/outline';

const LeftPanel: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-1">
        <NavElement to="/">
          <HomeIcon className="size-5" />
          Start
        </NavElement>
        <NavElement to="/colors">Colors</NavElement>
        <NavElement to="/fonts">Text and fonts</NavElement>
        <NavElement to="/gallery">Gallery</NavElement>
        <NavElement to="/icons">Icons</NavElement>
      </div>
    </div>
  );
};

export default LeftPanel;
