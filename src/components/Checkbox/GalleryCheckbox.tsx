import React, { useCallback } from 'react';
import Checkbox from './Checkbox';

const GalleryCheckbox: React.FC = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = useCallback((checked: boolean) => {
    console.log('Checkbox checked:', checked);
    setChecked(checked);
  }, []);

  return (
    <div>
      Checkbox with no props
      <Checkbox className="mb-4" />
      Checkbox with label
      <Checkbox className="mb-4" label="Checkbox Label" />
      Checkbox with only description (with external state)
      <Checkbox
        value={checked}
        onChange={handleChange}
        className="mb-4"
        description="Description"
      />
      Checkbox with label and description
      <Checkbox
        className="mb-4"
        label="Checkbox Label"
        description="This is a description for the checkbox"
      />
      Checkbox with tooltip (with external state)
      <Checkbox
        value={checked}
        onChange={handleChange}
        className="mb-4"
        label="Checkbox Label"
        description="This is a description for the checkbox"
        tooltip="This is a tooltip for the checkbox"
      />
      Another checkbox with tooltip (with external state)
      <Checkbox
        value={checked}
        onChange={handleChange}
        className="mb-4"
        label="Checkbox Label"
        description="This is a description for the checkbox"
        tooltip="This is a tooltip for the checkbox"
      />
      Disabled checkbox
      <Checkbox
        className="mb-4"
        label="Checkbox Label"
        description="This is a description for the checkbox"
        tooltip="This is a tooltip for the checkbox"
        disabled
      />
      Disabled checked checkbox
      <Checkbox
        className="mb-4"
        label="Checkbox Label"
        description="This is a description for the checkbox"
        tooltip="This is a tooltip for the checkbox"
        disabled
        value={true}
      />
      Disabled checked checkbox (with external state)
      <Checkbox
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
