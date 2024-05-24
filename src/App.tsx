import React, { useContext } from 'react';
import { RouterProvider } from '@tanstack/react-router';
import { ThemeCtx } from './contexts/ThemeContext';
import { cn } from './helpers/classnames';
import { router } from './router';

const App: React.FC = () => {
  const [theme] = useContext(ThemeCtx);

  return (
    <div
      className={cn(theme, 'relative min-h-full w-full font-sans font-light')}
    >
      <div className="relative h-screen w-full overflow-x-hidden bg-background-50 text-text-900">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

// <Routes>
//   <Route element={<Root />}>
//     <Route path="colors" element={<Colors />} />
//     <Route path="gallery/*" element={<Gallery />} />
//     <Route path="fonts" element={<Fonts />} />
//     <Route path="icons" element={<Icons />} />
//     <Route path="*" element={<Home />} />
//   </Route>
// </Routes>

export default App;
