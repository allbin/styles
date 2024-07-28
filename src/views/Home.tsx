import React from 'react';
import Input from '@/components/core/Input';
import CheckBox from '@/components/core/Checkbox';
import IconButton from '@/components/core/IconButton';
import Button from '@/components/core/Button';
import { IconArrowRight, IconTrash, IconEdit } from '@allbin/icons';

const tableData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    role: 'User',
  },
  {
    id: 3,
    name: 'Nils Nilsson',
    email: 'nils.nilsson@example.com',
    role: 'User',
  },
  {
    id: 4,
    name: 'Bengt Bengtsson',
    email: 'bengt.bengtsson@example.com',
    role: 'User',
  },
  {
    id: 5,
    name: 'Karin Karindotter',
    email: 'karin.karindotter@example.com',
    role: 'User',
  },
];

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
            <Button variant="filled" endIcon={<IconArrowRight />}>
              Next
            </Button>
          </div>
        </div>
      </div>
      <div className="flex size-full flex-col gap-2 rounded-md bg-background-50 p-10">
        <span className="flex text-sm font-bold">Level - 50</span>
        <span className="mb-8 text-xl font-bold text-text-600">User List</span>
        <div className="flex flex-col">
          <div className="flex border-b border-background-300 pb-4 last:border-b-0">
            <span className="w-1/6 text-sm font-bold text-text-600">Role</span>
            <span className="w-2/6 text-sm font-bold text-text-600">Name</span>
            <span className="w-2/6 text-sm font-bold text-text-600">Email</span>
            <span className="flex w-1/6 justify-end text-sm font-bold">
              Edit
            </span>
          </div>
          {tableData.map((user) => (
            <div
              key={user.id}
              className="flex border-b border-background-300 py-4 last:border-b-0 hover:bg-background-100"
            >
              <span className="w-1/6">{user.role}</span>
              <span className="w-2/6">{user.name}</span>
              <span className="w-2/6">{user.email}</span>
              <div className="flex w-1/6 justify-end gap-2">
                <IconButton
                  variant="filled"
                  size="sm"
                  color="blue"
                  icon={<IconEdit />}
                />
                <IconButton
                  variant="filled"
                  size="sm"
                  color="red"
                  icon={<IconTrash />}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
