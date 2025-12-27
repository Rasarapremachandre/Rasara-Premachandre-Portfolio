import React, { useState } from "react";
import "./project.css";

// Import local PDF properly
import HCI_Report from "../../assets/HCI_Report.pdf";
import buildingd from "../../assets/buildingd.png";
import girlyfs from "../../assets/girlyfs.png";
import furstore from "../../assets/furstore.png";

export default function Project() {
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "BuildCore Construction Platform",
      tech: "React, Node.js, MongoDB",
      year: "2025",
      image: buildingd,
      description:
        "A collaborative platform for building design and construction. Features include architect collaboration, real-time updates, and portfolio management.",
      link: "https://github.com/Rasarapremachandre/Building-Design-and-Construction-Web-Application.git",
      isZip: false,
      report: "/buildcore-report.pdf",
    },
    {
      title: "Girly Fashion Store",
      tech: "MERN Stack (MongoDB, Express, React, Node.js)",
      year: "2024",
      image: girlyfs,
      description:
        "A MERN-based fashion e-commerce web application with product management, cart, authentication, and admin dashboard.",
      link: "https://github.com/Rasarapremachandre/girly-Fashion-Store.git",
      isZip: false,
      report: "/fashion-report.pdf",
    },
    {
      title: "Portfolio Website",
      tech: "React, CSS Animations",
      year: "2024",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      description:
        "Personal portfolio website showcasing projects, skills, and contact information with smooth animations.",
      link: "#",
      isZip: false,
      report: "/portfolio-report.pdf",
    },
    {
      title: "Furniture Store Project(Coursework Group Project)",
      tech: `React.js – Frontend Framework,
        Chakra UI – UI Components and Styling,
        Babylon.js – 3D Rendering Engine,
        Zustand – State Management,
        React Router – Routing and Navigation`,
      image: furstore,
      description:
        "A web-based interactive furniture store application built for the HCI coursework. Users can explore 3D furniture, customize rooms, and save their designs with real-time interactions",
      link: "/furniture-store-main.zip",
      isZip: true,
      report: HCI_Report,
    },


  ];

  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <section className="project" id="projects">
      <div className="project-container">
        <h2>Projects</h2>
        <p>A collection of my web development, QA testing, and academic projects.</p>

        <div className="project-grid">
          {visibleProjects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p><strong></strong> {project.description}</p>

              {/* Button behavior */}
              {project.isZip ? (
                <button
                  className="view-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  View Project
                </button>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-btn"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="see-more-wrapper">
            <button
              className="see-more-btn"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "See More"}
            </button>
          </div>
        )}

        {/* Modal for ZIP projects only */}
        {selectedProject && selectedProject.isZip && (
          <div className="project-modal">
            <div className="modal-content modal-flex">
              <div className="modal-left">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>

              <div className="modal-right">
                <h2>{selectedProject.title}</h2>
                <p><strong>Technologies Used:</strong> {selectedProject.tech}</p>
                <p><strong>About Project:</strong> {selectedProject.description}</p>

                <div className="modal-buttons">
                  <div className="left-buttons">
                    {/* Download ZIP */}
                    <a href={selectedProject.link} download className="download-btn">
                      Download Source Code
                    </a>

                    {/* PDF Report */}
                    {selectedProject.report && (
                      <a
                        href={selectedProject.report}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-report-btn"
                      >
                        View Report
                      </a>
                    )}
                  </div>

                  <button
                    className="close-btn"
                    onClick={() => setSelectedProject(null)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
