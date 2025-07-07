import { images } from "@/constants";

export interface youMayAlsoLike {
  id: string;
  name: string;
  image: string;
}
export const youMayAlsoLike: youMayAlsoLike[] = [
  {
    id: "1",
    name: "Y Eau de Parfum",
    image: images.ysl,
  },
  {
    id: "2",
    name: "Stronger With You Intensely",
    image: images.strongerWithYou,
  },
  {
    id: "3",
    name: "Bleu de Chanel",
    image: images.blueDeChanel,
  },
];
