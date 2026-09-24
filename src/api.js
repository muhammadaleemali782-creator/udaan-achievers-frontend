import axios from "axios";

const RENDER_API_URL = "https://udaan-achievers-backend.onrender.com/api";
const API_URL = import.meta.env.VITE_API_URL || (typeof window !== "undefined" && window.location.hostname === "localhost" ? "http://localhost:5000/api" : RENDER_API_URL);

export const api = axios.create({ baseURL: API_URL });

export function adminHeaders() {
  const token = localStorage.getItem("admin_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export function studentHeaders() {
  const token = localStorage.getItem("student_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export default api;
