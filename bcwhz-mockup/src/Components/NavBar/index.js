// React version of USDWS 2.0.1 Basic Header: https://federalist-proxy.app.cloud.gov/preview/uswds/uswds/release-2.0/components/preview/header--basic.html

import React from 'react';


function NavBar() {
  return (
    <div>
      <div className="usa-overlay"></div>
      <header className="usa-header usa-header--basic" role="banner">
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <div className="usa-logo" id="basic-logo">
              <em className="usa-logo__text"><a href="/" title="Home" aria-label="Home">Project Title</a></em>
            </div>
            <button className="usa-menu-btn">Menu</button>
          </div>
          <nav role="navigation" className="usa-nav">
            <button className="usa-nav__close">
              <img src="/assets/img/close.svg" alt="close"></img>
            </button>
            <ul className="usa-nav__primary usa-accordion">
              <li className="usa-nav__primary-item">
                <button className="usa-accordion__button usa-nav__link  usa-current" aria-expanded="false" aria-controls="basic-nav-section-one">
                  <span>Current section</span>
                </button>
                <ul id="basic-nav-section-one" className="usa-nav__submenu">
                  <li className="usa-nav__submenu-item">
                    <a href="#">Navigation link</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="#">Navigation link</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="#">Navigation link</a>
                  </li>
                </ul>
              </li>
              <li className="usa-nav__primary-item">
                <button className="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="basic-nav-section-two">
                  <span>Section</span>
                </button>
                <ul id="basic-nav-section-two" className="usa-nav__submenu">
                  <li className="usa-nav__submenu-item">
                    <a href="#">Navigation link</a>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <a href="#">Navigation link</a>
                  </li>
                  <li className="usa-nav__submenu-item">
                    <a href="#">Navigation link</a>
                  </li>
                </ul>
              </li>
              <li className="usa-nav__primary-item">
                <a className="usa-nav__link" href="https://www.google.com/">
                  <span>Simple link</span>
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
