import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import Header from "../../components/Header";
import "./styles.css";



const CreateProduct = () => {
  const history = useHistory();
  const [productName, setProductName] = useState("");
  const [productValue, setProductValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
   const id = Math.floor(Math.random() * 1000);
    let dados = {id, nome:productName, valor: productValue}
    let dadosCadastrados = localStorage.getItem('produtos')

    if (dadosCadastrados === null) {
      dadosCadastrados = []
    } else {
      dadosCadastrados = JSON.parse(dadosCadastrados)
    }
    dadosCadastrados.push(dados)

    localStorage.setItem('produtos', JSON.stringify(dadosCadastrados))

    swal({
      title: "Sucesso!",
      text: "Produto cadastrado com suceso!",
      icon: "success",
    }).then(() => {
      history.push("/products");
    });
  }

  return (
    <>
      <div id="page-create-point">
        <Header/>
        <form onSubmit={handleSubmit}>
          <h1>
            Cadastro de
            <br /> Produto
          </h1>

          <fieldset>
            <legend>
              <h2>Dados</h2>
            </legend>
            <div className="field">
              <label htmlFor="productName">Nome do Produto</label>
              <input
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
                value={productName}
                type="text"
                name="productName"
                id="productName"
              />
            </div>
            <div className="field">
              <label htmlFor="productValue">Preço do Produto</label>
              <input
                onChange={(e) => {
                  setProductValue(e.target.value);
                }}
                value={productValue}
                type="number"
                name="productValue"
                id="productValue"
              />
            </div>
          </fieldset>
          <button type="submit">Cadastrar produto</button>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
