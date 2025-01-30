export default function Data() {
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
    <>
      <h3 style={{ marginTop: "2em" }}>Here is your data:</h3>
      <ul>{listItems}</ul>
    </>
  );
}
