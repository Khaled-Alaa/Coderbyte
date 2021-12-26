import React, { useState } from "react";
import ReactDOM from "react-dom";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flag: false, value: "OFF" };
  }

  handleClick() {
    this.setState({
      flag: !this.state.flag,
      value: !this.state.flag ? "ON" : "OFF",
    });
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>{this.state.value}</button>
    );
  }
}

export default Toggle;
