import React, { Component } from "react";

class FragmentDemo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Fragment Demo</h1>
        <p>this is a fragment demo</p>
      </React.Fragment>
    );
  }
}

export default FragmentDemo;
