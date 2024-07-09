import axios from "axios";
import { Component } from "react";

class GetList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: null,
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        this.setState({ data: response.data });
        this.setState({ error: null });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: "Something went wrong" });
      });
  }
  render() {
    return (
      <div>
        <h1>getRequest</h1>
        {this.state.data.length
          ? this.state.data.map((user) => <p key={user.id}>{user.username}</p>)
          : null}

        {this.state.error ? <h1>{this.state.error}</h1> : null}
      </div>
    );
  }
}
export default GetList;
