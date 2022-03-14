import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Card from "../components/Card";
import FormGroup from "../components/Form-Group";
import SelectMenu from "../components/SelectMenu";

class Consulta_Lancamentos extends Component {
  render() {
    const lista = [
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
        label: "Dezembor",
        value: 12,
      },
    ];

    return (
      <div>
        <Card title="Busca Lancamentos">
          <div className="row">
            <div className="col-md-6">
              <div className="bs-component">
                <FormGroup label="Ano: *" htmlFor="inputAno">
                  <input
                    type="text"
                    className="form-control"
                    id="inputAno"
                    aria-describedby="anoHelp"
                    placeholder="Digite o Ano"
                  />
                </FormGroup>
                <FormGroup label="Mes: *" htmlFor="inputMes">
                  <SelectMenu lista={lista} className="form-control" />
                </FormGroup>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default withRouter(Consulta_Lancamentos);
