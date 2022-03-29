import React, { Component } from "react";

import Card from "../../components/Card";

import { withRouter } from "react-router-dom";
import FormGroup from "../../components/Form-Group";
import SelectMenu from "../../components/SelectMenu";
import LancamentoService from "../../app/services/lancamentoService";

class CadastroLancamentos extends Component {
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
                <input type="text" className="form-control" id="inputDescricao" />
              </FormGroup>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <FormGroup id="inputAno" label="Ano: *">
                <input type="text" className="form-control" id="inputAno" />
              </FormGroup>
            </div>
            <div className="col-md-6">
              <FormGroup id="inputMes" label="Mes: *">
                <SelectMenu id="inputMes" lista={meses} className="form-control" />
              </FormGroup>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <FormGroup id="inputValor" label="Valor: *">
                <input type="text" id="inputValor" className="form-control" />
              </FormGroup>
            </div>
            <div className="col-md-4">
              <FormGroup id="inputTipo" label="Tipo: *">
                <SelectMenu id="inputTipo" lista={tipos} className="form-control" />
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
              <button className="btn btn-success">Salvar</button>
              <button className="btn btn-danger">Cancelar</button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default withRouter(CadastroLancamentos);
