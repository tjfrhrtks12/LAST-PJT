import React from 'react';

export const StudentStats = ({ data }) => {
  if (!data) return null;

  return (
    <div className="visualization-content">
      <h3>학생 통계 현황</h3>
      
      {/* 전체 통계 */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">{data.totalStudents}</div>
          <div className="stat-label">전체 학생</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{data.averageGrade}</div>
          <div className="stat-label">평균 성적</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{data.attendanceRate}%</div>
          <div className="stat-label">출석률</div>
        </div>
      </div>

      {/* 과목별 성적 */}
      <div className="subject-stats">
        <h4>과목별 평균 성적</h4>
        <div className="subject-bars">
          {data.subjects.map((subject, index) => (
            <div key={index} className="subject-bar">
              <div className="subject-name">{subject.name}</div>
              <div className="bar-container">
                <div 
                  className="bar-fill" 
                  style={{ width: `${subject.average}%` }}
                ></div>
                <span className="bar-value">{subject.average}점</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 최근 활동 */}
      <div className="recent-activities">
        <h4>최근 활동</h4>
        <div className="activity-list">
          {data.recentActivities.map((activity, index) => (
            <div key={index} className="activity-item">
              <div className="activity-icon">
                {activity.type === '시험' && '📝'}
                {activity.type === '과제' && '📚'}
                {activity.type === '출석' && '✅'}
              </div>
              <div className="activity-info">
                <div className="activity-type">{activity.type}</div>
                <div className="activity-count">{activity.count}건</div>
              </div>
              <div className="activity-date">{activity.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 