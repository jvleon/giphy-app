import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import store from './store';
import Home from './containers/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .row {
    max-width: 100% !important;
  }
`;

const App = () => (
  <Provider store={store}>
    <Router>
      <Home exact path="/" />
      <GlobalStyle />
    </Router>
  </Provider>
);

export default App;
