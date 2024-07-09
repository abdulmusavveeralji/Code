import React, { Component } from "react";
import ParentComp from "./ParentComp";

class ChildComp extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.inputRef}
          placeholder="Child Component Ref"
        />
      </div>
    );
  }
}

export default ChildComp;
