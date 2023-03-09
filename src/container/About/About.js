import React from 'react';

import {images} from '../../constants'

import './About.css';

const About = () => {
  return (
    <div> <section id="about" class="about">
    <div class="container">
      <div class="flex-container">
        <div class="about-image">
          <img src={images.aboutImage} alt="" />
        </div>
        <div class="about-info">
          <span>About Barbershop</span>
          <h2>Experience the Art of Barbering with [Barbershop Name]</h2>
          <p>
            At [Barbershop Name], we believe that a great haircut is more
            than just a service - it's an experience. Our skilled barbers
            are passionate about their craft and dedicated to providing the
            best possible service to each and every customer.
          </p>
        </div>
      </div>
    </div>
  </section></div>

  )
};

export default About;
