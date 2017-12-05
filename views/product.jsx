var React = require("react");

class Product extends React.Component {
  render() {
    return <div>Hello, {this.props.productName}</div>;
  }
}

module.exports = Product;
