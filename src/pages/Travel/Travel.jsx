// src/pages/Travel/Travel.jsx
import React from 'react';
import TravelPlanner from '../../components/TravelPlanner/ItineraryForm/ItineraryForm';
import './Travel.css';

const Travel = () => {
  return (
    <div className="travel-page">
      <h1 className="travel-title">AI Travel Planner</h1>
      <p className="travel-description">
        Plan your perfect trip with our AI-powered itinerary generator
      </p>
      <TravelPlanner />
    </div>
  );
};

export default Travel;