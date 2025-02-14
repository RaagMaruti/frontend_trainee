import React, { Component } from "react";

class ClassLifecycle extends Component {
  count = 0;

  constructor(props) {
    console.log("Constructor lifecycle - 1", props);
    super(props);
    this.count++;
    this.state = {
      count: 0,
      name: "joshi",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(
      "getDerivedStateFromProps - 2, 5",
      state,
      props
    );
    return { name: props.name };
    // returning updated state
    // return null if not updating state
  }

  componentDidMount() {
    console.log("componentDidMount - 4");
  }

  shouldComponentUpdate(props, state) {
    console.log("shouldComponentUpdate - 6", state);
    if (state.count < 4) {
      return true;
    }
    return false;
    // only rendering stops, states still gets updated
  }

  getSnapshotBeforeUpdate(props, state) {
    console.log(
      "getSnapshotBeforeUpdate - 8",
      props,
      state
    );
    return null;
  }

  componentDidUpdate(props, state) {
    console.log("componentDidUpdate - 9", props, state);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount - 10");
  }

  // componentDidCatch(error, info) {
  // 	console.log("componentDidCatch: Caught an error", error, info);
  // }

  handleIncrement = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render() {
    console.log("Rendering: - 3, 7");
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
    console.log("Constructor Caller - 0");
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
