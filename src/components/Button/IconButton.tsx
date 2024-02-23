import React from 'react';
import Button, { ButtonProps } from './Button';

const IconButton: React.FC<ButtonProps> = ({
  children,
  round = true,
  ...props
}) => {
  return (
    <Button {...props} round={round} className="min-h-9 min-w-9 p-2">
      {children}
    </Button>
  );
};

export default IconButton;
