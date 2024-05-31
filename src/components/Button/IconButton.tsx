import * as React from 'react';
// import { iconSizes } from './Button';
import { Spinner } from '../spinner';
import Button from './Button';

interface IconButtonProps {
  onClick?: () => void;
  className?: string;
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | null;
  variant?: 'outline' | 'filled' | 'ghost' | null;
  loading?: boolean;
  disabled?: boolean;
  color?: 'red' | 'green';
}

const IconButton: React.FC<IconButtonProps> = ({
  className,
  color,
  icon,
  size,
  variant,
  loading,
  disabled,
  onClick,
}) => {
  // const sizeClass = size ? iconSizes[size] : 'size-5';

  return (
    <Button
      size={size}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      className={className}
      color={color}
      icon={true}
    >
      {loading && <Spinner />}
      {!loading && icon && <span>{icon}</span>}
    </Button>
  );
};

IconButton.displayName = 'IconButton';
export default IconButton;
