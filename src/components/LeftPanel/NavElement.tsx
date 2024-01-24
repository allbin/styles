import React, { PropsWithChildren } from 'react';
import { cn } from '../../helpers/classnames';
import { NavLink } from 'react-router-dom';

interface NavElementProps {
  to: string;
}

const NavElement: React.FC<PropsWithChildren<NavElementProps>> = ({
  to,
  children,
}) => {
  return (
    <NavLink
      to={to}
      className={cn(
        'group relative flex h-8 items-center pl-2 font-work font-medium',
      )}
      end
    >
      {({ isActive }) => (
        <>
          <div
            className={cn(
              'absolute -inset-x-2 h-full rounded bg-transparent transition-all duration-300 group-hover:inset-x-1 group-hover:bg-secondary-200',
              isActive &&
                'inset-x-1 bg-secondary-600 group-hover:bg-secondary-700',
            )}
          />
          <div
            className={cn(
              'relative flex items-center gap-1 text-text-800',
              isActive && 'text-text-100',
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
