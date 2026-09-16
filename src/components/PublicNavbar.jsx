import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ShieldCheck, LogOut, User } from "lucide-react";

export default function PublicNavbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const authUser = JSON.parse(localStorage.getItem("erp_user") || "null");

  const links = [
    { name: "Home", path: "/" },
    { name: "Courses & Programs", path: "/courses" },
    { name: "About Institute", path: "/about" },
    { name: "Contact & Admissions", path: "/contact" },
  ];

  const isActive = (p) => location.pathname === p;

  const handleLogout = () => {
    localStorage.removeItem("erp_user");
    window.location.href = "/";
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black text-xl shadow-md group-hover:bg-indigo-600 transition-colors">
              EV
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg md:text-xl text-slate-900 tracking-tight">
                  Educa Institute of Consultancy
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200">
                  INSTITUTE
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                Professional &amp; Wellness Studies
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action / Login Button */}
          <div className="hidden md:flex items-center gap-3">
            {authUser ? (
              <div className="flex items-center gap-2">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-all"
                >
                  <User size={13} />
                  <span>Institute Dashboard</span>
                  <ArrowRight size={13} />
                </Link>
                <button
                  onClick={handleLogout}
                  title="Logout"
                  className="p-2 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 transition-colors"
                >
                  <LogOut size={15} />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-all"
              >
                <ShieldCheck size={14} className="text-indigo-400" />
                <span>Portal Login</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Toggle Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-2">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                isActive(link.path)
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-100">
            {authUser ? (
              <div className="space-y-2">
                <Link
                  to="/dashboard"
                  onClick={() => setOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-semibold shadow-sm"
                >
                  <span>Enter Institute Dashboard</span>
                  <ArrowRight size={15} />
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-slate-200 text-rose-600 text-sm font-semibold"
                >
                  <LogOut size={15} />
                  <span>Log Out</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-semibold shadow-sm"
              >
                <ShieldCheck size={15} className="text-indigo-400" />
                <span>Portal Login</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
