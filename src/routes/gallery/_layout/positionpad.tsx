import { createFileRoute } from '@tanstack/react-router';
import GalleryPositionPad from '@/components/PositionPad/GalleryPositionPad';

export const Route = createFileRoute('/gallery/_layout/positionpad')({
  component: GalleryPositionPad,
});
