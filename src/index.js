import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./components/header";

import "./styles/styles.css";

import JSON from "./db.json";

class App extends Component {
  constructor(){
    super()

    this.state = {
      news: JSON
    }
  }
  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
