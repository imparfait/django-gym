import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./AdminWorkout.css";

function AdminPage() {
  const [trainings, setTrainings] = useState([]);
  const navigate = useNavigate(); // function to navigate to another page

  const fetchTrainings = () => {

    axios.get("http://localhost:8000/workout/classes/")
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

  useEffect(() => {
      fetchTrainings();
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this training?")) {
      return;
    }

    axios
      .delete(`http://localhost:8000/workout/classes/${id}/`)
      .then(() => {
        setTrainings(trainings.filter((training) => training.id !== id));
        navigate(`/admin-workout`); // redirect to the same page to refresh the data
      })
      .catch((error) => console.error("Error deleting training:", error));
  };


    return (
        <>
        <h1 className="manage-workout">Manage Workouts</h1>
        <Link to="/admin-workout/add" className="btn-create">Add Workout</Link>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Day</th>
                    <th>Start Time</th>
                    <th>Instructor</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {trainings.map((training, index) => (
                    <tr key={index}>
                        <td>{training.name}</td>
                        <td>{training.day_of_week}</td>
                        <td>{training.start_time}</td>
                        <td>{training.instructor}</td>
                        <td>
                            <Link to={`/admin-workout/edit/${training.id}`}>
                              <i class="ri-edit-line"></i>
                            </Link>
                          </td>
                        <td>
                          <button onClick={() => handleDelete(training.id)}>
                            <i class="ri-delete-bin-line"></i>
                          </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
  
}

export default AdminPage;
