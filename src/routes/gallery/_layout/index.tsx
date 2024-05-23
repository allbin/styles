import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/gallery/_layout/')({
  component: Gallery,
});

function Gallery() {
  return (
    <div className="flex gap-6">
      <p>Select the component you want to preview on the right.</p>
    </div>
  );
}
