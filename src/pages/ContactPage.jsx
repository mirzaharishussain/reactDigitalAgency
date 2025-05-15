import React from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import ScrollTrigger from 'gsap/ScrollTrigger';
import Contact from '../components/Contact/Contact';
// import ScrollSmoother from 'gsap/ScrollSmoother';
// import

const ContactPage = () => {
  return (
    <div>
      <Header/>


      <div className="has-smooth" id="has_smooth"></div>
            <div id="smooth-wrapper">
        <div id="smooth-content">
      <Contact/>
      <Footer/>
        </div>
    </div>
    </div>
  )
}

export default ContactPage
