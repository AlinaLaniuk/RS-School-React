import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';
import './index.css';
import './components/searchBar/searchBar.css';
import './components/card/card.css';
import './components/header/header.css';
import './pages/aboutUs/aboutUs.css';
import './pages/pageNotFound/pageNotFound.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
