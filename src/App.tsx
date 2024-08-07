import React, { useContext } from 'react';
import { RouterProvider } from '@tanstack/react-router';
import { ThemeCtx } from './contexts/ThemeContext';
import { cn } from './helpers/classnames';
import { router } from './router';
import Toast from './components/core/Toast';

// needed to make toast work
import 'react-toastify/dist/ReactToastify.min.css';

const App: React.FC = () => {
  const [theme] = useContext(ThemeCtx);

  return (
    <div
      className={cn(theme, 'relative min-h-full w-full font-sans font-light')}
    >
      <div className="relative h-screen w-full overflow-x-hidden bg-background-100 text-text-900">
        <RouterProvider router={router} />
      </div>
      <Toast />
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
