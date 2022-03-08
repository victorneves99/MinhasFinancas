import React, { Component } from "react";

export default class App extends Component {
  state = {
    nome: "",
    numero1: null,
    numero2: null,
    resultado: null,
  };


  soma = () => {

    const resultado = parseInt(this.state.numero1) + parseInt(this.state.numero2)

    this.setState({resultado: resultado})

  }

  render() {
    return (
      <div>
        <h1>NUMERO 1</h1>
        <input
          type="text"
          value={this.state.numero1}
          onChange={(e) => this.setState({ numero1: e.target.value })}
        />
        <br />
        <h1>NUMERO 2</h1>
        <input
          type="text"
          value={this.state.numero2}
          onChange={(e) => this.setState({ numero2: e.target.value })}
        />
        <br />
        <button
          onClick={this.soma}
        >
          SOMAR
        </button>
        <br />
        <p>A SOMA DOS DOIS VALORES É : </p> {this.state.resultado}
      </div>
    );
  }
}
