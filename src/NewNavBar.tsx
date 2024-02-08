import React from "react";
import { useState, useRef, useEffect } from "react";
import "./navbar.css";
import logo from "./assets/react.svg";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";

const NewNavbar = ({
  homeRef,
  dataRef,
  analysisRef,
  trainingRef,
  evaluationRef,
  activeSection,
  chatbotRef,
}) => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menuHidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleScrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

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
            <li>
              <a
                onClick={() => handleScrollToSection(homeRef)}
                className={
                  activeSection === "home-section" ? "highlight-green" : ""
                }
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScrollToSection(dataRef)}
                className={
                  activeSection === "data-section" ? "highlight-green" : ""
                }
              >
                Dataset
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScrollToSection(analysisRef)}
                className={
                  activeSection === "analysis-section" ? "highlight-green" : ""
                }
              >
                Analysis
              </a>
            </li>

            <li>
              <a
                onClick={() => handleScrollToSection(trainingRef)}
                className={
                  activeSection === "training-section" ? "highlight-green" : ""
                }
              >
                Training
              </a>
            </li>

            <li>
              <a
                onClick={() => handleScrollToSection(evaluationRef)}
                className={
                  activeSection === "evaluation-section"
                    ? "highlight-green"
                    : ""
                }
              >
                Evaluation
              </a>
            </li>

            <li>
              <a
                onClick={() => handleScrollToSection(chatbotRef)}
                className={
                  activeSection === "chat-section" ? "highlight-green" : ""
                }
              >
                AI Chatbot
              </a>
            </li>
            {/* <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink> */}
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
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="#data-analysis">About</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
        </ul>
      </div>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default NewNavbar;
