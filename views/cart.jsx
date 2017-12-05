var React = require("react");

class Cart extends React.Component {
  render() {
    return <div>Hello, {this.props.cartName}</div>;
  }
}

module.exports = Cart;
