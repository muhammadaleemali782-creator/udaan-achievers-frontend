import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="hidden md:block bg-slate-950 text-white border-t border-slate-800 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-xl">
                🪔
              </div>
              <div>
                <span className="font-display font-black text-2xl tracking-tight text-white">
                  GURUKUL
                </span>
                <p className="font-mono text-xs text-emerald-400 font-bold tracking-wider uppercase">
                  Powered by Educa Veda
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Official institute for WCNA (Wellness Consultancy of Naturopathy &amp; Ayurveda) education. Empowering students with 10 comic-illustrated curriculum books, clinical internships, and professional certification.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-bold">
                ✓ 18-Month WCNA Program
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-bold">
                ✓ 10 Study Manuals
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
              Curriculum &amp; Books
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/courses" className="hover:text-emerald-400 transition-colors">WCNA Master Course</Link></li>
              <li><Link to="/courses" className="hover:text-emerald-400 transition-colors">Book 1: Wellness Coaching</Link></li>
              <li><Link to="/courses" className="hover:text-emerald-400 transition-colors">Book 2: Naturopathy Basics</Link></li>
              <li><Link to="/courses" className="hover:text-emerald-400 transition-colors">Book 3: Ayurveda Basics</Link></li>
              <li><Link to="/courses" className="hover:text-emerald-400 transition-colors">Book 8: Managing Diseases</Link></li>
              <li><Link to="/courses" className="hover:text-emerald-400 transition-colors">Book 10: Client Communication</Link></li>
            </ul>
          </div>

          {/* Institutional Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
              Student Portals
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/login" className="hover:text-emerald-400 transition-colors">Student Login &amp; Signup</Link></li>
              <li><a href="https://messages-frontend-brown.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">EDUCA Mailbox Login ↗</a></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Faculty &amp; Mentors</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Admissions &amp; Support</Link></li>
              <li><Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 GURUKUL · Powered by EDUCA VEDA. All Rights Reserved.</p>
          <p className="font-mono text-[11px] text-emerald-500 font-semibold">
            Empower Yourself · Heal Others · Create Impact
          </p>
        </div>

      </div>
    </footer>
  );
}
