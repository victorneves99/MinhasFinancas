import React, { Component } from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";

export default class CadastroUsuario extends Component {
  state = {
    nome: "",
    email: "",
    senha: "",
    senhaRepeticao: "",
  };

  cadastrar = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className="container">
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
                  <button type="button" className="btn btn-danger">
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}