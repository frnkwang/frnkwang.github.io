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

function getAllCategories(consumptionList) {
  const categories = new Set(
    consumptionList.map((c) => {
      return c.category;
    }),
  );
  return [...categories].toSorted((a, b) => {
    if (b === "Other") return -1; // put Other last
    return a < b;
  });
}

function filterConsumptionList(consumptionList, categories) {
  if (categories.size == 0) {
    return consumptionList;
  }
  return consumptionList.filter((c) => {
    return categories.has(c.category);
  });
}

function CategorySelector({ name, selectedCategories, setSelectedCategories }) {
  const handleToggle = (event) => {
    if (event.target.checked) {
      selectedCategories.add(name);
    } else {
      selectedCategories.delete(name);
    }
    setSelectedCategories(new Set(selectedCategories)); // force react refresh
  };
  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleToggle} />
        {name}
      </label>
    </div>
  );
}

function ConsumptionObjectDisplay({ consumptionObject }) {
  if (!consumptionObject.name) {
    throw new Error(`Consumption object is missing name: ${c}.`);
  }

  const { name, creator, _, format, date, endDate, location, description } =
    consumptionObject;

  const dateDisplay =
    endDate !== undefined && endDate !== ""
      ? `${formatDate(date)} to ${formatDate(endDate)}`
      : formatDate(date);
  const locationDisplay =
    location !== undefined && location !== "" ? ` at ${location}` : "";
  const creatorDisplay =
    creator !== undefined && creator != "" ? `, ${creator}` : "";
  return (
    <div>
      <hr />
      <details>
        <summary>
          <h3 style={{ display: "inline" }}>{name}</h3>
          <p style={{ display: "inline" }}>{creatorDisplay}</p>
        </summary>
        <div>
          <i>
            {format}
            <br />
            {dateDisplay}
            {locationDisplay}
          </i>
          <br />
          <p>{description}</p>
        </div>
      </details>
    </div>
  );
}

function ConsumptionPage() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(new Set());

  useEffect(() => {
    Papa.parse(CONSUMPTION_CSV, {
      download: true, // read from /public
      header: true,
      complete: (results) => {
        const res = results.data.toSorted((a, b) => {
          return a.date < b.date; // sort by date
        });
        setData(res);
        setCategories(getAllCategories(res));
        setSelectedCategories(new Set());
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
        <li>Video games that I replayed</li>
        <li>Concerts that I performed in</li>
        <li>Museums or parks that I can visit multiple times</li>
        <li>
          Restaurants (despite the fact that this tab is called consumption)
        </li>
        <li>Things that I forgot about (oops)</li>
      </ul>
      <p>
        <b>Filter by category:</b>
      </p>
      {categories.map((name) => {
        return (
          <CategorySelector
            key={name}
            name={name}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        );
      })}
      {filterConsumptionList(data, selectedCategories).map(
        (consumptionObject) => {
          return (
            <ConsumptionObjectDisplay
              key={`${consumptionObject.name},${consumptionObject.format}`}
              consumptionObject={consumptionObject}
            />
          );
        },
      )}
    </div>
  );
}

export default ConsumptionPage;
