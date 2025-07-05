import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fragrance/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/fragrance/"!</div>
}
