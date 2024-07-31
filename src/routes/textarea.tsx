import { createFileRoute } from '@tanstack/react-router';
import GalleryTextArea from '@/views/gallery/GalleryTextArea';

export const Route = createFileRoute('/textarea')({
  component: GalleryTextArea,
});
