import { RecentPagesDisplay } from "../components/RecentPagesDisplay";

export const DISPLAY_NAME = "Music";
export const CREATION_DATE = new Date("2026-04-12");

function MusicPage() {
  return (
    <div>
      <p>
        I started playing violin in 3rd grade. Throughout middle school, high
        school, college, and now into post-grad, I've continued to play. I'm by
        no means a virtuoso - I much prefer playing in orchestras where I can
        hide behind people for difficult sections - but playing violin has made
        me love music, and especially classical music. Combine my history in
        violin with playing Nintendo games growing up, and you'll find that I'm
        a very melody-oriented musician who prefers dances over songs.
        <br />
        <br />
        Though I no longer really practice violin to improve my skills, I have
        gotten into composing and producing music. This all started naturally
        and I've never had any formal, rigorous instruction on music theory or
        composition other than 2 courses in college intended for non-music
        majors. Still, I like to think I've picked up a lot of things along the
        way.
        <br />
        <br />
        This music page serves as a way for me to share music - mostly my own
        compositions (with composer commentary!), but also any pieces that I
        find particularly interesting. For pieces I wrote, I've built the music
        into the webpage, and you can choose to have the audio follow along as
        you read my commentary.
      </p>
      <RecentPagesDisplay
        props={{
          searchDir: "/src/pages/music",
          includeSection: false,
        }}
      />
    </div>
  );
}

export default MusicPage;
