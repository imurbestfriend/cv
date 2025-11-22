import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <h2>Контакты</h2>
            <div className="contact-info">
                <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span>do764@yandex.ru</span>
                </div>
                <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span>+7 (985) 985-76-34</span>
                </div>
                <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span><a href='https://github.com/imurbestfriend'>GIT</a></span>
                </div>
                <div className="contact-item">
                    <i className="fab fa-linkedin"></i>
                    <a href="https://t.me/imyourrbestfriend" target="_blank" rel="noopener noreferrer">@imyourrbestfriend</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;