import React, { Component } from "react";
import { ContextConsumer } from "./UserContext";

class ComponentF extends Component {
  render() {
    return (
      <ContextConsumer>
        {(username) => {
          return (
            <div>
              <h1>Component F</h1>
              <p>Value: {username}</p>
            </div>
          );
        }}
      </ContextConsumer>
    );
  }
}

export default ComponentF;
