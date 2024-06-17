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
      <span className="text-[32px] font-bold">Register</span>
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
      <div className="size-full rounded-md bg-background-50 p-10">Text</div>
    </div>
  );
}
