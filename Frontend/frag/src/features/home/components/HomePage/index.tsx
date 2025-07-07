import { HomeButton } from "./home-button";
import { images } from "@/constants";

export const Home = () => {
  return (
    <div className="flex flex-col justify-center mx-4 sm:mx-8 md:mx-16 lg:mx-18 mt-8 sm:mt-12 md:mt-16">
      <div className="leading-[0.85]">
        <div>
          <h1 className="font-gothic text-[#222229] uppercase text-[56px] sm:text-[120px] md:text-[220px] lg:text-[390px] font-medium m-0 p-0">
            embrace the
          </h1>
        </div>
        <div>
          <h1 className="font-gothic text-[#222229] uppercase text-[56px] sm:text-[120px] md:text-[220px] lg:text-[390px] font-medium m-0 p-0">
            extraordinary
          </h1>
        </div>
      </div>

      <div className="flex justify-center">
        <HomeButton />
      </div>

      <div className="flex flex-col lg:flex-row justify-start mt-16 lg:mt-[300px] relative">
        <div className="flex justify-center lg:block">
          <img
            src={images.modelFrag}
            alt="Model Frag"
            className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[900px] lg:h-[900px] object-cover mt-8 lg:mt-16"
          />
        </div>
        <div className="absolute left-1/2 top-[70%] lg:top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 sm:p-6 md:p-8 rounded-lg max-w-full lg:max-w-[1000px] font-gothic font-semibold text-lg sm:text-2xl md:text-4xl lg:text-5xl leading-[1.2] tracking-[1px] text-center uppercase bg-white bg-opacity-80">
          <p>
            at fragra elixirs, we believe that a fragrance should make a
            psychological & emotional impact while revealing & emphasizing your
            true individuality. the exhaustive assortment of perfumes we produce
            is aimed to fill your day with love, passion & tenderness.
          </p>
        </div>
      </div>
    </div>
  );
};
