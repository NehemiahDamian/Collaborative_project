import { Card } from "@/components/ui/card";
import type { AzzaroFragrance } from "@/lib/fragrance";

interface FragranceCollectionProps {
  collection: AzzaroFragrance[];
}

export const FragranceCollection = ({
  collection,
}: FragranceCollectionProps) => {
  return (
    <section className="container mx-auto px-2 py-6">
      <h2 className="text-5xl font-gothic font-semibold mb-4 text-center">
        Collection
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
        {collection.map((fragrance) => (
          <div key={fragrance.id} className="flex flex-col items-center">
            <Card className="bg-white rounded-none aspect-square flex items-center justify-center p-6 shadow-sm hover:shadow-md transition">
              <img
                src={fragrance.image}
                alt={`${fragrance.id} logo`}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </Card>
            <p>{fragrance.id}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
