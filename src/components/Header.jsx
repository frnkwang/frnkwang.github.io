import { useState, useEffect, useRef } from "react";

import { useLocation, Link } from "react-router-dom";
import { SECTION_PAGES } from "../util/PageFinder";

import styles from "./Header.module.css";

function getCurrentPageName(pages, pathname) {
  const page = pages.find((p) => p.urlPath === pathname);
  return page ? page.name : "";
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const getNavElement = (name, path, selected) => {
    return (
      <li key={path}>
        <Link
          key={name}
          to={path}
          className={`${styles.link} center-text fs-3 ${selected ? styles.selected : ""} `}
          onClick={() => setIsOpen(false)}
        >
          {name}
        </Link>
      </li>
    );
  };

  useEffect(() => {
    const handleClick = (event) => {
      // if clicked outside drawer, close the drawer
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    // cleanup on unmount
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen]); // Re-run when isOpen state changes

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

      {/* hamburger to appear on mobile*/}
      <div
        className={styles.navbarToggler}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        id="menuToggle"
      >
        <button>
          <svg width="30" height="30" viewBox="0 0 30 30">
            <path stroke="white" strokeWidth="2" d="M4 7h22M4 15h22M4 23h22" />
          </svg>
        </button>
      </div>

      {/* pages. On desktop, list across top. On mobile, openable drawer via hamburger */}
      <ul
        className={`container ${styles.navbarNav} ${isOpen ? styles.open : ""}`}
        ref={menuRef}
      >
        {sectionPagesNoHome.map((page) =>
          getNavElement(page.name, page.urlPath, page.name === currentPage),
        )}
      </ul>

      {/* backdrop overlay for mobile drawer */}
      {isOpen && (
        <div className={styles.backdrop} onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}

export default Header;
