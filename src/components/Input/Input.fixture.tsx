import { FaceSmileIcon } from '@heroicons/react/20/solid';
import Input from './Input';
import { useState } from 'react';

export default {
  Default: (
    <Input
      id="a"
      disabled={false}
      label="Label"
      placeholder="Placeholder"
      onChange={(e) => console.log(e.target.value)}
      invalid=""
      tooltip=""
    />
  ),
  WithIcon: () => {
    const [value, setValue] = useState('');
    return (
      <Input
        id="a"
        disabled={false}
        label="Label"
        placeholder="Placeholder"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        invalid=""
        icon={<FaceSmileIcon className="size-5" />}
        tooltip=""
      />
    );
  },
  Invalid: () => {
    const [value, setValue] = useState('');
    return (
      <Input
        id="a"
        disabled={false}
        label="Label"
        placeholder="Placeholder"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        invalid="I am invalid"
        icon={<FaceSmileIcon className="size-5" />}
        tooltip=""
      />
    );
  },
};
