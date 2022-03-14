import React, { Component } from "react";
import Card from "../components/Card";
import FormGroup from "../components/Form-Group";
import { withRouter } from "react-router-dom";
import UsuarioService from "../app/services/usuarioService";
import { mostrarErro, mostrarSucesso } from "../components/Toastr";

class CadastroUsuario extends Component {
  state = {
    nome: "",
    email: "",
    senha: "",
    senhaRepeticao: "",
  };

  constructor() {
    super();
    this.service = new UsuarioService();
  }

  validar() {
    const msg = [];

    if (!this.state.nome) {
      msg.push("O campo nome é obrigatorio.");
    }

    if (!this.state.email) {
      msg.push("O campo Email é obrigatorio.");
    } else if (!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
      msg.push("Informe um Email valido!");
    }

    if (!this.state.senhaRepeticao) {
      msg.push("Digite a senha de validação!");
    } else if (this.state.senha !== this.state.senhaRepeticao) {
      msg.push("As senhas devem ser iguais!");
    }

    if (!this.state.senha || this.state.senha === "") {
      msg.push("Digite a senha!");
    }

    return msg;
  }

  cadastrar = () => {
    const msgs = this.validar();

    if (msgs && msgs.length > 0) {
      msgs.forEach((msg, index) => {
        mostrarErro(msg);
      });

      return false;
    }

    const usuario = {
      nome: this.state.nome,
      email: this.state.email,
      senha: this.state.senha,
    };

    this.service
      .salvar(usuario)
      .then((resposta) => {
        mostrarSucesso("Usuario cadastrado com sucesso ! Faça o login para acessar o sistema.");

        this.props.history.push("/login");
      })
      .catch((error) => {
        mostrarErro(error.resposta.data);
      });
  };

  cancelar = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        <Card title="Cadastro de Usuarios">
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-component">
                <FormGroup label="Nome:*" htmlFor="inputNome">
                  <input
                    className="form-control"
                    type="text"
                    name="nome"
                    onChange={(e) => this.setState({ nome: e.target.value })}
                  ></input>
                </FormGroup>
                <br />
                <FormGroup label="Email:*" htmlFor="inputEmail">
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="inputEmail"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label="Senha:*" htmlFor="inputSenha">
                  <input
                    className="form-control"
                    type="password"
                    id="senha"
                    name="inputSenha"
                    onChange={(e) => this.setState({ senha: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label="Validar Senha:*" htmlFor="inputRepitaSenha">
                  <input
                    className="form-control"
                    type="password"
                    id="repitaSenha"
                    name="inputRepitaSenha"
                    onChange={(e) => this.setState({ senhaRepeticao: e.target.value })}
                  />
                </FormGroup>
                <br />
                <button onClick={this.cadastrar} type="button" className="btn btn-success">
                  Salvar
                </button>
                <button type="button" className="btn btn-danger" onClick={this.cancelar}>
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default withRouter(CadastroUsuario);
