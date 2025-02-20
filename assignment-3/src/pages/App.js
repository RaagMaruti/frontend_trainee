import { useEffect } from "react";

import useRender from "./useRender";

export default function App() {
  const render = useRender(<div>hello</div>);

  return <>{render}</>;
}
