import React from 'react';


function ServicesSection({image, title, text, icon}) {
    return (
        <div className="ServicesSection">
            <div className="service">
                <div className="service-content">
                    {/* /<FontAwesomeIcon icon={image} className="mobile-icon"/> */}
                    <img src={image} alt="" className="s-img"/>
                    <h5 className="s-title">{title}</h5>
                    <p className="s-text">
                        {text}
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;
