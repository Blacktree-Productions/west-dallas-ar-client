import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Layout } from "./components";

// console.log(process.env.REACT_APP_MAPBOX_KEY)
const App = () => {
  return <Layout />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
