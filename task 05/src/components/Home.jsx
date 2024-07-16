import React, { useRef } from 'react';
import Typed from 'typed.js';
import './Home.css'; 

const Home = () => {
  const el = useRef();

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer.', 'React Developer.'],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const onButtonClick = () => {
    const link = document.getElementById("link");
    link.href.download = "src\\assets\\Resume.pdf"; 
  };

  return (
      <main className="main-container">
        <section className="first-section">
          <div className="left-section">
            Hi! my name is <span className="highlighted-text">M.Ahsin Ali</span>
            <div className="description">
              and i am a passionate
              <div className="typed-text"><span ref={el}></span></div>
            </div>
            <div className="tagline">
              Crafting digital experiences that leave a lasting impression,
              <span className="smile-container"> one line of code at a time. &nbsp;
                <img src="src/assets/smile.svg" alt="smile" />
              </span>
            </div>
            <div className="download-container">
              <a href="src/assets/Resume.pdf" id="link">
                <button id="downloadButton" className="download-button" onClick={onButtonClick}>Download CV</button>
              </a>
            </div>
          </div>
          <div className="right-section">
            <img src="src/assets/bg.png" alt="coder" className="coder-image" />
          </div>
        </section>
        <hr className="separator" />
      </main>
  );
}

export default Home;
