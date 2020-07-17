import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const Home = () =>  <div>Home</div>;

const App = () => (
  <Provider store={store}>
    <Router>
      <Home exact path="/" />
    </Router>
  </Provider>
);

export default App;
