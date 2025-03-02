import { useDebugValue, useState } from "react";

export default function useBold(jsx) {
  const [ui, setUi] = useState(jsx);
  useDebugValue(jsx ? "ui is there" : "no ui");

  return <b>{ui}</b>;
}
