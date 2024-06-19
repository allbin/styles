import React from 'react';
import Input from '@/components/Input/Input';
import CheckBox from '@/components/Checkbox/Checkbox';
import Button from '@/components/Button/Button';
import { IconArrowRight } from '@allbin/icons';

const Home: React.FC = () => {
  return (
    <div className="flex h-full max-w-screen-lg flex-col gap-2">
      <span className="text-sm font-bold">Level 100</span>
      <div className="size-full rounded-md bg-background-50 p-10">
        <span className="text-sm font-bold">Level - 50</span>
        <span className="mb-4 flex text-[32px] font-bold text-text-600">
          600 - Register
        </span>
        <p className="mb-4 font-bold text-text-700">
          700 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis.
        </p>
        <p className="text-text-950">
          950 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis.
        </p>
      </div>
      <div className="flex size-full flex-col gap-2 rounded-md bg-background-50 p-10">
        <span className="flex text-sm font-bold">Level - 50</span>
        <span className="text-xl font-bold text-text-600">
          1. Discribe your role
        </span>
        <p className="text-text-500">Add Dropdown</p>
      </div>
      <div className="flex gap-2">
        <div className="flex gap-2">
          <div className="flex flex-1 flex-col gap-2 rounded-md bg-background-50 p-10">
            <span className="text-sm font-bold">Level - 50</span>
            <span className="mb-10 text-xl font-bold text-text-600">
              2. Enter your information
            </span>
            <div className="flex flex-col gap-8">
              <Input id="first-name" label="First name" />
              <Input id="last-name" label="Last name" />
              <Input
                type="email"
                helperText="Your work email adress"
                id="email"
                label="Email"
              />
            </div>
            <div className="mt-10 rounded bg-background-200 p-4">
              <CheckBox
                id="consent-start"
                label="The information I provided is correct"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between gap-2 rounded-md bg-background-50 p-10">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Level - 50</span>
              <span className="text-xl font-bold text-text-600">
                3. Consent
              </span>
            </div>
            <CheckBox
              id="consent"
              label="I consent to the terms and conditions and privacy policy"
            />
            <div className="flex flex-col gap-2 rounded bg-background-200 p-4">
              <span className="text-sm font-bold">Level - 200</span>
              <span className="text-text-600">
                By clicking "Next", you agree to the terms and conditions and
                privacy policy.
              </span>
            </div>
            <Button variant={'filled'} endIcon={<IconArrowRight />}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
