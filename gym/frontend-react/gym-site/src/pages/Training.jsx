import { useState, useEffect } from "react";
import axios from "axios";

function Training() {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/workout/classes/")
      .then(response => {
        setTrainings(response.data);
      })
      .catch(error => {
        console.error("Error fetching training data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Training Schedule</h1>
      <ul>
        {trainings.map(training => (
          <li key={training.id}>
            {training.name} - {training.start_time} to {training.end_time} on {training.day}, {training.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Training;

  