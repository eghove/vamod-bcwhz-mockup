// React version of USDWS 2.0.1 Big Footer: https://v2.designsystem.digital.gov/components/footer/#big-footer

import React from 'react';


function Footer() {
  return (
    <div>
      <footer className="usa-footer usa-footer--big" role="contentinfo">
        <div className="grid-container usa-footer__return-to-top">
          <a href="#">Return to top</a>
        </div>
        <div className="usa-footer__primary-section">
          <div className="grid-container">
            <div className="grid-row grid-gap">
              <div className="tablet:grid-col-8">
                <nav className="usa-footer__nav">
                  <div className="grid-row grid-gap-4">
                    <div className="mobile-lg:grid-col-6 desktop:grid-col-3">
                      <section className="usa-footer__primary-content usa-footer__primary-content--collapsible">
                        <h4 className="usa-footer__primary-link">Topic</h4>
                        <ul className="usa-list usa-list--unstyled">
                          <li className="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>
                          <li className="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>
                          <li className="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link that's a bit longer than most of the others</a></li>
                          <li className="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>
                        </ul>
                      </section>
                    </div>
                    <div className="mobile-lg:grid-col-6 desktop:grid-col-3">
                      <section className="usa-footer__primary-content usa-footer__primary-content--collapsible">
                        <h4 className="usa-footer__primary-link">Topic</h4>
                        <ul className="usa-list usa-list--unstyled">
                          <li className="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>
                          <li className="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link that's pretty long</a></li>
                          <li className="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>
                          <li className="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>
                        </ul>
                      </section>
                    </div>
                    <div className="mobile-lg:grid-col-6 desktop:grid-col-3">
                      <section className="usa-footer__primary-content usa-footer__primary-content--collapsible">
                        <h4 className="usa-footer__primary-link">Topic</h4>
                        <ul className="usa-list usa-list--unstyled">
                          <li className="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>
                          <li className="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>
                          <li className="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>
                          <li className="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>
                        </ul>
                      </section>
                    </div>
                    <div className="mobile-lg:grid-col-6 desktop:grid-col-3">
                      <section className="usa-footer__primary-content usa-footer__primary-content--collapsible">
                        <h4 className="usa-footer__primary-link">Topic</h4>
                        <ul className="usa-list usa-list--unstyled">
                          <li className="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>
                          <li className="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>
                          <li className="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>
                          <li className="usa-footer__secondary-link"><a href="javascript:void(0);">Secondary link</a></li>
                        </ul>
                      </section>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="tablet:grid-col-4">
                <div className="usa-sign-up">
                  <h3 className="usa-sign-up__heading">Sign up</h3>
                  <form className="usa-form">
                    <label className="usa-label" for="email" id="">Your email address</label>
                    <input className="usa-input" id="email" name="email" type="email" />
                    <button className="usa-button" type="submit">Sign up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="usa-footer__secondary-section">
          <div className="grid-container">
            <div className="grid-row grid-gap">
              <div className="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
                <div className="mobile-lg:grid-col-auto">
                  <img className="usa-footer__logo-img" src="/assets/img/logo-img.png" alt="" />
                </div>
                <div className="mobile-lg:grid-col-auto">
                  <h3 className="usa-footer__logo-heading">Name of Agency</h3>
                </div>
              </div>
              <div className="usa-footer__contact-links mobile-lg:grid-col-6">
                <div className="usa-footer__social-links grid-row grid-gap-1">
                  <div className="grid-col-auto">
                    <a className="usa-social-link usa-social-link--facebook" href="javascript:void(0);">
                      <span>Facebook</span>
                    </a>
                  </div>
                  <div className="grid-col-auto">
                    <a className="usa-social-link usa-social-link--twitter" href="javascript:void(0);">
                      <span>Twitter</span>
                    </a>
                  </div>
                  <div className="grid-col-auto">
                    <a className="usa-social-link usa-social-link--youtube" href="javascript:void(0);">
                      <span>YouTube</span>
                    </a>
                  </div>
                  <div className="grid-col-auto">
                    <a className="usa-social-link usa-social-link--rss" href="javascript:void(0);">
                      <span>RSS</span>
                    </a>
                  </div>
                </div>
                <h3 className="usa-footer__contact-heading">Agency Contact Center</h3>
                <address className="usa-footer__address">
                  <div className="usa-footer__contact-info grid-row grid-gap">
                    <div className="grid-col-auto">
                      <a href="tel:1-800-555-5555">(800) CALL-GOVT</a>
                    </div>
                    <div className="grid-col-auto">
                      <a href="mailto:info@agency.gov">info@agency.gov</a>
                    </div>
                  </div>
                </address>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
