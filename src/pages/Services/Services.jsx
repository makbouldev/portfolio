import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette , faCode , faCamera } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'FULLSTACK DEVELOPER' ,
      icon:<FontAwesomeIcon icon={faCode} />,
      description: 'I am a full-stack developer with a passion for creating beautiful, responsive websites With a focus on user experience and performance.'
    },
    {
      id: 2,
      title: 'GRAPHIC DESIGNER' ,
      icon: <FontAwesomeIcon icon={faPalette} />,
      description: 'I am a graphic designer with a passion for creating beautiful, quality designs. I specialize in branding, print design, and digital design.'
    },
    {
      id: 3,
      title: 'PHOTOGRAPHER' ,
      icon: <FontAwesomeIcon icon={faCamera} />,
      description: 'I am a photographer with a passion for capturing beautiful moments. I specialize in portrait photography, event photography, and landscape photography.'
    },
  
    
  ];


  return (
    <section id='Services' className="services">
      <div className="services-container">
        <div className="section-Text"> 
          <h2 className="section-title">SERVICES</h2>
          <p className="section-subtitle">
            Get a powerful website that delivers results with an all-in-one solution
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h1 className='service-icon' >{service.icon}</h1>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Services;