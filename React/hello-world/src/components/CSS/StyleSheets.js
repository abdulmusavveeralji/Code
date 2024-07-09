import React, { Component } from "react";
import "./StyleSheets.css";

class StyleSheets extends Component {
  render() {
    const isPrimary = this.props.isPrimary ? "heading" : "";
    return <h1 className={`${isPrimary} font`}>StyleSheets</h1>;
  }
}

export default StyleSheets;
