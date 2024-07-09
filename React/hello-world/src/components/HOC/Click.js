import React, { Component } from "react";
import updatedComponent from "./withCounter";

class Click extends Component {
  render() {
    const { count, increamentCount } = this.props;
    return <button onClick={increamentCount}>Clicked {count} Times</button>;
  }
}

export default updatedComponent(Click);
