import React, {
	useState,
	useEffect,
	// useRef,
	useId,
	useMemo,
	useCallback,
} from "react";

function Name() {
	const [name, setName] = useState("React");
	const idName = useId(); // generate dynamic id, even for same component

	useEffect(() => {
		console.log("Name updated to:", name);
	}, [name]);

	return (
		<div>
			<p id={idName}>Name: {name}</p>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				aria-describedby={idName}
			/>
		</div>
	);
}

const Example = React.memo(({ handleClick, memoState }) => {
	console.log("rendered Example component");
	return <button onClick={handleClick}>memo value - {memoState}</button>;
});

export default function FunctionLifecycle() {
	// const timer = useRef(0);
	// Persists beween 2 renders, without causing re-renders
	// useEffect(() => {
	// 	console.log("Mounted");
	// 	const inter = setInterval(() => {
	// 		console.log("Timer -", ++timer.current);
	// 	}, 1000);

	// 	return () => {
	// 		clearInterval(inter);
	// 		console.log("Unmounted");
	// 	};
	// }, []);

	const [count, setCount] = useState(0);
	const [state, setState] = useState(0);

	const memoState = useMemo(() => {
		console.log("memo", state);
		return state * 1000;
	}, [state]);

	const handleClick = useCallback(() => {
		setState((s) => s + 1);
		console.log("changed", state);
	}, [state]);

	return (
		<div style={{ padding: "1em" }}>
			<button onClick={() => setCount((c) => c + 1)}>count - {count}</button>
			<Example handleClick={handleClick} memoState={memoState} />
			<Name />
			<Name />
		</div>
	);
}
