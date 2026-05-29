import { capitalizeFirstLetter } from "../util/StringUtils";

const PAGES_DIR = "/src/pages";
// vite import.meta.glob only works with compile-time literals.
// We get all the recent pages and filter them down.
export const ALL_PAGES = Object.entries(
  import.meta.glob("/src/pages/**/*.jsx", {
    eager: true,
  }),
).map(([filepath, module]) => {
  if (module.DISPLAY_NAME === undefined) {
    throw new Error(`Page ${filepath} is missing DISPLAY_NAME export.`);
  }
  if (module.CREATION_DATE === undefined) {
    throw new Error(`Page ${filepath} is missing CREATION_DATE export.`);
  }
  return {
    name: module.DISPLAY_NAME,
    date: module.CREATION_DATE,
    filepath: filepath,
    urlPath: getUrlPath(filepath),
    section: getSectionName(filepath),
    module: module,
  };
});

const SECTION_PAGE_ORDER = [
  "About",
  "Blog",
  "Code",
  "Journal",
  "Music",
  "Consumption",
];
export const SECTION_PAGES = SECTION_PAGE_ORDER.map((pageName) => {
  const sectionPage = ALL_PAGES.find((page) => {
    return (
      page.filepath.match("^/src/pages/[^/]*\.jsx$") !== null &&
      page.name === pageName
    );
  });
  if (sectionPage === undefined) {
    throw new Error(`Could not find section page ${pageName}.`);
  }
  return sectionPage;
});

const SECTION_PAGE_NAMES = SECTION_PAGES.map((page) => page.filepath);

// not intended to be used externally, so not exported.
// Use findRecentPages with searchDir to get the single pages.
const SINGLE_PAGES = ALL_PAGES.filter(
  (page) => !SECTION_PAGE_NAMES.includes(page.filepath),
);

function getUrlPath(filepath) {
  // Exception for home page
  if (filepath === "/src/pages/Home.jsx") {
    return "/";
  }

  return filepath.replace(PAGES_DIR, "").replace(".jsx", "").toLowerCase();
}

function getSectionName(filepath) {
  // eg, for /src/pages/journal/Entry042921.jsx, returns "Journal"
  const m = filepath.match("^/src/pages/([^/]*)/[^/]*\.jsx$");
  return m ? capitalizeFirstLetter(m[1]) : null;
}

export function findRecentPages(searchDir, maxEntries) {
  var pages = SINGLE_PAGES;

  if (searchDir !== null) {
    pages = pages.filter((page) => page.filepath.startsWith(searchDir));
  }

  pages.sort((a, b) => b.date - a.date);
  if (maxEntries !== null) {
    pages = pages.slice(0, maxEntries);
  }

  return pages;
}
