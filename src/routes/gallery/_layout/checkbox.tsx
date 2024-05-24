import { createFileRoute } from '@tanstack/react-router';
import GalleryCheckbox from '@/components/Checkbox/GalleryCheckbox';

export const Route = createFileRoute('/gallery/_layout/checkbox')({
  component: GalleryCheckbox,
});
