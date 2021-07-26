import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import Header from "../../components/Header";
import "./styles.css";



const CreateClient = () => {
  const history = useHistory();
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientNumberContact, setClientNumberContact] = useState("");
  const [clientCpf, setClientCpf] = useState("");
  const [clientCep, setClientCep] = useState("");
  const [clientEndereco, setClientEndereco] = useState("");
  const [clientNumber, setClientNumber] = useState("");
  const [clientCity, setClientCity] = useState("");
  const [clientState, setClientState] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
   const id = Math.floor(Math.random() * 1000);
    let dados = {nome:clientName, email: clientEmail, telefone: clientNumberContact, cpf: clientCpf, 
      cep: clientCep, endereo: clientEndereco, numero: clientNumber, cidade: clientCity, estado: clientState}
    let dadosCadastrados = localStorage.getItem('clientes')

    if (dadosCadastrados === null) {
      dadosCadastrados = []
    } else {
      dadosCadastrados = JSON.parse(dadosCadastrados)
    }
    dadosCadastrados.push(dados)

    localStorage.setItem('clientes', JSON.stringify(dadosCadastrados))

    swal({
      title: "Sucesso!",
      text: "Cliente cadastrado com suceso!",
      icon: "success",
    })
  }

  return (
    <>
      <div id="page-create-point">
        <Header/>
        <form onSubmit={handleSubmit}>
          <h1>
            Cadastro de
            <br /> Cliente
          </h1>

          <fieldset>
            <legend>
              <h2>Dados</h2>
            </legend>
            <div className="field">
              <label htmlFor="clientName">Nome</label>
              <input
                onChange={(e) => {
                  setClientName(e.target.value);
                }}
                value={clientName}
                type="text"
                name="clientName"
                id="clientName"
              />
            </div>
            <div className="field">
              <label htmlFor="clientEmail">Email</label>
              <input
                onChange={(e) => {
                  setClientEmail(e.target.value);
                }}
                value={clientEmail}
                type="e-mail"
                name="clientEmail"
                id="clientEmail"
              />
            </div>
            <div className="field">
              <label htmlFor="clientName">Telefone</label>
              <input
                onChange={(e) => {
                  setClientNumberContact(e.target.value);
                }}
                value={clientNumberContact}
                type="text"
                name="clientNumberContact"
                id="clientNumberContact"
              />
            </div>
            <div className="field">
              <label htmlFor="clientCpf">CPF</label>
              <input
                onChange={(e) => {
                  setClientCep(e.target.value);
                }}
                value={clientCpf}
                type="text"
                name="clientCpf"
                id="clientCpf"
              />
            </div>
            <div className="field">
              <label htmlFor="clientCep">CEP</label>
              <input
                onChange={(e) => {
                  setClientCep(e.target.value);
                }}
                value={clientCep}
                type="text"
                name="clientCep"
                id="clientCep"
              />
            </div>
            <div className="field">
              <label htmlFor="clientEndereco">Endereço</label>
              <input
                onChange={(e) => {
                  setClientEndereco(e.target.value);
                }}
                value={clientEndereco}
                type="text"
                name="clientEndereco"
                id="clientEndereco"
              />
            </div>
            <div className="field">
              <label htmlFor="clientNumber">Número</label>
              <input
                onChange={(e) => {
                  setClientNumber(e.target.value);
                }}
                value={clientNumber}
                type="number"
                name="clientNumber"
                id="clientNumber"
              />
            </div>
            <div className="field">
              <label htmlFor="clientCity">Cidade</label>
              <input
                onChange={(e) => {
                  setClientCity(e.target.value);
                }}
                value={clientCity}
                type="text"
                name="clientCity"
                id="clientCity"
              />
            </div>
            <div className="field">
              <label htmlFor="clientState">Estado</label>
              <input
                onChange={(e) => {
                  setClientState(e.target.value);
                }}
                value={clientState}
                type="text"
                name="clientState"
                id="clientState"
              />
            </div>
          </fieldset>
          <button type="submit">Cadastrar cliente</button>
        </form>
      </div>
    </>
  );
};

export default CreateClient;
