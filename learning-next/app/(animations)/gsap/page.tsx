"use client";

import { useState } from "react";
import GsapBasics from "../../../components/GsapBasics";
import GsapScrollAndContext from "../../../components/GsapScrollAndContext";
import GsapText from "../../../components/GsapText";
import GsapTimelinesAndExtras from "../../../components/GsapTimelinesAndExtras";

export default function Page() {
  const [show, setShow] = useState(0);

  return (
    <>
      <button onClick={() => setShow(0)}>Basics</button>
      <button onClick={() => setShow(1)}>Scroll and Context</button>
      <button onClick={() => setShow(2)}>Texts</button>
      <button onClick={() => setShow(3)}>Timelines</button>
      {show == 0 && <GsapBasics />}
      {show == 1 && <GsapScrollAndContext />}
      {show == 2 && <GsapText />}
      {show == 3 && <GsapTimelinesAndExtras />}
    </>
  );
}
