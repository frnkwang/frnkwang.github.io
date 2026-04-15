// vite import.meta.glob only works with compile-time literals.
// We get all the recent pages and filter them down.
const PAGES = Object.entries(
  import.meta.glob("/src/single-pages/**/*.jsx", {
    eager: true,
  }),
).map(([path, module]) => {
  return { path: path, module: module };
});

function getUrlPath(filepath) {
  if (filepath.startsWith("/src/single-pages")) {
    filepath = filepath.replace("/src/single-pages", "");
  }

  return filepath.replace(".jsx", "");
}

export function findRecentPages(searchDir, maxEntries) {
  var pages = PAGES;

  if (searchDir !== null) {
    pages = pages.filter((page) => page.path.startsWith(searchDir));
  }

  // TODO: sort by date modified and limit to maxEntries

  return pages.map((page) => {
    return { urlPath: getUrlPath(page.path), module: page.module };
  });
}

function RecentPagesDisplay({ props }) {
  const searchDir = props.searchDir;
  const maxEntries = props.maxEntries;

  return <div />;
}

export default RecentPagesDisplay;
