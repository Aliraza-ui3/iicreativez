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
                           We have world class website developers, your website will work smooth with aesthetic looks 
                        </div>
                    </div>
    
    
                    <div className="service-box">
                        <div className="service-icon">
                        <i className="fas fa-code">   </i>
                        </div>
                        <div className="service-title"> Software Quality Assuarance </div>
                        <div className="service-desc">
                            To improve the Quality of your software making sure it doesn't fail when you need it
                        </div>
                    </div>
    
    
                    <div className="service-box">
                        <div className="service-icon">
                        <i className="fas fa-brush">   </i>
                        </div>
                        <div className="service-title"> SEO Services </div>
                        <div className="service-desc">
                            Your site or blog will rank among top 10  
                        </div>
                    </div>
    
    
                    <div className="service-box">
                        <div className="service-icon">
                        <i className="fas fa-object-ungroup">   </i>
                        </div>
                        <div className="service-title"> Blog Writting </div>
                        <div className="service-desc">
                            creative writing making your imagination alive with words 
                        </div>
                    </div>
    
    
                    <div className="service-box">
                        <div className="service-icon">
                        <i className="fas fa-database">   </i>
                        </div>
                        <div className="service-title"> Machine Learning </div>
                        <div className="service-desc">
                            train any model to help escalatae your task  
                        </div>
                    </div>
    
    
                    <div className="service-box">
                        <div className="service-icon">
                        <i className="fab fa-android">   </i>
                        </div>
                        <div className="service-title"> Software Development </div>
                        <div className="service-desc">
                            to develop software according your requirements with suggestions and guide  
                        </div>
                    </div>
    
    
    
                 </div>
        </div> 
    </div>
    );
};


export default Services;