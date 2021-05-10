import React from "react";
import { Homepage } from "./Pages/Homepage/Homepage.jsx";
import "./App.css";
import { Route } from "react-router-dom";

import Shoppage from '../src/Pages/Shop Page/shoppage.jsx'

const HatsPage = () => {
  return (
    <div>
      <h1>hats Page</h1>
    </div>
  );
};

const TopicPage = () => {
  return (
    <div>
      <h1>Topic Page</h1>
    </div>
  );
};

const TopicDetails = () => {
  return (
    <div>
      <h1>Topic Details Page</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route exact path="/hats" component={HatsPage} />
      <Route exact path="/topics" component={TopicPage} />
      <Route exact path="/topics/:id" component={TopicDetails} />
      <Route exact path="/shops" component={Shoppage} />
    </div>
  );
}

export default App;
