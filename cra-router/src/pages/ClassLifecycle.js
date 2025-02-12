import React, { Component } from "react";

class ClassLifecycle extends Component {
	count = {
		constructor: 0,
		render: 0,
		derived: 0,
	};

	constructor(props) {
		console.log("Constructor lifecycle", props);
		super(props);
		this.count.constructor++;
		this.state = {
			count: 0,
			name: "joshi",
		};
	}

	static getDerivedStateFromProps(props, state) {
		console.log("getDerivedStateFromProps: Sync state with props", state);
		return null;
		// return { name: props.name };
		// returning updated state
		// return null if not updating state
	}

	componentDidMount() {
		console.log("componentDidMount: Yes it has been rendered");
	}

	shouldComponentUpdate(props, state) {
		console.log("shouldComponentUpdate", state);
		if (state.count < 4) {
			return true;
		}
		return false;
		// only rendering stops, states still gets updated
	}

	getSnapshotBeforeUpdate(props, state) {
		console.log(
			"getSnapshotBeforeUpdate: Snapshot before update",
			props,
			state
		);
		return null;
	}

	componentDidUpdate(props, state, snapshot) {
		console.log(
			"componentDidUpdate: Component updated",
			props,
			state,
			snapshot
		);
	}

	componentWillUnmount() {
		console.log("componentWillUnmount: Component is about to be removed");
	}

	// componentDidCatch(error, info) {
	// 	console.log("componentDidCatch: Caught an error", error, info);
	// }

	handleIncrement = () => {
		this.setState((state) => ({ count: state.count + 1 }));
	};

	render() {
		console.log("Rendering component");
		return (
			<div style={{ padding: "1em" }}>
				<h2>React Lifecycle Methods</h2>
				<p>Name: {this.state.name}</p>
				<p>Count: {this.state.count}</p>
				<button onClick={this.handleIncrement}>Increment</button>
			</div>
		);
	}
}

export default class Caller extends ClassLifecycle {
	constructor(props) {
		console.log("Constructor Caller");
		super(props);
	}

	render() {
		return <ClassLifecycle name="raag" />;
	}
}

// mounting
// 1 constructor()
// 2 getDerivedStateFromProps()
// 3 render()
// 4 componentDidMount()

// updating
// 1 getDerivedStateFromProps()
// 2 shouldComponentUpdate()
// 3 render()
// 4 getSnapshotBeforeUpdate()
// 5 componentDidUpdate()

// unmounting
// 1 componentWillUnmount()
