import React, { useEffect, useRef, useState } from "react";
import "./contactme.css";
import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      className={`contact ${isVisible ? "show" : ""}`}
      id="contact"
      ref={sectionRef}
    >
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p className="contact-intro">
          I’m always open to connecting — whether it’s for a project, work
          opportunity, or just a friendly chat!
        </p>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/rasara-premachandre"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ughirunirasara@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope className="contact-icon" />
            <span>Email</span>
          </a>

          <a
            href="https://wa.me/94715896668"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="contact-icon" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
