import { createFileRoute } from "@tanstack/react-router";
import { azzaroCollection } from "@/lib/fragrance";
import type { AzzaroFragrance } from "@/lib/fragrance";
import { FragranceCollection } from "@/features/dashboard/fragrance-collection";

const brandCollections: Record<string, AzzaroFragrance[]> = {
  "5": azzaroCollection,
  // Add more: "6": blendOud[0], "19": dior[0], etc.
};

export const Route = createFileRoute("/brands/collection/$collectionId")({
  component: RouteComponent,
  loader: ({ params }) => {
    const collection = brandCollections[params.collectionId];
    if (!collection) {
      throw new Error(`Brand with id ${params.collectionId} not found`);
    }
    return { collection };
  },
});

function RouteComponent() {
  const { collection } = Route.useLoaderData();
  return <FragranceCollection collection={collection} />;
}
