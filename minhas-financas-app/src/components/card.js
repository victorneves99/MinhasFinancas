import React, { Component } from "react";

export default class card extends Component {
  render() {
    return (
      <div className="card mb-3">
        <h3 className="card-header">{this.props.title}</h3>
        <div className="card-body">{this.props.children}</div>
      </div>
    );
  }
}
