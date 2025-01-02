import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';  // Make sure App.js/App.jsx exists with correct casing

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);