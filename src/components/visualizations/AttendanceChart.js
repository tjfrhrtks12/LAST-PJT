import React from 'react';

export const AttendanceChart = ({ data }) => {
  if (!data) return null;

  return (
    <div className="visualization-content">
      <h3>출석 현황 분석</h3>
      
      {/* 출석 요약 */}
      <div className="attendance-summary">
        <div className="summary-card">
          <div className="summary-number">{data.summary.totalPresent}</div>
          <div className="summary-label">출석</div>
        </div>
        <div className="summary-card">
          <div className="summary-number">{data.summary.totalAbsent}</div>
          <div className="summary-label">결석</div>
        </div>
        <div className="summary-card">
          <div className="summary-number">{data.summary.totalLate}</div>
          <div className="summary-label">지각</div>
        </div>
        <div className="summary-card">
          <div className="summary-number">{data.summary.averageAttendance}%</div>
          <div className="summary-label">평균 출석률</div>
        </div>
      </div>

      {/* 일별 출석 차트 */}
      <div className="attendance-chart">
        <h4>일별 출석 현황</h4>
        <div className="chart-container">
          {data.attendanceData.map((day, index) => (
            <div key={index} className="day-bar">
              <div className="day-label">{day.day}</div>
              <div className="bar-stack">
                <div 
                  className="bar-segment present" 
                  style={{ height: `${(day.present / 150) * 100}%` }}
                  title={`출석: ${day.present}명`}
                ></div>
                <div 
                  className="bar-segment absent" 
                  style={{ height: `${(day.absent / 150) * 100}%` }}
                  title={`결석: ${day.absent}명`}
                ></div>
                <div 
                  className="bar-segment late" 
                  style={{ height: `${(day.late / 150) * 100}%` }}
                  title={`지각: ${day.late}명`}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="chart-legend">
          <div className="legend-item">
            <div className="legend-color present"></div>
            <span>출석</span>
          </div>
          <div className="legend-item">
            <div className="legend-color absent"></div>
            <span>결석</span>
          </div>
          <div className="legend-item">
            <div className="legend-color late"></div>
            <span>지각</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 