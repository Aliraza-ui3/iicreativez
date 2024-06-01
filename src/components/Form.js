import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function BasicExample() {
  return (
    <Container className="my-3">
      <div className="intro-container">
        <h1 className='my-4 fw-bold'>Contact Us</h1>
        <div className="container">
          <Form className="my-5">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className="mb-3">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div> {/* Closing div for intro-container */}
    </Container>
  );
}

export default BasicExample;
