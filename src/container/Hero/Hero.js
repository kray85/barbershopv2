import React, { useState } from "react";

import "./Hero.css";

import { images } from "../../constants";

const Hero = () => {
  return (
    <section id="hero" className="hero">
     <div className="container">
        <div className="info">
          <small>Welcome to The BarberShop</small>
          <h1>
            <span>Unleash your style</span> with a classy <span>cut</span>
            <br />
            at <span>the BarberShop</span>
          </h1>
          <p>Where every cut is a masterpiece!</p>
          <a
            href="https://booking.setmore.com/scheduleappointment/21879660-cb8a-47c8-8e45-6db97d24c41c"
            target="_blank" rel="noreferrer"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
