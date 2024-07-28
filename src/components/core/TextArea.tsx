import React from 'react';
import { cn } from '../../helpers/classnames';

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  disabled,
  placeholder,
  className,
}) => {
  return (
    <textarea
      disabled={disabled}
      className={cn(
        'block h-32 min-h-32 w-full rounded-md border-0 bg-background-50 px-2 py-1.5 outline-secondary-500 ring-1 ring-inset ring-secondary-300 placeholder:text-text-700 hover:ring-primary-600 focus:ring-0 disabled:bg-background-300/50 disabled:text-text-700 disabled:ring-primary-300',
        className,
      )}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default TextArea;
