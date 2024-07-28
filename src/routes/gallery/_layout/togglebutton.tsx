import { createFileRoute } from '@tanstack/react-router';
import GalleryToggleButton from '@/views/gallery/GalleyToggleButton';

export const Route = createFileRoute('/gallery/_layout/togglebutton')({
  component: GalleryToggleButton,
});
