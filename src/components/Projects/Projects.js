// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div>
        {/* Example project */}
        <div>
          <h3>Project 1</h3>
          <p>Description of the project.</p>
          <a href="https://github.com/yourusername/project1">View on GitHub</a>
        </div>
        {/* Repeat for other projects */}
      </div>
    </section>
  );
};

export default Projects;
