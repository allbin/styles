import { createFileRoute } from '@tanstack/react-router';
import GalleryButton from '@/views/gallery/GalleryButton';

export const Route = createFileRoute('/gallery/_layout/button')({
  component: GalleryButton,
});
