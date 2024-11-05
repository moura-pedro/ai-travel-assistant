// src/components/TravelPlanner/ItineraryForm/ItineraryForm.jsx
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import DailySchedule from '../DailySchedule/DailySchedule';
import { generateDailySchedule } from '../../../data/attractions';
import './ItineraryForm.css';

const ItineraryForm = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [itinerary, setItinerary] = useState(null);

  const generateItinerary = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

    const dailySchedules = Array.from({ length: days }, (_, index) => {
      const date = new Date(start);
      date.setDate(date.getDate() + index);
      
      return {
        day: index + 1,
        date: date.toLocaleDateString(),
        schedule: generateDailySchedule(destination, index)
      };
    });

    setItinerary(dailySchedules);
  };

  return (
    <div className="itinerary-form">
      <div className="form-container">
        <div className="input-group">
          <label htmlFor="destination">Destination</label>
          <input
            id="destination"
            type="text"
            placeholder="Enter city (e.g., Paris, Tokyo)"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        <div className="dates-group">
          <div className="input-group">
            <label htmlFor="start-date">Start Date</label>
            <input
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="end-date">End Date</label>
            <input
              id="end-date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        <button 
          className="generate-button"
          onClick={generateItinerary}
          disabled={!destination || !startDate || !endDate}
        >
          <Calendar className="button-icon" />
          Generate Itinerary
        </button>
      </div>

      {itinerary && (
        <div className="itinerary-results">
          {itinerary.map((day) => (
            <DailySchedule
              key={day.day}
              day={day.day}
              date={day.date}
              schedule={day.schedule}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItineraryForm;