import { Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ProductDetails from "../../components/sectors/ProductDetails";
import { tentsSectorData } from "../../data/sectors/tents";

export default function ProductDetailsPage() {
  const { t } = useTranslation();

  const { sector, productId } = useParams<{
    sector: string;
    productId: string;
  }>();

  /*
   * ==========================================
   * تحديد بيانات القطاع
   * ==========================================
   */

  let sectorData;

  switch (sector) {
    case "tents":
      sectorData = tentsSectorData;
      break;

    default:
      return <Navigate to="/sectors/tents" replace />;
  }

  /*
   * ==========================================
   * البحث عن المنتج
   * ==========================================
   */

  const product = sectorData.products.products.find(
    (item) => String(item.id) === productId,
  );

  /*
   * المنتج غير موجود
   */

  if (!product) {
    return <Navigate to={`/sectors/${sector}`} replace />;
  }

  /*
   * ==========================================
   * Product Details
   * ==========================================
   */

  return (
    <ProductDetails
      product={product}
      backToProductsPath={`/sectors/${sector}`}
      backToProductsLabel={t("common.backToProducts")}
      productDetailsLabel={t("common.productDetails")}
      specificationsLabel={t("common.specifications")}
      galleryLabel={t("common.gallery")}
      previousImageLabel={t("common.previousImage")}
      nextImageLabel={t("common.nextImage")}
      closeImageLabel={t("common.closeImage")}
      openImageLabel={t("common.openImage")}
    />
  );
}