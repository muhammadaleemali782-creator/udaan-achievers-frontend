import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, UserCircle, ChevronDown } from "lucide-react";

const COURSE_LINKS = [
  { to: "/courses", label: "All Courses" },
  { to: "/courses?cat=JEE", label: "JEE" },
  { to: "/courses?cat=NEET", label: "NEET" },
  { to: "/courses?cat=Foundation", label: "Foundation (Class 6-10)" },
];

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/#centres", label: "Study Centres" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const { pathname } = useLocation();
  const loggedIn = !!(localStorage.getItem("student_token") || localStorage.getItem("admin_token"));
  const dropdownRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setCoursesOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <header className="bg-ink sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <div className="w-9 h-9 rounded-full flex items-center justify-center font-display font-semibold text-lg bg-saffron text-ink">U</div>
          <span className="font-display text-white text-xl tracking-tight">Udaan Achievers</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          <Link to="/" className={`font-body text-sm tracking-wide ${pathname === "/" ? "text-saffron" : "text-[#D8D9E0]"}`}>Home</Link>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setCoursesOpen(!coursesOpen)}
              className={`font-body text-sm tracking-wide flex items-center gap-1 ${pathname === "/courses" ? "text-saffron" : "text-[#D8D9E0]"}`}
            >
              Courses <ChevronDown size={14} className={`transition-transform ${coursesOpen ? "rotate-180" : ""}`} />
            </button>
            {coursesOpen && (
              <div className="absolute top-full left-0 mt-3 w-56 rounded-xl overflow-hidden bg-white shadow-lg border border-paperDark py-1">
                {COURSE_LINKS.map((c) => (
                  <Link key={c.label} to={c.to} onClick={() => setCoursesOpen(false)} className="block font-body text-sm px-4 py-2.5 text-charcoal hover:bg-paper">
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className={`font-body text-sm tracking-wide ${pathname === "/about" ? "text-saffron" : "text-[#D8D9E0]"}`}>About</Link>
          <Link to="/#centres" className="font-body text-sm tracking-wide text-[#D8D9E0]">Study Centres</Link>
          <Link to="/contact" className={`font-body text-sm tracking-wide ${pathname === "/contact" ? "text-saffron" : "text-[#D8D9E0]"}`}>Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="font-body text-sm font-medium px-5 py-2 rounded-full flex items-center gap-2 bg-saffron text-ink">
            <UserCircle size={16} /> {loggedIn ? "My Account" : "Login"}
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-1 bg-ink">
          <Link to="/" onClick={() => setOpen(false)} className="font-body text-left py-3 border-b border-[#2A3557] text-sm text-[#D8D9E0]">Home</Link>
          <p className="font-mono text-[10px] tracking-wider text-white/40 pt-3 pb-1">COURSES</p>
          {COURSE_LINKS.map((c) => (
            <Link key={c.label} to={c.to} onClick={() => setOpen(false)} className="font-body text-left py-2 pl-3 border-b border-[#2A3557] text-sm text-[#D8D9E0]">
              {c.label}
            </Link>
          ))}
          {NAV_ITEMS.filter((i) => i.to !== "/").map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="font-body text-left py-3 border-b border-[#2A3557] text-sm text-[#D8D9E0]">
              {item.label}
            </Link>
          ))}
          <Link to="/login" onClick={() => setOpen(false)} className="font-body text-left py-3 text-sm text-saffron">
            {loggedIn ? "My Account" : "Login"}
          </Link>
        </div>
      )}
    </header>
  );
}
