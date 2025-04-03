import React from 'react';
import '../Styles/Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online store with cart functionality and payment integration.',
      technologies: ['React', 'TypeScript'],
      githubUrl: 'https://github.com/Tarek648/React-E-commerce',
      imageUrl:"/Screenshot 2025-04-02 143332.png"
    },
    {
      id: 2,
      title: 'Digital-Art-Social-Platform',
      description: 'Digital Art with chat where users can see others Art and chat with each others',
      technologies: ['PHP', 'JavaScript', 'MySql'],
      githubUrl: 'https://github.com/CSCI426/Digital-Art-Social-Platform',
      imageUrl:"public/WhatsApp Image 2025-04-02 at 2.30.56 PM.jpeg"
    },
    {
      id: 3,
      title: 'Quizzy-App',
      description: 'Quiz Mobile App',
      technologies: ['Dart', 'C++'],
      githubUrl: 'https://github.com/Tarek376/Quizzy-App',
      imageUrl:"/WhatsApp Image 2025-04-02 at 2.31.37 PM.jpeg"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              {project.imageUrl ? (
                <img src={project.imageUrl} alt={project.title} />
              ) : (
                <div className="project-image-placeholder"></div>
              )}
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="technology-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.githubUrl && (
                  <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;