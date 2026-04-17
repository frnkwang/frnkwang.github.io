import frankImg from "../assets/frank.jpg";

export const DISPLAY_NAME = "About";
export const CREATION_DATE = new Date("2026-04-12");

function makeStyledLink(href, text) {
  return (
    <a
      className="text-reset"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}

function AboutPage() {
  return (
    <div>
      <p>
        My name is Frank Wang. I graduated from the University of Michigan in
        2024 (
        {makeStyledLink(
          "https://mgoblue.com/news/2024/1/8/football-mission-accomplished-u-m-takes-down-no-2-washington-to-capture-cfp-national-championship",
          "go blue",
        )}
        ), majoring in Computer Science through the College of Engineering,
        minoring in music and math.
        <br />
        <br />
        At Michigan, I was once the VP of internal affairs for{" "}
        {makeStyledLink("https://michhackers.com/", "Michigan Hackers")}, as
        well a mobile engineering lead for the{" "}
        {makeStyledLink("https://www.michigandaily.com/", "Michigan Daily")},
        the student-run newspaper. Additionally, I did research with{" "}
        {makeStyledLink("https://www.umtri.umich.edu/", "UMTRI")} on using CV to
        identify motion sickness, and I worked on developing MCommunity, the
        university's directory system. Outside of computer science stuff, I
        played violin in the{" "}
        {makeStyledLink(
          "https://www.michiganpops.org/",
          "Michigan Pops Orchestra",
        )}
        , where I made the majority of my friends. I also played with the{" "}
        {makeStyledLink(
          "https://sites.google.com/a/umich.edu/campus-orchestras/",
          "Campus Symphony Orchestra",
        )}{" "}
        a number of times and partook in the RC chamber music program a few
        times.
        <br />
        <br />
        Nowadays, I live in the greater Philadelphia area and work as a software
        engineer in fintech. I still play violin in{" "}
        {makeStyledLink(
          "https://independence-sinfonia.org/",
          "Independence Sinfonia",
        )}
        , a local community orchestra, and recently started leading the{" "}
        {makeStyledLink(
          "https://gpgso.org/",
          "Greater Philadelphia Gamer Symphony Orchestra",
        )}
        . You may also occasionally find me at sight-reading sessions with{" "}
        {makeStyledLink(
          "https://orchestrasociety.org/",
          "the Orchestra Society of Philadelphia",
        )}
        . I also compose/produce music of questionable quality.
        <br />
        <br />
        Outside of music and software, I run and bike casually (catch me on the
        Schuylkill River Trail in the spring). I also spend unhealthy amounts of
        time playing Nintendo games.
        <br />
        <br />
        <img src={frankImg} alt="My Image" className="img-fluid" />
        <br />
        <br />I credit some of my friends for inspiring me to make this website:
      </p>
      <ul>
        <li>{makeStyledLink("https://albonwu.com/", "Albon Wu")}</li>
        <li>{makeStyledLink("https://erxclau.me/", "Eric Lau")}</li>
      </ul>
    </div>
  );
}

export default AboutPage;
