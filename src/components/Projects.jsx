import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Хакатон {Идея. Код. Релиз}',
            description: 'Номинация "Лучший проект без ИИ',
            technologies: ['React', 'Go', 'Vite', 'Docker'],
            link: 'https://github.com/Anabol1ks/digital-queue',
            // icon: ''
        }
    ];

    return (
        <section className="projects">
            <h2>Достижения</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">

                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-technologies">
                                {project.technologies.map((tech, i) => (
                                    <span key={i}>{tech}</span>
                                ))}
                            </div>
                            <a href={project.link} className="project-link">
                                Подробнее <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;