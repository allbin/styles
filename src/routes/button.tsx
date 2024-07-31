import { createFileRoute } from '@tanstack/react-router';
import GalleryButton from '@/views/gallery/GalleryButton';

export const Route = createFileRoute('/button')({
  component: GalleryButton,
});
