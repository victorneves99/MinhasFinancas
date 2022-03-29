import React, { Component } from "react";

import Card from "../../components/Card";

import { withRouter } from "react-router-dom";
import FormGroup from "../../components/Form-Group";
import SelectMenu from "../../components/SelectMenu";
import LancamentoService from "../../app/services/lancamentoService";

class CadastroLancamentos extends Component {
  state = {
    id: null,
    descricao: "",
    valor: "",
    mes: "",
    ano: "",
    tipo: "",
    status: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  };

  submit = () => {
    console.log(this.state);
  };

  constructor() {
    super();
    this.service = new LancamentoService();
  }

  render() {
    const tipos = this.service.obterListaTipos();
    const meses = this.service.obterListaMeses();

    return (
      <div>
        <Card title="Cadastro de Lancamentos">
          <div className="row">
            <div className="col-md-12">
              <FormGroup id="inputDescicao" label="Descricao : *">
                <input
                  type="text"
                  name="descricao"
                  onChange={this.handleChange}
                  className="form-control"
                  id="inputDescricao"
                  value={this.state.descricao}
                />
              </FormGroup>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <FormGroup id="inputAno" label="Ano: *">
                <input
                  type="text"
                  value={this.state.ano}
                  name="ano"
                  onChange={this.handleChange}
                  className="form-control"
                  id="inputAno"
                />
              </FormGroup>
            </div>
            <div className="col-md-6">
              <FormGroup id="inputMes" label="Mes: *">
                <SelectMenu
                  id="inputMes"
                  name="mes"
                  value={this.state.mes}
                  onChange={this.handleChange}
                  lista={meses}
                  className="form-control"
                />
              </FormGroup>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <FormGroup id="inputValor" label="Valor: *">
                <input
                  type="text"
                  id="inputValor"
                  name="valor"
                  value={this.state.valor}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </FormGroup>
            </div>
            <div className="col-md-4">
              <FormGroup id="inputTipo" label="Tipo: *">
                <SelectMenu
                  id="inputTipo"
                  name="tipo"
                  value={this.state.tipo}
                  onChange={this.handleChange}
                  lista={tipos}
                  className="form-control"
                />
              </FormGroup>
            </div>
            <div className="col-md-4">
              <FormGroup id="inputStatus" label="Status: ">
                <input type="text" className="form-control" disabled />
              </FormGroup>
            </div>
          </div>
          <div className="row  ">
            <div className="col-md-8 mt-5 border ">
              <button onClick={this.submit} className="btn btn-success">
                Salvar
              </button>
              <button className="btn btn-danger">Cancelar</button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default withRouter(CadastroLancamentos);
