import React from 'react';


function NavBar() {
  return (
    <div>
      <div className="usa-overlay"></div>
      <header className="usa-header usa-header--basic" role="banner">
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <div className="usa-logo" id="basic-logo">
              <em className="usa-logo__text"><a href="/" title="Home" aria-label="Home">VA Modernization</a></em>
            </div>
            <button className="usa-menu-btn">Menu</button>
          </div>
          <nav role="navigation" className="usa-nav">
            <button className="usa-nav__close">
              <img src="/assets/img/close.svg" alt="close"></img>
            </button>
            <ul className="usa-nav__primary usa-accordion">
             <li className="usa-nav__primary-item">
                <a className="usa-nav__link" href="https://www.google.com/">
                  <span>Transformation</span>
                </a>
              </li>
              <li className="usa-nav__primary-item">
                <a className="usa-nav__link" href="https://www.google.com/">
                  <span>About Us</span>
                </a>
              </li>
              <li className="usa-nav__primary-item">
                <a className="usa-nav__link" href="https://www.google.com/">
                  <span>Technology</span>
                </a>
              </li>
              <li className="usa-nav__primary-item">
                <a className="usa-nav__link" href="https://www.google.com/">
                  <span>Healthcare</span>
                </a>
              </li>
              
            </ul>
            <form className="usa-search usa-search--small ">
              <div role="search">
                <label className="usa-sr-only" for="basic-search-field-small">Search small</label>
                <input className="usa-input" id="basic-search-field-small" type="search" name="search"></input>
                <button className="usa-button" type="submit">
                  <span className="usa-sr-only">Search</span>
                </button>
              </div>
            </form>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default NavBar;
