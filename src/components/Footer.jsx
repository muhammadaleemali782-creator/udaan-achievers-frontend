import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Smartphone } from "lucide-react";

export default function Footer({ contact }) {
  const c = contact || { phone: "+91 98765 43210", email: "admissions@udaanachievers.com", address: "Kareli, Prayagraj, Uttar Pradesh, India" };

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-black text-lg">U</div>
              <h2 className="font-bold text-slate-900 text-base">UDAAN ACHIEVERS</h2>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed">
              Redefining competitive examination prep through dimensional consistency, acoustic language training, and active mentorship. Your AIR is our mission.
            </p>
            <div className="space-y-2 text-xs font-semibold text-slate-700">
              <p className="flex items-center gap-2"><Phone size={14} className="text-cyan-600" /> {c.phone}</p>
              <p className="flex items-center gap-2"><Mail size={14} className="text-cyan-600" /> {c.email}</p>
              <p className="flex items-center gap-2"><MapPin size={14} className="text-cyan-600" /> {c.address}</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">PROGRAMS</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li><Link to="/courses?cat=JEE" className="hover:text-cyan-600">JEE Main & Adv</Link></li>
              <li><Link to="/courses?cat=NEET" className="hover:text-cyan-600">NEET UG Medical</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-600">Spoken English Studio</Link></li>
              <li><Link to="/courses?cat=Foundation" className="hover:text-cyan-600">Early Foundation (8–10)</Link></li>
              <li><Link to="/courses" className="hover:text-cyan-600">Ranker Dropper Batch</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">METHODOLOGY & CENTERS</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li><Link to="/#journey" className="hover:text-cyan-600">3D Learning Sandbox</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-600">24/7 Doubt Matrix</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-600">National Scholarship Test</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-600">Offline Smart Hubs</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-600">Careers for Mentors</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">DIGITAL ECOSYSTEM</h4>
            <p className="text-xs text-slate-500">Download the Udaan Achievers app on iOS and Android for live lecture access and analytics.</p>
            <Link to="/contact" className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-2">
              <Smartphone size={20} className="text-cyan-600" /> AVAILABLE ON <br /> iOS & Google Play
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Udaan Achievers. Built for Top Ranks & Confident Voices.</p>
          <div className="flex gap-6 font-medium">
            <Link to="/privacy" className="hover:text-slate-600">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-600">Terms of Admission</Link>
            <Link to="/refund" className="hover:text-slate-600">Refund Guarantee</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
