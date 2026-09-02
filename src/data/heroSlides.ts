import hero1 from "../assets/images/hero/hero1.jpg";
import hero2 from "../assets/images/hero/hero2.jpg";
import hero3 from "../assets/images/hero/hero3.jpg";
import hero4 from "../assets/images/hero/hero4.jpg";

export interface HeroSlide {
  id: number;
  image: string;

  eyebrowKey: string;
  titleKey: string;
  descriptionKey: string;
  buttonTextKey: string;

  buttonLink: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,

    image: hero1,

    eyebrowKey:
      "hero.slides.slide1.eyebrow",

    titleKey:
      "hero.slides.slide1.title",

    descriptionKey:
      "hero.slides.slide1.description",

    buttonTextKey:
      "hero.slides.slide1.button",

    buttonLink: "/#pillars",
  },

  {
    id: 2,

    image: hero2,

    eyebrowKey:
      "hero.slides.slide2.eyebrow",

    titleKey:
      "hero.slides.slide2.title",

    descriptionKey:
      "hero.slides.slide2.description",

    buttonTextKey:
      "hero.slides.slide2.button",

    buttonLink: "/about",
  },

  {
    id: 3,

    image: hero3,

    eyebrowKey:
      "hero.slides.slide3.eyebrow",

    titleKey:
      "hero.slides.slide3.title",

    descriptionKey:
      "hero.slides.slide3.description",

    buttonTextKey:
      "hero.slides.slide3.button",

    buttonLink: "/#vision",
  },

  {
    id: 4,

    image: hero4,

    eyebrowKey:
      "hero.slides.slide4.eyebrow",

    titleKey:
      "hero.slides.slide4.title",

    descriptionKey:
      "hero.slides.slide4.description",

    buttonTextKey:
      "hero.slides.slide4.button",

    buttonLink: "/quality-certificates",
  },
];