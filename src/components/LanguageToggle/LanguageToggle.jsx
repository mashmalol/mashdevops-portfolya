import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className="language-toggle" 
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'en' ? 'فارسی' : 'English'}`}
    >
      <span className="lang-icon">
        {language === 'en' ? '🇮🇷' : '🇬🇧'}
      </span>
      <span className="lang-text">
        {language === 'en' ? 'FA' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;
