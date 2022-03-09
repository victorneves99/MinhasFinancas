import React, { Component } from "react";
import "bootswatch/dist/lux/bootstrap.css";
import Login from "../views/Login";
import "../custom.css";
import Rotas from "./Rotas";
import CadastroUsuario from "../views/CadastroUsuario";
import NavBar from "../components/NavBar";

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="container">
          <Rotas />
        </div>
      </>
    );
  }
}
