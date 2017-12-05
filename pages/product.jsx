import React from "react";

class Product extends React.Component {
  render() {
    return <div>Hello, {this.props.productName}</div>;
  }
}

export default Product;
