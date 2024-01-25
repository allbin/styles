import React from 'react';
import IconShowcase, { IconShowcaseProps } from './IconShowcase';
import { IconBridge3d, IconBus, IconBusStop, IconText } from '@allbin/icons';
import {
  HomeIcon,
  ListBulletIcon,
  QrCodeIcon,
  Bars3Icon,
  MapPinIcon,
} from '@heroicons/react/24/solid';
import { LinkIcon, MapIcon } from '@heroicons/react/24/outline';

const icons: IconShowcaseProps[] = [
  {
    Icon: HomeIcon,
    role: 'Home',
    lib: 'hero/solid/HomeIcon',
  },
  {
    Icon: QrCodeIcon,
    role: 'Qr code',
    lib: 'hero/solid/QrCodeIcon',
  },
  {
    Icon: IconText,
    role: 'Text',
    lib: 'allbin/IconText',
  },
  {
    Icon: ListBulletIcon,
    role: 'Bullet list',
    lib: 'hero/solid/ListbulletIcon',
  },
  {
    Icon: Bars3Icon,
    role: 'Paragraph',
    lib: 'hero/solid/Bars3Icon',
  },
  {
    Icon: IconBus,
    role: 'Bus',
    lib: 'allbin/IconBus',
  },
  {
    Icon: IconBusStop,
    role: 'Bus stop',
    lib: 'allbin/IconBusStop',
  },
  {
    Icon: IconBridge3d,
    role: 'Bus route',
    lib: 'allbin/IconBridge3d',
  },
  {
    Icon: LinkIcon,
    role: 'Affected routes',
    lib: 'hero/outline/LinkIcon',
  },
  {
    Icon: MapIcon,
    role: 'Map',
    lib: 'hero/outline/MapIcon',
  },
  {
    Icon: MapPinIcon,
    role: 'Map marker',
    lib: 'hero/outline/MapPinIcon',
  },
];

const Icons: React.FC = () => {
  return (
    <div className="mt-8 p-4">
      <div className="mb-6 flex gap-3">
        {icons.map(({ Icon, role }) => (
          <Icon className="size-5" key={role} />
        ))}
      </div>
      Below you may view the icons on buttons, on dark/light and in theme
      colors.
      <br />
      Often when presenting an icon it is slightly tinted, such as on buttons.
      For this reason Primary, Secondary and Accent are presented with shade 700
      here.
      <div className="mt-7 grid grid-cols-3 gap-6">
        {icons.map((icon) => (
          <IconShowcase {...icon} key={icon.role} />
        ))}
      </div>
    </div>
  );
};

export default Icons;
