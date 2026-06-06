import Papa from "papaparse";
import { useEffect, useState } from "react";

export const DISPLAY_NAME = "Consumption";
export const CREATION_DATE = new Date("2026-04-12");

const CONSUMPTION_CSV = "/consumption.csv"; // in /public

function formatDate(dateString) {
  if (dateString === "current") {
    return dateString;
  }
  return new Date(dateString).toDateString();
}

function makeConsumptionObjectDisplay(c) {
  // c's members are the columns in CONSUMPTION_CSV
  if (!c.name) {
    throw new Error(`Consumption object is missing name: ${c}.`);
  }

  const dateDisplay =
    c.endDate !== undefined && c.endDate !== ""
      ? `${formatDate(c.date)} to ${formatDate(c.endDate)}`
      : formatDate(c.date);
  const locationDisplay =
    c.location !== undefined && c.location !== "" ? ` at ${c.location}` : "";
  const creatorDisplay =
    c.creator !== undefined && c.creator != "" ? `, ${c.creator}` : "";
  // TODO: make this a collapsible element
  return (
    <div key={c.name}>
      <hr />
      <h3 style={{ display: "inline" }}>{c.name}</h3>
      <p style={{ display: "inline" }}>{creatorDisplay}</p>
      <br />
      <i>
        {c.format}
        <br />
        {dateDisplay}
        {locationDisplay}
      </i>
      <br />
      <p>{c.description}</p>
    </div>
  );
}

function ConsumptionPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse(CONSUMPTION_CSV, {
      download: true, // read from /public
      header: true,
      complete: (results) => {
        // TODO: sort by date
        setData(results.data);
      },
    });
  }, []);

  return (
    <div>
      <p>
        Heavily inspired by{" "}
        <a href="https://erxclau.me/lists">a similar page</a> on a friend's
        site.
        <br />
        <br />
        Here's a variety of things I've read, watched, listened to, or played
        recently. To be clear, here are a few things that I don't include on
        this list:
      </p>
      <ul>
        <li>
          Video games that don't have a defined story/completion; eg Mario Kart,
          Kirby Air Riders, Smash Bros, Bloons TD6
        </li>
        <li>Video games that I replayed (lots of Ace Attorney...)</li>
        <li>Concerts that I performed in</li>
        <li>Museums or parks that I can visit multiple times</li>
        <li>
          Restaurants (despite the fact that this tab is called consumption)
        </li>
        <li>Things that I forgot about (oops)</li>
      </ul>
      <p>
        You might notice that I partake in more of these activities in the
        winter. I suspect that's because it's so nice out in the
        spring/summer/fall that I can't help but go out for runs, walks, and
        bike rides. On top of that, I still play in several orchestras, and
        rehearsals take up time. All that is to say, I'm not always reading or
        consuming stuff, so you'll probably notice a few gaps here and there.
        Anyway, here's the list:
      </p>
      {data.map(makeConsumptionObjectDisplay)}
    </div>
  );
}

export default ConsumptionPage;
