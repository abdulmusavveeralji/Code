import React, { Component } from "react";
import ComponentE from "./ComponentE";
import { ContextProvider } from "./UserContext";

class ComponentC extends Component {
  render() {
    return (
      <ContextProvider value="Alji">
        <ComponentE />
      </ContextProvider>
    );
  }
}

export default ComponentC;
