import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useCachedData } from "./hooks/useCachedData";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Lecture from "./pages/Lecture";

export default function App() {
  const contact = useCachedData("/site-info", { phone: "", email: "", address: "" });
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // give the page a moment to render before scrolling to the section
      const id = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="font-body min-h-screen bg-paper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/lecture/:courseId" element={<Lecture />} />
      </Routes>
      <Footer contact={contact} />
    </div>
  );
}
