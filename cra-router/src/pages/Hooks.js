import React, { useReducer } from "react";

// Reducer function (takes current state and action, returns new state)
const reducer = (state, action) => {
  switch (action.type) {
    case "+":
      return { count: state.count + 1 };
    case "-":
      return { count: state.count - 1 };
    case "0":
      return { count: 0 };
    default:
      return state;
  }
};

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "+" })}>+</button>
      <button onClick={() => dispatch({ type: "-" })}>-</button>
      <button onClick={() => dispatch({ type: "0" })}>0</button>
    </div>
  );
}
