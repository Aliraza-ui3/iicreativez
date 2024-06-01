import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Container } from 'react-bootstrap';
import './Card.css';

const Slideshow = () => {
  return (
    <Container className="my-3">
      <div className="intro-container">
        <h1 className='my-4 fw-bold text-center'>Our Motto</h1>
        <div className="slideshow-container">
          <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000}>
            <div>
              <img src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Slide 1" />
              <p className="legend">Creativity</p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2plY3R8ZW58MHx8MHx8fDA%3D" alt="Slide 2" />
              <p className="legend">Project Management</p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2plY3R8ZW58MHx8MHx8fDA%3D" alt="Slide 3" />
              <p className="legend">Team Work</p>
            </div>
          </Carousel>
        </div>
      </div>
    </Container>
  );
}

export default Slideshow;
