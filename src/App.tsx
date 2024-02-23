import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeCtx } from './contexts/ThemeContext';
import { cn } from './helpers/classnames';
import Home from './views/home/Home';
import Colors from './views/Colors';
import Root from './views/Root';
import Gallery from './views/gallery/Gallery';
import Fonts from './views/Fonts';
import Icons from './views/Icons/Icons';

const App: React.FC = () => {
  const [theme] = useContext(ThemeCtx);

  return (
    <div
      className={cn(theme, 'relative min-h-full w-full font-sans font-light')}
    >
      <div className="relative h-screen w-full overflow-x-hidden bg-background-50 text-text-900">
        <Routes>
          <Route element={<Root />}>
            <Route path="colors" element={<Colors />} />
            <Route path="gallery/*" element={<Gallery />} />
            <Route path="fonts" element={<Fonts />} />
            <Route path="icons" element={<Icons />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
