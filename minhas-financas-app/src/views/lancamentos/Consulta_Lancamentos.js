import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
    lancamentos: [],
  };

  constructor() {
    super();
    this.service = new LancamentoService();
  }

  buscar = () => {
    const usuarioLogado = LocalStorageService.obetItem("_usuario_logado");

    const lancamentoFiltro = {
      ano: this.state.ano,
      mes: this.state.mes,
      tipo: this.state.tipo,
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
    const meses = [
      {
        label: "Selecione. . .",
        value: "",
      },
      {
        label: "Janeiro",
        value: 1,
      },
      {
        label: "Fevereiro",
        value: 2,
      },
      {
        label: "Março",
        value: 3,
      },
      {
        label: "Abril",
        value: 4,
      },
      {
        label: "Maio",
        value: 5,
      },
      {
        label: "Junho",
        value: 6,
      },
      {
        label: "Julho",
        value: 7,
      },
      {
        label: "Agosto",
        value: 8,
      },
      {
        label: "Setembro",
        value: 9,
      },
      {
        label: "Outubro",
        value: 10,
      },
      {
        label: "Novembro",
        value: 11,
      },
      {
        label: "Dezembro",
        value: 12,
      },
    ];

    const tipos = [
      { label: "Selecione . . .", value: "" },
      { label: "Despesa", value: "DESPESA" },
      { label: "Receita", value: "RECEITA" },
    ];

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
                <LancamentosLabel lancamentos={this.state.lancamentos} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default withRouter(Consulta_Lancamentos);
