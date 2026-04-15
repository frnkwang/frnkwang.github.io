import { capitalizeFirstLetter } from "../util/StringUtils";

const PAGES_DIR = "/src/pages";
// vite import.meta.glob only works with compile-time literals.
// We get all the recent pages and filter them down.
const ALL_PAGES = Object.entries(
  import.meta.glob("/src/pages/**/*.jsx", {
    eager: true,
  }),
).map(([filepath, module]) => {
  return { filepath: filepath, urlPath: getUrlPath(filepath), module: module };
});

// eg, About, Blog, Code, Journal, Music, Reading
export const SECTION_PAGES = ALL_PAGES.filter(
  (page) => page.filepath.match("^/src/pages/[^/]*\.jsx$") !== null,
).map((page) => {
  return {
    name: capitalizeFirstLetter(
      page.filepath.split("/").pop().replace(".jsx", ""),
    ),
    filepath: page.filepath,
    urlPath: getUrlPath(page.filepath),
    module: page.module,
  };
});

const SECTION_PAGE_NAMES = SECTION_PAGES.map((page) => page.filepath);

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

export function findRecentPages(searchDir, maxEntries) {
  var pages = SINGLE_PAGES;

  if (searchDir !== null) {
    pages = pages.filter((page) => page.filepath.startsWith(searchDir));
  }

  // TODO: sort by date modified and limit to maxEntries

  return pages;
}