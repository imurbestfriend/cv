import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            position: 'Junior Data Scientist',
            company: 'Sber',
            period: 'Июль 2025 — Настоящее время',
            responsibilities: [
                'Поддержка и развитие финансовых ИИ-агентов на основе LangGraph',
                'Задачи по исследованию и обработке клиентских данных',
                'Написание автотестов и контроль качества перед релизами'
            ]
        }
    ];

    return (
        <section className="experience">
            <h2>Опыт работы</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3>{exp.position}</h3>
                            <div className="company-period">
                                <span className="company">{exp.company}</span>
                                <span className="period">{exp.period}</span>
                            </div>
                            <ul className="responsibilities">
                                {exp.responsibilities.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
