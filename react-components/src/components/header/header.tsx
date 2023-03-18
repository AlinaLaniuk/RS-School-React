import { Routes, Route, Link } from 'react-router-dom';
import MainPage from '../../pages/main';
import AboutUs from '../../pages/aboutUs/aboutUs';
import PageNotFound from '../../pages/pageNotFound/pageNotFound';

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-wrapper">
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
export default Header;
