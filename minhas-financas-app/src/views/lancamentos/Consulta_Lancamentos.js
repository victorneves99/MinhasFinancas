import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as messages from "../../components/Toastr";
import LancamentoService from "../../app/services/lancamentoService";
import LocalStorageService from "../../app/services/localstorageService";
import Card from "../../components/Card";
import FormGroup from "../../components/Form-Group";
import SelectMenu from "../../components/SelectMenu";
import LancamentosLabel from "./LancamentosLabel";
class Consulta_Lancamentos extends Component {
  state = {
    ano: "",
    mes: "",
    tipo: "",
    descricao: "",
    lancamentos: [],
  };

  constructor() {
    super();
    this.service = new LancamentoService();
  }

  editar = (id) => {};

  deletar = (lancamento) => {
    console.log("deletando");

    this.service
      .deletar(lancamento.id)
      .then((resposta) => {
        const lancamentos = this.state.lancamentos;
        const index = lancamentos.indexOf(lancamento);
        lancamentos.splice(index, 1);
        this.setState(lancamentos);
        messages.mostrarSucesso("LAncamento deletado com sucesso!");
      })
      .catch((e) => {
        messages.mostrarErro("Ocorreu um erro ao deletar o Lançamento!");
      });
  };

  buscar = () => {
    if (!this.state.ano) {
      messages.mostrarErro(`O campo ano precisa estar preenchido!`);
      return false;
    }

    const usuarioLogado = LocalStorageService.obetItem("_usuario_logado");

    const lancamentoFiltro = {
      ano: this.state.ano,
      mes: this.state.mes,
      tipo: this.state.tipo,
      descricao: this.state.descricao,
      usuario: usuarioLogado.id,
    };

    this.service
      .consultar(lancamentoFiltro)
      .then((resposta) => {
        this.setState({ lancamentos: resposta.data });
      })
      .catch((error) => {
        alert(error);
      });
  };

  render() {
    const meses = this.service.obterListaMeses();

    const tipos = this.service.obterListaTipos();

    return (
      <div>
        <Card title="Buscar Lancamentos">
          <div className="row">
            <div className="col-md-6">
              <div className="bs-component">
                <FormGroup label="Ano: *" htmlFor="inputAno">
                  <br />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    id="inputAno"
                    value={this.state.ano}
                    onChange={(e) => this.setState({ ano: e.target.value })}
                    placeholder="Digite o Ano"
                  />
                </FormGroup>
                <br />
                <FormGroup label="Mes :" htmlFor="inputMes">
                  <br />
                  <br />
                  <SelectMenu
                    lista={meses}
                    className="form-control"
                    value={this.state.mes}
                    onChange={(e) => this.setState({ mes: e.target.value })}
                  />
                </FormGroup>
                <br />
                <FormGroup label="Descricao: *" htmlFor="inputDescricao">
                  <br />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    id="inputDescricao"
                    value={this.state.descricao}
                    onChange={(e) => this.setState({ descricao: e.target.value })}
                    placeholder="Digite a Descrição"
                  />
                </FormGroup>
                <br />
                <FormGroup label="Tipo :" htmlFor="inputTipo">
                  <br />
                  <br />
                  <SelectMenu
                    lista={tipos}
                    className="form-control"
                    value={this.state.tipo}
                    onChange={(e) => this.setState({ tipo: e.target.value })}
                  />
                </FormGroup>
                <br />
                <button type="button" className="btn btn-success" onClick={this.buscar}>
                  Buscar
                </button>
                <button type="button" className="btn btn-danger">
                  Cadastrar
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <br />
              <div className="bs-component">
                <LancamentosLabel
                  lancamentos={this.state.lancamentos}
                  deleteAction={this.deletar}
                  editarAction={this.editar}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default withRouter(Consulta_Lancamentos);
