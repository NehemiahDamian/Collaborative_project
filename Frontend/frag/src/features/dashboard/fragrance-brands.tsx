import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { brands } from "@/lib/fragrance";

export const FragranceBrands = () => {
  return (
    <section className="container mx-auto px-2 py-6">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Fragrance Brands
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
        {brands.map((brand) => (
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <Card
                key={brand.id}
                className="bg-white rounded-none aspect-square flex items-center justify-center p-6 shadow-sm hover:shadow-md transition"
              >
                <img
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </Card>
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
