import React from "react";
import { Link } from "react-router-dom";
import {
  Phone, Mail, MapPin, ShieldCheck, ArrowRight,
  ExternalLink, Award, CheckCircle2, MessageCircle
} from "lucide-react";

export default function LCCFooter() {
  return (
    <footer className="bg-white border-t border-slate-200/90 pt-16 pb-16 px-4 sm:px-6 lg:px-8 text-slate-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#0B3B95] text-white flex items-center justify-center font-black text-xl border-2 border-amber-400">
                EV
              </div>
              <div>
                <h3 className="font-black text-xl text-[#0B3B95] tracking-tight">
                  EDUCA VEDA (E.V.)
                </h3>
                <p className="text-xs text-slate-600 font-bold">
                  Premier Institute for Wellness &amp; Professional Financial Studies
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
              EDUCA VEDA provides career-transforming education in Naturopathy &amp; Ayurveda (WCNA) and Wealth Consultancy in Finance Management (WCFM), led by certified academicians and clinical specialists.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                ✓ WCNA Flagship Diploma
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                ✓ WCFM Corporate Finance
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                ✓ 99.2% Examination Rating
              </span>
            </div>
          </div>

          {/* Programs Offered */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#0B3B95] uppercase tracking-wider">
              Academic Programs
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/courses" className="hover:text-[#0B3B95] transition-colors">WCNA: Naturopathy &amp; Ayurveda</Link></li>
              <li><Link to="/courses" className="hover:text-[#0B3B95] transition-colors">WCFM: Wealth &amp; Finance</Link></li>
              <li><Link to="/#batches-section" className="hover:text-[#0B3B95] transition-colors">Morning Alpha Batch</Link></li>
              <li><Link to="/#batches-section" className="hover:text-[#0B3B95] transition-colors">Weekend Executive Master</Link></li>
              <li><Link to="/#syllabus-section" className="hover:text-[#0B3B95] transition-colors">Official Syllabus Blueprint</Link></li>
              <li><Link to="/#study-material-section" className="hover:text-[#0B3B95] transition-colors">Revision Notes &amp; Guides</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#0B3B95] uppercase tracking-wider">
              Admissions &amp; Portal
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/#about-section" className="hover:text-[#0B3B95] transition-colors">About Our Dean &amp; Faculty</Link></li>
              <li><Link to="/#admission-section" className="hover:text-[#0B3B95] transition-colors">Direct Admission Form</Link></li>
              <li><Link to="/#gallery-section" className="hover:text-[#0B3B95] transition-colors">Campus Life &amp; Labs</Link></li>
              <li><Link to="/contact" className="hover:text-[#0B3B95] transition-colors">Contact Counselling Desk</Link></li>
              <li className="pt-2">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0B3B95] hover:bg-[#082c71] text-white font-bold text-xs shadow-sm transition-all"
                >
                  <ShieldCheck size={14} className="text-amber-400" />
                  <span>Sign In to Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-3 text-xs">
            <h4 className="text-xs font-black text-[#0B3B95] uppercase tracking-wider">
              Institute Headquarters
            </h4>
            <p className="flex items-start gap-2 text-slate-600">
              <MapPin size={15} className="text-[#0B3B95] mt-0.5 flex-shrink-0" />
              <span>Near Institutional Hub, Knowledge Park III, Greater Delhi &amp; Varanasi Center, India</span>
            </p>
            <p className="flex items-center gap-2 text-slate-600">
              <Phone size={14} className="text-[#0B3B95] flex-shrink-0" />
              <span>+91 98765 43210</span>
            </p>
            <p className="flex items-center gap-2 text-slate-600">
              <Mail size={14} className="text-[#0B3B95] flex-shrink-0" />
              <span>admissions@educaveda.com</span>
            </p>
            <p className="text-[11px] text-slate-500 pt-1">
              Office Hours: Mon–Sat 9:00 AM – 6:30 PM
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} EDUCA VEDA (E.V.). All rights reserved.</p>
          <div className="flex gap-4 text-xs">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/courses" className="hover:underline">Courses</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/login" className="hover:underline text-[#0B3B95] font-bold">Portal Access</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
