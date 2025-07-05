import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/features/home/components/HomePage";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <Home />;
}
