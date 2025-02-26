import React, { useState, useTransition } from "react";
import List from "./List";

const items = Array.from({ length: 7000 }, (_, i) => i);

export default function Transition() {
  const [filteredItems, setFilteredItems] = useState(items);
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  function handleFilterChange() {
    setCount((count) => count + 1); // high priority
    startTransition(() => {
      setFilteredItems(items.filter((item) => item % 2 !== 0)); // low priority
    });
  }

  return (
    <div>
      <button onClick={handleFilterChange}>Filter Items</button>
      <p>clicked {count} times</p>
      {isPending ? <p>Loading...</p> : <List items={filteredItems} />}
    </div>
  );
}

// Scenario	                                            useTransition	  useDeferredValue
// Rendering a large list after clicking a button	      Yes	            No
// Keeping UI responsive while typing (search bar)	    No	            Yes
// Preventing UI freeze when navigating pages	          Yes	            No
// Handling expensive calculations based on input	      No	            Yes
