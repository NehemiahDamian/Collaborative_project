import { images, brandsLogo } from "@/constants";

export interface Fragrance {
  id: string;
  name: string;
  brand: string;
  description: string;
  details: string;
  image: string;
  keynotes: string[];
  keynotesImage: string[];
  ingredients: string;
  howToUse: string;
}
export interface brandsLogo {
  id: string;
  name: string;
  image: string;
}

export const fragrances: Fragrance[] = [
  {
    id: "1",
    name: "Y Eau de Parfum",
    brand: "Yves Saint Laurent",
    description:
      "A bold and sophisticated fragrance that captures the essence of the modern man — fresh, intense, and full of contrast.",
    details:
      "Y Eau de Parfum by Yves Saint Laurent is crafted for the self-accomplished man who dares to pursue his passion. This fragrance opens with sharp, clean notes of bergamot and ginger, followed by a heart of sage and geranium, anchored by sensual wood and tonka bean. Ideal for both daytime confidence and evening allure, it balances freshness with strength in a distinctive, elegant bottle.",
    image: images.ysl,
    keynotes: ["Bergamot", "Coffee", "Vanilla"],
    keynotesImage: [images.bergamot, images.coffee, images.vanilla],
    ingredients:
      "Alcohol, Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Coumarin, Citronellol, Citral, Geraniol. This formula is enriched with natural botanical extracts and does not contain parabens or sulfates.",
    howToUse:
      "Spray evenly onto pulse points such as the neck, chest, and wrists from a distance of about 6 inches. Do not rub after application to maintain the fragrance’s balance of top, heart, and base notes. Reapply as desired for evening events or lasting freshness throughout the day.",
  },
  {
    id: "2",
    name: "Stronger With You Intensely",
    brand: "Emporio Armani",
    description:
      "An addictive, oriental scent that exudes passion and warmth with sweet, spicy, and woody notes.",
    details:
      "Stronger With You Intensely is a powerful fragrance for the confident man who lives in the moment and embraces intensity in his relationships. This fragrance blends warm notes of pink pepper and vanilla with chestnut and suede to create a deep and seductive olfactory signature. Perfect for date nights or cool-weather wear, it leaves a lasting impression wrapped in elegance and strength.",
    image: images.strongerWithYou,
    keynotes: ["Pink Pepper", "Vanilla", "Chestnut"],
    keynotesImage: [images.bergamot, images.vanilla, images.coffee],
    ingredients:
      "Alcohol Denat., Fragrance (Parfum), Aqua (Water), Benzyl Salicylate, Coumarin, Limonene, Linalool, Cinnamal. Designed for long-lasting wear, the formula is dermatologically tested and suitable for most skin types.",
    howToUse:
      "Apply directly to warm skin areas such as the wrists, neck, and chest. For a more subtle effect, spray into the air and walk through the mist. Use sparingly — one or two sprays are enough to enjoy its intense projection and longevity throughout the day or night.",
  },
];

export const brands: brandsLogo[] = [
  {
    id: "1",
    name: "Acqua di Parma",
    image: brandsLogo.acquaDiParma,
  },
  {
    id: "2",
    name: "Alexander McQueen",
    image: brandsLogo.alexanderMcQueen,
  },
  {
    id: "3",
    name: "Amouage",
    image: brandsLogo.amouage,
  },
  {
    id: "4",
    name: "Arabian Oud",
    image: brandsLogo.arabianOud,
  },
  {
    id: "5",
    name: "Azzaro",
    image: brandsLogo.azzaro,
  },
  {
    id: "6",
    name: "Blend Oud",
    image: brandsLogo.blendOud,
  },
  {
    id: "7",
    name: "Boadicea The Victorious",
    image: brandsLogo.boadicea,
  },
  {
    id: "8",
    name: "Burberry",
    image: brandsLogo.burberry,
  },
  {
    id: "9",
    name: "Bvlgari",
    image: brandsLogo.bvlgari,
  },
  {
    id: "10",
    name: "Byredo",
    image: brandsLogo.byredo,
  },
  {
    id: "11",
    name: "Carner Barcelona",
    image: brandsLogo.carner,
  },
  {
    id: "12",
    name: "Cartier",
    image: brandsLogo.cartier,
  },
  {
    id: "13",
    name: "Carolina Herrera",
    image: brandsLogo.carolinaHerrera,
  },
  {
    id: "14",
    name: "Christian Louboutin",
    image: brandsLogo.christianLouboutin,
  },
  {
    id: "15",
    name: "Clive Christian",
    image: brandsLogo.cliveChristian,
  },
  {
    id: "16",
    name: "Coach",
    image: brandsLogo.coach,
  },
  {
    id: "17",
    name: "Creed",
    image: brandsLogo.creed,
  },
  {
    id: "18",
    name: "Diana Vreeland",
    image: brandsLogo.dianaVreeland,
  },
  {
    id: "19",
    name: "Dior",
    image: brandsLogo.dior,
  },
  {
    id: "20",
    name: "Dolce & Gabbana",
    image: brandsLogo.dolceGabbana,
  },
  {
    id: "21",
    name: "Dunhill",
    image: brandsLogo.dunhill,
  },
  {
    id: "22",
    name: "Estée Lauder",
    image: brandsLogo.esteeaLauder,
  },
  {
    id: "23",
    name: "Ex Nihilo",
    image: brandsLogo.exNihili,
  },
  {
    id: "24",
    name: "Fragrance Du Bois",
    image: brandsLogo.fragranceDuBois,
  },
  {
    id: "25",
    name: "Giorgio Armani",
    image: brandsLogo.armani,
  },
  {
    id: "26",
    name: "BDK Parfums",
    image: brandsLogo.bdk,
  },
];
