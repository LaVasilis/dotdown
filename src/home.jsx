import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa6";
import heroLoop from "/src/assets/get.mp4";

function Home() {
  const { t } = useTranslation();
  const videoRef = useRef(null);

  // JSX's `muted` attribute doesn't always sync to the video element's
  // actual `muted` property on mobile Safari, and iOS only allows
  // autoplay when that property is true at play() time — so set it
  // explicitly before calling play().
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.playsInline = true;
    const playPromise = video.play();
    if (playPromise) playPromise.catch(() => {});
  }, []);

  return (
    <main className="home-scroll">
      <section className="home-hero">
        <video
          ref={videoRef}
          className="home-hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={heroLoop} type="video/mp4" />
        </video>
        <div className="home-hero__overlay" />

        <div className="home-hero__scrollcue">
          <span>{t("home.scrollCue")}</span>
          <div className="home-hero__scrollcue-icon-wrap">
            <FaChevronDown className="home-hero__scrollcue-icon" />
          </div>
        </div>
      </section>

      <section className="panel--about">
        <div className="about-wrap">
          <h1 className="about-headline">{t("home.title")}</h1>
          <h2 className="about-title">DotDown The Label</h2>
          <p className="about-text">{t("home.aboutText1")}</p>
          <p className="about-text">{t("home.aboutText2")}</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
