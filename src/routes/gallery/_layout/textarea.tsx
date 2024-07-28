import { createFileRoute } from '@tanstack/react-router';
import GalleryTextArea from '@/views/gallery/GalleryTextArea';

export const Route = createFileRoute('/gallery/_layout/textarea')({
  component: GalleryTextArea,
});
