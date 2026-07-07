import { useEffect, useId } from "react";

import abc from "abcjs";

export function MusicNotation({ musicKey, meter, noteDuration, notes }) {
  const abcNotation = [
    "X:1",
    meter ? `M:${meter}` : "",
    noteDuration ? `L:${noteDuration}` : "",
    `K:${musicKey || "C"}`,
    notes,
  ]
    .filter(Boolean)
    .join("\n");
  const id = useId();

  useEffect(() => {
    abc.renderAbc(id, abcNotation, {
      responsive: "resize",
      staffwidth: 0, // 0 allows it to contract to its minimum content width
      selectTypes: false,
    });
  }, [abcNotation]);

  return (
    <span
      id={id}
      style={{
        display: "inline-block",
        verticalAlign: "middle",
      }}
    />
  );
}

export default MusicNotation;
