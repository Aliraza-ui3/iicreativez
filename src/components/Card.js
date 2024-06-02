import React from 'react';
import Card1 from '../assets/5.jpg';
import Card2 from '../assets/6.jpg';
import { Container, Row, Col } from 'react-bootstrap';

function CardComponent() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={4} md={6} sm={12} className="mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={Card2} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Founder</h5>
              <p className="card-text">
              John Doe is a visionary entrepreneur with over 20 years of experience in the tech industry. His passion for innovation and excellence laid the foundation for our company, driving us to the forefront of digital transformation.
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6} sm={12} className="mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={Card1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">CEO</h5>
              <p className="card-text">
              Jane Smith is a dynamic leader known for her strategic vision and commitment to customer success. With a track record of driving growth and innovation, she guides our company towards achieving new heights.
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6} sm={12} className="mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={Card2} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">CTO</h5>
              <p className="card-text">
              Emily Johnson is a tech-savvy innovator with a deep understanding of emerging technologies. Her expertise in software development and cybersecurity ensures our solutions are both cutting-edge and secure.
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CardComponent;
