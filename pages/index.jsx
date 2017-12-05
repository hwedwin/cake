import React from "react";
import { Header, Footer, Content } from "../components";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content name={this.props.name} />
        <Footer />
      </div>
    );
  }
}

module.exports = Home;
