import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
} from '@heroicons/react/24/solid';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../helpers/classnames';

const dropDownTriggerVariants = cva(
  [
    'flex',
    'font-medium',
    'items-center',
    'justify-between',
    'h-[36px]',
    'px-2',
    'border',
    'border-primary-600',
    'transition-colors',
    'rounded-md',
    'disabled:active:opacity-100',
    'disabled:pointer-events-none',
    'active:opacity-80',
    'hover:bg-primary-200',
  ],
  {
    variants: {
      variant: {
        default: '',
        error: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const dropDownContentVariants = cva(
  [
    'flex',
    'text-primary-600',
    'bg-background-100',
    'border',
    'border-primary-200',
    'rounded-md',
    'mt-1',
  ],
  {
    variants: {
      variant: {
        default: '',
        error: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface DropdownTriggerProps
  extends SelectPrimitive.SelectTriggerProps,
    VariantProps<typeof dropDownTriggerVariants> {}

interface DropdownContentProps
  extends SelectPrimitive.SelectContentProps,
    VariantProps<typeof dropDownContentVariants> {}

const Dropdown = SelectPrimitive.Root;

const DropdownGroup = SelectPrimitive.Group;

const DropdownValue = SelectPrimitive.Value;

const DropdownTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  DropdownTriggerProps
  // React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      dropDownTriggerVariants({
        variant: 'default',
      }),
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDownIcon className="size-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
DropdownTrigger.displayName = SelectPrimitive.Trigger.displayName;

const DropdownScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      'flex cursor-default items-center justify-center py-1',
      className,
    )}
    {...props}
  >
    <ChevronUpIcon className="size-4" />
  </SelectPrimitive.ScrollUpButton>
));
DropdownScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const DropdownScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      'flex cursor-default items-center justify-center py-1',
      className,
    )}
    {...props}
  >
    <ChevronDownIcon className="size-4" />
  </SelectPrimitive.ScrollDownButton>
));
DropdownScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const DropdownContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  DropdownContentProps
  // React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        dropDownContentVariants({
          variant: 'default',
        }),
        className,
      )}
      {...props}
      position={position}
      {...props}
    >
      <DropdownScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <DropdownScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
DropdownContent.displayName = SelectPrimitive.Content.displayName;

const DropdownLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
    {...props}
  />
));
DropdownLabel.displayName = SelectPrimitive.Label.displayName;

const DropdownItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-background-200 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex size-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="size-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
DropdownItem.displayName = SelectPrimitive.Item.displayName;

const DropdownSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('bg-muted -mx-1 my-1 h-px', className)}
    {...props}
  />
));
DropdownSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Dropdown,
  DropdownGroup,
  DropdownValue,
  DropdownTrigger,
  DropdownContent,
  DropdownLabel,
  DropdownItem,
  DropdownSeparator,
  DropdownScrollUpButton,
  DropdownScrollDownButton,
};
