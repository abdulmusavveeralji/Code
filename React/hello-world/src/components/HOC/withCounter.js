import React from "react";

const updatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    increamentCount = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          increamentCount={this.increamentCount}
        />
      );
    }
  }

  return NewComponent;
};

export default updatedComponent;
