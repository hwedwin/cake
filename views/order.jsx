var React = require("react");

class Order extends React.Component {
  render() {
    return <div>Hello, {this.props.orderName}</div>;
  }
}

module.exports = Order;
