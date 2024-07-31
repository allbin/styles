import { createFileRoute } from '@tanstack/react-router';
import GalleryPositionPad from '@/views/gallery/GalleryPositionPad';

export const Route = createFileRoute('/positionpad')({
  component: GalleryPositionPad,
});
