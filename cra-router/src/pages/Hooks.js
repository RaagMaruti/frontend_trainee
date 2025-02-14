import React, {
  useState,
  useRef,
  useReducer,
  useInsertionEffect,
  useLayoutEffect,
} from "react";

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
      <StyledComponent />
    </div>
  );
}

function StyledComponent() {
  const [width, setWidth] = useState(0);
  const boxRef = useRef();

  useLayoutEffect(() => {
    setWidth(boxRef.current.offsetWidth); // Get width before paint
  }, []);

  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .dynamic-style {
        color: red;
        font-size: 20px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{ width: "50%", background: "blue", padding: "20px" }}
      >
        Resize me!
      </div>
      <p>Box Width: {width}px</p>
      <p className="dynamic-style">Styled with useInsertionEffect</p>
    </div>
  );
}
