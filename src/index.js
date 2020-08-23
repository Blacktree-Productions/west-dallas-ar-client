import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Swipe from "./components/Swipe";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Explore from "./components/explore/explore";
import About from "./components/about/about";
import Nav from "./components/nav/nav";


const App = () => {
  return (
    <main>
    <Switch>
      <Route path="/" component={Swipe} exact />
      <Route path="/about" component={About} />
      <Route path="/explore" component={Explore} />
      <Route path="/guide" component={() => <Swipe slide={2} />} />
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