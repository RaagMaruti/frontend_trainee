import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";

export default function Lifecycle() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("React 18");
  const renderCount = useRef(0); // Persists beween 2 renders, withou causing re-renders

  useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Unmounted");
    };
  }, []); // Runs only once

  useEffect(() => {
    console.log(`🔄 Count changed to: ${count}`);
  }, [count]); // Runs when "count" changes

  useEffect(() => {
    console.log(`📝 Name updated to: ${name}`);
  }, [name]); // Runs when "name" changes

  useEffect(() => {
    console.log(`Component re-rendered ${++renderCount.current} times`);
  }); // Using useRef to track renders

  const expensiveCalculation = useMemo(() => {
    console.log("⚡ Running expensive calculation...");
    return count * 1000;
  }, [count]); // Only re-calculates when `count` changes

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ padding: "1em" }}>

      <h1>React 18 Functional Lifecycle Demo</h1>
      <p>Count: {count}</p>
      <p>Expensive Calculation: {expensiveCalculation}</p>
      <button onClick={increment}>Increment Count</button>

      <p>Name: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Render Count: {renderCount.current}</p>
    </div>
  );
}
