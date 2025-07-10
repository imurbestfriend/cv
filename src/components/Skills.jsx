import React from 'react';
import './Skills.css';

const Skills = () => {
    const frontendSkills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'MUI', 'SASS', 'Tailwind'];
    const tools = ['Git', 'Webpack', 'Vite', 'PostgreSQL', 'MongoDB', 'Node.js', 'Express js'];
    const MLSkills = ['Python', 'CV', 'Scikit-Learn', 'PyTorch', 'Jupyter'];

    return (
        <section className="skills">
            <h2>Навыки</h2>
            <div className="skills-grid">
                <div className="skills-column">
                    <div className="skill-category">
                        <h3>Frontend</h3>
                        <div className="skills-list">
                            {frontendSkills.map((skill, index) => (
                                <div key={`frontend-${index}`} className="skill-bubble">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3>Инструменты</h3>
                        <div className="skills-list">
                            {tools.map((tool, index) => (
                                <div key={`tools-${index}`} className="skill-bubble">
                                    {tool}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="skills-column">
                    <div className="skill-category">
                        <h3>ML / DL</h3>
                        <div className="skills-list">
                            {MLSkills.map((skill, index) => (
                                <div key={`backend-${index}`} className="skill-bubble">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Skills;