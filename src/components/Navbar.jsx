import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen, Sparkles, User, ExternalLink } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "WCNA Curriculum & Books", path: "/courses" },
    { name: "Live Batches", path: "/#live-batches" },
    { name: "About Gurukul", path: "/about" },
    { name: "Contact & Admissions", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path.startsWith("/#")) return false;
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-paperDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-tr from-slate-950 via-slate-900 to-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-md group-hover:scale-105 transition-transform">
              <span className="text-xl">🪔</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-xl md:text-2xl text-charcoal tracking-tight">
                  GURUKUL
                </span>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  WCNA
                </span>
              </div>
              <p className="font-mono text-[10px] text-tealDark font-bold tracking-wider uppercase">
                Powered by Educa Veda
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-body text-xs font-semibold px-3.5 py-2 rounded-full transition-all ${
                  isActive(link.path)
                    ? "bg-ink text-white shadow-sm"
                    : "text-muted hover:text-charcoal hover:bg-slate-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Portal Links */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://messages-frontend-brown.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs font-semibold flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-all"
            >
              <span>📬 EDUCA Mail</span>
              <ExternalLink size={11} className="opacity-60" />
            </a>

            <Link
              to="/login"
              className="font-body text-xs font-extrabold flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-white hover:bg-slate-800 shadow-md transition-all"
            >
              <User size={13} />
              <span>Student Portal</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 text-charcoal hover:bg-slate-200"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-white border-b border-paperDark px-4 py-6 space-y-3 animate-fadeIn">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block font-body text-sm font-semibold px-4 py-2.5 rounded-xl ${
                isActive(link.path)
                  ? "bg-ink text-white"
                  : "text-muted hover:bg-slate-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-paperDark flex flex-col gap-2">
            <a
              href="https://messages-frontend-brown.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs font-semibold flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 text-slate-800"
            >
              <span>📬 Open EDUCA Mailbox</span>
              <ExternalLink size={12} />
            </a>
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="font-body text-xs font-bold flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-ink text-white text-center"
            >
              <User size={14} />
              <span>Student Login / Signup</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
