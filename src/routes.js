import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CreateProduct from "./pages/CreateProduct";
import ListProducts from "./pages/ListProducts";
import CreateClient from "./pages/CreateClient";

const Routes = () => {
  return (
    
      <BrowserRouter>
        <Route component={Home} exact path="/" />
        <Route component={CreateProduct} path="/create-product" />
        <Route component={ListProducts} path="/products" />
        <Route component={CreateClient} path="/create-client" />
      </BrowserRouter>
  );
};
export default Routes;
