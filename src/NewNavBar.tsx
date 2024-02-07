import React, { useState } from "react";
import "./navbar.css";
import logo from "./assets/react.svg";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";

const NewNavbar = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menuHidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menuHidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div>
      <nav>
        <div>
          <Link to="/" className="site-title">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>

        <div className="hidden sm:block">
          <ul className="desktopMenuUl">
            <li className="active">Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="burger-menu sm:hidden" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div className={`${menu_class}`}>
        <ul className="mobileMenuUl">
          <li className="active">Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NewNavbar;
