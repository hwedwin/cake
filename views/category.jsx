var React = require("react");

class Category extends React.Component {
  render() {
    return <div>Hello, {this.props.categoryName}</div>;
  }
}

module.exports = Category;
