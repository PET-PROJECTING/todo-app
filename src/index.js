import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PerformanceLogger } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <PerformanceLogger allowLogging={false} /* Change to true in order to log performance */ />
  </React.StrictMode>
);
