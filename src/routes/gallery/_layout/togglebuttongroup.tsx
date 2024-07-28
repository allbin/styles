import { createFileRoute } from '@tanstack/react-router';
import GalleryToggleButtonGroup from '@/views/gallery/GalleryToggleButtonGroup';

export const Route = createFileRoute('/gallery/_layout/togglebuttongroup')({
  component: GalleryToggleButtonGroup,
});
