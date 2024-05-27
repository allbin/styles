import React from 'react';
import Button from './Button';
import IconButton from './IconButton';
import { IconHalfCookie } from '@allbin/icons';

// For testing
import { ChadButton } from './ChadButton';

const Btn: React.FC = () => {
  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        <ChadButton>Standard button</ChadButton>
        <ChadButton variant="filled" disabled>
          Filled button
        </ChadButton>
        <ChadButton variant="ghost">Ghost button</ChadButton>
        <ChadButton variant="outline" disabled>
          Disabled button
        </ChadButton>
      </div>
      <div className="mb-8 flex flex-wrap gap-2">
        <ChadButton size="sm">Small default button</ChadButton>
        <ChadButton size="md">Medium default button</ChadButton>
        <ChadButton size="lg">Large button</ChadButton>
        <ChadButton size="xl">Extra large button</ChadButton>
      </div>
      <div className="mb-8 flex flex-wrap gap-2">
        <ChadButton startIcon={<IconHalfCookie />}>
          Start icon button
        </ChadButton>
        <ChadButton endIcon={<IconHalfCookie />}>End icon button</ChadButton>
      </div>
      <div className="mb-8 flex flex-wrap gap-2">
        <ChadButton loading={true} endIcon={<IconHalfCookie />}>
          Loading button
        </ChadButton>
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
