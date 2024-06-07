import { FaceSmileIcon, HandThumbUpIcon } from '@heroicons/react/24/solid';
import Button from '../Button/Button';
import { toast } from './useToast';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import { IconEmojiTalkingAngry } from '@allbin/icons';

const GalleryToast = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Button onClick={() => toast({ title: 'Toast!!' })}>Normal toast</Button>
      <Button onClick={() => toast.success({ title: 'Toast success!!' })}>
        Success toast
      </Button>
      <Button
        onClick={() =>
          toast.success({ title: 'Toast success!!' }, { autoClose: 30000 })
        }
      >
        Success toast (custom autoClose 30000ms)
      </Button>
      <Button onClick={() => toast.info({ title: 'Toast info!!' })}>
        Info toast
      </Button>
      <Button
        onClick={() =>
          toast.info({
            title: 'Toast info!!',
            icon: <FaceSmileIcon className="size-12" />,
          })
        }
      >
        Info toast with BIG custom icon
      </Button>
      <Button
        onClick={() =>
          toast.info({
            title:
              "Toast info with a very long text that is just very long and doesn't stop. Just continues for way to loooooong!!!",
          })
        }
      >
        Very long info toast
      </Button>
      <Button onClick={() => toast.warning({ title: 'Toast warning!!' })}>
        Warning toast
      </Button>
      <Button
        onClick={() =>
          toast.warning(
            { title: 'Toast warning!! (Click me anywhere to close me)' },
            { closeButton: false, closeOnClick: true, autoClose: 10000 },
          )
        }
      >
        Warning toast (no close button, close on click anywhere in toast)
      </Button>
      <Button
        onClick={() =>
          toast.error({ title: 'Toast error!!' }, { autoClose: 500 })
        }
      >
        Error toast (custom autoClose time 500ms)
      </Button>
      <Button onClick={() => toast.error({ title: 'Toast error!!' })}>
        Error toast
      </Button>
      <Button
        onClick={() =>
          toast.info({
            title: 'Title',
            description: 'This is a description for the toast!',
          })
        }
      >
        Info Toast with description
      </Button>
      <Button
        onClick={() => {
          const resolveAfter3Sec = new Promise((resolve) =>
            setTimeout(resolve, 999999),
          );
          toast.promise(resolveAfter3Sec, {
            pending: { title: 'Pending promise...' },
            success: { title: 'Promise resolved successfully!' },
            error: { title: 'Promise failed to resolve!' },
          });
        }}
      >
        Very Very long promise toast (resolves in 999999ms)
      </Button>
      <Button
        onClick={() => {
          const resolveAfter3Sec = new Promise((resolve) =>
            setTimeout(resolve, 3000),
          );
          toast.promise(resolveAfter3Sec, {
            pending: { title: 'Pending promise...' },
            success: { title: 'Promise resolved successfully!' },
            error: { title: 'Promise failed to resolve!' },
          });
        }}
      >
        Promise toast
      </Button>
      <Button
        onClick={() => {
          const resolveAfter3Sec = new Promise((resolve) =>
            setTimeout(resolve, 3000),
          );
          toast.promise(resolveAfter3Sec, {
            pending: {
              title: 'Pending promise...',
              icon: <CloudArrowUpIcon className="size-7" />,
            },
            success: {
              title: 'Promise resolved successfully!',
              icon: <HandThumbUpIcon className="size-7" />,
            },
            error: {
              title: 'Promise failed to resolve!',
              icon: <IconEmojiTalkingAngry className="size-7" />,
            },
          });
        }}
      >
        Promise toast with custom icons
      </Button>
      <Button
        onClick={() => {
          const resolveAfter3Sec = new Promise((_, reject) =>
            setTimeout(reject, 3000),
          );
          toast.promise(resolveAfter3Sec, {
            pending: {
              title: 'Pending promise...',
              icon: <CloudArrowUpIcon className="size-7" />,
            },
            success: {
              title: 'Promise resolved successfully!',
              icon: <HandThumbUpIcon className="size-7" />,
            },
            error: {
              title: 'Promise failed to resolve!',
              icon: <IconEmojiTalkingAngry className="size-7" />,
            },
          });
        }}
      >
        Promise toast with custom icons (Failing promise)
      </Button>
    </div>
  );
};

export default GalleryToast;
