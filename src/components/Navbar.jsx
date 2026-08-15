import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, ArrowUpRight, Menu, X, HelpCircle, Phone, Calculator } from "lucide-react";
import { useCachedData } from "../hooks/useCachedData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const site = useCachedData("/site-info", { phone: "" });
  const loggedIn = !!(localStorage.getItem("student_token") || localStorage.getItem("admin_token"));

  const goCourses = () => { setOpen(false); navigate("/courses"); };

  return (
    <>
      {/* FLOATING NAVBAR (DESKTOP) */}
      <header className="fixed top-4 left-0 right-0 z-50 px-4 hidden lg:block">
        <div className="max-w-6xl mx-auto glass-nav rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-slate-200/50">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-cyan-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-md shadow-cyan-500/30">
              U
            </div>
            <div>
              <h1 className="font-extrabold text-slate-900 leading-none tracking-tight text-lg">UDAAN <span className="text-xs text-cyan-600 font-semibold uppercase tracking-wider block">ACHIEVERS</span></h1>
              <p className="text-[10px] text-slate-400 font-medium">3D LEARNING UNIVERSE</p>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="flex items-center gap-6 text-sm font-semibold text-slate-600">
            <Link to="/#hero" className="hover:text-cyan-600 transition-colors">Why Udaan</Link>
            <Link to="/#journey" className="hover:text-cyan-600 transition-colors">3D Journey</Link>
            <Link to="/courses" className="hover:text-cyan-600 transition-colors">Programs</Link>
            <Link to="/#english" className="hover:text-cyan-600 transition-colors flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              English 3D Lab
            </Link>
            <Link to="/login" className="hover:text-cyan-600 transition-colors">Student Command</Link>
            <Link to="/#reviews" className="hover:text-cyan-600 transition-colors">Hall of Fame</Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link to="/login" className="text-xs font-bold text-slate-700 hover:text-cyan-600 px-3 py-2 flex items-center gap-1">
              <User size={16} /> {loggedIn ? "My Account" : "Portal Login"}
            </Link>
            <Link to="/courses" className="bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-md shadow-cyan-500/30 transition-all flex items-center gap-1">
              Explore Admissions <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      {/* FLOATING NAVBAR (MOBILE) */}
      <header className="fixed top-3 left-3 right-3 z-50 lg:hidden">
        <div className="glass-nav rounded-2xl px-4 py-3 flex items-center justify-between shadow-md">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-black text-lg">
              U
            </div>
            <div>
              <h1 className="font-bold text-slate-900 text-sm leading-none">UDAAN <span className="text-[9px] text-cyan-600">ACHIEVERS</span></h1>
              <p className="text-[9px] text-slate-400">3D LEARNING UNIVERSE</p>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/courses" className="bg-cyan-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">Admissions</Link>
            <button
              className="p-1.5 text-slate-700 bg-slate-100 rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 glass-nav rounded-2xl p-4 shadow-xl flex flex-col gap-3 text-sm font-semibold text-slate-700 animate-fadeIn">
            <Link to="/#hero" onClick={() => setOpen(false)} className="py-2 border-b border-slate-100">Why Udaan</Link>
            <Link to="/#journey" onClick={() => setOpen(false)} className="py-2 border-b border-slate-100">3D Journey</Link>
            <button onClick={goCourses} className="py-2 border-b border-slate-100 text-left">Programs</button>
            <Link to="/#english" onClick={() => setOpen(false)} className="py-2 border-b border-slate-100 text-cyan-600">English 3D Lab</Link>
            <Link to="/login" onClick={() => setOpen(false)} className="py-2 border-b border-slate-100">
              {loggedIn ? "My Account" : "Student Command"}
            </Link>
            <Link to="/#reviews" onClick={() => setOpen(false)} className="py-2">Hall of Fame</Link>
          </div>
        )}
      </header>

      {/* RIGHT FLOATING ACTION BAR (DESKTOP) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3">
        <Link to="/contact" className="w-10 h-10 bg-white shadow-lg border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 hover:text-cyan-600 hover:scale-105 transition-all" title="Help">
          <HelpCircle size={20} />
        </Link>
        <a href={site?.phone ? `tel:${site.phone.replace(/\s/g, "")}` : "/contact"} className="w-10 h-10 bg-white shadow-lg border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 hover:text-cyan-600 hover:scale-105 transition-all" title="Call">
          <Phone size={20} />
        </a>
        <Link to="/courses" className="w-10 h-10 bg-cyan-500 text-white shadow-lg shadow-cyan-500/30 rounded-xl flex items-center justify-center hover:scale-105 transition-all" title="Explore courses">
          <Calculator size={20} />
        </Link>
      </div>
    </>
  );
}
