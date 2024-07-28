import { toast as t, ToastOptions, Id } from 'react-toastify';
import { ToastMsg, ToastMsgProps } from '../components/core/Toast';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import { Spinner } from '../components/spinner';

const icons = {
  success: <CheckCircleIcon className="size-7" />,
  error: <XCircleIcon className="size-7" />,
  info: <InformationCircleIcon className="size-7" />,
  warning: <ExclamationTriangleIcon className="size-7" />,
  pending: <Spinner className="mx-0.5 mt-0.5 size-6" />,
  default: undefined,
};
const defaultToast = (props: ToastMsgProps, options?: ToastOptions): Id =>
  t(<ToastMsg {...props} icon={props.icon ?? icons.default} />, {
    ...options,
  });
const successToast = (props: ToastMsgProps, options?: ToastOptions): Id =>
  t.success(<ToastMsg {...props} icon={props.icon ?? icons.success} />, {
    ...options,
  });
const infoToast = (props: ToastMsgProps, options?: ToastOptions): Id =>
  t.info(<ToastMsg {...props} icon={props.icon ?? icons.info} />, {
    ...options,
  });
const warningToast = (props: ToastMsgProps, options?: ToastOptions): Id =>
  t.warning(<ToastMsg {...props} icon={props.icon ?? icons.warning} />, {
    ...options,
  });
const errorToast = (props: ToastMsgProps, options?: ToastOptions): Id =>
  t.error(<ToastMsg {...props} icon={props.icon ?? icons.error} />, {
    ...options,
    autoClose: false,
  });
const promiseToast = <TData = unknown,>(
  promise: Promise<TData>,
  props: {
    pending: ToastMsgProps;
    success: ToastMsgProps;
    error: ToastMsgProps;
  },
  options?: ToastOptions,
) =>
  t.promise(
    promise,
    {
      pending: {
        render() {
          return (
            <ToastMsg
              {...props.pending}
              icon={props.pending.icon ?? icons.pending}
            />
          );
        },
      },
      success: {
        render() {
          return (
            <ToastMsg
              {...props.success}
              icon={props.success.icon ?? icons.success}
            />
          );
        },
      },
      error: {
        render() {
          return (
            <ToastMsg {...props.error} icon={props.error.icon ?? icons.error} />
          );
        },
      },
    },
    options,
  );

export const toast = Object.assign(defaultToast, {
  success: successToast,
  info: infoToast,
  warning: warningToast,
  error: errorToast,
  promise: promiseToast,
  dismiss: t.dismiss,
});
