import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Promo from './Promo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div className="container">
  <React.StrictMode>
      <div className="left">
        <App />
      </div>
      <div className="right">
        <Promo />
      </div>
  </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
