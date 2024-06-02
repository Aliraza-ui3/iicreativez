import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import About from './components/Aboutus';
import Card from './components/Card';
import Form from './components/Form';
import Footer from './components/Footer';
import Intro from './components/Intro';
import './App.css';

function App() {
  return (
      <div>
        <Navbar />
        <Intro/>
        <Card />
        <About/>
        <Form />
        <Footer />
      </div>
  );
}

export default App;
