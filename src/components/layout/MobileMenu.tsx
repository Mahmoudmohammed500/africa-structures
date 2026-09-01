import { useState } from "react";

import {
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  ChevronDown,
  X,
} from "lucide-react";

import { useTranslation } from "react-i18next";

import {
  navigationItems,
} from "../../data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const location = useLocation();

  const [openItem, setOpenItem] =
    useState<string | null>(null);

  if (!isOpen) {
    return null;
  }


  /* ========================================
     Toggle Submenu
  ======================================== */

  const handleToggleItem = (
    path: string,
  ) => {
    setOpenItem((current) =>
      current === path
        ? null
        : path,
    );
  };


  /* ========================================
     Close Menu
  ======================================== */

  const handleCloseMenu = () => {
    setOpenItem(null);

    onClose();
  };


  /* ========================================
     Navigate To Section
  ======================================== */

  const handleSectionClick = (
    path: string,
    hash: string,
  ) => {
    const targetHash = `#${hash}`;

    /*
      نفذ التنقل أولًا.
      بعد ذلك اقفل القائمة.
    */
    if (location.pathname === path) {

      // نفس الصفحة
      navigate(
        `${path}${targetHash}`,
      );

      window.setTimeout(() => {
        const element =
          document.getElementById(
            hash,
          );

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

    } else {

      // صفحة مختلفة
      navigate(
        `${path}${targetHash}`,
      );
    }

    /*
      قفل القائمة بعد تنفيذ navigate
    */
    window.setTimeout(() => {
      setOpenItem(null);
      onClose();
    }, 0);
  };


  return (
    <div
      className="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label={t(
        "nav.mobileMenuTitle",
      )}
    >

      {/* ======================================
          Header
      ======================================= */}

      <div className="mobile-menu-header">

        <span>
          {t(
            "nav.mobileMenuTitle",
          )}
        </span>

        <button
          type="button"
          className="mobile-menu-close"
          onClick={
            handleCloseMenu
          }
          aria-label={t(
            "nav.closeMenu",
          )}
          title={t(
            "nav.closeMenu",
          )}
        >
          <X
            size={22}
            strokeWidth={1.8}
          />
        </button>

      </div>


      {/* ======================================
          Navigation
      ======================================= */}

      <div className="mobile-menu-links">

        {navigationItems.map(
          (item) => {

            const hasChildren =
              Boolean(
                item.children?.length,
              );

            const isCurrentPage =
              location.pathname ===
              item.path;

            const isItemOpen =
              openItem ===
              item.path;


            /* ==================================
               Item With Children
            ================================== */

            if (hasChildren) {
              return (
                <div
                  key={item.path}
                  className={`mobile-menu-group ${
                    isItemOpen
                      ? "open"
                      : ""
                  }`}
                >

                  <button
                    type="button"
                    className={`mobile-menu-parent ${
                      isCurrentPage
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      handleToggleItem(
                        item.path,
                      )
                    }
                    aria-expanded={
                      isItemOpen
                    }
                    aria-haspopup="true"
                  >
                    <span>
                      {t(
                        item.labelKey,
                      )}
                    </span>

                    <ChevronDown
                      size={17}
                      strokeWidth={1.8}
                      className={`mobile-menu-chevron ${
                        isItemOpen
                          ? "open"
                          : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>


                  {/* =============================
                      Submenu
                  ============================== */}

                  <div
                    className={`mobile-submenu ${
                      isItemOpen
                        ? "open"
                        : ""
                    }`}
                  >

                    {item.children?.map(
                      (child) => {

                        const isActiveSection =
                          location.pathname ===
                            item.path &&
                          location.hash ===
                            `#${child.hash}`;

                        return (
                          <button
                            key={
                              child.hash
                            }
                            type="button"
                            className={`mobile-submenu-link ${
                              isActiveSection
                                ? "active"
                                : ""
                            }`}
                            onClick={() =>
                              handleSectionClick(
                                item.path,
                                child.hash,
                              )
                            }
                          >
                            {t(
                              child.labelKey,
                            )}
                          </button>
                        );
                      },
                    )}

                  </div>

                </div>
              );
            }


            /* ==================================
               Normal Link
            ================================== */

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={
                  handleCloseMenu
                }
                className={({ isActive }) =>
                  `mobile-menu-link ${
                    isActive
                      ? "active"
                      : ""
                  }`
                }
              >
                {t(
                  item.labelKey,
                )}
              </NavLink>
            );
          },
        )}

      </div>
    </div>
  );
}