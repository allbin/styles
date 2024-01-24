import React from 'react';
import { useSelect } from 'react-cosmos/client';

const Decorator = ({ children }: { children: React.ReactNode }) => {
  const [theme] = useSelect('theme', {
    options: [
      'defaut',
      'default dark',
      'viu',
      'viu dark',
      'transport',
      'transport dark',
    ],
  });
  return <div className={theme}>{children}</div>;
};

export default Decorator;
