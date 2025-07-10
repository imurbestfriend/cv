import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            position: 'Senior Frontend Developer',
            company: 'Tech Solutions Inc.',
            period: '2020 - настоящее время',
            responsibilities: [
                'Разработка и поддержка веб-приложений на React',
                'Оптимизация производительности приложений',
                'Ревью кода младших разработчиков',
                'Участие в архитектурных решениях'
            ]
        },
        {
            position: 'Frontend Developer',
            company: 'WebArt Studio',
            period: '2018 - 2020',
            responsibilities: [
                'Создание адаптивных интерфейсов',
                'Интеграция с REST API',
                'Внедрение TypeScript в проект',
                'Работа в Agile-команде'
            ]
        },
        {
            position: 'Junior Frontend Developer',
            company: 'StartUp Lab',
            period: '2017 - 2018',
            responsibilities: [
                'Верстка по макетам',
                'Рефакторинг legacy кода',
                'Написание unit-тестов'
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