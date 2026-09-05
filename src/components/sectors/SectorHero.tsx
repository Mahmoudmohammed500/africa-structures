import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

import type { SectorHeroData } from "../../data/sectors/types";

interface SectorHeroProps {
  data: SectorHeroData;
}

export default function SectorHero({
  data,
}: SectorHeroProps) {
  const { t } = useTranslation();

  return (
    <section className="sector-hero">

      {/* Background Image */}
      <img
        src={data.image}
        alt={t(data.titleKey)}
        className="sector-hero__image"
      />

      {/* Overlay */}
      <div className="sector-hero__overlay" />

      {/* Content */}
      <div className="sector-hero__container">

        <div className="sector-hero__content">

          {/* Eyebrow */}
          <span className="sector-hero__eyebrow">
            {t(data.eyebrowKey)}
          </span>

          {/* Title */}
          <h1 className="sector-hero__title">
            {t(data.titleKey)}
          </h1>

          {/* Line */}
          <div className="sector-hero__line" />

          {/* Description */}
          <p className="sector-hero__description">
            {t(data.descriptionKey)}
          </p>

        </div>

      </div>

    </section>
  );
}