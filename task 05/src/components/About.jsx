import React from 'react';
import './About.css'; 

const About = () => {
  return (
      <main className="main-container">
        <section className="second-section">
          <h1 className="about-title">About Me!</h1>
          <p className="about-paragraph">
            Welcome to my portfolio! I'm <span className="highlighted-text">Ahsin</span>, a passionate and dedicated web developer with a knack for crafting exceptional digital experiences. With 1.5 years of experience in the industry, I thrive on turning ideas into reality through innovative web solutions.
          </p>
          <p className="about-paragraph">
            My journey into the world of web development began with a curiosity-driven exploration of HTML, CSS, and JavaScript. Over time, I honed my skills and expanded my expertise to include a wide range of technologies and frameworks, including React.js, Node.js, Express.js, and MongoDB, among others.
          </p>
          <p className="about-paragraph">
            I specialize in creating responsive and user-friendly web applications that not only look great but also perform flawlessly across all devices. I'm excited about the opportunity to collaborate on your next web project and bring your ideas to life. Let's work together to create something extraordinary!
          </p>
        </section>
        <hr className="separator" />
      </main>
  );
}

export default About;
