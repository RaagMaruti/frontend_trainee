import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
  useId,
} from "react";

function Name() {
  const [name, setName] = useState("React");
  const idName = useId();
  // generate dynamic id, even for same component

  useEffect(() => {
    console.log("Name updated to:", name);
  }, [name]);

  return (
    <div>
      <p id={idName}>Name: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        aria-describedby={idName}
      />
    </div>
  );
}

export default function FunctionLifecycle() {
  const [count, setCount] = useState(0);
  const timer = useRef(0);
  // Persists beween 2 renders, without causing re-renders

  useEffect(() => {
    console.log("Count changed to:", count);
  }, [count]);

  // do not calculate on renders, only on count changes
  const expensiveCalculation = useMemo(() => {
    console.log("Running expensive calculation...");
    return count * 1000;
  }, [count]);

  useEffect(() => {
    console.log("Mounted");
    hello();
    const inter = setInterval(() => {
      console.log("Timer -", ++timer.current);
    }, 1000);

    return () => {
      clearInterval(inter);
      console.log("Unmounted");
    };
  }, []);

  const hello = useCallback(() => {
    console.log("No re-creation of this function on renders");
  }, []);

  return (
    <div style={{ padding: "1em" }}>
      <h1>Functional Lifecycle Demo</h1>
      <p>Count: {count}</p>
      <p>Expensive Calculation: {expensiveCalculation}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count
      </button>
      <Name />
      <Name />
    </div>
  );
}
