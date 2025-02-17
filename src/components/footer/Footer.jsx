import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-row">
                    <div className="footer-col">
                        <h4>About Me</h4>
                        <ul>
                            <li><a href="#About">Who I Am</a></li>
                            <li><a href="#Skills">My Skills</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Projects</h4>
                        <ul>
                            <li><a href="#projects">My Work</a></li>
                            <li><a href="#Services">My Services</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="mailto:contact.NorEdin@gmail.com">Email Me</a></li>
                            <li><a href="#Contact">Contact Form</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow Me</h4>
                        <div className="social-links">
                            <a href="https://github.com/Noredin03"><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/noureddinema/"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://youtube.com/"><i className="fab fa-youtube"></i></a>
                            <a href="https://instagram.com/makboulking"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} NorEdin. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
