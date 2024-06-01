import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <div className="container">
            <Container className="my-3">
                <Row className="mx-2">
                    <Col lg={6} md={6} sm={12}>
                        <h1 className='my-4 fw-bold'>About us</h1>
                        <p>
                        Welcome to our IT company, where innovation meets excellence. We are dedicated to providing cutting-edge solutions that empower businesses and individuals to thrive in the digital age.
                        <br /><br />
                        Our team of skilled professionals specializes in web and mobile app development, cloud solutions, cybersecurity, and more. We combine technical expertise with creativity to deliver customized solutions tailored to your unique needs.
                        <br /><br />
                            What We Stand For:
                            <br />
                            With a focus on quality, reliability, and customer satisfaction, we strive to exceed expectations and drive meaningful impact for our clients. Join us on our journey of digital transformation and let's build a brighter future together.
                            <br />
                          </p>
                    </Col>
                </Row>
            </Container>
      </div>
    </div>
  );
}

export default Home;
