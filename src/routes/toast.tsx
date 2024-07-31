import { createFileRoute } from '@tanstack/react-router';
import GalleryToast from '@/views/gallery/GalleryToast';

export const Route = createFileRoute('/toast')({
  component: GalleryToast,
});
