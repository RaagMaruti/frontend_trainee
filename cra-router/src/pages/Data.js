import { useState } from "react";

export default function Data() {
  const [data, setData] = useState(false);

  function handleClick(e) {
    e.stopPropagation();
    setData(!data);
    alert("visibility of data has been changed");
  }

  const lines = [
    "first line",
    "second line",
    "third line",
    "fourth line",
    "fifth line",
  ];

  const filteredLines = lines.filter((val, index, arr) => index % 2 === 0);

  const listItems = filteredLines.map((line) => (
    <li key={crypto.randomUUID()}>{line}</li>
  ));

  return (
    <div style={{ padding: "1em" }} onClick={handleClick}>
      <h1>This is the Data Page</h1>
      <button onClick={handleClick}>
        Click button or div to change show/hide data
      </button>
      {data && (
        <>
          <h3 style={{ marginTop: "2em" }}>Here is your data:</h3>
          <ul>{listItems}</ul>
        </>
      )}
    </div>
  );
}
