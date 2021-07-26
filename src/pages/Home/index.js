import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";


const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <main>
          <h1> Sistema de Cadastro.</h1>
          <p>Largue as planilhas Excel defazadas.</p>
          <Link id="create-product" to="/create-product">
            <strong> Entrar </strong>
          </Link>
         
        </main>
      </div>
    </div>
  );
};

export default Home;
