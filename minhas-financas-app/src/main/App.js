import React, { Component } from "react";
import "bootswatch/dist/lux/bootstrap.css";
import Login from "../views/login";
import "../custom.css";
import Rotas from "./rotas";
import CadastroUsuario from "../views/cadastroUsuario";
export default class App extends Component {
  render() {
    return (
      <div>
        <Rotas />
      </div>
    );
  }
}
