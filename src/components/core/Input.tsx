import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../helpers/classnames';
import { Tooltip } from 'react-tooltip';
import TextareaAutosize from 'react-textarea-autosize';

const inputVariants = cva(
  [
    'block',
    'w-full',
    'rounded-md',
    'border',
    'px-2',
    'py-1',
    'text-text-800',
    'disabled:bg-background-400',
    'disabled:text-text-800',
    'disabled:border-background-200',
    'bg-background-50',
    'transition-colors',
    'focus:outline-none',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-inset',
    'focus-visible:ring-primary-600',
    'focus-visible:shadow-[0_0_0_3px_inset_white]',
    'focus:text-text-950',
    'placeholder:text-opacity-50',
  ],
  {
    variants: {
      variant: {
        outline: [
          'border-background-400',
          'placeholder:text-text-600',
          'hover:bg-background-200',
        ],
        error: [
          'text-red-700',
          'border-red-600',
          'hover:bg-red-200',
          'focus-visible:bg-red-200',
        ],
      },
    },
    defaultVariants: {
      variant: 'outline',
    },
  },
);

export interface BaseInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  error?: string;
  placeholder?: string;
  helperText?: string;
  helperTextReserveSpace?: boolean;
  toolTip?: string;
  maxLength?: number;
  disabled?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

type InputTypesProps =
  | {
      type?: 'text' | 'email' | 'tel';
      value?: string;
      min?: never;
      max?: never;
      resize?: never;
      rows?: never;
      maxRows?: never;
      minRows?: never;
      startAdornment?: React.ReactNode;
      endAdornment?: React.ReactNode;
      maxLength?: number;
    }
  | {
      type: 'number';
      value?: number;
      min?: number;
      max?: number;
      resize?: never;
      rows?: never;
      maxRows?: never;
      minRows?: never;
      startAdornment?: React.ReactNode;
      endAdornment?: React.ReactNode;
      maxLength?: never;
    }
  | {
      type: 'multiline';
      value?: string;
      min?: never;
      max?: never;
      resize?: boolean;
      rows?: number;
      maxRows?: number;
      minRows?: number;
      startAdornment?: never;
      endAdornment?: never;
      maxLength?: number;
    }
  | {
      type: 'date';
      value?: string;
      min?: string;
      max?: string;
      resize?: never;
      rows?: number;
      maxRows?: number;
      minRows?: number;
      startAdornment?: never;
      endAdornment?: never;
      maxLength?: never;
    };

type InputIdLabelProps =
  | { id?: string; label?: never }
  | { id: string; label: string };

type InputProps = BaseInputProps & InputTypesProps & InputIdLabelProps;

const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(
  (
    {
      id,
      className,
      type = 'text',
      disabled = false,
      value,
      variant,
      toolTip,
      resize = false,
      rows,
      maxRows,
      minRows,
      error,
      label,
      placeholder,
      helperText,
      helperTextReserveSpace = false,
      startAdornment,
      endAdornment,
      onChange,
      ...props
    },
    ref,
  ) => {
    // Generate unique IDs for error and helper text to link with aria-describedby
    const errorId = id ? `${id}-error` : undefined;
    const helperTextId = id ? `${id}-helper` : undefined;
    const describedBy = id
      ? [error && errorId, helperText && helperTextId]
          .filter(Boolean)
          .join(' ') || undefined
      : undefined;

    return (
      <div
        className="group relative grow"
        data-tooltip-id={id}
        data-tooltip-content={error ? error : toolTip}
        data-tooltip-variant={error ? 'error' : 'dark'}
      >
        {id ? (
          <Tooltip id={id} delayShow={300} delayHide={1} opacity={1} />
        ) : null}
        {label && (
          <label
            htmlFor={id}
            className="absolute bottom-full left-0 block text-base font-medium leading-6 text-text-900"
          >
            {label}
          </label>
        )}
        <div className="relative grow rounded-md">
          {startAdornment && (
            <div
              className={cn([
                'absolute',
                'inset-y-0',
                'left-0',
                'flex',
                'items-center',
                'pl-3',
                'text-text-700',
                'group-hover:text-text-800',
                'group-focus-within:text-text-900',
              ])}
            >
              {startAdornment}
            </div>
          )}
          {['text', 'email', 'tel', 'number', 'date'].includes(type) && (
            <input
              id={id}
              className={cn(
                inputVariants({
                  variant: error ? 'error' : variant,
                }),
                className,
                startAdornment && 'pl-10',
                endAdornment && 'pr-10',
              )}
              type={type}
              disabled={disabled}
              value={value}
              ref={ref as React.Ref<HTMLInputElement>}
              placeholder={placeholder}
              onChange={onChange}
              aria-invalid={error ? 'true' : undefined}
              aria-describedby={describedBy}
              aria-required={props.required ? 'true' : undefined}
              {...props}
            />
          )}
          {['multiline'].includes(type) && (
            <TextareaAutosize
              id={id}
              className={cn(
                inputVariants({
                  variant: error ? 'error' : variant,
                }),
                className,
                resize ? 'resize-y' : 'resize-none',
              )}
              placeholder={placeholder}
              disabled={disabled}
              value={value}
              ref={ref as React.Ref<HTMLTextAreaElement>}
              maxRows={rows ? rows : maxRows ? maxRows : undefined}
              minRows={rows ? rows : minRows ? minRows : undefined}
              onChange={onChange}
              aria-invalid={error ? 'true' : undefined}
              aria-describedby={describedBy}
              aria-required={
                (props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)
                  .required
                  ? 'true'
                  : undefined
              }
              {...(props as Omit<
                React.TextareaHTMLAttributes<HTMLTextAreaElement>,
                'style'
              >)}
            />
          )}
          {endAdornment && (
            <div
              className={cn([
                'absolute',
                'inset-y-0',
                'right-0',
                'flex',
                'items-center',
                'pr-3',
                'text-text-700',
                'group-hover:text-text-800',
                'group-focus-within:text-text-900',
              ])}
            >
              {endAdornment}
            </div>
          )}
        </div>
        {error && (
          <p
            id={errorId}
            role="alert"
            aria-live="polite"
            className={cn(
              'ml-[7px] block text-base leading-4 text-red-700',
              !helperTextReserveSpace && 'absolute top-full',
            )}
          >
            {error}
          </p>
        )}
        {helperText && !error && (
          <p
            id={helperTextId}
            className={cn(
              'ml-[7px] block text-base leading-4 text-text-600',
              !helperTextReserveSpace && 'absolute top-full',
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';
export default Input;
