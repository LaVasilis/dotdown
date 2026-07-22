import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import heroLoop from "/src/assets/get.mp4";

function clamp01(n) {
  return Math.max(0, Math.min(1, n));
}

function Home() {
  const { t } = useTranslation();

  const videoPanelRef = useRef(null);
  const titlePanelRef = useRef(null);

  const [videoProgress, setVideoProgress] = useState(0);
  const [titleProgress, setTitleProgress] = useState(0);

  // simple scroll-progress based animation
  useEffect(() => {
    const onScroll = () => {
      // VIDEO panel progress
      if (videoPanelRef.current) {
        const r = videoPanelRef.current.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const p = clamp01(-r.top / vh);
        setVideoProgress(p);
      }

      // TITLE panel progress
      if (titlePanelRef.current) {
        const r = titlePanelRef.current.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const p = clamp01(-r.top / vh);
        setTitleProgress(p);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // video motion: slight zoom + fade while scrolling first panel
  const videoScale = 1 + videoProgress * 0.12; // 1.00 -> 1.12
  const videoOpacity = 1 - videoProgress * 0.35; // 1.00 -> 0.65

  // title motion: slide up + fade in while scrolling second panel
  const titleY = 40 - titleProgress * 40; // 40px -> 0px
  const titleOpacity = titleProgress; // 0 -> 1

  return (
    <main className="home-scroll">
      {/* 1) VIDEO PANEL */}
      <section className="panel panel--video" ref={videoPanelRef}>
  <div className="sticky sticky--video">
    <div className="video-frame">
      <video
        className="home-hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          transform: `scale(${videoScale})`,
          opacity: videoOpacity,
        }}
      >
        <source src={heroLoop} type="video/mp4" />
      </video>

      <div className="home-hero__overlay" />
    </div>
  </div>
</section>

      {/* 2) TITLE PANEL */}
      <section className="panel panel--title" ref={titlePanelRef}>
        <div className="sticky sticky--title">
          <div
            className="title-block"
            // style={{
            //   transform: `translateY(${titleY}px)`,
            //   opacity: titleOpacity,
            // }}
          >
            {/* <h1>{t("home.title")}</h1> */}
            {/* <p>{t("home.subtitle")}</p> */}
          </div>
        </div>
      </section>

      {/* 3) LABEL SUMMARY PANEL (replaces carousel) */}
      <section className="panel panel--about">
        <div className="about-wrap">
          <h1>{t("home.title")}</h1>
          <h2 className="about-title">DotDown The Label</h2>
          <p className="about-text">{t("home.aboutText1")}</p>
          <p className="about-text">{t("home.aboutText2")}</p>
        </div>
      </section>
    </main>
  );
}

export default Home;