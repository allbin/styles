import { createFileRoute } from '@tanstack/react-router';
import GalleryDropdown from '@/views/gallery/GalleryDropdown';

export const Route = createFileRoute('/gallery/_layout/dropdown')({
  component: GalleryDropdown,
});
