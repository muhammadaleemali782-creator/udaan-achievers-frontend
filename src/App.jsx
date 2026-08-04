import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import api from "./api";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Lecture from "./pages/Lecture";
import Admin from "./pages/Admin";

export default function App() {
  const [contact, setContact] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  useEffect(() => { api.get("/site-info").then((r) => setContact(r.data)).catch(() => {}); }, []);

  return (
    <div className="font-body min-h-screen bg-paper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lecture/:courseId" element={<Lecture />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer contact={contact} />
    </div>
  );
}
