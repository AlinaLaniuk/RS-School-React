import React from 'react';
import { Routes, Route, useLocation, NavLink } from 'react-router-dom';
import MainPage from './pages/main/main';
import AboutUs from './pages/aboutUs/aboutUs';
import PageNotFound from './pages/pageNotFound/pageNotFound';
import FormPage from './pages/forms/formPage';

export type PageNamesType = {
  [key: string]: string;
};

const pageNames: PageNamesType = {
  '/': 'Main',
  '/about': 'About',
  '/forms': 'Forms',
};

const pageNotFoundName = 'Page not found';
const activeClass = 'active';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <header className="header">
        <div className="header-wrapper">
          <div>Current page: {pageNames[location.pathname] || pageNotFoundName}</div>
          <NavLink className={({ isActive }) => (isActive ? activeClass : '')} to="/">
            Main
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? activeClass : '')} to="/about">
            About us
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? activeClass : '')} to="/forms">
            Forms
          </NavLink>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/forms" element={<FormPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
