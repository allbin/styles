import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react';

export const ThemeCtx = createContext<
  [string, Dispatch<SetStateAction<string>>]
>(['', () => {}]);

const ThemeContext: React.FC<PropsWithChildren> = ({ children }) => {
  const themeState = useState('default');

  return <ThemeCtx.Provider value={themeState}>{children}</ThemeCtx.Provider>;
};

export default ThemeContext;
