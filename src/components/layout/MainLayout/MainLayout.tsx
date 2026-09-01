import { useEffect } from "react";

import {
  Outlet,
  useLocation,
} from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function MainLayout() {
  const location = useLocation();


  /* ========================================
     Handle Hash Navigation
  ======================================== */

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const targetId =
      decodeURIComponent(
        location.hash.slice(1),
      );

    let attempts = 0;

    let timer: number | undefined;


    const scrollToTarget = () => {
      const element =
        document.getElementById(
          targetId,
        );

      if (element) {
        window.setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);

        return;
      }

      attempts += 1;

      if (attempts < 40) {
        timer = window.setTimeout(
          scrollToTarget,
          50,
        );
      }
    };


    timer = window.setTimeout(
      scrollToTarget,
      50,
    );


    return () => {
      if (timer !== undefined) {
        window.clearTimeout(timer);
      }
    };
  }, [
    location.pathname,
    location.hash,
  ]);


  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      {/* <ScrollToTop /> */

      <Footer /> }
    </>
  );
}