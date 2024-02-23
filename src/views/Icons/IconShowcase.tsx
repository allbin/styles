import React from 'react';
import Button from '../../components/Button/Button';
import { LinkIcon } from '@heroicons/react/24/outline';
import { IconBusStop } from '@allbin/icons';

export interface IconShowcaseProps {
  role: string;
  /** Lib and name like; 'allbin/IconBus' */
  lib: string;
  Icon: typeof LinkIcon | typeof IconBusStop;
}

const IconShowcase: React.FC<IconShowcaseProps> = ({ role, lib, Icon }) => {
  return (
    <div className="relative mt-4 rounded border border-primary-300 bg-background-50 p-3">
      <div className="absolute -top-4 h-5 text-xs">
        Role <span className="mr-4 font-semibold">{role}</span>Lib{' '}
        <span className="ml-1 font-semibold">{lib}</span>
      </div>
      <div className="flex flex-wrap justify-evenly gap-3">
        <Button>
          <Icon className="size-5" /> On button
        </Button>
        <Button filled>
          <Icon className="size-5" /> On filled btn
        </Button>
        <div className="flex aspect-square h-8 items-center justify-center gap-1 bg-background-900 text-text-50">
          <Icon className="size-5" />
        </div>
        <div className="flex aspect-square h-8 items-center justify-center gap-1 bg-background-50 text-text-950">
          <Icon className="size-5" />
        </div>
        <div className="flex items-center gap-1 p-1 text-primary-700">
          Primary <Icon className="size-5" />
        </div>
        <div className="flex items-center gap-1 p-1 text-secondary-700">
          Secondary <Icon className="size-5" />
        </div>
        <div className="flex items-center gap-1 p-1 text-accent-700">
          Accent <Icon className="size-5" />
        </div>
      </div>
    </div>
  );
};

export default IconShowcase;
