import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }

  clickHandler() {
    console.log(this);
    this.setState({
      message: "Good Bye",
    });
  }

  // Approach 1-2 is not recommended,, should go with approach 3/4
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* Approach 1 */}
        <button onClick={this.clickHandler.bind(this)}>Approach 1</button>
        {/* Approach 2 */}
        <button onClick={() => this.clickHandler()}>Approach 2</button>
        {/* Approach 3 Binding clickhandler in the constructor */}
      </div>
    );
  }
}

export default EventBind;
