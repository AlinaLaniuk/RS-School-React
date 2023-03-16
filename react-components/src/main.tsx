import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import './index.css';
import './components/searchBar/searchBar.css';
import './components/card/card.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
