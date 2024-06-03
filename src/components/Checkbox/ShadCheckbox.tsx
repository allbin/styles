import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { IconCheck } from '@allbin/icons';
// import { Tooltip } from 'react-tooltip';
import { cn } from '../../helpers/classnames';
import { cva, type VariantProps } from 'class-variance-authority';

const checkBoxVariants = cva([
  //'ring-offset-background',
  // 'focus-visible:ring-ring',
  //'data-[state=checked]:bg-primary',
  //'data-[state=checked]:text-primary-foreground',
  'flex',
  'relative',
  'items-center',
  'peer',
  'h-5',
  'w-5',
  'shrink-0',
  'rounded',
  'border',
  'border-primary-400',
  'bg-background-50',
  'focus-visible:outline-none',
  'focus-visible:ring-primary-600',
  'focus-visible:ring-2',
  'focus-visible:ring-offset-2',
  'focus:ring-primary-600',
  'focus:ring-2',
  'focus:ring-offset-2',
  'disabled:cursor-not-allowed',
  'disabled:opacity-50',
  'hover:bg-primary-300',
  'active:ring-primary-600',
  'active:ring-2',
  'active:ring-offset-2',
]);

interface ShadCheckboxProps
  extends VariantProps<typeof checkBoxVariants>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: string;
}

const ShadCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  ShadCheckboxProps
>(({ className, label, ...props }, ref) => {
  console.log(label);

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(checkBoxVariants({}), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn(
          ' flex h-full w-full items-center justify-center border-0 bg-primary-500 hover:bg-primary-600',
        )}
      >
        <IconCheck className="size-4 text-white" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
ShadCheckbox.displayName = CheckboxPrimitive.Root.displayName;

export default ShadCheckbox;
