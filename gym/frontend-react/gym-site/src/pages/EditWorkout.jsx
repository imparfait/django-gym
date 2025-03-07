import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CreateWorkout.css";

function EditWorkout() {
    const { id } = useParams(); // get the id from the URL
    const navigate = useNavigate();
    
    const [workout, setWorkout] = useState({
        name: "",
        start_time: "",
        instructor: "",
        day_of_week: ""
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
    
        if (!token) {
            console.log("You need to be logged in to edit a workout.");
            navigate("/login");
            return;
        }
    
        fetch(`http://localhost:8000/workout/classes/${id}/`, {
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        })
        .then(response => response.json())
        .then(data => setWorkout(data))
        .then(data => {
            console.log("Workout details:", data);
        })
        .catch(error => console.error("Error fetching workout:", error));
    }, [id, navigate]);
    


    const handleChange = (e) => {
        setWorkout({ ...workout, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token"); 

        if (!token) {
            console.log("You need to be logged in to create a workout.");
            navigate("/login");
            return;
        }
        
        const response = await fetch(`http://localhost:8000/workout/classes/${id}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(workout)
        });

        if (response.ok) {
            navigate("/admin-workout"); 
        } else {
            console.error("Error updating workout");
        }
    };

    return (
        <div className="form-container">
            <h1>Edit Workout</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={workout?.name} onChange={handleChange} required />

                <label>Start Time:</label>
                <input type="time" name="start_time" value={workout.start_time} onChange={handleChange} required />

                <label>Instructor:</label>
                <input type="text" name="instructor" value={workout.instructor} onChange={handleChange} required />

                <label>Day of Week:</label>
                <select name="day_of_week" value={workout.day_of_week} onChange={handleChange} required>
                    <option value="">Select a day</option>
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                        <option key={day} value={day}>{day}</option>
                    ))}
                </select>

                <button type="submit" className="btn-save">Save Changes</button>
            </form>
        </div>
    );
}

export default EditWorkout;
