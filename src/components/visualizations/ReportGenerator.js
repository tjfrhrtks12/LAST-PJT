import React, { useState } from 'react';
import { reportTemplates, generateReportFromTemplate } from '../../utils/reportTemplates';

export const ReportGenerator = ({ data, visualizationType }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [reportType, setReportType] = useState('student');
  const [selectedPeriod, setSelectedPeriod] = useState('semester');

  const generateReport = () => {
    if (!selectedTemplate) {
      return '보고서 양식을 선택해주세요.';
    }
    
    if (!data) {
      return generateReportFromTemplate(selectedTemplate, null);
    }
    
    return generateReportFromTemplate(selectedTemplate, data);
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  const getFilteredTemplates = () => {
    if (!visualizationType) return reportTemplates; // 데이터가 없으면 모든 양식 표시
    
    // 시각화 타입에 따라 적절한 템플릿 필터링
    switch (visualizationType) {
      case 'student-stats':
        return reportTemplates.filter(t => ['class-overview', 'grade-analysis'].includes(t.id));
      case 'attendance-chart':
        return reportTemplates.filter(t => ['attendance-analysis', 'class-overview'].includes(t.id));
      case 'grade-analysis':
        return reportTemplates.filter(t => ['student-individual', 'grade-analysis', 'class-overview'].includes(t.id));
      case 'schedule-data':
        return reportTemplates.filter(t => ['schedule-report'].includes(t.id));
      default:
        return reportTemplates;
    }
  };

  const copyToClipboard = () => {
    const reportContent = generateReport();
    navigator.clipboard.writeText(reportContent).then(() => {
      alert('보고서가 클립보드에 복사되었습니다!');
    });
  };

  const downloadReport = () => {
    const reportContent = generateReport();
    const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `보고서_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="report-generator">
      <div className="report-header">
        <h3>📝 보고서 작성</h3>
        <div className="report-controls">
          {selectedTemplate && (
            <>
              <button onClick={copyToClipboard} className="report-button">
                📋 복사
              </button>
              <button onClick={downloadReport} className="report-button">
                💾 다운로드
              </button>
            </>
          )}
        </div>
      </div>
      
      {!selectedTemplate ? (
        <div className="template-selection">
          <div className="template-header">
            <h4>📋 보고서 양식 선택</h4>
            <p>원하는 보고서 양식을 선택하세요:</p>
          </div>
          
          <div className="template-grid">
            {getFilteredTemplates().map((template) => (
              <div 
                key={template.id}
                className="template-card"
                onClick={() => handleTemplateSelect(template)}
              >
                <div className="template-icon">{template.icon}</div>
                <div className="template-info">
                  <h5>{template.name}</h5>
                  <p>{template.description}</p>
                </div>
                <div className="template-select">선택</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="selected-template-info">
            <div className="template-badge">
              <span className="template-icon">{selectedTemplate.icon}</span>
              <span className="template-name">{selectedTemplate.name}</span>
              <button 
                onClick={() => setSelectedTemplate(null)}
                className="change-template-btn"
              >
                양식 변경
              </button>
            </div>
          </div>
          
          <div className="report-options">
            <div className="option-group">
              <label>보고서 유형:</label>
              <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
                <option value="student">학생 개별</option>
                <option value="class">반 전체</option>
                <option value="grade">학년 전체</option>
              </select>
            </div>
            
            <div className="option-group">
              <label>기간:</label>
              <select value={selectedPeriod} onChange={(e) => setSelectedPeriod(e.target.value)}>
                <option value="week">주간</option>
                <option value="month">월간</option>
                <option value="semester">학기</option>
                <option value="year">연간</option>
              </select>
            </div>
          </div>
          
          <div className="report-content">
            <pre>{generateReport()}</pre>
          </div>
        </>
      )}
    </div>
  );
}; 