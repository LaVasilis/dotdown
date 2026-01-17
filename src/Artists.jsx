import React, { useState } from "react";
import "./styles.css";
import sapiImage from "./assets/sapi2Img.webp";
import dikiImage from "./assets/diky.jpeg";
import nez from "./assets/nez.jpg";
import tayImg from "./assets/tayImg.webp";
import ArtistsSongs from "./Songs.jsx";

const initialSlides = [
  {
    name: "SAPIENS",
    description:
      "The Performance by SAPIENS is a mesmerizing journey through sound and rhythm, captivating audiences with their unique blend of traditional and contemporary music.",
    image: sapiImage,
    position: "50% 50%",
    songURL: "https://open.spotify.com/embed/track/0JSh3z3IeMFrFubk2Vt7b5?utm_source=generator",
  },
  {
    name: "TAY",
    description:
      "Chase the Northern Lights under star-lit skies along scenic fjord roads.",
    image: tayImg,
       position: "0px 40%",
    songURL: "https://open.spotify.com/embed/track/7qiZfU4dY1lsylvNEJkhlH?utm_source=generator&theme=0",
  },
  {
    name: "DIKY",
    description:
      "Tuwgieruighiweroguih gweurgh werjghwiejo werguhi.",
    image:
      dikiImage,
    position: "0px 28%",
    songURL: "https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqLv?utm_source=generator&theme=0",
  },
  {
    name: "NEZ",
    description:
      "The producer, NEZ crafts immersive soundscapes that transport listeners to new emotional heights.",
    image: nez,
    position: "0px 40%",
    songURL: "https://open.spotify.com/embed/track/2takcwFFVPdS6mFmlKheGW?utm_source=generator&theme=0",
  },
];

function Artists() {
  const [slides, setSlides] = useState(initialSlides);
  const [showModal, setShowModal] = useState(false);
  const [currentSongURL, setCurrentSongURL] = useState("");

  const handleNext = () => {
    setSlides((prev) => [...prev.slice(1), prev[0]]);
  };

  const handlePrev = () => {
    setSlides((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  const handleSeeMore = (songURL) => {
    setCurrentSongURL(songURL);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentSongURL("");
  };

  return (
    <section className="artists-page">
      <h1>Our Roster</h1>
      <div className="container">
        <div className="slide">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="item"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundPosition: slide.position ,
              }}
            >
              <div className="content">
                <div className="name">{slide.name}</div>
                <div className="des">{slide.description}</div>
                <a
                  className="seeMore"
                  onClick={() => handleSeeMore(slide.songURL)}
                  style={{ cursor: 'pointer' }}
                >
                  <button>More Info</button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="button">
          <button className="prev" onClick={handlePrev}>
            ◁
          </button>
          <button className="next" onClick={handleNext}>
            ▷
          </button>
        </div>
      </div>
<div className="artists-cards">
        {initialSlides.map((artist) => (
          <div className="artist-card" key={artist.name}>
            <div
              className="artist-card__image"
              style={{
                backgroundImage: `url('${artist.image}')`,
                backgroundPosition: artist.position || "50% 50%",
              }}
            />
            <div className="artist-card__body">
              <h3 className="artist-card__name">{artist.name}</h3>
              <p className="artist-card__desc">{artist.description}</p>

              <button
                className="artist-card__btn"
                onClick={() => handleSeeMore(artist.songURL)}
              >
                More Info
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Spotify Modal */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
          onClick={closeModal}
        >
          <div
          
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '24px',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
            {currentSongURL && <ArtistsSongs songURL={currentSongURL} />}
          </div>
        </div>
      )}
    </section>
  );
}

export default Artists;
