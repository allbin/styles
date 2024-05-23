import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Root,
});

function Root() {
  return <div className="h-full">HOME</div>;
}
