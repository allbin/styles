import React, { useContext } from 'react';
import Profile from './Profile';
import { ThemeCtx } from '../../contexts/ThemeContext';
import Select from '../Select';
import Input from '../core/Input';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const themes = [
  {
    id: 'default',
    label: 'Transport theme',
    description: 'Overrides for Transport',
  },
  {
    id: 'default dark',
    label: 'Transport dark theme',
    description: 'Dark overrides for Transport',
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
];

const TopBar: React.FC = () => {
  const [theme, setTheme] = useContext(ThemeCtx);
  return (
    <div className="flex h-full items-center gap-2 border-b border-b-background-200">
      <div className="mr-auto pl-4">LOGO</div>
      <div className="flex w-80">
        <Input
          id="search"
          placeholder="Search"
          startAdornment={<MagnifyingGlassIcon className="size-5" />}
        />
      </div>
      <div className="ml-auto flex w-fit gap-1 px-1">
        <Select options={themes} onSelect={(v) => setTheme(v)} value={theme} />
        <Profile />
      </div>
    </div>
  );
};

export default TopBar;
