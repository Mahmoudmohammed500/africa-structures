import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  useTranslation,
} from "react-i18next";

import type {
  SectorProduct,
} from "../../data/sectors/types";

import "../../styles/product-details.css";
interface ProductDetailsProps {
  product: SectorProduct;

  backToProductsPath: string;

  backToProductsLabel: string;

  productDetailsLabel: string;

  specificationsLabel: string;

  galleryLabel: string;

  previousImageLabel: string;

  nextImageLabel: string;

  closeImageLabel: string;

  openImageLabel: string;
}

export default function ProductDetails({
  product,
  backToProductsPath,
  backToProductsLabel,
  productDetailsLabel,
  specificationsLabel,
  galleryLabel,
  previousImageLabel,
  nextImageLabel,
  closeImageLabel,
  openImageLabel,
}: ProductDetailsProps) {
  const {
    t,
    i18n,
  } = useTranslation();

  const isArabic =
    i18n.language.startsWith("ar");

  const [activeImage, setActiveImage] =
    useState(0);

  const [isLightboxOpen, setIsLightboxOpen] =
    useState(false);

  /*
   * ============================================
   * Reset active image when product changes
   * ============================================
   */

  useEffect(() => {
    setActiveImage(0);
    setIsLightboxOpen(false);
  }, [product.id]);

  /*
   * ============================================
   * Gallery autoplay
   * ============================================
   */

  useEffect(() => {
    if (
      product.images.length <= 1 ||
      isLightboxOpen
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveImage((current) =>
        current === product.images.length - 1
          ? 0
          : current + 1,
      );
    }, 5000);

    return () => {
      window.clearInterval(interval);
    };
  }, [
    product.images.length,
    isLightboxOpen,
  ]);

  /*
   * ============================================
   * Previous image
   * ============================================
   */

  const handlePreviousImage = () => {
    setActiveImage((current) =>
      current === 0
        ? product.images.length - 1
        : current - 1,
    );
  };

  /*
   * ============================================
   * Next image
   * ============================================
   */

  const handleNextImage = () => {
    setActiveImage((current) =>
      current === product.images.length - 1
        ? 0
        : current + 1,
    );
  };

  /*
   * ============================================
   * Keyboard controls
   * ============================================
   */

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }

      if (event.key === "ArrowLeft") {
        setActiveImage((current) =>
          current === 0
            ? product.images.length - 1
            : current - 1,
        );
      }

      if (event.key === "ArrowRight") {
        setActiveImage((current) =>
          current === product.images.length - 1
            ? 0
            : current + 1,
        );
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [
    isLightboxOpen,
    product.images.length,
  ]);

  /*
   * ============================================
   * Prevent body scroll while lightbox is open
   * ============================================
   */

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [isLightboxOpen]);

  return (
    <>
      <main
        className="product-details"
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div className="product-details__container">

          {/* =====================================
              Back
          ====================================== */}

          <Link
            to={backToProductsPath}
            className="product-details__back"
          >
            {isArabic ? (
              <ArrowRight size={18} />
            ) : (
              <ArrowLeft size={18} />
            )}

            <span>
              {backToProductsLabel}
            </span>
          </Link>

          {/* =====================================
              Main content
          ====================================== */}

          <div className="product-details__grid">

            {/* ===================================
                Gallery
            ==================================== */}

            <div className="product-details__gallery">

              <div className="product-details__gallery-header">
                <span>
                  {galleryLabel}
                </span>
              </div>

              <div
                className="product-details__main-image"
              >
                <button
                  type="button"
                  className="product-details__image-button"
                  onClick={() =>
                    setIsLightboxOpen(true)
                  }
                  aria-label={openImageLabel}
                  title={openImageLabel}
                >
                  <img
                    src={
                      product.images[
                        activeImage
                      ]
                    }
                    alt={t(
                      product.titleKey,
                    )}
                  />
                </button>

                {product.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="product-details__gallery-prev"
                      onClick={
                        handlePreviousImage
                      }
                      aria-label={
                        previousImageLabel
                      }
                    >
                      <ChevronLeft
                        size={22}
                      />
                    </button>

                    <button
                      type="button"
                      className="product-details__gallery-next"
                      onClick={
                        handleNextImage
                      }
                      aria-label={
                        nextImageLabel
                      }
                    >
                      <ChevronRight
                        size={22}
                      />
                    </button>
                  </>
                )}

                <span className="product-details__zoom-hint">
                  {openImageLabel}
                </span>
              </div>

              {/* =================================
                  Thumbnails
              ================================== */}

              {product.images.length > 1 && (
                <div
                  className="product-details__thumbnails"
                  aria-label={galleryLabel}
                >
                  {product.images.map(
                    (image, index) => (
                      <button
                        key={`${image}-${index}`}
                        type="button"
                        className={`product-details__thumbnail ${
                          activeImage === index
                            ? "is-active"
                            : ""
                        }`}
                        onClick={() =>
                          setActiveImage(index)
                        }
                        aria-label={`${openImageLabel} ${index + 1}`}
                      >
                        <img
                          src={image}
                          alt={`${t(
                            product.titleKey,
                          )} ${index + 1}`}
                          loading="lazy"
                        />
                      </button>
                    ),
                  )}
                </div>
              )}

            </div>

            {/* ===================================
                Product information
            ==================================== */}

            <div className="product-details__content">

              <span className="product-details__eyebrow">
                {productDetailsLabel}
              </span>

              <h1 className="product-details__title">
                {t(product.titleKey)}
              </h1>

              <div
                className="product-details__line"
                aria-hidden="true"
              />

              <p className="product-details__description">
                {t(product.descriptionKey)}
              </p>

              {/* =================================
                  Details
              ================================== */}

              <div className="product-details__section">

                <h2 className="product-details__section-title">
                  {productDetailsLabel}
                </h2>

                <p className="product-details__details">
                  {t(product.detailsKey)}
                </p>

              </div>

              {/* =================================
                  Specifications
              ================================== */}

              <div className="product-details__section">

                <h2 className="product-details__section-title">
                  {specificationsLabel}
                </h2>

                <ul className="product-details__specifications">
                  {(
                    t(
                      product.specificationsKey,
                      {
                        returnObjects: true,
                      },
                    ) as string[]
                  ).map(
                    (
                      specification,
                      index,
                    ) => (
                      <li
                        key={`${specification}-${index}`}
                      >
                        <span className="product-details__specification-dot" />

                        <span>
                          {specification}
                        </span>
                      </li>
                    ),
                  )}
                </ul>

              </div>

            </div>

          </div>

        </div>
      </main>

      {/* =========================================
          Lightbox
      ========================================== */}

      {isLightboxOpen && (
        <div
          className="product-details__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={openImageLabel}
          onClick={() =>
            setIsLightboxOpen(false)
          }
        >

          <button
            type="button"
            className="product-details__lightbox-close"
            onClick={() =>
              setIsLightboxOpen(false)
            }
            aria-label={closeImageLabel}
            title={closeImageLabel}
          >
            <X size={25} />
          </button>

          <button
            type="button"
            className="product-details__lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              handlePreviousImage();
            }}
            aria-label={previousImageLabel}
          >
            <ChevronLeft size={30} />
          </button>

          <div
            className="product-details__lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <img
              src={
                product.images[
                  activeImage
                ]
              }
              alt={t(
                product.titleKey,
              )}
              className="product-details__lightbox-image"
            />
          </div>

          <button
            type="button"
            className="product-details__lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              handleNextImage();
            }}
            aria-label={nextImageLabel}
          >
            <ChevronRight size={30} />
          </button>

        </div>
      )}
    </>
  );
}