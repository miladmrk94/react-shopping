import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage";
import NotFound404 from "./Pages/NotFound404";
import Cart from "./Pages/CartPage";
import Context from "./Components/Context/Context";

function App() {
  return (
    <BrowserRouter>
      <Context>
        <Layout>
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/" exact={true} component={HomePage} />
            <Route path="*" component={NotFound404} />
          </Switch>
        </Layout>
      </Context>
    </BrowserRouter>
  );
}

export default App;
