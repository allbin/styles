import { createFileRoute } from '@tanstack/react-router';
import GalleryInput from '@/views/gallery/GalleryInput';

export const Route = createFileRoute('/gallery/_layout/input')({
  component: GalleryInput,
});
