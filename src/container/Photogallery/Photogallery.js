import React, { useState } from "react";
import ModalImage from "react-modal-image"
import "./Photogallery.css";

import { images } from "../../constants";

const Photogallery = () => {

  return (
    <section id="photogallery" class="photogallery">
      <div class="container">
        <div class="header">
          <h1>Photo Gallery</h1>
        </div>
        <div className="gallery">
          <div className="item">
            <ModalImage
            className="modal-image"
              small={images.photo1}
              large={images.photo1}
              alt="Hello"
            />
          </div>
          <div className="item">
            <ModalImage
              small={images.photo2}
              large={images.photo2}
              alt=""
            />
          </div>
          <div className="item">
            <ModalImage
             small={images.photo1}
             large={images.photo1}
              alt=""
            />
          </div>
          <div className="item">
            <ModalImage
            className="modal-image"
              small={images.photo2}
              large={images.photo2}
              alt="Hello"
            />
          </div>
          <div className="item">
            <ModalImage
             small={images.photo1}
             large={images.photo1}
              alt=""
            />
          </div>
          <div className="item">
            <ModalImage
              small={images.photo2}
              large={images.photo2}
              alt=""
            />
          </div>
          <div className="item">
            <ModalImage
              small={images.photo1}
              large={images.photo1}
              alt=""
            />
          </div>
          <div className="item">
            <ModalImage
              small={images.photo2}
              large={images.photo2}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photogallery;
