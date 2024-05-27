import * as React from 'react';
import { iconSizes } from './ChadButton';
import { Spinner } from '../spinner';

// For testing
import { ChadButton } from './ChadButton';

interface IconButtonProps {
  onClick?: () => void;
  className?: string;
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | null;
  variant?: 'outline' | 'filled' | 'ghost' | null;
  loading?: boolean;
  disabled?: boolean;
}

const ChadIconButton: React.FC<IconButtonProps> = ({
  className,
  icon,
  size,
  variant,
  loading,
  disabled,
  onClick,
}) => {
  const sizeClass = size ? iconSizes[size] : 'size-5';

  return (
    <ChadButton
      use="icon"
      size={size}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {loading && <Spinner className={`${sizeClass}`} />}
      {!loading && icon && <span className={sizeClass}>{icon}</span>}
    </ChadButton>
  );
};

ChadIconButton.displayName = 'ChadIconButton';
export { ChadIconButton };
