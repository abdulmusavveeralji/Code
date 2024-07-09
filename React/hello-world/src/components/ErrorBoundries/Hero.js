import React, { Component } from "react";

class Hero extends Component {
  render() {
    if (this.props.heroName === "Joker") {
      throw new Error("Joker is not a Hero");
    }
    return <div>{this.props.heroName} is a Hero</div>;
  }
}

export default Hero;
