import { useState, useRef } from "react";
import { createPortal } from "react-dom";

const Tooltip = () => {
  return createPortal(
    <div
      style={{
        position: "absolute",
        top: 100,
        left: 100,
        fontSize: 30,
        zIndex: 1000,
      }}
    >
      <>"overflow"</>
    </div>,
    document.body
  );
};

const App = () => {
  const [msg, setMsg] = useState(false);

  return (
    <div
      style={{
        width: "200px",
        height: "100px",
        overflow: "hidden",
        border: "2px solid black",
      }}
    >
      <button onClick={() => setMsg(!msg)} style={{ margin: "40px" }}>
        click me
      </button>
      {msg && <>overflow</>}
      {msg && <Tooltip text="overflow" />}
    </div>
  );
};

export default App;
