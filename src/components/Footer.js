import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text">Have your people call my people.</p>
            <div className="footer-links">
                <a href="https://www.linkedin.com/in/emilyrejack/" target="_blank" rel="noopener noreferrer" className="footer-link">
                    <FaLinkedin className="footer-icon" />
                    LinkedIn
                </a>
                <a href="https://github.com/erejack6" target="_blank" rel="noopener noreferrer" className="footer-link">
                    <FaGithub className="footer-icon" />
                    GitHub
                </a>
            </div>
            <p className="footer-bottom">2024 Emily Rejack for Boston University</p>
        </footer>
    );
};

export default Footer;
