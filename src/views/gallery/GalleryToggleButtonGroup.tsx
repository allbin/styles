import React from 'react';
import { IconAlignLeft, IconAlignCenter, IconAlignRight } from '@allbin/icons';
import ToggleButtonGroup from '@/components/core/ToggleButtonGroup';

const GalleryToggleButtonGroup: React.FC = () => {
  const options = [
    {
      label: 'Left',
      icon: <IconAlignLeft className="size-6" />,
      value: 'left',
      tooltip: 'Align left',
    },
    {
      label: 'Center',
      icon: <IconAlignCenter className="size-6" />,
      value: 'center',
      tooltip: 'Align center',
    },
    {
      label: 'Right',
      icon: <IconAlignRight className="size-6" />,
      value: 'right',
      tooltip: 'Align right',
    },
  ];

  const [value, setValue] = React.useState<string | undefined>('left');

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="text-sm font-semibold leading-6">Icons only</div>
        <ToggleButtonGroup
          id="group-icons"
          options={options.map(({ icon, value }) => ({ icon, value }))}
          value={value}
          onChange={(value) => {
            setValue(value);
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-sm font-semibold leading-6">Labels only</div>
        <ToggleButtonGroup
          id="group-labels"
          options={options.map(({ label, value }) => ({ label, value }))}
          value={value}
          onChange={(value) => {
            setValue(value);
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-sm font-semibold leading-6">
          Icons and labels w tooltip
        </div>
        <ToggleButtonGroup
          id="group-icons-and-labels"
          options={options}
          value={value}
          onChange={(value) => {
            setValue(value);
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-sm font-semibold leading-6">
          Disabled w tooltip
        </div>
        <ToggleButtonGroup
          id="group-disabled"
          disabled
          options={options}
          value={value}
          onChange={(value) => {
            setValue(value);
          }}
        />
      </div>
    </div>
  );
};

export default GalleryToggleButtonGroup;
