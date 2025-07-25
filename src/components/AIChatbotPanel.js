import React, { useState, useRef, useEffect } from 'react';

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
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentVisualization, setCurrentVisualization] = useState(null);
  const [visualizationType, setVisualizationType] = useState(null);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  
  // 드래그 및 리사이즈 상태
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 1200, height: 700 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const panelRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 팝업 모드일 때 초기 위치 설정
  useEffect(() => {
    if (isPopupMode && isOpen) {
      const centerX = (window.innerWidth - 800) / 2;
      const centerY = (window.innerHeight - 600) / 2;
      setPosition({ x: centerX, y: centerY });
    }
  }, [isPopupMode, isOpen]);

  // 드래그 시작
  const handleMouseDown = (e) => {
    if (!isPopupMode) return;
    
    if (e.target.closest('.resize-handle')) {
      setIsResizing(true);
      setResizeStart({
        x: e.clientX,
        y: e.clientY,
        width: size.width,
        height: size.height
      });
    } else if (e.target.closest('.chatbot-header')) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  // 드래그/리사이즈 중
  const handleMouseMove = (e) => {
    if (!isPopupMode) return;

    if (isDragging) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      
      // 화면 경계 체크
      const maxX = window.innerWidth - size.width;
      const maxY = window.innerHeight - size.height;
      
      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY))
      });
    } else if (isResizing) {
      const deltaX = e.clientX - resizeStart.x;
      const deltaY = e.clientY - resizeStart.y;
      
      const newWidth = Math.max(400, Math.min(1200, resizeStart.width + deltaX));
      const newHeight = Math.max(300, Math.min(800, resizeStart.height + deltaY));
      
      setSize({ width: newWidth, height: newHeight });
      
      // 크기 조절 시 위치 조정 (오른쪽 하단 기준)
      const maxX = window.innerWidth - newWidth;
      const maxY = window.innerHeight - newHeight;
      
      setPosition(prev => ({
        x: Math.min(prev.x, maxX),
        y: Math.min(prev.y, maxY)
      }));
    }
  };

  // 드래그/리사이즈 종료
  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  // 전역 마우스 이벤트 리스너
  useEffect(() => {
    if (isPopupMode && isOpen) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isPopupMode, isOpen, isDragging, isResizing, dragStart, resizeStart, size]);

  // 파일 선택 처리
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 파일 크기 제한 (10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('파일 크기는 10MB 이하여야 합니다.');
        return;
      }
      
      // 허용된 파일 타입
      const allowedTypes = [
        'image/jpeg', 'image/png', 'image/gif', 'image/webp',
        'application/pdf', 'text/plain', 'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (!allowedTypes.includes(file.type)) {
        alert('지원되지 않는 파일 형식입니다.');
        return;
      }
      
      setSelectedFile(file);
    }
  };

  // 파일 제거
  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // 파일 크기 포맷팅
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

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

    // 특정 명령어에 따른 시각화 생성
    const lowerMessage = inputMessage.toLowerCase();
    let visualization = null;
    let vizType = null;

    if (lowerMessage.includes('학생 통계') || lowerMessage.includes('학생 현황')) {
      visualization = generateStudentStats();
      vizType = 'student-stats';
    } else if (lowerMessage.includes('출석률') || lowerMessage.includes('출석')) {
      visualization = generateAttendanceChart();
      vizType = 'attendance-chart';
    } else if (lowerMessage.includes('성적') || lowerMessage.includes('점수')) {
      visualization = generateGradeAnalysis();
      vizType = 'grade-analysis';
    } else if (lowerMessage.includes('일정') || lowerMessage.includes('시간표')) {
      visualization = generateScheduleData();
      vizType = 'schedule-data';
    }

    if (visualization) {
      setCurrentVisualization(visualization);
      setVisualizationType(vizType);
    }

    try {
      // 파일이 있는 경우 FormData 사용
      let requestBody;
      let headers = {};

      if (selectedFile) {
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('message', inputMessage || '파일을 분석해주세요.');
        requestBody = formData;
      } else {
        headers = { 'Content-Type': 'application/json' };
        requestBody = JSON.stringify({
          messages: [
            {
              role: 'system',
              content: `당신은 학생 관리 시스템의 TAI입니다. 
다음과 같은 기능들을 도와줄 수 있습니다:

1. 학생 정보 관리 (인적사항, 성적, 출결)
2. 학급 관리 (1-1, 1-2, 1-3)
3. 시스템 사용법 안내
4. 일반적인 교육 관련 질문 답변
5. 파일 분석 및 문서 처리

친절하고 전문적으로 답변해주세요. 한국어로 대화합니다.`
            },
            ...messages.slice(-10).map(msg => ({
              role: msg.type === 'user' ? 'user' : 'assistant',
              content: msg.content
            })),
            {
              role: 'user',
              content: inputMessage
            }
          ]
        });
      }

      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers,
        body: requestBody
      });

      if (!response.ok) {
        throw new Error(`API 요청 실패: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error('API 응답 형식 오류');
      }

      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: data.choices[0].message.content,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('챗봇 오류:', error);
      let errorContent = '죄송합니다. 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
      
      if (error.message.includes('API 요청 실패')) {
        errorContent = '서버 연결에 실패했습니다. Node.js 서버가 실행 중인지 확인해주세요.';
      } else if (error.message.includes('API 응답 형식 오류')) {
        errorContent = 'API 응답을 처리하는 중 오류가 발생했습니다.';
      } else if (error.name === 'TypeError') {
        errorContent = '네트워크 연결에 실패했습니다. 인터넷 연결을 확인해주세요.';
      }
      
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: errorContent,
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

  const formatTime = (date) => {
    return date.toLocaleTimeString('ko-KR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  // 시각화 데이터 생성 함수들
  const generateStudentStats = () => {
    return {
      type: 'student-stats',
      data: {
        totalStudents: 1247,
        gradeDistribution: [
          { grade: '1학년', count: 415, percentage: 33.3 },
          { grade: '2학년', count: 416, percentage: 33.4 },
          { grade: '3학년', count: 416, percentage: 33.3 }
        ],
        attendanceRate: 96.8,
        averageScore: 84.7,
        subjects: [
          { name: '국어', average: 87.2 },
          { name: '수학', average: 82.1 },
          { name: '영어', average: 89.5 },
          { name: '과학', average: 85.8 },
          { name: '사회', average: 88.3 }
        ]
      }
    };
  };

  const generateAttendanceChart = () => {
    return {
      type: 'attendance-chart',
      data: {
        monthlyData: [
          { month: '1월', rate: 95.2 },
          { month: '2월', rate: 94.8 },
          { month: '3월', rate: 96.1 },
          { month: '4월', rate: 97.3 },
          { month: '5월', rate: 96.5 },
          { month: '6월', rate: 95.9 }
        ],
        classData: [
          { class: '1-1', rate: 96.8 },
          { class: '1-2', rate: 94.1 },
          { class: '1-3', rate: 94.6 },
          { class: '2-1', rate: 95.2 },
          { class: '2-2', rate: 97.1 },
          { class: '2-3', rate: 93.8 }
        ]
      }
    };
  };

  const generateGradeAnalysis = () => {
    return {
      type: 'grade-analysis',
      data: {
        examResults: [
          { exam: '중간고사', average: 84.7, highest: 98, lowest: 65 },
          { exam: '기말고사', average: 86.2, highest: 100, lowest: 68 },
          { exam: '수능모의고사', average: 82.1, highest: 95, lowest: 62 }
        ],
        subjectPerformance: [
          { subject: '국어', average: 87.2, improvement: 2.1 },
          { subject: '수학', average: 82.1, improvement: -0.5 },
          { subject: '영어', average: 89.5, improvement: 3.2 },
          { subject: '과학', average: 85.8, improvement: 1.8 },
          { subject: '사회', average: 88.3, improvement: 2.7 }
        ]
      }
    };
  };

  const generateScheduleData = () => {
    return {
      type: 'schedule-data',
      data: {
        weeklySchedule: [
          { day: '월요일', subjects: ['국어', '수학', '영어', '과학', '사회'] },
          { day: '화요일', subjects: ['수학', '영어', '국어', '음악', '체육'] },
          { day: '수요일', subjects: ['영어', '과학', '수학', '미술', '국어'] },
          { day: '목요일', subjects: ['과학', '사회', '영어', '수학', '음악'] },
          { day: '금요일', subjects: ['사회', '국어', '과학', '영어', '체육'] }
        ],
        upcomingEvents: [
          { date: '2024-02-05', event: '성적 발표', type: 'exam' },
          { date: '2024-02-15', event: '졸업식', type: 'ceremony' },
          { date: '2024-02-20', event: '학부모 상담', type: 'meeting' }
        ]
      }
    };
  };

  const getPanelStyle = () => {
    if (isPopupMode) {
      return {
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: size.width,
        height: size.height,
        transform: 'none',
        cursor: isDragging ? 'grabbing' : 'default'
      };
    }
    return {};
  };

  // 시각화 컴포넌트들
  const renderStudentStats = (data) => (
    <div className="visualization-container">
      <div className="viz-header">
        <h3>📊 학생 통계 현황</h3>
        <p>전체 학생: {data.totalStudents}명</p>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h4>전체 학생</h4>
            <p className="stat-number">{data.totalStudents}명</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div className="stat-content">
            <h4>평균 출석률</h4>
            <p className="stat-number">{data.attendanceRate}%</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <h4>평균 성적</h4>
            <p className="stat-number">{data.averageScore}점</p>
          </div>
        </div>
      </div>

      <div className="grade-distribution">
        <h4>학년별 분포</h4>
        <div className="distribution-bars">
          {data.gradeDistribution.map((grade, index) => (
            <div key={index} className="distribution-bar">
              <div className="bar-label">{grade.grade}</div>
              <div className="bar-container">
                <div 
                  className="bar-fill" 
                  style={{width: `${grade.percentage}%`}}
                ></div>
              </div>
              <div className="bar-value">{grade.count}명 ({grade.percentage}%)</div>
            </div>
          ))}
        </div>
      </div>

      <div className="subject-performance">
        <h4>과목별 평균 성적</h4>
        <div className="subject-bars">
          {data.subjects.map((subject, index) => (
            <div key={index} className="subject-bar">
              <div className="subject-name">{subject.name}</div>
              <div className="subject-score-bar">
                <div 
                  className="score-fill" 
                  style={{width: `${subject.average}%`}}
                ></div>
              </div>
              <div className="subject-score">{subject.average}점</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAttendanceChart = (data) => (
    <div className="visualization-container">
      <div className="viz-header">
        <h3>📅 출석률 현황</h3>
      </div>
      
      <div className="chart-section">
        <h4>월별 출석률 추이</h4>
        <div className="monthly-chart">
          {data.monthlyData.map((month, index) => (
            <div key={index} className="month-bar">
              <div className="month-label">{month.month}</div>
              <div className="month-bar-container">
                <div 
                  className="month-bar-fill" 
                  style={{height: `${month.rate}%`}}
                ></div>
              </div>
              <div className="month-value">{month.rate}%</div>
            </div>
          ))}
        </div>
      </div>

      <div className="chart-section">
        <h4>반별 출석률</h4>
        <div className="class-chart">
          {data.classData.map((cls, index) => (
            <div key={index} className="class-bar">
              <div className="class-label">{cls.class}</div>
              <div className="class-bar-container">
                <div 
                  className="class-bar-fill" 
                  style={{width: `${cls.rate}%`}}
                ></div>
              </div>
              <div className="class-value">{cls.rate}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGradeAnalysis = (data) => (
    <div className="visualization-container">
      <div className="viz-header">
        <h3>📊 성적 분석</h3>
      </div>
      
      <div className="exam-results">
        <h4>시험별 성적 현황</h4>
        <div className="exam-cards">
          {data.examResults.map((exam, index) => (
            <div key={index} className="exam-card">
              <h5>{exam.exam}</h5>
              <div className="exam-stats">
                <div className="exam-stat">
                  <span>평균</span>
                  <strong>{exam.average}점</strong>
                </div>
                <div className="exam-stat">
                  <span>최고점</span>
                  <strong>{exam.highest}점</strong>
                </div>
                <div className="exam-stat">
                  <span>최저점</span>
                  <strong>{exam.lowest}점</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="subject-performance">
        <h4>과목별 성적 향상도</h4>
        <div className="improvement-bars">
          {data.subjectPerformance.map((subject, index) => (
            <div key={index} className="improvement-bar">
              <div className="subject-info">
                <span className="subject-name">{subject.subject}</span>
                <span className="subject-average">{subject.average}점</span>
              </div>
              <div className="improvement-container">
                <div 
                  className={`improvement-fill ${subject.improvement >= 0 ? 'positive' : 'negative'}`}
                  style={{width: `${Math.abs(subject.improvement) * 10}%`}}
                ></div>
              </div>
              <div className={`improvement-value ${subject.improvement >= 0 ? 'positive' : 'negative'}`}>
                {subject.improvement >= 0 ? '+' : ''}{subject.improvement}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderScheduleData = (data) => (
    <div className="visualization-container">
      <div className="viz-header">
        <h3>📅 주간 일정표</h3>
      </div>
      
      <div className="weekly-schedule">
        <div className="schedule-grid">
          {data.weeklySchedule.map((day, index) => (
            <div key={index} className="schedule-day">
              <div className="day-header">{day.day}</div>
              <div className="day-subjects">
                {day.subjects.map((subject, subIndex) => (
                  <div key={subIndex} className="subject-item">
                    {subject}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="upcoming-events">
        <h4>예정된 주요 일정</h4>
        <div className="event-list">
          {data.upcomingEvents.map((event, index) => (
            <div key={index} className={`event-item ${event.type}`}>
              <div className="event-date">{event.date}</div>
              <div className="event-name">{event.event}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div 
      ref={panelRef}
      className={`ai-chatbot-panel ${isOpen ? 'open' : ''} ${isPopupMode ? 'popup-mode' : ''}`}
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
          
          {/* 오른쪽 섹션: 시각화 */}
          <div className="chatbot-right-section">
            {currentVisualization ? (
              <div className="visualization-area">
                {visualizationType === 'student-stats' && renderStudentStats(currentVisualization.data)}
                {visualizationType === 'attendance-chart' && renderAttendanceChart(currentVisualization.data)}
                {visualizationType === 'grade-analysis' && renderGradeAnalysis(currentVisualization.data)}
                {visualizationType === 'schedule-data' && renderScheduleData(currentVisualization.data)}
              </div>
            ) : (
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
            )}
          </div>
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