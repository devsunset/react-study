import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Router
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  // BrowserRouter
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
