import React, { useEffect, useState } from 'react';
import Button from './Button';
import IconButton from './IconButton';
import { IconHalfCookie, IconTrash } from '@allbin/icons';

const Btn: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [isLoading]);

  return (
    <div>
      <h2 className="mb-4">Buttons</h2>
      <h3>Variants</h3>
      <div className="mb-8 flex flex-wrap gap-2 rounded-md border border-gray-300 p-4">
        <Button onClick={() => console.log('click')}>Standard button</Button>
        <Button variant="filled">Filled button</Button>
        <Button variant="ghost">Ghost button</Button>
        <Button variant="outline" disabled>
          Disabled button
        </Button>
      </div>
      <h3>Rounded</h3>
      <div className="mb-8 flex flex-wrap gap-2 rounded-md border border-gray-300 p-4">
        <Button round>Standard round button</Button>
        <Button round variant="filled">
          Filled round button
        </Button>
        <Button round variant="filled" size="lg">
          Filled large round button
        </Button>
      </div>
      <h3>Sizes</h3>
      <div className="mb-8 flex flex-wrap gap-2 rounded-md border border-gray-300 p-4">
        <Button size="sm">Small button</Button>
        <Button size="md">Default medium button</Button>
        <Button size="lg">Large button</Button>
        <Button size="xl">Extra large button</Button>
      </div>
      <h3>Text with icons </h3>
      <div className="mb-8 flex flex-wrap gap-2 rounded-md border border-gray-300 p-4">
        <Button startIcon={<IconHalfCookie />}>Start icon button</Button>
        <Button endIcon={<IconHalfCookie />}>End icon button</Button>
        <Button size="lg" endIcon={<IconHalfCookie />}>
          Large end icon button
        </Button>
        <Button startIcon={<IconHalfCookie />} endIcon={<IconTrash />}>
          Start and End icon button
        </Button>
      </div>
      <h3>Loading</h3>
      <div className="mb-8 flex flex-wrap gap-2 rounded-md border border-gray-300 p-4">
        <Button loading={true} endIcon={<IconHalfCookie />}>
          Loading button
        </Button>
        <Button
          loading={isLoading}
          startIcon={<IconHalfCookie />}
          onClick={() => setIsLoading(true)}
        >
          Click for loading state
        </Button>
      </div>
      <h3>Full width buttons</h3>
      <div className="mb-8 flex flex-wrap gap-2 rounded-md border border-gray-300 p-4">
        <Button className="w-full">Standard button</Button>
        <Button className="w-full" variant="filled">
          Filled button
        </Button>
        <Button className="w-full" variant="ghost">
          Ghost button
        </Button>
        <Button className="w-full" variant="outline" disabled>
          Disabled button
        </Button>
      </div>
      <h3>Colors</h3>
      <div className="mb-8 flex flex-wrap gap-2 rounded-md border border-gray-300 p-4">
        <div className="flex flex-wrap gap-2">
          <Button color="red">Red standard button</Button>
          <Button color="red" variant="filled">
            Red filled button
          </Button>
          <Button color="red" variant="outline" disabled>
            Red disabled button
          </Button>
          <Button color="red" variant="filled" disabled>
            Red filled disabled button
          </Button>
          <Button round color="red" variant="filled">
            Red round filled button
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button color="green">Red standard button</Button>
          <Button color="green" variant="filled">
            Green filled button
          </Button>
          <Button color="green" variant="outline" disabled>
            Green disabled button
          </Button>
          <Button color="green" variant="filled" disabled>
            Green filled disabled button
          </Button>
          <Button round color="green" variant="filled">
            Green round filled button
          </Button>
        </div>
      </div>
      <h3>Icon buttons</h3>
      <div className="mb-8 flex flex-wrap gap-2 rounded-md border border-gray-300 p-4">
        <IconButton icon={<IconHalfCookie />} />
        <IconButton variant="filled" icon={<IconHalfCookie />} />
        <IconButton variant="ghost" icon={<IconHalfCookie />} />
        <IconButton variant="outline" icon={<IconHalfCookie />} />
        <IconButton loading={true} icon={<IconHalfCookie />} />
        <IconButton disabled icon={<IconHalfCookie />} />
        <IconButton
          icon={<IconTrash />}
          onClick={() => console.log('Delete')}
        />
        <IconButton
          variant="ghost"
          className="opacity-50 hover:text-red-400 hover:opacity-100"
          icon={<IconTrash />}
        />
      </div>
      <h3>Icon button sizes</h3>
      <div className="mb-8 flex flex-wrap gap-2 rounded-md border border-gray-300 p-4">
        <IconButton size="sm" icon={<IconHalfCookie />} />
        <IconButton size="md" icon={<IconHalfCookie />} />
        <IconButton size="lg" icon={<IconHalfCookie />} />
        <IconButton size="xl" icon={<IconHalfCookie />} />
      </div>
      <h3>Icon button colors</h3>
      <div className="mb-8 flex flex-wrap gap-2 rounded-md border border-gray-300 p-4">
        <IconButton color="red" variant="filled" icon={<IconHalfCookie />} />
        <IconButton color="red" icon={<IconHalfCookie />} />
        <IconButton color="green" variant="filled" icon={<IconHalfCookie />} />
        <IconButton color="green" icon={<IconHalfCookie />} />
      </div>
    </div>
  );
};

export default Btn;
