import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DynamicMusicPlayer,
  DynamicMusicSection,
} from "../../components/DynamicMusicPlayer";
import styles from "../../components/DynamicMusicPlayer.module.css";

import img from "../../assets/fl3-35.png";

export const DISPLAY_NAME = "FL3-35: Broken Seal";
export const DISPLAY_IMAGE = img;
export const CREATION_DATE = new Date("2020-05-07");

function FL3_35() {
  // in "MM:SS.ffffff" format
  const [seekToTime, setSeekToTime] = useState(null);
  const [doSeek, setDoSeek] = useState(false);

  const maybeSeek = (targetTime) => {
    if (doSeek) setSeekToTime(targetTime);
  };

  return (
    <div>
      <div className={styles.observerIndicatorLine} />
      <DynamicMusicPlayer
        src="/music/FL3-35.mp3"
        setDoSeek={setDoSeek}
        seekToTime={seekToTime}
      />
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
        <br /> <br />
        TODO TODO
      </p>
      <DynamicMusicSection
        sectionTitle="Opening Murmurs"
        targetTime={"00:00"}
        currentTargetTime={seekToTime}
        onTriggerSeek={maybeSeek}
      >
        The piece starts, quietly, ominously, with rhythm 1. It’s one E,
        repeated:
        <br />
        <br />
        TODO TODO
        <br />
        <br /> After a bit, a new melody, with the same rhythm, plays on top of
        it:
        <br />
        <br />
        TODO TODO
        <br />
        <br />
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
      <DynamicMusicSection
        sectionTitle="Main Chorus"
        targetTime={"00:54.4"}
        currentTargetTime={seekToTime}
        onTriggerSeek={maybeSeek}
      >
        The next bit, the main theme, is a bit interesting. First, because it
        doesn’t really fall perfectly into any of the rhythms I mentioned
        before, and second, because it introduces the rhythmic motif I mentioned
        earlier:
        <br />
        <br />
        TODO TODO
        <br />
        <br />
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
      <DynamicMusicSection
        sectionTitle="Transition and Modulation"
        targetTime={"01:12.7"}
        currentTargetTime={seekToTime}
        onTriggerSeek={maybeSeek}
      >
        After this, we are introduced to a new idea, which is primarily using
        the second rhythm:
        <br />
        <br />
        TODO TODO
        <br />
        <br />I think of this as also a 4+1 rhythm, mostly because of the intro
        to Persona 5’s “Last Surprise,” which is similar, but in 4, and doesn’t
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
        <br />
        <br />
        TODO TODO
        <br />
        <br />
        You could argue that this isn’t 4+1 anymore, but I’d argue that the bass
        line shows that it is:
        <br />
        <br />
        TODO TODO
        <br />
        <br />
        Since this bass line is accented, it makes a clear 2+2+1 rhythm,
        basically still a 4+1 rhythm. Otherwise, this 8-bar section is also a
        first for me in that it’s the first “subtle” key change I’ve written,
        changing towards B minor in the last two bars.
      </DynamicMusicSection>
      <DynamicMusicSection
        sectionTitle="Murmurs again"
        targetTime={"01:49.08"}
        currentTargetTime={seekToTime}
        onTriggerSeek={maybeSeek}
      >
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
      <DynamicMusicSection
        sectionTitle="Haunting Chorale"
        targetTime={"02:34.47"}
        currentTargetTime={seekToTime}
        onTriggerSeek={maybeSeek}
      >
        The next section, shockingly, is a choral section over the same
        bassline. This is the first time the 2+3 rhythm is played, with a nearly
        haunting choral line. The quiet drum may suggest that this is a 4+1
        rhythm, but it’s quite quiet, so I think of it as 2+3 still. I really,
        really like this section for the atmosphere it creates. I got inspired
        from a similar section in FL3-27. Like I said, it’s almost haunting:
        <br />
        <br />
        TODO TODO
        <br />
        <br />
        Especially the last chord I wrote there. I can’t really say why it’s
        haunting – maybe it’s all the chromatic steps? Not sure. But I really
        like it.
        <br />
        <br />
        After this choral line descends downwards, there’s an interesting rhythm
        introduced:
        <br />
        <br />
        TODO TODO
        <br />
        <br />I say it’s interesting because it spans over two bars, which in a
        way, makes it harder to tell that it’s in 5. This is subtlely used later
        too.
      </DynamicMusicSection>
      <DynamicMusicSection
        sectionTitle="Crashing Back"
        targetTime={"03:01.8"}
        currentTargetTime={seekToTime}
        onTriggerSeek={maybeSeek}
      >
        After building out of the choral section, we are again introduced to
        rhythm 1. This time, it builds off a E diminished 7th chord over 8 bars,
        gradually making the rhythm more complex, but still remaining distinctly
        rhythm 1, until it breaks in the last bar, spilling downwards:
        <br />
        <br />
        TODO TODO
        <br />
        <br />
        This is about the only time I’ve used this <b>TODO TODO</b> rhythm, and
        it worked very well, but I don’t really think I’ve found another
        appropriate place to use it again.
        <br />
        <br />
        It crashes down into another section using rhythm 2, or at least the
        16th note rhythm that resembles it:
        <br />
        <br />
        TODO TODO
        <br />
        <br />
        Since previously, rhythms 1&2 were separated by the main theme acting as
        transition between the two, having the two of them right next to each
        other is a bit surprising. This phrase builds and strangely resolves on
        the offbeat of beat 4 of the last bar of the phrase. It feels pretty
        odd, but we are immediately reoriented by a big bass drum hit on the
        downbeat of the next phrase.
      </DynamicMusicSection>
      <DynamicMusicSection
        sectionTitle="Rhythmic Ominousness"
        targetTime={"03:38.17"}
        currentTargetTime={seekToTime}
        onTriggerSeek={maybeSeek}
      >
        The next few bars are transition, but it reintroduces two things that
        were mostly glossed over before:
        <br />
        <br />
        TODO TODO
        <br />
        <br />
        It combines these into something like this:
        <br />
        <br />
        TODO TODO
        <br />
        <br />
        This feels really odd to me because when you repeat, there is no rest
        between the two <b>TODO TODO</b>. Though the next phrase isn’t the main
        theme, because the <b>TODO TODO</b>only appears in the main theme, we
        know that it’s going to come soon. The ominous energy also returns here,
        kinda like the beginning, which also points to the main theme.
        <br />
        <br />
        The next phrase is a completely new idea, combining rhythm 4 and 1
        together:
        <br />
        <br />
        TODO TODO
        <br />
        <br />
        The next 8 bars are definitely building and transition. It stacks the
        two instruments on top of each other, with new harmony rhythms, creating
        a lot of odd conflicting rhythms and creating more tension:
        <br />
        <br />
        TODO TODO
        <br />
        <br />
        Definitely one of the more complex things I’ve written. Two fun things
        to note:
        <ol>
          <li>
            Definitely one of the more complex things I’ve written. Two fun
            things to note:
          </li>
          <li>
            The harmless energy key line is taken from Barber’s “Medea’s Dance
            of Vengeance,” which I was playing in orchestra at the time. It
            matches the shogun line, then switches to the lead slim line every
            bar. Err – that’s weird. But point is, it kinda fits well here.
          </li>
        </ol>
        The second half of this 8-bar phrase is a chromatic build up to E using
        2+2+1 rhythm. The shogun synth plays triplets, the lead slim synth plays
        the <b>TODO TODO</b> rhythm over and over (which really drives into the
        main theme), and the 16th note harmonies from the main theme fade in,
        which also points towards the main theme. Overall, I think this entire
        8-bar phrase is an incredible “building up” transition. It’s very tense
        and leads back into the main theme very well.
      </DynamicMusicSection>
      <DynamicMusicSection
        sectionTitle="Chorus, Transition, and Coda"
        targetTime={"04:23.6"}
        currentTargetTime={seekToTime}
        onTriggerSeek={maybeSeek}
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
        We then return to the first theme, with the <b>TODO TODO</b>in the
        bassline – kind of like the evil has escaped and is hiding everywhere
        now. The theme plays, but ends on a strange F♮ while it’s in F#, leaving
        the listener hanging. The evil is hiding somewhere, but we don’t know
        where.
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
      Alright. Here’s the structure. Not each box is the same length.
      <br />
      <br />
      TODO TODO
      <br />
      <br />
    </div>
  );
}

export default FL3_35;
