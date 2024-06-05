// Place <Toast/> component in App.tsx
// Also import CSS in App.tsx needed to make toast work
// import 'react-toastify/dist/ReactToastify.min.css';
// Import and use toast() from ./useToast.ts to use toast.
// import { toast } from './useToast';
/* function App() {
  const notify = () => toast('Wow so easy !');

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <Toast />
    </div>
  );
}*/

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
      // limit={12}
      icon={false}
      hideProgressBar
      newestOnTop
      autoClose={100000}
      position="bottom-right"
      className={cn('flex flex-col gap-2')}
      bodyClassName={cn('flex items-start')}
      closeButton={({ closeToast }) => (
        <button onClick={closeToast} className="size-fit pr-2 pt-2">
          <XMarkIcon className="size-5 font-bold" />
        </button>
      )}
      toastClassName={(context) =>
        cn(
          contextClass[context?.type || 'default'],
          'flex p-1 min-h-12 rounded-md justify-between overflow-hidden cursor-pointer',
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
    <div className="flex gap-1">
      <span className="flex size-fit">{icon}</span>
      <span className="flex flex-col gap-1">
        <p className="">{title}</p>
        <p className="text-sm">{description}</p>
      </span>
    </div>
  );
};

export default Toast;
