import React from 'react';
import './intro.css';
import pp4 from '../../assets/pp4.png';
import CV from "../../assets/CV.pdf";

import { FaLinkedin, FaBehanceSquare } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="intro">

      <div className="intro-left">
        <h2 className="intro-hi">Hello, I’m</h2>
        <h1 className="intro-name">Rasara Premachandre</h1>
        <p className="intro-role">Project Management | Business Analysis | Software Quality Assurance</p>

        <div className="intro-social">
          <a
            href="https://www.linkedin.com/in/rasara-premachandre"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>

          <a
            href="https://www.behance.net/" // replace with your Behance profile link
            target="_blank"
            rel="noreferrer"
          >
            <FaBehanceSquare className="social-icon" />
          </a>
        </div>

        <div className="intro-buttons">
          <a 
            href={CV} 
            target="_blank" 
            rel="noreferrer"
          >
            <button className="btn-primary">Download Resume</button>
          </a>

          <button 
            className="btn-outline"
            onClick={() => {
              const projectSection = document.getElementById("projects");
              if (projectSection) {
                projectSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Projects
          </button>
</div>

      </div>

      <div className="intro-right">
        <img src={pp4} alt="Profile" className="intro-img" />
      </div>

    </section>
  );
};

export default Intro;
