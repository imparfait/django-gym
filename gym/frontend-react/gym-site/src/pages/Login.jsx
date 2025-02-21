import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from '../services/authService';
import "../index.css";

const Login = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await login(username, password, setUser);
            if (response.access) {
                navigate("/");
            } else {
                setError("Invalid credentials");
            }
        } catch (error) {
            console.error("Login error:", error);
            setError("An error occurred during login");
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
