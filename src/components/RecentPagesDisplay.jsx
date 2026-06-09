import { Link } from "react-router-dom";
import { findRecentPages } from "../util/PageFinder";

function makePageDisplay(page, includeSection = false, useImage = true) {
  return (
    <div key={page.filepath} className="card">
      <Link to={page.urlPath}>
        {useImage && (
          <img src={page.image} alt={page.name} className="card-image" />
        )}
        <div className="card-content">
          {includeSection ? `${page.section}: ` : ""}
          {page.name}
        </div>
      </Link>
    </div>
  );
}

export function RecentPagesDisplay({ props }) {
  const searchDir = props.searchDir;
  const maxEntries = props.maxEntries;
  const includeSection = props.includeSection;
  const useImage = props.useImage;

  return (
    <div className="dynamic-grid">
      {findRecentPages(searchDir, maxEntries).map((page) =>
        makePageDisplay(page, includeSection, useImage),
      )}
    </div>
  );
}

export default RecentPagesDisplay;
