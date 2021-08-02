import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';

const fccWrapper = document.getElementById('fcc_test_suite_wrapper');
fccWrapper.setAttribute('tabindex', '-1');
const childNodes = fccWrapper.shadowRoot.childNodes
for(let i = 0; i < childNodes.length; i++) {
  if(childNodes[i].nodeName === 'STYLE') {
    console.log(childNodes.textContent)
  }}
setTimeout(() => console.log(childNodes), 1000 )


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
