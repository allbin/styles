import { createFileRoute } from '@tanstack/react-router';
import GalleryDropdown from '@/components/Dropdown/GalleryDropdown';

export const Route = createFileRoute('/gallery/_layout/dropdown')({
  component: GalleryDropdown,
});
