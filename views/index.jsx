var React = require("react");

class Home extends React.Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}

module.exports = Home;
