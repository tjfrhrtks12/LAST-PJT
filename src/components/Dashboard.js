import React from 'react';

export const Dashboard = ({ onLogout }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="welcome-section">
          <h1>🏫 Tzone 고등학교</h1>
          <p>미래를 선도하는 교육의 중심, Tzone 고등학교입니다.</p>
        </div>
        <div className="school-info">
          <div className="school-stats">
            <span className="stat-item">설립: 1985년</span>
            <span className="stat-item">교장: 김영수</span>
            <span className="stat-item">교감: 이민호</span>
          </div>
        </div>
      </div>
      
      <div className="dashboard-stats">
        <div className="stat-card primary">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>전체 학생</h3>
            <p className="stat-number">1,247명</p>
            <p className="stat-detail">1학년: 415명, 2학년: 416명, 3학년: 416명</p>
          </div>
        </div>
        
        <div className="stat-card success">
          <div className="stat-icon">👨‍🏫</div>
          <div className="stat-content">
            <h3>전체 교직원</h3>
            <p className="stat-number">89명</p>
            <p className="stat-detail">교사: 76명, 행정직: 13명</p>
          </div>
        </div>
        
        <div className="stat-card warning">
          <div className="stat-icon">🏫</div>
          <div className="stat-content">
            <h3>전체 반</h3>
            <p className="stat-number">36개</p>
            <p className="stat-detail">학년별 12개 반</p>
          </div>
        </div>
        
        <div className="stat-card info">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <h3>학교 평균 출석률</h3>
            <p className="stat-number">96.8%</p>
            <p className="stat-detail">이번 학기</p>
          </div>
        </div>
      </div>
      
      <div className="dashboard-content">
        <div className="dashboard-main">
          <div className="dashboard-section">
            <div className="section-header">
              <h2>📚 학교 소개</h2>
              <span className="section-badge">학교 정보</span>
            </div>
            <div className="school-introduction">
              <div className="intro-section">
                <h3>🎯 교육 철학</h3>
                <p>Tzone 고등학교는 "창의적 사고와 실용적 능력을 겸비한 글로벌 인재 양성"을 교육 철학으로 하여, 학생 개개인의 잠재력을 최대한 발휘할 수 있도록 지원합니다.</p>
              </div>
              
              <div className="intro-section">
                <h3>🌟 특별 프로그램</h3>
                <ul>
                  <li><strong>글로벌 리더십 프로그램:</strong> 해외 교환학생 및 국제 교류 활동</li>
                  <li><strong>창의융합 프로젝트:</strong> STEAM 교육을 통한 문제 해결 능력 향상</li>
                  <li><strong>진로 탐색 프로그램:</strong> 다양한 직업 체험 및 진로 상담</li>
                  <li><strong>예술 체육 프로그램:</strong> 문화 예술 및 스포츠 활동 지원</li>
                </ul>
              </div>
              
              <div className="intro-section">
                <h3>🏆 주요 성과</h3>
                <ul>
                  <li>2023년 대학 진학률 98.5% 달성</li>
                  <li>전국 과학 경시대회 금상 3회 수상</li>
                  <li>국제 수학 올림피아드 동상 2회 수상</li>
                  <li>전국 학생 체육대회 종합 우승 5회</li>
                  <li>교육부 우수학교 표창 3회 수상</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="dashboard-section">
            <div className="section-header">
              <h2>📢 학교 공지사항</h2>
              <span className="section-badge">최신</span>
            </div>
            <div className="notification-list">
              <div className="notification-item urgent">
                <div className="notification-icon">⚠️</div>
                <div className="notification-content">
                  <h4>2024학년도 신입생 입학식 안내</h4>
                  <p>2024년 3월 4일(월) 오전 10시 본교 강당에서 신입생 입학식이 개최됩니다.</p>
                  <span className="notification-time">2일 전</span>
                </div>
              </div>
              
              <div className="notification-item">
                <div className="notification-icon">📊</div>
                <div className="notification-content">
                  <h4>2023학년도 2학기 성적 발표</h4>
                  <p>2023학년도 2학기 성적이 발표되었습니다. 학생부종합전형 준비에 참고하시기 바랍니다.</p>
                  <span className="notification-time">1주일 전</span>
                </div>
              </div>
              
              <div className="notification-item">
                <div className="notification-icon">📢</div>
                <div className="notification-content">
                  <h4>겨울방학 중 보충수업 안내</h4>
                  <p>겨울방학 중 보충수업이 1월 15일부터 2월 9일까지 진행됩니다.</p>
                  <span className="notification-time">2주일 전</span>
                </div>
              </div>
              
              <div className="notification-item">
                <div className="notification-icon">🎯</div>
                <div className="notification-content">
                  <h4>2024학년도 교과서 배부 안내</h4>
                  <p>2024학년도 교과서 배부가 2월 28일부터 시작됩니다.</p>
                  <span className="notification-time">3주일 전</span>
                </div>
              </div>
              
              <div className="notification-item">
                <div className="notification-icon">📅</div>
                <div className="notification-content">
                  <h4>학부모 총회 개최 안내</h4>
                  <p>2024학년도 학부모 총회가 3월 15일(금) 오후 2시에 개최됩니다.</p>
                  <span className="notification-time">1개월 전</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="dashboard-sidebar">
          <div className="dashboard-section">
            <div className="section-header">
              <h2>🏫 학교 정보</h2>
            </div>
            <div className="school-details">
              <div className="detail-item">
                <div className="detail-icon">📍</div>
                <div className="detail-content">
                  <h4>주소</h4>
                  <p>서울특별시 강남구 테헤란로 123</p>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon">📞</div>
                <div className="detail-content">
                  <h4>연락처</h4>
                  <p>02-1234-5678</p>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon">🌐</div>
                <div className="detail-content">
                  <h4>홈페이지</h4>
                  <p>www.tzone.hs.kr</p>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon">📧</div>
                <div className="detail-content">
                  <h4>이메일</h4>
                  <p>info@tzone.hs.kr</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="dashboard-section">
            <div className="section-header">
              <h2>📈 학교 통계</h2>
            </div>
            <div className="school-stats-detail">
              <div className="stat-detail-item">
                <span>대학 진학률</span>
                <div className="stat-bar">
                  <div className="stat-fill" style={{width: '98.5%'}}></div>
                </div>
                <span>98.5%</span>
              </div>
              <div className="stat-detail-item">
                <span>평균 출석률</span>
                <div className="stat-bar">
                  <div className="stat-fill" style={{width: '96.8%'}}></div>
                </div>
                <span>96.8%</span>
              </div>
              <div className="stat-detail-item">
                <span>교사 만족도</span>
                <div className="stat-bar">
                  <div className="stat-fill" style={{width: '94.2%'}}></div>
                </div>
                <span>94.2%</span>
              </div>
              <div className="stat-detail-item">
                <span>학부모 만족도</span>
                <div className="stat-bar">
                  <div className="stat-fill" style={{width: '92.7%'}}></div>
                </div>
                <span>92.7%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 