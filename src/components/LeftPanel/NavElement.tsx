import React, { PropsWithChildren } from 'react';
import { cn } from '../../helpers/classnames';
import { Link, RoutesByPath } from '@tanstack/react-router';
import { router } from '@/router';

interface NavElementProps {
  to: keyof RoutesByPath<typeof router.routeTree>;
}

const NavElement: React.FC<PropsWithChildren<NavElementProps>> = ({
  to,
  children,
}) => {
  return (
    <Link
      to={to}
      className={cn(
        'font-work group relative flex h-10 items-center pl-4 font-medium',
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
              'relative flex items-center gap-2 text-text-800',
              isActive && 'text-text-50',
            )}
          >
            {children}
          </div>
        </>
      )}
    </Link>
  );
};

export default NavElement;
