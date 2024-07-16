import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const handleClick = () => {
    const links = document.querySelector('.right');
    if (links.classList.contains('show')) {
      links.classList.remove('show');
    } else {
      links.classList.add('show');
    }
  };
  
  const handleShow = () => {
    document.querySelector('.right').classList.remove('show')
  }
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <Link className="logopic" to='/'>Portfolio<span className='dot'>.</span></Link>
          </div>
          <div className="burger" onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
              <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="right">
            <div><Link to='/about' className='link' onClick={handleShow}>About</Link></div>
            <div><Link to='/services' className='link' onClick={handleShow}>Services</Link></div>
            <div><Link to='/projects' className='link' onClick={handleShow}>Projects</Link></div>
            <div><Link to='/contact' className='link' onClick={handleShow}>Contact</Link></div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
