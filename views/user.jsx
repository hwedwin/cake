var React = require("react");

class User extends React.Component {
  render() {
    return <div>Hello, {this.props.userName}</div>;
  }
}

module.exports = User;
