import React, { useCallback } from 'react';
import Checkbox from './Checkbox';
import ShadCheckbox from './ShadCheckbox';

// import { IconCheck } from '@allbin/icons';

const GalleryCheckbox: React.FC = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = useCallback((checked: boolean) => {
    console.log('Checkbox checked:', checked);
    setChecked(checked);
  }, []);

  return (
    <div>
      <div className="mb-7 flex flex-col gap-2">
        Gallery view
        <ShadCheckbox id="checkbox-1" label="Checkbox Label" />
        <ShadCheckbox
          id="checkbox-2"
          label="Checkbox with description"
          description="This is a description for the checkbox"
        />
      </div>
      Checkbox with no props
      <Checkbox id="checkbox-1" className="mb-4" />
      Checkbox with label
      <Checkbox id="checkbox-2" className="mb-4" label="Checkbox Label" />
      Checkbox with only description (with external state)
      <Checkbox
        id="checkbox-3"
        value={checked}
        onChange={handleChange}
        className="mb-4"
        description="Description"
      />
      Checkbox with label and description
      <Checkbox
        id="checkbox-4"
        className="mb-4"
        label="Checkbox Label"
        description="This is a description for the checkbox"
      />
      Checkbox with tooltip (with external state)
      <Checkbox
        id="checkbox-5"
        value={checked}
        onChange={handleChange}
        className="mb-4"
        label="Checkbox Label"
        description="This is a description for the checkbox"
        tooltip="This is a tooltip for the checkbox"
      />
      Another checkbox with tooltip (with external state)
      <Checkbox
        id="checkbox-6"
        value={checked}
        onChange={handleChange}
        className="mb-4"
        label="Checkbox Label"
        description="This is a description for the checkbox"
        tooltip="This is a tooltip for the checkbox"
      />
      Disabled checkbox
      <Checkbox
        id="checkbox-7"
        className="mb-4"
        label="Checkbox Label"
        description="This is a description for the checkbox"
        tooltip="This is a tooltip for the checkbox"
        disabled
      />
      Disabled checked checkbox
      <Checkbox
        id="checkbox-8"
        className="mb-4"
        label="Checkbox Label"
        description="This is a description for the checkbox"
        tooltip="This is a tooltip for the checkbox"
        disabled
        value={true}
      />
      Disabled checked checkbox (with external state)
      <Checkbox
        id="checkbox-9"
        value={checked}
        onChange={handleChange}
        className="mb-4"
        label="Checkbox Label"
        description="This is a description for the checkbox"
        tooltip="This is a tooltip for the checkbox"
        disabled
      />
    </div>
  );
};

export default GalleryCheckbox;
