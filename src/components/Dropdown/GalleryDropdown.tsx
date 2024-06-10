import React from 'react';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownGroup,
  DropdownTrigger,
  DropdownValue,
} from './Dropdown';

const GalleryDropdown: React.FC = () => {
  return (
    <div>
      <h2 className="mb-4">Dropdown</h2>
      <h3>Dropdown</h3>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-gray-300 p-4">
        <Dropdown>
          <DropdownGroup>
            <DropdownTrigger className="w-[180px]">
              <DropdownValue placeholder="Theme" />
            </DropdownTrigger>
            <DropdownContent className="w-[180px]">
              <DropdownLabel>Dropdown label A</DropdownLabel>
              <DropdownItem value="light">Light</DropdownItem>
              <DropdownItem value="dark">Dark</DropdownItem>
              <DropdownLabel>Dropdown label B</DropdownLabel>
              <DropdownItem value="system">System</DropdownItem>
            </DropdownContent>
          </DropdownGroup>
        </Dropdown>
      </div>
    </div>
  );
};

export default GalleryDropdown;
