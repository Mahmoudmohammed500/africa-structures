import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { useTranslation } from "react-i18next";

import FooterColumn from "./FooterColumn";

import { footerColumns } from "../../../data/footer";

import "../../../styles/footer.css";

import logo from "../../../assets/logo.png";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">

      {/* =====================================
          Main Footer
      ====================================== */}

      <div className="footer-main">

        <div className="footer-container">

          <div className="footer-grid">

            {/* =================================
                Brand
            ================================= */}

            <div className="footer-brand">

              <a
                href="/"
                className="company-logo"
                aria-label={t("footer.homeAriaLabel")}
              >
                <img
                  src={logo}
                  alt={t("footer.logoAlt")}
                  width="72"
                  height="72"
                />
              </a>


              {/* =================================
                  Description
              ================================= */}

              <p className="footer-description">
                {t("footer.description")}
              </p>


              {/* ===============================
                  Social Links
              ================================= */}

              <div className="footer-socials">

                <a
                  href="#"
                  className="footer-social"
                  aria-label="Facebook"
                  rel="noopener noreferrer"
                >
                  <span className="social-letter">
                    f
                  </span>
                </a>


                <a
                  href="#"
                  className="footer-social"
                  aria-label="LinkedIn"
                  rel="noopener noreferrer"
                >
                  <span className="social-letter">
                    in
                  </span>
                </a>


                <a
                  href="#"
                  className="footer-social"
                  aria-label="Twitter"
                  rel="noopener noreferrer"
                >
                  <span className="social-letter">
                    X
                  </span>
                </a>

              </div>

            </div>


            {/* =================================
                Navigation Columns
            ================================= */}

            {footerColumns.map((column) => (
              <FooterColumn
                key={column.id}
                column={column}
              />
            ))}


            {/* =================================
                Contact
            ================================= */}

            <div className="footer-column footer-contact">

              <h3 className="footer-column-title">
                {t("footer.contact")}
              </h3>


              <ul className="footer-contact-list">


                {/* =================================
                    Phone
                ================================= */}

   <li>

                  <a
                    href="tel:+2026199503"
                    className="footer-contact-item"
                  >

                    <span className="footer-contact-icon">

                      <Phone
                        size={17}
                        strokeWidth={1.8}
                      />

                    </span>


                    <span dir="ltr">
                      {t("footer.phone1")}
                    </span>

                  </a>

                </li>


                <li>

                  <a
                    href="tel:+2026199503"
                    className="footer-contact-item"
                  >

                    <span className="footer-contact-icon">

                      <Phone
                        size={17}
                        strokeWidth={1.8}
                      />

                    </span>


                    <span dir="ltr">
                      {t("footer.phone2")}
                    </span>

                  </a>

                </li>


                {/* =================================
                    Address
                ================================= */}

                <li>

                  <div className="footer-contact-item">

                    <span className="footer-contact-icon">

                      <MapPin
                        size={17}
                        strokeWidth={1.8}
                      />

                    </span>


                    <span>
                      {t("footer.address")}
                    </span>

                  </div>

                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================
          Footer Bottom
      ====================================== */}

      <div className="footer-bottom">

        <div className="footer-container footer-bottom-container">

          <div className="footer-copyright">

            <span>
              {t("footer.copyright")}
            </span>


            <span className="footer-developer">
              {t("footer.developer")}
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}