import React, {
  useState,
  useRef,
  useInsertionEffect,
  useLayoutEffect,
} from "react";

export default function Hooks() {
  const [width, setWidth] = useState(0);
  const boxRef = useRef();

  useLayoutEffect(() => {
    setWidth(boxRef.current.offsetWidth);
  }, []);

  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .dynamic-style {
        color: red;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={{ padding: "1em" }}>
      <div
        ref={boxRef}
        style={{ width: "50%", background: "red", padding: "20px" }}
      ></div>
      <p>Box Width: {width}px</p>
      <p className="dynamic-style">Styled with useInsertionEffect</p>
    </div>
  );
}
