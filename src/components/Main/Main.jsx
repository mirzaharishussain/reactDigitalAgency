import React, { useEffect } from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Brand from './Brand';
import ServiceSection from './ServiceSection';
import WorkArea from './WorkArea';

// import '../../assets/css/ServiceCss.css';

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(SplitText);

const Main = () => {


  // useEffect(() => {
  //   const elements = document.querySelectorAll(".fade-anim, .char-anim, .word-anim");
  
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("in-view");
  //         }
  //       });
  //     },
  //     { threshold: 0.2 }
  //   );
  
  //   elements.forEach(el => observer.observe(el));
  
  //   return () => observer.disconnect();
  // }, []);
  return (
    <div>
        
      <main>
<section className="hero-area">
  <div className="hero-area-inner section-spacing-top">
    <div className="container">
      <div className="section-header">
        <div className="section-title-wrapper">
          <div className="shape-1 fade-anim" data-direction="top" data-ease="bounce" data-delay="0.90"
            data-offset="100">
            <img src="./reactDigitalAgency/assets/imgs/shape/shape-1.webp" alt="image"/>
          </div>
          <div className="subtitle-wrapper">
            <span className="section-subtitle char-anim" data-direction="left" data-delay="0.45"
              data-offset="100">WE CREATE</span>
          </div>
          <div className="title-wrapper type-out-wrapper">
            <h1 className="section-title typed-out fade-anim" data-direction="left" data-delay="0.30"
              data-offset="100">Bold Ideas
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div className="section-content-wrapper">
      <div className="container">
        <div className="section-content section-spacing-bottom">
          <div className="content-lines">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="line-4"></div>
          </div>
          <div className="hero-thumb fade-anim" data-direction="left" data-delay="0.60" data-duration="2"
            data-offset="100">
            <video loop muted autoplay playsinline>
              <source
                src="https://feux.wprealizer.com/wp-content/uploads/2025/04/5884430_Man_Looking_1920x1080.mp4"
                type="video/mp4"/>
            </video>
          </div>
          <div className="hero-content">
            <div className="text-wrapper">
              <p className="text word-anim" data-stagger="0.1">Feux, a digital agency crafted by
                a dedicated team
                of creatives champions the
                essence
                of simplicity and elegance.</p>
            </div>
            <div className="btn-wrapper fade-anim" data-delay="0.60">
              <div className="t-btn-group">
                <a className='t-btn t-btn-circle' href='contact.html'>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
                <a className='t-btn t-btn-primary' href='contact.html'>Let’s Connect</a>
                <a className='t-btn t-btn-circle' href='contact.html'>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<Brand/>



<section className="about-area">
  <div className="container">
    <div className="about-area-inner section-spacing-top">
      <div className="section-content-wrapper btn-move">
        <div className="section-content">
          <div className="section-title-wrapper fade-anim">
            <div className="subtitle-wrapper">
              <span className="section-subtitle">About Us</span>
            </div>
            <div className="title-wrapper">
              <h2 className="section-title">We ignite brands with bold creativity and innovative
                strategies.</h2>
            </div>
          </div>
          <div className="text-wrapper fade-anim">
            <p className="text">Our professional team is dedicated to helping you achieve your digital
              goals. From
              website design and development to branding.</p>
          </div>
          <div className="btn-wrapper fade-anim">
            <div className="t-btn-group">
              <a className='t-btn t-btn-circle' href='about.html'>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a className='t-btn t-btn-primary' href='about.html'>Know more</a>
              <a className='t-btn t-btn-circle' href='about.html'>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="about-thumb fade-anim">
          <div className="btn-wrapper">
            <a href="#awards" className="circle-text btn-item">
              <img src="./reactDigitalAgency/assets/imgs/shape/shape-2.webp" alt="image" className="text"/>
              <img src="./reactDigitalAgency/assets/imgs/shape/shape-3.webp" alt="image" className="icon"/>
            </a>
          </div>
          <div className="image img_anim_reveal">
            <img src="./reactDigitalAgency/assets/imgs/gallery/image-2.webp" alt="image"/>
          </div>
        </div>
      </div>
      <div className="counter-wrapper-box fade-anim">
        <div className="counter-wrapper">
          <div className="counter-item fade-anim" data-delay="0.30">
            <span className="number t-counter">3.5k</span>
            <p className="text">Completed Projects</p>
          </div>
          <div className="counter-item fade-anim" data-delay="0.45">
            <span className="number t-counter">25+</span>
            <p className="text">Years Of Experience</p>
          </div>
          <div className="counter-item fade-anim" data-delay="0.60">
            <span className="number t-counter">1.6k</span>
            <p className="text">World Wide Clients</p>
          </div>
          <div className="counter-item fade-anim" data-delay="0.75">
            <span className="number t-counter">22+</span>
            <p className="text">Trusted Companies</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="process-area">
  <div className="process-area-inner section-spacing">
    <div className="container">
      <div className="section-header">
        <div className="section-title-wrapper fade-anim">
          <div className="subtitle-wrapper">
            <span className="section-subtitle">Our Strategy</span>
          </div>
          <div className="title-wrapper">
            <h2 className="section-title">Our work process</h2>
          </div>
        </div>
        <div className="btn-wrapper fade-anim">
          <div className="t-btn-group">
            <a className='t-btn t-btn-circle' href='contact.html'>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a className='t-btn t-btn-primary' href='contact.html'>Contact Us</a>
            <a className='t-btn t-btn-circle' href='contact.html'>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="process-wrapper-box fade-anim">
      <div className="container">
        <div className="process-wrapper">
          <div className="process-box-1 fade-anim">
            <span className="number">01</span>
            <div className="thumb">
              <img src="./reactDigitalAgency/assets/imgs/icon/icon-1.webp" alt="image"/>
            </div>
            <div className="content">
              <h3 className="title">Discovery & Research</h3>
              <p className="text">We start by understanding your business goals, target market, and competitors.
                We create a customized roadmap</p>
            </div>
          </div>
          <div className="process-box-1 fade-anim">
            <span className="number">02</span>
            <div className="thumb">
              <img src="./reactDigitalAgency/assets/imgs/icon/icon-2.webp" alt="image"/>
            </div>
            <div className="content">
              <h3 className="title">Design & Development</h3>
              <p className="text">Our creative team brings your brand to life with innovative design concepts. We
                bring the designs to life with development</p>
            </div>
          </div>
          <div className="process-box-1 fade-anim">
            <span className="number">03</span>
            <div className="thumb">
              <img src="./reactDigitalAgency/assets/imgs/icon/icon-3.webp" alt="image"/>
            </div>
            <div className="content">
              <h3 className="title">Launch & Support</h3>
              <p className="text">We continue to provide supports, monitor performance, & make necessary change to
                ensure ongoing success</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<ServiceSection/>



<WorkArea/>


<section className="testimonial-area">
  <div className="testimonial-area-inner section-spacing-top">
    <div className="container">
      <div className="section-header">
        <div className="section-title-wrapper fade-anim">
          <div className="subtitle-wrapper">
            <span className="section-subtitle">Our Testimonial</span>
          </div>
          <div className="title-wrapper">
            <h2 className="section-title">What our clients say</h2>
          </div>
        </div>
        <div className="btn-wrapper fade-anim">
          <div className="t-btn-group">
            <a className='t-btn t-btn-circle' href='contact.html'>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a className='t-btn t-btn-primary' href='contact.html'>Be a Client</a>
            <a className='t-btn t-btn-circle' href='contact.html'>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="testimonial-wrapper-box fade-anim">
      <div className="container">
        <div className="testimonial-wrapper fade-anim">
          <div className="slide-nav">
            <div className="testimonial-button-prev slide-nav-button"><img src="./reactDigitalAgency/assets/imgs/icon/icon-14.webp"
                alt="image"/></div>
            <div className="testimonial-button-next slide-nav-button"><img src="./reactDigitalAgency/assets/imgs/icon/icon-15.webp"
                alt="image"/></div>
          </div>
          <div className="swiper testimonial-content-active">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item-1">
                  <div className="content">
                    <div className="text-wrapper">
                      <p className="text">“Feux transformed our online presence with their innovative web design
                        and marketing strategies. Their attention to detail and dedication to our goals were
                        incredible."</p>
                    </div>
                    <div className="author">
                      <div className="meta">
                        <h3 className="name has-left-line">Emily Jack H.</h3>
                        <span className="post">UI/UX Designer, Luxeco</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-item-1">
                  <div className="content">
                    <div className="text-wrapper">
                      <p className="text">"Working with Feux was a game-changer for our brand. Their team brought
                        unparalleled creativity to our campaigns and aligned it perfectly with our marketing
                        strategy.”</p>
                    </div>
                    <div className="author">
                      <div className="meta">
                        <h3 className="name has-left-line">David Parker</h3>
                        <span className="post">Social Media Manager, Flexwear</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-item-1">
                  <div className="content">
                    <div className="text-wrapper">
                      <p className="text">"Feux delivered exceptional service at every stage of our project. Their
                        team is responsive, professional, and dedicated to delivering real results.</p>
                    </div>
                    <div className="author">
                      <div className="meta">
                        <h3 className="name has-left-line">Olivia Bennett</h3>
                        <span className="post">Creative Director, PureVibes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper testimonial-nav-active">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="avatar">
                  <img src="./reactDigitalAgency/assets/imgs/client/client-1.webp" alt="image"/>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="avatar">
                  <img src="./reactDigitalAgency/assets/imgs/client/client-2.webp" alt="image"/>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="avatar">
                  <img src="./reactDigitalAgency/assets/imgs/client/client-3.webp" alt="image"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="team-area">
  <div className="team-area-inner section-spacing">
    <div className="container">
      <div className="section-header">
        <div className="section-title-wrapper fade-anim">
          <div className="subtitle-wrapper">
            <span className="section-subtitle">Our Team Members</span>
          </div>
          <div className="title-wrapper">
            <h2 className="section-title">Meet our professionals</h2>
          </div>
        </div>
        <div className="btn-wrapper fade-anim">
          <div className="t-btn-group">
            <a className='t-btn t-btn-circle' href='team.html'>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a className='t-btn t-btn-primary' href='team.html'>All Members</a>
            <a className='t-btn t-btn-circle' href='team.html'>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="team-wrapper-box fade-anim">
      <div className="container">
        <div className="team-wrapper team-hover-active">
          <div className="team-box-1">
            <div className="thumb">
              <span className="number">01</span>
              <div className="icon">
                <img src="./reactDigitalAgency/assets/imgs/shape/shape-9.webp" alt="image"/>
              </div>
              <span className="post">CEO/ FOUNDER</span>
              <img src="./reactDigitalAgency/assets/imgs/team/team-1.webp" alt="image"/>
            </div>
            <div className="content">
              <h3 className="name">Berrymen Wills</h3>
            </div>
          </div>
          <div className="team-box-1 active">
            <div className="thumb">
              <span className="number">02</span>
              <div className="icon">
                <img src="./reactDigitalAgency/assets/imgs/shape/shape-9.webp" alt="image"/>
              </div>
              <span className="post">UI/UX DESIGNER</span>
              <img src="./reactDigitalAgency/assets/imgs/team/team-2.webp" alt="image"/>
            </div>
            <div className="content">
              <h3 className="name">Emilly Mayore</h3>
            </div>
          </div>
          <div className="team-box-1">
            <div className="thumb">
              <span className="number">03</span>
              <div className="icon">
                <img src="./reactDigitalAgency/assets/imgs/shape/shape-9.webp" alt="image"/>
              </div>
              <span className="post">WEB DESIGNER</span>
              <img src="./reactDigitalAgency/assets/imgs/team/team-3.webp" alt="image"/>
            </div>
            <div className="content">
              <h3 className="name">Nelson Scott</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<div className="text-slider-area">
  <div className="text-slider-box">
    <div className="text-slider fade-anim">
      <div className="swiper text-slider-active">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="text-slider-item">
              <h2 className="title"><img src="./reactDigitalAgency/assets/imgs/shape/shape-10.webp" alt="image"/><a href='contact.html'>LET’S CONNECT</a></h2>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="text-slider-item">
              <h2 className="title"><img src="./reactDigitalAgency/assets/imgs/shape/shape-10.webp" alt="image"/><a href='contact.html'>LET’S CONNECT</a></h2>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="text-slider-item">
              <h2 className="title"><img src="./reactDigitalAgency/assets/imgs/shape/shape-10.webp" alt="image"/><a href='contact.html'>LET’S CONNECT</a></h2>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="text-slider-item">
              <h2 className="title"><img src="./reactDigitalAgency/assets/imgs/shape/shape-10.webp" alt="image"/><a href='contact.html'>LET’S CONNECT</a></h2>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="text-slider-item">
              <h2 className="title"><img src="./reactDigitalAgency/assets/imgs/shape/shape-10.webp" alt="image"/><a href='contact.html'>LET’S CONNECT</a></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<section id="awards" className="awards-area">
  <div className="awards-area-inner section-spacing-top">
    <div className="container">
      <div className="section-header">
        <div className="section-title-wrapper fade-anim">
          <div className="subtitle-wrapper">
            <span className="section-subtitle">Our Awards</span>
          </div>
          <div className="title-wrapper">
            <h2 className="section-title">Celebrating our success</h2>
          </div>
        </div>
        <div className="text-wrapper fade-anim">
          <p className="text">Our dedication to pushing creative limits has earned us prestigious
            accolades and
            recognition from industry-leading platforms.</p>
        </div>
      </div>
    </div>
    <div className="awards-wrapper-box fade-anim">
      <div className="container">
        <div className="awards-wrapper">
          <div className="award-box-1 fade-anim">
            <h3 className="title">Creative Excellence Award</h3>
            <span className="year">2024</span>
            <div className="thumb">
              <img src="./reactDigitalAgency/assets/imgs/gallery/image-3.webp" alt="image"/>
            </div>
            <span className="category">Best Branding Project</span>
          </div>
          <div className="award-box-1 fade-anim">
            <h3 className="title">Visionary Design Award</h3>
            <span className="year">2023</span>
            <div className="thumb">
              <img src="./reactDigitalAgency/assets/imgs/gallery/image-34.webp" alt="image"/>
            </div>
            <span className="category">Best Digital Campaign</span>
          </div>
          <div className="award-box-1 fade-anim">
            <h3 className="title">Global Art Direction Award</h3>
            <span className="year">2022</span>
            <div className="thumb">
              <img src="./reactDigitalAgency/assets/imgs/gallery/image-35.webp" alt="image"/>
            </div>
            <span className="category">Best Art Direction</span>
          </div>
          <div className="award-box-1 fade-anim">
            <h3 className="title">Elite Event Design Award</h3>
            <span className="year">2021</span>
            <div className="thumb">
              <img src="./reactDigitalAgency/assets/imgs/gallery/image-36.webp" alt="image"/>
            </div>
            <span className="category">Best Event Branding</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="blog-area">
  <div className="blog-area-inner section-spacing">
    <div className="container">
      <div className="section-header">
        <div className="section-title-wrapper fade-anim">
          <div className="subtitle-wrapper">
            <span className="section-subtitle">Our Blogs & News</span>
          </div>
          <div className="title-wrapper">
            <h2 className="section-title">Latest insights</h2>
          </div>
        </div>
        <div className="btn-wrapper fade-anim">
          <div className="t-btn-group">
            <a className='t-btn t-btn-circle' href='blog.html'>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a className='t-btn t-btn-primary' href='blog.html'>See All Blogs</a>
            <a className='t-btn t-btn-circle' href='blog.html'>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="blogs-wrapper-box fade-anim">
      <div className="container">
        <div className="blogs-wrapper">
          <article className="blog-1 fade-anim" data-delay="0.30" data-direction="right">
            <div className="thumb">
              <span className="tag">BRANDING</span>
              <a href='blog-details.html'><img src="./reactDigitalAgency/assets/imgs/blog/blog-1.webp" alt="image"/> </a>
            </div>
            <div className="content-wrapper">
              <div className="content">
                <div className="meta">
                  <span className="date">February 12, 2025</span>
                </div>
                <h2 className="title"><a href='blog-details.html'>Feux’s impact around all over the world</a></h2>
              </div>
            </div>
          </article>
          <article className="blog-1 fade-anim" data-delay="0.45" data-direction="right">
            <div className="thumb">
              <span className="tag">DESIGN</span>
              <a href='blog-details.html'><img src="./reactDigitalAgency/assets/imgs/blog/blog-2.webp" alt="image"/> </a>
            </div>
            <div className="content-wrapper">
              <div className="content">
                <div className="meta">
                  <span className="date">January 20, 2025</span>
                </div>
                <h2 className="title"><a href='blog-details.html'>Breaking creative boundaries of modern design</a>
                </h2>
              </div>
            </div>
          </article>
          <article className="blog-1 fade-anim" data-delay="0.60" data-direction="right">
            <div className="thumb">
              <span className="tag">BRANDING</span>
              <a href='blog-details.html'><img src="./reactDigitalAgency/assets/imgs/blog/blog-3.webp" alt="image"/> </a>
            </div>
            <div className="content-wrapper">
              <div className="content">
                <div className="meta">
                  <span className="date">November 27, 2024</span>
                </div>
                <h2 className="title"><a href='blog-details.html'>Our most recent updates and announcements</a>
                </h2>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</section>

</main>
    </div>
    
  )
}

export default Main
