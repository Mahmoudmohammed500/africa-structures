import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

import type { SectorCapabilitiesData } from "../../data/sectors/types";

interface SectorCapabilitiesProps {
  data: SectorCapabilitiesData;
}

export default function SectorCapabilities({
  data,
}: SectorCapabilitiesProps) {
  const { t } = useTranslation();

  return (
    <section className="sector-capabilities">

      <div className="sector-capabilities__wrapper">

        {/* Image */}
        <div className="sector-capabilities__image">

          <img
            src={data.image}
            alt={t(data.titleKey)}
            loading="lazy"
          />

        </div>

        {/* Content */}
        <div className="sector-capabilities__content">

          <div className="sector-capabilities__inner">

            {/* Eyebrow */}
            <span className="sector-section-eyebrow">
              {t(data.eyebrowKey)}
            </span>

            {/* Title */}
            <h2 className="sector-section-title">
              {t(data.titleKey)}
            </h2>

            {/* Description */}
            <p className="sector-section-description">
              {t(data.descriptionKey)}
            </p>

            {/* Capabilities */}
            <ul className="sector-capabilities__list">

              {data.items.map((itemKey) => (
                <li
                  key={itemKey}
                  className="sector-capabilities__item"
                >

                  <CheckCircle2
                    className="sector-capabilities__icon"
                    size={20}
                  />

                  <span>
                    {t(itemKey)}
                  </span>

                </li>
              ))}

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}