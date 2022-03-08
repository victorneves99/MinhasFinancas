import React, { Component } from "react";
import Card from "../components/card";

export default class login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-md-6"
            style={{ position: "relative", left: "300px" }}
          >
            <div className="bs-docs-section">
              <Card title="Login" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
