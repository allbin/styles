import { createFileRoute } from '@tanstack/react-router';
import GalleryAutocomplete from '@/views/gallery/GalleryAutocomplete';

export const Route = createFileRoute('/autocomplete')({
  component: GalleryAutocomplete,
});
