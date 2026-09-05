import {
  ArrowLeft,
  ArrowRight,
  ArrowUpLeft,
} from "lucide-react";

import {
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  useTranslation,
} from "react-i18next";

import {
  Link,
} from "react-router-dom";

import SectionHeading from "../../components/common/SectionHeading/SectionHeading";

import type {
  SectorProductsData,
} from "../../data/sectors/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SectorProductsSliderProps {
  data: SectorProductsData;

  /*
   * اسم القطاع المستخدم في الـ URL
   *
   * مثال:
   * tents
   * clothing
   * advertising
   */
  sector: string;
}

export default function SectorProductsSlider({
  data,
  sector,
}: SectorProductsSliderProps) {

  const { t } =
    useTranslation();

  return (
    <section className="sector-products">

      <div className="sector-products__container">

        {/* =====================================
            Section Header
        ====================================== */}

        <div className="sector-products__header">

          <SectionHeading
            eyebrow={t(
              data.eyebrowKey,
            )}

            title={t(
              data.titleKey,
            )}

            description={
              data.descriptionKey
                ? t(
                    data.descriptionKey,
                  )
                : undefined
            }
          />

        </div>

        {/* =====================================
            Products Slider
        ====================================== */}

        <div className="sector-products__slider">

          <Swiper
            dir="rtl"

            modules={[
              Autoplay,
              Navigation,
              Pagination,
            ]}

            spaceBetween={24}

            slidesPerView={1}

            loop

            speed={700}

            autoplay={{
              delay: 4500,

              disableOnInteraction:
                false,

              pauseOnMouseEnter:
                true,
            }}

            navigation={{
              nextEl:
                ".sector-products__next",

              prevEl:
                ".sector-products__prev",
            }}

            pagination={{
              el:
                ".sector-products__pagination",

              clickable: true,
            }}

            breakpoints={{
              640: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },

              1280: {
                slidesPerView: 4,
              },
            }}

            className="!pb-14"
          >

            {data.products.map(
              (product) => (

                <SwiperSlide
                  key={product.id}
                >

                  <article
                    className="
                      sector-product-card
                    "
                  >

                    {/* =================================
                        Product Image
                    ================================== */}

                    <div
                      className="
                        sector-product-card__image
                      "
                    >

                      <img
                        src={
                          product.images[0]
                        }

                        alt={t(
                          product.titleKey,
                        )}

                        loading="lazy"
                      />

                    </div>

                    {/* =================================
                        Product Content
                    ================================== */}

                    <div
                      className="
                        sector-product-card__content
                      "
                    >

                      <h3
                        className="
                          sector-product-card__title
                        "
                      >
                        {t(
                          product.titleKey,
                        )}
                      </h3>

                      <p
                        className="
                          sector-product-card__description
                        "
                      >
                        {t(
                          product.descriptionKey,
                        )}
                      </p>

                      {/* =================================
                          Product Details Link
                      ================================== */}

                      <Link
                        to={`/sectors/${sector}/products/${product.id}`}
                        className="
                          sector-product-card__details
                        "
                      >

                        <span>
                          {t(
                            data.viewDetailsKey,
                          )}
                        </span>

                        <ArrowUpLeft
                          size={17}
                        />

                      </Link>

                    </div>

                  </article>

                </SwiperSlide>

              ),
            )}

          </Swiper>

          {/* =====================================
              Previous
          ====================================== */}

          <button
            type="button"
            className="
              sector-products__prev
            "
            aria-label={t(
              data.previousKey,
            )}
          >

            <ArrowRight
              size={20}
            />

          </button>

          {/* =====================================
              Next
          ====================================== */}

          <button
            type="button"
            className="
              sector-products__next
            "
            aria-label={t(
              data.nextKey,
            )}
          >

            <ArrowLeft
              size={20}
            />

          </button>

          {/* =====================================
              Pagination
          ====================================== */}

          <div
            className="
              sector-products__pagination
            "
          />

        </div>

        {/* =====================================
            CTA
        ====================================== */}

        <div
          className="
            sector-products__cta
          "
        >

          <button
            type="button"
            className="
              sector-products__cta-button
            "
          >
            {t(
              data.requestQuoteKey,
            )}
          </button>

        </div>

      </div>

    </section>
  );
}