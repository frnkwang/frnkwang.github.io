import { Link } from "react-router-dom";
import { findRecentPages } from "../util/PageFinder";

function makePageDisplay(page, includeSection = false) {
  // TODO: this could definitely look prettier
  return (
    <li key={page.filepath}>
      {includeSection ? `${page.section}: ` : ""}
      <Link to={page.urlPath}>{page.name}</Link>
    </li>
  );
}

export function RecentPagesDisplay({ props }) {
  const searchDir = props.searchDir;
  const maxEntries = props.maxEntries;
  const includeSection = props.includeSection;

  return (
    <div>
      <ul>
        {findRecentPages(searchDir, maxEntries).map((page) =>
          makePageDisplay(page, includeSection),
        )}
      </ul>
    </div>
  );
}

export default RecentPagesDisplay;
