import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layout from "./components/Layout";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Explore from "./components/explore/explore";
import About from "./components/about/about";
import Nav from "./components/nav/nav";


const App = () => {
  return (
    // <Layout/>
    <main>
    <Switch>
      <Route path="/" component={Layout} exact />
      <Route path="/about" component={About} />
      <Route path="/explore" component={Explore} />
    </Switch>
    <Nav/>
    </main>
  );
};

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>, 
  document.getElementById('root')
)