import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import App from './App';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
     <App/>
  </BrowserRouter>
   
  ,
  document.getElementById('root')
);
