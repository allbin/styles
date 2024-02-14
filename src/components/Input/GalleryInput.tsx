import React from 'react';
import Input from './Input';
import { FaceSmileIcon } from '@heroicons/react/24/solid';

const GalleryInput: React.FC = () => {
  const [value, setValue] = React.useState('');
  return (
    <div>
      <Input id="input-1" />
      <Input id="input-2" label="Input Label" />
      <Input
        id="input-3"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Input Label with placeholder and tooltip (invalid if value is 'invalid')"
        placeholder="Placeholder"
        tooltip="This is a tooltip"
        invalid={value === 'invalid' ? 'Invalid input' : undefined}
      />
      <Input disabled id="input-3" label="Disabled Input" />
      <Input
        value="Disabled input"
        disabled
        id="input-3"
        label="Disabled Input with value"
      />
      <Input
        placeholder="Placeholder"
        invalid="Invalid input"
        id="input-5"
        label="Invalid input with placeholder"
      />
      <Input
        placeholder="Placeholder"
        invalid="Invalid input"
        id="input-6"
        label="Invalid Input with Icon"
        icon={
          <span>
            <FaceSmileIcon className="size-4" />
          </span>
        }
      />
      <Input
        id="input-7"
        label="Input Label with placeholder and icon"
        placeholder="Placeholder"
        icon={
          <span>
            <FaceSmileIcon className="size-4" />
          </span>
        }
      />
      <Input
        id="input-8"
        label="Invalid Input with Icon and placeholder"
        placeholder="Placeholder"
        icon={
          <span>
            <FaceSmileIcon className="size-4" />
          </span>
        }
        invalid="Invalid input"
      />
      <Input
        id="input-9"
        label="Invalid and Disabled Input with Icon and placeholder"
        placeholder="Placeholder"
        icon={
          <span>
            <FaceSmileIcon className="size-4" />
          </span>
        }
        invalid="Invalid input"
        disabled
      />
      <Input
        id="input-10"
        label="Invalid and Disabled Input with Icon and value"
        icon={
          <span>
            <FaceSmileIcon className="size-4" />
          </span>
        }
        invalid="Invalid input"
        disabled
        value="Disabled input"
      />
    </div>
  );
};

export default GalleryInput;
