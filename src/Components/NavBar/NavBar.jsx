import "./NavBar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import UpperNavBar from "./UpperNavBar";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

export default function NavBar() {
const [menuHeight, setMenuHeight] = useState("0")

  const menuExpander = () => {
    menuHeight == "0" ? setMenuHeight("250px") : setMenuHeight("0");
  }

  return (
    <header>
      <div className="upper-header">
        <UpperNavBar />
      </div>

      <div className="main-header">
        <div className="logo">
          <img src="src/assets/logo.png" />
        </div>

        <MenuIcon className="menu-icon-header" onClick={menuExpander}/>
        <nav className="navbar-nav-expander" style={{height: menuHeight }}>
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

        <div className="header-search">
          <input type="text" placeholder="جستجو..." />
          <SearchIcon className="header-search-icon" />
        </div>
      </div>
    </header>
  );
}
