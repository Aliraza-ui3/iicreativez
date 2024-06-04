import React from 'react';
import Card1 from '../assets/12.png';
import Card2 from '../assets/11.png';
import Card3 from '../assets/13.png';
import { Container, Row, Col } from 'react-bootstrap';
import './Card.css';

function CardComponent() {
  return (
    
    <Container className="my-5">
      <div className="award-recognition">
        <h1>AWARD AND RECOGNITION</h1>
      </div>
      <div className="award-recognition">
        <h3>We are an Award-Winning IT services company in Pakistan</h3>
      </div>
      <div className="award-recognition">
        <h5>Since 2016 we are growing</h5>
      </div>
      <Row className="justify-content-center">
        <Col lg={4} md={6} sm={12} className="mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={Card2} alt="Card image cap" />
            <div className="card-body">
             
            </div>
          </div>
        </Col>
        <Col lg={4} md={6} sm={12} className="mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={Card1} alt="Card image cap" />
            <div className="card-body">
             
            </div>
          </div>
        </Col>
        <Col lg={4} md={6} sm={12} className="mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={Card3} alt="Card image cap" />
            <div className="card-body">
            
            </div>
          </div>
        </Col>
        
      </Row>
      
    </Container>
    
  );
}

export default CardComponent;
