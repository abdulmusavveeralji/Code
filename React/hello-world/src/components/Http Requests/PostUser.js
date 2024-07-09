import axios from "axios";
import React, { Component } from "react";

class PostUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      username: "",
      email: "",
    };
  }

  clickHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", this.state)
      .then((response) => {
        console.log("Post Respose", response);
      })
      .catch((error) => {
        console.log("Post Error", error);
      });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name : </label>
            <input type="text" name="name" onChange={this.clickHandler} />
          </div>

          <div>
            <label>Username : </label>
            <input type="text" name="username" onChange={this.clickHandler} />
          </div>

          <div>
            <label>Email : </label>
            <input type="text" name="email" onChange={this.clickHandler} />
          </div>

          <button type="submit">Create User</button>
        </form>
      </div>
    );
  }
}

export default PostUser;
