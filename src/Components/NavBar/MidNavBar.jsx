import { Link } from "react-router-dom";
import "./NavBar.css";
import "./MidNavBar.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function MidNavBar(params) {
  const { sticky } = params;
  const [menuHeight, setMenuHeight] = useState("0");

  const stickyHeader = {
    position: "fixed",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#fff",
    width: "100%",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    zIndex: 999,
  };

  const menuExpander = () => {
    menuHeight == "0" ? setMenuHeight("250px") : setMenuHeight("0");
  };

  return (
    <div style={sticky && stickyHeader}>
      <div className="header-nav">
        <Link to="/">
          <img src="assets/logo2.png" height="50px" />
        </Link>

        <nav className="navbar-nav-expander" style={{ height: menuHeight }}>
          <ul>
            <li>
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link to="/about">درباره ما</Link>
            </li>
            <li>
              <Link to="/contact">تماس با ما</Link>
            </li>
            <li>
              <Link to="/blog">بلاگ</Link>
            </li>
          </ul>

          <button>مشاوره رایگان</button>
        </nav>

        <nav className="navbar-nav">
          <ul>
            <li>
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link to="/about">درباره ما</Link>
            </li>
            <li>
              <Link to="/contact">تماس با ما</Link>
            </li>
            <li>
              <Link to="/blog">بلاگ</Link>
            </li>
          </ul>
        </nav>

        <div className="header-social-links">
          <LinkedInIcon className="header-social-icon" />
          <YouTubeIcon className="header-social-icon" />
          <TelegramIcon className="header-social-icon" />
          <MenuIcon className="menu-hamburger-icon" onClick={menuExpander} />
        </div>
      </div>
    </div>
  );
}
