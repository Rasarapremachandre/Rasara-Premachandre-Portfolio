import React from "react";
import "./skill.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJira } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiFigma, SiSelenium } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <h2>My Expertise</h2>

        {/* Development */}
        <div className="skills-category">
          <h3>Development</h3>
          <div className="skills-row">
            <div className="skill-pill"><FaReact /> React.js</div>
            <div className="skill-pill"><FaHtml5 /> HTML5</div>
            <div className="skill-pill"><FaCss3Alt /> CSS3</div>
            <div className="skill-pill"><SiTailwindcss /> Tailwind CSS</div>
            <div className="skill-pill"><SiMongodb /> MongoDB</div>
            <div className="skill-pill"><DiMysql /> MySQL</div>
          </div>
        </div>

        {/* Tools & QA - side by side */}
        <div className="skills-flex-row">
          
          <div className="skills-category">
            <h3>Tools & Collaboration</h3>
            <div className="skills-row">
              <div className="skill-pill"><FaJira /> Jira</div>
              <div className="skill-pill"><SiFigma /> Figma</div>
              <div className="skill-pill"><VscVscode /> VS Code</div>
            </div>
          </div>

          
          <div className="skills-category">
            <h3>QA & Testing</h3>
            <div className="skills-row">
              <div className="skill-pill"><span className="skill-emoji">📝</span> Manual Testing</div>
              <div className="skill-pill"><SiSelenium /> Selenium</div>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skills-category">
          <h3>Soft Skills</h3>
          <div className="skills-row">
            <div className="skill-pill"><span className="skill-emoji">⚡</span> Agile</div>
            <div className="skill-pill"><span className="skill-emoji">💬</span> Communication</div>
            <div className="skill-pill"><span className="skill-emoji">🧠</span> Problem Solving</div>
            <div className="skill-pill"><span className="skill-emoji">🤝</span> Teamwork</div>
            <div className="skill-pill"><span className="skill-emoji">🔄</span> Adaptability</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
