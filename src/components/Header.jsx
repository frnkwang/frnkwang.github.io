import { useState, useEffect, useRef } from "react";

import { useLocation, Link } from "react-router-dom";
import { SECTION_PAGES } from "../util/PageFinder";

import styles from "./Header.module.css";

function getCurrentPageName(pages, pathname) {
  const page = pages.find((p) => p.urlPath === pathname);
  return page ? page.name : "";
}

function Header() {
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isNavDrawerOpen) {
      // lock background scroll
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // cleanup
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isNavDrawerOpen]);

  const getNavElement = (name, path, selected) => {
    return (
      <li key={path}>
        <Link
          key={name}
          to={path}
          className={`${styles.link} center-text fs-3 ${selected ? styles.selected : ""} `}
          onClick={() => setIsNavDrawerOpen(false)}
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
        isNavDrawerOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsNavDrawerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    // cleanup on unmount
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isNavDrawerOpen]); // Re-run when isOpen state changes

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
        onClick={() => setIsNavDrawerOpen(!isNavDrawerOpen)}
        aria-expanded={isNavDrawerOpen}
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
        className={`container ${styles.navbarNav} ${isNavDrawerOpen ? styles.open : ""}`}
        ref={menuRef}
      >
        {sectionPagesNoHome.map((page) =>
          getNavElement(page.name, page.urlPath, page.name === currentPage),
        )}
      </ul>

      {/* backdrop overlay for mobile drawer */}
      {isNavDrawerOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setIsNavDrawerOpen(false)}
        />
      )}
    </div>
  );
}

export default Header;
