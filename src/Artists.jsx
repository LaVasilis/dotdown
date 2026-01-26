import React, { useState, useEffect } from "react";
import "./styles.css";
import sapiImage from "./assets/sapi2Img.webp";
import dikiImage from "./assets/diky.jpeg";
import nez from "./assets/nez.jpg";
import tayImg from "./assets/tayImg.webp";
import ArtistsSongs from "./Songs.jsx";
import ColorBends from "./ColorBends.jsx";


const initialSlides = [
  {
    name: "SAPIENS",
    preview:
      "SAPIENS blends traditional textures with modern production to create cinematic lo-fi. Their tracks are built around warm chords, dusty drums, and subtle rhythmic shifts. The result is immersive music that feels both nostalgic and forward-leaning.",
    fullInfo:
      "The Performance by SAPIENS is a mesmerizing journey through sound and rhythm, balancing organic instrumentation with contemporary beat design. Their releases often lean into storytelling through atmosphere, using gradual builds, melodic motifs, and carefully placed ambient details. Expect music that works equally well for late-night focus and deep listening.",
    image: sapiImage,
    tags: ["Rapper"],
    position: "50% 50%",
    songURL:
      "https://open.spotify.com/embed/track/0JSh3z3IeMFrFubk2Vt7b5?utm_source=generator",
  },
  {
    name: "TAY",
    preview:
      "TAY crafts crisp, melodic lo-fi with a clean, modern edge. The grooves are steady and hypnotic, while the melodies stay bright and memorable. It’s the kind of sound that fits studying, driving, or zoning out with headphones.",
    fullInfo:
      "TAY’s productions focus on clarity and mood: tight drum programming, spacious pads, and hooks that repeat just enough to feel comforting. Influences range from chillhop to ambient pop, giving each track a gentle lift without losing the laid-back feel. If you like lo-fi that feels polished but still cozy, TAY sits right in that lane.",
    image: tayImg,
    tags: ["Rapper"],
    position: "0px 40%",
    songURL:
      "https://open.spotify.com/embed/track/7qiZfU4dY1lsylvNEJkhlH?utm_source=generator&theme=0",
  },
  {
    name: "DIKY",
    preview:
      "DIKY leans into darker tones and heavy atmosphere for a more cinematic lo-fi palette. The percussion is minimal but punchy, letting textures and space do the talking. Each track feels like a scene—quiet, moody, and intentional.",
    fullInfo:
      "DIKY builds immersive soundscapes using filtered samples, subtle distortions, and low-end weight that stays controlled. Their arrangements avoid clutter, making small details—like tape hiss, room noise, or a single melodic fragment—feel important. It’s a sound designed for late nights, rainy days, and deep focus sessions.",
    image: dikiImage,
    tags: ["Rapper"],
    position: "0px 28%",
    songURL:
      "https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqLv?utm_source=generator&theme=0",
  },
  {
    name: "NEZ",
    preview:
      "NEZ is all about emotional motion—soft melodies over grounded drums and warm bass. The arrangements breathe, giving you space to feel the track instead of being rushed through it. It’s lo-fi that aims for genuine mood and intimacy.",
    fullInfo:
      "The producer NEZ crafts immersive soundscapes that sit between chillhop and ambient, often using gentle harmonic movement and subtle transitions. Their music emphasizes pacing and texture, building a ‘floating’ feeling without losing groove. Great for studying, journaling, or putting on in the background when you want calm with character.",
    image: nez,
    tags: ["Producer"],
    position: "0px 40%",
    songURL:
      "https://open.spotify.com/embed/track/2takcwFFVPdS6mFmlKheGW?utm_source=generator&theme=0",
  },
];

function Artists() {
  const [slides, setSlides] = useState(initialSlides);
  const [showModal, setShowModal] = useState(false);
  const [currentArtist, setCurrentArtist] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlides((prev) => [...prev.slice(1), prev[0]]);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  // const handleNext = () => setSlides((prev) => [...prev.slice(1), prev[0]]);
  // const handlePrev = () => setSlides((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);

  const openArtist = (artist) => {
    setCurrentArtist(artist);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentArtist(null);
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
          <h1>Members</h1>
          {/* carousel (unchanged except click handler) */}
          <div className="container">
            <div className="slide">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="item"
                  style={{
                    backgroundImage: `url('${slide.image}')`,
                    backgroundPosition: slide.position,
                  }}
                >
                  <div className="content">
                    <div className="name">{slide.name}</div>
                    <div className="des">{slide.preview}</div>
                    <button onClick={() => openArtist(slide)}>More Info</button>
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
            {initialSlides.map((artist) => (

              <div
                className="artist-card artist-card--clickable"
                key={artist.name}
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
