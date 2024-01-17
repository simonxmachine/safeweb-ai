import * as React from "react";
import logo from "./assets/react.svg"; // Import your logo image
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/" className="site-title">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
        </ul>
      </nav>
    </>
  );
}

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

export default Navbar;
