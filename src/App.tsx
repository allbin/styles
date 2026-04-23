import React, { useContext, useMemo } from 'react';
import { RouterProvider } from '@tanstack/react-router';
import { ThemeCtx } from './contexts/ThemeContext';
import { cn } from './helpers/classnames';
import { router } from './router';
import Toast from './components/core/Toast';
import { IntlProvider } from 'react-intl';
// needed to make toast work
import 'react-toastify/dist/ReactToastify.min.css';
import { locales, SupportedLocale } from './locales/locale-config';

const App: React.FC = () => {
  const [theme] = useContext(ThemeCtx);

  const defaultLocale: SupportedLocale = 'sv';

  const currentLocale = useMemo<SupportedLocale>(
    () =>
      (localStorage.getItem('preferredLocale') as SupportedLocale) ||
      defaultLocale,
    [],
  );

  React.useEffect(() => {
    localStorage.setItem('preferredLocale', currentLocale);
    document.documentElement.lang = currentLocale;
    document.documentElement.setAttribute('xml:lang', currentLocale);
    document.body.lang = currentLocale;
    document.body.setAttribute('xml:lang', currentLocale);
  }, [currentLocale]);

  return (
    <IntlProvider
      locale={currentLocale}
      defaultLocale="sv"
      messages={locales[currentLocale]}
    >
      <div
        className={cn(theme, 'relative min-h-full w-full font-sans font-light')}
      >
        <div className="relative h-screen w-full overflow-x-hidden bg-background-100 text-text-900">
          <RouterProvider router={router} />
        </div>
        <Toast animations={true} />
      </div>
    </IntlProvider>
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
