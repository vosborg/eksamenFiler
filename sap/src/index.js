import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style.scss';
import '../src/asset/css/main.css';
import '../src/asset/css/mobile.css';
import '../src/asset/css/tablet.css';
import '../src/asset/css/tabletxl.css';
//import '../src/style.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/js/bootstrap.bundle.min';




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// <script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>
reportWebVitals();
