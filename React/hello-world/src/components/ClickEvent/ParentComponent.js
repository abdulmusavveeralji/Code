import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import Greet from "../Great";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    alert(`hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <hr />
        <h1>Parent Component</h1>
        <ChildComponent greetHandler={this.greetParent} />
        <hr />
      </div>
    );
  }
}

export default ParentComponent;
