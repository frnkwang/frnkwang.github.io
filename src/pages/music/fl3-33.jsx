import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DynamicMusicPlayer,
  DynamicMusicProvider,
  DynamicMusicSection,
} from "../../components/DynamicMusicPlayer";

import img from "../../assets/fl3-33.png";
import MusicNotation from "../../components/MusicNotation";

export const DISPLAY_NAME = "FL3-33: Chasing the Sun";
export const DISPLAY_IMAGE = img;
export const CREATION_DATE = new Date("2026/9/3");

function FL3_33() {
  return (
    <DynamicMusicProvider color="#35bfe9">
      <DynamicMusicPlayer
        title="FL3-33: Chasing the Sun"
        src="/music/FL3-33 - Chasing the Sun.mp3"
      />
      <h2>FL3-33: Chasing the Sun</h2>
      <p>
        Composed/produced by me in FL Studio Mobile 3; Finished January 10, 2021
      </p>
      <i>
        Most of these notes are taken from a <Link to="/journal">journal</Link>{" "}
        entry I wrote immediately after finishing the piece. It sounded pretty
        cringe to me in retrospect, so I added a bunch of extra details to it.
      </i>
      <h3>Overview</h3>
      <p>In my mind, FL3-33 revolves around four main ideas/themes:</p>
      <ol>
        <li>
          <MusicNotation
            musicKey="D"
            meter="4/4"
            noteDuration="1/8"
            notes="D3 A-A4 |D3 B-B4 |D3 A-A4 |A2 G2 F4|D3 A-A4 |D3 G-G4 |D3 A-A4 |A2 G2 B2 c2"
          />
        </li>
        <li>
          <MusicNotation
            musicKey="D"
            meter="4/4"
            noteDuration="1/8"
            notes="BDGB BDGB|ADFGA4|GCEG GCEG|F2G2^G2A2|BDGB BDGB|AFfAF4|GCEG GCEG|F2E2A4"
          />
        </li>
        <li>
          <MusicNotation
            musicKey="G"
            meter="4/4"
            noteDuration="1/16"
            notes="G6A2B8|A4G2F2-F8|E6F2-F4G4|A4E2F2-F8|G6A2B8|f4A2F2-F8|E6A2-A4G4|F4 (F2GA) B8"
          />
        </li>
        <li>
          <MusicNotation
            musicKey="C"
            meter="4/4"
            noteDuration="1/16"
            notes="E4E4E4E4|(EFEC) z2 E2-E2 D2 B,4|D4D4D4D4|(DEDB,) z2 C2 - C2(D2E2C2)"
          />
        </li>
      </ol>
      <p>
        These ideas are all fairly recognizable standalone. Theme 1 shows up in
        regular spots; theme 2 shows up in a mixture of spots as transition
        material; theme 3 is the main theme in my eyes; and theme 4 is an
        interesting contrasting idea. I'll re-introduce them as you listen to
        the piece here.
      </p>
      <DynamicMusicSection title="Opening - Theme 1" time={"00:00"}>
        <p>So I start with the first theme:</p>
        <MusicNotation
          musicKey="D"
          meter="4/4"
          noteDuration="1/8"
          notes="D3 A-A4 |D3 B-B4 |D3 A-A4 |A2 G2 F4|D3 A-A4 |D3 G-G4 |D3 A-A4 |A2 G2 B2 c2"
        />
        <p>
          I think the guitar and strings create a simple warmth. The harmony
          here (I barely understood harmony at the time of writing this piece)
          is stupid simple - just dancing around the tonic, and one dominant
          every 4 bars to lean forwards a bit. The pulsing eighth notes in the
          back keep the boring harmony from feeling too static.
          <br />
          <br />
          This first theme repeats twice more, each with some more ornamentation
          and color. The second time has some more downbeats and a soft
          countermelody with the same rhythm, while the third time has a much
          more rhythmically dynamic melody. Combined with the brighter synths,
          it makes the piece build a bit, even if it's all just the same idea.
        </p>
      </DynamicMusicSection>
      <DynamicMusicSection title="Theme 2 and Build" time={"00:40.8"}>
        <p>
          This rolls straight into the second theme after a corny-simple
          cadence:
        </p>
        <MusicNotation
          musicKey="D"
          meter="4/4"
          noteDuration="1/8"
          notes="BDGB BDGB|ADFGA4|GCEG GCEG|F2G2^G2A2|BDGB BDGB|AFfAF4|GCEG GCEG|F2E2A4"
        />
        Compared to theme 1, this is a bit bouncier, obviously due to the eighth
        notes. But I like the contrast it creates. One fun note is that I
        remember being particularly proud of using a chromatic note here. In
        retrospect, it's just a passing tone that's not really that noteworthy.
        But at the time, I was always stuck in one key, so any non-diatonic note
        meant a lot to me.
        <br />
        <br />
        The next 8 bars looks like this:
        <MusicNotation
          musicKey="D"
          meter="4/4"
          noteDuration="1/8"
          notes="B zz B B zz B|A2F2A2z2|G zz G G zz G|F2G2A2z2|B zz B z2 BA|A2fAF4|E zz A F zz A|G2F2G2 z2"
        />
        The density of layers is pulled back heavily, and the only other things
        are a very straight bass line and simple drum groove, as well as
        arpeggiated chords with a faint choir underneath. Because of how
        different the context is, you might not notice that this is actually
        just theme 2 with a bunch of notes omitted. Take a look and compare the
        two lines - you'll see what I mean. In fact, I didn't even realize this
        when I first wrote it.
        <br />
        <br />
        Anyway, throughout this whole 8-bar-phrase, there's a gentle crescendo.
        The arpeggios and choir get a bit louder, and the bass also starts
        doubling notes. This helps lean into the key change to G (which I wasn't
        aware of at the time until suddenly I realized, when writing the next
        section, C# sounded wrong). This was one of the first times I was able
        to change keys in a piece (other than the parallel major/minor), so I
        was quite happy that I did it, even if it's just a neighboring key like
        D to G. There's also a cute little triangle hit, right before we go into
        -
      </DynamicMusicSection>
      <DynamicMusicSection title='"Brilliant Explosion"' time={"01:08.57"}>
        <p>
          I made up this name for these 8 bars in my first analysis, and looking
          back now, it's a bit cringe. It's certainly a big surprise of color,
          but I think "brilliant" gives it too much credit. Regardless, this is
          what we have:
        </p>
        <MusicNotation
          musicKey="G"
          meter="4/4"
          noteDuration="1/8"
          notes="G3D-D2d2|c2Bc-c4|A2GA-A2d2|BAGA-A4|G3D-D2G2|d2cB-B4|FGAB - BG-GB|AGFG-G4"
        />
        The sudden change to orchestral color somehow doesn't sound wrong at all
        to me here. I've always been careful about transitions not sounding too
        sudden or out-of-place, but somehow this section sounds fine despite how
        suddenly out-of-place it is. I think it might have to do with the
        near-silence beforehand, right after a cadence - it signals that
        something may be about to change. Combine this with the running 16ths
        underneath and the new rhythmic ideas, and this is where the brilliance
        comes from.
        <br />
        <br />
        Also, the transcription above doesn't sell it, but I'm a huge fan of the
        call-and-response happening here between the strings/low brass and high
        winds/brass. The low brass gives a sense of groundedness, while the high
        winds/brass feels like flying above. I feel like call-and-response is a
        bit of a cliche way to add interest to an otherwise static melody, but
        hey, it's a cliche for a reason: it works.
      </DynamicMusicSection>
      <DynamicMusicSection title="Theme 3 (Main Theme)" time={"01:22.3"}>
        <MusicNotation
          musicKey="G"
          meter="4/4"
          noteDuration="1/16"
          notes="G6A2B8|A4G2F2-F8|E6F2-F4G4|A4E2F2-F8|G6A2B8|f4A2F2-F8|E6A2-A4G4|F4 (F2GA) B8"
        />
        Here we go! Carrying the running sixteenths and the rhythm in the hats
        that emphasizes the and-of-one (inspired by the same rhythm in Gusty
        Garden Galaxy's snare drum), this main theme gives me a sort of soaring
        vibe. At the time, this was, by far, one of my most intricately
        orchestrated sections. There's a number of layers all going on: the
        melody (doubled by violins), the brass emphasizing the rhythm,
        syncopated flutes above, running sixteenths. Looking back, perhaps it's
        a bit too much - one piece of feedback I got on this section was "I
        don't know what I'm supposed to be listening to."
        <br />
        <br />
        Anyway, this theme repeats twice, with the violins (in thirds, perhaps
        my way to write violin parts) taking over the melody the second time.
        The flute also plays out a bit more here - listen for that. Overall, I'm
        still quite proud of this section, even years later. Things seem to fit
        together right, and I hope it's what the listener remembers.
        <br />
        <br />
        An interesting tidbit about this melody was that it used to be way more
        boring! As suggested by the hi-hat rhythms, the emphasis in every one of
        these measures is the and-of-one. That's because the melody originally
        just looked like this:
        <MusicNotation
          musicKey="G"
          meter="4/4"
          noteDuration="1/8"
          notes="G2AB-B4|A2GF-F4|E2FG-G4|A2EF-F4|G2AB-B4|f2AF-F4|E2AG-G4|A2GA-A4"
        />
        As you can see, the same exact rhythm every single bar, and it got
        really boring. The final version still emphasizes the and-of-one every
        single bar, but has different rhythms that emphasize it, which makes it
        much more natural (ie, non-robotic) sounding.
      </DynamicMusicSection>
      <DynamicMusicSection title="Cooling Down" time={"01:49.78"}>
        <p>
          Following the main theme is 3 8-bar phrases that gradually slow down
          the energy. First up is this idea which is still pretty high-energy
          with its faster subdivisions and dynamic countermelody:
        </p>
        <MusicNotation
          musicKey="G"
          meter="4/4"
          noteDuration="1/16"
          notes="[V:1]g6b2-b4a2g2|a6(ef)a8|g6e2g4e2g2|f4(fg^g2)a8|b6b2-b4b4|d'3g g2f2a8|g4g2a2-a4f4|g4(a_agf)a4|
          [V:2]G6G2D4G4|F6F2D8|E2F2G2G2E4G4|F2E2F2G2A8|G6G2D4G4|F6A2D8|E2F2A2A2F4A4|G2F2E2F2A8
          [V:3 clef=bass][B,G,]12[_B,G,]4|[A,F,]12[^G,=F,]4|[G,E,]12[E,^G,]4|[A,F,]12([E,G,]2[F,A,]2)|[B,G,]12[_B,G,]4|[A,F,]12[^G,=F,]4|[G,E,]12[A,F,]4|[G,E,]16"
        />
        <p>
          Added inbetween these three independent layers are also drums and
          syncopated eight notes, which also add to the higher energy of this
          section. It's definitely a bit more controlled than the ongoing 16ths
          in the main theme though, so it doesn't have quite the same soaring
          feeling. Perhaps my favorite thing here is the low brass line with the
          sliding chromatic bass line. It gives it a bit more playful whimsy
          than if it was just holding chords the whole time - there's some fun
          movement from chord to chord here.
          <br />
          <br />
          The second 8-bar phrase of the cool down is:
        </p>
        <MusicNotation
          musicKey="D"
          meter="4/4"
          noteDuration="1/16"
          notes="B2|G2B2 z2 G2B4B4|C2E2 z2 E2A8|F2A2 z2 A2F4D4|B,3CD2E2F8|E2G2 z2 G2A4E4|A2F2 z2 A2E8|A2A2 z2 {CDE}F2A4F4|E2G2F4B,8"
        />
        <p>
          The energy is lowered here by making the melody's rhythm less
          subdivided and much more repetitive - that is, predictable. It's not
          flying around everywhere anymore. The melody also has way fewer
          non-chord tones, which adds to the predictability. The harmony is also
          simplified from sliding chromatically to just held chords, while the
          arpeggiated 16ths in the background fade away, and the drums slowly
          start beating larger subdivisions too. To be honest though, I never
          thought of these things when I was writing this melody - it came to me
          naturally. Perhaps that's an influence of being a violinist and
          playing melodies so frequently.
          <br />
          <br />
          The last 8-bar phrase of the cool down may sound familiar:
        </p>
        <MusicNotation
          musicKey="D"
          meter="4/4"
          noteDuration="1/8"
          notes="BDGB - BDBG|_BDGB-B4|A2EA - A2E2|^GFEG - GFEF|=G2F2G2E2|A2^G2A2F2|A3A-A4-|A8"
        />
        <p>
          It's not fully captured by the transcription, but when layered with
          the other lines, it's quite clearly theme 2, the arpeggios in this
          rhythm! This time, to end the cool down, it follows a chromatic
          progression downwards, even hitting a janky G# in D. I wasn't trying
          to follow any progressions at the time - I barely even knew what
          chords were - but I was just following the voice-leading downwards as
          slowly as I could. I was pretty happy with how not-too-out-of-place
          the G# sounded in the key of D. Eventually, we find our way back to a
          strong dominant A chord, which then takes us back into the first
          theme.
        </p>
      </DynamicMusicSection>
      <DynamicMusicSection title="First Theme, Again" time={"02:30.65"}>
        <p>
          Here we are, back where we started. Much like the opening, the first
          theme is stated 3 times, each with increasing ornamentation. This
          time, the ornamentation and syncopated rhythms go even further than
          the opening. For example, here's the original first theme:
        </p>
        <MusicNotation
          musicKey="D"
          meter="4/4"
          noteDuration="1/8"
          notes="D3 A-A4 |D3 B-B4 |D3 A-A4 |A2 G2 F4|D3 A-A4 |D3 G-G4 |D3 A-A4 |A2 G2 B2 c2"
        />
        <p>And here's the third statement this time around:</p>
        <MusicNotation
          musicKey="D"
          meter="4/4"
          noteDuration="1/16"
          notes="d4f2a2 a2f2a2f2|z4 z2 g2 b4g4|d4[aA]2[fB]2 [ac]4[fd]2[aB]2|[aD]4[gE]4[fF]4{g}[eG]4|[dA]4f2a2a4f4|c4g4e2a2 - a2f2|g3f e2a2 - a2(g2 f2e2)|e4c4d4z4"
        />
        <p>
          It's nearly unrecognizable just from looking at it. You really have to
          hear it repeated and complexified every step to fully realize it's the
          same thing. I particularly liked the countermelody I added on this
          third restatement - I notated the important part above, but it's
          actually quietly going underneath the whole time.
          <br />
          <br />
          Importantly though, I think hearing the first theme again establishes
          a sort of structure in my mind, which I've laid out in the preceding
          sections. Theme 1, theme 2, build, explosion, theme 3, cool down. When
          we hear theme 1 again, we sort of expect this structure to repeat
          again...
        </p>
      </DynamicMusicSection>
      <DynamicMusicSection title="Theme 2 and Build, Again?" time={"03:11.8"}>
        <p>
          Well, this is definitely the ideas from theme 2, but it's not exactly
          the same:
        </p>
        <MusicNotation
          musicKey="D"
          meter="4/4"
          noteDuration="1/16"
          notes="B2D2G2B2 - B2D2B2G2|_B2D2G2B2-B8|A2C2E2G2 - G2E2G2E2|A3FA2G2F8|F2E2F2A2 - A2F2G2A2|A4F4A8|A2F2D2A2 - A2A2F2D2|F4D4B8"
        />
        <p>
          The harmony here is definitely a bit more mellow than the first time
          around, and that carries into the reduced-theme-2 build section too:
        </p>
        <MusicNotation
          musicKey="D"
          meter="4/4"
          noteDuration="1/8"
          notes="B zz B B zz B|A2F2A2z2|G2G2 GG z G|F2G2^G2A2|B2B2B2z2|B2zf - fAF2|G2z2G2z2|F2 zA-A4"
        />
        <p>
          This time, instead of building up, things seem to be... relaxing more.
          The subdivisions get longer instead of shorter, the orchestration gets
          lighter. And there are these horn calls every other bar, seeming to
          pull us away. It's not like the previous post-theme-2 build we heard.
          Eventually, the horn calls morph into flutes that slide us up into C
          major, and introduces the next theme:
        </p>
      </DynamicMusicSection>
      <DynamicMusicSection title="Theme 4" time={"03:39.52"}>
        <p>Surprise! We were un-building-up to theme 4 the whole time.</p>
        <MusicNotation
          musicKey="C"
          meter="4/4"
          noteDuration="1/8"
          notes="[ce]8|[Be]2ze - e(dB2)|[Bd]8|[cd]2zc - c(dec)|[ce]8|[de]2zg - ga2|((3a2g2f2) ([ce]2[Ac]2)|[ce]2 z [Bd] - [Bd]2(cd)"
        />
        <p>
          This section is much calmer, much more sustained, much more subdued.
          It's a nice contrast from the rest of the piece, which is quite
          punctuated and bouncy. This melody repeats a second time, with some
          extra pulsing layered underneath to form the core of theme 4, though
          it's really the same idea:
        </p>
        <MusicNotation
          musicKey="C"
          meter="4/4"
          noteDuration="1/16"
          notes="e4e4e4e4|(efec) z2 e2-e2 d2 B4|d4d4d4d4|(dedB) z2 c2 - c2(d2e2c2)"
        />
      </DynamicMusicSection>
      <DynamicMusicSection
        title="Theme 2 and Build, Again, Actually"
        time={"04:06.6"}
      >
        <p>
          And we're back to theme 2. Except this time, it's in A minor, so it's
          a bit more melancholy:
        </p>
        <MusicNotation
          musicKey="C"
          meter="4/4"
          noteDuration="1/8"
          notes="eAce ecA2|dGBcd4|cEGc cGE2|BDGA B4"
        />
        <p>
          But we don't stay there in A minor for long, and we climb out into a
          slightly brighter place:
        </p>
        <MusicNotation
          musicKey="C"
          meter="4/4"
          noteDuration="1/8"
          notes="eAce fdB2|gcefg4|afcf fca2|geceg4"
        />
        <p>
          Looking back on this now, it's kind of cool how I stumbled across such
          a clear harmony in my melody when I didn't really know much about
          harmony at the time. You can literally see the chords spelled out in
          each measure/half-measure here - it's so obvious. And the "climbing
          out of melancholy" that I thought worked so mysteriously well at the
          time was just an imperfect cadence into C in the 6th and 7th bars,
          followed by another quick IV-V-I into the next section, which is again
          the simplified-theme-2-busildup:
        </p>
        <MusicNotation
          musicKey="C"
          meter="4/4"
          noteDuration="1/8"
          notes="A zz A A zz A|G2E2G2z2|F zz F F zz F|E2F2G2z2|A zz A A zz A|G2c2G2E2|D zz G E zz G|E2D2C2z2"
        />
        <p>
          This is much more similar in orchestration to the original buildup,
          which led into the first "brilliant explosion". The only real
          difference is that it doesn't modulate down a 5th. As such, we're
          primed to hear...
        </p>
      </DynamicMusicSection>
      <DynamicMusicSection title="Another Explosion" time={"04:34.2"}>
        <p>
          Another explosion! Well, kind of. This time, it's a little more
          subdued. Not less confident, but perhaps a bit less triumphant.
        </p>
        <MusicNotation
          musicKey="C"
          meter="4/4"
          noteDuration="1/8"
          notes="C3 E-E2 G2|F2 ED-D4|G3d-d2(de)|(fec)d-d4|C zz E zz G z|{B}c2GA-A4|G2EF - FD-DE|D2B,C-C4|"
        />
        <p>
          The main way that I associate this with the original "brilliant
          explosion" is its orchestration - the orchestral synths, the
          call-and-response, the running 16ths. The rhythm is certainly similar,
          but not identifiably so, and the melodic shape isn't there at all. I
          think this goes to show the importance of orchestration - you can link
          otherwise unrelated things together. It's just as important as melody
          and harmony are.
        </p>
      </DynamicMusicSection>
      <DynamicMusicSection title="Theme 4, as Theme 3" time={"04:48.0"}>
        <p>
          What did we get after the previous brilliant explosion? A soaring,
          free theme 3. That's what we might expect now, and we again sort of
          get what we expect. This time, it's actually theme 4, but orchestrated
          as theme 3 was before:
        </p>
        <MusicNotation
          musicKey="C"
          meter="4/4"
          noteDuration="1/16"
          notes="E8E8|(EFEC) z2 E2-E2 D2 B,4|D8D8|(DEDB,) z2 C2 - C2(D2E2C2)|E8E8|(EFGA) z2 G2 - G2(G2A2G2)|(AGAB) z2 A2 - A2(A2B2G2)|(BcBA) z2 B2 z2 (B2c2d2)"
        />
        <p>
          This is a pretty standard example of one way I've found to develop
          melodies. For a melody like this, built on 2-bar A/B motifs (A is the
          repeated note, B is the 16ths and eighths that follow), you can build
          by breaking expectation and repeating one motif. In this case, the
          latter half builds by repeating the B motif.
          <br />
          <br />
          Another nifty thing here is that the odd-numbered bars of theme 4 have
          been just slightly different 3 different times now: first as whole
          notes, then quarters, now halfs. But otherwise, this is the same exact
          melody, just acting as theme 3. It even repeats again like theme 3
          did, albeit with a bit more jabbing as it modulates down to F and
          calms into the next section.
        </p>
      </DynamicMusicSection>
      <DynamicMusicSection title="Building Back" time={"05:15.44"}>
        <p>
          This is a completely new section in terms of structure, but can you
          identify where this repeated motif comes from as it repeats, climbing
          up step by step?
        </p>
        <MusicNotation
          musicKey="C"
          meter="4/4"
          noteDuration="1/8"
          notes="F3 C-C2 c2|_B2 AB-B4|G3 D-D2 G2|d2 cB-B4|_B3 F-F2 f2|=B3 ^F-F2 ^f2|c3 G-G2 c2|c4 ^c4"
        />
        <p>
          If you don't remember, don't worry - you're about to be reminded. But
          before that, this is another good example of the 2-bar A/B motif
          melody-building I mentioned above. Here, A is the tresillo rhythm in
          bar 1, and B is the other rhythm in bar 2. We have in these 8 bars,
          ABABAAABC. It moves the music along, keeping it interesting, while
          still remaining familiar to the listener. And it's also very obvious
          that something is building up as we step upwards, repeating the same
          ideas higher and higher, led by the familiar chromatic sliding in the
          low brass.
        </p>
      </DynamicMusicSection>
      <DynamicMusicSection title="Brilliant Explosion, Tonic" time={"05:29.13"}>
        <p>
          If you didn't figure it out, the motif from the previous section was
          the first motif in the "brilliant explosion" section, and we land here
          again! This time, it's in the tonic of D (instead of G like last
          time), and it's punctuated by a bright, solo synth to start before the
          rest of the orchestra crashes back in:
        </p>
        <MusicNotation
          musicKey="D"
          meter="4/4"
          noteDuration="1/8"
          notes="d3A-A2a2|g2fg-g4|e2de-e2a2|fede-e4|d3A-A2d2|a2gf-f4|cdef - fd-df|edcd-d4"
        />
        <p>
          I remember thinking at the time that this was the most glorious,
          satisfying landing point I've ever composed. Something to do with how
          it builds up chromatically using the motif it's going to land on. I
          also remember desperately trying to convince myself this was me doing
          sonata-allegro form (it's not, the original brilliant explosion/theme
          3 was not in the dominant, and there was no real development section)
          by landing the second theme in the tonic. But I think the idea of
          sonata-allegro form is there though - there's a deep satisfaction of
          using something familiar to land back in the tonic key.
        </p>
      </DynamicMusicSection>
      <DynamicMusicSection
        title="Theme 3 (Main Theme), Tonic"
        time={"05:42.83"}
      >
        <MusicNotation
          musicKey="D"
          meter="4/4"
          noteDuration="1/16"
          notes="d6e2f8|e4d2c2-c8|B6c2-c4d4|e4B2c2-c8|d6e2f8|a4e2c2-c8|B6e2-e4d4|c4 (c2de) f8"
        />
        <p>
          Finally, back to soaring! This is basically copy-pasted from the
          original statement of theme 3 (only one note is different to keep from
          going absurdly high), just moved into D major instead of G. Musically,
          there's not much new to describe here, but it's still just as, if not
          more glorious than before. Again, perhaps it's just something about
          being back in the tonic.
        </p>
      </DynamicMusicSection>
      <DynamicMusicSection title="Cool Down, Again" time={"06:10.24"}>
        <p>
          Much like before, after theme 3, we have to cool down a bit. It's the
          same 3 8-bar phrases as before, just not modulating away from D this
          time. And the final 8-bar phrase in this section, the theme 2
          callback, avoids the odd chromatic movements to settle back into the
          tonic coda much more warmly, comfortably.
        </p>
      </DynamicMusicSection>
      <DynamicMusicSection title="Coda" time={"06:51.43"}>
        <p>
          And we're back where we started, with theme 1, how the piece opened.
          Ending pieces is always difficult for me, but a comfortable way is
          just how you started - it gives a sense of closure, finality. Note
          here, we omit much of the ornamentation, just like how we started, and
          ritardando into a comfortable cadence to end the piece, with a cute
          triangle hit at the end.
        </p>
      </DynamicMusicSection>
      <h3>"Chasing the Sun"</h3>
      <p>
        I never title my pieces before writing them - I have a hard time writing
        music to fit a certain description, and I find it much easier to
        retroactively fit a name to the music I've written. In this case, I
        subtitled it "Chasing the Sun". I hope it's fairly obvious why. The
        warmth of theme 1 felt like a warm drive through corn fields on a sunny
        day, while theme 3 feels like soaring through the sky. Both chasing the
        sun, in a way. After I already chose this title, a friend suggested that
        the first statement of theme 4, the subdued, quiet one, is like a
        peaceful night after a long day. That wasn't intentional, but I guess
        you can interpret it that way too.
      </p>
      <h3>Thoughts</h3>
      <p>
        I think of this piece as one of my first truly "complete" pieces. I say
        that primarily in the sense of structure. A lot of my previous pieces
        were kind of just "write whatever I want, as long as it sounds good."
        This piece has more care put into balancing when certain ideas come up
        and how they can be developed. For example, theme 2 shows up in a number
        of different contexts, but is always recognizable. Theme 3 shows up as
        the main theme, as something I really want to hear all the time, but
        it's held back enough to not spoil myself. There's a certain kind of
        balance that music needs in terms of structure, and I think this piece
        was the first one I wrote that really starts getting at that.
        <br />
        <br />I do wish I mixed some of the audio better though. Some of the
        spots have some peaking, or it's just not clear what's really going on.
        It's also not a super complex piece harmonically. Yes, I was beginning
        to experiment with chromatics, and I basically accidentally modulated my
        way into neighboring keys, but there really isn't anything crazy going
        on. And my last gripe with this piece is it's too regular. Everything is
        8-bar phrases, and it sometimes sounds too boxed-in because of it.
        <br />
        <br />
        Still, having written this piece a long time ago, when my only guidance
        for writing music was "write whatever sounds good", I still think this
        piece stands the test of time. It's melodically strong, harmonically
        simple, and structurally sound enough for me to still listen to it
        occasionally nowadays too.
      </p>
    </DynamicMusicProvider>
  );
}

export default FL3_33;
