import { createFileRoute } from '@tanstack/react-router';
import Colors from '../views/Colors';

export const Route = createFileRoute('/colors')({
  component: Colors,
});
