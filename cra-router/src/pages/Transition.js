import React, { useState, useTransition } from "react";
const items = Array.from({ length: 20000 }, (_, i) => i);

const Transition = () => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [isPending, startTransition] = useTransition(); // useTransition
  const [count, setCount] = useState(0);

  const handleFilterChange = () => {
    setCount((count) => count + 1); // high priority
    startTransition(() => {
      // low priority
      setFilteredItems(items.filter((item) => item % 2 !== 0));
    });
  };

  return (
    <div>
      <button onClick={handleFilterChange}>Filter Items</button>
      <p>fetched {count} times</p>
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {filteredItems.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Transition;

// Scenario	                                            useTransition	  useDeferredValue
// Rendering a large list after clicking a button	      Yes	            No
// Keeping UI responsive while typing (search bar)	    No	            Yes
// Preventing UI freeze when navigating pages	          Yes	            No
// Handling expensive calculations based on input	      No	            Yes
