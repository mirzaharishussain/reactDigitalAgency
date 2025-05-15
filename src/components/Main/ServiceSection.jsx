import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../assets/css/ServiceCss.css"; // Uncomment if not already

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = () => {
  const serviceItemsRef = useRef([]);

  const addToRef = (el) => {
    if (el && !serviceItemsRef.current.includes(el)) {
      serviceItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    const mm = gsap.matchMedia();

  mm.add("(min-width: 991px)", () => {
    const items = gsap.utils.toArray(".item");

    items.forEach((item, i) => {
      const header = item.querySelector(".header");
      const body = item.querySelector(".body");

      // Make sure body has its natural height to animate from
      const bodyHeight = body.scrollHeight;

      gsap.fromTo(
        body,
        { height: bodyHeight },
        {
          height: 0,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: () => `top ${header.clientHeight * i}`,
            // end: () => `top ${header.clientHeight * (i + 1)}`,
            end: () => `top ${header.clientHeight * items.length}`,
            endTrigger: ".final",
            scrub: true,
            pin: true, // pin only the header
            pinSpacing: false, // allow other headers to move up
            invalidateOnRefresh: true,
          },
        }
      );
    });
  });

  return () => {
    mm.revert();
  };
}, []);

  return (
    <section className="service-area">
      <div className="service-area-inner section-spacing-top">
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">Our Services</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">What we offer to you</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="services-wrapper-box">
          <div className="services-wrapper header-stacking-items">
            {/* FIRST BOX */}
            <div className="service-box-1 item" ref={addToRef}>
              <div className="container">
                <div className="header">
                  <div className="number">(01)</div>
                  <h3 className="title">Design <span><img src="./assets/imgs/shape/shape-6.webp" alt=""/></span></h3>
                </div>
                <div className="service-box-inner body">
                  <div className="btn-wrapper">
                    <a className="t-btn" href="contact.html"><span>Show Details</span></a>
                  </div>
                  <div className="content">
                    <p className="text">We offer you a comprehensive range of digital marketing services...</p>
                    <ul className="service-list">
                      <li><a href="service-details.html">1. Graphic Design</a></li>
                      <li><a href="service-details.html">2. Branding and Identity</a></li>
                      <li><a href="service-details.html">3. Web and Digital Design</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* SECOND BOX */}
            <div className="service-box-1 item" ref={addToRef}>
              <div className="container">
                <div className="header">
                  <div className="number">(02)</div>
                  <h3 className="title">Development <span><img src="./assets/imgs/shape/shape-7.webp" alt=""/></span></h3>
                </div>
                <div className="service-box-inner body">
                  <div className="btn-wrapper">
                    <a className="t-btn" href="contact.html"><span>Show Details</span></a>
                  </div>
                  <div className="content">
                    <p className="text">We offer you a comprehensive range of dev services...</p>
                    <ul className="service-list">
                      <li><a href="service-details.html">1. E-commerce Development</a></li>
                      <li><a href="service-details.html">2. Custom Website Development</a></li>
                      <li><a href="service-details.html">3. Responsive Web Development</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* THIRD BOX */}
            <div className="service-box-1 item" ref={addToRef}>
              <div className="container">
                <div className="header">
                  <div className="number">(03)</div>
                  <h3 className="title">Marketing <span><img src="./assets/imgs/shape/shape-8.webp" alt=""/></span></h3>
                </div>
                <div className="service-box-inner body">
                  <div className="btn-wrapper">
                    <a className="t-btn" href="contact.html"><span>Show Details</span></a>
                  </div>
                  <div className="content">
                    <p className="text">We offer a comprehensive range of marketing services...</p>
                    <ul className="service-list">
                      <li><a href="service-details.html">1. Technical SEO</a></li>
                      <li><a href="service-details.html">2. On-page optimization</a></li>
                      <li><a href="service-details.html">3. SEO audits and analysis</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ScrollTrigger needs an end point */}
        <div className="final" style={{ height: "1px" }}></div>
      </div>
    </section>
  );
};

export default ServiceSection;
