import {
  useEffect,
  useState,
} from "react";

import {
  useLocation,
} from "react-router-dom";

import {
  ArrowUp,
} from "lucide-react";

import "./scroll-to-top.css";

export default function ScrollToTop() {
  const [visible, setVisible] =
    useState(false);

  const { pathname } =
    useLocation();


  /* ========================================
     Scroll Listener
  ======================================== */

  useEffect(() => {
    const handleScroll = () => {
      setVisible(
        window.scrollY > 400,
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);


  /* ========================================
     Auto Scroll On Navigation
  ======================================== */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);


  /* ========================================
     Scroll To Top Button
  ======================================== */

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };


  /* ========================================
     Hidden
  ======================================== */

  if (!visible) {
    return null;
  }


  return (
    <button
      type="button"
      className="scroll-to-top"
      onClick={
        handleScrollToTop
      }
      aria-label="العودة إلى أعلى الصفحة"
      title="العودة إلى أعلى الصفحة"
    >
      <ArrowUp
        size={19}
        strokeWidth={1.8}
      />
    </button>
  );
}