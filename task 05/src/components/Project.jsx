import React from 'react';
import './Projects.css';

const Project = () => {

  const showAll = () => {
    const hprojects = document.querySelector('.hidden-projects');
    const show = document.getElementById('show');
    const hide = document.getElementById('hide');
    if (hprojects.style.display === 'none') {
      hprojects.style.display = 'flex';
      hide.src = 'src/assets/up.svg';
      show.innerHTML = 'Show Less';
    } else if (hprojects.style.display === 'flex') {
      hprojects.style.display = 'none';
      hide.src = 'src/assets/down.svg';
      show.innerHTML = 'Show All';
    }
  };

  return (
    <main className="main-container">
      <section className="second-section">
        <h1 className="project-title">Projects</h1>
        <div className="projects-container">
          <div className="project-box">
            <a className="spotify shadoww" href="https://github.com/ahsinali-17/SPOTIFY---clone.git" target="_blank" rel="noopener noreferrer"></a>
            <div>
              <h3 className="project-subtitle">Spotify - clone</h3>
              <p>Spotify clone with a functional music player which also allows to access different albums to listen related songs....</p>
            </div>
          </div>

          <div className="project-box">
            <a className="pass shadoww" href="https://github.com/ahsinali-17/Password-Manager.git" target="_blank" rel="noopener noreferrer"></a>
            <div>
              <h3 className="project-subtitle">Password - Manager</h3>
              <p>A react app to store passwords and related info using mongoDb. Edit, delete and copy are enabled.</p>
            </div>
          </div>

          <div className="project-box">
            <a className="ttt shadoww" href="https://github.com/ahsinali-17/tic-tac-toe.git" target="_blank" rel="noopener noreferrer"></a>
            <div>
              <h3 className="project-subtitle">Tic - Tac - Toe</h3>
              <p>2 player React game with player vs computer mode using React router and undo feature is enabled using localStorage.</p>
            </div>
          </div>
        </div>

        <div className="hidden-projects" style={{ display: "none" }}>
          <div className="hidden-project-box">
            <a className="dailynews shadoww" href="https://github.com/ahsinali-17/dailyNEWS.git" target="_blank" rel="noopener noreferrer"></a>
            <div>
              <h3 className="project-subtitle">Daily News</h3>
              <p>A react app which uses fetch current news and updated using news api and displays them categorically.</p>
            </div>
          </div>

          <div className="hidden-project-box">
            <a className="dice-game shadoww" href="https://github.com/ahsinali-17/Dice-Game.git" target="_blank" rel="noopener noreferrer"></a>
            <div>
              <h3 className="project-subtitle">Dice game</h3>
              <p>A React game in which player has to guess the dice number right to get points otherwise 2 points will be deducted.</p>
            </div>
          </div>

          <div className="hidden-project-box">
            <a className="amazon shadoww" href="https://github.com/ahsinali-17/Amazon-clone-UI-.git" target="_blank" rel="noopener noreferrer"></a>
            <div>
              <h3 className="project-subtitle">Amazon UI clone</h3>
              <p>Amazon UI clone using HTML and CSS. It is a responsive clone of Amazon website.</p>
            </div>
          </div>
        </div>

        <div className="show-all-container">
          <button className="show-all-button" onClick={showAll}>
            <span id="show">Show All</span>
            <img id="hide" src="src/assets/down.svg" alt="toggle" />
          </button>
        </div>
      </section>
      <hr className="pseparator" />
    </main>
  );
};

export default Project;
