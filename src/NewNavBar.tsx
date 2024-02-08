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

  const handleScrollToTop = (ref) => {
    // Instead of scrolling to the ref, scroll to the top of the page:
    window.scrollTo({ top: 0, behavior: "smooth" });
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
            <img
              src={logo}
              alt="Logo"
              className="logo"
              onClick={() => handleScrollToTop(homeRef)}
            />
          </Link>
        </div>

        <div className="hidden sm:block">
          <ul className="desktopMenuUl">
            <li>
              <a
                onClick={() => handleScrollToTop(homeRef)}
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
          <li>
            <span
              onClick={() => handleScrollToTop(homeRef)}
              className={
                activeSection === "home-section" ? "highlight-green" : ""
              }
            >
              Home
            </span>
          </li>
          <li>
            <span
              onClick={() => handleScrollToSection(dataRef)}
              className={
                activeSection === "data-section" ? "highlight-green" : ""
              }
            >
              Dataset
            </span>
          </li>
          <li>
            <span
              onClick={() => handleScrollToSection(analysisRef)}
              className={
                activeSection === "analysis-section" ? "highlight-green" : ""
              }
            >
              Analysis
            </span>
          </li>

          <li>
            <span
              onClick={() => handleScrollToSection(trainingRef)}
              className={
                activeSection === "training-section" ? "highlight-green" : ""
              }
            >
              Training
            </span>
          </li>

          <li>
            <span
              onClick={() => handleScrollToSection(evaluationRef)}
              className={
                activeSection === "evaluation-section" ? "highlight-green" : ""
              }
            >
              Evaluation
            </span>
          </li>

          <li>
            <span
              onClick={() => handleScrollToSection(chatbotRef)}
              className={
                activeSection === "chat-section" ? "highlight-green" : ""
              }
            >
              AI Chatbot
            </span>
          </li>
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
