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
import {
  cssTransition,
  ToastContainer,
  ToastContainerProps,
} from 'react-toastify';
import { useIntl } from 'react-intl';
import { cn } from '@/helpers/classnames';
import { IconXmark } from '@/icons';

const contextClass = {
  success: 'bg-green-500 text-contrast-green',
  error: 'bg-red-600 text-contrast-red',
  info: 'bg-blue-600 text-contrast-blue',
  warning: 'bg-yellow-500 text-contrast-yellow',
  default: 'bg-background-50 border border-text-800 text-text-800',
};

interface ToastProps extends ToastContainerProps {
  animations?: boolean;
}

const Toast: React.FC<ToastProps> = (props) => {
  const { formatMessage } = useIntl();

  const disabledTransition = cssTransition({
    enter: 'noop-enter',
    exit: 'noop-exit',
    collapseDuration: 1,
  });

  const specialProps: ToastProps = {};

  if (!props.animations) {
    specialProps.transition = disabledTransition;
  }

  return (
    <ToastContainer
      icon={false}
      hideProgressBar={true}
      newestOnTop={true}
      autoClose={5000}
      position="bottom-right"
      className={cn('flex flex-col gap-2')}
      bodyClassName="flex"
      {...specialProps}
      closeButton={({ closeToast, type }) => (
        <button
          onClick={closeToast}
          className="size-fit min-h-9 pr-1.5"
          aria-label={formatMessage({ defaultMessage: 'Stäng meddelande' })}
        >
          <div
            className={cn(
              'flex size-fit items-center justify-center rounded-full p-1 transition-colors hover:bg-white/30',
              type === 'default' && 'hover:bg-background-950/20',
            )}
          >
            <IconXmark className="size-5" aria-hidden="true" />
          </div>
        </button>
      )}
      toastClassName={(context) =>
        cn(
          contextClass[context?.type || 'default'],
          'flex p-1 min-h-11 rounded-md shadow-[0_0_0_1px_#fff] justify-between overflow-hidden',
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
