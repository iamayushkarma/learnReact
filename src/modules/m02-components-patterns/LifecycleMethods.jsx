import React, { Component } from "react";

class LifeCycleMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("Component mounted");
  }
  increment() {
    this.setState((prev) => ({ count: prev.count + 1 }));
  }
  decrement = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h2>Life Cycle Methods</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button onClick={this.decrement}>-</button>
          <div>{count}</div>
          <button onClick={this.increment.bind(this)}>+</button>
        </div>
      </div>
    );
  }
}

export default LifeCycleMethods;
