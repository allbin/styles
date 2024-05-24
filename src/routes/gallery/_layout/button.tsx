import { createFileRoute } from '@tanstack/react-router';
import GalleryButton from '@/components/Button/GalleryButton';

export const Route = createFileRoute('/gallery/_layout/button')({
  component: GalleryButton,
});
