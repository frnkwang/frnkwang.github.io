import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DynamicMusicPlayer,
  DynamicMusicProvider,
  DynamicMusicSection,
} from "../../components/DynamicMusicPlayer";

import img from "../../assets/fl3-35.png";
import MusicNotation from "../../components/MusicNotation";

export const DISPLAY_NAME = "FL3-35: Broken Seal";
export const DISPLAY_IMAGE = img;
export const CREATION_DATE = new Date("2020/05/07");

function FL3_35() {
  return (
    <DynamicMusicProvider color="#992012">
      <DynamicMusicPlayer title="FL3-35: Broken Seal" src="/music/FL3-35.mp3" />
      <h2>FL3-35: Broken Seal</h2>
      <p>
        Composed/produced by me in FL Studio Mobile 3; Finished May 7th, 2020
      </p>
      <i>
        Most of these notes are taken directly from a{" "}
        <Link to="/journal">journal</Link> entry I wrote about half a year after
        finishing this piece. In retrospect, a lot of the prose is a bit
        childish - you can definitely tell that I was just starting to learn
        music theory - but it's an interesting reflection of how I perceived the
        piece.
      </i>
      <h3>Overview</h3>
      <p>
        This piece, if I wanted to summarize it, feels discomforting to me. Its
        name is from “sealing away an ancient evil” – but the seal is broken, so
        the evil returns. In terms of my own compositional progress, I’d say
        this is one of the most important pieces. It’s probably the first piece
        where I start really playing around with what I call “subtle” key
        changes – the ones that you’ll miss if you don’t pay attention, and
        usually only go one step in the circle of fifths, and aren’t used for
        explicit dramatic effect. You can see this really shape the later
        FL3-33, when it shifts from D to G to D to C. FL3-35 is also the first
        piece, in my opinion, that flows really well. The phrases are connected
        to each other well, and there are transition phrases where needed. But
        enough of that. Let’s discuss the actual piece.
        <br />
        <br />
        The most noteworthy, and in my opinion, interesting aspect of FL3-35 is
        that it’s in 5. I wanted to test out the new feature [of FL Studio
        Mobile 3] (well, new at the time), so I wrote this. The interesting part
        is how I use rhythms in different sections to fill up the 5 beats while
        still only really being 4, in my opinion. The main rhythms are:
      </p>
      <ol>
        <li>
          <MusicNotation
            musicKey="Em"
            meter="5/4"
            noteDuration="1/8"
            notes="B2 z B - B B - B z B2|"
          />
        </li>
        <li>
          <MusicNotation
            musicKey="Em"
            meter="5/4"
            noteDuration="1/8"
            notes="B2 z B - B z B2 B2|"
          />
        </li>
        <li>
          <MusicNotation
            musicKey="Em"
            meter="5/4"
            noteDuration="1/4"
            notes="B2 B3|"
          />
        </li>
        <li>
          <MusicNotation
            musicKey="Em"
            meter="5/4"
            noteDuration="1/4"
            notes="B3 B2|"
          />
        </li>
      </ol>
      <p>
        These are all pretty loosely defined, especially 3&4. There’s also an
        underlying rhythmic motif:
        <MusicNotation musicKey="Em" noteDuration="1/16" notes="B3B B2B2" />
        which appears a lot later, and I’ll talk about later.
      </p>
      <DynamicMusicSection title="Opening Murmurs" time={"00:00"}>
        The piece starts, quietly, ominously, with rhythm 1. It’s one E,
        repeated:
        <MusicNotation
          musicKey="Em"
          meter="5/4"
          noteDuration="1/8"
          notes="e2 z e - e e - e z E2|e2 z e - e e - e z ^d2|"
        />
        After a bit, a new melody, with the same rhythm, plays on top of it:
        <MusicNotation
          musicKey="Em"
          meter="5/4"
          noteDuration="1/8"
          notes="e2 z =f - f d - d z e2|d2 z =f - f d - d z e2|"
        />
        The lines playing on top of each other immediately creates some
        discomfort because of the dissonance between E & F♮. Also note that this
        rhythm is really just 4 beats, but with two eighth rests inserted. To
        me, it feels like it’s trying to make a statement in 4, but has to keep
        catching its breath. After a bit, it follows a scale up to B, where it
        keeps playing this melody. Then, we hear that something is obviously
        building: the drums start playing an odd rhythm, the high-pitched-synth
        starts coming in at strange intervals instead of every bar. It
        eventually rises into the next part, which I like to think of as the
        main theme. Also, this is the first time I modulated to the dominant so
        I could resolve back to the tonic, and I think it was very convincing.
      </DynamicMusicSection>
      <DynamicMusicSection title="Main Theme" time={"00:54.4"}>
        The next bit, the main theme, is a bit interesting. First, because it
        doesn’t really fall perfectly into any of the rhythms I mentioned
        before, and second, because it introduces the rhythmic motif I mentioned
        earlier:
        <MusicNotation
          musicKey="Em"
          meter="5/4"
          noteDuration="1/16"
          notes="e3e B2e2 - e2e2-e2B2 E4|e3e B2e2 - e2B2c2^c2 d2^d2"
        />
        It definitely resembles rhythm 1 the most, but puts extra emphasis on
        the fifth beat specifically. In my opinion, it now sounds like 4 beats
        per bar, with one extra beat thrown on the end, making it kind
        uncomfortable.
        <br />
        <br />
        In terms of orchestration, this was (I think) the first time I wrote
        running 16ths in the harmony, which worked well enough that I did the
        same thing in FL3-33’s main theme. Also note that the drums here follow
        a standard 4-beat pattern, but with an extra beat. This kinda reinforces
        the 4+1 I’ve established here.
      </DynamicMusicSection>
      <DynamicMusicSection title="Transition and Modulation" time={"01:12.7"}>
        After this, we are introduced to a new idea, which is primarily using
        the second rhythm:
        <MusicNotation
          musicKey="Em"
          meter="5/4"
          noteDuration="1/16"
          notes="eBGE z2 eB GE z2 eBGE [^de]4|eBGE z2 eB GE z2 EG_B^c [=de]4"
        />
        I think of this as also a 4+1 rhythm, mostly because of the intro to
        Persona 5’s “Last Surprise,” which is similar, but in 4, and doesn’t
        include the last beat. If you think of this as 4+1, then the main theme
        did a good job of transitioning between rhythm 1 and rhythm 2 by placing
        emphasis on the last beat.
        <br />
        <br />I also love the second time this idea is played because of the
        electric piano in the back, which plays a competing arpeggio line like
        this one, but starts on where the main lead has rests. Then, the lead
        cuts off the piano, every single time. I think that this idea, of not
        allowing one of the lines to ever finish what they’re saying, creates
        more of that discomfort, on top of the already clearly dissonant E and
        D# in the lead.
        <br />
        <br />
        The next section is a piano line, marked by this odd rhythm. I say it’s
        odd because it only ever appears in this line:
        <MusicNotation
          musicKey="Em"
          meter="5/4"
          noteDuration="1/8"
          notes="[B,EG]3 [DG_B]-[DG_B]6|[B,EG]3 [_EFA]-[EFA]6|[B,EG]3 [DG_B]-[DG_B]6|[DG_B]3 [DFA]-[DFA]6|"
        />
        You could argue that this isn’t 4+1 anymore, but I’d argue that the bass
        line shows that it is:
        <MusicNotation
          musicKey="Em"
          meter="5/4"
          noteDuration="1/8"
          notes="EEEL[eE] EEEL[eE] EL[eE]|_EEEL[_eE] EEEL[eE] EL[eE]|"
        />
        Since this bass line is accented, it makes a clear 2+2+1 rhythm,
        basically still a 4+1 rhythm. Otherwise, this 8-bar section is also a
        first for me in that it’s the first “subtle” key change I’ve written,
        changing towards B minor in the last two bars.
      </DynamicMusicSection>
      <DynamicMusicSection title="Murmurs again" time={"01:49.08"}>
        The next bit is a restatement of the first theme, with different
        instruments, some trills, and in B. It’s not that noteworthy, and I
        don’t have much to say about it. The last two bars actually go from in
        F# to F♮, which kind of crashes down into B again. This change is mostly
        led by the bassline, which I think is the first time I realized the
        value of a bass. Since I’m a violinist, I used to not really care about
        bass, but writing in this line was very helpful in seeing the value of
        bass.
        <br />
        <br />
        The next four bars are a straight bass line, played mostly on offbeats.
        There are downbeat emphases, but they’re more of a chordal underpinning;
        the melody is on the offbeats. Honestly though, this is really a
        transition. The melody isn’t very interesting.
      </DynamicMusicSection>
      <DynamicMusicSection title="Haunting Chorale" time={"02:34.47"}>
        The next section, shockingly, is a choral section over the same
        bassline. This is the first time the 2+3 rhythm is played, with a nearly
        haunting choral line. The quiet drum may suggest that this is a 4+1
        rhythm, but it’s quite quiet, so I think of it as 2+3 still. I really,
        really like this section for the atmosphere it creates. I got inspired
        from a similar section in FL3-27. Like I said, it’s almost haunting:
        <MusicNotation
          musicKey="Em"
          meter="5/4"
          noteDuration="1/4"
          notes="[FBd]2[Bdf]3|[bge]2[_bf_e]3|[Beg]2[Acf]3|[cfa]2[^ce_a]3|"
        />
        Especially the last chord I wrote there. I can’t really say why it’s
        haunting – maybe it’s all the chromatic steps? Not sure. But I really
        like it.
        <br />
        <br />
        After this choral line descends downwards, there’s an interesting rhythm
        introduced:
        <MusicNotation
          musicKey="Em"
          meter="5/4"
          noteDuration="1/4"
          notes="B2B2B-|BB2B2|"
        />
        I say it’s interesting because it spans over two bars, which in a way,
        makes it harder to tell that it’s in 5. This is subtlely used later too.
      </DynamicMusicSection>
      <DynamicMusicSection title="Crashing Back" time={"03:01.8"}>
        After building out of the choral section, we are again introduced to
        rhythm 1. This time, it builds off a E diminished 7th chord over 8 bars,
        gradually making the rhythm more complex, but still remaining distinctly
        rhythm 1, until it breaks in the last bar, spilling downwards:
        <MusicNotation
          musicKey="Em"
          meter="5/4"
          noteDuration="1/16"
          notes="z2^cc d3 c3 _B3 G3 GF=FE|"
        />
        This is about the only time I’ve used this
        <MusicNotation noteDuration="1/16" notes="B3 B3 B3 B3" /> rhythm, and it
        worked very well, but I don’t really think I’ve found another
        appropriate place to use it again.
        <br />
        <br />
        It crashes down into another section using rhythm 2, or at least the
        16th note rhythm that resembles it:
        <MusicNotation
          musicKey="Em"
          meter="5/4"
          noteDuration="1/16"
          notes="EGFB z2 EG FB z2 EBAF [_BB]4|=BGFE z2 BG FE z2 BGFE [E_D]4|"
        />
        Since previously, rhythms 1&2 were separated by the main theme acting as
        transition between the two, having the two of them right next to each
        other is a bit surprising. This phrase builds and strangely resolves on
        the offbeat of beat 4 of the last bar of the phrase. It feels pretty
        odd, but we are immediately reoriented by a big bass drum hit on the
        downbeat of the next phrase.
      </DynamicMusicSection>
      <DynamicMusicSection title="Rhythmic Ominousness" time={"03:38.17"}>
        The next few bars are transition, but it reintroduces two things that
        were mostly glossed over before:
        <MusicNotation noteDuration="1/16" notes="B3B B2B2" /> and{" "}
        <MusicNotation meter="5/4" noteDuration="1/4" notes="B2B2B-|BB2B2" />
        It combines these into something like this:
        <MusicNotation
          musicKey="Em"
          meter="5/4"
          noteDuration="1/16"
          notes="B3B B2B2 z4 z4 B3B|B2B2 z4 z4 B3B B2B2"
        />
        This feels really odd to me because when you repeat, there is no rest
        between the two dotted motifs. Though the next phrase isn’t the main
        theme, because the dotted motif only appears in the main theme, we know
        that it’s going to come soon. The ominous energy also returns here,
        kinda like the beginning, which also points to the main theme.
        <br />
        <br />
        The next phrase is a completely new idea, combining rhythm 4 and 1
        together:
        <MusicNotation
          musicKey="Em"
          meter="5/4"
          noteDuration="1/8"
          notes="E3 E-E2zE FG|G2 z G- G F- F z G2|G3 G-G2 z G AG"
        />
        This section is probably a bit questionable, since the melody is broken
        between two instruments, and it’s a bit disconnected, but it’s okay.
        There isn’t really anything to say about it, though.
        <br />
        <br />
        The next 8 bars are definitely building and transition. It stacks the
        two instruments on top of each other, with new harmony rhythms, creating
        a lot of odd conflicting rhythms and creating more tension:
        <MusicNotation
          musicKey="Em"
          meter="5/4"
          noteDuration="1/8"
          notes="[V:1]E3E-E2(3E2F2G2|G3G-G2(3G2A2G2|[V:2]E2zE- E F- F z F2|G2 z G- G F- F z G2|[V:3]FE zF Ezz2GF|GF zG Fzz2AG"
        />
        Definitely one of the more complex things I’ve written. Two fun things
        to note:
        <ol>
          <li>
            The top line has an overall rhythm of 3+2, but in the 3, 2 notes are
            played, and in the 2, 3 notes are played
          </li>
          <li>
            The bottom line is taken from Barber’s “Medea’s Dance of Vengeance,”
            which I was playing in orchestra at the time. It matches the top
            line, then switches to the middle line every bar. Err – that’s
            weird. But point is, it kinda fits well here.
          </li>
        </ol>
        The second half of this 8-bar phrase is a chromatic build up to E using
        2+2+1 rhythm. The shogun synth plays triplets, the lead slim synth plays
        the dotted motif rhythm over and over (which really drives into the main
        theme), and the 16th note harmonies from the main theme fade in, which
        also points towards the main theme. Overall, I think this entire 8-bar
        phrase is an incredible “building up” transition. It’s very tense and
        leads back into the main theme very well.
      </DynamicMusicSection>
      <DynamicMusicSection
        title="Chorus, Transition, and Coda"
        time={"04:23.6"}
      >
        The rest of the piece isn’t really that interesting anymore. The main
        theme plays, then the corresponding 16th note rhythm 2 line plays. Then,
        oddly enough, instead of the piano line, we next get the main theme
        again, with the choral line on top of it, kind of combining rhythm 1
        (main theme) and rhythm 3 (choral line). This descends chromatically to
        F#, then the piano line comes in, this time in F#. It’s exactly the same
        except for the last two bars, where it stays in this key instead of
        shifting up a 5th.
        <br />
        <br />
        We then return to the first theme, with the dotted motif in the bassline
        – kind of like the evil has escaped and is hiding everywhere now. The
        theme plays, but ends on a strange F♮ while it’s in F#, leaving the
        listener hanging. The evil is hiding somewhere, but we don’t know where.
        <br />
        <br />
        Anyway, I love the ending for two reasons: it doesn’t resolve, and it
        isn’t even in the original key of E. It really leaves you with a feeling
        of discomfort and incompleteness, which is exactly wat I was going for.
        <br />
        <br />
        You can probably tell I think very highly of this piece. That’s because
        I think it’s my first truly successful and complete piece. I wanted to
        make it weird because it’s in 5, but that made me experiment with a lot
        of other new ideas and stuff, which all really worked out. I wouldn’t
        necessarily say this is better than FL3-33, but FL3-33 definitely would
        not have happened without this one. The harmonies, willingness to change
        keys, and brilliant building transition from this piece all led into
        FL3-33.
      </DynamicMusicSection>
      Alright. Here’s the structure. Not each bullet point is the same length.
      <ul>
        <li>Intro (theme 1)</li>
        <li>blatant dissonance intro</li>
        <li>intro in B</li>
        <li>Main theme</li>
        <li>16th notes</li>
        <li>piano</li>
        <li>theme 1 in B</li>
        <li>theme 1 in F#</li>
        <li>bass transition</li>
        <li>choral</li>
        <li>choral transition</li>
        <li>theme 1 dim7</li>
        <li>16th notes var</li>
        <li>
          bass transition <MusicNotation noteDuration="1/16" notes="B3B B2B2" />
        </li>
        <li>rhythm 4, rhythm 1</li>
        <li>build transition</li>
        <li>Main theme</li>
        <li>16th notes</li>
        <li>Main theme + choral</li>
        <li>piano in F#</li>
        <li>theme 1 in F#</li>
      </ul>
    </DynamicMusicProvider>
  );
}

export default FL3_35;
