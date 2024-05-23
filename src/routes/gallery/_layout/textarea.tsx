import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/gallery/_layout/textarea')({
  component: () => <div>Hello /gallery/_layout/textarea!</div>
})