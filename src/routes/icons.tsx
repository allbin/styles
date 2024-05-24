import Icons from '@/views/Icons/Icons';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/icons')({
  component: Icons,
});
