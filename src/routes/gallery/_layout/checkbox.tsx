import { createFileRoute } from '@tanstack/react-router';
import GalleryCheckbox from '@/views/gallery/GalleryCheckbox';

export const Route = createFileRoute('/gallery/_layout/checkbox')({
  component: GalleryCheckbox,
});
