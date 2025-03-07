import { useState } from "react";
import "./CreateWorkout.css";
import { useNavigate } from "react-router-dom";


function CreateWorkout() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    start_time: "",
    instructor: "",
    day_of_week: "",
  });

  const daysOfWeek = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); 

    if (!token) {
        alert("You need to be logged in to create a workout.");
        return;
    }

    try {
      const response = await fetch("http://localhost:8000/workout/classes/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Workout added successfully!");
        setFormData({
          name: "",
          start_time: "",
          instructor: "",
          day_of_week: "",
        });
        navigate("/admin-workout"); 
      } else {
        alert("Failed to add workout.");
      }
    } catch (error) {
      console.error("Error adding workout:", error);
    }
  };

  return (
    <div className="form-container">
      <h1>Create Workout</h1>
      <form onSubmit={handleSubmit} className="workout-form">
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Start Time:
          <input type="time" name="start_time" value={formData.start_time} onChange={handleChange} required />
        </label>

        <label>
          Instructor:
          <input type="text" name="instructor" value={formData.instructor} onChange={handleChange} required />
        </label>

        <label>
          Day of Week:
          <select name="day_of_week" value={formData.day_of_week} onChange={handleChange}>
            {daysOfWeek.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </label>

        <button type="submit" className="btn-submit">Add Workout</button>
      </form>
    </div>
  );
}

export default CreateWorkout;
