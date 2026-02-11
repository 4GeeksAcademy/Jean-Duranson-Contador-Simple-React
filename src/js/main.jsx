import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/index.css';
import SimpleCounter from './components/simpleCounter';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <SimpleCounter />
  </React.StrictMode>
);