import warehouseTentImage from "../../assets/images/sectors/tents/products1.jpg";
import eventTentImage from "../../assets/images/sectors/tents/products2.jpg";
import militaryTentImage from "../../assets/images/sectors/tents/products3.jpg";

import carShadesImage from "../../assets/images/sectors/tents/products1.jpg";
import exhibitionTentImage from "../../assets/images/sectors/tents/products2.jpg";
import awningsImage from "../../assets/images/sectors/tents/products3.jpg";

import heroImage from "../../assets/images/sectors/tents/hero1.jpg";
import capabilitiesImage from "../../assets/images/sectors/tents/section1.jpg";
import achievementsImage from "../../assets/images/sectors/tents/section2.jpg";

import type {
  SectorData,
} from "./types";

/* =====================================================
   TENTS SECTOR DATA
===================================================== */

export const tentsSectorData: SectorData = {

  /* ===================================================
     HERO
  =================================================== */

  hero: {
    titleKey:
      "sectors.tents.hero.title",

    descriptionKey:
      "sectors.tents.hero.description",

    eyebrowKey:
      "sectors.tents.hero.eyebrow",

    breadcrumbCurrentKey:
      "sectors.tents.hero.breadcrumb",

    image: heroImage,
  },

  /* ===================================================
     CAPABILITIES
  =================================================== */

  capabilities: {
    eyebrowKey:
      "sectors.tents.capabilities.eyebrow",

    titleKey:
      "sectors.tents.capabilities.title",

    descriptionKey:
      "sectors.tents.capabilities.description",

    items: [
      "sectors.tents.capabilities.items.0",
      "sectors.tents.capabilities.items.1",
    ],

    image: capabilitiesImage,
  },

  /* ===================================================
     ACHIEVEMENTS
  =================================================== */

  achievements: {
    eyebrowKey:
      "sectors.tents.achievements.eyebrow",

    titleKey:
      "sectors.tents.achievements.title",

    descriptionKey:
      "sectors.tents.achievements.description",

    items: [
      {
        textKey:
          "sectors.tents.achievements.items.0",
      },

      {
        textKey:
          "sectors.tents.achievements.items.1",
      },

      {
        textKey:
          "sectors.tents.achievements.items.2",
      },
    ],

    image: achievementsImage,
  },

  /* ===================================================
     PRODUCTS
  =================================================== */

  products: {

    eyebrowKey:
      "sectors.tents.products.eyebrow",

    titleKey:
      "sectors.tents.products.title",

    descriptionKey:
      "sectors.tents.products.description",

    viewDetailsKey:
      "sectors.tents.products.viewDetails",

    requestQuoteKey:
      "sectors.tents.products.requestQuote",

    previousKey:
      "sectors.tents.products.previous",

    nextKey:
      "sectors.tents.products.next",

    products: [

      /* ================================================
         Product 1
      ================================================= */

      {
        id: 1,

        slug:
          "fixed-aww-tents",

        titleKey:
          "sectors.tents.products.fixedAwwTents.title",

        descriptionKey:
          "sectors.tents.products.fixedAwwTents.shortDescription",

        detailsKey:
          "sectors.tents.products.fixedAwwTents.details",

        specificationsKey:
          "sectors.tents.products.fixedAwwTents.specifications",

        images: [
          warehouseTentImage,
        ],
      },

      /* ================================================
         Product 2
      ================================================= */

      {
        id: 2,

        slug:
          "fixed-steel-tents",

        titleKey:
          "sectors.tents.products.fixedSteelTents.title",

        descriptionKey:
          "sectors.tents.products.fixedSteelTents.shortDescription",

        detailsKey:
          "sectors.tents.products.fixedSteelTents.details",

        specificationsKey:
          "sectors.tents.products.fixedSteelTents.specifications",

        images: [
          eventTentImage,
        ],
      },

      /* ================================================
         Product 3
      ================================================= */

      {
        id: 3,

        slug:
          "fixed-tent-pergola",

        titleKey:
          "sectors.tents.products.fixedTentPergola.title",

        descriptionKey:
          "sectors.tents.products.fixedTentPergola.shortDescription",

        detailsKey:
          "sectors.tents.products.fixedTentPergola.details",

        specificationsKey:
          "sectors.tents.products.fixedTentPergola.specifications",

        images: [
          militaryTentImage,
        ],
      },

      /* ================================================
         Product 4
      ================================================= */

      {
        id: 4,

        slug:
          "car-parking",

        titleKey:
          "sectors.tents.products.carParking.title",

        descriptionKey:
          "sectors.tents.products.carParking.shortDescription",

        detailsKey:
          "sectors.tents.products.carParking.details",

        specificationsKey:
          "sectors.tents.products.carParking.specifications",

        images: [
          carShadesImage,
        ],
      },

      /* ================================================
         Product 5
      ================================================= */

      {
        id: 5,

        slug:
          "wire-tent-canopy",

        titleKey:
          "sectors.tents.products.wireTentCanopy.title",

        descriptionKey:
          "sectors.tents.products.wireTentCanopy.shortDescription",

        detailsKey:
          "sectors.tents.products.wireTentCanopy.details",

        specificationsKey:
          "sectors.tents.products.wireTentCanopy.specifications",

        images: [
          exhibitionTentImage,
        ],
      },

      /* ================================================
         Product 6
      ================================================= */

      {
        id: 6,

        slug:
          "tensile-shade",

        titleKey:
          "sectors.tents.products.tensileShade.title",

        descriptionKey:
          "sectors.tents.products.tensileShade.shortDescription",

        detailsKey:
          "sectors.tents.products.tensileShade.details",

        specificationsKey:
          "sectors.tents.products.tensileShade.specifications",

        images: [
          awningsImage,
        ],
      },

      /* ================================================
         Product 7
      ================================================= */

      {
        id: 7,

        slug:
          "pyramid-pergola",

        titleKey:
          "sectors.tents.products.pergolaPyramidShape.title",

        descriptionKey:
          "sectors.tents.products.pergolaPyramidShape.shortDescription",

        detailsKey:
          "sectors.tents.products.pergolaPyramidShape.details",

        specificationsKey:
          "sectors.tents.products.pergolaPyramidShape.specifications",

        images: [
          warehouseTentImage,
        ],
      },

      /* ================================================
         Product 8
      ================================================= */

      {
        id: 8,

        slug:
          "wooden-umbrella",

        titleKey:
          "sectors.tents.products.woodenUmbrella.title",

        descriptionKey:
          "sectors.tents.products.woodenUmbrella.shortDescription",

        detailsKey:
          "sectors.tents.products.woodenUmbrella.details",

        specificationsKey:
          "sectors.tents.products.woodenUmbrella.specifications",

        images: [
          eventTentImage,
        ],
      },

      /* ================================================
         Product 9
      ================================================= */

      {
        id: 9,

        slug:
          "cantilever-umbrella",

        titleKey:
          "sectors.tents.products.cantileverUmbrella.title",

        descriptionKey:
          "sectors.tents.products.cantileverUmbrella.shortDescription",

        detailsKey:
          "sectors.tents.products.cantileverUmbrella.details",

        specificationsKey:
          "sectors.tents.products.cantileverUmbrella.specifications",

        images: [
          militaryTentImage,
        ],
      },

      /* ================================================
         Product 10
      ================================================= */

      {
        id: 10,

        slug:
          "special-coverings",

        titleKey:
          "sectors.tents.products.specialCoverings.title",

        descriptionKey:
          "sectors.tents.products.specialCoverings.shortDescription",

        detailsKey:
          "sectors.tents.products.specialCoverings.details",

        specificationsKey:
          "sectors.tents.products.specialCoverings.specifications",

        images: [
          carShadesImage,
        ],
      },

    ],
  },
};