import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick(counter) {
    this.setState({
      count: counter + 1,
    });
  }

  render() {
    return (
      <div id="mainArea">
        <p>
          button count: <span>{this.state.count}</span>
        </p>
        <button
          id="mainButton"
          onClick={() => this.handleClick(this.state.count)}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default Counter;
