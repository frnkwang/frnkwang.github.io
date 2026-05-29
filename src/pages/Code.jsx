import { RecentPagesDisplay } from "../components/RecentPagesDisplay";

export const DISPLAY_NAME = "Code";
export const CREATION_DATE = new Date("2026-04-12");

function CodePage() {
  return (
    <div>
      <h1>Code Page</h1>
      <p>
        I went to school for computer science, and my day job is being a
        software engineer. I was primarily hired to be a C++ developer, and I do
        quite enjoy working at a lower level, having to think about memory
        management optimizations and system call interactions. However,
        nowadays, I tend to write more Python than anything, and I've recently
        started learning some Java too.
        <br />
        <br />I like to think I know a decent amount about coding, but there's
        always more to do and more to learn. I know for a fact that there's tons
        of C++ features I never learned thoroughly (variadic templates, concepts
        and constraints, ranges) and I'd love to explore more. Still, since I
        spend all day coding, I try to keep a balance in my life and tend to do
        non-coding things at home. That being said, here are a few personal
        programming explorations I've done.
      </p>
      <RecentPagesDisplay
        props={{
          searchDir: "/src/pages/code",
          maxEntries: 5,
          includeSection: false,
        }}
      />
    </div>
  );
}

export default CodePage;
