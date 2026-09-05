import {
  Award,
  Building2,
  CheckCircle2,
  Globe2,
  Users,
} from "lucide-react";

import { useTranslation } from "react-i18next";

import type {
  SectorAchievementsData,
} from "../../data/sectors/types";

interface SectorAchievementsProps {
  data: SectorAchievementsData;
}

const achievementIcons = [
  Building2,
  Users,
  CheckCircle2,
  Award,
  Globe2,
];

export default function SectorAchievements({
  data,
}: SectorAchievementsProps) {
  const { t } = useTranslation();

  return (
    <section className="sector-achievements">

      <div className="sector-achievements__wrapper">

        {/* Image */}
        <div className="sector-achievements__image">

          <img
            src={data.image}
            alt={t(data.titleKey)}
            loading="lazy"
          />

        </div>

        {/* Content */}
        <div className="sector-achievements__content">

          <div className="sector-achievements__inner">

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

            {/* Achievements */}
            <div className="sector-achievements__list">

              {data.items.map((item, index) => {

                const Icon =
                  achievementIcons[
                    index % achievementIcons.length
                  ];

                return (
                  <div
                    key={item.textKey}
                    className="sector-achievements__item"
                  >

                    <div className="sector-achievements__icon">
                      <Icon size={17} />
                    </div>

                    <p className="sector-achievements__text">
                      {t(item.textKey)}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}