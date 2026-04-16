import RecentPagesDisplay from "../components/RecentPagesDisplay.jsx";

export const DISPLAY_NAME = "Home";
export const CREATION_DATE = new Date("2026-04-12");

export function HomePage() {
  return (
    <div>
      <p className="fs-6">
        Hi! My name is Frank Wang.
        <br />
        <br />
        I'm a software engineer in the greater Philly area, currently working in
        fintech. I mostly work on system engineering and distributed systems. I
        typically steer away from frontend, but I did what I could for this
        site.
        <br />
        <br />
        I've been playing violin for about 16 years, which led me to becoming
        interested in composition and music theory. I also run and bike
        casually.
        <br />
        <br />
        This website is an excuse for me to practice frontend by dumping random
        things about myself online.
      </p>
      <h4>Recent Pages</h4>
      <RecentPagesDisplay
        props={{ searchDir: null, maxEntries: 10, includeSection: true }}
      />
    </div>
  );
}

export default HomePage;
