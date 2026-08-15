import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const loggedIn = !!(localStorage.getItem("student_token") || localStorage.getItem("admin_token"));

  const goCourses = () => { setOpen(false); navigate("/courses"); };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] border-b border-brand-border glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 bg-brand-navy rounded-xl flex items-center justify-center group-hover:bg-brand-teal transition-all duration-500 transform group-hover:rotate-6">
              <i className="fa-solid fa-plane-up text-white text-lg"></i>
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic">Udaan</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/#features" className="nav-item">Why Udaan</Link>
            <Link to="/#results" className="nav-item">Success Stories</Link>
            <Link to="/#centres" className="nav-item">Centres</Link>
            <button onClick={goCourses} className="nav-item">Courses</button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="hidden sm:inline-flex text-sm font-bold text-brand-navy hover:text-brand-teal transition-colors">
              {loggedIn ? "My Account" : "Portal Login"}
            </Link>
            <Link to="/login" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-full text-white bg-brand-navy hover:bg-brand-teal hover:scale-105 transition-all duration-300 shadow-xl shadow-brand-navy/10">
              Join Today
            </Link>
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-brand-navy" onClick={() => setOpen(!open)} aria-label="Menu">
              <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars-staggered"} text-xl`}></i>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-6 flex flex-col space-y-1">
            <Link to="/#features" onClick={() => setOpen(false)} className="py-3 border-b border-brand-border text-sm font-medium">Why Udaan</Link>
            <Link to="/#results" onClick={() => setOpen(false)} className="py-3 border-b border-brand-border text-sm font-medium">Success Stories</Link>
            <Link to="/#centres" onClick={() => setOpen(false)} className="py-3 border-b border-brand-border text-sm font-medium">Centres</Link>
            <button onClick={goCourses} className="py-3 border-b border-brand-border text-sm font-medium text-left">Courses</button>
            <Link to="/login" onClick={() => setOpen(false)} className="py-3 text-sm font-bold text-brand-teal">
              {loggedIn ? "My Account" : "Portal Login"}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
