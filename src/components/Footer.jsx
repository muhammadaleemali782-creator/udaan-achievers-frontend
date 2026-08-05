import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Youtube, Instagram } from "lucide-react";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/login", label: "Login" },
];

export default function Footer({ contact }) {
  const c = contact || { phone: "+91 98765 43210", email: "hello@udaanachievers.in", address: "Civil Lines, Kanpur, Uttar Pradesh" };
  return (
    <footer className="bg-[#0F1830] pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center font-display font-semibold bg-saffron text-ink">U</div>
              <span className="font-display text-white text-lg">Udaan Achievers</span>
            </div>
            <p className="font-body text-white/50 text-sm">Structured coaching for JEE, NEET and board exams.</p>
          </div>
          <div>
            <p className="font-body text-white text-sm font-medium mb-3">Explore</p>
            {NAV_ITEMS.map((item) => (
              <Link key={item.to} to={item.to} className="font-body text-white/50 text-sm block mb-2">{item.label}</Link>
            ))}
          </div>
          <div>
            <p className="font-body text-white text-sm font-medium mb-3">Free Resources</p>
            <p className="font-body text-white/50 text-sm block mb-2">Class 10 Sample Papers</p>
            <p className="font-body text-white/50 text-sm block mb-2">JEE Previous Year Papers</p>
            <p className="font-body text-white/50 text-sm block mb-2">NEET Study Modules</p>
            <p className="font-body text-white/50 text-sm block">Free Study Material</p>
          </div>
          <div>
            <p className="font-body text-white text-sm font-medium mb-3">Contact</p>
            <p className="font-body text-white/50 text-sm mb-2 flex items-center gap-2"><Phone size={14} /> {c.phone}</p>
            <p className="font-body text-white/50 text-sm mb-2 flex items-center gap-2"><Mail size={14} /> {c.email}</p>
            <p className="font-body text-white/50 text-sm flex items-center gap-2"><MapPin size={14} /> {c.address}</p>
          </div>
          <div>
            <p className="font-body text-white text-sm font-medium mb-3">Follow</p>
            <div className="flex gap-3">
              <Youtube size={18} className="text-white/60" />
              <Instagram size={18} className="text-white/60" />
            </div>
          </div>
        </div>
        <div className="border-t border-[#26305A] pt-6">
          <p className="font-body text-white/40 text-xs text-center">© 2026 Udaan Achievers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
