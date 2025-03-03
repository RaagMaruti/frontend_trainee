import React, { useActionState } from "react";

async function incrementCounter(prevCount) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return prevCount + 1;
}

export default function Counter() {
  const [count, dispatch, isPending] = useActionState(incrementCounter, 0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch()} disabled={isPending}>
        {isPending ? "Updating..." : "Increment"}
      </button>
    </div>
  );
}

// we can do this all with just useState, useEffect.
// it is mostly used on "use server" components
