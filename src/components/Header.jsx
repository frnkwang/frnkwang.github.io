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
      <div className="hori container" style={{ marginLeft: "auto" }}>
        {sectionPagesNoHome.map((page) =>
          getNavElement(page.name, page.urlPath, page.name === currentPage),
        )}
      </div>
    </div>
  );
}

export default Header;
