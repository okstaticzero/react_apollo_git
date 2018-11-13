import React, { Component } from "react";
import Organization from "./Organization";
import { Input } from "rebass";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input name="Hi" />
        <h1>OKOKOKO</h1>
        <Organization />
      </div>
    );
  }
}

export default App;
