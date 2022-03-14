import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Card from "../../components/Card";
import FormGroup from "../../components/Form-Group";
import SelectMenu from "../../components/SelectMenu";
import LancamentosLabel from "./LancamentosLabel";
class Consulta_Lancamentos extends Component {
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

    const lancamentos = [{ id: 1, descricao: "Salario", valor: 5000, mes: 1, tipo: "Receita", status: "Efetivado" }];

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
                    aria-describedby="anoHelp"
                    placeholder="Digite o Ano"
                  />
                </FormGroup>
                <br />
                <FormGroup label="Mes :" htmlFor="inputMes">
                  <br />
                  <br />
                  <SelectMenu lista={meses} className="form-control" />
                </FormGroup>
                <br />
                <FormGroup label="Tipo :" htmlFor="inputTipo">
                  <br />
                  <br />
                  <SelectMenu lista={tipos} className="form-control" />
                </FormGroup>
                <br />
                <button type="button" className="btn btn-success">
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
                <LancamentosLabel lancamentos={lancamentos} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default withRouter(Consulta_Lancamentos);
