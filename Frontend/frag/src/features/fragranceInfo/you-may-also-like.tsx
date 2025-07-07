import { youMayAlsoLike } from "@/lib/you-may-also-like";

export const YouMayAlsoLike = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {youMayAlsoLike.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-none shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
