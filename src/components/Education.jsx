import React from 'react';

const Education = () => {
    const education = [
        {
            degree: 'РТУ МИРЭА',
            name: 'Advanced React and Redux',
            university: 'Програмная инженерия',
            year: '2022 - 2026'
        }
    ];

    const courses = [
        {
            name: 'Школа-21',
            year: '2024-2026'
        }
    ];

    return (
        <section className="education">
            <h2>Образование</h2>
            <div className="education-list">
                {education.map((item, index) => (
                    <div key={index} className="education-item">
                        <h3>{item.degree}</h3>
                        <p>{item.university}</p>
                        <p className="year">{item.year}</p>
                    </div>
                ))}
            </div>

            <h3>Курсы</h3>
            <ul className="courses-list">
                {courses.map((course, index) => (
                    <li key={index}>
                        <strong>{course.name}</strong> - {course.platform} ({course.year})
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Education;