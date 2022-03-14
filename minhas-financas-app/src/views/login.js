import React, { Component } from "react";
import Card from "../components/Card";
import FormGroup from "../components/Form-Group";
import { withRouter } from "react-router-dom";
import UsuarioService from "../app/services/usuarioService";
import LocalStorageService from "../app/services/localstorageService";
import { mostrarErro } from "../components/Toastr";
class Login extends Component {
  state = {
    email: "",
    senha: "",
  };

  constructor() {
    super();
    this.service = new UsuarioService();
  }

  entrar = () => {
    this.service
      .autenticar({
        email: this.state.email,
        senha: this.state.senha,
      })
      .then((response) => {
        LocalStorageService.additem("_usuario_logado", response.data);
        this.props.history.push("/home");
      })
      .catch((erro) => {
        mostrarErro(erro.response.data);
      });
  };

  preparaCadastrar = () => {
    this.props.history.push("/cadastro-usuarios");
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-6" style={{ position: "relative", left: "300px" }}>
          <div className="bs-docs-section">
            <Card title="Login">
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">
                    <fieldset>
                      <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                        <input
                          value={this.state.email}
                          onChange={(e) => this.setState({ email: e.target.value })}
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Digite o Email"
                        />
                      </FormGroup>
                      <FormGroup label="Senha" htmlFor="">
                        <input
                          value={this.state.senha}
                          onChange={(e) => this.setState({ senha: e.target.value })}
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                      </FormGroup>
                      <br />
                      <button onClick={this.entrar} className="btn btn-success">
                        Entrar
                      </button>
                      <button className="btn btn-danger" onClick={this.preparaCadastrar}>
                        Cadastrar
                      </button>
                    </fieldset>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
