import React from 'react';
import * as CheckboxPrimitives from '@radix-ui/react-checkbox';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../helpers/classnames';
import { IconCheck } from '@allbin/icons';

const checkBoxVariants = cva([
  'relative',
  'inline-flex',
  'size-5',
  'shrink-0',
  'appearance-none',
  'items-center',
  'justify-center',
  'rounded',
  'border',
  'shadow-sm',
  'outline-none',
  'transition',
  'duration-100',
  'enabled:cursor-pointer',
  'hover:bg-primary-300',
  'bg-white',
  'border',
  'border-primary-400',
  'data-[disabled]:border-gray-300 data-[disabled]:bg-gray-100 data-[disabled]:text-white',
  'data-[disabled]:bg-gray-300 ',
  'enabled:data-[state=checked]:border-0 enabled:data-[state=checked]:border-transparent enabled:data-[state=checked]:bg-primary-600',
  'enabled:hover:data-[state=checked]:bg-primary-700',
  'focus-visible:ring-offset-2',
  'focus:ring-primary-600',
  'focus:ring-2',
  'focus:ring-offset-2',
]);

interface CheckboxBaseProps
  extends VariantProps<typeof checkBoxVariants>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitives.Root> {
  id: string;
  checked?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

interface CheckboxWithLabelProps extends CheckboxBaseProps {
  label: string;
  description?: string;
}

interface CheckboxWithoutLabelProps extends CheckboxBaseProps {
  label?: never;
  description?: never;
}

type CheckboxProps = CheckboxWithLabelProps | CheckboxWithoutLabelProps;

const CheckBox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitives.Root>,
  CheckboxProps
>(({ className, checked, disabled, id, label, description, ...props }, ref) => {
  return (
    <div className={cn('flex items-start gap-2')}>
      <CheckboxPrimitives.Root
        id={id}
        ref={ref}
        {...props}
        checked={checked}
        disabled={disabled}
        className={cn(checkBoxVariants({}), className)}
      >
        <CheckboxPrimitives.Indicator className="flex size-full items-center justify-center text-contrast-primary">
          <IconCheck className="size-4" />
        </CheckboxPrimitives.Indicator>
      </CheckboxPrimitives.Root>
      {label && (
        <div className="flex flex-col gap-1">
          <label
            className={cn(
              !disabled
                ? 'hover:cursor-pointer hover:text-primary-700'
                : 'cursor-default, text-gray-400',
              'text-sm font-medium',
            )}
            htmlFor={id}
          >
            {label}
          </label>
          {description && (
            <span className="text-sm text-primary-700">{description}</span>
          )}
        </div>
      )}
    </div>
  );
});
CheckBox.displayName = 'CheckBox';

export default CheckBox;
