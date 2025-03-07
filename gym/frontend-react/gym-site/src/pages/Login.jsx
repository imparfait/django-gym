import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { login } from '../services/authService';
import "./Login.css";

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
            if (response && response.access) {
                localStorage.setItem("token", response.access);
                localStorage.setItem("refreshToken", response.refresh);
            
                const isAdmin = response.data?.userProfile?.is_admin;
            
                localStorage.setItem("isAdmin", isAdmin);
            
                console.log("Login successful!");
                console.log("User is admin:", isAdmin);
            
                navigate("/");
            }
             else {
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
                    <p>Don't have an account? <Link to="/register" className="register__btn">Register now</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
