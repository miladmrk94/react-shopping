import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage";
import NotFound404 from "./Pages/NotFound404";
import Cart from "./Pages/CartPage";
import Context from "./Components/Context/Context";
import CheckOutPage from "./Pages/CheckOutPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import ProfilePage from "./Pages/ProfilePage";
import AuthProvider from "./Components/Context/AuthProvider";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AuthProvider>
          <Context>
            <Layout>
              <Switch>
                <Route path="/product/:id" component={ProductPage} />
                <Route path="/checkOut" component={CheckOutPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/checkOut" component={CheckOutPage} />
                <Route path="/cart" component={Cart} />
                <Route path="/" exact={true} component={HomePage} />
                <Route path="*" component={NotFound404} />
              </Switch>
            </Layout>
          </Context>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
