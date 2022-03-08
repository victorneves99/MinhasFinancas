import React, { Component } from "react";
import "bootswatch/dist/lux/bootstrap.css";
import Login from "./views/login";
import './custom.css'
export default class App extends Component {
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}
