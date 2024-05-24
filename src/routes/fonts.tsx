import Fonts from '@/views/Fonts';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/fonts')({
  component: Fonts,
});
