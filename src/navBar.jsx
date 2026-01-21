import { Link, NavLink } from "react-router-dom";
import { FaInstagram, FaTiktok, FaSpotify, FaApple } from "react-icons/fa6";
import logo from "./assets/dotlogo.png";
import "./styles.css";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";

function NavBar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "el" : "en";
    i18n.changeLanguage(newLang);
    setMenuOpen(false);
  };

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Optional: lock page scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* LEFT SIDE — SOCIAL ICONS */}
        <div className="nav-left">
          <div className="social-icons">
            <a
              href="https://www.instagram.com/dotdownthelabel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@dotdownthelabel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
            <a
              href="https://open.spotify.com/artist/0aPxNR8o1PQmo9pG00I5Mf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
            >
              <FaSpotify />
            </a>
            <a
              href="https://music.apple.com/us/artist/sapiens/1466506169"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apple Music"
            >
              <FaApple />
            </a>
          </div>
        </div>

        {/* LANG SWITCH */}
        <div className="lang-switch">
          <button className="lang-toggle" onClick={toggleLang}>
            {i18n.language.toUpperCase()}
          </button>
        </div>

        {/* CENTER LOGO */}
        <div className="nav-center">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img src={logo} alt="Site Logo" className="logo-img" />
          </Link>
        </div>

        {/* RIGHT LINKS (DESKTOP) */}
        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
                {t("nav.home")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/artists" className={({ isActive }) => (isActive ? "active-link" : "")}>
                {t("nav.artists")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/workWithUs" className={({ isActive }) => (isActive ? "active-link" : "")}>
                {t("nav.WorkWithUs")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" className={({ isActive }) => (isActive ? "active-link" : "")}>
                {t("nav.News")}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* BURGER (MOBILE) */}
        <button
          className={`burger ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {/* MOBILE MENU PANEL */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>
            {t("nav.home")}
          </NavLink>

          <NavLink to="/artists" onClick={closeMenu}>
            {t("nav.artists")}
          </NavLink>

          <NavLink to="/workWithUs" onClick={closeMenu}>
            {t("nav.WorkWithUs")}
          </NavLink>

          <NavLink to="/news" onClick={closeMenu}>
            {t("nav.News")}
          </NavLink>

          <button className="mobile-lang" onClick={toggleLang}>
            {i18n.language.toUpperCase()}
          </button>
        </div>

        {/* BACKDROP */}
        {menuOpen && <div className="menu-backdrop" onClick={closeMenu} />}
      </div>
    </nav>
  );
}

export default NavBar;