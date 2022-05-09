import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Cart from "./Pages/Cart";
import HomePage from "./Pages/HomePage";
import NotFound404 from "./Pages/NotFound404";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/cart" component={Cart} />
          <Route path="*" component={NotFound404} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
