import React from 'react';

export const ScheduleData = ({ data }) => {
  if (!data) return null;

  const getEventIcon = (type) => {
    switch (type) {
      case 'routine': return '📅';
      case 'meeting': return '👥';
      case 'activity': return '🎯';
      case 'exam': return '📝';
      case 'counseling': return '💬';
      case 'work': return '📚';
      default: return '📋';
    }
  };

  const getEventColor = (type) => {
    switch (type) {
      case 'routine': return '#4facfe';
      case 'meeting': return '#f093fb';
      case 'activity': return '#43e97b';
      case 'exam': return '#fa709a';
      case 'counseling': return '#a8edea';
      case 'work': return '#ffecd2';
      default: return '#667eea';
    }
  };

  return (
    <div className="visualization-content">
      <h3>일정 관리</h3>
      
      {/* 현재 주차 */}
      <div className="week-header">
        <h4>{data.currentWeek}</h4>
      </div>

      {/* 이번 주 일정 */}
      <div className="weekly-schedule">
        <h4>이번 주 일정</h4>
        <div className="schedule-grid">
          {data.events.map((day, index) => (
            <div key={index} className="day-schedule">
              <div className="day-header">
                <div className="day-name">{day.day}</div>
                <div className="day-date">{day.date}</div>
              </div>
              <div className="day-events">
                {day.events.map((event, eventIndex) => (
                  <div 
                    key={eventIndex} 
                    className="event-item"
                    style={{ borderLeftColor: getEventColor(event.type) }}
                  >
                    <div className="event-icon">{getEventIcon(event.type)}</div>
                    <div className="event-content">
                      <div className="event-time">{event.time}</div>
                      <div className="event-title">{event.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 예정된 이벤트 */}
      <div className="upcoming-events">
        <h4>예정된 이벤트</h4>
        <div className="event-list">
          {data.upcomingEvents.map((event, index) => (
            <div 
              key={index} 
              className="upcoming-event"
              style={{ borderLeftColor: getEventColor(event.type) }}
            >
              <div className="event-icon">{getEventIcon(event.type)}</div>
              <div className="event-info">
                <div className="event-title">{event.title}</div>
                <div className="event-date">{event.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 