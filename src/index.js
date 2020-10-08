import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/apolloClient";
import { BrowserRouter as Router} from 'react-router-dom';
import App from "./containers/App";


ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />      
    </ApolloProvider> 
  </Router>, 
  document.getElementById('root')
)