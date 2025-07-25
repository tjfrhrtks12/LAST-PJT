import React, { useState } from 'react';
import '../styles/MainContent.css';

export const MainContent = ({ activeMenu, selectedSubMenu, onAIChatbotToggle }) => {
  // 학생 데이터 (10명)
  const [students] = useState([
    {
      id: 1,
      name: '김철수',
      studentNumber: '2024001',
      grade: 1,
      class: 1,
      number: 1,
      gender: '남',
      birthDate: '2008-03-15',
      phone: '010-1234-5678',
      email: 'kim@school.com',
      address: '서울시 강남구 테헤란로 123',
      parentName: '김영수',
      parentPhone: '010-1111-2222',
      emergencyContact: '010-9999-8888',
      bloodType: 'A',
      height: 165,
      weight: 55,
      allergy: '없음',
      medicalHistory: '없음',
      memo: '수학에 관심이 많음',
      grades: {
        '1학기': {
          '중간고사': {
            '국어': 85,
            '영어': 78,
            '수학': 92,
            '과학': 88
          },
          '기말고사': {
            '국어': 88,
            '영어': 82,
            '수학': 95,
            '과학': 90
          }
        },
        '2학기': {
          '중간고사': {
            '국어': 90,
            '영어': 85,
            '수학': 94,
            '과학': 89
          },
          '기말고사': {
            '국어': 92,
            '영어': 88,
            '수학': 96,
            '과학': 91
          }
        }
      },
      attendance: {
        '1학기': {
          '지각': 2,
          '조퇴': 1,
          '결석': 0,
          '무단결석': 0
        },
        '2학기': {
          '지각': 1,
          '조퇴': 0,
          '결석': 1,
          '무단결석': 0
        }
      }
    },
    {
      id: 2,
      name: '이영희',
      studentNumber: '2024002',
      grade: 1,
      class: 1,
      number: 2,
      gender: '여',
      birthDate: '2008-07-22',
      phone: '010-2345-6789',
      email: 'lee@school.com',
      address: '서울시 서초구 서초대로 456',
      parentName: '이미영',
      parentPhone: '010-2222-3333',
      emergencyContact: '010-8888-7777',
      bloodType: 'O',
      height: 160,
      weight: 48,
      allergy: '꽃가루',
      medicalHistory: '없음',
      memo: '음악에 재능이 있음',
      grades: {
        '1학기': {
          '중간고사': {
            '국어': 92,
            '영어': 95,
            '수학': 78,
            '과학': 85
          },
          '기말고사': {
            '국어': 94,
            '영어': 97,
            '수학': 82,
            '과학': 88
          }
        },
        '2학기': {
          '중간고사': {
            '국어': 95,
            '영어': 96,
            '수학': 85,
            '과학': 90
          },
          '기말고사': {
            '국어': 96,
            '영어': 98,
            '수학': 88,
            '과학': 92
          }
        }
      }
    },
    {
      id: 3,
      name: '박민수',
      studentNumber: '2024003',
      grade: 1,
      class: 1,
      number: 3,
      gender: '남',
      birthDate: '2008-01-10',
      phone: '010-3456-7890',
      email: 'park@school.com',
      address: '서울시 송파구 올림픽로 789',
      parentName: '박준호',
      parentPhone: '010-3333-4444',
      emergencyContact: '010-7777-6666',
      bloodType: 'B',
      height: 170,
      weight: 60,
      allergy: '없음',
      medicalHistory: '없음',
      memo: '체육에 뛰어남',
      grades: {
        '1학기': {
          '중간고사': {
            '국어': 75,
            '영어': 70,
            '수학': 85,
            '과학': 80
          },
          '기말고사': {
            '국어': 78,
            '영어': 75,
            '수학': 88,
            '과학': 82
          }
        },
        '2학기': {
          '중간고사': {
            '국어': 80,
            '영어': 78,
            '수학': 90,
            '과학': 85
          },
          '기말고사': {
            '국어': 82,
            '영어': 80,
            '수학': 92,
            '과학': 87
          }
        }
      }
    },
    {
      id: 4,
      name: '최지은',
      studentNumber: '2024004',
      grade: 1,
      class: 1,
      number: 4,
      gender: '여',
      birthDate: '2008-05-18',
      phone: '010-4567-8901',
      email: 'choi@school.com',
      address: '서울시 마포구 와우산로 321',
      parentName: '최성민',
      parentPhone: '010-4444-5555',
      emergencyContact: '010-6666-5555',
      bloodType: 'AB',
      height: 158,
      weight: 45,
      allergy: '없음',
      medicalHistory: '없음',
      memo: '미술에 관심이 많음',
      grades: {
        '1학기': {
          '중간고사': {
            '국어': 88,
            '영어': 85,
            '수학': 75,
            '과학': 82
          },
          '기말고사': {
            '국어': 90,
            '영어': 88,
            '수학': 78,
            '과학': 85
          }
        },
        '2학기': {
          '중간고사': {
            '국어': 92,
            '영어': 90,
            '수학': 82,
            '과학': 88
          },
          '기말고사': {
            '국어': 94,
            '영어': 92,
            '수학': 85,
            '과학': 90
          }
        }
      }
    },
    {
      id: 5,
      name: '정현우',
      studentNumber: '2024005',
      grade: 1,
      class: 1,
      number: 5,
      gender: '남',
      birthDate: '2008-09-30',
      phone: '010-5678-9012',
      email: 'jung@school.com',
      address: '서울시 영등포구 여의대로 654',
      parentName: '정태호',
      parentPhone: '010-5555-6666',
      emergencyContact: '010-5555-4444',
      bloodType: 'A',
      height: 168,
      weight: 58,
      allergy: '없음',
      medicalHistory: '없음',
      memo: '컴퓨터에 관심이 많음',
      grades: {
        '1학기': {
          '중간고사': {
            '국어': 82,
            '영어': 88,
            '수학': 90,
            '과학': 85
          },
          '기말고사': {
            '국어': 85,
            '영어': 90,
            '수학': 92,
            '과학': 88
          }
        },
        '2학기': {
          '중간고사': {
            '국어': 88,
            '영어': 92,
            '수학': 94,
            '과학': 90
          },
          '기말고사': {
            '국어': 90,
            '영어': 94,
            '수학': 96,
            '과학': 92
          }
        }
      }
    },
    {
      id: 6,
      name: '한소영',
      studentNumber: '2024006',
      grade: 1,
      class: 1,
      number: 6,
      gender: '여',
      birthDate: '2008-12-05',
      phone: '010-6789-0123',
      email: 'han@school.com',
      address: '서울시 강서구 화곡로 987',
      parentName: '한동욱',
      parentPhone: '010-6666-7777',
      emergencyContact: '010-4444-3333',
      bloodType: 'O',
      height: 162,
      weight: 50,
      allergy: '없음',
      medicalHistory: '없음',
      memo: '독서를 좋아함',
      grades: {
        '1학기': {
          '중간고사': {
            '국어': 95,
            '영어': 82,
            '수학': 78,
            '과학': 80
          },
          '기말고사': {
            '국어': 97,
            '영어': 85,
            '수학': 82,
            '과학': 83
          }
        },
        '2학기': {
          '중간고사': {
            '국어': 98,
            '영어': 88,
            '수학': 85,
            '과학': 86
          },
          '기말고사': {
            '국어': 99,
            '영어': 90,
            '수학': 88,
            '과학': 88
          }
        }
      }
    },
    {
      id: 7,
      name: '송태현',
      studentNumber: '2024007',
      grade: 1,
      class: 1,
      number: 7,
      gender: '남',
      birthDate: '2008-04-12',
      phone: '010-7890-1234',
      email: 'song@school.com',
      address: '서울시 노원구 동일로 147',
      parentName: '송병철',
      parentPhone: '010-7777-8888',
      emergencyContact: '010-3333-2222',
      bloodType: 'B',
      height: 172,
      weight: 62,
      allergy: '없음',
      medicalHistory: '없음',
      memo: '과학에 뛰어남',
      grades: {
        '1학기': {
          '중간고사': {
            '국어': 78,
            '영어': 75,
            '수학': 85,
            '과학': 95
          },
          '기말고사': {
            '국어': 80,
            '영어': 78,
            '수학': 88,
            '과학': 97
          }
        },
        '2학기': {
          '중간고사': {
            '국어': 82,
            '영어': 80,
            '수학': 90,
            '과학': 98
          },
          '기말고사': {
            '국어': 85,
            '영어': 82,
            '수학': 92,
            '과학': 99
          }
        }
      }
    },
    {
      id: 8,
      name: '임수진',
      studentNumber: '2024008',
      grade: 1,
      class: 1,
      number: 8,
      gender: '여',
      birthDate: '2008-08-25',
      phone: '010-8901-2345',
      email: 'lim@school.com',
      address: '서울시 성북구 동소문로 258',
      parentName: '임재현',
      parentPhone: '010-8888-9999',
      emergencyContact: '010-2222-1111',
      bloodType: 'A',
      height: 159,
      weight: 47,
      allergy: '없음',
      medicalHistory: '없음',
      memo: '영어에 관심이 많음',
      grades: {
        '1학기': {
          '중간고사': {
            '국어': 85,
            '영어': 95,
            '수학': 75,
            '과학': 78
          },
          '기말고사': {
            '국어': 88,
            '영어': 97,
            '수학': 78,
            '과학': 80
          }
        },
        '2학기': {
          '중간고사': {
            '국어': 90,
            '영어': 98,
            '수학': 82,
            '과학': 83
          },
          '기말고사': {
            '국어': 92,
            '영어': 99,
            '수학': 85,
            '과학': 85
          }
        }
      }
    },
    {
      id: 9,
      name: '강동현',
      studentNumber: '2024009',
      grade: 1,
      class: 1,
      number: 9,
      gender: '남',
      birthDate: '2008-02-08',
      phone: '010-9012-3456',
      email: 'kang@school.com',
      address: '서울시 광진구 능동로 369',
      parentName: '강민수',
      parentPhone: '010-9999-0000',
      emergencyContact: '010-1111-0000',
      bloodType: 'O',
      height: 166,
      weight: 56,
      allergy: '없음',
      medicalHistory: '없음',
      memo: '역사에 관심이 많음',
      grades: {
        '1학기': {
          '중간고사': {
            '국어': 90,
            '영어': 78,
            '수학': 82,
            '과학': 80
          },
          '기말고사': {
            '국어': 92,
            '영어': 80,
            '수학': 85,
            '과학': 82
          }
        },
        '2학기': {
          '중간고사': {
            '국어': 94,
            '영어': 82,
            '수학': 88,
            '과학': 85
          },
          '기말고사': {
            '국어': 96,
            '영어': 85,
            '수학': 90,
            '과학': 87
          }
        }
      }
    },
    {
      id: 10,
      name: '윤서연',
      studentNumber: '2024010',
      grade: 1,
      class: 1,
      number: 10,
      gender: '여',
      birthDate: '2008-11-14',
      phone: '010-0123-4567',
      email: 'yoon@school.com',
      address: '서울시 중구 을지로 741',
      parentName: '윤상호',
      parentPhone: '010-0000-1111',
      emergencyContact: '010-0000-9999',
      bloodType: 'AB',
      height: 161,
      weight: 49,
      allergy: '없음',
      medicalHistory: '없음',
      memo: '수학에 뛰어남',
      grades: {
        '1학기': {
          '중간고사': {
            '국어': 85,
            '영어': 88,
            '수학': 95,
            '과학': 82
          },
          '기말고사': {
            '국어': 88,
            '영어': 90,
            '수학': 97,
            '과학': 85
          }
        },
        '2학기': {
          '중간고사': {
            '국어': 90,
            '영어': 92,
            '수학': 98,
            '과학': 88
          },
          '기말고사': {
            '국어': 92,
            '영어': 94,
            '수학': 99,
            '과학': 90
          }
        }
      }
    }
  ]);

  const [selectedStudent, setSelectedStudent] = useState(students[0]);
  const [activeTab, setActiveTab] = useState('인적사항'); // 탭 상태 추가

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // 성적 평균 계산 함수
  const calculateAverage = (grades) => {
    const subjects = ['국어', '영어', '수학', '과학'];
    const total = subjects.reduce((sum, subject) => sum + grades[subject], 0);
    return Math.round(total / subjects.length);
  };

  // 전체 평균 계산 함수
  const calculateOverallAverage = (studentGrades) => {
    let totalSum = 0;
    let totalCount = 0;
    
    Object.values(studentGrades).forEach(semester => {
      Object.values(semester).forEach(exam => {
        Object.values(exam).forEach(score => {
          totalSum += score;
          totalCount++;
        });
      });
    });
    
    return Math.round(totalSum / totalCount);
  };

  const renderContent = () => {
    // 일정표 캘린더 페이지 표시
    if (activeMenu === '일정표') {
      return (
        <div className="calendar-content">
          <div className="calendar-header">
            <div className="welcome-section">
              <h1>📅 Tzone 고등학교 일정표</h1>
              <p>학교 행사, 시험 일정, 주요 일정을 한눈에 확인하세요.</p>
            </div>
            <div className="calendar-controls">
              <button className="calendar-nav-btn">◀</button>
              <span className="current-month">2024년 1월</span>
              <button className="calendar-nav-btn">▶</button>
            </div>
          </div>
          
          <div className="calendar-container">
            <div className="calendar-grid">
              <div className="calendar-weekdays">
                <div className="weekday">일</div>
                <div className="weekday">월</div>
                <div className="weekday">화</div>
                <div className="weekday">수</div>
                <div className="weekday">목</div>
                <div className="weekday">금</div>
                <div className="weekday">토</div>
              </div>
              
              <div className="calendar-days">
                {/* 1월 1일부터 31일까지 */}
                <div className="calendar-day other-month">31</div>
                <div className="calendar-day">
                  <span className="day-number">1</span>
                  <div className="event exam">중간고사</div>
                </div>
                <div className="calendar-day">
                  <span className="day-number">2</span>
                  <div className="event exam">중간고사</div>
                </div>
                <div className="calendar-day">
                  <span className="day-number">3</span>
                  <div className="event exam">중간고사</div>
                </div>
                <div className="calendar-day">
                  <span className="day-number">4</span>
                  <div className="event exam">중간고사</div>
                </div>
                <div className="calendar-day">
                  <span className="day-number">5</span>
                  <div className="event exam">중간고사</div>
                </div>
                <div className="calendar-day">
                  <span className="day-number">6</span>
                </div>
                
                <div className="calendar-day">
                  <span className="day-number">7</span>
                </div>
                <div className="calendar-day">
                  <span className="day-number">8</span>
                  <div className="event holiday">겨울방학</div>
                </div>
                <div className="calendar-day">
                  <span className="day-number">9</span>
                  <div className="event holiday">겨울방학</div>
                </div>
                <div className="calendar-day">
                  <span className="day-number">10</span>
                  <div className="event holiday">겨울방학</div>
                </div>
                <div className="calendar-day">
                  <span className="day-number">11</span>
                  <div className="event holiday">겨울방학</div>
                </div>
                <div className="calendar-day">
                  <span className="day-number">12</span>
                  <div className="event holiday">겨울방학</div>
                </div>
                <div className="calendar-day">
                  <span className="day-number">13</span>
                </div>
                
                <div className="calendar-day">
                  <span className="day-number">14</span>
                </div>
                <div className="calendar-day">
                  <span className="day-number">15</span>
                  <div className="event event">보충수업</div>
                </div>
                <div className="calendar-day">
                  <span className="day-number">16</span>
                  <div className="event event">보충수업</div>
                </div>
                <div className="calendar-day">
                  <span className="day-number">17</span>
                  <div className="event event">보충수업</div>
                </div>
                <div className="calendar-day">
                  <span className="day-number">18</span>
                  <div className="event event">보충수업</div>
                </div>
                <div className="calendar-day">
                  <span className="day-number">19</span>
                  <div className="event event">보충수업</div>
                </div>
                <div className="calendar-day">
                  <span className="day-number">20</span>
                </div>
                
                <div className="calendar-day">
                  <span className="day-number">21</span>
                </div>
                <div className="calendar-day">
                  <span className="day-number">22</span>
                  <div className="event meeting">교사회의</div>
                </div>
                <div className="calendar-day">
                  <span className="day-number">23</span>
                </div>
                <div className="calendar-day">
                  <span className="day-number">24</span>
                </div>
                <div className="calendar-day">
                  <span className="day-number">25</span>
                </div>
                <div className="calendar-day">
                  <span className="day-number">26</span>
                </div>
                <div className="calendar-day">
                  <span className="day-number">27</span>
                </div>
                
                <div className="calendar-day">
                  <span className="day-number">28</span>
                  <div className="event holiday">겨울방학</div>
                </div>
                <div className="calendar-day">
                  <span className="day-number">29</span>
                  <div className="event holiday">겨울방학</div>
                </div>
                <div className="calendar-day">
                  <span className="day-number">30</span>
                  <div className="event holiday">겨울방학</div>
                </div>
                <div className="calendar-day">
                  <span className="day-number">31</span>
                  <div className="event holiday">겨울방학</div>
                </div>
                <div className="calendar-day other-month">1</div>
                <div className="calendar-day other-month">2</div>
                <div className="calendar-day other-month">3</div>
              </div>
            </div>
            
            <div className="calendar-sidebar">
              <div className="calendar-section">
                <div className="section-header">
                  <h2>📋 이번 달 주요 일정</h2>
                </div>
                <div className="upcoming-events">
                  <div className="event-item exam">
                    <div className="event-icon">📝</div>
                    <div className="event-content">
                      <h4>1학기 중간고사</h4>
                      <p>1월 1일 - 1월 5일</p>
                      <span className="event-status">진행중</span>
                    </div>
                  </div>
                  
                  <div className="event-item holiday">
                    <div className="event-icon">🏖️</div>
                    <div className="event-content">
                      <h4>겨울방학</h4>
                      <p>1월 8일 - 1월 12일, 1월 28일 - 1월 31일</p>
                      <span className="event-status">예정</span>
                    </div>
                  </div>
                  
                  <div className="event-item event">
                    <div className="event-icon">📚</div>
                    <div className="event-content">
                      <h4>보충수업</h4>
                      <p>1월 15일 - 1월 19일</p>
                      <span className="event-status">예정</span>
                    </div>
                  </div>
                  
                  <div className="event-item meeting">
                    <div className="event-icon">👥</div>
                    <div className="event-content">
                      <h4>교사회의</h4>
                      <p>1월 22일</p>
                      <span className="event-status">예정</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="calendar-section">
                <div className="section-header">
                  <h2>🎯 다음 달 일정</h2>
                </div>
                <div className="next-month-events">
                  <div className="event-item exam">
                    <div className="event-icon">📊</div>
                    <div className="event-content">
                      <h4>성적 발표</h4>
                      <p>2월 5일</p>
                    </div>
                  </div>
                  
                  <div className="event-item event">
                    <div className="event-icon">🎓</div>
                    <div className="event-content">
                      <h4>졸업식</h4>
                      <p>2월 15일</p>
                    </div>
                  </div>
                  
                  <div className="event-item meeting">
                    <div className="event-icon">👨‍👩‍👧‍👦</div>
                    <div className="event-content">
                      <h4>학부모 상담</h4>
                      <p>2월 20일 - 2월 22일</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // 1학년 종합 페이지 표시
    if (activeMenu === '1학년' && !selectedSubMenu) {
      return (
        <div className="grade-overview-content">
          <div className="grade-overview-header">
            <div className="welcome-section">
              <h1>🎓 1학년 종합 현황</h1>
              <p>1학년 전체 학생들의 학습 현황과 통계를 한눈에 확인하세요.</p>
            </div>
            <div className="grade-info">
              <div className="grade-stats">
                <span className="stat-item">총 3개 반</span>
                <span className="stat-item">총 45명</span>
                <span className="stat-item">담당교사 8명</span>
              </div>
            </div>
          </div>
          
          <div className="grade-overview-stats">
            <div className="stat-card primary">
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <h3>전체 학생</h3>
                <p className="stat-number">45명</p>
                <p className="stat-detail">1반: 15명, 2반: 17명, 3반: 13명</p>
              </div>
            </div>
            
            <div className="stat-card success">
              <div className="stat-icon">📊</div>
              <div className="stat-content">
                <h3>평균 출석률</h3>
                <p className="stat-number">95.2%</p>
                <p className="stat-detail">이번 주 전체 출석 현황</p>
              </div>
            </div>
            
            <div className="stat-card warning">
              <div className="stat-icon">📝</div>
              <div className="stat-content">
                <h3>미제출 과제</h3>
                <p className="stat-number">8건</p>
                <p className="stat-detail">전체 반 미제출 과제</p>
              </div>
            </div>
            
            <div className="stat-card info">
              <div className="stat-icon">📈</div>
              <div className="stat-content">
                <h3>평균 성적</h3>
                <p className="stat-number">84.7점</p>
                <p className="stat-detail">1학기 중간고사 기준</p>
              </div>
            </div>
          </div>
          
          <div className="grade-overview-content-main">
            <div className="grade-overview-main">
              <div className="grade-section">
                <div className="section-header">
                  <h2>📚 반별 현황</h2>
                  <span className="section-badge">실시간</span>
                </div>
                <div className="class-overview">
                  <div className="class-card">
                    <div className="class-header">
                      <h3>1학년 1반</h3>
                      <span className="class-status active">활성</span>
                    </div>
                    <div className="class-stats">
                      <div className="class-stat">
                        <span className="stat-label">학생 수</span>
                        <span className="stat-value">15명</span>
                      </div>
                      <div className="class-stat">
                        <span className="stat-label">출석률</span>
                        <span className="stat-value">96.8%</span>
                      </div>
                      <div className="class-stat">
                        <span className="stat-label">평균 성적</span>
                        <span className="stat-value">87.3점</span>
                      </div>
                    </div>
                    <div className="class-progress">
                      <div className="progress-item">
                        <span>과제 제출률</span>
                        <div className="progress-bar">
                          <div className="progress-fill" style={{width: '93.3%'}}></div>
                        </div>
                        <span>93.3%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="class-card">
                    <div className="class-header">
                      <h3>1학년 2반</h3>
                      <span className="class-status active">활성</span>
                    </div>
                    <div className="class-stats">
                      <div className="class-stat">
                        <span className="stat-label">학생 수</span>
                        <span className="stat-value">17명</span>
                      </div>
                      <div className="class-stat">
                        <span className="stat-label">출석률</span>
                        <span className="stat-value">94.1%</span>
                      </div>
                      <div className="class-stat">
                        <span className="stat-label">평균 성적</span>
                        <span className="stat-value">85.9점</span>
                      </div>
                    </div>
                    <div className="class-progress">
                      <div className="progress-item">
                        <span>과제 제출률</span>
                        <div className="progress-bar">
                          <div className="progress-fill" style={{width: '88.2%'}}></div>
                        </div>
                        <span>88.2%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="class-card">
                    <div className="class-header">
                      <h3>1학년 3반</h3>
                      <span className="class-status active">활성</span>
                    </div>
                    <div className="class-stats">
                      <div className="class-stat">
                        <span className="stat-label">학생 수</span>
                        <span className="stat-value">13명</span>
                      </div>
                      <div className="class-stat">
                        <span className="stat-label">출석률</span>
                        <span className="stat-value">94.6%</span>
                      </div>
                      <div className="class-stat">
                        <span className="stat-label">평균 성적</span>
                        <span className="stat-value">80.9점</span>
                      </div>
                    </div>
                    <div className="class-progress">
                      <div className="progress-item">
                        <span>과제 제출률</span>
                        <div className="progress-bar">
                          <div className="progress-fill" style={{width: '92.3%'}}></div>
                        </div>
                        <span>92.3%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grade-section">
                <div className="section-header">
                  <h2>📋 최근 알림사항</h2>
                  <span className="section-badge">5건</span>
                </div>
                <div className="grade-notifications">
                  <div className="notification-item urgent">
                    <div className="notification-icon">⚠️</div>
                    <div className="notification-content">
                      <h4>1학년 전체 과제 마감</h4>
                      <p>수학 과제 제출 마감일이 내일까지입니다. 미제출 학생이 8명 있습니다.</p>
                      <span className="notification-time">1시간 전</span>
                    </div>
                  </div>
                  
                  <div className="notification-item">
                    <div className="notification-icon">📊</div>
                    <div className="notification-content">
                      <h4>1학년 성적 분석 완료</h4>
                      <p>1학기 중간고사 성적 분석이 완료되었습니다. 전체 평균 84.7점입니다.</p>
                      <span className="notification-time">3시간 전</span>
                    </div>
                  </div>
                  
                  <div className="notification-item">
                    <div className="notification-icon">📢</div>
                    <div className="notification-content">
                      <h4>1학년 교사 회의</h4>
                      <p>오늘 오후 3시 1학년 교사 회의가 있습니다. 교무실에서 진행됩니다.</p>
                      <span className="notification-time">1일 전</span>
                    </div>
                  </div>
                  
                  <div className="notification-item">
                    <div className="notification-icon">🎯</div>
                    <div className="notification-content">
                      <h4>학습 진도 점검</h4>
                      <p>1학년 전체 학습 진도 점검이 필요합니다. 각 반 담임교사 확인 부탁드립니다.</p>
                      <span className="notification-time">2일 전</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grade-overview-sidebar">
              <div className="grade-section">
                <div className="section-header">
                  <h2>📈 과목별 성적 현황</h2>
                </div>
                <div className="subject-stats">
                  <div className="subject-stat">
                    <div className="subject-info">
                      <span className="subject-name">국어</span>
                      <span className="subject-score">87.2점</span>
                    </div>
                    <div className="subject-bar">
                      <div className="subject-fill" style={{width: '87.2%'}}></div>
                    </div>
                  </div>
                  
                  <div className="subject-stat">
                    <div className="subject-info">
                      <span className="subject-name">수학</span>
                      <span className="subject-score">82.1점</span>
                    </div>
                    <div className="subject-bar">
                      <div className="subject-fill" style={{width: '82.1%'}}></div>
                    </div>
                  </div>
                  
                  <div className="subject-stat">
                    <div className="subject-info">
                      <span className="subject-name">영어</span>
                      <span className="subject-score">89.5점</span>
                    </div>
                    <div className="subject-bar">
                      <div className="subject-fill" style={{width: '89.5%'}}></div>
                    </div>
                  </div>
                  
                  <div className="subject-stat">
                    <div className="subject-info">
                      <span className="subject-name">과학</span>
                      <span className="subject-score">85.8점</span>
                    </div>
                    <div className="subject-bar">
                      <div className="subject-fill" style={{width: '85.8%'}}></div>
                    </div>
                  </div>
                  
                  <div className="subject-stat">
                    <div className="subject-info">
                      <span className="subject-name">사회</span>
                      <span className="subject-score">88.3점</span>
                    </div>
                    <div className="subject-bar">
                      <div className="subject-fill" style={{width: '88.3%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grade-section">
                <div className="section-header">
                  <h2>⚡ 빠른 액션</h2>
                </div>
                <div className="quick-actions">
                  <div className="action-item">
                    <div className="action-icon">📊</div>
                    <span>성적 분석</span>
                  </div>
                  <div className="action-item">
                    <div className="action-icon">📝</div>
                    <span>과제 관리</span>
                  </div>
                  <div className="action-item">
                    <div className="action-icon">📢</div>
                    <span>공지사항</span>
                  </div>
                  <div className="action-item">
                    <div className="action-icon">📅</div>
                    <span>일정 관리</span>
                  </div>
                  <div className="action-item">
                    <div className="action-icon">👥</div>
                    <span>학생 관리</span>
                  </div>
                  <div className="action-item">
                    <div className="action-icon">📈</div>
                    <span>통계 리포트</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // 시간표 화면 표시
    if (activeMenu === '1학년' && selectedSubMenu === '1-1-시간표') {
      return (
        <div className="timetable-content">
          <div className="timetable-header">
            <div className="timetable-header-content">
              <h3>📅 1학년 1반 시간표</h3>
              <button
                className="ai-chatbot-button-header"
                onClick={onAIChatbotToggle}
              >
                🤖 <span className="tai-text">TAI</span>
              </button>
            </div>
            <div className="timetable-info">
              <span className="semester-info">2024학년도 1학기</span>
            </div>
          </div>
          
          <div className="timetable-container">
            <div className="timetable-grid">
              {/* 요일 헤더 */}
              <div className="timetable-cell header">교시</div>
              <div className="timetable-cell header">월요일</div>
              <div className="timetable-cell header">화요일</div>
              <div className="timetable-cell header">수요일</div>
              <div className="timetable-cell header">목요일</div>
              <div className="timetable-cell header">금요일</div>
              
              {/* 1교시 */}
              <div className="timetable-cell period">1교시<br/>08:30-09:20</div>
              <div className="timetable-cell subject korean">국어<br/><span className="teacher">김국어</span></div>
              <div className="timetable-cell subject math">수학<br/><span className="teacher">이수학</span></div>
              <div className="timetable-cell subject english">영어<br/><span className="teacher">박영어</span></div>
              <div className="timetable-cell subject science">과학<br/><span className="teacher">최과학</span></div>
              <div className="timetable-cell subject korean">국어<br/><span className="teacher">김국어</span></div>
              
              {/* 2교시 */}
              <div className="timetable-cell period">2교시<br/>09:30-10:20</div>
              <div className="timetable-cell subject math">수학<br/><span className="teacher">이수학</span></div>
              <div className="timetable-cell subject korean">국어<br/><span className="teacher">김국어</span></div>
              <div className="timetable-cell subject science">과학<br/><span className="teacher">최과학</span></div>
              <div className="timetable-cell subject english">영어<br/><span className="teacher">박영어</span></div>
              <div className="timetable-cell subject math">수학<br/><span className="teacher">이수학</span></div>
              
              {/* 3교시 */}
              <div className="timetable-cell period">3교시<br/>10:30-11:20</div>
              <div className="timetable-cell subject english">영어<br/><span className="teacher">박영어</span></div>
              <div className="timetable-cell subject science">과학<br/><span className="teacher">최과학</span></div>
              <div className="timetable-cell subject korean">국어<br/><span className="teacher">김국어</span></div>
              <div className="timetable-cell subject math">수학<br/><span className="teacher">이수학</span></div>
              <div className="timetable-cell subject english">영어<br/><span className="teacher">박영어</span></div>
              
              {/* 4교시 */}
              <div className="timetable-cell period">4교시<br/>11:30-12:20</div>
              <div className="timetable-cell subject science">과학<br/><span className="teacher">최과학</span></div>
              <div className="timetable-cell subject english">영어<br/><span className="teacher">박영어</span></div>
              <div className="timetable-cell subject math">수학<br/><span className="teacher">이수학</span></div>
              <div className="timetable-cell subject korean">국어<br/><span className="teacher">김국어</span></div>
              <div className="timetable-cell subject science">과학<br/><span className="teacher">최과학</span></div>
              
              {/* 점심시간 */}
              <div className="timetable-cell period lunch">점심시간<br/>12:20-13:10</div>
              <div className="timetable-cell lunch" colSpan="5">🍽️ 점심시간</div>
              
              {/* 5교시 */}
              <div className="timetable-cell period">5교시<br/>13:10-14:00</div>
              <div className="timetable-cell subject social">사회<br/><span className="teacher">정사회</span></div>
              <div className="timetable-cell subject music">음악<br/><span className="teacher">한음악</span></div>
              <div className="timetable-cell subject art">미술<br/><span className="teacher">조미술</span></div>
              <div className="timetable-cell subject pe">체육<br/><span className="teacher">윤체육</span></div>
              <div className="timetable-cell subject computer">컴퓨터<br/><span className="teacher">임컴퓨터</span></div>
              
              {/* 6교시 */}
              <div className="timetable-cell period">6교시<br/>14:10-15:00</div>
              <div className="timetable-cell subject pe">체육<br/><span className="teacher">윤체육</span></div>
              <div className="timetable-cell subject social">사회<br/><span className="teacher">정사회</span></div>
              <div className="timetable-cell subject music">음악<br/><span className="teacher">한음악</span></div>
              <div className="timetable-cell subject art">미술<br/><span className="teacher">조미술</span></div>
              <div className="timetable-cell subject social">사회<br/><span className="teacher">정사회</span></div>
              
              {/* 7교시 */}
              <div className="timetable-cell period">7교시<br/>15:10-16:00</div>
              <div className="timetable-cell subject computer">컴퓨터<br/><span className="teacher">임컴퓨터</span></div>
              <div className="timetable-cell subject pe">체육<br/><span className="teacher">윤체육</span></div>
              <div className="timetable-cell subject art">미술<br/><span className="teacher">조미술</span></div>
              <div className="timetable-cell subject music">음악<br/><span className="teacher">한음악</span></div>
              <div className="timetable-cell subject computer">컴퓨터<br/><span className="teacher">임컴퓨터</span></div>
            </div>
          </div>
        </div>
      );
    }

    // 학생관리 화면 표시 조건 수정
    if (activeMenu === '1학년' && selectedSubMenu === '1-1-학생관리') {
      return (
        <div className="student-management-container">
          <div className="student-list-section">
            <div className="section-header">
              <h2>👥 학생 목록</h2>
              <span className="student-count">총 {students.length}명</span>
            </div>
            <div className="student-list">
              {students.map((student) => (
                <div
                  key={student.id}
                  className={`student-item ${selectedStudent?.id === student.id ? 'selected' : ''}`}
                  onClick={() => handleStudentSelect(student)}
                >
                  <div className="student-avatar">
                    <span className="avatar-text">{student.name.charAt(0)}</span>
                  </div>
                  <div className="student-info">
                    <div className="student-name">{student.name}</div>
                    <div className="student-details">
                      <span className="student-number">{student.number}번</span>
                      <span className="student-gender">{student.gender}</span>
                      <span className="student-id">{student.studentNumber}</span>
                    </div>
                  </div>
                  <div className="student-status">
                    <div className="status-dot"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="student-detail-section">
            <div className="section-header">
              <h2>📋 학생 정보</h2>
              {selectedStudent && (
                <div className="selected-student-info">
                  <button 
                    className="ai-chatbot-button-header"
                    onClick={onAIChatbotToggle}
                  >
                    🤖 <span className="tai-text">TAI</span>
                  </button>
                </div>
              )}
            </div>
            
            {selectedStudent && (
              <div className="student-detail">
                <div className="detail-header">
                  <div className="student-profile">
                    <div className="profile-avatar">
                      <span className="avatar-text large">{selectedStudent.name.charAt(0)}</span>
                    </div>
                    <div className="profile-info">
                      <h3 className="student-full-name">{selectedStudent.name}</h3>
                      <p className="student-id-full">{selectedStudent.studentNumber}</p>
                    </div>
                  </div>
                </div>

                {/* 탭 네비게이션 */}
                <div className="tab-navigation">
                  <button
                    className={`tab-button ${activeTab === '인적사항' ? 'active' : ''}`}
                    onClick={() => handleTabClick('인적사항')}
                  >
                    📋 인적사항
                  </button>
                  <button
                    className={`tab-button ${activeTab === '성적' ? 'active' : ''}`}
                    onClick={() => handleTabClick('성적')}
                  >
                    📊 성적
                  </button>
                  <button
                    className={`tab-button ${activeTab === '출결' ? 'active' : ''}`}
                    onClick={() => handleTabClick('출결')}
                  >
                    📅 출결
                  </button>
                </div>

                {/* 탭 콘텐츠 */}
                <div className="tab-content">
                  {activeTab === '인적사항' && (
                    <div className="detail-content">
                      <div className="detail-section">
                        <h4>📊 기본 정보</h4>
                        <div className="detail-grid">
                          <div className="detail-item">
                            <span className="label">성별</span>
                            <span className="value">{selectedStudent.gender}</span>
                          </div>
                          <div className="detail-item">
                            <span className="label">생년월일</span>
                            <span className="value">{selectedStudent.birthDate}</span>
                          </div>
                          <div className="detail-item">
                            <span className="label">혈액형</span>
                            <span className="value">{selectedStudent.bloodType}형</span>
                          </div>
                          <div className="detail-item">
                            <span className="label">키</span>
                            <span className="value">{selectedStudent.height}cm</span>
                          </div>
                          <div className="detail-item">
                            <span className="label">몸무게</span>
                            <span className="value">{selectedStudent.weight}kg</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="detail-section">
                        <h4>📞 연락처 정보</h4>
                        <div className="detail-grid">
                          <div className="detail-item">
                            <span className="label">학생 연락처</span>
                            <span className="value">{selectedStudent.phone}</span>
                          </div>
                          <div className="detail-item">
                            <span className="label">이메일</span>
                            <span className="value">{selectedStudent.email}</span>
                          </div>
                          <div className="detail-item">
                            <span className="label">보호자</span>
                            <span className="value">{selectedStudent.parentName}</span>
                          </div>
                          <div className="detail-item">
                            <span className="label">보호자 연락처</span>
                            <span className="value">{selectedStudent.parentPhone}</span>
                          </div>
                          <div className="detail-item">
                            <span className="label">비상연락처</span>
                            <span className="value">{selectedStudent.emergencyContact}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="detail-section">
                        <h4>🏠 주소</h4>
                        <div className="detail-item full-width">
                          <span className="value address">{selectedStudent.address}</span>
                        </div>
                      </div>
                      
                      <div className="detail-section">
                        <h4>🏥 건강 정보</h4>
                        <div className="detail-grid">
                          <div className="detail-item">
                            <span className="label">알레르기</span>
                            <span className="value">{selectedStudent.allergy}</span>
                          </div>
                          <div className="detail-item">
                            <span className="label">병력</span>
                            <span className="value">{selectedStudent.medicalHistory}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="detail-section">
                        <h4>📝 특이사항</h4>
                        <div className="detail-item full-width">
                          <span className="value memo">{selectedStudent.memo}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === '성적' && (
                    <div className="grades-content">
                      <div className="grades-summary">
                        <div className="overall-average">
                          <h4>📈 전체 평균</h4>
                          <div className="average-score">
                            {calculateOverallAverage(selectedStudent.grades)}점
                          </div>
                        </div>
                      </div>

                      {Object.entries(selectedStudent.grades).map(([semester, exams]) => (
                        <div key={semester} className="semester-section">
                          <h4>📚 {semester}</h4>
                          <div className="exams-container">
                            {Object.entries(exams).map(([examType, subjects]) => (
                              <div key={examType} className="exam-section">
                                <h5>{examType}</h5>
                                <div className="subjects-grid">
                                  {Object.entries(subjects).map(([subject, score]) => (
                                    <div key={subject} className="subject-score">
                                      <span className="subject-name">{subject}</span>
                                      <span className={`score ${score >= 90 ? 'excellent' : score >= 80 ? 'good' : score >= 70 ? 'average' : 'poor'}`}>
                                        {score}점
                                      </span>
                                    </div>
                                  ))}
                                  <div className="exam-average">
                                    <span className="average-label">평균</span>
                                    <span className="average-value">
                                      {calculateAverage(subjects)}점
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === '시간표' && (
                    <div className="timetable-content">
                      <div className="timetable-header">
                        <h3>📅 1학년 1반 시간표</h3>
                        <div className="timetable-info">
                          <span className="semester-info">2024학년도 1학기</span>
                        </div>
                      </div>
                      
                      <div className="timetable-container">
                        <div className="timetable-grid">
                          {/* 요일 헤더 */}
                          <div className="timetable-cell header">교시</div>
                          <div className="timetable-cell header">월요일</div>
                          <div className="timetable-cell header">화요일</div>
                          <div className="timetable-cell header">수요일</div>
                          <div className="timetable-cell header">목요일</div>
                          <div className="timetable-cell header">금요일</div>
                          
                          {/* 1교시 */}
                          <div className="timetable-cell period">1교시<br/>08:30-09:20</div>
                          <div className="timetable-cell subject korean">국어<br/><span className="teacher">김국어</span></div>
                          <div className="timetable-cell subject math">수학<br/><span className="teacher">이수학</span></div>
                          <div className="timetable-cell subject english">영어<br/><span className="teacher">박영어</span></div>
                          <div className="timetable-cell subject science">과학<br/><span className="teacher">최과학</span></div>
                          <div className="timetable-cell subject korean">국어<br/><span className="teacher">김국어</span></div>
                          
                          {/* 2교시 */}
                          <div className="timetable-cell period">2교시<br/>09:30-10:20</div>
                          <div className="timetable-cell subject math">수학<br/><span className="teacher">이수학</span></div>
                          <div className="timetable-cell subject korean">국어<br/><span className="teacher">김국어</span></div>
                          <div className="timetable-cell subject science">과학<br/><span className="teacher">최과학</span></div>
                          <div className="timetable-cell subject english">영어<br/><span className="teacher">박영어</span></div>
                          <div className="timetable-cell subject math">수학<br/><span className="teacher">이수학</span></div>
                          
                          {/* 3교시 */}
                          <div className="timetable-cell period">3교시<br/>10:30-11:20</div>
                          <div className="timetable-cell subject english">영어<br/><span className="teacher">박영어</span></div>
                          <div className="timetable-cell subject science">과학<br/><span className="teacher">최과학</span></div>
                          <div className="timetable-cell subject korean">국어<br/><span className="teacher">김국어</span></div>
                          <div className="timetable-cell subject math">수학<br/><span className="teacher">이수학</span></div>
                          <div className="timetable-cell subject english">영어<br/><span className="teacher">박영어</span></div>
                          
                          {/* 4교시 */}
                          <div className="timetable-cell period">4교시<br/>11:30-12:20</div>
                          <div className="timetable-cell subject science">과학<br/><span className="teacher">최과학</span></div>
                          <div className="timetable-cell subject english">영어<br/><span className="teacher">박영어</span></div>
                          <div className="timetable-cell subject math">수학<br/><span className="teacher">이수학</span></div>
                          <div className="timetable-cell subject korean">국어<br/><span className="teacher">김국어</span></div>
                          <div className="timetable-cell subject science">과학<br/><span className="teacher">최과학</span></div>
                          
                          {/* 점심시간 */}
                          <div className="timetable-cell period lunch">점심시간<br/>12:20-13:10</div>
                          <div className="timetable-cell lunch" colSpan="5">🍽️ 점심시간</div>
                          
                          {/* 5교시 */}
                          <div className="timetable-cell period">5교시<br/>13:10-14:00</div>
                          <div className="timetable-cell subject social">사회<br/><span className="teacher">정사회</span></div>
                          <div className="timetable-cell subject music">음악<br/><span className="teacher">한음악</span></div>
                          <div className="timetable-cell subject art">미술<br/><span className="teacher">조미술</span></div>
                          <div className="timetable-cell subject pe">체육<br/><span className="teacher">윤체육</span></div>
                          <div className="timetable-cell subject computer">컴퓨터<br/><span className="teacher">임컴퓨터</span></div>
                          
                          {/* 6교시 */}
                          <div className="timetable-cell period">6교시<br/>14:10-15:00</div>
                          <div className="timetable-cell subject pe">체육<br/><span className="teacher">윤체육</span></div>
                          <div className="timetable-cell subject social">사회<br/><span className="teacher">정사회</span></div>
                          <div className="timetable-cell subject music">음악<br/><span className="teacher">한음악</span></div>
                          <div className="timetable-cell subject art">미술<br/><span className="teacher">조미술</span></div>
                          <div className="timetable-cell subject social">사회<br/><span className="teacher">정사회</span></div>
                          
                          {/* 7교시 */}
                          <div className="timetable-cell period">7교시<br/>15:10-16:00</div>
                          <div className="timetable-cell subject computer">컴퓨터<br/><span className="teacher">임컴퓨터</span></div>
                          <div className="timetable-cell subject pe">체육<br/><span className="teacher">윤체육</span></div>
                          <div className="timetable-cell subject art">미술<br/><span className="teacher">조미술</span></div>
                          <div className="timetable-cell subject music">음악<br/><span className="teacher">한음악</span></div>
                          <div className="timetable-cell subject computer">컴퓨터<br/><span className="teacher">임컴퓨터</span></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === '출결' && (
                    <div className="attendance-content">
                      <div className="attendance-summary">
                        <div className="overall-attendance">
                          <h4>📊 전체 출결 현황</h4>
                          <div className="attendance-stats">
                            <div className="stat-item">
                              <span className="stat-label">총 출석일</span>
                              <span className="stat-value">180일</span>
                            </div>
                            <div className="stat-item">
                              <span className="stat-label">출석률</span>
                              <span className="stat-value">98.3%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {['1학기', '2학기'].map((semester) => (
                        <div key={semester} className="semester-attendance-section">
                          <h4>📚 {semester}</h4>
                          <div className="attendance-table">
                            <div className="attendance-header">
                              <div className="attendance-cell header">구분</div>
                              <div className="attendance-cell header">횟수</div>
                              <div className="attendance-cell header">비율</div>
                            </div>
                            <div className="attendance-row">
                              <div className="attendance-cell">지각</div>
                              <div className="attendance-cell count">3</div>
                              <div className="attendance-cell percentage">1.7%</div>
                            </div>
                            <div className="attendance-row">
                              <div className="attendance-cell">조퇴</div>
                              <div className="attendance-cell count">2</div>
                              <div className="attendance-cell percentage">1.1%</div>
                            </div>
                            <div className="attendance-row">
                              <div className="attendance-cell">결석</div>
                              <div className="attendance-cell count">1</div>
                              <div className="attendance-cell percentage">0.6%</div>
                            </div>
                            <div className="attendance-row">
                              <div className="attendance-cell">무단결석</div>
                              <div className="attendance-cell count">0</div>
                              <div className="attendance-cell percentage">0%</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="main-content">
        <div className="content-header">
          <h1>{activeMenu}</h1>
          {selectedSubMenu && <h2>{selectedSubMenu}</h2>}
        </div>
        
        <div className="content-body">
          <div className="welcome-section">
            <h2>환영합니다!</h2>
            <p>왼쪽 메뉴에서 원하는 기능을 선택해주세요.</p>
            <button 
              className="ai-chatbot-button"
              onClick={onAIChatbotToggle}
            >
              🤖 <span className="tai-text">TAI</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return renderContent();
}; 