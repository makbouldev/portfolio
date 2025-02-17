import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your message has been sent! ✅");
      };
    return (
        <div id='Contact' className="contact-container">
            <div className="contact-form">
                <h2>Let's Discuss Projects</h2>
                <p>Have a project in mind? Let's bring your ideas to life! Fill out the form below, and I'll get back to you as soon as possible.</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <div className="contact-info">
                <h2>Contact Information</h2>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faPhone} />
                        <div>
                            <h4>Phone</h4>
                            <span>+212718003901</span>
                        </div> 
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <div>
                            <h4>Email</h4>
                            <span>noureddinema03@gmail.com</span>
                        </div> 
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <div>
                            <h4>Address</h4>
                            <span>Morocco , Casablanca , 2037</span>
                        </div> 
                    </li>
                </ul>
                <div className="map">
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6265.334907299059!2d-7.5669395638723!3d33.559605473137296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sma!4v1738798621954!5m2!1sar!2sma" width="500" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;