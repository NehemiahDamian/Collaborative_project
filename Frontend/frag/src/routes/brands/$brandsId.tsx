import { createFileRoute } from "@tanstack/react-router";
import { brands } from "@/lib/fragrance";
import { FragranceBrands } from "@/features/dashboard/fragrance-brands";

export const Route = createFileRoute("/brands/$brandsId")({
  component: RouteComponent,
  loader: ({ params }) => {
    const brand = brands.find((b) => b.id === params.brandsId);
    if (!brand) {
      throw new Error(`Brand with id ${params.brandsId} not found`);
    }
    return { brand };
  },
});

function RouteComponent() {
  // const { brand } = Route.useLoaderData();
  return <FragranceBrands />;
}
