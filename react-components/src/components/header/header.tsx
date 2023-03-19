import { Routes, Route, Link } from 'react-router-dom';
import { Component } from 'react';
import MainPage from '../../pages/main';
import AboutUs from '../../pages/aboutUs/aboutUs';
import PageNotFound from '../../pages/pageNotFound/pageNotFound';

interface IHeaderState {
  page: string;
}

function setCurrentPageName() {
  const path = window.location.pathname.split('/');
  const pagePath = path[path.length - 1];
  let pageName;
  if (pagePath === '') {
    pageName = 'Main';
  } else if (pagePath === 'about') {
    pageName = 'About';
  } else {
    pageName = 'Not found';
  }
  return pageName;
}

class Header extends Component<unknown, IHeaderState> {
  constructor(props: unknown) {
    super(props);
    this.state = { page: '' };
    this.setPageName = this.setPageName.bind(this);
  }

  componentDidMount() {
    const currentpage = setCurrentPageName();
    this.setState({ page: currentpage });
  }

  setPageName(currentPage = '') {
    this.setState({ page: currentPage });
  }

  render() {
    const { page } = this.state;
    return (
      <>
        <header className="header">
          <div className="header-wrapper">
            <div>Current page: {page}</div>
            <Link to="/">Main</Link>
            <Link to="/about">About us</Link>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<MainPage setPageName={this.setPageName} />} />
          <Route path="/about" element={<AboutUs setPageName={this.setPageName} />} />
          <Route path="/*" element={<PageNotFound setPageName={this.setPageName} />} />
        </Routes>
      </>
    );
  }
}
export default Header;
