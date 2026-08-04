import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShieldCheck } from "lucide-react";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="bg-ink sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <div className="w-9 h-9 rounded-full flex items-center justify-center font-display font-semibold text-lg bg-saffron text-ink">U</div>
          <span className="font-display text-white text-xl tracking-tight">Udaan Achievers</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <Link key={item.to} to={item.to} className={`font-body text-sm tracking-wide ${pathname === item.to ? "text-saffron" : "text-[#D8D9E0]"}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/admin" className="font-body text-xs flex items-center gap-1 px-3 py-2 rounded-full border border-white/20 text-white/70">
            <ShieldCheck size={14} /> Admin
          </Link>
          <Link to="/dashboard" className="font-body text-sm font-medium px-5 py-2 rounded-full bg-saffron text-ink">
            My Dashboard
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-1 bg-ink">
          {[...NAV_ITEMS, { to: "/admin", label: "Admin panel" }].map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className={`font-body text-left py-3 border-b border-[#2A3557] text-sm ${pathname === item.to ? "text-saffron" : "text-[#D8D9E0]"}`}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
