import { Link } from "react-router-dom";
import { findRecentPages } from "../util/PageFinder";

function makePageDisplay(page, includeSection = false) {
  // TODO: this could definitely look prettier
  return (
    <li key={page.filepath}>
      <Link to={page.urlPath}>
        {includeSection ? `${page.section}: ` : ""}
        {page.name}
      </Link>
    </li>
  );
}

export function RecentPagesDisplay({ props }) {
  const searchDir = props.searchDir;
  const maxEntries = props.maxEntries;
  const includeSection = props.includeSection;
  console.log(includeSection);

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
