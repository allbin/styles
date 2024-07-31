import React from 'react';
import TextArea from '@/components/core/TextArea';

const GalleryTextArea = () => {
  const [value, setValue] = React.useState<string>('');
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="text-sm font-medium leading-6">
          TextArea with placeholder
        </div>
        <TextArea
          value={value}
          onChange={(v) => setValue(v)}
          placeholder="with placeholder..."
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-sm font-medium leading-6">Disabled TextArea</div>
        <TextArea
          disabled
          value={value}
          onChange={(v) => setValue(v)}
          placeholder="with placeholder..."
        />
      </div>
    </div>
  );
};

export default GalleryTextArea;
