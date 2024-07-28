import { createFileRoute } from '@tanstack/react-router';
import SliderGallery from '@/views/gallery/GallerySlider';

export const Route = createFileRoute('/gallery/_layout/slider')({
  component: SliderGallery,
});
