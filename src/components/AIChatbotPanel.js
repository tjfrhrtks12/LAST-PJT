import React, { useState, useRef, useEffect } from 'react';
import { formatTime, formatFileSize } from '../utils/chatbotUtils';
import { 
  generateStudentStats, 
  generateAttendanceChart, 
  generateGradeAnalysis, 
  generateScheduleData 
} from '../utils/dataGenerators';
import { useDragResize } from '../hooks/useDragResize';
import { useFileUpload } from '../hooks/useFileUpload';
import { StudentStats } from './visualizations/StudentStats';
import { AttendanceChart } from './visualizations/AttendanceChart';
import { GradeAnalysis } from './visualizations/GradeAnalysis';
import { ScheduleData } from './visualizations/ScheduleData';
import { VisualizationTabs } from './visualizations/VisualizationTabs';
import { ReportGenerator } from './visualizations/ReportGenerator';

export const AIChatbotPanel = ({ onClose, isOpen, onModeToggle, isPopupMode }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: '안녕하세요! 학생 관리 시스템 TAI입니다. 무엇을 도와드릴까요?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentVisualization, setCurrentVisualization] = useState(null);
  const [visualizationType, setVisualizationType] = useState(null);
  const [activeTab, setActiveTab] = useState('analysis');
  const messagesEndRef = useRef(null);
  
  // 커스텀 훅 사용
  const { selectedFile, fileInputRef, handleFileSelect, removeFile, setSelectedFile } = useFileUpload();
  const { position, size, isDragging, isResizing, handleMouseDown, getPanelStyle } = useDragResize(isPopupMode, isOpen);
  
  const isTabletSize = size.width >= 768;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if ((!inputMessage.trim() && !selectedFile) || isLoading) return;

    let messageContent = inputMessage;
    let fileInfo = '';

    // 파일이 선택된 경우 파일 정보 추가
    if (selectedFile) {
      fileInfo = `\n\n📎 첨부파일: ${selectedFile.name} (${formatFileSize(selectedFile.size)})`;
      messageContent += fileInfo;
    }

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: messageContent,
      timestamp: new Date(),
      file: selectedFile
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setIsLoading(true);

    try {
      // 시각화 키워드 체크
      const lowerMessage = inputMessage.toLowerCase();
      let visualizationData = null;
      let visualizationType = null;

      if (lowerMessage.includes('학생 통계') || lowerMessage.includes('학생 현황')) {
        visualizationData = generateStudentStats();
        visualizationType = 'student-stats';
      } else if (lowerMessage.includes('출석률') || lowerMessage.includes('출석')) {
        visualizationData = generateAttendanceChart();
        visualizationType = 'attendance-chart';
      } else if (lowerMessage.includes('성적') || lowerMessage.includes('점수') || lowerMessage.includes('1학기')) {
        visualizationData = generateGradeAnalysis();
        visualizationType = 'grade-analysis';
      } else if (lowerMessage.includes('일정') || lowerMessage.includes('스케줄')) {
        visualizationData = generateScheduleData();
        visualizationType = 'schedule-data';
      }

      // OpenAI API 호출
      const formData = new FormData();
      formData.append('messages', JSON.stringify([
        {
          role: 'system',
          content: '당신은 학생 관리 시스템의 AI 어시스턴트입니다. 친근하고 도움이 되는 답변을 제공해주세요.'
        },
        ...messages.map(msg => ({
          role: msg.type === 'user' ? 'user' : 'assistant',
          content: msg.content
        })),
        {
          role: 'user',
          content: inputMessage
        }
      ]));

      if (selectedFile) {
        formData.append('file', selectedFile);
      }

      const response = await fetch('/api/chat', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('API 요청 실패');
      }

      const data = await response.json();
      
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: data.choices[0].message.content,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);

      // 시각화 데이터 설정
      if (visualizationData) {
        setCurrentVisualization({ data: visualizationData });
        setVisualizationType(visualizationType);
      }

    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: '죄송합니다. 오류가 발생했습니다. 다시 시도해주세요.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // 시각화 렌더링 함수
  const renderVisualization = () => {
    if (!currentVisualization) return null;
    
    const renderAnalysisContent = () => {
      switch (visualizationType) {
        case 'student-stats':
          return <StudentStats data={currentVisualization.data} />;
        case 'attendance-chart':
          return <AttendanceChart data={currentVisualization.data} />;
        case 'grade-analysis':
          return <GradeAnalysis data={currentVisualization.data} />;
        case 'schedule-data':
          return <ScheduleData data={currentVisualization.data} />;
        default:
          return null;
      }
    };

    const renderReportContent = () => {
      return <ReportGenerator data={currentVisualization.data} visualizationType={visualizationType} />;
    };

    return (
      <div className="visualization-container">
        <VisualizationTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="tab-content">
          {activeTab === 'analysis' ? renderAnalysisContent() : renderReportContent()}
        </div>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`ai-chatbot-panel ${isPopupMode ? 'popup-mode' : 'sidebar-mode'} ${isOpen ? 'open' : ''} ${isDragging ? 'draggable' : ''} ${isResizing ? 'resizing' : ''}`}
      style={getPanelStyle()}
      onMouseDown={handleMouseDown}
    >
      <div className="chatbot-header">
        <div className="header-content">
          <h3>
            <span className="tai-t">T</span>
            <span className="tai-a">A</span>
            <span className="tai-i">I</span>
          </h3>
          <button 
            onClick={onModeToggle} 
            className="mode-toggle-button"
            title={isPopupMode ? "사이드바로 변경" : "팝업으로 변경"}
          >
            {isPopupMode ? "📱" : "💬"}
          </button>
        </div>
        <button onClick={onClose} className="close-button">×</button>
      </div>
      
      {isPopupMode ? (
        <div className="chatbot-content">
          {/* 왼쪽 섹션: 채팅 */}
          <div className="chatbot-left-section">
            <div className="chatbot-messages">
              {messages.map((message) => (
                <div key={message.id} className={`message ${message.type}`}>
                  <div className="message-content">
                    {message.content}
                    {message.file && (
                      <div className="file-attachment">
                        📎 {message.file.name} ({formatFileSize(message.file.size)})
                      </div>
                    )}
                  </div>
                  <div className="message-time">
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="message bot">
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="chatbot-input-container">
              {/* 파일 업로드 영역 */}
              <div className="file-upload-area">
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileSelect}
                  accept="image/*,.pdf,.txt,.doc,.docx"
                  className="file-input"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="file-upload-button">
                  📎 파일 선택
                </label>
                {selectedFile && (
                  <div className="selected-file">
                    <span className="file-name">{selectedFile.name}</span>
                    <span className="file-size">({formatFileSize(selectedFile.size)})</span>
                    <button onClick={removeFile} className="remove-file">×</button>
                  </div>
                )}
              </div>
              
              {/* 메시지 입력 영역 */}
              <div className="chatbot-input">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="메시지를 입력하세요... (예: 학생 통계, 출석률, 성적, 일정)"
                  disabled={isLoading}
                />
                <button 
                  onClick={sendMessage} 
                  disabled={(!inputMessage.trim() && !selectedFile) || isLoading}
                  className="send-button"
                >
                  ➤
                </button>
              </div>
            </div>
          </div>
          
          {/* 오른쪽 섹션: 시각화 (태블릿 크기 이상일 때만 표시) */}
          {isTabletSize && (
            <div className="chatbot-right-section">
              <div className="visualization-area">
                {currentVisualization ? (
                  renderVisualization()
                ) : (
                  <div className="visualization-container">
                    <VisualizationTabs activeTab={activeTab} onTabChange={setActiveTab} />
                    <div className="tab-content">
                      {activeTab === 'analysis' ? (
                        <div className="visualization-placeholder">
                          <div className="placeholder-content">
                            <div className="placeholder-icon">📊</div>
                            <h3>시각화 영역</h3>
                            <p>TAI에게 다음과 같은 명령어를 입력해보세요:</p>
                            <div className="command-examples">
                              <div className="command-item">• "학생 통계 보여줘"</div>
                              <div className="command-item">• "출석률 분석해줘"</div>
                              <div className="command-item">• "성적 현황 알려줘"</div>
                              <div className="command-item">• "일정표 보여줘"</div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <ReportGenerator data={null} visualizationType={null} />
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="chatbot-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.type}`}>
                <div className="message-content">
                  {message.content}
                  {message.file && (
                    <div className="file-attachment">
                      📎 {message.file.name} ({formatFileSize(message.file.size)})
                    </div>
                  )}
                </div>
                <div className="message-time">
                  {formatTime(message.timestamp)}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="chatbot-input-container">
            {/* 파일 업로드 영역 */}
            <div className="file-upload-area">
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileSelect}
                accept="image/*,.pdf,.txt,.doc,.docx"
                className="file-input"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="file-upload-button">
                📎 파일 선택
              </label>
              {selectedFile && (
                <div className="selected-file">
                  <span className="file-name">{selectedFile.name}</span>
                  <span className="file-size">({formatFileSize(selectedFile.size)})</span>
                  <button onClick={removeFile} className="remove-file">×</button>
                </div>
              )}
            </div>
            
            {/* 메시지 입력 영역 */}
            <div className="chatbot-input">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="메시지를 입력하세요..."
                disabled={isLoading}
              />
              <button 
                onClick={sendMessage} 
                disabled={(!inputMessage.trim() && !selectedFile) || isLoading}
                className="send-button"
              >
                ➤
              </button>
            </div>
          </div>
        </>
      )}
      
      {isPopupMode && (
        <div className="resize-handle" title="크기 조절"></div>
      )}
    </div>
  );
}; 