import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/apolloClient";
import { BrowserRouter as Router} from 'react-router-dom';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { ThemeProvider } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import App from "./containers/App";
// import theme from './theme';



ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      {/* <ThemeProvider theme={theme}> */}
        {/* <CssBaseline /> */}
        <Container maxWidth="sm" >
        <App />
        </Container>
      {/* </ThemeProvider> */}
    </ApolloProvider> 
  </Router>, 
  document.getElementById('root')
)