import { createFileRoute } from '@tanstack/react-router';
import SliderGallery from '@/components/Slider/GallerySlider';

export const Route = createFileRoute('/gallery/_layout/slider')({
  component: SliderGallery,
});
