import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaBootstrap, FaDatabase } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
    return (
        <div className="skills" id="Skills">
        <h1>MY SKILLS</h1>
        <div className="skills-container">
            <div className="hard-skills">
                <h2>Hard Skills</h2>
                <div className="skill">
                    <FaHtml5 className="icon" />
                    <div>
                        <h3>HTML</h3>
                        <p>Experienced in creating structured and semantic web pages.</p>
                    </div>
                </div>
                <div className="skill">
                    <FaCss3Alt className="icon" />
                    <div>
                        <h3>CSS</h3>
                        <p>Skilled in designing responsive and visually appealing web pages.</p>
                    </div>
                </div>
                <div className="skill">
                    <FaJs className="icon" />
                    <div>
                        <h3>JavaScript</h3>
                        <p>Proficient in writing dynamic and interactive web applications.</p>
                    </div>
                </div>
                <div className="skill">
                    <FaReact className="icon" />
                    <div>
                        <h3>React</h3>
                        <p>Experienced in building modern web applications using React.</p>
                    </div>
                </div>
                <div className="skill">
                    <FaPhp className="icon" />
                    <div>
                        <h3>PHP</h3>
                        <p>Skilled in server-side scripting and backend development.</p>
                    </div>
                </div>
                <div className="skill">
                    <FaBootstrap className="icon" />
                    <div>
                        <h3>Bootstrap</h3>
                        <p>Proficient in using Bootstrap for responsive design.</p>
                    </div>
                </div>
                <div className="skill">
                    <FaDatabase className="icon" />
                    <div>
                        <h3>MySQL</h3>
                        <p>Experienced in database management and SQL queries.</p>
                    </div>
                </div>
            </div>
            <div className="soft-skills">
                <h2>Soft Skills</h2>
                <ul>
                    <li>Effective Communication</li>
                    <li>Team Collaboration</li>
                    <li>Problem Solving</li>
                    <li>Time Management</li>
                    <li>Adaptability</li>
                    <li>Critical Thinking</li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default Skills;
