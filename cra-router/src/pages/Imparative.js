import React, { useImperativeHandle, useRef, forwardRef } from "react";

const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    alertMessage: () => {
      alert("Hello from Child!");
    },
    value: "child",
  }));
});

const Imparative = () => {
  const myRef = useRef();

  return (
    <div>
      <button onClick={() => myRef.current.alertMessage()}>click</button>
      {myRef.current?.value && <p>{myRef.current?.value}</p>}
      <Child ref={myRef} />
    </div>
  );
};

export default Imparative;
