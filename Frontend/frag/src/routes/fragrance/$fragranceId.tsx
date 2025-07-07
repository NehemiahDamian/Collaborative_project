import { createFileRoute } from "@tanstack/react-router";
import { FragranceDetails } from "@/features/fragranceInfo/fragrance-details";
import { fragrances } from "@/lib/fragrance";

export const Route = createFileRoute("/fragrance/$fragranceId")({
  component: RouteComponent,
  loader: ({ params }) => {
    const fragrance = fragrances.find((f) => f.id === params.fragranceId);
    if (!fragrance) {
      throw new Error(`Fragrance with id ${params.fragranceId} not found`);
    }
    return { fragrance };
  },
});

function RouteComponent() {
  const { fragrance } = Route.useLoaderData();
  return <FragranceDetails fragrance={fragrance} />;
}
