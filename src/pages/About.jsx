import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Sparkles, Award, Users } from "lucide-react";
import { useCachedData } from "../hooks/useCachedData";

const timeline = [
  { year: "2018", text: "Established as a dedicated Naturopathy & Ayurvedic research institute under EDUCA VEDA." },
  { year: "2021", text: "Launched the WCNA (Wellness Consultancy of Naturopathy & Ayurveda) 18-month flagship diploma." },
  { year: "2024", text: "Published the official 10 Comic-Illustrated Study Manuals covering Clinical Intake to Practice Setup." },
  { year: "2026", text: "Empowering 10,000+ certified wellness coaches and over 20+ clinical partner centers across India." },
];

export default function About() {
  const stats = useCachedData("/stats", [
    { value: "18 Months", label: "Comprehensive Program" },
    { value: "10 Books", label: "Official Curriculum Books" },
    { value: "20+", label: "Clinical Case Studies" },
    { value: "100%", label: "Verified Certification" },
  ]);

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-950 text-white pt-16 pb-20 md:pt-24 md:pb-24 border-b border-emerald-900/40">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/30">
              🪔 GURUKUL HERITAGE
            </span>
            <h1 className="font-display text-white text-3xl sm:text-4xl md:text-5xl font-black mt-5 mb-5 leading-tight">
              Ancient Gurukul Wisdom Meets Modern Wellness Science
            </h1>
            <p className="font-body text-slate-300 text-sm md:text-base leading-relaxed">
              Powered by EDUCA VEDA, GURUKUL provides transformative education in Naturopathy, Ayurveda, and clinical wellness consulting.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, idx) => (
              <div key={idx} className="rounded-2xl p-6 bg-slate-900 border border-slate-800 shadow-lg">
                <p className="font-mono text-2xl md:text-3xl font-black text-emerald-400">{s.value}</p>
                <p className="font-body text-slate-400 text-xs md:text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <p className="font-mono text-xs font-bold tracking-wider mb-3 text-tealDark uppercase">
            OUR JOURNEY &amp; VALUES
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-black mb-12 text-charcoal">
            Building India's Leading Wellness Consultants
          </h2>
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="font-mono text-sm font-black w-16 flex-shrink-0 pt-1 text-emerald-600">
                  {t.year}
                </span>
                <p className="font-body text-sm md:text-base border-l-2 pl-6 border-emerald-500/30 text-charcoal leading-relaxed">
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-16 md:py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-black text-white">
            Begin Your Career in Wellness Today
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Get instant access to the 10 official WCNA study books and live faculty lectures.
          </p>
          <div>
            <Link
              to="/courses"
              className="font-body font-black px-8 py-3.5 rounded-full inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
            >
              Explore WCNA Curriculum <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
