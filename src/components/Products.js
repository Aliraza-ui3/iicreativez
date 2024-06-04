import React from "react";
import {Row, Col } from 'react-bootstrap';
import './Product.css';
import img from '../assets/14.png';
import img1 from '../assets/55.jpg';
import img2 from '../assets/25.jpg';
import img3 from '../assets/44.png';

const Products = () => {
    return (
        <>
        <div class="row py-4"></div>
        <div className="award-recognition">
        <h1>Projects</h1>
      </div>
      <div className="award-recognition">
        <h3>Projects We Have Completed So Far</h3>
      </div>
      <div class="row py-4">
      <Row className="justify-content-center">
        <Col lg={3} md={6} sm={12} className="mb-4">
          <div class="card">
  <div class="card__img">
  <img src={img} alt="Project" className="img-fluid" />
  </div>
  <div class="card__descr-wrapper">
    <p class="card__title">
    Enterprise Resource Planning (ERP) System
  </p>
  </div>
</div>
            <div className="card-body">
             
            </div>
        </Col>
        <Col lg={3} md={6} sm={12} className="mb-4">
          <div class="card">
  <div class="card__img">
  <img src={img2} alt="Project" className="img-fluid" />
  </div>
  <div class="card__descr-wrapper">
    <p class="card__title">
    Customer Relationship Management (CRM) Systems
  </p>
  </div>
</div>
            <div className="card-body">
             
            </div>
        </Col>
        <Col lg={3} md={6} sm={12} className="mb-4">
          <div class="card">
  <div class="card__img">
  <img src={img1} alt="Project" className="img-fluid" />
  </div>
  <div class="card__descr-wrapper">
    <p class="card__title">
    Healthcare Management Systems
  </p>
  </div>
</div>
            <div className="card-body">
             
            </div>
        </Col>
        <Col lg={3} md={6} sm={12} className="mb-4">
          <div class="card">
  <div class="card__img">
  <img src={img3} alt="Project" className="img-fluid" />
  </div>
  <div class="card__descr-wrapper">
    <p class="card__title">
    Supply Chain Management (SCM) Software
  </p>
  </div>
</div>
            <div className="card-body">
             
            </div>
        </Col>
      </Row>
      </div>
      
        </>
    );
};

export default Products;