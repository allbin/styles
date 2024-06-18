import { createFileRoute } from '@tanstack/react-router';
import { IconArrowRight } from '@allbin/icons';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import CheckBox from '@/components/Checkbox/Checkbox';

export const Route = createFileRoute('/')({
  component: Root,
});

function Root() {
  return (
    <div className="flex h-full w-[1024px] flex-col gap-2">
      <span className="text-sm font-bold">Level 100</span>
      <div className="size-full rounded-md bg-background-50 p-10">
        <span className="text-sm font-bold">Level - 50</span>
        <span className="mb-4 flex text-[32px] font-bold text-text-600">
          600 - Register
        </span>
        <p className="mb-4 font-bold text-text-600">
          600 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
        <p className="mb-4 text-text-950">
          950 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis.
        </p>
      </div>
      <div className="size-full">
        <div className="flex gap-2">
          <div className="flex flex-1 flex-col gap-2 rounded-md bg-background-50 p-10">
            <span className="text-sm font-bold">Level - 50</span>
            <span className="mb-10 text-xl font-bold">
              1. Enter your information
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
            <div className="mt-10">
              <CheckBox
                id="consent-start"
                label="The information I provided is correct"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between gap-2 rounded-md bg-background-50 p-10">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Level - 50</span>
              <span className="text-xl font-bold">2. Consent</span>
            </div>
            <CheckBox
              id="consent"
              label="I consent to the terms and conditions and privacy policy"
            />
            <div className="flex flex-col gap-2 rounded-md bg-background-200 p-4">
              <span className="rounded-md text-sm font-bold">Level - 200</span>
              <span>
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
      <div className="size-full rounded-md bg-background-50 p-10">
        <span className="mb-4 flex text-xl font-bold text-text-700">
          700 - Review
        </span>
        <p className="mb-4 font-bold text-text-950">
          950 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
        <p className="mb-4 font-bold text-text-900">
          900 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
        <p className="mb-4 font-bold text-text-800">
          800 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
        <p className="mb-4 font-bold text-text-700">
          700 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
        <p className="mb-4 font-bold text-text-600">
          600 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
        <p className="mb-4 font-bold text-text-500">
          500 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
        <p className="mb-4 font-bold text-text-400">
          400 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
        <p className="mb-4 font-bold text-text-300">
          300 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
        <p className="mb-4 font-bold text-text-200">
          200 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
        <p className="mb-4 font-bold text-text-100">
          100 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
        <p className="mb-4 font-bold text-text-50">
          50 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
      </div>
      <div className="size-full rounded-md bg-background-50 p-10">
        <span className="mb-4 flex text-[32px] font-bold text-text-500">
          500 - 32px font-bold
        </span>
        <p className="mb-4 font-bold text-text-600">
          600 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis. Fusce eu nulla at libero mattis lacinia sed eu
          ipsum. Proin feugiat dapibus orci ut varius. Sed eu tellus non est
          posuere bibendum.
        </p>
        <p className="mb-4 text-text-950">
          950 - Sed laoreet mauris lobortis sapien feugiat pulvinar. Fusce vel
          diam eu tellus consectetur interdum. Quisque eu libero urna. Aliquam
          dolor mi, varius sed sodales ac, venenatis condimentum dolor. Fusce
          quis pulvinar felis.
        </p>
      </div>
      <div className="size-full rounded-md bg-background-50 p-10">
        <span className="mb-4 flex text-[32px] font-bold text-text-400">
          400 - Introduction
        </span>
        <span className="mb-4 flex text-[32px] font-bold text-text-500">
          500 - Introduction
        </span>
        <span className="mb-4 flex text-[32px] font-bold text-text-600">
          600 - Introduction
        </span>
        <span className="mb-4 flex text-[32px] font-bold text-text-700">
          700 - Introduction
        </span>
        <span className="mb-4 flex text-[32px] font-bold text-text-800">
          800 - Introduction
        </span>
        <p className="mb-4 text-[24px] font-bold text-text-800">
          800 - Sed laoreet mauris lobortis sapien feugiat pulvinar.
        </p>
        <p className="mb-4 text-[24px] font-bold text-text-700">
          700 - Sed laoreet mauris lobortis sapien feugiat pulvinar.
        </p>
        <p className="mb-4 text-[24px] font-bold text-text-600">
          600 - Sed laoreet mauris lobortis sapien feugiat pulvinar.
        </p>
        <p className="mb-4 text-[24px] font-bold text-text-500">
          500 - Sed laoreet mauris lobortis sapien feugiat pulvinar.
        </p>
        <p className="mb-4 text-[24px] font-bold text-text-400">
          400 - Sed laoreet mauris lobortis sapien feugiat pulvinar.
        </p>
      </div>
    </div>
  );
}
