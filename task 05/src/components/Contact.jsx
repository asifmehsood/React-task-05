import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <main className="main-container">
        <section className="contact-section">
          <h1 className="contact-title">Contact Me</h1>
          <div className="contact-content">
            <span className="contact-quote">
              "Ready to collaborate or have a question? Let's connect!"
            </span>
            <span className="contact-email">
              gmail: &nbsp;
              <span className="email-address"> ahsinraj757@gmail.com</span>
            </span>
            <div className="contact-links">
              <a href="https://github.com/ahsinali-17" target="_blank" rel="noopener noreferrer">
                <img src="src/assets/github.svg" alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/ahsin-ali-3a5135276/" target="_blank" rel="noopener noreferrer">
                <img src="src/assets/linkedin.svg" alt="linkedin" />
              </a>
            </div>
          </div>
        </section>
        <footer className="footer">
          <span>
            <span className="footer-highlight">AA</span>portfolio &#169; 2024. All rights reserved.
          </span>
        </footer>
      </main>
    </div>
  );
}

export default Contact;
