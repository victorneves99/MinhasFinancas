import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import CadastroUsuario from "../views/CadastroUsuario";
import Consulta_Lancamentos from "../views/Consulta_Lancamentos";
import Home from "../views/Home";
import Login from "../views/Login";

export default function Rotas() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/cadastro-usuarios" component={CadastroUsuario}></Route>
          <Route path="/consulta-lancamentos" component={Consulta_Lancamentos}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}
