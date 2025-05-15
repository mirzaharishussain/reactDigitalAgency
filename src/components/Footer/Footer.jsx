import React from 'react'

const Footer = () => {
  return (

    <div>
        
      <footer className="footer-area">
        <div className="area-bg">
          <img src="/reactDigitalAgency/assets/imgs/gallery/image-8.webp" alt="image"/>
        </div>
        <div className="container">
          <div className="footer-widget-wrapper-box">
            <div className="footer-widget-wrapper">
              <div className="footer-widget-box newsletter">
                <div className="subscription-box">
                  <div className="title-wrapper">
                    <h2 className="section-title">Subscribe our newsletter</h2>
                  </div>
                  <div className="text-wrapper">
                    <p className="text">Join us today, get updated everyday</p>
                  </div>
                  <form action="#" className="subscribe-form">
                    <div className="input-field">
                      <input type="email" placeholder="Enter your email..."/>
                      <button type="submit" className="subscribe-btn t-btn-primary bg-active">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="footer-widget-box">
                <h2 className="title">Company</h2>
                <ul className="footer-nav-list">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Our Blogs</a></li>
                  <li><a href="#">Our Works</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div className="footer-widget-box">
                <h2 className="title">Solutions</h2>
                <ul className="footer-nav-list">
                  <li><a href="#">Our Services</a></li>
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Development</a></li>
                  <li><a href="#">Marketing</a></li>
                  <li><a href="#">Digital SEO</a></li>
                </ul>
              </div>
              <div className="footer-widget-box">
                <h2 className="title">Instagram</h2>
                <div className="instagram-posts">
                  <a href="#"><img src="/reactDigitalAgency/assets/imgs/gallery/image-4.webp" alt="image"/></a>
                  <a href="#"><img src="/reactDigitalAgency/assets/imgs/gallery/image-5.webp" alt="image"/></a>
                  <a href="#"><img src="/reactDigitalAgency/assets/imgs/gallery/image-6.webp" alt="image"/></a>
                  <a href="#"><img src="/reactDigitalAgency/assets/imgs/gallery/image-7.webp" alt="image"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-inner">
              <div className="footer-logo">
                <a href='index.html'><img src="/reactDigitalAgency/assets/imgs/logo/logo-light.png" alt="site logo"/></a>
              </div>
              <div className="copyright-text">
                <p className="text">Copyright © 2025 <a href="#">Wprealizer</a>. All rights reserved.</p>
              </div>
              <div className="social-links">
                <a href="#">FB</a>
                <a href="#">LN</a>
                <a href="#">IN</a>
                <a href="#">BE</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
