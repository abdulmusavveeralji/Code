import React, { Component } from "react";

class ChildComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <hr />
        <h2>Child Component</h2>
        <button onClick={() => this.props.greetHandler('Child')}>Greet Parent</button>
      </div>
    );
  }
}

export default ChildComponent;
