import { HomeButton } from "./home-button";
import { images } from "@/constants";

export const Home = () => {
  return (
    <div className="flex flex-col justify-center mx-18 mt-16">
      <div className="leading-[0.85]">
        <div>
          <h1 className="font-gothic text-[#222229] uppercase text-[390px] font-medium  m-0 p-0">
            embrace the
          </h1>
        </div>
        <div>
          <h1 className="font-gothic text-[#222229] uppercase text-[390px] font-medium m-0 p-0">
            extraordinary
          </h1>
        </div>
      </div>

      <div className="flex justify-center">
        <HomeButton />
      </div>

      <div className="flex justify-start mt-[300px] relative">
        <div>
          <img
            src={images.modelFrag}
            alt="Model Frag"
            className="w-[900px] h-[900px] object-cover mt-16"
          />
        </div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-lg max-w-[1000px] font-gothic font-semibold text-5xl leading-[1.2] tracking-[1px] text-center uppercase">
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
