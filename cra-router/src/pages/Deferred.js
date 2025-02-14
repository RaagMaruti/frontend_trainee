import React, { useState, useDeferredValue } from "react";

export default function Deferred() {
  const [query, setQuery] = useState(""); // User input
  const deferredQuery = useDeferredValue(query); // Deferred search query

  return (
    <div>
      <input
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchResults query={deferredQuery} />
    </div>
  );
}

// Simulate an expensive search result rendering
const SearchResults = ({ query }) => {
  return (
    <div>
      <p>Searching for: {query || "..."}</p>
      <ul>
        {items.map((item) => (
          <li key={item}>
            {item} - {query}
          </li>
        ))}
      </ul>
    </div>
  );
};

const items = Array.from({ length: 20000 }, (_, i) => i);
