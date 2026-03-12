import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './SplashScreen.css';

export default function SplashScreen() {
  const navigate = useNavigate();
  const { language, setLanguage, LANGUAGES } = useLanguage();

  return (
    <div className="screen active" id="splash">
      <div className="splash-logo">🌾</div>
      <div className="splash-title">DakshBharat</div>
      <div className="splash-sub">दक्ष भारत</div>
      <div className="splash-tagline">
        Verified Skills. Trusted Work. Bharat's Labour Exchange.
      </div>
      <div className="lang-pills">
        {LANGUAGES.map((lang) => (
          <div
            key={lang.code}
            className={`lang-pill ${language === lang.code ? 'sel' : ''}`}
            onClick={() => setLanguage(lang.code)}
          >
            {lang.label}
          </div>
        ))}
      </div>
      <button className="splash-btn" onClick={() => navigate('/role-select')}>
        Get Started →
      </button>
    </div>
  );
}
