"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setCount(10);
  }, []);

  return (
    <div>
      About page, {pathname}
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </div>
  );
}

/*

Because static doesn’t mean it’s not CSR.
In Next.js App Router, static just means:

The route (e.g., /about) is statically generated at build time (basic HTML shell)

No server-side fetches or dynamic generation are involved

It will still be hydrated in the browser with full interactivity


*/
