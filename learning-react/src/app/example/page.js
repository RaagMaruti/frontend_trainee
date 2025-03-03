import React, { useState, useMemo, useCallback } from "react";

// Child component (memoized to prevent unnecessary renders)
const ThemeButton = React.memo(({ toggleTheme }) => {
	console.log("ThemeButton re-rendered");
	return <button onClick={toggleTheme}>Toggle Theme</button>;
});

const Example = () => {
	const [query, setQuery] = useState("");
	const items = ["raag", "joshi", "maruti"];
	const [darkMode, setDarkMode] = useState(false);

	// only recalculated when 'query' change
	const filteredItems = useMemo(() => {
		console.log("Filtering items...");
		return items.filter((item, index) => index < 2);
	}, [query]);

	// memoizing function to prevent unnecessary re-renders of ThemeButton
	const toggleTheme = useCallback(() => {
		setDarkMode((prev) => !prev);
	}, []);

	return (
		<div
			style={{
				background: darkMode ? "#333" : "#fff",
				color: darkMode ? "#fff" : "#000",
				padding: "20px",
			}}
		>
			<h2>Search Items</h2>
			<input
				type="text"
				placeholder="Search..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<ul>
				{filteredItems.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>

			<ThemeButton toggleTheme={toggleTheme} />
		</div>
	);
};

export default Example;
