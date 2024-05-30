import React from 'react';
import Input from './Input';
import { FaceSmileIcon, TrashIcon } from '@heroicons/react/24/solid';
import Button from '../Button/Button';

// For testing
import { ShadInput } from './ShadInput';

const GalleryInput: React.FC = () => {
  const [textValue, setTextValue] = React.useState('');
  const [numberValue, setNumberValue] = React.useState(100);
  return (
    <div>
      <h2 className="mb-4">Inputs</h2>
      <h3>Input fields</h3>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-gray-300 p-4">
        <ShadInput id="shad-1" />
        <ShadInput id="shad-2" disabled />
        <ShadInput id="shad-3" error="This is an error message" />
        <ShadInput
          id="shad-3-1"
          placeholder="Type error to see error message"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          error={textValue === 'error' ? 'input error' : undefined}
        />
        <ShadInput id="shad-4" placeholder="This is a placeholder" />
        <ShadInput
          id="shad-5"
          startAdornment={<FaceSmileIcon className="size-5" />}
        />
        <ShadInput
          id="shad-6"
          endAdornment={<FaceSmileIcon className="size-5" />}
        />
        <ShadInput
          id="shad-6"
          startAdornment={<FaceSmileIcon className="size-5" />}
          endAdornment={<TrashIcon className="size-5" />}
        />
        <ShadInput
          id="982"
          type="number"
          placeholder="Type error to see error message"
          value={numberValue}
          onChange={(e) => setNumberValue(Number(e.target.value))}
        />
        <ShadInput
          id="13123"
          toolTip="This is a tool tip"
          placeholder="Hover to see tooltip"
        />
      </div>
      <h3>Labels</h3>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-gray-300 p-4 pt-10">
        <ShadInput id="shad-8" label="This is a label with absolute position" />
      </div>
      <h3>Helper Text</h3>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-gray-300 p-4 pb-10">
        <ShadInput
          id="shad-8"
          helperText="This is a helper text with absolute position"
        />
      </div>
      <h3>Input with button example</h3>
      <div className="mb-8 flex flex-row gap-2 rounded-md border border-gray-300 p-4 py-10">
        <ShadInput
          id="shad-123"
          placeholder="ex John Doe"
          label="Name"
          helperText="Enter your first and last name"
        />
        <Button variant="filled">Add</Button>
      </div>
      <Input id="input-1" />
      <Input id="input-2" label="This is a label" />
      <Input
        id="input-3"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        label="Input Label with placeholder and tooltip (invalid if value is 'invalid')"
        placeholder="Placeholder"
        tooltip="This is a tooltip"
        invalid={textValue === 'invalid' ? 'Invalid input' : undefined}
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
