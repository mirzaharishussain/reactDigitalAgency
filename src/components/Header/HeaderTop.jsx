import React from 'react'

const HeaderTop = () => {
  return (
    <div>
  <div className="progress-wrap">
    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
    </svg>
  </div>

  <aside className="fix">
    <div className="side-info">
      <div className="side-info-content">
        <div className="offset-widget offset-header">
          <div className="offset-logo">
            <a href='index.html'>
              <img src="/reactDigitalAgency/assets/imgs/logo/logo.png" alt="site logo"/>
            </a>
          </div>
          <button id="side-info-close" className="side-info-close">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="mobile-menu fix"></div>
        <div className="offset-info-box">
          <h2 className="title">Hello There!</h2>
          <p className="text">We offer comprehensive range of services to help your business thrive.</p>
          <div className="t-btn-group">
            <a className='t-btn t-btn-circle' href='contact.html'>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a className='t-btn t-btn-primary' href='contact.html'>Let’s Connect</a>
            <a className='t-btn t-btn-circle' href='contact.html'>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="post-image">
            <img src="/reactDigitalAgency/assets/imgs/gallery/image-48.webp" alt="image"/>
            <img src="/reactDigitalAgency/assets/imgs/gallery/image-49.webp" alt="image"/>
            <img src="/reactDigitalAgency/assets/imgs/gallery/image-50.webp" alt="image"/>
            <img src="/reactDigitalAgency/assets/imgs/gallery/image-51.webp" alt="image"/>
          </div>
        </div>
        <div className="offset-widget-box">
          <h2 className="title">Information</h2>
          <div className="contact-meta">
            <div className="contact-item">
              <span className="text"><a href="tel:+22306965119">+2230 6965 119</a></span>
            </div>
            <div className="contact-item">
              <span className="text"><a href="mailto:feux@gmail.com">feux@gmail.com</a></span>
            </div>
            <div className="contact-item">
              <span className="text">Avenue de Roma 1588, Lisboa</span>
            </div>
          </div>
        </div>
        <div className="offset-widget-box">
          <h2 className="title">Connect Us On</h2>
          <div className="social-links">
            <a href="#">FB</a>
            <a href="#">LN</a>
            <a href="#">IN</a>
            <a href="#">BE</a>
          </div>
        </div>
        <div className="offset-logo-footer">
          <img src="/reactDigitalAgency/assets/imgs/logo/logo-6.png" alt="image"/>
        </div>
      </div>
    </div>
  </aside>
  <div className="offcanvas-overlay"></div>
  

    </div>
  )
}

export default HeaderTop
  