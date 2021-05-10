import React from "react";
import { Homepage } from "./Pages/Homepage/Homepage.jsx";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Header } from "./Component/Header/header.jsx";
import Shoppage from "../src/Pages/Shop Page/shoppage.jsx";

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App ">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/shop" component={Shoppage} />
      </Switch>
    </div>
  );
}

export default App;
