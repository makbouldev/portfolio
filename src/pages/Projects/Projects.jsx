import React from "react";
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh , faMedal , faTruck } from '@fortawesome/free-solid-svg-icons';
const Projects = () => {

  const process = [
      {
        id: 1,
        title: 'WEBSITE QUALITY' ,
        icon:<FontAwesomeIcon icon={faMedal} />,
        description: 'I focus on creating websites that are visually appealing, user-friendly, and optimized for performance. I use the latest technologies and best practices to deliver a high-quality website.'
      },
      {
        id: 2,
        title: 'FAST WEBSITE' ,
        icon: <FontAwesomeIcon icon={faGaugeHigh} />,
        description: ' I optimize websites for speed and performance to ensure a smooth user experience. I use techniques such as image optimization, lazy loading, and code minification to improve website speed.'
      },
      {
        id: 3,
        title: 'FAST DELIVERY' ,
        icon: <FontAwesomeIcon icon={faTruck} />,
        description: 'I work efficiently to deliver websites on time and within budget. I use agile development methodologies to streamline the development process and ensure timely delivery.'
      },
    
      
    ];


  const projectsData = [
    {
      img: "https://i.ibb.co/c1yDh87/restaurant.jpg",
      title: "Restaurant",
      date: "2024-09",
      langue: "HTML, CSS, JS",
      link: "https://makbouldev.github.io/Restaurant/",
    },
    {
      img: "https://i.ibb.co/7NjHtfSy/panier.png",
      title: "Panier d'achat",
      langue: "React.Js",
      date: "2025-02",
      link: "https://makbouldev.github.io/panier/",
    },
    {
      img: "https://i.ibb.co/My0fTSsm/Screenshot-2025-02-01-023028.png",
      title: "BoxCar",
      langue: "React.Js",
      date: "2025-01",
      link: "https://makbouldev.github.io/BoxCar/",
    },
    {
      img: "https://i.ibb.co/CKWcFdPZ/Screenshot-2025-02-16-143757.png",
      title: "Calculator",
      langue: "React.Js",
      date: "2025-01",
      link: "https://makbouldev.github.io/calculator/",
    },
    {
      img: "https://i.ibb.co/PFjB2b7/project2.jpg",
      title: "IPHONE 13 PRO MAX",
      langue: "HTML, CSS, JS",
      date: "2024-09",
      link: "https://makbouldev.github.io/iphone13",
    },
    {
      img: "https://i.ibb.co/cLZzDtq/travel.jpg",
      title: "TRAVEL IN",
      langue: "HTML, CSS, JS",
      date: "2024-05",
      link: "https://makbouldev.github.io/travelin/",
    },
    {
      img: "https://i.ibb.co/rpz7Rf3/Location.jpg",
      title: "NLC Location",
      langue: "PHP, MYSQL, HTML, CSS, JS",
      date: "2024-07",
      link: "http://makbouldev.free.nf/",
    },
    {
      img: "https://i.ibb.co/GdPm8f7/todolist.png",
      title: "TodoList Application",
      langue: "React.Js",
      date: "2024-12",
      link: "https://makbouldev.github.io/todolist/",
    },

    
  ];

  return (
    <div id="projects" className="projects">
      <p className="title">
        <i className="fa-solid fa-code"></i>My Featured Projects<i className="fa-solid fa-code"></i>
      </p>
      <div className="latest-projects">
        {projectsData.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-img">
              <img src={project.img} alt={project.title} />
            </div>

            <h4>{project.title}</h4>
            <p className="langue" >{project.langue}</p>
            <p>{project.date}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        ))}
      </div>
      <div className="process">
      <div className="process-container">
        <div className="process-Text"> 
          <h2 className="process-title">MY PROCESS</h2>
          <p className="process-subtitle">
             My process is simple, I work closely with my clients to deliver a website that is tailored to their needs.
          </p>
        </div>
        
        <div className="process-grid">
          {process.map((process, index) => (
            <div className="process-card" key={index}>
              <h1 className='process-icon' >{process.icon}</h1>
              <h3 className="process-title">{process.title}</h3>
              <p className="process-description">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Projects;
