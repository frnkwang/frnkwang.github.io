import { RecentPagesDisplay } from "../components/RecentPagesDisplay";

export const DISPLAY_NAME = "Journal";
export const CREATION_DATE = new Date("2026-04-12");

function JournalPage() {
  return (
    <div>
      <blockquote className="fs-4">
        好记性不如烂笔头。
        <br />
        <i>A great memory does not compare to even a pale pen.</i>
        <footer className="fs-6">— Chinese Proverb</footer>
      </blockquote>

      <p>
        This is a point I often heard from my family as I grew up, and I believe
        in it wholeheartedly. Human memory is fallible. We forget things
        frequently, and then even forget that we forgot those things.
        <br />
        <br />
        For an analytical person like me, journaling is critical. It provides a
        way for me to make permanent records of my thoughts, feelings, and
        experiences that I'd otherwise forget within days. This then lets me
        reflect and learn from my mistakes in the future. Plus, it's nice to
        just have a record of everything that I've been through - the last thing
        I'd want is to forget the good memories I shared with friends.
        <br />
        <br />
        I've been journaling since 2020, and I believe that everyone should at
        least try doing it. I hand-write everything, but then transcribe it to a
        digital format so it's easier to search later. I provide here a few
        randomly selected snippets just to give an example of what journaling
        can look like - it doesn't need to be formal or structured; it just
        needs to be some sort of record of events or thoughts.
        <br />
        <br />
        <i>
          Note: I've changed all the names in posted entries for privacy
          reasons. They're consistent within entries but may not be consistent
          across entries.
        </i>
      </p>
      <RecentPagesDisplay
        props={{
          searchDir: "/src/pages/journal",
          maxEntries: 5,
          includeSection: false,
        }}
      />
    </div>
  );
}

export default JournalPage;
