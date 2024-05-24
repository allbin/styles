import { createFileRoute } from '@tanstack/react-router';
import GalleryTextArea from '@/components/TextArea/GalleryTextArea';

export const Route = createFileRoute('/gallery/_layout/textarea')({
  component: GalleryTextArea,
});
