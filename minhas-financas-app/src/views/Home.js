import React, { Component } from "react";
import LocalStorageService from "../app/services/localstorageService";
import UsuarioService from "../app/services/usuarioService";
export class Home extends Component {
  state = {
    saldo: 0,
  };

  constructor() {
    super();
    this.usuarioService = new UsuarioService();
  }

  componentDidMount() {
    const usuarioLogado = LocalStorageService.obetItem("_usuario_logado");

    console.log(usuarioLogado);

    this.usuarioService
      .obterSaldoPorUsuario(usuarioLogado.id)
      .then((response) => {
        this.setState({ saldo: response.data });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">Bem vindo!</h1>
          <p className="lead">Esse é seu sistema de finanças.</p>
          <p className="lead">Seu saldo para o mês atual é de R$ {this.state.saldo}</p>
          <hr className="my-4" />
          <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#/cadastro-usuarios" role="button">
              <i className="fa fa-users"></i> Cadastrar Usuário
            </a>
            <a className="btn btn-danger btn-lg" href="https://bootswatch.com/flatly/#" role="button">
              <i className="fa fa-users"></i> Cadastrar Lançamento
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
