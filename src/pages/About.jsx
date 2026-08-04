import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import api from "../api";

const timeline = [
  { year: "2016", text: "Started as a single physics classroom in Kanpur with 30 students." },
  { year: "2019", text: "Crossed 50,000 students across live-streamed batches for JEE and NEET." },
  { year: "2022", text: "Launched the weekly All-India test series now used by 8 lakh students." },
  { year: "2026", text: "2.4 lakh active students and 1,200+ selections in the top 1000 ranks." },
];

export default function About() {
  const [stats, setStats] = useState([]);
  useEffect(() => { api.get("/stats").then((r) => setStats(r.data)).catch(() => {}); }, []);

  return (
    <>
      <section className="bg-ink pt-14 pb-16 md:pt-20 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="font-mono text-xs font-medium px-2 py-1 rounded bg-saffron/10 text-saffron">Our story</span>
            <h1 className="font-display text-white text-4xl md:text-5xl mt-5 mb-5">Built by teachers who kept a timetable of their own</h1>
            <p className="font-body text-white/70">Most students don't fail from a lack of ability — they fail from a lack of structure.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s._id} className="rounded-xl p-5 bg-[#1B2747] border border-[#2A3557]">
                <p className="font-mono text-2xl md:text-3xl text-saffron">{s.value}</p>
                <p className="font-body text-white/60 text-xs md:text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <p className="font-mono text-xs tracking-wider mb-3 text-tealDark">TIMELINE</p>
          <h2 className="font-display text-3xl md:text-4xl mb-12 text-charcoal">A decade of showing up</h2>
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6">
                <span className="font-mono text-sm w-16 flex-shrink-0 pt-1 text-saffronDark">{t.year}</span>
                <p className="font-body text-sm md:text-base border-l pl-6 border-paperDark text-charcoal">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ink py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Your first class is free.</h2>
          <Link to="/courses" className="font-body font-medium px-8 py-3 rounded-full inline-flex items-center gap-2 bg-saffron text-ink">
            Book a free class <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
