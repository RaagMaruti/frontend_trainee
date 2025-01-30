import Message from "./components/Message";
import { AdminMessage } from "./components/Message";
import Data from "./components/Data";

import { useState } from "react";

export default function App() {
  const [data, setData] = useState(false);
  const [count, setCount] = useState({ c1: 0, c2: 0 });
  const [arr, setArr] = useState([0, 0]);
  let isAdmin = true;

  function handleClick(e) {
    e.stopPropagation();
    setData(!data);
    alert("data changed");
  }

  return (
    <>
      <div onClick={handleClick}>
        <Message prop={{ greet: "Hello", name: "Raag" }} />
        {isAdmin ? <AdminMessage /> : <p>You are normal user</p>}
        <button onClick={handleClick}>
          Click button or div to change show/hide Data
        </button>
        {data && <Data />}
      </div>
      <div>
        <h3 style={{ marginTop: "2em" }}>
          Change values of object properties, independently
        </h3>
        <span style={{ margin: "1em" }}>{count.c1}</span>
        <button onClick={() => setCount({ ...count, c1: count.c1 + 3 })}>
          +3
        </button>
        <span style={{ margin: "1em" }}>{count.c2}</span>
        <button onClick={() => setCount({ ...count, c2: count.c2 + 5 })}>
          +5
        </button>
      </div>
    </>
  );
}

// Rules of React

// JSX - 1) single root element, 2) close tags, 3) attributes are camelCase, 4) {} to access JS

// Keys in lists - UUID

// Components should not change variables outside their scope

// Pure functions if not changed, does not re-render

// React has own UI Tree, smaller tree, smaller bundler

// Only state variable changes cn cause re-rendering, each component has independent state

// Render (painting) - 1) trigger initial render, 2) render changed components, 3) commit to DOM

// State changes are only reflected on render, in between no values are changed

// Updater function - to change state multiple time between render - n => n + 1

// Do not change object or array elements, set new objects or elements, do not use mutating methods
