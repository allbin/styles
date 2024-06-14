import React from 'react';
import Button from '../Button/Button';
import { Dropdown, OptionsType, OptionsProps } from './Dropdown';

const GalleryDropdown: React.FC = () => {
  const dropdownData: OptionsProps[] = [
    { id: '1', label: 'Apple' },
    { id: '2', label: 'Orange', color: 'green' },
    { category: 'Drinks' },
    { id: '4', label: 'Cola' },
    { id: '5', label: 'Fanta' },
    { category: 'Admin' },
    { id: '7', label: 'Remove all items', color: 'red' },
  ];

  const selectedValue: OptionsType = {
    id: '1',
    label: 'Apple',
  };

  return (
    <div>
      <h2 className="mb-4">Dropdown</h2>
      <h3>Dropdown</h3>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-gray-300 p-4">
        <Dropdown
          id="dropdown-1"
          className="w-[320px]"
          placeholder="Default dropdown with onChange"
          onChange={(value) => {
            console.log('From list: ', value);
          }}
          options={dropdownData}
        />
        <Dropdown
          id="dropdown-2"
          className="w-[320px]"
          placeholder="This one is disabled"
          onChange={(value) => {
            console.log('From list: ', value);
          }}
          disabled
          options={dropdownData}
        />
        <Dropdown
          id="dropdown-3"
          className="w-[320px]"
          placeholder="Selected value"
          value={selectedValue}
          onChange={(value) => {
            console.log('Selected: ', value);
          }}
          options={dropdownData}
        />
        <Dropdown
          id="dropdown-3"
          className="w-[320px]"
          placeholder="Error"
          error
          errorMessage="This is an error"
          options={dropdownData}
        />
      </div>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-gray-300 p-4 pt-8">
        <Dropdown
          id="dropdown-4"
          className="w-[320px]"
          placeholder="With label"
          label="This is a label with absolute position"
          options={dropdownData}
        />
      </div>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-gray-300 p-4 pb-8">
        <Dropdown
          id="dropdown-5"
          className="w-[320px]"
          placeholder="With helper text"
          helperText="This is a helper text with absolute position"
          options={dropdownData}
        />
      </div>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-gray-300 p-4 pb-8">
        <Dropdown
          id="dropdown-7"
          className="w-[320px]"
          placeholder="Defined hight on option box"
          optionsContainerHeight={'200px'}
          options={dropdownData}
        />
      </div>
      <div className="mb-8 flex flex-row gap-2 rounded-md border border-gray-300 p-4 py-10">
        <Dropdown
          id="dropdown-6"
          className="w-[320px]"
          placeholder="Choose an option"
          label="Exemple with button"
          helperText="This is a helper text with absolute position"
          options={dropdownData}
          onChange={(value) => {
            console.log('Selected: ', value);
          }}
        />
        <Button variant="filled">Next step</Button>
      </div>
    </div>
  );
};

export default GalleryDropdown;
