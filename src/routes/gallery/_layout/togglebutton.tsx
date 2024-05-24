import { createFileRoute } from '@tanstack/react-router';
import GalleryToggleButton from '@/components/GalleyToggleButton';

export const Route = createFileRoute('/gallery/_layout/togglebutton')({
  component: GalleryToggleButton,
});
