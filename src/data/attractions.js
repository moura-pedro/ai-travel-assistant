// src/data/attractions.js
export const attractions = {
    'Paris': {
      activities: [
        { name: 'Eiffel Tower', duration: 3, category: 'landmark' },
        { name: 'Louvre Museum', duration: 4, category: 'museum' },
        { name: 'Notre-Dame Cathedral', duration: 2, category: 'landmark' },
        { name: 'Arc de Triomphe', duration: 1, category: 'landmark' },
        { name: 'Palace of Versailles', duration: 5, category: 'landmark' },
        { name: 'Seine River Cruise', duration: 2, category: 'entertainment' },
        { name: 'Montmartre', duration: 3, category: 'neighborhood' }
      ],
      restaurants: [
        'Le Chateaubriand',
        'L\'Arpège',
        'Le Baratin',
        'Bistrot Paul Bert'
      ]
    },
    'Tokyo': {
      activities: [
        { name: 'Senso-ji Temple', duration: 2, category: 'temple' },
        { name: 'Tokyo Skytree', duration: 2, category: 'landmark' },
        { name: 'Shibuya Crossing', duration: 1, category: 'landmark' },
        { name: 'Meiji Shrine', duration: 2, category: 'shrine' },
        { name: 'Tsukiji Outer Market', duration: 3, category: 'market' },
        { name: 'Akihabara', duration: 4, category: 'neighborhood' },
        { name: 'Ueno Park', duration: 3, category: 'park' }
      ],
      restaurants: [
        'Narisawa',
        'Sushi Saito',
        'Den',
        'Sukiyabashi Jiro'
      ]
    }
  };
  
  export const generateDailySchedule = (city, dayNumber, startTime = 9) => {
    const cityData = attractions[city];
    if (!cityData) return null;
  
    const { activities, restaurants } = cityData;
    const schedule = [];
    let currentTime = startTime;
  
    // Helper function to format time
    const formatScheduleTime = (time) => {
      const hours = Math.floor(time);
      const minutes = Math.round((time - hours) * 60);
      return `${hours}:${minutes.toString().padStart(2, '0')}`;
    };
  
    // Morning activity
    const morningActivity = activities[dayNumber % activities.length];
    schedule.push({
      time: formatScheduleTime(currentTime),
      activity: morningActivity.name,
      duration: morningActivity.duration
    });
    currentTime += morningActivity.duration;
  
    // Lunch
    schedule.push({
      time: formatScheduleTime(currentTime),
      activity: `Lunch at ${restaurants[dayNumber % restaurants.length]}`,
      duration: 1.5
    });
    currentTime += 1.5;
  
    // Afternoon activity
    const afternoonActivity = activities[(dayNumber + 1) % activities.length];
    schedule.push({
      time: formatScheduleTime(currentTime),
      activity: afternoonActivity.name,
      duration: afternoonActivity.duration
    });
    currentTime += afternoonActivity.duration;
  
    // Evening activity
    schedule.push({
      time: formatScheduleTime(currentTime),
      activity: `Dinner at ${restaurants[(dayNumber + 1) % restaurants.length]}`,
      duration: 2
    });
  
    return schedule;
  };