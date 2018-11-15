import React, { Component } from "react";
import Members from "./Members";
import MemberDetails from "./MemberDetails";
import { Input } from "rebass";
import { Router, Link } from "@reach/router";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input name="Hi" />
        <h1>OKOKOKO</h1>
        <Members name="ibm" />
        <Router>
          <MemberDetails path="member/:login" />
        </Router>
      </div>
    );
  }
}

export default App;
