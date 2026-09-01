import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type {
  FooterColumn as FooterColumnType,
} from "../../../data/footer";

interface FooterColumnProps {
  column: FooterColumnType;
}

export default function FooterColumn({
  column,
}: FooterColumnProps) {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  return (
    <div className="footer-column">

      <h3 className="footer-column-title">
        {t(column.titleKey)}
      </h3>

      <ul className="footer-links">
        {column.links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className="footer-link"
              aria-label={t(link.translationKey)}
            >
              <span>
                {t(link.translationKey)}
              </span>

              <span
                className="footer-link-arrow"
                aria-hidden="true"
              >
                {isArabic ? "←" : "→"}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>

    </div>
  );
}