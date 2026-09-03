import {
  ArrowUpRight,
  Eye,
  Target,
} from "lucide-react";

import { useTranslation } from "react-i18next";

import SectionHeading from "../../components/common/SectionHeading/SectionHeading";

import { aboutData } from "../../data/aboutData";

import "../../styles/VisionMissionGoal.css";

const VisionMissionGoal = () => {
  const { t } = useTranslation();

  const vision = aboutData.vision;
  const goal = aboutData.goal;

  return (
    <section
      id="vision-goal"
      className="vision-goal"
    >
      <div className="container">

        {/* ========================================
            Section Heading
        ======================================== */}

        <div className="vision-goal__heading">
          <SectionHeading
            eyebrow={t(vision.sectionEyebrowKey)}
            title={t(vision.sectionTitleKey)}
          />
        </div>


        {/* ========================================
            Cards Grid
        ======================================== */}

        <div className="vision-goal__grid">

          {/* ======================================
              Vision
          ====================================== */}

          <article className="vision-card">

            {/* Decorative Circle */}

            <div
              className="vision-card__circle"
              aria-hidden="true"
            />


            {/* Decorative Small Line */}

            <div
              className="vision-card__top-line"
              aria-hidden="true"
            />


            {/* Number */}

            <span
              className="vision-card__number"
              aria-hidden="true"
            >
              01
            </span>


            {/* Icon */}

            <div className="vision-card__icon">
              <Eye
                size={26}
                strokeWidth={1.6}
                aria-hidden="true"
              />
            </div>


            {/* Content */}

            <div className="vision-card__content">

              {/* Eyebrow */}

              <span className="vision-card__eyebrow">

                <span
                  className="vision-card__eyebrow-line"
                  aria-hidden="true"
                />

                {t(vision.eyebrowKey)}

              </span>


              {/* Title */}

              <h3 className="vision-card__title">
                {t(vision.titleKey)}
              </h3>


              {/* Divider */}

              <div
                className="vision-card__divider"
                aria-hidden="true"
              />


              {/* Description */}

              <p className="vision-card__description">
                {t(vision.descriptionKey)}
              </p>

            </div>


            {/* Bottom Accent */}

            <div
              className="vision-card__bottom-accent"
              aria-hidden="true"
            />

          </article>


          {/* ======================================
              Goal
          ====================================== */}

          <article className="vision-card vision-card--goal">

            {/* Decorative Gold Glow */}

            <div
              className="vision-card__glow"
              aria-hidden="true"
            />


            {/* Top Gold Line */}

            <div
              className="vision-card__top-line"
              aria-hidden="true"
            />


            {/* Number */}

            <span
              className="vision-card__number"
              aria-hidden="true"
            >
              02
            </span>


            {/* Icon */}

            <div className="vision-card__icon">
              <Target
                size={26}
                strokeWidth={1.6}
                aria-hidden="true"
              />
            </div>


            {/* Content */}

            <div className="vision-card__content">

              {/* Eyebrow */}

              <span className="vision-card__eyebrow">

                <span
                  className="vision-card__eyebrow-line"
                  aria-hidden="true"
                />

                {t(goal.eyebrowKey)}

              </span>


              {/* Title */}

              <h3 className="vision-card__title">
                {t(goal.titleKey)}
              </h3>


              {/* Divider */}

              <div
                className="vision-card__divider"
                aria-hidden="true"
              />


              {/* Description */}

              <p className="vision-card__description">
                {t(goal.descriptionKey)}
              </p>

            </div>


            {/* Footer */}

            <div className="vision-card__footer">

              <span>
                {t(goal.footerKey)}
              </span>

              <span className="vision-card__footer-icon">

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

              </span>

            </div>


            {/* Bottom Accent */}

            <div
              className="vision-card__bottom-accent"
              aria-hidden="true"
            />

          </article>

        </div>

      </div>
    </section>
  );
};

export default VisionMissionGoal;
