import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';

function App() {
    return (
        <div className="app">
            <Header />
            <main className="main-content">
                <About />
                <div className="content-grid">
                    <Education />
                    <Skills />
                </div>
                <Experience />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}

export default App;
