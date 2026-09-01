import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  Moon,
  Sun,
  Languages,
  Menu,
  X,
} from "lucide-react";

import { useTranslation } from "react-i18next";

import { navigationItems } from "../../../data/navigation";

import MobileMenu from "../MobileMenu";

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({
  // isDarkMode,
  // onToggleTheme,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const [openDropdown, setOpenDropdown] =
    useState<string | null>(null);

  const dropdownRef =
    useRef<HTMLDivElement | null>(null);

  const { i18n, t } = useTranslation();

  const navigate = useNavigate();

  const location = useLocation();

  const isArabic = i18n.language === "ar";

  /* ========================================
     Scroll To Section
  ======================================== */

  const scrollToSection = (
    hash: string,
    behavior: ScrollBehavior = "smooth",
  ) => {
    const element =
      document.getElementById(hash);

    if (!element) {
      return;
    }

   
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        element.scrollIntoView({
          behavior,
          block: "start",
        });
      });
    });
  };

  /* ========================================
     Mobile Menu
  ======================================== */

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);

    setOpenDropdown(null);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  /* ========================================
     Desktop Dropdown
  ======================================== */

  const handleToggleDropdown = (
    path: string,
  ) => {
    setOpenDropdown((current) =>
      current === path
        ? null
        : path,
    );
  };

  /* ========================================
     Section Navigation
  ======================================== */

/* ========================================
   Section Navigation
======================================== */

const handleSectionClick = (
  path: string,
  hash: string,
) => {
  setOpenDropdown(null);
  setIsMobileMenuOpen(false);

  const targetHash = `#${hash}`;

  /* ========================================
     Same Page
  ======================================== */

  if (location.pathname === path) {
    const targetElement =
      document.getElementById(hash);

  
    if (location.hash === targetHash) {
      if (targetElement) {
        window.requestAnimationFrame(() => {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }

      return;
    }

  
    if (targetElement) {
      navigate({
        pathname: path,
        hash: targetHash,
      });

      return;
    }
  }

  /* ========================================
     Different Page
  ======================================== */

  navigate({
    pathname: path,
    hash: targetHash,
  });
};
  /* ========================================
     Handle Hash After Route Change
  ======================================== */

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const hash = decodeURIComponent(
      location.hash.replace("#", ""),
    );

   
    const timeoutId = window.setTimeout(() => {
      scrollToSection(hash);
    }, 100);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [
    location.pathname,
    location.hash,
  ]);

  /* ========================================
     Outside Click
  ======================================== */

  useEffect(() => {
    const handleOutsideClick = (
      event: MouseEvent,
    ) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node,
        )
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick,
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick,
      );
    };
  }, []);

  /* ========================================
     Close Dropdown On Route Change
  ======================================== */

  useEffect(() => {
    setOpenDropdown(null);
  }, [
    location.pathname,
    location.hash,
  ]);

  /* ========================================
     Language
  ======================================== */

  const handleToggleLanguage = async () => {
    
    const currentHash =
      location.hash;

    const nextLanguage =
      isArabic
        ? "en"
        : "ar";

    await i18n.changeLanguage(
      nextLanguage,
    );

    setIsMobileMenuOpen(false);
    setOpenDropdown(null);

   
    if (currentHash) {
      const hash =
        currentHash.replace("#", "");

      window.setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  };

  return (
    <nav
      className="navbar"
      aria-label={t(
        "nav.mainNavigation",
      )}
    >

      <div className="header-container navbar-container">

        {/* ====================================
            Mobile Toggle
        ==================================== */}

        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={
            handleToggleMobileMenu
          }
          aria-label={
            isMobileMenuOpen
              ? t("nav.closeMenu")
              : t("nav.openMenu")
          }
          aria-expanded={
            isMobileMenuOpen
          }
        >
          {isMobileMenuOpen ? (
            <X
              size={23}
              strokeWidth={1.8}
            />
          ) : (
            <Menu
              size={23}
              strokeWidth={1.8}
            />
          )}
        </button>

        {/* ====================================
            Desktop Navigation
        ==================================== */}

        <div
          className="navbar-links"
          ref={dropdownRef}
        >

          {navigationItems.map(
            (item) => {

              const hasChildren =
                Boolean(
                  item.children?.length,
                );

              const isCurrentPage =
                location.pathname ===
                item.path;

              const isDropdownOpen =
                openDropdown ===
                item.path;

              /* ==============================
                 Item With Submenu
              =============================== */

              if (hasChildren) {
                return (
                  <div
                    key={item.path}
                    className={`nav-dropdown ${
                      isDropdownOpen
                        ? "open"
                        : ""
                    }`}
                  >

                    <button
                      type="button"
                      className={`nav-link nav-dropdown-trigger ${
                        isCurrentPage
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        handleToggleDropdown(
                          item.path,
                        )
                      }
                      aria-expanded={
                        isDropdownOpen
                      }
                      aria-haspopup="menu"
                    >

                      <span>
                        {t(
                          item.labelKey,
                        )}
                      </span>

                    </button>

                    {/* ==========================
                        Desktop Dropdown
                    =========================== */}

                    <div
                      className="nav-dropdown-menu"
                      role="menu"
                    >

                      {item.children?.map(
                        (child) => (

                          <button
                            key={
                              child.hash
                            }
                            type="button"
                            className={`nav-dropdown-item ${
                              location.pathname ===
                                item.path &&
                              location.hash ===
                                `#${child.hash}`
                                ? "active"
                                : ""
                            }`}
                            role="menuitem"
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

                        ),
                      )}

                    </div>

                  </div>
                );
              }

              /* ==============================
                 Normal Link
              =============================== */

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link ${
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

        {/* ====================================
            Actions
        ==================================== */}

        <div className="navbar-actions">

          {/* Theme */}

        {/*
      <button
      type="button"
      className="header-action"
      onClick={
        onToggleTheme
      }
      aria-label={
              isDarkMode
              ? t(
                    "nav.enableLightMode",
                  )
                : t(
                  "nav.enableDarkMode",
                )
              }
            title={
              isDarkMode
                ? t(
                  "nav.lightMode",
                )
                : t(
                    "nav.darkMode",
                  )
                }
                >
                
                {isDarkMode ? (
              <Sun
              size={19}
                strokeWidth={1.8}
              />
            ) : (
              <Moon
                size={19}
                strokeWidth={1.8}
                />
              )}

          </button>
 
          *}  
          {/* Language */}
          
          <button
          type="button"
            className="header-action language-button"
            onClick={
              handleToggleLanguage
            }
            aria-label={
              isArabic
                ? t(
                    "nav.switchToEnglish",
                  )
                : t(
                    "nav.switchToArabic",
                  )
            }
            title={
              isArabic
                ? t(
                    "common.english",
                  )
                : t(
                    "common.arabic",
                  )
            }
          >

            <Languages
              size={19}
              strokeWidth={1.8}
            />

            <span>
              {isArabic
                ? "EN"
                : "عربي"}
            </span>

          </button>

        </div>

      </div>

      {/* ====================================
          Mobile Menu
      ==================================== */}

      <MobileMenu
        isOpen={
          isMobileMenuOpen
        }
        onClose={
          handleCloseMobileMenu
        }
      />

    </nav>
  );
}