import axios from 'axios';

const API_URL = "http://localhost:8000/";

export const register = async (username, email, password) => {
    const response = await axios.post(`${API_URL}register/`, {
      username,
      email,
      password,
    });
    return response.data;
  };
export const login = async (username, password, setUser) => {
  try {
    const response = await axios.post(`${API_URL}login/`, { username, password });
    if (response.data.access) {
        localStorage.setItem("token", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);
        setUser(getCurrentUser());
    }
    return response.data;
  } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      throw error;
  }
};
export const logout = (setUser) => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setUser(null);
};
export const getCurrentUser = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
      const payload = JSON.parse(atob(token.split(".")[1])); 
      return payload.username;
  } catch (error) {
      console.error("Invalid token:", error);
      return null;
  }
};