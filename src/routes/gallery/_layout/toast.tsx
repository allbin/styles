import { createFileRoute } from '@tanstack/react-router';
import GalleryToast from '@/components/Toast/GalleryToast';

export const Route = createFileRoute('/gallery/_layout/toast')({
  component: GalleryToast,
});
