import { createFileRoute } from '@tanstack/react-router';
import SliderGallery from '@/views/gallery/GallerySlider';

export const Route = createFileRoute('/slider')({
  component: SliderGallery,
});
