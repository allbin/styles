/* INFO:
// Place <Toast/> component in App.tsx
// Also import CSS in App.tsx (needed to make toast work)
import 'react-toastify/dist/ReactToastify.min.css';
// Import and use toast() from ./useToast.ts to use toast.
import { toast } from './useToast';
const App: React.FC = () => {
  const [theme] = useContext(ThemeCtx);

  return (
    <div
      className={cn(theme, 'relative min-h-full w-full font-sans font-light')}
    >
      <div className="relative h-screen w-full overflow-x-hidden bg-background-50 text-text-900">
        <RouterProvider router={router} />
      </div>
      <Toast />
    </div>
  );
};*/

import React from 'react';
import { ToastContainer, ToastContainerProps } from 'react-toastify';
import { cn } from '@/helpers/classnames';
import { XMarkIcon } from '@heroicons/react/24/outline';

const contextClass = {
  success: 'bg-green-600',
  error: 'bg-red-600',
  info: 'bg-blue-600',
  warning: 'bg-yellow-500',
  default: 'bg-background-50 border border-text-800 text-text-800',
};

const Toast: React.FC<ToastContainerProps> = (props) => {
  return (
    <ToastContainer
      icon={false}
      hideProgressBar
      newestOnTop
      autoClose={5000}
      position="bottom-right"
      className={cn('flex flex-col gap-2')}
      bodyClassName={cn('flex')}
      closeButton={({ closeToast }) => (
        <button onClick={closeToast} className="size-fit min-h-9 pr-2.5">
          <XMarkIcon className="size-5" />
        </button>
      )}
      toastClassName={(context) =>
        cn(
          contextClass[context?.type || 'default'],
          'flex p-1 min-h-11 rounded-md justify-between overflow-hidden cursor-pointer',
        )
      }
      {...props}
    />
  );
};

export interface ToastMsgProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export const ToastMsg: React.FC<ToastMsgProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex items-start gap-1">
      <span className="flex size-fit">{icon}</span>
      <span className="flex flex-col">
        <p className="leading-relaxed">{title}</p>
        <p className="text-sm">{description}</p>
      </span>
    </div>
  );
};

export default Toast;
