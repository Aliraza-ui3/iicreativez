import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import About from './components/Aboutus';
import Head from './components/Header';
import Card from './components/Card';
import Form from './components/Form';
import Footer from './components/Footer';
import Test from './components/Testimonial';
import Serve from './components/Services';
import './App.css';


function App() {
  return (
      <div>
        <NavBar />
        <Head/>
        <Card />
        <Test/>
        <Serve/>
        <About/>
        <Form />
        <Footer />
      </div>
  );
}

export default App;
