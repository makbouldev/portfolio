import React from "react";
import "./Home.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faReact, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCode , faListCheck } from "@fortawesome/free-solid-svg-icons";


const Home = () => {

  const words = ["WEB DEVOLOPER", "WEB DESIGNER", "FULLSTACK DEVELOPER"];
  const [index, setIndex] = useState(0);

  const updateIndex = () => {
    setIndex((prevIndex) => (prevIndex + 1) % words.length);
    setTimeout(updateIndex, 1500); 
  };

  useState(() => {
    setTimeout(updateIndex, 1000); 
  });
  return (
    <div id="Home" className="home">
      <div className="BlackSection">
        <div className="TextSection">
          <h1> I'm NorEdin</h1>
          <h2> I'AM {words[index]}</h2>
          <div className="HomeButtons">
          <a className="talk" href="#Contact">Let's Talk</a>
          <a href="./CV.pdf" download={'./CV.pdf'} target="_blank" className='CV' >Download CV <i class="fa-solid fa-arrow-down fa-beat-fade"></i> </a>
          </div>
          
          <div className="stats">
            <div>
              <h3><FontAwesomeIcon icon={faListCheck} /></h3>
              <p>Gestion de Projet</p>
            </div>
            <div>
              <h3><FontAwesomeIcon icon={faReact} /></h3>
              <p>React.Js</p>
            </div>
            <div>
              <h3><FontAwesomeIcon icon={faCode} /></h3>
              <p>Smart Building</p>
            </div>
          </div>
        </div>
      </div>
      <div className="GreenSection"></div>
      <img src="https://i.ibb.co/sdDTFLd9/image-4-Photoroom.png" alt="" />
      <div className="social-buttons">
        <a href="https://github.com/NorEdin03" target="_blank" rel="noopener noreferrer" className="social-btn">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/noureddinema" target="_blank" rel="noopener noreferrer" className="social-btn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
};

export default Home;
