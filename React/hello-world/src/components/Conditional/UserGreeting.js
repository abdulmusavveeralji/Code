import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: true,
    };
  }

  render() {
    return this.state.isLogged ? (
      <div>Welcome Abdul Musavveer Alji</div>
    ) : (
      <div>Welcome guest</div>
    );
  }
}

export default UserGreeting;
