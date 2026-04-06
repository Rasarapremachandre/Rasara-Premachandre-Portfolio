import React, { useState, useRef } from "react";
import "./certificate.css";

// Upload PDFs
import AgileTesting from "../../assets/AgileTesting.pdf";
import LambdaTest from "../../assets/LambdaTest Software Testing Professional Certificate.pdf";
import ProgrammingFoundations from "../../assets/Programming Foundations Software TestingQA.pdf";
import firststYacademictranscript from "../../assets/firststYacademictranscript.pdf";
import Transcript from "../../assets/Transcript.pdf";
import DegreeCompleteLetter from "../../assets/DegreeCompleteLetter.pdf";
import Degreecertificate from "../../assets/Degreecertificate .pdf";
import SucceedinginSoftwareTesting from "../../assets/SucceedinginSoftwareTesting.pdf";

export default function Certificate() {
  const [activeTab, setActiveTab] = useState("qa");
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const amount = 320;
    if (direction === "left") {
      scrollRef.current.scrollLeft -= amount;
    } else {
      scrollRef.current.scrollLeft += amount;
    }
  };

  const certificates = {

    degree: [
      { title: "Degree Certificate", issuer: "University of Plymouth, UK", year: "2025", link: Degreecertificate },
      //{ title: "Degree Completed Letter", issuer: "University of Plymouth, UK", year: "2025", link: DegreeCompleteLetter },//
      { title: "First Year Academic Transcript", issuer: "NSBM Green University", year: "2025", link: firststYacademictranscript },
      { title: "Final Transcript", issuer: "University of Plymouth, UK", year: "2025", link: Transcript },
    ],
    qa: [
      { title: "Agile Testing Fundamentals", issuer: "LinkedIn", year: "2025", link: AgileTesting },
      { title: "LambdaTest Software Testing Professional Certificate", issuer: "LinkedIn", year: "2025", link: LambdaTest },
      { title: "Programming Foundations – Software Testing QA", issuer: "LinkedIn", year: "2025", link: ProgrammingFoundations },
      { title: "Succeedingin Software Testing", issuer: "LinkedIn", year: "2025", link: SucceedinginSoftwareTesting},
    ],

      /*
      pm: [
        { title: "Agile Testing Fundamentals", issuer: "LinkedIn", year: "2025", link: AgileTesting },
        { title: "Agile Testing Fundamentals", issuer: "LinkedIn", year: "2025", link: AgileTesting },
        { title: "Agile Testing Fundamentals", issuer: "LinkedIn", year: "2025", link: AgileTesting },

      */
     


   };

  const renderCards = certificates[activeTab].map((cert, index) => (
    <div key={index} className="certificate-card">
      <h3>{cert.title}</h3>
      <p><strong>Issuer:</strong> {cert.issuer}</p>
      <p><strong>Year:</strong> {cert.year}</p>
      <a href={cert.link} target="_blank" rel="noreferrer" className="view-btn">
        View Certificate
      </a>
    </div>
  ));

  return (
    <section className="certificate" id="certificates">
      <div className="certificate-container">
        <h2>Certificates</h2>
        <p>A collection of my verified certifications showcasing my continuous learning.</p>

        {/* 🔥 TAB BUTTONS */}
        <div className="tab-buttons">

          <button
            className={activeTab === "qa" ? "tab-btn active" : "tab-btn"}
            onClick={() => setActiveTab("qa")}
          >
            Software Quality Assurance
          </button>
          
          <button
            className={activeTab === "degree" ? "tab-btn active" : "tab-btn"}
            onClick={() => setActiveTab("degree")}
          >
            Degree Certificates
          </button>


         {/*
          <button
            className={activeTab === "pm" ? "tab-btn active" : "tab-btn"}
            onClick={() => setActiveTab("pm")}
          >
            Project Management
          </button>

         */}

        </div>

        {/* 🔥 SCROLL GRID */}
        <div className="scroll-wrapper">
          <button className="scroll-btn left" onClick={() => scroll("left")}>❮</button>

          <div className="certificate-grid" ref={scrollRef}>
            {renderCards}
          </div>

          <button className="scroll-btn right" onClick={() => scroll("right")}>❯</button>
        </div>
      </div>
    </section>
  );
}
