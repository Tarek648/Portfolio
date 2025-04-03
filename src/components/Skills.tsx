import React from 'react';
import '../Styles/Skills.css';

const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'HTML/CSS',
  'Node.js',
  'Git',
  'Responsive Design',
  'UI/UX Principles'
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;