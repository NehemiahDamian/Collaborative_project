import { createFileRoute } from "@tanstack/react-router";
import { FragranceBrands } from "@/features/dashboard/fragrance-brands";

export const Route = createFileRoute("/brands/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <FragranceBrands />;
}
