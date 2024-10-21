import React, { Component } from 'react';
import './styles.css'; // Import your CSS file

interface Project {
  id: number;
  name: string;
  link: string;
  description: string;
}

const projects: Project[] = [
  { id: 1, name: 'Project 1', link: 'https://example.com/project1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, name: 'Project 2', link: 'https://example.com/project2', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  
];

class Projects extends Component {
  render() {
    return (
      <div className="projects-section">
        <h1>Projects</h1>
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <h2>{project.name}</h2>
              <p><a href={project.link} target="_blank" rel="noopener noreferrer">Visit Project Page</a></p>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Projects;
