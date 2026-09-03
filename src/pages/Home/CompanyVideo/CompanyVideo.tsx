import {
  useEffect,
  useRef,
} from "react";

import { useTranslation } from "react-i18next";

import companyVideo from "../../../assets/company-video.mp4";

import SectionHeading from "../../../components/common/SectionHeading/SectionHeading";


const CompanyVideo = () => {
  const { t } = useTranslation();

  const videoRef =
    useRef<HTMLVideoElement | null>(null);


  /* =========================================================
     Auto Play Video When Section Enters Viewport
  ========================================================= */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const section =
      document.getElementById("company-video");

    if (!section) {
      return;
    }


    const observer =
      new IntersectionObserver(
        (entries) => {
          const entry = entries[0];

          if (!entry) {
            return;
          }


          /*
           * Start video when the section becomes visible.
           */
          if (entry.isIntersecting) {
            video
              .play()
              .catch(() => {
                /*
                 * Autoplay can still be blocked by
                 * the browser in some situations.
                 */
              });
          }


          /*
           * Pause video when the section leaves
           * the viewport.
           */
          else {
            video.pause();
          }
        },
        {
          /*
           * Start when around 30% of the section
           * becomes visible.
           */
          threshold: 0.3,
        }
      );


    observer.observe(section);


    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[var(--color-background)]
        py-16
        sm:py-20
        lg:py-24
      "
      id="company-video"
      aria-labelledby="company-video-title"
    >

      <div
        className="
          container
          mx-auto
          w-[min(100%-2rem,var(--container-width))]
          sm:w-[min(100%-3rem,var(--container-width))]
        "
      >

        {/* =====================================================
            Section Heading
        ===================================================== */}

        <SectionHeading
          eyebrow={t("companyVideo.eyebrow")}
          title={t("companyVideo.title")}
          description={t("companyVideo.description")}
        />


        {/* =====================================================
            Video Wrapper
        ===================================================== */}

        <div className="mx-auto w-full max-w-6xl">

          {/* ===================================================
              Outer Frame
          =================================================== */}

          <div
            className="
              relative
              rounded-2xl
              border
              border-[var(--color-secondary-light)]
              bg-white
              p-2
              shadow-[0_25px_70px_rgba(31,77,58,0.12)]
              sm:rounded-[1.5rem]
              sm:p-3
              lg:rounded-[2rem]
              lg:p-4
            "
          >

            {/* =================================================
                Top Gold Accent
            ================================================= */}

            <span
              className="
                pointer-events-none
                absolute
                left-8
                top-0
                h-[3px]
                w-24
                -translate-y-1/2
                rounded-full
                bg-[var(--color-secondary)]
                sm:left-12
                sm:w-32
              "
              aria-hidden="true"
            />


            {/* =================================================
                Bottom Gold Accent
            ================================================= */}

            <span
              className="
                pointer-events-none
                absolute
                bottom-0
                right-8
                h-[3px]
                w-24
                translate-y-1/2
                rounded-full
                bg-[var(--color-secondary)]
                sm:right-12
                sm:w-32
              "
              aria-hidden="true"
            />


            {/* =================================================
                Video
            ================================================= */}

            <div
              className="
                relative
                aspect-video
                w-full
                overflow-hidden
                rounded-xl
                bg-[var(--color-primary-dark)]
                sm:rounded-2xl
              "
            >

              <video
                ref={videoRef}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
                controls
                autoPlay
                muted
                playsInline
                preload="metadata"
                aria-label={t(
                  "companyVideo.videoLabel"
                )}
              >

                <source
                  src={companyVideo}
                  type="video/mp4"
                />

                {t(
                  "companyVideo.videoNotSupported"
                )}

              </video>

            </div>

          </div>


          {/* ===================================================
              Caption
          =================================================== */}

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-center
              text-xs
              font-medium
              leading-6
              text-[var(--color-text-muted)]
              sm:mt-6
              sm:text-sm
              sm:leading-7
            "
          >
            {t("companyVideo.caption")}
          </p>

        </div>

      </div>

    </section>
  );
};


export default CompanyVideo;
