export default function List({ query, items }) {
  console.log("list mounted");
  return (
    <>
      <p>Searching for: {query || "..."}</p>
      <ul>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </>
  );
}
