// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      <section id="about">
        <h2>Hello <span>World</span>🌍, Nice to meet you!</h2>
        <p>
          I’m a Computer Science and Engineering student with a keen interest in DevOps and Cybersecurity. Based in Kerala, India, I’m passionate about continuously expanding my knowledge and integrating cutting-edge technologies to make a meaningful impact.
          My journey into the tech world is driven by a fascination with how systems work and a desire to enhance their security and efficiency. I thrive on the challenge of optimizing development workflows and fortifying digital environments against evolving threats.
          As a lifelong learner, I’m always exploring new tools, methodologies, and best practices in DevOps and cybersecurity. I believe in the power of continuous learning and staying ahead in an ever-changing landscape to contribute effectively to the tech community.
          My goal is to harness my skills to not only solve complex problems but also to drive innovation and growth in the industry. Whether it's improving deployment pipelines, enhancing security measures, or collaborating on ambitious projects, I’m excited to bring my expertise and enthusiasm to the table.
          <br /><br />
          Let’s connect and explore how we can push the boundaries of technology together. I’m always open to new opportunities, collaborations, and discussions that challenge and inspire me.
        </p>
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
    </>
  );
};

export default About;
