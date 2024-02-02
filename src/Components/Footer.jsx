import React from 'react'




const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget" data-aos="fade-in" data-aos-duration={1200} data-aos-delay={100}>
                <div className="logo">
                  <a href="/">
                    Khadija-Portfolio
                  </a>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <ul className="social-links">
                  <li className='social-icons'>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li className='social-icons'>
                    <a href="https://twitter.com/" target="_blank">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className='social-icons'>
                    <a href="https://linkedin.com/" target="_blank">
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li className='social-icons'>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget ml-4 pl-5" data-aos="fade-in" data-aos-duration={1200} data-aos-delay={200} >
                <h3>Explore</h3>
                <ul className="list">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about/">About</a></li>
                  <li><a href="/services/">Services</a></li>
                  <li><a href="/portfolio/">Portfolio</a></li>
                  <li><a href="/team/">Team</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ml-4" data-aos="fade-in" data-aos-duration={1200} data-aos-delay={300}>
                <h3>Quick Links</h3>
                <ul className="list">
                  <li><a href="/contact/">Contact Us</a></li>
                  <li><a href="/pricing/">Pricing</a></li>
                  <li><a href="/faq/">Faq</a></li>
                  <li><a href="/privacy-policy/">Privacy Policy</a></li>
                  <li><a href="/terms-conditions/">Terms &amp; Conditions</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget" data-aos="fade-in" data-aos-duration={1200} data-aos-delay={400}>
                <h3>Get in Touch</h3>
                <ul className="get-in-touch">
                  <li><i class="fa-solid fa-location-dot"></i><span>2750 Quadra Street Punjab, Pakistan.</span></li>

                  <li><i class="fa-solid fa-headset"></i><span>+923497333036</span><br /><span>+923488320805</span></li>
                  <li><i class="fa-regular fa-envelope">

                  </i><span>mehmoodkhadija524@gmail.com</span>
                  
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <p>Copyright © 2023 Pungent. All Rights Reserved By khadija
              <a href="#" target="_blank" style={{ marginLeft: "4px" }}></a></p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer