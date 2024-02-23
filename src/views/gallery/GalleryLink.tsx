import React, { PropsWithChildren } from 'react';
import { cn } from '../../helpers/classnames';
import { NavLink } from 'react-router-dom';

interface GalleryLinkProps {
  to: string;
  end?: boolean;
}

const GalleryLink: React.FC<PropsWithChildren<GalleryLinkProps>> = ({
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
              'absolute -inset-x-2 bottom-1 h-1 bg-transparent transition-all duration-300 group-hover:inset-x-1 group-hover:bg-secondary-200',
              isActive &&
                'inset-x-1 bg-secondary-600 group-hover:bg-secondary-700',
            )}
          />
          <div
            className={cn(
              'relative flex items-center gap-1 text-text-700',
              isActive && 'text-text-900',
            )}
          >
            {children}
          </div>
        </>
      )}
    </NavLink>
  );
};

export default GalleryLink;
