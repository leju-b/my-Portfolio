import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="about">
      <h2>Hello <span>World</span>🌍, Nice to meet you!</h2>
      <p className={`about-text ${isExpanded ? 'expanded' : 'collapsed'}`}>
      I’m a Computer Science and Engineering student from Kerala, India, with a deep interest in DevOps and Cybersecurity. My passion lies in expanding my knowledge and integrating advanced technologies to make a meaningful impact. Driven by a fascination with systems and a commitment to enhancing security and efficiency, I thrive on optimizing development workflows and fortifying digital environments.

As a lifelong learner, I continuously explore new tools and best practices in DevOps and cybersecurity to stay ahead in an evolving landscape. My goal is to leverage my skills to solve complex problems and drive innovation in the tech industry. I’m excited about improving deployment pipelines, enhancing security measures, and collaborating on ambitious projects.

Let’s connect and explore how we can push the boundaries of technology together. I’m always open to new opportunities, collaborations, and discussions that challenge and inspire me.
      </p>
      <button onClick={toggleExpansion} className="read-more-btn">
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
      <h3>What I'm Doing?</h3>
      <div className="box-container">
        <div className="box">
          <h3>DevOps</h3>
          <p>I enjoy improving the speed and quality of delivery, automate, CI/CD.</p>
        </div>
        <div className="box">
          <h3>Cybersecurity</h3>
          <p>Enjoy doing it, passionate and practicing to integrate with DevOps to fullfill DevSecops.</p>
        </div>
        <div className="box">
          <h3>Web development</h3>
          <p>Like doing it, to play around web technologies, to understand SDLC.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
