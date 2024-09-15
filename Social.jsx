import React from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi"; // Import the FiMail icon

const Social = () => {
  return (
    <div className="home__social">
      <a href="rautatharva440@gmail.com" className="home__social-icon" target="_blank" rel="noopener noreferrer">
        <FiMail />
      </a>
      <a href="https://github.com/athraut" className="home__social-icon" target="_blank" rel="noopener noreferrer">
        <FiGithub />
      </a>
      <a href="https://www.linkedin.com/in/atharva-raut-029045260" className="home__social-icon" target="_blank" rel="noopener noreferrer">
        <FiLinkedin />
      </a>
    </div>
  );
}

export default Social;
