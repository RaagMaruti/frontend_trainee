import React, { useState, useDeferredValue, useTransition } from "react";

const data = Array(10000)
  .fill(0)
  .map((_, i) => `Item ${i}`); // Simulating a large dataset

const App = () => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const deferredQuery = useDeferredValue(query); // ✅ Defers expensive filtering
  const [isPending, startTransition] = useTransition(); // ✅ Keeps UI smooth

  const handleSearch = (e) => {
    setQuery(e.target.value); // Update query instantly

    startTransition(() => {
      // Mark this as a low-priority update
      setFilteredData(data.filter((item) => item.includes(e.target.value)));
    });
  };

  return (
    <div>
      <h2>Search Example</h2>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
      />
      {isPending && <p>Loading...</p>} {/* Shows while filtering */}
      <ul>
        {filteredData.slice(0, 20).map(
          (
            item,
            i // Display first 20 results
          ) => (
            <li key={i}>{item}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default App;
