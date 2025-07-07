import { images } from "@/constants";

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
    image: "https://example.com/images/armani-stronger-intensely.jpg",
    keynotes: ["Pink Pepper", "Vanilla", "Chestnut"],
    keynotesImage: [
      "https://example.com/images/pink-pepper.jpg",
      "https://example.com/images/vanilla.jpg",
      "https://example.com/images/chestnut.jpg",
    ],
    ingredients:
      "Alcohol Denat., Fragrance (Parfum), Aqua (Water), Benzyl Salicylate, Coumarin, Limonene, Linalool, Cinnamal. Designed for long-lasting wear, the formula is dermatologically tested and suitable for most skin types.",
    howToUse:
      "Apply directly to warm skin areas such as the wrists, neck, and chest. For a more subtle effect, spray into the air and walk through the mist. Use sparingly — one or two sprays are enough to enjoy its intense projection and longevity throughout the day or night.",
  },
];
