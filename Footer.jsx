import React from 'react';
import "./footer.css";
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Atharva</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                {/* <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li> */}
            </ul>
            <div className="footer__social">
                <a href="mailto:rautatharva440@gmail.com" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiMail />
                </a>
                <a href="https://github.com/athraut" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/atharva-raut-029045260" className="home__social-icon" target="_blank" rel="noreferrer" >
                    <FiLinkedin />
                </a>    
            </div>
            <span className="footer__copy"></span>
        </div>
    </footer>
  );
}

export default Footer;
