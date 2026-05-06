import { useState } from "react";

import { useLocation, Link } from "react-router-dom";
import { SECTION_PAGES } from "../util/PageFinder";

import styles from "./Header.module.css";

function getNavElement(name, path, selected) {
  return (
    <Link
      key={name}
      to={path}
      className={`${styles.link} center-text fs-3 ${selected ? styles.selected : ""} `}
    >
      {name}
    </Link>
  );
}

function getCurrentPageName(pages, pathname) {
  const page = pages.find((p) => p.urlPath === pathname);
  return page ? page.name : "";
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const sectionPagesNoHome = SECTION_PAGES.filter(
    (page) => page.urlPath !== "/",
  );

  const currentPage = getCurrentPageName(
    sectionPagesNoHome,
    useLocation().pathname,
  );

  return (
    <div className="hori container">
      <Link to="/" className={`${styles.link} center-text`}>
        <h2>Frank W.</h2>
      </Link>
      <div className="center-text">{currentPage}</div>

      {/* start right align */}
      <div style={{ marginLeft: "auto" }} />

      <div
        className={`${styles.navbar_toggler}`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        id="menuToggle"
      >
        <button>
          {/* hamburger */}
          <svg width="30" height="30" viewBox="0 0 30 30">
            <path stroke="white" strokeWidth="2" d="M4 7h22M4 15h22M4 23h22" />
          </svg>
        </button>
      </div>

      <div className={`${styles.navbar_collapse} ${isOpen ? styles.show : ""}`}>
        <div className="hori container">
          {sectionPagesNoHome.map((page) =>
            getNavElement(page.name, page.urlPath, page.name === currentPage),
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
