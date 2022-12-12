import React, { Component } from "react";

class Empresa extends Component {
  render() {
    return (
      <div>
        <EmpresaSobre
          username={this.props.username}
          cnpj={this.props.cnpj}
          saldo={this.props.saldo}
          telefone={this.props.telefone}
          email={this.props.email}
        />
        <EmpresaSobre />
      </div>
    );
  }
}

class EmpresaSobre extends Component {
  render() {
    return (
      <div>
        <h1>Olá {this.props.username} </h1>
        <h2>
          seu cpnj é : {this.props.cpnj} <br /> seu saldo é : {this.props.saldo}
        </h2>
        <h3>
          Renda mensal Empresa: {this.props.rendaMensal} <br /> Dono da empresa
          : {this.props.ceoEmpresa}
        </h3>
        <h3>
          Telefone : {this.props.telefone} <br /> Email : {this.props.email}
        </h3>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <EmpresaSobre
        username="Bank Mj"
        cpnj="000.000.000.0001"
        saldo="$1,000,000"
        rendaMensal="$250,000"
        ceoEmpresa="Christian medeiros"
        telefone="3333-4444"
        email="brankMj@redemedeiros.com"
      />

      <EmpresaSobre
        username="Library Mj"
        cpnj="000.000.000.0002"
        saldo="$2,000,000"
        rendaMensal="$150,000"
        ceoEmpresa="Maria eduarda"
        telefone="5555-5555"
        email="libraryMj@redemedeiros.com"
      />
    </div>
  );
}

export default App;
