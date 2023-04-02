import { Routes, Route, Link, useLocation } from 'react-router-dom';
import MainPage from '../../pages/main';
import AboutUs from '../../pages/aboutUs/aboutUs';
import PageNotFound from '../../pages/pageNotFound/pageNotFound';
import FormPage from '../../pages/forms/formPage';

export interface PageNamesType {
  [key: string]: string;
}

const pageNames: PageNamesType = {
  '/': 'Main',
  '/about': 'About',
  '/forms': 'Forms',
};

const pageNotFoundName = 'Page not found';

function Header() {
  const location = useLocation();

  return (
    <>
      <header className="header">
        <div className="header-wrapper">
          <div>Current page: {pageNames[location.pathname] || pageNotFoundName}</div>
          <Link to="/">Main</Link>
          <Link to="/about">About us</Link>
          <Link to="/forms">Forms</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/forms" element={<FormPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
export default Header;
