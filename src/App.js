import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import ArticleListing from "./containers/ArticleListing";
import Article from "./containers/Article";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/article/:id">
            <Article />
          </Route>
          <Route path="/">
            <ArticleListing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
