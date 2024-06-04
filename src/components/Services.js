import React from "react";
import './Services.css';

const Services = () => {
    return (
        <div className="services-section" id="services">
        <div className="inner-width">
            <h1 className="section-title">Our Services </h1>
             <div className="border"></div>
                 <div className="services-container">
                    <div className="service-box">
                        <div className="service-icon">
                        <i FontAwesomeIcon icon="fa-duotone fa-code" >  </i>
                        </div>
                        <div className="service-title"> Web Development </div>
                        <div className="service-desc">
                           Here's a description of the Service Name 
                        </div>
                    </div>
    
    
                    <div className="service-box">
                        <div className="service-icon">
                        <i className="fas fa-code">   </i>
                        </div>
                        <div className="service-title"> Software Quality Assuarance </div>
                        <div className="service-desc">
                            Here's a description of the Service Name
                        </div>
                    </div>
    
    
                    <div className="service-box">
                        <div className="service-icon">
                        <i className="fas fa-brush">   </i>
                        </div>
                        <div className="service-title"> SEO Services </div>
                        <div className="service-desc">
                            Here's a description of the Service Name 
                        </div>
                    </div>
    
    
                    <div className="service-box">
                        <div className="service-icon">
                        <i className="fas fa-object-ungroup">   </i>
                        </div>
                        <div className="service-title"> Blog Writting </div>
                        <div className="service-desc">
                            Here's a description of the Service Name 
                        </div>
                    </div>
    
    
                    <div className="service-box">
                        <div className="service-icon">
                        <i className="fas fa-database">   </i>
                        </div>
                        <div className="service-title"> Machine Learning </div>
                        <div className="service-desc">
                            Here's a description of the Service Name 
                        </div>
                    </div>
    
    
                    <div className="service-box">
                        <div className="service-icon">
                        <i className="fab fa-android">   </i>
                        </div>
                        <div className="service-title"> Software Development </div>
                        <div className="service-desc">
                            Here's a description of the Service Name  
                        </div>
                    </div>
    
    
    
                 </div>
        </div> 
    </div>
    );
};


export default Services;