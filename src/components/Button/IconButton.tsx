import * as React from 'react';
import { Spinner } from '../spinner';
import Button from './Button';

interface IconButtonProps {
  onClick?: () => void;
  className?: string;
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | null;
  variant?: 'outline' | 'filled' | 'ghost' | null;
  round?: boolean;
  loading?: boolean;
  disabled?: boolean;
  color?: 'red' | 'green' | 'blue' | 'yellow';
}

const IconButton: React.FC<IconButtonProps> = ({
  className,
  color,
  icon,
  size,
  variant,
  round = false,
  loading,
  disabled,
  onClick,
}) => {
  return (
    <Button
      size={size}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      className={className}
      color={color}
      icon={true}
      round={round}
    >
      {loading && <Spinner />}
      {!loading && icon && <span>{icon}</span>}
    </Button>
  );
};

IconButton.displayName = 'IconButton';
export default IconButton;
