import React, { Component } from "react";

class Company extends Component {
  render() {
    return (
      <div>
        <CompanyAbout
          username={this.props.username}
          cnpj={this.props.cnpj}
          saldo={this.props.saldo}
          telefone={this.props.telefone}
          email={this.props.email}
        />
        <CompanyAbout />
      </div>
    );
  }
}

class CompanyAbout extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.username} </h1>
        <h2>
          Your cpnj and : {this.props.cpnj} <br /> your balance and : {this.props.balance}
        </h2>
        <h3>
        Monthly balance Company: {this.props.monthlyBalance} <br /> Ceo of Company: {this.props.ceoCompany}
        </h3>
        <h3>
          telephone : {this.props.telephone} <br /> Email : {this.props.email}
        </h3>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <CompanyAbout
        username="Bank Mj"
        cpnj="00.000.000/0001-22"
        balance="$1,000,000"
        monthlyBalance="$250,000"
        ceoCompany="Christian medeiros"
        telephone="3333-4444"
        email="brankMj@networkmj.com"
      />

      <CompanyAbout
        username="Library Mj"
        cpnj="00.000.000/0001-33"
        balance="$2,000,000"
        monthlyBalance="$150,000"
        ceoCompany="Maria eduarda"
        telephone="5555-5555"
        email="libraryMj@networkmj.com"
      />
    </div>
  );
}

export default App;
