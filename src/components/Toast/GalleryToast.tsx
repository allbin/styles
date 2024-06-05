import { FaceSmileIcon } from '@heroicons/react/24/solid';
import Button from '../Button/Button';
import { toast } from './useToast';

const GalleryToast = () => {
  return (
    <div className="flex gap-2 text-nowrap">
      <Button onClick={() => toast({ title: 'Toast!!' })}>Normal toast</Button>
      <Button onClick={() => toast.success({ title: 'Toast success!!' })}>
        Success toast
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
        Info toast with custom icon
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
    </div>
  );
};

export default GalleryToast;
