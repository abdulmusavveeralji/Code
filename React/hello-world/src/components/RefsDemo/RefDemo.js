import React, { Component } from "react";
import ParentComp from "./ParentComp";

class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }
  render() {
    return (
      <div>
        <ParentComp />
        <input type="text" ref={this.inputRef} placeholder="Ref Demo Component" />
      </div>
    );
  }
}

export default RefDemo;
