import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: "React",
    };
  }

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  commentChangeHandler = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  topicChangeHandler = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  onSubmit = (event) => {
    const { username, comment, topic } = this.state;
    alert(`${username} ${comment} ${topic}`);

    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>Username : </label>
          <input
            id="username"
            value={this.state.username}
            onChange={this.usernameChangeHandler}
          />
        </div>
        <div>
          <label>Comment : </label>
          <input
            id="comment"
            value={this.state.comment}
            onChange={this.commentChangeHandler}
          />
        </div>

        <div>
          <label>Topic : </label>
          <select value={this.state.topic} onChange={this.topicChangeHandler}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
