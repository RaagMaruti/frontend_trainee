import { useState } from "react";
import WelcomeMessage from "../components/WelcomeMessage";

export default function Home() {
  const [count, setCount] = useState({ c1: 0, c2: 0 });

  return (
    <div style={{ padding: "1em" }}>
      <WelcomeMessage prop={{ size: "2em", weight: "bold", color: "coral" }} />

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
    </div>
  );
}
