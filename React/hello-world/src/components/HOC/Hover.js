import React, { Component } from "react";
import updatedComponent from "./withCounter";

class Hover extends Component {
  render() {
    const { count, increamentCount } = this.props;
    console.log(this);
    return <h1 onMouseOver={increamentCount}>Hovered {count} Times</h1>;
  }
}
export default updatedComponent(Hover);
