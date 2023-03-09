import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
    {/* <div className="newsletter">
      <span>Newsletter</span><div className="email"><input type="email" placeholder="Your email" /><i className="fa fa-paper-plane"></i></div>
    </div> */}
    <div className="social-links">
      <div className="link"><a href="#"><i className="fa fa-facebook"></i></a></div>
      <div className="link"><a href="#"><i className="fa fa-instagram"></i></a></div>
      <div className="link"><a href="#"><i className="fa fa-twitter"></i></a></div>
    </div>
    <div className="copyright">
      <p>&copy; Copyright, 2023 - TetraDigitalGuy</p>
    </div>
  </footer>
  );
};

export default Footer;
