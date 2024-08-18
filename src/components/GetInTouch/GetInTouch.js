// src/components/GetInTouch.js
import React from 'react';
import './GetInTouch.css'; // Import the CSS file for styling

const GetInTouch = () => {
  return (
    <section id="getintouch">
      <h2>Get In Touch</h2>
      <p>
        Got a question or just want to say hello?Go ahead.
      </p>
      
      <div className="social-media">
        <div className="social-icon">
          <a href="mailto:iamleju02@gmail.com">
            <i className="fas fa-envelope"></i>
            <span>Email</span>
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/lejub02" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="social-icon">
          <a href="https://x.com/Leju_b02" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-x-twitter"></i>
            <span>Twitter</span>
          </a>
        </div>
        <div className="social-icon">
          <a href="https://github.com/leju-b" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </a>
        </div>
        {/* <div className="social-icon">
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
            <span>Instagram</span>
          </a>
        </div> */}
        <div className="social-icon">
          <a href="https://dev.to/lejub" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-dev"></i>
            <span>Dev.to</span>
          </a>
        </div>
        <div className="social-icon">
          <a href="https://medium.com/@iamleju02" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-medium"></i>
            <span>Medium</span>
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.goodreads.com/user/show/178288148" target="_blank" rel="noopener noreferrer"> 
            <i class="fab fa-goodreads"></i>
            <span>Goodreads</span>
          </a>
        </div>
        {/* Add more social icons as needed */}
      </div>
    </section>
  );
};

export default GetInTouch;
