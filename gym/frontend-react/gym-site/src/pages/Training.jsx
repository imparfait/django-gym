import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Training.css"; 

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const timeSlots = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

function Training() {
  const [trainings, setTrainings] = useState([]);
  const [search, setSearch] = useState("");  

  useEffect(() => {
    fetchTrainings();
  }, [search]);  

  const fetchTrainings = () => {
    axios.get("http://localhost:8000/workout/classes/", {
      params: { search }
    })
    .then(response => {
      if (response.data.length === 0) {
        alert("No trainings found for your search.");
      }
      setTrainings(response.data);
    })
    .catch(error => {
      console.error("Error fetching training data:", error);
    });
  };

  return (
    <div className="schedule-container">
      <h1>TRAINING SCHEDULE</h1>

      <div className="filters">
        <input 
          type="text" 
          placeholder="Search by name or instructor..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>

      <table className="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            {daysOfWeek.map(day => <th key={day}>{day}</th>)}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map(time => (
            <tr key={time}>
              <td>{time}</td>
              {daysOfWeek.map(day => {
                const training = trainings.find(t => t.day_of_week === day && t.start_time.startsWith(time));
                return (
                  <td key={day}>
                    {training ? <span className="training"><strong>{training.name}</strong> <br />
                    <em>{training.instructor}</em> </span> : ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Training;
