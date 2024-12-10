import React from 'react';
import { Link } from 'react-router-dom';

const Masthead = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Hire Me', path: '/store' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="masthead">
      <nav className="masthead-nav">
        <div className="masthead-title-container">
          <img
            src="/vecteezy_alphabet-letters-monogram-logo-er_11203497.jpg"
            alt="Your Logo"
            className="masthead-logo"
          />
          <h1 className="masthead-title">Emily Rejack</h1>
        </div>
        <ul className="masthead-links">
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="masthead-link">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Masthead;
