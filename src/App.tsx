import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import Colors from './views/Colors';
import Root from './views/Root';
import { ThemeCtx } from './contexts/ThemeContext';
import { cn } from './helpers/classnames';

const App: React.FC = () => {
  const [theme] = useContext(ThemeCtx);

  return (
    <div
      className={cn(theme, 'relative min-h-full w-full font-sans font-light')}
    >
      <div className="relative h-screen w-full overflow-x-hidden bg-background-100 bg-gradient-to-t from-transparent to-primary-50/70 text-text-900 dark:bg-slate-700">
        <Routes>
          <Route element={<Root />}>
            <Route path="colors" element={<Colors />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
