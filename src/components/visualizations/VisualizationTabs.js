import React from 'react';

export const VisualizationTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="visualization-tabs">
      <button 
        className={`tab-button ${activeTab === 'analysis' ? 'active' : ''}`}
        onClick={() => onTabChange('analysis')}
      >
        📊 학생분석
      </button>
      <button 
        className={`tab-button ${activeTab === 'report' ? 'active' : ''}`}
        onClick={() => onTabChange('report')}
      >
        📝 보고서작성
      </button>
    </div>
  );
}; 