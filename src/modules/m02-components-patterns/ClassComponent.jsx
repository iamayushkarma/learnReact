import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { heading } = this.props;
    const { count } = this.state;

    const increseCount = () => {
      this.setState({ count: count + 1 });
    };
    const decreseCount = () => {
      this.setState({ count: count - 1 });
    };
    return (
      <div>
        <div>{heading}</div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button onClick={() => decreseCount()}>-</button>
          <div>{count}</div>
          <button onClick={() => increseCount()}>+</button>
        </div>
      </div>
    );
  }
}
export default ClassComponent;
