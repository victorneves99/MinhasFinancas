import axios from "axios";
import React, { Component } from "react";
export class Home extends Component {
  state = {
    saldo: 0,
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/usuario/1/saldo")
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
