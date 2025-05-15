import React from 'react'

const Contact = () => {
  return (
    <>
      <main>

{/* <!-- page title area start  --> */}
<section className="page-title-area">
  <div className="container">
    <div className="page-title-area-inner section-spacing-top">
      <div className="area-lines">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
        <div className="line-5"></div>
        <div className="line-6"></div>
        <div className="line-7"></div>
        <div className="line-8"></div>
      </div>
      <div className="section-content-wrapper">
        <div className="content-shape-1 fade-anim" data-direction="top" data-ease="bounce" data-delay="0.60"
          data-offset="100">
          <img src="/reactDigitalAgency/assets/imgs/shape/shape-36.webp" alt="image"/>
        </div>
        <div className="section-content">
          <div className="section-title-wrapper">
            <div className="title-wrapper">
              <h1 className="section-title char-anim">AGENCY</h1>
            </div>
            <div className="subtitle-wrapper">
              <span className="section-subtitle char-anim" data-delay="0.75">Contact</span>
            </div>
          </div>
        </div>
        <div className="breadcrumb-wrapper fade-anim" data-direction="left" data-offset="100" data-delay="0.90">
          <ul className="breadcrumb">
            <li><a href='index.html'>HOME</a></li>
            <li>AGENCY CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- page title area end  --> */}

{/* <!-- contact meta area start  --> */}
<div className="contact-meta-area">
  <div className="container">
    <div className="contact-meta-area-inner section-spacing">
      <div className="meta-wrapper-box move-anim">
        <div className="meta-wrapper">
          <div className="contact-meta-box">
            <div className="thumb">
              <img src="/reactDigitalAgency/assets/imgs/icon/icon-22.webp" alt="image"/>
            </div>
            <div className="content">
              <h3 className="title">Email Us</h3>
              <div className="meta-list">
                <ul>
                  <li><a href="mailto:info@feux.com">info@feux.com</a></li>
                  <li><a href="mailto:example@feuxgmail.com">example@feuxgmail.com</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="contact-meta-box active">
            <div className="thumb">
              <img src="/reactDigitalAgency/assets/imgs/icon/icon-23.webp" alt="image"/>
            </div>
            <div className="content">
              <h3 className="title">Phone Us</h3>
              <div className="meta-list">
                <ul>
                  <li><a href="tel:+12446654852">+1244-665-4852</a></li>
                  <li><a href="tel:+12555656856">+1255-565-6856</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="contact-meta-box">
            <div className="thumb">
              <img src="/reactDigitalAgency/assets/imgs/icon/icon-24.webp" alt="image"/>
            </div>
            <div className="content">
              <h3 className="title">Visit Us</h3>
              <div className="meta-list">
                <ul>
                  <li>410 Sandtown, California <br/> 56044, USA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- contact meta area end  --> */}

{/* <!-- contact area start  --> */}
<section className="contact-area">
  <div className="container">
    <div className="contact-area-inner section-spacing">
      <div className="section-content-wrapper">
        <div className="section-content fade-anim" data-direction="right">
          <div className="section-title-wrapper">
            <div className="subtitle-wrapper">
              <span className="section-subtitle">Let’s connect</span>
            </div>
            <div className="title-wrapper">
              <h2 className="section-title">Let’s work together</h2>
            </div>
          </div>
          <div className="text-wrapper">
            <p className="text">People know what an FAQ is, so make that your page title. Don’t over complicate
              thing have calling it’s good to know or more info. </p>
          </div>
          <div className="contact-list">
            <ul>
              <li><img src="/reactDigitalAgency/assets/imgs/icon/icon-17.webp" alt="icon image"/>
                <a href="mailto:example@feuxgmail.com">example@feuxgmail.com</a>
              </li>
              <li><img src="/reactDigitalAgency/assets/imgs/icon/icon-18.webp" alt="icon image"/>
                <a href="tel:+1287366566">+1 287-366-566</a>
              </li>
            </ul>
          </div>
          <div className="social-links-wrapper">
            <p className="title">Follow us:</p>
            <div className="social-links">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="contact-wrap fade-anim" data-direction="left">
          <form action="#">
            <div className="contact-formwrap">
              <div className="contact-formfield">
                <img className="input-icon" src="/reactDigitalAgency/assets/imgs/icon/icon-19.webp" alt="image"/>
                <h3 className="title">What’s your name?</h3>
                <input type="text" name="Name" id="Name" placeholder="Full name here"/>
              </div>
              <div className="contact-formfield">
                <img className="input-icon" src="/reactDigitalAgency/assets/imgs/icon/icon-20.webp" alt="image"/>
                <h3 className="title">What’s your e-mail?</h3>
                <input type="text" name="Email" id="Email" placeholder="Enter your mail here"/>
              </div>
              <div className="contact-formfield messages">
                <img className="input-icon" src="/reactDigitalAgency/assets/imgs/icon/icon-21.webp" alt="image"/>
                <h3 className="title">Have any message?</h3>
                <input type="text" name="Messages" id="Messages" placeholder="Write your message here"/>
              </div>
            </div>
            <div className="submit-btn">
              <button type="submit" className="t-btn t-btn-group">
                <span className="t-btn t-btn-circle">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <span className="t-btn t-btn-primary">Contact Us</span>
                <span className="t-btn t-btn-circle">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- contact area end  --> */}

{/* <!-- choose area start  --> */}
<section className="choose-area-2">
  <div className="container">
    <div className="choose-area-2-inner section-spacing">
      <div className="section-content-wrapper">
        <div className="choose-thumb fade-anim" data-direction="left">
          <img src="/reactDigitalAgency/assets/imgs/gallery/image-20.webp" alt="image"/>
        </div>
        <div className="section-content fade-anim" data-direction="right">
          <div className="section-title-wrapper">
            <div className="subtitle-wrapper">
              <span className="section-subtitle">Why Choose Us</span>
            </div>
            <div className="title-wrapper">
              <h2 className="section-title">We give you the best solutions</h2>
            </div>
          </div>
          <div className="features-wrapper-box">
            <div className="features-wrapper">
              <div className="feature-box">
                <div className="thumb">
                  <img src="/reactDigitalAgency/assets/imgs/shape/shape-37.webp" alt="image"/>
                </div>
                <div className="content">
                  <h3 className="title">Proven Marketing</h3>
                  <p className="text">We offer you a comprehensive range of digital marketing services designed to
                    help your business thrive.</p>
                </div>
              </div>
              <div className="feature-box">
                <div className="thumb">
                  <img src="/reactDigitalAgency/assets/imgs/shape/shape-38.webp" alt="image"/>
                </div>
                <div className="content">
                  <h3 className="title">Brand Strategy</h3>
                  <p className="text">We offer you a comprehensive range of digital marketing services designed to
                    help your business thrive.</p>
                </div>
              </div>
              <div className="feature-box">
                <div className="thumb">
                  <img src="/reactDigitalAgency/assets/imgs/shape/shape-39.webp" alt="image"/>
                </div>
                <div className="content">
                  <h3 className="title">Winning Design</h3>
                  <p className="text">We offer you a comprehensive range of digital marketing services designed to
                    help your business thrive.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- choose area end  --> */}

</main>
    </>
  )
}

export default Contact
