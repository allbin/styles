import React, { PropsWithChildren } from 'react';
import { cn } from '../../helpers/classnames';
import { NavLink } from 'react-router-dom';

interface NavElementProps {
  to: string;
  end?: boolean;
}

const NavElement: React.FC<PropsWithChildren<NavElementProps>> = ({
  to,
  children,
  end,
}) => {
  return (
    <NavLink
      to={to}
      end={end}
      className={cn(
        'font-work group relative flex h-8 items-center pl-2 font-medium',
      )}
    >
      {({ isActive }) => (
        <>
          <div
            className={cn(
              'absolute -inset-x-2 h-full rounded bg-transparent transition-all duration-300 group-hover:inset-x-1 group-hover:bg-secondary-200',
              isActive && 'inset-x-1 bg-primary-500 group-hover:bg-primary-700',
            )}
          />
          <div
            className={cn(
              'relative flex items-center gap-1 text-text-800',
              isActive && 'text-text-50',
            )}
          >
            {children}
          </div>
        </>
      )}
    </NavLink>
  );
};

export default NavElement;
