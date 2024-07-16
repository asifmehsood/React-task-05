import React from 'react';
import './Service.css';

const Services = () => {
  return (
    <div>
      <main className="main-container">
        <section className="second-section">
          <h1 className="services-title">Services</h1>
          <div className="services-container">
            <div className="service-box">
              <img src="src\assets\data.png" alt="website" width="30px" height="30px" />
              <div className="text-container">
                <h1 className="service-title">Custom Web App Dev.</h1>
                <p className="service-description">
                  Building dynamic and scalable web applications from scratch using a combination of React.js, Next.js, Node.js, Express.js, and MongoDB. Creating robust and feature-rich applications tailored to client requirements.
                </p> 
              </div>
            </div>
            <div className="service-box">
              <img src="src\assets\web-design.png" alt="website" width="30px" height="30px" />
              <div className="text-container">
                <h1 className="service-title">Responsive Web Design</h1>
                <p className="service-description">
                  Creating websites that are optimized for various devices and screen sizes to ensure a consistent and enjoyable user experience across desktops, tablets, and smartphones.
                </p>
              </div>
            </div>
            <div className="service-box">
              <img src="src\assets\design.png" alt="website" width="30px" height="30px" />
              <div className="text-container">
                <h1 className="service-title">UI/UX Design</h1>
                <p className="service-description">
                  Creating intuitive UIs and crafting engaging UX to boost usability and drive user satisfaction. This involves designing interfaces that are easy to navigate, ultimately enhancing user satisfaction. Aim to optimize user interaction through thoughtful design decisions.
                </p>
              </div>
            </div>
            <div className="service-box">
              <img src="src\assets\handshake.png" alt="website" width="30px" height="30px" />
              <div className="text-container">
                <h1 className="service-title">Consultation & Training</h1>
                <p className="service-description">
                  Providing consultation services to clients on technology stack selection, architecture design, and best practices, as well as offering training sessions or workshops to teams on JavaScript frameworks and development methods.
                </p>
              </div>
            </div>
          </div>
          <hr className="separator" />
        </section>
      </main>
    </div>
  );
}

export default Services;
