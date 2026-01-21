import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import heroLoop from "/src/assets/get.mp4";

// (temporary mock data)
const ARTISTS = [
  { name: "Artist 1", img: "https://picsum.photos/800/500?1" },
  { name: "Artist 2", img: "https://picsum.photos/800/500?2" },
  { name: "Artist 3", img: "https://picsum.photos/800/500?3" },
  { name: "Artist 4", img: "https://picsum.photos/800/500?4" },
];

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
        // r.top goes from 0 -> -vh while scrolling through the panel
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
  const videoScale = 1 + videoProgress * 0.12;       // 1.00 -> 1.12
  const videoOpacity = 1 - videoProgress * 0.35;     // 1.00 -> 0.65

  // title motion: slide up + fade in while scrolling second panel
  const titleY = 40 - titleProgress * 40;            // 40px -> 0px
  const titleOpacity = titleProgress;                // 0 -> 1

  return (
    <main className="home-scroll">
      {/* 1) VIDEO PANEL */}
      <section className="panel panel--video" ref={videoPanelRef}>
        <div className="sticky sticky--video">
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

          {/* overlay (optional) */}
          <div className="home-hero__overlay" />
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
            <h1>{t("home.title")}</h1>
            <p>{t("home.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* 3) CAROUSEL PANEL */}
      {/* <section className="panel panel--carousel">
        <ArtistsCarousel artists={ARTISTS} />
      </section> */}
    </main>
  );
}

function ArtistsCarousel({ artists }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + artists.length) % artists.length);
  const next = () => setIndex((i) => (i + 1) % artists.length);

  const current = artists[index];

  return (
    <div className="carousel-wrap">
      <h2 className="carousel-title">Artists</h2>

      <div className="carousel-card">
        <img src={current.img} alt={current.name} />
        <div className="carousel-caption">{current.name}</div>
      </div>

      <div className="carousel-controls">
        <button onClick={prev} aria-label="Previous">
          ‹
        </button>
        <div className="carousel-dots">
          {artists.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button onClick={next} aria-label="Next">
          ›
        </button>
      </div>
    </div>
  );
}

export default Home;