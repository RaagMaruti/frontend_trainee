"use client";

import { useState } from "react";
import MotionAnimations from "../../../components/MotionAnimations";
import MotionComponents from "../../../components/MotionComponents";
import MotionHooks from "../../../components/MotionHooks";
import MotionValues from "../../../components/MotionValues";

export default function Page() {
  const [show, setShow] = useState(0);

  return (
    <>
      <button onClick={() => setShow(0)}>Animations</button>
      <button onClick={() => setShow(1)}>Components</button>
      <button onClick={() => setShow(2)}>Hooks</button>
      <button onClick={() => setShow(3)}>Values</button>
      {show == 0 && <MotionAnimations />}
      {show == 1 && <MotionComponents />}
      {show == 2 && <MotionHooks />}
      {show == 3 && <MotionValues />}
    </>
  );
}
