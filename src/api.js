import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

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
