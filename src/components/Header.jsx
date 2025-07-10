import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="profile-image">
                    <img src="" alt="Profile" />
                    <div className="image-border"></div>
                </div>
                <div className="header-text">
                    <h1>Меликов Владислав</h1>
                    {/*<h2>Студент Frontend-разработки</h2>*/}
                    <p>Специализация: Front-end, ML</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-github"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-codepen"></i></a>
                        <a href="#"><i className="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>
            <div className="header-decoration">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
            </div>
        </header>
    );
};

export default Header;