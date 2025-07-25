import React from 'react';

export const Navigation = ({ onLogoClick, onAIChatbotToggle }) => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo" onClick={onLogoClick}>
          <span className="logo-text">
            <span className="logo-t">T</span>
            <span className="logo-zone">zone</span>
          </span>
        </div>
        <div className="nav-content">
          <button className="nav-ai-button" onClick={onAIChatbotToggle}>
            <span className="ai-icon">🤖</span>
            <span className="ai-text">
              <span className="ai-t">T</span>
              <span className="ai-a">A</span>
              <span className="ai-i">I</span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}; 