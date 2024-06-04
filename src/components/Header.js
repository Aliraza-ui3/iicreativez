import React from 'react';
import headerImage from '../assets/9.jpg'; 
import './Header.css';

const HeaderImage = () => {
  return (
    <div className="header-image-container">
      <img src={headerImage} alt="Header" className="header-image" />
    </div>
  );
}

export default HeaderImage;
