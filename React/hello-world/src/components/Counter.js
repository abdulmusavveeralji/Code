import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment() {
    this.setState(
      (prevState, props) => ({
        counter: prevState.counter + 1,
      }),
      () => console.log(this.state.counter)
    );
  }
  render() {
    return (
      <div>
        <h1>Count = {this.state.counter}</h1>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
