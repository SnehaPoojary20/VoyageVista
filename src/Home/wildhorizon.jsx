import React, { useState } from "react";

const MoodSelector = ({ onMoodSelect }) => {
  const [selectedMood, setSelectedMood] = useState("Relaxing");

  const moods = [
    { name: "ZenScape", emoji: "🏖️", category: "Relaxing" },
    { name: "AdrenaQuest", emoji: "⛰️", category: "Adventure" },
    { name: "Elite Odyssey", emoji: "🏨", category: "Luxury" },
    { name: "SoulRoam  ", emoji: "🌅 ", category: "Temples, Monasteries, Heritage sites" },
    { name: "EcoVoyage", emoji: "🌿", category: "Rainforests, Eco-resorts, National Parks" },
    { name: "ArcticAura", emoji: "❄️", category: "Iceland, Antarctica, Northern Lights" },
    { name: "RetroRoutes", emoji: " 📻", category: "Historical towns, 90s-themed hotels" },
    { name: " EpicureanEscape", emoji: "🍽️", category: "Street food tours, Wine tastings, Culinary adventures" },
    { name: "PartyPulse", emoji: "🎉", category: "Ibiza, Goa, Las Vegas, Carnival in Brazil" },
    { name: " DigitalNomadQuest", emoji: "💻", category: "Best remote work-friendly cities" },
    { name: "StargazeHaven", emoji: "🌌", category: "Deserts, Astronomical observatories" },
    { name: "SeclusionSphere", emoji: "🏕️", category: "Budget" },
  ];

  const handleMoodChange = (mood) => {
    setSelectedMood(mood.name);
    onMoodSelect(mood.category); // Pass selected mood to parent component
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        🌍 Travel Mood: {selectedMood}
      </button>
      <ul className="dropdown-menu">
        {moods.map((mood) => (
          <li key={mood.name}>
            <button className="dropdown-item" onClick={() => handleMoodChange(mood)}>
              {mood.emoji} {mood.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoodSelector;
