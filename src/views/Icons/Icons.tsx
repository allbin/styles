import React from 'react';
import IconShowcase, { IconShowcaseProps } from './IconShowcase';
import {
  IconAlignLeft,
  IconAlignCenter,
  IconAlignRight,
  IconItalic,
  IconBridge3d,
  IconBus,
  IconBusStop,
  IconText,
} from '@allbin/icons';
// import {
//   ListBulletIcon,
//   QrCodeIcon,
//   Bars3Icon,
// } from '@heroicons/react/24/solid';
import {
  LinkIcon,
  MapIcon,
  HomeIcon,
  MapPinIcon,
  ListBulletIcon,
  QrCodeIcon,
  Bars3Icon,
  ArrowUpLeftIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
  ArrowRightIcon,
  ArrowDownRightIcon,
  ArrowDownIcon,
  ArrowDownLeftIcon,
  ArrowLeftIcon,
  ArrowsPointingInIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ScissorsIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

const icons: IconShowcaseProps[] = [
  {
    Icon: HomeIcon,
    role: 'Home',
    lib: 'hero/HomeIcon',
  },
  {
    Icon: QrCodeIcon,
    role: 'Qr code',
    lib: 'hero/QrCodeIcon',
  },
  {
    Icon: IconText,
    role: 'Text',
    lib: 'allbin/IconText',
  },
  {
    Icon: ListBulletIcon,
    role: 'Bullet list',
    lib: 'hero/ListbulletIcon',
  },
  {
    Icon: Bars3Icon,
    role: 'Paragraph',
    lib: 'hero/Bars3Icon',
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
    lib: 'hero/LinkIcon',
  },
  {
    Icon: MapIcon,
    role: 'Map',
    lib: 'hero/MapIcon',
  },
  {
    Icon: MapPinIcon,
    role: 'Map marker',
    lib: 'hero/MapPinIcon',
  },
  { Icon: ArrowUpLeftIcon, role: 'Arrow up left', lib: 'hero/ArrowUpLeftIcon' },
  { Icon: ArrowUpIcon, role: 'Arrow up', lib: 'hero/ArrowUpIcon' },
  {
    Icon: ArrowUpRightIcon,
    role: 'Arrow up right',
    lib: 'hero/ArrowUpRightIcon',
  },
  { Icon: ArrowRightIcon, role: 'Arrow right', lib: 'hero/ArrowRightIcon' },
  {
    Icon: ArrowDownRightIcon,
    role: 'Arrow down right',
    lib: 'hero/ArrowDownRightIcon',
  },
  { Icon: ArrowDownIcon, role: 'Arrow down', lib: 'hero/ArrowDownIcon' },
  {
    Icon: ArrowDownLeftIcon,
    role: 'Arrow down left',
    lib: 'hero/ArrowDownLeftIcon',
  },
  { Icon: ArrowLeftIcon, role: 'Arrow left', lib: 'hero/ArrowLeftIcon' },
  {
    Icon: ArrowsPointingInIcon,
    role: 'Center',
    lib: 'hero/ArrowsPointingInIcon',
  },
  { Icon: IconAlignLeft, role: 'Align left', lib: 'allbin/IconAlignLeft' },
  {
    Icon: IconAlignCenter,
    role: 'Align center',
    lib: 'allbin/IconAlignCenter',
  },
  { Icon: IconAlignRight, role: 'Align right', lib: 'allbin/IconAlignRight' },
  { Icon: IconItalic, role: 'Italic', lib: 'allbin/IconItalic' },
  {
    Icon: MagnifyingGlassIcon,
    role: 'Search',
    lib: 'hero/MagnifyingGlassIcon',
  },
  { Icon: PlusIcon, role: 'Add', lib: 'hero/PlusIcon' },
  { Icon: TrashIcon, role: 'Delete', lib: 'hero/TrashIcon' },
  { Icon: ScissorsIcon, role: 'Cut', lib: 'hero/ScissorsIcon' },
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
