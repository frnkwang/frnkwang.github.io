import CodeBlock from "../../components/CodeBlock";
import img from "../../assets/this_website.png";

import bad_mobile_header from "../../assets/code/CreatingThisWebsite/bad_mobile_header.png";
import base_site from "../../assets/code/CreatingThisWebsite/base_site.png";
import bootstrap_navbar from "../../assets/code/CreatingThisWebsite/bootstrap_navbar.gif";
import current_navbar from "../../assets/code/CreatingThisWebsite/current_navbar.png";
import directory_structure from "../../assets/code/CreatingThisWebsite/directory_structure.png";
import front_end_frameworks_ratios from "../../assets/code/CreatingThisWebsite/front_end_frameworks_ratios.png";

export const DISPLAY_NAME = "Creating This Website";
export const DISPLAY_IMAGE = img;
export const CREATION_DATE = new Date("2026/06/27");

function CreatingThisWebsite() {
  return (
    <div>
      <h2>
        Creating{" "}
        <a
          href="https://github.com/frnkwang/frnkwang.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          This Website
        </a>
      </h2>
      <i>as someone who doesn't like frontend</i>
      <br />
      <br />
      <h4>The Inspiration</h4>
      <p>
        When I was younger, I had this dream of being a YouTuber. I suspect this
        is a somewhat common dream for teenagers these days - it seems like such
        a fun job, to be able to talk about things you already enjoy, and turn
        it into a living. And you get some degree of fame out of it too. It just
        seemed like such an attractive option to my young mind.
        <br />
        <br />
        Anyway, I got older and discovered that I hate the sound of my own
        voice, so becoming a YouTuber went out the window. But in college, I
        surrounded by fellow computer science majors, to whom making a personal
        website was a common idea. This seemed like a pretty good alternative to
        being a YouTuber. Having your own website lets you share thoughts about
        life, hobbies, whatever you want in a bloggy format.
        <br />
        <br />I never got around to it during college, especially because I was
        too busy with classwork to learn frontend for real. What eventually gave
        me the motivation to start this post-grad was that I really wanted a
        better way to commentate my music when I share it with friends. I wanted
        to create some component that showed my thoughts about my compositions
        as people listened to it in real time. That, combined with the old urge
        to just become a YouTuber who shares thoughts about things they enjoy,
        is what led to me creating this website.
      </p>
      <h4>The Beginnings</h4>
      <p>
        The first problem was, I don't usually do frontend programming. I took a
        course in college using React, worked in React Native for a college
        club, and did an internship with Angular. But I never felt like I truly
        understood how frontend worked. I starterd just by looking around for a
        framework to use, and came across the expected answer (ie, React) on{" "}
        <a href="https://share.devographics.com/share/prerendered?localeId=en-US&surveyId=state_of_js&editionId=js2024&blockId=front_end_frameworks_ratios&params=&sectionId=libraries&subSectionId=front_end_frameworks">
          State of JS
        </a>
        :
        <img src={front_end_frameworks_ratios} />I was a bit on the fence
        between React and Angular - I vaguely recalled enjoying Angular's
        two-way bindings when I used it previously, though I couldn't tell you
        what that means anymore - but after not much debate, I figured it didn't
        really matter and just arbitrarily chose React. I also decided right
        from the start to just use{" "}
        <a href="https://docs.github.com/en/pages">GitHub Pages</a> for hosting.
        I had no plans for this website to be anything bigger than a cool side
        project to show friends, so I didn't need anything bigger.
        <br />
        <br />
        Ok. So how do I start? As any programmer would do, I just googled how to
        make a React page. That led me to{" "}
        <a href="https://create-react-app.dev/docs/getting-started/">
          create-react-app
        </a>
        , which I did, but was later told by a friend (who's much more familiar
        with frontend dev) that create-react-app was bad and{" "}
        <a href="https://react.dev/blog/2025/02/14/sunsetting-create-react-app">
          deprecated
        </a>
        . I didn't really understand why, but I just trusted him and his
        suggestion to switch to <a href="https://vite.dev/">Vite</a>. Luckily
        the tutorials there were pretty easy to follow, and in no time, I had a
        basic page up and running using the basic HTML I did still remember:
        <div className="hori container" style={{ justifyContent: "center" }}>
          <img
            src={base_site}
            style={{ border: "3px solid gray", maxWidth: "70%" }}
          />
        </div>
        At this point, nothing was dynamic at all. Everything in the above image
        is just raw HTML and a tiny bit of CSS - even the header.
      </p>
      <h4>The Expansion</h4>
      <p>
        I figured the next thing to do was create more pages, and creating a
        permanent header would be a good way to navigate them. Googling for
        React navigation, I was led to{" "}
        <a href="https://www.npmjs.com/package/react-router-dom">
          react-router-dom
        </a>
        , and following some tutorials, was able to pretty easily get page
        navigation working.
        <br />
        <br />
        Around the same time, I started sharing the site with some close
        friends, and one immediate suggestion was making the styling better,
        especially on mobile. At the time, the header looked awful on mobile -
        it created a scroll bar:
        <div className="hori container" style={{ justifyContent: "center" }}>
          <img
            src={bad_mobile_header}
            style={{ border: "3px solid gray", maxWidth: "70%" }}
          />
        </div>
        Now, perhaps the main reason I never enjoyed frontend programming was
        CSS. I never really understood what the hundreds of CSS options and tags
        were and how they could interact with each other on so many browsers.
        Perhaps I'm just not a very UI-oriented person - I feel like websites
        derive value from the information they contain rather than how pretty
        they look. So I resolved to just get a well-known library,{" "}
        <a href="https://getbootstrap.com/">bootstrap</a>, to handle all the
        annoying styling for me. The best part was, they even had a built-in{" "}
        <a href="https://getbootstrap.com/docs/4.0/components/navbar/">
          Navbar
        </a>{" "}
        which is exactly what I was working on. I imagined something like this:
        <div className="hori container" style={{ justifyContent: "center" }}>
          <img
            src={bootstrap_navbar}
            style={{ border: "3px solid gray", maxWidth: "70%" }}
          />
        </div>
        So I got bootstrap and started fiddling around a bit. It took me about
        an hour of struggling to realize that there was a module specifically
        for react with bootstrap:{" "}
        <a href="https://react-bootstrap.netlify.app/">react-bootstrap</a>. So I
        removed the raw bootstrap helpers I was using, installed that, and
        continued to fiddle around.
        <br />
        <br />I struggled a few more hours to no avail - no matter what I did,
        it seemed like I couldn't get both react-router-dom and react-bootstrap
        to work together nicely. I took a break, and upon coming back, realized
        there's a <i>third</i> module,{" "}
        <a href="https://www.npmjs.com/package/@types/react-router-bootstrap">
          react-router-bootstrap
        </a>
        , whose whole purpose in life is just making two other modules work with
        each other. This was baffling to me. Why would routing and CSS styling
        conflict with each other? They seemed like such independent facets of a
        website.
        <br />
        <br />
        Too bothered to figure out the intricacies, I decided to just scrap
        bootstrap altogether and make my own navbar from raw CSS. This turned
        out to be not as hard as I expected, and it's what you see on this page
        today when on mobile.
        <div className="hori container" style={{ justifyContent: "center" }}>
          <img
            src={current_navbar}
            style={{ border: "3px solid gray", maxWidth: "70%" }}
          />
        </div>
        Perhaps my preconception of CSS being hard just cost me a bunch of time
        this time around.
      </p>
      <h4>The Structure</h4>
      <p>
        The next logical step was to add more pages. I'd already laid out a few
        broad categories of pages that I'd like, but I need actual content now!
        The question is, how should they be organized?
        <br />
        <br />
        Much like when I was choosing a framework to go with, there's not really
        a right answer. So I just arbitrarily chose a structure that seemed
        logical to me: each category had its own page and a parallel folder, and
        subpages go in the folder. This allows me to flexibly create new
        top-level pages, and they're not required to have subpages (eg,
        Consumption or About).{" "}
        <div className="hori container" style={{ justifyContent: "center" }}>
          <img src={directory_structure} style={{ maxWidth: "70%" }} />
        </div>
        I could've just as easily chosen to organize all my pages at the top
        level, and within each file, list the category they belonged to. Nothing
        wrong with that, I just chose not to do that.
        <br />
        <br />I also needed a way to create links to every page I created so
        that users could navigate to them. Obviously, I could hard-code links to
        each sub-page on each top-level page, but that would mean I have to
        update the top-level page every time I make a new page. And at the end
        of the day, I created this website to keep adding more pages, so that
        seemed annoying. Luckily, with the new organization structure, I could
        reliably discover all the pages dynamically. That's why I created a
        utility{" "}
        <a href="https://github.com/frnkwang/frnkwang.github.io/blob/main/src/util/PageFinder.js">
          PageFinder
        </a>{" "}
        helper. <br />
        <br />
        At its core, all it does is walk the directory structure I listed above
        to discover all the pages and then export them as an array:
        <CodeBlock
          language="javascript"
          code={`
const PAGES_DIR = "/src/pages";
export const ALL_PAGES = Object.entries(
  import.meta.glob("/src/pages/**/*.jsx", {
    eager: true,
  }),
).map(([filepath, module]) => {
  /* ... */
  return {
    name: module.DISPLAY_NAME,
    date: module.CREATION_DATE,
    image: module.DISPLAY_IMAGE ? module.DISPLAY_IMAGE : PLACEHOLDER_IMAGE,
    filepath: filepath,
    urlPath: getUrlPath(filepath),
    section: getSectionName(filepath),
    module: module,
  };
});`}
        />
        What really tickled my C++ brain here is that Vite conveniently allows
        us to do this at initialization-time with "eager". This prevents us from
        recalculating the array of pages upon every page reload. Not a major
        optimization, especially if I don't have many pages, but an optimization
        nonetheless, and one that feels very much like converting something in
        C++ to be constexpr/compile-time.
        <br />
        <br />
        The other neat thing this allows me to do is bundle name, creation date,
        and display images with the source code of the page itself, using module
        exports. I find this useful for forcing myself to provide these with the
        page. I can't forget to provide a name or date, because then the entire
        website won't initialize (or, in my C++-pilled brain, it won't compile).
        If these were decoupled, I could still enforce this, but it's now much
        easier to locate where everything related to a single page lives.
        <CodeBlock
          language="javascript"
          code={`
import img from "../../assets/this_website.png";

export const DISPLAY_NAME = "Creating This Website";
export const DISPLAY_IMAGE = img;
export const CREATION_DATE = new Date("2026/06/27");

function CreatingThisWebsite() {
/* ... */
}

export default CreatingThisWebsite;
`}
        />
        All in all, I was quite happy with this PageFinder utility. It solves a
        problem that will very obviously come up in the future as I create more
        pages, and it does so in a way that make future me's life very easy:
        just create the new page, and it'll automatically show up linked in the
        right spots on my website.
      </p>
      <h4>The Learnings</h4>
      <ul>
        <li>
          Just start coding. I put off starting this website for so long because
          I thought it'd be hard, but once I got into it, it turned out to be
          pretty quick and pretty fun.
        </li>
        <li>
          Just try stuff, it's fine if it doesn't work. That's what happened
          with react-bootstrap this time. Projects like this website are nice in
          that they're really low-risk. If I mess up, who cares? Just delete the
          code and keep trying until it works. No risk.
        </li>
        <li>
          Don't assume things are hard and try to pre-optimize. In this case, it
          was CSS. I should've learned some more CSS before assuming I should
          try to avoid it.
        </li>
        <li>
          Organization conventions are arbitrary and technically unnecessary,
          but really nice to have. The directory structure I chose isn't special
          or better than others. It just works, and having anything makes life
          easier for me.
        </li>
        <li>
          User experience matters, are programmers are users too. That's why I
          created the PageFinder utility.
        </li>
        <li>
          JavaScript's library ecosystem is kind of a mess. Why does
          react-router-bootstrap have to exist?
        </li>
        <li>
          Having complete ownership of a code base is nice. This was way more
          common with college projects, and I'd forgotten about it since
          starting work. I know where everything is, so if something isn't
          working, it's easy to locate and fix.
        </li>
      </ul>
      I'm relatively happy with how this website is going so far. It's been
      heavy on programming at the start, but I'm starting to be able to write
      more bloggy-style stuff now, like the YouTuber-dreamer in me wanted
      originally. I'm also glad how low-stakes this is. I'm sure a seasoned JS
      dev would have many things to criticize about my code, but who cares? It's
      my website, and I'm just learning as I go.
      <br />
      <br />
      Since this is hosted by GitHub pages, the source code is{" "}
      <a href="https://github.com/frnkwang/frnkwang.github.io">on GitHub too</a>
      . Feel free to glance through.
    </div>
  );
}

export default CreatingThisWebsite;
