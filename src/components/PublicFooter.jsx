import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight } from "lucide-react";

export default function PublicFooter() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-white font-bold text-lg">
                EV
              </div>
              <div>
                <span className="font-bold text-lg text-white tracking-tight">EDUCA VEDA</span>
                <p className="text-[11px] text-slate-400">Institute of Professional &amp; Wellness Studies</p>
              </div>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Empowering individuals with career-focused certifications in Naturopathy, Ayurveda, and Wealth Management. Combining clinical wisdom and corporate financial advisory.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800 text-[11px] font-medium">
                ✓ WCNA Certified Program
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800 text-[11px] font-medium">
                ✓ WCFM Certified Program
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800 text-[11px] font-medium">
                ✓ Verified Certification
              </span>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-white uppercase tracking-wider">Programs Offered</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">
                  WCNA [Naturopathy &amp; Ayurveda]
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">
                  WCFM [Wealth &amp; Finance Management]
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">
                  Morning &amp; Weekend Batches
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">
                  Clinical Case Studies &amp; Internship
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & ERP */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-white uppercase tracking-wider">Administration &amp; Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-slate-500" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={13} className="text-slate-500" />
                <span>admissions@educaveda.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={13} className="text-slate-500" />
                <span>Knowledge Park, New Delhi, India</span>
              </li>
              <li className="pt-2">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-semibold border border-slate-700 transition-all"
                >
                  <ShieldCheck size={13} className="text-indigo-400" />
                  <span>Staff / ERP Portal Login</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} EDUCA VEDA. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-slate-400">About Institute</Link>
            <Link to="/contact" className="hover:text-slate-400">Admissions</Link>
            <Link to="/login" className="hover:text-slate-400">ERP Access</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
