import { RecentPagesDisplay } from "../components/RecentPagesDisplay";

export const DISPLAY_NAME = "Blog";
export const CREATION_DATE = new Date("2026/04/12");

function BlogPage() {
  return (
    <div>
      <p>
        Random thoughts that I've had. These may be spurious things that come up
        throughout the day, or more thought-out things organized from multiple
        journal entries into a larger structure.
      </p>
      <RecentPagesDisplay
        props={{
          searchDir: "/src/pages/blog",
          includeSection: false,
        }}
      />
    </div>
  );
}

export default BlogPage;
