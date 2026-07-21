import React from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaTiktok, FaSpotify, FaApple } from "react-icons/fa6";
import logo from "./assets/dotlogo.png";
import ColorBends from "./ColorBends.jsx";
import "./styles.css";

function ComingSoon() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "el" : "en");
  };

  return (
    <div className="coming-soon">
      <div className="coming-soon__bg">
        <ColorBends
          colors={["#ffffff", "#000000", "#080808"]}
          rotation={-52}
          speed={0.07}
          scale={1.1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0.6}
          parallax={0.4}
          noise={0.05}
          transparent
          autoRotate={0.8}
        />
      </div>

      <button className="coming-soon__lang" onClick={toggleLang}>
        {i18n.language.toUpperCase()}
      </button>

      <div className="coming-soon__content">
        <img src={logo} alt="DotDown The Label" className="coming-soon__logo" />
        <h1>{t("comingSoon.title")}</h1>
        <p>{t("comingSoon.subtitle")}</p>

        <div className="coming-soon__socials">
          <a href="https://www.instagram.com/dotdownthelabel/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@dotdownthelabel" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok />
          </a>
          <a href="https://open.spotify.com/artist/0aPxNR8o1PQmo9pG00I5Mf" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
            <FaSpotify />
          </a>
          <a href="https://music.apple.com/us/artist/sapiens/1466506169" target="_blank" rel="noopener noreferrer" aria-label="Apple Music">
            <FaApple />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
