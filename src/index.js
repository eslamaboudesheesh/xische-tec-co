import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/init.scss';

import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import store from './store';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Router = process.env.NODE_ENV === 'development' ? BrowserRouter : HashRouter;

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
