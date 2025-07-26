import React from 'react';

export const GradeAnalysis = ({ data }) => {
  if (!data) return null;

  return (
    <div className="visualization-content">
      <h3>성적 분석 리포트</h3>
      
      {/* 학생 정보 */}
      <div className="student-info-header">
        <h4>{data.studentInfo.name} ({data.studentInfo.grade} {data.studentInfo.class} {data.studentInfo.studentNumber})</h4>
      </div>

      {/* 전체 통계 */}
      <div className="grade-summary">
        <div className="summary-card">
          <div className="summary-number">{data.overallStats.totalAverage}</div>
          <div className="summary-label">전체 평균</div>
        </div>
        <div className="summary-card">
          <div className="summary-number">{data.overallStats.classRank}위</div>
          <div className="summary-label">반 순위</div>
        </div>
        <div className="summary-card">
          <div className="summary-number">{data.overallStats.gradeRank}위</div>
          <div className="summary-label">학년 순위</div>
        </div>
        <div className="summary-card">
          <div className="summary-number">{data.overallStats.improvement}</div>
          <div className="summary-label">성적 향상</div>
        </div>
      </div>

      {/* 시험별 성적 */}
      <div className="exam-results">
        <h4>시험별 성적 현황</h4>
        {data.examResults.map((exam, index) => (
          <div key={index} className="exam-card">
            <div className="exam-header">
              <h5>{exam.exam}</h5>
              <span className="exam-date">{exam.date}</span>
            </div>
            <div className="subject-grades">
              {exam.subjects.map((subject, subIndex) => (
                <div key={subIndex} className="subject-grade">
                  <div className="subject-name">{subject.name}</div>
                  <div className="grade-info">
                    <span className="score">{subject.score}점</span>
                    <span className="grade">{subject.grade}</span>
                    <span className="rank">{subject.rank}위</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 과목별 성과 */}
      <div className="subject-performance">
        <h4>과목별 성과 분석</h4>
        <div className="performance-list">
          {data.subjectPerformance.map((subject, index) => (
            <div key={index} className="performance-item">
              <div className="subject-name">{subject.name}</div>
              <div className="performance-details">
                <div className="average-score">{subject.average}점</div>
                <div className="improvement">{subject.improvement}</div>
                <div className="rank">{subject.rank}위</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 