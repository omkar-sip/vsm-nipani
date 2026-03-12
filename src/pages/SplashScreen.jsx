import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './SplashScreen.css';

export default function SplashScreen() {
  const navigate = useNavigate();
  const { language, setLanguage, LANGUAGES } = useLanguage();

  return (
    <div className="screen active" id="splash">
      <div className="splash-left">
        <div className="splash-logo">🌾</div>
        <div className="splash-brand">
          <h1 className="splash-title">DakshBharat</h1>
          <div className="splash-sub">दक्ष भारत</div>
        </div>
        <div className="splash-tagline">
          Verified Skills. Trusted Work.<br/>Bharat's Labour Exchange.
        </div>
      </div>
      
      <div className="splash-right">
        <div className="splash-action-card">
          <h2 className="action-title">Select Your Language</h2>
          <p className="action-sub">Choose your preferred language to continue</p>
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
            Get Started <span style={{ fontSize: '1.2em' }}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
