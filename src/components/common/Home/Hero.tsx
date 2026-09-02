import {
  useEffect,
  useState,
} from "react";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import { useTranslation } from "react-i18next";

import { heroSlides } from "../../../data/heroSlides";

import "../../../styles/hero.css";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { i18n, t } = useTranslation();

  const isArabic = i18n.language === "ar";

  const activeSlide = heroSlides[activeIndex];

  /* ========================================
     Preload Next Slide Image
  ======================================== */

  useEffect(() => {
    if (heroSlides.length <= 1) {
      return;
    }

    const nextIndex =
      activeIndex === heroSlides.length - 1
        ? 0
        : activeIndex + 1;

    const nextImage = new Image();

    nextImage.decoding = "async";

    nextImage.src =
      heroSlides[nextIndex].image;

    return () => {
      nextImage.src = "";
    };
  }, [activeIndex]);

  /* ========================================
     Auto Slide
  ======================================== */

  useEffect(() => {
    if (heroSlides.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) =>
        current === heroSlides.length - 1
          ? 0
          : current + 1
      );
    }, 10000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  /* ========================================
     Change Slide
  ======================================== */

  const handleChangeSlide = (
    index: number
  ) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="hero"
      className="hero"
      aria-label={t("hero.sectionLabel")}
    >
      {/* =====================================
          Background Slides
      ====================================== */}

      <div className="hero-background">
        {heroSlides.map((slide, index) => {
          const isActive =
            index === activeIndex;

          const isFirstSlide =
            index === 0;

          return (
            <div
              key={slide.id}
              className={`hero-slide ${
                isActive
                  ? "hero-slide-active"
                  : ""
              }`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.image}
                alt=""
                width="1920"
                height="1080"
                loading={
                  isFirstSlide
                    ? "eager"
                    : "lazy"
                }
                fetchPriority={
                  isFirstSlide
                    ? "high"
                    : "low"
                }
                decoding="async"
                aria-hidden="true"
              />
            </div>
          );
        })}
      </div>

      {/* =====================================
          Overlay
      ====================================== */}

      <div
        className="hero-overlay"
        aria-hidden="true"
      />

      {/* =====================================
          Content
      ====================================== */}

      <div className="hero-container">
        <div className="hero-content-wrapper">
          <div
            key={`${activeSlide.id}-${i18n.language}`}
            className="hero-content"
          >
            {/* =================================
                Eyebrow
            ================================= */}

            <span className="hero-eyebrow">
              {t(activeSlide.eyebrowKey)}
            </span>

            {/* =================================
                Title
            ================================= */}

            <h1 className="hero-title">
              {t(activeSlide.titleKey)}
            </h1>

            {/* =================================
                Description
            ================================= */}

            <p className="hero-description">
              {t(
                activeSlide.descriptionKey
              )}
            </p>

            {/* =================================
                Button
            ================================= */}

            <a
              href={activeSlide.buttonLink}
              className="hero-button"
            >
              <span>
                {t(
                  activeSlide.buttonTextKey
                )}
              </span>

              {isArabic ? (
                <ArrowLeft
                  size={18}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              ) : (
                <ArrowRight
                  size={18}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              )}
            </a>
          </div>
        </div>
      </div>

      {/* =====================================
          Slider Navigation
      ====================================== */}

      <div
        className="hero-pagination"
        aria-label={t(
          "hero.paginationLabel"
        )}
      >
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`hero-pagination-item ${
              index === activeIndex
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleChangeSlide(index)
            }
            aria-label={t(
              "hero.slideNumber",
              {
                number: index + 1,
              }
            )}
            aria-current={
              index === activeIndex
                ? "true"
                : undefined
            }
          >
            <span aria-hidden="true" />
          </button>
        ))}
      </div>
    </section>
  );
}
