import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { t } = useLanguage();

  const tabs = [
    { id: 'overview', label: t('about.tabs.overview'), icon: '📋' },
    { id: 'protocol', label: t('about.tabs.protocol'), icon: '⚡' },
    { id: 'skills', label: t('about.tabs.skills'), icon: '🛠️' },
    { id: 'vision', label: t('about.tabs.vision'), icon: '🚀' }
  ];

  const skills = {
    blockchain: [
      { name: 'Solidity', level: 95 },
      { name: 'Web3.js / Ethers.js', level: 90 },
      { name: 'Smart Contracts', level: 95 },
      { name: 'DeFi Protocols', level: 85 }
    ],
    ai: [
      { name: 'Python', level: 90 },
      { name: 'LangChain', level: 85 },
      { name: 'RAG Systems', level: 80 },
      { name: 'OpenAI / GPT', level: 85 }
    ],
    fullstack: [
      { name: 'React / Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Node.js', level: 85 },
      { name: 'FastAPI', level: 80 }
    ],
    devops: [
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 70 },
      { name: 'AWS / Cloud', level: 75 },
      { name: 'CI/CD', level: 80 }
    ]
  };

  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">{t('about.title')}</span>
        </h2>

        {/* Tabs */}
        <div className="about-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`about-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="about-content">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="tab-panel fade-in">
              <div className="overview-grid">
                <div className="overview-text">
                  <h3>{t('about.overview.heading')}</h3>
                  <p className="intro-text">
                    {t('about.overview.intro')} <strong>{t('about.protocol.heading').split(':')[0]}</strong>
                    {t('about.overview.protocolDesc')}
                  </p>
                  <div className="highlight-stats">
                    <div className="stat-item">
                      <div className="stat-number">23+</div>
                      <div className="stat-label">{t('about.overview.stats.projects')}</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">8+</div>
                      <div className="stat-label">{t('about.overview.stats.blockchain')}</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">7+</div>
                      <div className="stat-label">{t('about.overview.stats.ai')}</div>
                    </div>
                  </div>
                  <div className="expertise-areas">
                    <h4>{t('about.overview.expertise.title')}</h4>
                    <ul>
                      <li>🔗 <strong>{t('about.overview.expertise.blockchain')}</strong> {t('about.overview.expertise.blockchainDesc')}</li>
                      <li>🤖 <strong>{t('about.overview.expertise.ai')}</strong> {t('about.overview.expertise.aiDesc')}</li>
                      <li>💼 <strong>{t('about.overview.expertise.fullstack')}</strong> {t('about.overview.expertise.fullstackDesc')}</li>
                      <li>🎮 <strong>{t('about.overview.expertise.gaming')}</strong> {t('about.overview.expertise.gamingDesc')}</li>
                    </ul>
                  </div>
                </div>
                <div className="overview-visual">
                  <div className="code-window">
                    <div className="window-header">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                      <span className="window-title">~/mashmalol/impact.sol</span>
                    </div>
                    <div className="code-content">
                      <pre>
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Innovation {
    mapping(string => uint256) public impact;
    
    constructor() {
        impact["Blockchain Projects"] = 8;
        impact["AI Systems"] = 7;
        impact["Smart Contracts"] = 15+;
        impact["Community Value"] = ∞;
    }
    
    function buildTheFuture() 
        public pure returns (string memory) {
        return "Decentralized & Open Source";
    }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mash Protocol Tab */}
          {activeTab === 'protocol' && (
            <div className="tab-panel fade-in">
              <div className="protocol-content">
                <div className="protocol-header">
                  <h3>{t('about.protocol.heading')}</h3>
                  <a 
                    href="https://mashprotocol4.wordpress.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="whitepaper-link"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {t('about.protocol.whitepaper')}
                  </a>
                </div>

                <div className="protocol-grid">
                  <div className="protocol-card">
                    <div className="card-icon">💎</div>
                    <h4>{t('about.protocol.rwa.title')}</h4>
                    <p>{t('about.protocol.rwa.description')}</p>
                    <ul className="feature-list">
                      {t('about.protocol.rwa.features').map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="protocol-card">
                    <div className="card-icon">⚡</div>
                    <h4>{t('about.protocol.defi.title')}</h4>
                    <p>{t('about.protocol.defi.description')}</p>
                    <ul className="feature-list">
                      {t('about.protocol.defi.features').map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="protocol-card">
                    <div className="card-icon">🔐</div>
                    <h4>{t('about.protocol.sbt.title')}</h4>
                    <p>{t('about.protocol.sbt.description')}</p>
                    <ul className="feature-list">
                      {t('about.protocol.sbt.features').map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="protocol-card">
                    <div className="card-icon">🌐</div>
                    <h4>{t('about.protocol.crosschain.title')}</h4>
                    <p>{t('about.protocol.crosschain.description')}</p>
                    <ul className="feature-list">
                      {t('about.protocol.crosschain.features').map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="protocol-vision">
                  <blockquote>{t('about.protocol.vision')}</blockquote>
                </div>

                <div className="protocol-projects">
                  <h4>Key Protocol Implementations:</h4>
                  <div className="project-links">
                    <a href="https://github.com/mashmalol/mashprotocol-" target="_blank" rel="noopener noreferrer">
                      Core Protocol →
                    </a>
                    <a href="https://github.com/mashmalol/mashprotocol-front-and-contract-v1" target="_blank" rel="noopener noreferrer">
                      Frontend & Contracts v1 →
                    </a>
                    <a href="https://github.com/mashmalol/mash-protocol-realestate-RWA-full" target="_blank" rel="noopener noreferrer">
                      RWA Implementation →
                    </a>
                    <a href="https://github.com/mashmalol/nextjs-commerce-mashprotocol-UI-" target="_blank" rel="noopener noreferrer">
                      Commerce UI →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="tab-panel fade-in">
              <div className="skills-content">
                <div className="skills-grid">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="skill-category">
                      <h4 className="category-title">
                        {t(`about.skills.${category}`)}
                      </h4>
                      <div className="skill-items">
                        {items.map((skill, index) => (
                          <div key={index} className="skill-item">
                            <div className="skill-header">
                              <span className="skill-name">{skill.name}</span>
                              <span className="skill-percentage">{skill.level}%</span>
                            </div>
                            <div className="skill-bar">
                              <div 
                                className="skill-progress" 
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="tech-badges">
                  <h4>{t('about.skills.technologies')}</h4>
                  <div className="badge-grid">
                    {['Solidity', 'React', 'Python', 'TypeScript', 'Next.js', 'Web3.js', 
                      'Hardhat', 'Ethers.js', 'LangChain', 'FastAPI', 'Docker', 'IPFS',
                      'Chainlink', 'OpenAI', 'MongoDB', 'PostgreSQL'].map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Vision Tab */}
          {activeTab === 'vision' && (
            <div className="tab-panel fade-in">
              <div className="vision-content">
                <h3>{t('about.vision.heading')}</h3>
                
                <div className="vision-blocks">
                  {['decentralization', 'innovation', 'accessibility', 'sustainability'].map((block, index) => (
                    <div key={block} className="vision-block">
                      <div className="block-number">{String(index + 1).padStart(2, '0')}</div>
                      <h4>{t(`about.vision.blocks.${block}.title`)}</h4>
                      <p>{t(`about.vision.blocks.${block}.description`)}</p>
                    </div>
                  ))}
                </div>

                <div className="future-focus">
                  <h4>{t('about.vision.focus.title')}</h4>
                  <div className="focus-grid">
                    <div className="focus-item">
                      <span className="focus-icon">🏦</span>
                      <span>{t('about.vision.focus.rwa')}</span>
                    </div>
                    <div className="focus-item">
                      <span className="focus-icon">🤖</span>
                      <span>{t('about.vision.focus.ai')}</span>
                    </div>
                    <div className="focus-item">
                      <span className="focus-icon">🔗</span>
                      <span>{t('about.vision.focus.crosschain')}</span>
                    </div>
                    <div className="focus-item">
                      <span className="focus-icon">🎮</span>
                      <span>{t('about.vision.focus.gaming')}</span>
                    </div>
                  </div>
                </div>

                <div className="call-to-action">
                  <h4>{t('about.vision.cta.title')}</h4>
                  <p>{t('about.vision.cta.description')}</p>
                  <div className="cta-buttons">
                    <a href="https://github.com/mashmalol" target="_blank" rel="noopener noreferrer" className="cta-btn primary">
                      <svg viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                      {t('about.vision.cta.github')}
                    </a>
                    <a href="https://mashprotocol4.wordpress.com/" target="_blank" rel="noopener noreferrer" className="cta-btn secondary">
                      📄 {t('about.vision.cta.whitepaper')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
