import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar/TopBar';
import LeftPanel from '../components/LeftPanel/LeftPanel';

const Root: React.FC = () => {
  return (
    <div>
      <div className="h-12">
        <TopBar />
      </div>
      <div className="flex h-full">
        <div className="w-[300px] shrink-0">
          <LeftPanel />
        </div>
        <div className="grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
