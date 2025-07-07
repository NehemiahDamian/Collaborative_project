import { Card } from "@/components/ui/card";
import { Route as CollectionRoute } from "@/routes/brands/collection/$collectionId";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "@tanstack/react-router";
import { brands } from "@/lib/fragrance";

export const FragranceBrands = () => {
  return (
    <section className="container mx-auto px-2 py-6">
      <h2 className="text-5xl font-gothic font-semibold mb-4 text-center">
        Fragrance Brands
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
        {brands.map((brand) => (
          <Tooltip delayDuration={100} key={brand.id}>
            <TooltipTrigger asChild>
              <Link
                to={CollectionRoute.to}
                params={{ collectionId: brand.id }}
                className="block"
              >
                <Card
                  key={brand.id}
                  className={`${brand.bgColor ?? "bg-white"} rounded-none aspect-square flex items-center justify-center p-6 shadow-sm hover:shadow-md transition`}
                >
                  <img
                    src={brand.image}
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </Card>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{brand.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </section>
  );
};
