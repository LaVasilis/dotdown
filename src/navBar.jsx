import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok, FaSpotify, FaApple } from "react-icons/fa6"; 
import logo from "./assets/dotlogo.png";
import "./styles.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function NavBar() {
    const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "el" : "en";
    i18n.changeLanguage(newLang);
  };
  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* LEFT SIDE — SOCIAL ICONS */}
        <div className="nav-left">
          <div className="social-icons">
            <a href="https://www.instagram.com/dotdownthelabel/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@dotdownthelabel" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="https://open.spotify.com/artist/0aPxNR8o1PQmo9pG00I5Mf" target="_blank" rel="noopener noreferrer"><FaSpotify /></a>
            <a href="https://music.apple.com/us/artist/sapiens/1466506169" target="_blank" rel="noopener noreferrer"><FaApple /></a>
          </div>
        </div>
      <div className="lang-switch">
           <button className="lang-toggle" onClick={toggleLang}>
            {i18n.language.toUpperCase()}
          </button>

          </div>

        {/* CENTER LOGO */}
        <div className="nav-center">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Site Logo" className="logo-img" />
          </Link>
        </div>

        {/* RIGHT LINKS */}
        <div className="nav-right">
      <ul className="nav-links">
    <li>
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? "active-link" : ""}
      >
        {t("nav.home")}
      </NavLink>
    </li>

    <li>
      <NavLink 
        to="/artists" 
        className={({ isActive }) => isActive ? "active-link" : ""}
      >
        {t("nav.artists")}
      </NavLink>
    </li>

    <li>
      <NavLink 
        to="/workWithUs" 
        className={({ isActive }) => isActive ? "active-link" : ""}
      >
        {t("nav.WorkWithUs")}
      </NavLink>
    </li>

    <li>
      <NavLink 
        to="/news"     // <-- Make sure it's lowercase to match your route
        className={({ isActive }) => isActive ? "active-link" : ""}
      >
        {t("nav.News")}
      </NavLink>
    </li>
</ul>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;
