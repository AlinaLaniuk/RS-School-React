import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import MainPage from '../../pages/main';
import AboutUs from '../../pages/aboutUs/aboutUs';
import PageNotFound from '../../pages/pageNotFound/pageNotFound';
import Forms from '../../pages/forms/forms';

function Header() {
  const [page, setPage] = useState('');

  return (
    <>
      <header className="header">
        <div className="header-wrapper">
          <div>Current page: {page}</div>
          <Link to="/">Main</Link>
          <Link to="/about">About us</Link>
          <Link to="/forms">Forms</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<MainPage setPage={setPage} />} />
        <Route path="/about" element={<AboutUs setPage={setPage} />} />
        <Route path="/forms" element={<Forms setPage={setPage} />} />
        <Route path="/*" element={<PageNotFound setPage={setPage} />} />
      </Routes>
    </>
  );
}
export default Header;
