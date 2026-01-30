import React, { useState } from 'react';
import DigitalRain from './components/DigitalRain/DigitalRain';
import About from './components/About/About';
import { repositories } from './data/repositories';
import './App.css';

function App() {
  const [filteredRepos] = useState(repositories);

  return (
    <div className="app">
      <DigitalRain />
      
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <span className="logo-bracket">{'<'}</span>
            <span className="logo-text">Portfolio</span>
            <span className="logo-bracket">{'/>'}</span>
          </div>
          
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="https://github.com/mashmalol" target="_blank" rel="noopener noreferrer">GitHub</a>
          </nav>
        </div>
      </header>

      <main className="main-content" id="home">
        <section className="hero-section">
          <h1 className="hero-title">
            <span className="gradient-text">Full Stack Developer</span>
          </h1>
          <p className="hero-subtitle">
            Building modern web applications with cutting-edge technologies
          </p>
          <p className="hero-description">
            Creator of <a href="https://mashprotocol4.wordpress.com/" target="_blank" rel="noopener noreferrer" className="protocol-link">Mash Protocol</a> - pioneering the future of decentralized finance and asset tokenization
          </p>
        </section>

        <About />

        <section className="repos-section" id="projects">
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            
            <div className="repos-grid">
              {filteredRepos.map((repo) => (
                <article key={repo.id} className="repo-card">
                  <div className="repo-card-header">
                    <h3 className="repo-title">
                      <a href={repo.githubUrl} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                      </a>
                    </h3>
                    {repo.featured && <span className="featured-badge">★</span>}
                  </div>
                  
                  <p className="repo-description">{repo.description}</p>
                  
                  <div className="repo-technologies">
                    {repo.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="repo-footer">
                    <span className="repo-language">{repo.language}</span>
                    <a 
                      href={repo.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="repo-link"
                    >
                      View Project →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
