import React, { useContext } from 'react';
import Profile from './Profile';
import { ThemeCtx } from '../../contexts/ThemeContext';
import Select from '../Select';
import Input from '../Input';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const themes = [
  {
    id: 'default',
    label: 'Default theme',
    description: 'The base AllBinary style',
  },
  {
    id: 'default dark theme',
    label: 'Default dark',
    description: 'The base dark AllBinary style',
  },
  {
    id: 'viu',
    label: 'Viu theme',
    description: 'The style overrides used by Viu',
  },
  {
    id: 'viu dark',
    label: 'Viu dark theme',
    description: 'The dark style overrides used by Viu',
  },
  {
    id: 'transport',
    label: 'Transport theme',
    description: 'Overrides for Transport',
  },
  {
    id: 'transport dark',
    label: 'Transport dark theme',
    description: 'Dark overrides for Transport',
  },
];

const TopBar: React.FC = () => {
  const [theme, setTheme] = useContext(ThemeCtx);
  return (
    <div className="flex h-full items-center gap-2">
      <div className="mr-auto">LOGO</div>
      <div className="flex w-80">
        <Input
          id="search"
          placeholder="Search"
          icon={<MagnifyingGlassIcon className="size-5" />}
        />
      </div>
      <div className="ml-auto flex w-64 gap-1 px-1">
        <Select options={themes} onSelect={(v) => setTheme(v)} value={theme} />
        <Profile />
      </div>
    </div>
  );
};

export default TopBar;
