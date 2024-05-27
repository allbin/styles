import React, { useEffect, useState } from 'react';
import Button from './Button';
import IconButton from './IconButton';
import { IconHalfCookie, IconTrash } from '@allbin/icons';

// For testing
import { ChadButton } from './ChadButton';
import { ChadIconButton } from './ChadIconButton';

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
        <ChadButton onClick={() => console.log('click')}>
          Standard button
        </ChadButton>
        <ChadButton variant="filled">Filled button</ChadButton>
        <ChadButton variant="ghost">Ghost button</ChadButton>
        <ChadButton variant="outline" disabled>
          Disabled button
        </ChadButton>
      </div>
      <h3>Round</h3>
      <div className="mb-8 flex flex-wrap gap-2 rounded-md border border-gray-300 p-4">
        <ChadButton use="round">Standard round button</ChadButton>
        <ChadButton use="round" variant="filled">
          Filled round button
        </ChadButton>
        <ChadButton use="round" variant="filled" size="lg">
          Filled large round button
        </ChadButton>
      </div>
      <h3>Sizes</h3>
      <div className="mb-8 flex flex-wrap gap-2 rounded-md border border-gray-300 p-4">
        <ChadButton size="sm">Small button</ChadButton>
        <ChadButton size="md">Default medium button</ChadButton>
        <ChadButton size="lg">Large button</ChadButton>
        <ChadButton size="xl">Extra large button</ChadButton>
      </div>
      <h3>With icon</h3>
      <div className="mb-8 flex flex-wrap gap-2 rounded-md border border-gray-300 p-4">
        <ChadButton startIcon={<IconHalfCookie />}>
          Start icon button
        </ChadButton>
        <ChadButton endIcon={<IconHalfCookie />}>End icon button</ChadButton>
        <ChadButton size="lg" endIcon={<IconHalfCookie />}>
          Large end icon button
        </ChadButton>
        <ChadButton startIcon={<IconHalfCookie />} endIcon={<IconTrash />}>
          Start and End icon button
        </ChadButton>
      </div>
      <h3>Loading</h3>
      <div className="mb-8 flex flex-wrap gap-2 rounded-md border border-gray-300 p-4">
        <ChadButton loading={true} endIcon={<IconHalfCookie />}>
          Loading button
        </ChadButton>
        <ChadButton
          loading={isLoading}
          startIcon={<IconHalfCookie />}
          onClick={() => setIsLoading(true)}
        >
          Click for loading state
        </ChadButton>
      </div>
      <h3>Colors</h3>
      <div className="mb-8 flex flex-wrap gap-2 rounded-md border border-gray-300 p-4">
        <ChadButton color="red">Red standard button</ChadButton>
        <ChadButton color="red" variant="filled">
          Red filled button
        </ChadButton>
        <ChadButton color="red" variant="outline" disabled>
          Red disabled button
        </ChadButton>
        <ChadButton color="red" variant="filled" disabled>
          Red filled disabled button
        </ChadButton>
        <ChadButton use="round" color="red" variant="filled">
          Red round filled button
        </ChadButton>
      </div>
      <div className="mb-8 flex flex-wrap gap-2">
        <ChadIconButton icon={<IconHalfCookie />} />
        <ChadIconButton variant="filled" icon={<IconHalfCookie />} />
        <ChadIconButton variant="ghost" icon={<IconHalfCookie />} />
        <ChadIconButton variant="outline" icon={<IconHalfCookie />} />
        <ChadIconButton loading={true} icon={<IconHalfCookie />} />
        <ChadIconButton disabled icon={<IconHalfCookie />} />
        <ChadIconButton
          icon={<IconTrash />}
          onClick={() => console.log('Delete')}
        />
        <ChadIconButton
          variant="ghost"
          className="opacity-50 hover:text-red-400 hover:opacity-100"
          icon={<IconTrash />}
        />
      </div>
      <div className="mb-8 flex flex-wrap gap-2">
        <ChadIconButton size="sm" icon={<IconHalfCookie />} />
        <ChadIconButton size="md" icon={<IconHalfCookie />} />
        <ChadIconButton size="lg" icon={<IconHalfCookie />} />
        <ChadIconButton size="xl" icon={<IconHalfCookie />} />
      </div>
      <div className="mb-8 flex flex-wrap gap-2">
        <Button red>Red button</Button>
        <Button red filled>
          Red filled button
        </Button>
        <Button red disabled>
          Red disabled button
        </Button>
        <Button red filled disabled>
          Red fill disabled btn
        </Button>
        <Button filled round>
          Filled round button
        </Button>
      </div>
      Flex column container
      <div className="mb-8 flex flex-col gap-2">
        <Button>Default button</Button>
        <Button filled>Filled button</Button>
        <Button ghost>Ghost button</Button>
        <Button disabled>Disabled button</Button>
        <Button filled disabled>
          Disabled filled button
        </Button>
        <Button red>Red button</Button>
        <Button red filled>
          Red filled button
        </Button>
        <Button red disabled>
          Red disabled button
        </Button>
        <Button red filled disabled>
          Red fill disabled btn
        </Button>
        <Button filled round>
          Filled round button
        </Button>
      </div>
      IconButton (works as Button but equal sides and round by default)
      <div className="flex flex-wrap gap-2">
        <IconButton>
          <IconHalfCookie className="size-5" />
        </IconButton>
        <IconButton filled>
          <IconHalfCookie className="size-5" />
        </IconButton>
        <IconButton ghost>
          <IconHalfCookie className="size-5" />
        </IconButton>
        <IconButton filled red>
          <IconHalfCookie className="size-5" />
        </IconButton>
        <IconButton ghost red round>
          <IconHalfCookie className="size-5" />
        </IconButton>
      </div>
    </div>
  );
};

export default Btn;
