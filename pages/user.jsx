import React from "react";

class User extends React.Component {
  render() {
    return <div>Hello, {this.props.userName}</div>;
  }
}

export default User;
