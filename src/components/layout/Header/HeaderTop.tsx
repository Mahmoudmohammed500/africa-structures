import { useTranslation } from "react-i18next";

import logo from "../../../assets/logo-removebg-preview.png";

export default function HeaderTop() {
  const { t } = useTranslation();

  return (
    <div className="header-top">
      <div className="header-container">

        <div className="company-info">

          <h1 className="company-name">
            {t("header.companyName")}
          </h1>

          <span className="company-subtitle">
            {t("header.subtitle")}
          </span>

        </div>


        <a
          href="/"
          className="company-logo"
          aria-label={t(
            "header.homeAriaLabel"
          )}
        >
          <img
            src={logo}
            alt={t("header.logoAlt")}
            width="72"
            height="72"
          />
        </a>

      </div>
    </div>
  );
}