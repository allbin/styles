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
        'h-32 w-full cursor-pointer rounded-md border border-primary-600 bg-background-50 p-2 text-text-800 disabled:cursor-default disabled:border-background-300 disabled:bg-background-200 disabled:text-text-500',
        className,
      )}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default TextArea;
