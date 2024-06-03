import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
//import { Check } from 'lucide-react';
import { IconCheck } from '@allbin/icons';
// import { Tooltip } from 'react-tooltip';
import { cn } from '../../helpers/classnames';
// import { CheckIcon } from '@radix-ui/react-icons';
import { cva, type VariantProps } from 'class-variance-authority';

const checkBoxVariants = cva(['bg-red-500']);

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
      className={cn(
        'ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground peer h-5 w-5 shrink-0 rounded border border-primary-400 bg-background-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center text-current')}
      >
        <IconCheck className="size-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
ShadCheckbox.displayName = CheckboxPrimitive.Root.displayName;

export default ShadCheckbox;
