import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import "./styles.css";
import sapiImage from "./assets/sapi2Img.webp";
import dikiImage from "./assets/diky.jpeg";
import nez from "./assets/nez.jpg";
import tayImg from "./assets/tayImg.webp";
import barro from "./assets/barro.webp";
import ArtistsSongs from "./Songs.jsx";
import ColorBends from "./ColorBends.jsx";
import useDocumentMeta from "./useDocumentMeta.js";

// Non-translatable fields; localized name/preview/fullInfo/tags come from
// the "artistsPage.members.<id>" and "artistsPage.tags.<key>" i18n keys.
// `slug` is the URL segment for that artist's own page (/artists/<slug>).
const memberMeta = [
  {
    id: "sapiens",
    slug: "sapiens",
    image: sapiImage,
    tagKeys: ["rapper"],
    position: "50% 50%",
    songURL:
      "https://open.spotify.com/embed/track/0JSh3z3IeMFrFubk2Vt7b5?utm_source=generator",
  },
  {
    id: "tay",
    slug: "tay",
    image: tayImg,
    tagKeys: ["rapper"],
    position: "0px 40%",
    songURL:
      "https://open.spotify.com/embed/track/0rmRJ9MUtFSUQRwWgczqBY?utm_source=generator&si=ec3be6b1091b4f22",
  },
  {
    id: "diky",
    slug: "diky",
    image: dikiImage,
    tagKeys: ["rapper"],
    position: "0px 28%",
    songURL:
      "https://open.spotify.com/embed/track/6jVYh0ANy55qBZHBWsqMdY?utm_source=generator&si=51f73020d3a84922",
  },
  {
    id: "nez",
    slug: "nez",
    image: nez,
    tagKeys: ["producer"],
    position: "0px 40%",
    songURL:
      "https://open.spotify.com/embed/track/2J63QqB2wB5tDlujwGD3z0?utm_source=generator&si=f0841bc4fad54285",
  },
  {
    id: "baroPasso",
    slug: "baro-passo",
    image: barro,
    tagKeys: ["band"],
    position: "10% 50%",
    songURL:
      "https://open.spotify.com/embed/track/2bsaaSEz4pq1Y1K7k1APap?utm_source=generator&si=c18ffa799d5c4b4b",
  },
];

function Artists() {
  const { t } = useTranslation();
  const { slug } = useParams();
  const navigate = useNavigate();

  const members = useMemo(
    () =>
      memberMeta.map((meta) => ({
        ...meta,
        name: t(`artistsPage.members.${meta.id}.name`),
        preview: t(`artistsPage.members.${meta.id}.preview`),
        fullInfo: t(`artistsPage.members.${meta.id}.fullInfo`),
        seoDescription: t(`artistsPage.members.${meta.id}.seoDescription`),
        tags: meta.tagKeys.map((tagKey) => t(`artistsPage.tags.${tagKey}`)),
      })),
    [t]
  );

  const [slideIds, setSlideIds] = useState(() => memberMeta.map((m) => m.id));

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIds((prev) => [...prev.slice(1), prev[0]]);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  const membersById = useMemo(
    () => Object.fromEntries(members.map((m) => [m.id, m])),
    [members]
  );
  const membersBySlug = useMemo(
    () => Object.fromEntries(members.map((m) => [m.slug, m])),
    [members]
  );
  const slides = slideIds.map((id) => membersById[id]);

  // The URL is the single source of truth for which artist's modal is open,
  // so deep links (/artists/baro-passo) and the browser back button work.
  const currentArtist = slug ? membersBySlug[slug] : null;
  const showModal = Boolean(slug);

  // A slug that doesn't match any artist falls back to the plain listing.
  useEffect(() => {
    if (slug && !membersBySlug[slug]) {
      navigate("/artists", { replace: true });
    }
  }, [slug, membersBySlug, navigate]);

  useDocumentMeta(
    currentArtist
      ? {
          title: `${currentArtist.name} — DOT DOWN`,
          description: currentArtist.seoDescription,
          url: `https://dotdownthelabel.com/artists/${currentArtist.slug}`,
          canonical: `https://dotdownthelabel.com/artists/${currentArtist.slug}`,
        }
      : {
          title: t("artistsPage.seoTitle"),
          description: t("artistsPage.seoDescription"),
          url: "https://dotdownthelabel.com/artists",
          canonical: "https://dotdownthelabel.com/artists",
        }
  );

  const openArtist = (artist) => {
    navigate(`/artists/${artist.slug}`);
  };

  const closeModal = () => {
    navigate("/artists");
  };

  return (
    <>
      <div style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        minHeight: "100vh",  
        zIndex: 0,
        pointerEvents: "none"
      }}>
        <ColorBends
          // colors={["#410d4b", "#50070d", "#22101e"]}
          colors={["#ffffff", "#000000", "#080808"]}
          rotation={-52}
          speed={0.07}
          scale={1.1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0.95}
          parallax={0.65}
          noise={0.05}
          transparent
          autoRotate={1.1}
        />
      </div>


      <div style={{
        position: "relative",
        zIndex: 1,
        minHeight: "100vh",
        pointerEvents: "auto"
      }}>
        <section className="artists-page">
          <h1>{t("artistsPage.title")}</h1>
          {/* carousel (unchanged except click handler) */}
          <div className="container">
            <div className="slide">
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="item"
                  style={{
                    backgroundImage: `url('${slide.image}')`,
                    backgroundPosition: slide.position,
                  }}
                >
                  <div className="content">
                    <div className="name">{slide.name}</div>
                    <div className="des">{slide.preview}</div>
                    <button onClick={() => openArtist(slide)}>{t("artistsPage.moreInfo")}</button>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="button">
          <button className="prev" onClick={handlePrev}>◁</button>
          <button className="next" onClick={handleNext}>▷</button>
        </div> */}
          </div>

          {/* cards (now fully clickable) */}
          <div className="artists-cards">
            {members.map((artist) => (

              <div
                className="artist-card artist-card--clickable"
                key={artist.id}
                role="button"
                tabIndex={0}
                onClick={() => openArtist(artist)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openArtist(artist)}
              >
                <div
                  className="artist-card__image"
                  style={{
                    backgroundImage: `url('${artist.image}')`,
                    backgroundPosition: artist.position || "50% 50%",
                  }}
                />
                <div className="artist-card__tagtip">
                  {(artist.tags || []).join("  ")}
                </div>

                <div className="artist-card__body">
                  <h3 className="artist-card__name">{artist.name}</h3>

                  {/* 3+ sentences preview */}
                  <p className="artist-card__desc">{artist.preview}</p>

                  {/* <div className="artist-card__cta">Click for more</div> */}
                </div>
              </div>
            ))}
          </div>

          {/* Popup modal (small window + info + Spotify) */}
          {showModal && currentArtist && (
            <div className="artist-modal__backdrop" onClick={closeModal}>
              <div className="artist-modal" onClick={(e) => e.stopPropagation()}>
                <button className="artist-modal__close" onClick={closeModal}>✕</button>

                <div className="artist-modal__header">
                  <div
                    className="artist-modal__thumb"
                    style={{
                      backgroundImage: `url('${currentArtist.image}')`,
                      backgroundPosition: currentArtist.position || "50% 50%",
                    }}
                  />
                  <div className="artist-modal__titlewrap">
                    <h2 className="artist-modal__title">{currentArtist.name}</h2>
                    <p className="artist-modal__text">{currentArtist.fullInfo}</p>
                  </div>
                </div>

                <div className="artist-modal__spotify">
                  <ArtistsSongs songURL={currentArtist.songURL} />
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default Artists;
