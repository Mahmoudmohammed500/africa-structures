import {
  Building2,
  Factory,
  ShieldCheck,
} from "lucide-react";

import { useTranslation } from "react-i18next";

import SectionHeading from "../../components/common/SectionHeading/SectionHeading";

import aboutCompanyImage from "../../assets/images/about.jpg";

import { aboutData } from "../../data/aboutData";

import "../../styles/AboutIntro.css";

const AboutIntro = () => {
  const { t } = useTranslation();

  const intro = aboutData.intro;

  return (
    <section
      id="about-intro"
      className="about-intro"
      aria-labelledby="about-intro-title"
    >
      <div className="container">

        {/* Section Heading */}

        <div className="about-intro__heading">
          <SectionHeading
            eyebrow={t(intro.eyebrowKey)}
            title={t(intro.titleKey)}
          />
        </div>


        {/* Main Content */}

        <div className="about-intro__layout">

          {/* Visual */}

          <div className="about-intro__visual">

            <div className="about-intro__image-card">

              <div
                className="about-intro__image-frame"
                aria-hidden="true"
              />

              <img
                src={aboutCompanyImage}
                alt={t(intro.imageAltKey)}
                loading="lazy"
                decoding="async"
                className="about-intro__image"
              />

              <div
                className="about-intro__overlay"
                aria-hidden="true"
              />

              <div className="about-intro__image-label">

                <span>
                  {t(intro.imageBrandKey)}
                </span>

                <strong>
                  {t(intro.imageLabelKey)}
                </strong>

              </div>

            </div>


            {/* Information Badge */}

            <div className="about-intro__badge">

              <div className="about-intro__badge-icon">
                <Factory
                  size={21}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <div className="about-intro__badge-content">

                <span>
                  {t(intro.badgeLabelKey)}
                </span>

                <strong>
                  {t(intro.badgeTitleKey)}
                </strong>

              </div>

            </div>

          </div>


          {/* Content */}

          <div className="about-intro__content">

            <span className="about-intro__eyebrow">
              {t(intro.contentLabelKey)}
            </span>


            <h3
              id="about-intro-title"
              className="about-intro__title"
            >
              {t(intro.contentTitleKey)}

              <span>
                {t(intro.contentTitleHighlightKey)}
              </span>
            </h3>


            <div
              className="about-intro__title-line"
              aria-hidden="true"
            >
              <span />
            </div>


            <div className="about-intro__description">

              <p>
                {t(intro.descriptionKey)}
              </p>

              <p>
                {t(intro.detailsKey)}
              </p>

            </div>


            {/* Features */}

            <div className="about-intro__features">

              {/* Quality */}

              <div className="about-feature">

                <div className="about-feature__icon">
                  <ShieldCheck
                    size={20}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <div className="about-feature__content">

                  <span>
                    {t(
                      intro.features.quality.labelKey
                    )}
                  </span>

                  <strong>
                    {t(
                      intro.features.quality.titleKey
                    )}
                  </strong>

                </div>

              </div>


              {/* Manufacturing */}

              <div className="about-feature">

                <div className="about-feature__icon">
                  <Factory
                    size={20}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <div className="about-feature__content">

                  <span>
                    {t(
                      intro.features.manufacturing.labelKey
                    )}
                  </span>

                  <strong>
                    {t(
                      intro.features.manufacturing.titleKey
                    )}
                  </strong>

                </div>

              </div>


              {/* Solutions */}

              <div className="about-feature">

                <div className="about-feature__icon">
                  <Building2
                    size={20}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <div className="about-feature__content">

                  <span>
                    {t(
                      intro.features.solutions.labelKey
                    )}
                  </span>

                  <strong>
                    {t(
                      intro.features.solutions.titleKey
                    )}
                  </strong>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutIntro;