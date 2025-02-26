import React, { useState, useDeferredValue, lazy, Suspense } from "react";
const List = lazy(() => import("./List"));

export default function Deferred() {
  const items = Array.from({ length: 7000 }, (_, i) => i);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query); // Deferred search query

  return (
		<div>
			<input
				type="text"
				placeholder="Type to search..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			{deferredQuery && (
				<Suspense fallback={<p>Loading ...</p>}>
					<List query={deferredQuery} items={items} />
				</Suspense>
			)}
		</div>
	);
}
