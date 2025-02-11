import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState({ c1: 0, c2: 0 });
  return (
    <div>
      <h3>Change values of object properties, independently</h3>
      <span style={{ margin: "1em" }}>{count.c1}</span>
      <button onClick={() => setCount({ ...count, c1: count.c1 + 3 })}>
        +3
      </button>
      <span style={{ margin: "1em" }}>{count.c2}</span>
      <button onClick={() => setCount({ ...count, c2: count.c2 + 5 })}>
        +5
      </button>
    </div>
  );
}
