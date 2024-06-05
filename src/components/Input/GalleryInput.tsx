import React from 'react';
import Input from './Input';
import { FaceSmileIcon, TrashIcon } from '@heroicons/react/24/solid';
import Button from '../Button/Button';

const GalleryInput: React.FC = () => {
  const [textValue, setTextValue] = React.useState('This contains a value');
  const [numberValue, setNumberValue] = React.useState(100);
  return (
    <div>
      <h2 className="mb-4">Inputs</h2>
      <h3>Input default text field</h3>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-gray-300 p-4">
        <Input />
        <Input disabled value={'Disabled'} />
        <Input id="error-1" error="This is an error message" />
        <Input
          id="error-2"
          placeholder="Type error to see error message"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          error={textValue === 'error' ? 'input error' : undefined}
        />
        <Input placeholder="This is a placeholder" />
        <Input startAdornment={<FaceSmileIcon className="size-5" />} />
        <Input endAdornment={<FaceSmileIcon className="size-5" />} />
        <Input
          startAdornment={<FaceSmileIcon className="size-5" />}
          endAdornment={<TrashIcon className="size-5" />}
        />
        <Input
          type="number"
          placeholder="Type error to see error message"
          value={numberValue}
          onChange={(e) => setNumberValue(Number(e.target.value))}
        />
        <Input
          id="tooltip-1"
          toolTip="This is a tool tip"
          placeholder="Hover to see tooltip"
        />
      </div>
      <h3>Labels</h3>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-gray-300 p-4 pt-10">
        <Input id="id-1" label="This is a label with absolute position" />
      </div>
      <h3>Helper Text</h3>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-gray-300 p-4 pb-10">
        <Input helperText="This is a helper text with absolute position" />
      </div>
      <h3>Input with button example</h3>
      <div className="mb-8 flex flex-row gap-2 rounded-md border border-gray-300 p-4 py-10">
        <Input
          id="id-2"
          placeholder="ex John Doe"
          label="Name"
          helperText="Enter your first and last name"
        />
        <Button variant="filled">Add</Button>
      </div>
      <h3>Input multiline text field</h3>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-gray-300 p-4">
        <Input type="multiline" />
        <Input type="multiline" placeholder="This is a placeholder" />
        <Input
          type="multiline"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <Input type="multiline" placeholder="This is a placeholder" disabled />
        <Input
          id="error-3"
          type="multiline"
          placeholder="Error"
          error="This is an error message"
        />
        <Input type="multiline" placeholder="Resizeable textarea" resize />
        <Input type="multiline" rows={4} placeholder="4 rows textarea" />
        <Input
          id="tooltip-2"
          type="multiline"
          toolTip="This is a tooltip"
          placeholder="Tooltip"
        />
      </div>
      <h3>Labels multiline</h3>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-gray-300 p-4 pt-10">
        <Input
          id="id-3"
          type="multiline"
          label="This is a label with absolute position"
        />
      </div>
      <h3>Helper Text</h3>
      <div className="mb-8 flex flex-col gap-2 rounded-md border border-gray-300 p-4 pb-10">
        <Input
          type="multiline"
          helperText="This is a helper text with absolute position"
        />
      </div>
    </div>
  );
};

export default GalleryInput;
