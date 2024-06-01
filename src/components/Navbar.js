import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Navbar.css'; // Adjust the path according to your project structure

const BasicExample = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <span className="brand-text">Icreativez</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link-custom" href="#home">Home</Nav.Link>
            <Nav.Link className="nav-link-custom" href="#about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
