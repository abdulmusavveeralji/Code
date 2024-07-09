import React, { Component } from "react";
import ChildComp from "./ChildComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  focusChildComp = () => {
    this.componentRef.current.focusInput();
  };
  render() {
    return (
      <div>
        <ChildComp ref={this.componentRef} />
        <button onClick={this.focusChildComp}>Focus on Child Input</button>
      </div>
    );
  }
}

export default ParentComp;
