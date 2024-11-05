// src/components/TravelPlanner/DailySchedule/DailySchedule.jsx
import React from 'react';
import './DailySchedule.css';

const formatTime = (timeString) => {
  // Convert decimal hours to hours and minutes
  const [hours, minutes] = timeString.split(':');
  const totalMinutes = parseInt(hours) * 60 + (parseInt(minutes) || 0);
  
  return new Date(2024, 0, 1, Math.floor(totalMinutes / 60), totalMinutes % 60)
    .toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: false 
    });
};

const calculateEndTime = (startTime, duration) => {
  const [hours, minutes] = startTime.split(':');
  const totalMinutes = parseInt(hours) * 60 + (parseInt(minutes) || 0);
  const durationMinutes = Math.floor(duration * 60);
  const endTotalMinutes = totalMinutes + durationMinutes;
  
  return new Date(2024, 0, 1, Math.floor(endTotalMinutes / 60), endTotalMinutes % 60)
    .toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: false 
    });
};

const DailySchedule = ({ day, date, schedule }) => {
  if (!schedule) return null;

  return (
    <div className="daily-schedule">
      <div className="schedule-header">
        <h2>Day {day}</h2>
        <span className="schedule-date">{date}</span>
      </div>
      
      <div className="schedule-timeline">
        {schedule.map((item, index) => {
          const startTime = formatTime(item.time);
          const endTime = calculateEndTime(item.time, item.duration);
          
          return (
            <div key={index} className="timeline-item">
              <div className="timeline-time">
                <div className="time-start">{startTime}</div>
                <div className="time-end">{endTime}</div>
              </div>
              <div className="timeline-content">
                <div className="timeline-activity">{item.activity}</div>
                <div className="timeline-duration">{item.duration} hours</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailySchedule;