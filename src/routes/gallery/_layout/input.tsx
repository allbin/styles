import { createFileRoute } from '@tanstack/react-router';
import GalleryInput from '@/components/Input/GalleryInput';

export const Route = createFileRoute('/gallery/_layout/input')({
  component: GalleryInput,
});
