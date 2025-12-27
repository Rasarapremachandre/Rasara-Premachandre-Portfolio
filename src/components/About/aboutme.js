import React from "react";
import "./aboutme.css";
import aboutImg from "../../assets/pp.jpg";
import { FaLinkedin, FaBehance } from "react-icons/fa";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* IMAGE */}
        <div className="about-left">
          <img src={aboutImg} alt="About Me" className="about-img" />
        </div>

        {/*  TEXT */}
        <div className="about-right">
          <h2>About Me</h2>

          <p>
          I’m a passionate digital professional specializing in project management, 
          business analysis, quality assurance, and frontend development. Skilled 
          in React.js, HTML, CSS, JavaScript, Tailwind CSS, and Figma, I create 
          responsive, user-friendly interfaces that seamlessly integrate with 
          backend systems.
          </p>

          <p>
          Driven by problem-solving, collaboration, and continuous learning, 
          I focus on building impactful digital experiences that meet both 
          user needs and business goals. By combining technical expertise 
          with strategic thinking, I contribute to efficient, reliable, and 
          modern web solutions.
          </p>



          {/* Buttons */}
          <div className="about-actions">
            <a
              href="https://www.linkedin.com/in/rasara-premachandre"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="about-icon" />
            </a>

            <a
              href="https://www.behance.net/" 
              target="_blank"
              rel="noreferrer"
            >
              <FaBehance className="about-icon" />
            </a>

            <button
              className="contact-btn"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contact
            </button>
          </div>


        </div>
      </div>
    </section>
  );
};

export default About;
