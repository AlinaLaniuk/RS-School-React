import { Routes, Route, Link } from 'react-router-dom';
import { Component } from 'react';
import MainPage from '../../pages/main/main';
import AboutUs from '../../pages/aboutUs/aboutUs';
import PageNotFound from '../../pages/pageNotFound/pageNotFound';
import Forms from '../../pages/forms/forms';

type HeaderState = {
  page: string;
};

class Header extends Component<unknown, HeaderState> {
  constructor(props: unknown) {
    super(props);
    this.state = { page: '' };
  }

  setPageName = (currentPage = '') => {
    this.setState({ page: currentPage });
  };

  render() {
    const { page } = this.state;
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
          <Route path="/" element={<MainPage setPageName={this.setPageName} />} />
          <Route path="/about" element={<AboutUs setPageName={this.setPageName} />} />
          <Route path="/forms" element={<Forms setPageName={this.setPageName} />} />
          <Route path="/*" element={<PageNotFound setPageName={this.setPageName} />} />
        </Routes>
      </>
    );
  }
}
export default Header;
