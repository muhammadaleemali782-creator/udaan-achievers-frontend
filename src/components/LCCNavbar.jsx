import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone, MessageCircle, Menu, X, ShieldCheck, UserCheck,
  ChevronDown, ArrowRight, BookOpen, Sparkles
} from "lucide-react";

export default function LCCNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const authUser = JSON.parse(localStorage.getItem("erp_user") || "null");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about-section" },
    { name: "Courses", path: "/courses" },
    { name: "Batches", path: "/#batches-section" },
    { name: "Syllabus", path: "/#syllabus-section" },
    { name: "Lectures", path: "/#videos-section" },
    { name: "Revision", path: "/#study-material-section" },
    { name: "Gallery", path: "/#gallery-section" },
    { name: "Admission", path: "/#admission-section" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    if (path.startsWith("/#")) {
      const el = document.getElementById(path.replace("/#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* 1. Top Notice Bar */}
      <div className="bg-[#FFB800] text-slate-900 py-1.5 px-3 sm:px-6 text-xs font-semibold flex items-center justify-between border-b border-amber-400">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded font-black tracking-wide">
            NEW
          </span>
          <span className="truncate">
            Admissions Open for Session 2026–2027 • Regular &amp; Weekend Batches
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-xs font-bold flex-shrink-0">
          <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-slate-800">
            <Phone size={13} />
            <span>+91 98765 43210</span>
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white px-2.5 py-0.5 rounded-full text-[11px] transition-colors"
          >
            <MessageCircle size={12} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* 2. Main Institution Header */}
      <div className="bg-white border-b border-slate-200 py-3 sm:py-4 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0B3B95] text-white flex items-center justify-center font-black text-xl shadow-md border-2 border-amber-400 flex-shrink-0">
              EV
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-black text-lg sm:text-2xl text-[#0B3B95] tracking-tight leading-none">
                  Educa Institute of Consultancy
                </h1>
              </div>
              <p className="font-bold text-xs sm:text-sm text-slate-800 mt-0.5">
                एडुका इंस्टीट्यूट ऑफ कंसल्टेंसी • वाराणसी एवं नई दिल्ली
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 hidden sm:block">
                A Premier Institute for Naturopathy, Ayurveda (WCNA) &amp; Wealth Management (WCFM)
              </p>
            </div>
          </Link>

          {/* Right Action / Portal Login Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {authUser ? (
              <Link
                to="/dashboard"
                className="bg-[#0B3B95] hover:bg-[#082a6d] text-white text-xs sm:text-sm font-bold px-4 py-2 sm:py-2.5 rounded-lg shadow-sm flex items-center gap-1.5 transition-all"
              >
                <UserCheck size={16} className="text-amber-400" />
                <span>Dashboard</span>
                <ArrowRight size={14} />
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-[#FFB800] hover:bg-[#f0ad00] text-slate-900 text-xs sm:text-sm font-black px-4 py-2 sm:py-2.5 rounded-lg shadow-sm border border-amber-500 flex items-center gap-1.5 transition-all"
              >
                <ShieldCheck size={16} className="text-slate-900" />
                <span>Portal Login</span>
              </Link>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Sticky Primary Navigation Bar (Royal Blue #0B3B95) */}
      <header className="sticky top-0 z-40 bg-[#0B3B95] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 text-xs font-bold tracking-wide uppercase">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="px-3.5 py-1.5 rounded hover:bg-white/15 hover:text-amber-300 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Helpline on right */}
            <div className="hidden lg:flex items-center gap-3 text-xs">
              <span className="text-white/80">Admissions Helpline:</span>
              <span className="font-bold text-amber-300 font-mono">+91 98765 43210</span>
            </div>

            {/* Mobile Header Title in Navbar */}
            <div className="lg:hidden flex items-center justify-between w-full text-xs font-bold">
              <span className="text-amber-300">EXPLORE PROGRAMS &amp; ADMISSIONS</span>
              <Link to="/login" className="text-white underline hover:text-amber-300 text-[11px]">
                {authUser ? "Dashboard →" : "Portal Login →"}
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#072a6b] border-t border-white/10 px-4 py-3 space-y-1 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className="block px-3 py-2 rounded text-xs font-bold uppercase hover:bg-white/10 hover:text-amber-300"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/15 mt-2">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded bg-[#FFB800] text-slate-900 font-black text-xs"
              >
                <ShieldCheck size={14} />
                <span>{authUser ? "Open Dashboard" : "Sign In to Portal"}</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
