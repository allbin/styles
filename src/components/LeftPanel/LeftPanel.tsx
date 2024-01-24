import React from 'react';
import NavElement from './NavElement';
import { IconHomeAlt } from '@allbin/icons';

const LeftPanel: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-1">
        <NavElement to="/">
          <IconHomeAlt className="size-5" />
          Start
        </NavElement>
        <NavElement to="/colors">Colors</NavElement>
      </div>
    </div>
  );
};

export default LeftPanel;
