import img from "../../assets/great_ace_attorney_medley.png";
import objection from "../../assets/music/GreatAceAttorneyMedley/objection.jpg";

import score from "../../assets/music/GreatAceAttorneyMedley/The Great Ace Attorney Medley.pdf";
import vln1 from "../../assets/music/GreatAceAttorneyMedley/The Great Ace Attorney Medley-Violin_1.pdf";
import vln2 from "../../assets/music/GreatAceAttorneyMedley/The Great Ace Attorney Medley-Violin_2.pdf";
import vla from "../../assets/music/GreatAceAttorneyMedley/The Great Ace Attorney Medley-Viola.pdf";
import cello from "../../assets/music/GreatAceAttorneyMedley/The Great Ace Attorney Medley-Violoncello.pdf";

export const DISPLAY_NAME = "The Great Ace Attorney Medley";
export const DISPLAY_IMAGE = img;
export const CREATION_DATE = new Date("2026/05/26");

function GreatAceAttorneyMedley() {
  return (
    <div>
      <h2>The Great Ace Attorney Medley</h2>
      <p>
        Game(s) released in 2015, 2017. Arranged by me in MuseScore May 2026.
      </p>
      <h3>Background about Ace Attorney</h3>
      <p>
        The Ace Attorney games are some of my favorite games ever. For those
        unfamiliar, they're visual novel games centered around being a defense
        attorney. You defend various clients accused of the most bizzare
        murders, investigate colorful crime scenes, interact with quirky
        characters, and present evidence in the courtroom to prove your clients'
        innocence (which typically involves accusing someone else). If you
        haven't heard of the games before, you may have at least seen these
        memes which come from the series:
      </p>
      <div className="hori container" style={{ justifyContent: "center" }}>
        <img
          src={objection}
          style={{ border: "3px solid gray", maxWidth: "50%" }}
        />
      </div>
      <p>
        One thing that the series is pretty well known for is its exciting
        music. The courtroom has appropriately serious or tense soundtracks,
        while the weird characters you meet also have their own unique music,
        particularly in the later games. I'm not sure why, but these soundtracks
        have always stood out to me. They're wonderfully crafted for each
        situation or character they're describing (eg, cross-examinations are
        appropriately inquisitive and confusing; the goofy characters have weird
        and somewhat unusual tunes, etc.), and they stick around in my head long
        after I finish the games. I'd almost consider it a crime to play the
        games without listening to the music.
        <br />
        <br />
        <a href="https://en.wikipedia.org/wiki/The_Great_Ace_Attorney_Chronicles">
          The Great Ace Attorney games
        </a>{" "}
        in particular are a small spin-off of the main series. It's set in a
        completely different time period with an entirely new cast of
        characters. These two games are perhaps my favorite in the series. The
        story itself is excellent (and more complete than all the other games,
        in my opinion), the animations and characters are beautiful and full of
        life, and the mini-games are funny in their own way. And of course, the
        music stands out to me a lot too. It primarily relies on an orchestra,
        though with a few extra instruments here and there (accordion stands out
        in a few pieces).
      </p>
      <h3>Background about my arrangement</h3>
      <p>
        I've never really arranged music before, but an orchestra I'm in invited
        all members to perform in "small ensembles", and I decided this would be
        a good opportunity to try my hand at arranging. Since I'm a violinist, I
        only really feel comfortable arranging for strings, though I'd love to
        eventually expand to winds and brass too.
        <br />
        <br />
        Here are a few ideas that guided my arrangement philosophy:
      </p>
      <ul>
        <li>
          Prioritize, at all costs, accuracy to the original. This means keys,
          rhythms, form, etc.
        </li>
        <li>
          Transitions between numbers in the piece should be limited and not
          creating any new material
        </li>
        <li>Try to make parts "fun" for each instrument if possible</li>
      </ul>
      <p>
        With that all said, what tunes did I include? I ended up choosing a mix
        of my favorite tunes and ones that I think are critical to the game
        itself:
      </p>
      <ol>
        <li>
          <a href="https://www.youtube.com/watch?v=XkT2vXVug6I">
            The Great Courtroom Lobby
          </a>
          - a good way to intro the game and the piece
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=r2V8u9IUAuI">
            The Great Cross-Examination (Moderato)
          </a>{" "}
          - heard all the time during the game
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=hdf0TAwQjFo">
            Kazuma Asogi - Samurai with a Mission
          </a>{" "}
          - a critical character in the game
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=0x7C3BH8s1o">
            Herlock Sholmes - Detective of Great Foggy Town
          </a>{" "}
          - another critical and very quirky character. His name is oddly
          familiar...
        </li>
        <li>
          <a href="https://youtu.be/KGOmsZfSJuw?si=z9X65Hb0w2IdK5ej">
            The Old Bailey - Closing Argument (Summation Examination)
          </a>{" "}
          - one of the main mini-games in the courtroom
        </li>
        <li>
          <a href="https://youtu.be/oUkW0J2rLX0?si=ehxc097AEy2uC1RT">
            Ryunosuke Naruhodo - Objection!
          </a>{" "}
          - an iconic track that plays when you find a flaw in the prosecution's
          argument
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=rbTd0UVvmMI">
            Prelude to Pursuit
          </a>{" "}
          - perhaps my favorite number in the entire game, a buildup to the next
          number
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=jpGWmCFdVng">
            Pursuit - The Great Turnabout
          </a>{" "}
          - an exciting track for when you're on the edge of finding the truth
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=2p5jB781gbQ">
            Susato Mikotoba - Flower Blooming in the New World
          </a>{" "}
          - another critical character, and probably my favorite character
          soundtrack in the entire series
        </li>
      </ol>
      <p>
        There were unfortunately a ton of tracks that I didn't have time to
        transcribe before I had to just call it and start rehearsing for my
        orchestra's concert (not to mention, this arrangement was already
        getting pretty long!). I would've loved to include other characters like
        van Zieks's, Gregson's, or Iris's themes, as well as the final number
        that plays during the last deduction minigame (iykyk). Perhaps I'll get
        around to doing those someday later, and maybe for full orchestra!
      </p>
      <h3>Parts</h3>
      <p>
        Here are the parts, for string quartet! Feel free to use them as you'd
        like, but I would appreciate any credits if you play them.
      </p>
      <ul>
        <li>
          <a href={score} download="The Great Ace Attorney Medley.pdf">
            Score
          </a>
        </li>
        <li>
          <a href={vln1} download="The Great Ace Attorney Medley-Violin_1.pdf">
            Violin 1
          </a>
        </li>
        <li>
          <a href={vln2} download="The Great Ace Attorney Medley-Violin_2.pdf">
            Violin 2
          </a>
        </li>
        <li>
          <a href={vla} download="The Great Ace Attorney Medley-Viola.pdf">
            Viola
          </a>
        </li>
        <li>
          <a
            href={cello}
            download="The Great Ace Attorney Medley-Violoncello.pdf"
          >
            Cello
          </a>
        </li>
      </ul>
    </div>
  );
}

export default GreatAceAttorneyMedley;
