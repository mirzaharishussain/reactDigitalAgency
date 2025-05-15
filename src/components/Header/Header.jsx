import React from 'react'
import HeaderTop from './HeaderTop'

const Header = () => {
  return (
    <div>
        <HeaderTop/>
      <header className="header-area">
    <div className="header-main header-sticky">
      <div className="container large">
        <div className="header-area-inner">
          <div className="header-logo">
            <a href='index.html'>
              <img src="/assets/imgs/logo/logo-01.png" className="medium-logo" alt="Site Logo"/>
            </a>
          </div>
          <div className="site-category d-none d-md-inline-block">DIGITAL AGENCY ®</div>
          <div className="header-nav d-none d-xl-inline-block">
            <nav className="main-menu">
              <ul>
                <li className="">
                  <a href="/">Home</a>
                  {/* <ul className="dp-menu">
                    <li><a href='creative-agency.html'>Creative Agency</a></li>
                    <li><a href='design-agency.html'>Design Agency</a></li>
                    <li><a href='digital-agency-2.html'>Digital Agency</a></li>
                    <li><a href='ai-agency.html'>AI Agency</a></li>
                    <li><a href='marketing-agency.html'>Marketing Agency</a></li>
                  </ul> */}
                </li>
                <li><a href='about.html'>About</a></li>
                <li className="">
                  <a href="#">Services</a>
                </li>
                <li><a href='/contact'>Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="social-links d-none d-md-inline-block">
            <ul>
            <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Linkedin</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="office-location d-none d-md-inline-block">
            <ul>
              <li><a href="#">Karachi, PK</a></li>
            </ul>
          </div>
          <div className="header-offcanvas">
            <button className="side-toggle">
              <img src="/reactDigitalAgency/assets/imgs/icon/icon-4.webp" alt="image"/></button>
          </div>
        </div>
      </div>
    </div>
  </header>
    </div>
  )
}

export default Header
