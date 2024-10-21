import React, { Component } from 'react';

interface Project {
  id: number;
  name: string;
  link: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Project Alpha",
    link: "https://example.com/project-alpha",
    description: "An innovative project that aims to improve user experience.",
  },
  {
    id: 2,
    name: "Project Beta",
    link: "https://example.com/project-beta",
    description: "A groundbreaking project focused on sustainability.",
  },
  {
    id: 3,
    name: "Project Gamma",
    link: "https://example.com/project-gamma",
    description: "A collaborative platform for developers and designers.",
  },
  {
    id: 4,
    name: "Project Delta",
    link: "https://example.com/project-delta",
    description: "An educational app that helps users learn coding.",
  },
  {
    id: 5,
    name: "Project Epsilon",
    link: "https://example.com/project-epsilon",
    description: "A social media platform for art enthusiasts.",
  },
  {
    id: 6,
    name: "Project Zeta",
    link: "https://example.com/project-zeta",
    description: "A fitness app that customizes workout plans for users.",
  },
];

interface State {
  // Define any state properties if needed
}

class Projects extends Component<{}, State> {
  state: State = {};

  render() {
    return (
      <div>
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
