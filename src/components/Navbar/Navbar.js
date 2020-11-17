// import './navbar.scss';
import React from 'react';

function Navbar() {
  return (
    <header className="navbar-wrapper">
      <div className="upper-section">
        <h1 className="title-name">Derry</h1>
        <h1 className="job-title">Frontend Engineer</h1>
      </div>
      <div className="lower-section">
        <nav className="bar">
          <span className="link-wrapper">
            <a className="link" href="/">
              Home
            </a>
          </span>
          <span>
            <a className="link" href="https://github.com/derrysukrie">
              Github
            </a>
          </span>
        </nav>
        <nav className="bar">
          <span className="link-wrapper">
            <a className="link" href="https://twitter.com/const_derry">
              Twitter
            </a>
          </span>
          <span>
            <a className="link" href="https://www.instagram.com/derrysukrie/">
              Instagram
            </a>
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
