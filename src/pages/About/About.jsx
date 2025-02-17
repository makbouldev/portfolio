import React from 'react';
import './About.css';

const About = () => {
    return (
        <div id='About' className="about-container">
            <div className="about-image">
                <img src="https://i.ibb.co/DPg7y7Cm/propic.png" alt="Your Name" />
            </div>
            <div className="about-text">
                <h1>About Me</h1>
                <p>
                    Hello! I'm Noureddine, a passionate developer with expertise in creating dynamic and responsive web applications. I love to explore new technologies and continuously improve my skills. My goal is to build user-friendly and efficient applications that solve real-world problems.
                </p>
                <div className="social-media">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/noureddinema/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/NorEdin03" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://instagram.com/makboulking" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <a href="./CV.pdf" download={'./CV.pdf'} target="_blank" className='CV' >Download CV <i class="fa-solid fa-arrow-down fa-beat-fade"></i> </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;