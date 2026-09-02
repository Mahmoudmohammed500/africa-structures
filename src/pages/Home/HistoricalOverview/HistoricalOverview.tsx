import {
  CalendarDays,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import { useTranslation } from "react-i18next";

import historicalImage from "../../../assets/images/historical.jpg";

import SectionHeading from "../../../components/common/SectionHeading/SectionHeading";

import "../../../styles/HistoricalOverview.css";

const HistoricalOverview = () => {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language.startsWith("ar");

  return (
    <section
      className="historical-overview section"
      id="about-overview"
      aria-labelledby="historical-overview-title"
    >
      <div className="container">

        {/* Section Heading */}
        <SectionHeading
          eyebrow={t("historicalOverview.eyebrow")}
          title={t("historicalOverview.title")}
        />

        {/* Content */}
        <div className="historical-overview__grid">

          {/* Image */}
          <div className="historical-overview__media">
            <div className="historical-overview__image-frame">

              <img
                src={historicalImage}
                alt={t("historicalOverview.imageAlt")}
                loading="lazy"
                decoding="async"
              />

              <div
                className="historical-overview__image-overlay"
                aria-hidden="true"
              />

              {/* Foundation Date */}
              <div className="historical-overview__date">

                <CalendarDays
                  size={21}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                <div>
                  <span>
                    {t(
                      "historicalOverview.foundationLabel",
                    )}
                  </span>

                  <strong>
                    {t(
                      "historicalOverview.foundationDate",
                    )}
                  </strong>
                </div>

              </div>
            </div>
          </div>

          {/* Text */}
          <div className="historical-overview__content">

            <span className="historical-overview__content-label">
              {t("historicalOverview.contentLabel")}
            </span>

            <h3 className="historical-overview__heading">
              {t("historicalOverview.heading")}
            </h3>

            <div className="historical-overview__text">

              <p>
                {t(
                  "historicalOverview.paragraph1",
                )}
              </p>

              <p>
                {t(
                  "historicalOverview.paragraph2",
                )}
              </p>

            </div>

            {/* Foundation Card */}
            <div className="historical-overview__foundation">

              <div className="historical-overview__foundation-icon">
                <CalendarDays
                  size={22}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <div className="historical-overview__foundation-info">

                <span>
                  {t(
                    "historicalOverview.foundationLabel",
                  )}
                </span>

                <strong>
                  {t(
                    "historicalOverview.foundationDate",
                  )}
                </strong>

              </div>
            </div>

            {/* CTA */}
            <a
              href="/about"
              className="historical-overview__link"
            >
              <span>
                {t("historicalOverview.button")}
              </span>

              {isArabic ? (
                <ArrowLeft
                  size={19}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              ) : (
                <ArrowRight
                  size={19}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              )}
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoricalOverview;