import React, { useState } from 'react';
import './Projects.css';
import projectsData from './projectsData'; // Import the projects array from the separate file

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">My Projects</h2>
      <div className="filter-bar">
        <button 
          onClick={() => handleFilterChange('all')} 
          className={filter === 'all' ? 'active' : ''}
        >
          All
        </button>
        <button 
          onClick={() => handleFilterChange('cybersecurity')} 
          className={filter === 'cybersecurity' ? 'active' : ''}
        >
          Cybersecurity
        </button>
        <button 
          onClick={() => handleFilterChange('devops')} 
          className={filter === 'devops' ? 'active' : ''}
        >
          DevOps
        </button>
        <button 
          onClick={() => handleFilterChange('webdevelopment')} 
          className={filter === 'webdevelopment' ? 'active' : ''}
        >
          Web Development
        </button>
      </div>
      <div className="projects-container">
        {filteredProjects.map((project) => (
          <div className="project-box" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-description">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="project-overlay">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github project-icon"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;