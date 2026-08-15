import React from "react";
import { Link } from "react-router-dom";

export default function Footer({ contact }) {
  const c = contact || { phone: "", email: "", address: "" };

  return (
    <footer className="bg-white pt-32 pb-16 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-10">
              <div className="w-10 h-10 bg-brand-navy rounded-xl flex items-center justify-center">
                <i className="fa-solid fa-plane-up text-white text-sm"></i>
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase italic">Udaan</span>
            </Link>
            <p className="text-brand-slate text-lg max-w-md leading-relaxed mb-6">Redefining competitive exam prep through discipline, data, and daily consistency. Your AIR is our mission.</p>
            {(c.phone || c.email || c.address) && (
              <div className="text-brand-slate text-sm space-y-1 mb-10">
                {c.phone && <p><i className="fa-solid fa-phone mr-2 text-brand-teal"></i>{c.phone}</p>}
                {c.email && <p><i className="fa-solid fa-envelope mr-2 text-brand-teal"></i>{c.email}</p>}
                {c.address && <p><i className="fa-solid fa-location-dot mr-2 text-brand-teal"></i>{c.address}</p>}
              </div>
            )}
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 rounded-2xl border border-brand-border flex items-center justify-center text-brand-navy hover:text-brand-teal hover:border-brand-teal transition-all">
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl border border-brand-border flex items-center justify-center text-brand-navy hover:text-brand-teal hover:border-brand-teal transition-all">
                <i className="fa-brands fa-twitter text-xl"></i>
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl border border-brand-border flex items-center justify-center text-brand-navy hover:text-brand-teal hover:border-brand-teal transition-all">
                <i className="fa-brands fa-youtube text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black tracking-[0.3em] text-brand-navy uppercase mb-10">The Programs</h4>
            <ul className="space-y-4 font-bold text-sm text-brand-slate">
              <li><Link to="/courses?cat=JEE" className="hover:text-brand-teal transition-colors">JEE Main & Adv</Link></li>
              <li><Link to="/courses?cat=NEET" className="hover:text-brand-teal transition-colors">NEET UG Specialist</Link></li>
              <li><Link to="/courses?cat=Foundation" className="hover:text-brand-teal transition-colors">Early Foundation</Link></li>
              <li><Link to="/courses" className="hover:text-brand-teal transition-colors">Ranker Batch (Drop)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black tracking-[0.3em] text-brand-navy uppercase mb-10">Company</h4>
            <ul className="space-y-4 font-bold text-sm text-brand-slate">
              <li><Link to="/#results" className="hover:text-brand-teal transition-colors">Our Results</Link></li>
              <li><Link to="/#centres" className="hover:text-brand-teal transition-colors">Offline Hubs</Link></li>
              <li><Link to="/contact" className="hover:text-brand-teal transition-colors">Mentorship</Link></li>
              <li><Link to="/contact" className="hover:text-brand-teal transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black tracking-[0.3em] text-brand-navy uppercase mb-10">Resources</h4>
            <ul className="space-y-4 font-bold text-sm text-brand-slate">
              <li><Link to="/contact" className="hover:text-brand-teal transition-colors">Student Help</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-teal transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund" className="hover:text-brand-teal transition-colors">Refund Policy</Link></li>
              <li><Link to="/terms" className="hover:text-brand-teal transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-brand-border flex flex-col md:flex-row justify-between items-center text-[10px] font-black tracking-[0.2em] text-brand-slate uppercase">
          <p>© 2026 Udaan Achievers. Built for Top Ranks.</p>
          <div className="flex space-x-8 mt-8 md:mt-0">
            <span>Udaan Educational Labs</span>
            <span>India's Rank Factory</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
