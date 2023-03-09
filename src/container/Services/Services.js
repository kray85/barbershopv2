import React from "react";

import { images } from "../../constants";

import "./Services.css";

const Services = () => {
  return (
    <div>
      {" "}
      <section id="services" className="services">
        <div className="list">
          <div className="card card1">
            <div className="card-image">
              <div className="circle img_bg-color-2">
                <img src={images.hairStylespng} alt="A Comb" />
              </div>
            </div>
            <div className="card-content">
              <h3>Hair Styles</h3>
              <p>
                Our talented barbers can create any hair style you desire,
                whether it's a classy look or the latest trend. From short
                haircuts to longer styles, we use the latest techniques and
                tools to deliver a flawless finish. Trust us to give you the
                perfect look that suits your face shape, hair type, and
                lifestyle.
              </p>
            </div>
          </div>
          <div className="card card2 bg-color-2">
            <div className="card-image">
              <div className="circle">
                <img src={images.hotShave} alt="Shaving Cream" />
              </div>
            </div>
            <div className="card-content">
              <h3>Hot Shave</h3>
              <p>
                Indulge in the ultimate grooming experience with our hot shave.
                Our barbers use traditional methods and premium products to
                create a luxurious and relaxing shave. Enjoy a hot towel, a
                moisturizing shave cream, and a refreshing aftershave, all while
                sitting back and being pampered.
              </p>
            </div>
          </div>
          <div className="card card3">
            <div className="card-image">
              <div className="circle img_bg-color-2">
                <img src={images.shampoo} alt="Shampoo" />
              </div>
            </div>
            <div className="card-content">
              <h3>Hair Shampoo</h3>
              <p>
                Our hair shampoo service is designed to leave your hair feeling
                refreshed, revitalized, and ready to take on the world. Our
                barbers use high-quality products to nourish your hair and
                scalp, leaving your hair soft, shiny, and full of life.
              </p>
            </div>
          </div>
          <div className="card card4 bg-color-2">
            <div className="card-image">
              <div className="circle">
                <img src={images.trimmer} alt="Trimmer" />
              </div>
            </div>
            <div className="card-content">
              <h3>Beard Trim</h3>
              <p>
                A well-groomed beard can make a statement and add character to
                your appearance. Our barbers are experts in beard trimming and
                can help you achieve the perfect length, shape, and style for
                your face. Whether you want a clean and tidy look or a more
                rugged style, we've got you covered.
              </p>
            </div>
          </div>
          {/* Repeat card divs for other services */}
        </div>
      </section>
    </div>
  );
};

export default Services;
