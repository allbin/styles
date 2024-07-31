import { createFileRoute } from '@tanstack/react-router';
import GalleryDropdown from '@/views/gallery/GalleryDropdown';

export const Route = createFileRoute('/dropdown')({
  component: GalleryDropdown,
});
