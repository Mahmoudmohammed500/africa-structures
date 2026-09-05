import {
  useTranslation,
} from "react-i18next";

import SectorHero from "../../components/sectors/SectorHero";

import SectorCapabilities from "../../components/sectors/SectorCapabilities";

import SectorAchievements from "../../components/sectors/SectorAchievements";

import SectorProductsSlider from "../../components/sectors/SectorProductsSlider";

import {
  tentsSectorData,
} from "../../data/sectors/tents";

import "../../styles/tents-sector.css";
import "../../styles/sectors.css";

export default function TentsSector() {

  const { i18n } =
    useTranslation();

  const direction =
    i18n.language.startsWith("ar")
      ? "rtl"
      : "ltr";

  return (
    <main
      className="sector-page"
      dir={direction}
    >

      {/* =====================================
          Hero
      ====================================== */}

      <SectorHero
        data={
          tentsSectorData.hero
        }
      />

      {/* =====================================
          Capabilities
      ====================================== */}

      <SectorCapabilities
        data={
          tentsSectorData.capabilities
        }
      />

      {/* =====================================
          Achievements
      ====================================== */}

      <SectorAchievements
        data={
          tentsSectorData.achievements
        }
      />

      {/* =====================================
          Products
      ====================================== */}

      <SectorProductsSlider
        data={
          tentsSectorData.products
        }

        sector="tents"
      />

    </main>
  );
}