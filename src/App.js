import React, { Component, useState } from "react";
import Header from "./Header";
import Members from "./Members";
import MemberDetails from "./MemberDetails";
import { Router } from "@reach/router";
import "./App.css";

const App = () => {
  const [org, setOrg] = useState("reactjs");
  const updateOrg = val => {
    setOrg(val);
  };

  return (
    <div className="App">
      <Header updateOrg={updateOrg} />
      <h1>OKOKOKO</h1>
      <Members name={org} />
      <Router>
        <MemberDetails path="member/:login" />
      </Router>
    </div>
  );
};

export default App;
