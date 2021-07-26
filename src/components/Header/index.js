import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

function Header() {

  return (
    <div className="header-container">
      <header>
        <nav>
          <NavLink
            activeStyle={{ borderBottom: "2px solid #ff9000" }}
            to="/products"
          >
            {" "}
            Listagem de Produtos{" "}
          </NavLink>
          <NavLink
            activeStyle={{ borderBottom: "2px solid #ff9000" }}
            to="/create-product"
          >
            {" "}
            Cadastro de Produtos{" "}
          </NavLink>
        </nav>
        <div
          className="signout-btn"
          onClick={() => {
          }}
        >
          Sair
        </div>
      </header>
    </div>
  );
}

export default Header;
