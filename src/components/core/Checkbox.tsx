import React from 'react';
import * as CheckboxPrimitives from '@radix-ui/react-checkbox';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/helpers/classnames.ts';
import { Tooltip } from 'react-tooltip';
import { IconCheck } from '@/icons';

const checkBoxVariants = cva([
  'relative',
  'inline-flex',
  'size-5',
  'shrink-0',
  'appearance-none',
  'items-center',
  'justify-center',
  'rounded',
  'shadow-sm',
  'outline-none',
  'transition',
  'duration-100',
  'enabled:cursor-pointer',
  'hover:bg-primary-300',
  'bg-background-50',
  'border',
  'border-2',
  'border-primary-500',
  'enabled:data-[state=checked]:border-transparent',
  'enabled:data-[state=checked]:bg-primary-500',
  'enabled:hover:data-[state=checked]:opacity-80',
  'data-[disabled]:border-background-400',
  'data-[disabled]:text-text-950',
  'data-[disabled]:bg-background-400',
  'data-[disabled]:data-[state=checked]:!bg-background-500',
  'data-[disabled]:data-[state=checked]:border-background-500',
  'focus-visible:ring-primary-500',
  'focus-visible:ring-2',
  'focus-visible:ring-offset-2',
]);

interface CheckboxBaseProps
  extends VariantProps<typeof checkBoxVariants>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitives.Root> {
  id: string;
  checked?: boolean;
  disabled?: boolean;
  toolTip?: string;
  error?: string;
  onClick?: () => void;
}

interface CheckboxWithLabelProps extends CheckboxBaseProps {
  label: string;
  description?: string;
  labelClassName?: string;
}

interface CheckboxWithoutLabelProps extends CheckboxBaseProps {
  label?: never;
  description?: never;
  labelClassName?: never;
}

type CheckboxProps = CheckboxWithLabelProps | CheckboxWithoutLabelProps;

const CheckBox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitives.Root>,
  CheckboxProps
>(
  (
    {
      className,
      checked,
      disabled,
      id,
      label,
      description,
      labelClassName,
      toolTip,
      ...props
    },
    ref,
  ) => {
    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if ((event.code === 'Space' || event.code === 'Enter') && !disabled) {
          event.preventDefault();
          props.onClick?.();
          props.onChange?.(event);
          props.onCheckedChange?.(checked || 'indeterminate');
        }
      },
      [disabled, props, checked],
    );

    return (
      <div className={cn('flex items-start gap-2')}>
        <div
          className={cn('flex gap-2')}
          data-tooltip-id={id}
          data-tooltip-content={toolTip}
        >
          {id ? <Tooltip id={id} delayShow={300} delayHide={1} /> : null}
          <CheckboxPrimitives.Root
            id={id}
            ref={ref}
            {...props}
            checked={checked}
            disabled={disabled}
            onKeyDown={handleKeyDown}
            className={cn(checkBoxVariants({}), className)}
          >
            <CheckboxPrimitives.Indicator className="flex size-full items-center justify-center text-contrast-primary">
              <IconCheck className="size-4" />
            </CheckboxPrimitives.Indicator>
          </CheckboxPrimitives.Root>
          {label && (
            <div className={cn('flex flex-col gap-1', labelClassName)}>
              <label
                className={cn(
                  !disabled
                    ? 'hover:cursor-pointer hover:text-text-900'
                    : 'cursor-default, text-text-400',
                  'text-sm font-medium text-text-800',
                )}
                htmlFor={id}
              >
                {label}
              </label>
              {description && (
                <span className="text-sm text-text-700">{description}</span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  },
);

CheckBox.displayName = 'CheckBox';
export default CheckBox;
