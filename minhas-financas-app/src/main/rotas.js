import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import CadastroUsuario from "../views/CadastroUsuario";
import Login from "../views/Login";

export default function Rotas() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/cadastro-usuarios" component={CadastroUsuario}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}
