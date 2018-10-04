import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">New York Times Search</h1>
      <p className="lead">Search and Save your favorite articles!</p>
      <span className="float-right">
        <a href="/">Search</a> | <a href="/saved">Saved</a>
      </span>
    </div>
  </div>
);

export default Jumbotron;
