import { Link } from "react-router-dom";
import { findRecentPages } from "../util/PageFinder";

function makePageDisplay(page) {
  // TODO: this could definitely look prettier
  return (
    <li key={page.filepath}>
      <Link to={page.urlPath}>{page.name}</Link>
    </li>
  );
}

export function RecentPagesDisplay({ props }) {
  const searchDir = props.searchDir;
  const maxEntries = props.maxEntries;

  return (
    <div>
      <ul>
        {findRecentPages(searchDir, maxEntries).map((page) =>
          makePageDisplay(page),
        )}
      </ul>
    </div>
  );
}

export default RecentPagesDisplay;
