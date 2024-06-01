import React from 'react';
import './Intro.css'; 
import { Container } from 'react-bootstrap';

const Intro = () => {
  return (
    <Container className="my-3">
    <div className="intro-container">
    <h1 className='my-4 fw-bold'>Introduction</h1>
      <p className="intro-text">
        We are a leading IT company dedicated to delivering innovative solutions that empower businesses and individuals alike. With a team of skilled professionals and cutting-edge technologies, we strive to exceed expectations and drive digital transformation.
      </p>
      <p className="intro-text">
        Our services range from web and mobile app development to cloud solutions and cybersecurity. We combine creativity, technical expertise, and industry insights to create tailored solutions that address your unique challenges and goals.
      </p>
      <p className="intro-text">
        Whether you're a startup looking to establish your online presence or an enterprise seeking scalable solutions, we are here to help you succeed in today's digital landscape.
      </p>
    </div>
    </Container>
  );
}

export default Intro;
