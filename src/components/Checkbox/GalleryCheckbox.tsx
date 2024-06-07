import React, { useCallback } from 'react';
import CheckBox from './Checkbox';

const GalleryCheckbox: React.FC = () => {
  const [checkValue, setCheckValue] = React.useState<boolean>(false);

  const handleChange = useCallback((checked: boolean) => {
    console.log('Checkbox checked:', checked);
    setCheckValue(checked);
  }, []);

  return (
    <div>
      <h2 className="mb-4">Checkbox</h2>
      <h3>Variants</h3>
      <div className="mb-8 flex flex-col flex-wrap gap-2 rounded-md border border-gray-300 p-4">
        <CheckBox id="checkbox-1" />
        <CheckBox id="checkbox-2" label="Checkbox Label" />
        <CheckBox
          id="Checkbox-3"
          label="With description"
          description="This is a description for the checkbox"
        />
        <CheckBox
          id="Checkbox-4"
          label="OnClick event"
          onClick={() => handleChange(!checkValue)}
          checked={checkValue}
        />
      </div>
      <h3>Disabled</h3>
      <div className="mb-8 flex flex-col flex-wrap gap-2 rounded-md border border-gray-300 p-4">
        <CheckBox id="Checkbox-4" label="Disabled" disabled />
        <CheckBox
          id="checkbox-5"
          label="Disabled and checked"
          checked
          disabled
        />
      </div>
    </div>
  );
};

export default GalleryCheckbox;
