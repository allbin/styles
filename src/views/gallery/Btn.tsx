import React from 'react';
import Button from '../../components/Button/Button';

const Btn: React.FC = () => {
  return (
    <div>
      Flex container
      <div className="mb-8 flex flex-wrap gap-2">
        <Button>Default button</Button>
        <Button filled>Filled button</Button>
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
      </div>
      Flex column container
      <div className="flex flex-col gap-2">
        <Button>Default button</Button>
        <Button filled>Filled button</Button>
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
      </div>
    </div>
  );
};

export default Btn;
