import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/gallery/_layout/slider')({
  component: () => <div>Hello /gallery/_layout/slider!</div>
})