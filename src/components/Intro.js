import React from 'react';
import Slider1 from '../assets/1.jpg';
import Slider2 from '../assets/2.jpg';
import Slider3 from '../assets/3.jpg';
import './Intro.css';

function Intro() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Slider1} className="d-block w-100" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img src={Slider2} className="d-block w-100" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img src={Slider3} className="d-block w-100" alt="Third slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Intro;
