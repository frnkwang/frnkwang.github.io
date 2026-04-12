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
      <p className="fs-6">
        My name is Frank Wang. I graduated from the University of Michigan in
        2024 (
        {makeStyledLink(
          "https://en.wikipedia.org/wiki/2023%E2%80%9324_College_Football_Playoff",
          "go blue",
        )}
        ), majoring in Computer Science through the College of Engineering,
        minoring in music and math.
        <br />
        <br />
        At Michigan, I was once the VP of internal affairs for make, as well a
        mobile engineering lead for the{" "}
        {makeStyledLink("https://www.michigandaily.com/", "Michigan Daily")},
        the student-run newspaper. Additionally, I did research with{" "}
        {makeStyledLink("https://www.umtri.umich.edu/", "UMTRI")} on using CV to
        identify motion sickness, and I worked on developing MCommunity, the
        university's directory system.
        <br />
        <br />
        At Michigan, I played violin in the{" "}
        {makeStyledLink(
          "https://www.michiganpops.org/",
          "Michigan Pops Orchestra",
        )}
        , where I made the majority of my friends. I also played several times
        with the{" "}
        {makeStyledLink(
          "https://sites.google.com/a/umich.edu/campus-orchestras/",
          "Campus Symphony Orchestra",
        )}
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
        <img src="src/assets/frank.jpg" alt="My Image" className="img-fluid" />
        <br />
        <br />I credit some of my friends for inspiring me to make this website:
        <ul>
          <li>{makeStyledLink("https://albonwu.com/", "Albon Wu")}</li>
          <li>{makeStyledLink("https://erxclau.me/", "Eric Lau")}</li>
        </ul>
      </p>
    </div>
  );
}

export default AboutPage;
