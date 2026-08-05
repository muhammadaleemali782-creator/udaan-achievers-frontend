import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Calendar, Target, MessageCircle, TrendingUp, Quote, Smartphone, MapPin, Search, Trophy } from "lucide-react";
import api from "../api";
import LiveTicker from "../components/LiveTicker";
import CourseCard from "../components/CourseCard";

const RANKERS = [
  { rank: "AIR 143", name: "Sahil Pradhan", exam: "JEE Advanced 2026" },
  { rank: "AIR 318", name: "Avanish Sharma", exam: "JEE Advanced 2026" },
  { rank: "AIR 656", name: "Vishal Jha", exam: "JEE Advanced 2026" },
  { rank: "AIR 88", name: "Aman Khatri", exam: "NEET UG 2026" },
  { rank: "AIR 412", name: "Ritika Solanki", exam: "JEE Advanced 2026" },
  { rank: "AIR 798", name: "Jatin Kumar", exam: "JEE Advanced 2026" },
  { rank: "AIR 1029", name: "Anush Papnai", exam: "NEET UG 2026" },
  { rank: "AIR 1221", name: "Parshant", exam: "JEE Advanced 2026" },
];

const CENTRES = ["Kota", "Patna", "New Delhi", "Noida", "Bareilly", "Kolkata", "Lucknow", "Kanpur", "Jaipur", "Indore"];

export default function Home() {
  const [stats, setStats] = useState([]);
  const [batches, setBatches] = useState([]);
  const [courses, setCourses] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [centreSearch, setCentreSearch] = useState("");

  useEffect(() => {
    api.get("/stats").then((r) => setStats(Array.isArray(r.data) ? r.data : [])).catch(() => {});
    api.get("/batches").then((r) => setBatches(Array.isArray(r.data) ? r.data : [])).catch(() => {});
    api.get("/courses").then((r) => setCourses(Array.isArray(r.data) ? r.data.slice(0, 3) : [])).catch(() => {});
    api.get("/testimonials").then((r) => setTestimonials(Array.isArray(r.data) ? r.data : [])).catch(() => {});
  }, []);

  const why = [
    { icon: Calendar, title: "A fixed daily timetable", text: "Live classes at the same time every day so your brain builds a study rhythm." },
    { icon: Target, title: "Weekly test cycles", text: "Every Sunday, a full-syllabus test with All-India rank." },
    { icon: MessageCircle, title: "24-hour doubt support", text: "Ask a doubt after class, get an answer before the next one starts." },
    { icon: TrendingUp, title: "Progress you can see", text: "A weekly report of what you studied, scored and should revise next." },
  ];

  return (
    <>
      <section className="bg-ink pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="font-mono text-xs font-medium px-2 py-1 rounded bg-saffron/10 text-saffron">Admissions open · Batch starts 18 Aug</span>
            <h1 className="font-display text-white text-4xl md:text-6xl leading-[1.05] mt-5 mb-6">
              Your rank isn't luck.<br />It's a <span className="text-saffron">timetable</span> you kept.
            </h1>
            <p className="font-body text-white/70 text-base md:text-lg mb-8 max-w-md">
              Live classes, weekly tests and doubt support for JEE, NEET and board exams.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/courses" className="font-body font-medium px-6 py-3 rounded-full flex items-center justify-center gap-2 bg-saffron text-ink">
                Explore courses <ArrowRight size={16} />
              </Link>
              <Link to="/dashboard" className="font-body font-medium px-6 py-3 rounded-full flex items-center justify-center gap-2 text-white border border-white/25">
                <Play size={16} /> Watch a free class
              </Link>
            </div>
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

      <LiveTicker batches={batches} />

      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <p className="font-mono text-xs tracking-wider mb-3 text-tealDark">WHY STUDENTS STAY</p>
          <h2 className="font-display text-3xl md:text-4xl mb-12 max-w-xl text-charcoal">Coaching that runs like a well-kept school.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {why.map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-paperDark">
                <item.icon size={22} className="text-tealDark" />
                <h3 className="font-display text-lg mt-4 mb-2 text-charcoal">{item.title}</h3>
                <p className="font-body text-sm text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="font-mono text-xs tracking-wider mb-3 text-tealDark">GET THE APP</p>
            <h2 className="font-display text-3xl md:text-4xl mb-4 text-charcoal">Study on the move with the Udaan Achievers app</h2>
            <p className="font-body mb-6 max-w-md text-muted">Download recorded lectures, join live classes and check your test rank — all from your phone.</p>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-paperDark">
              <Smartphone size={18} className="text-ink" />
              <span className="font-body text-sm text-charcoal">App — Coming Soon</span>
            </div>
          </div>
          <div className="rounded-2xl p-8 bg-white border border-paperDark flex items-center justify-center">
            <div className="w-40 h-72 rounded-3xl bg-paperDark border-4 border-white flex flex-col items-center justify-center gap-3">
              <Smartphone size={40} className="text-ink" />
              <p className="font-mono text-[10px] tracking-wider text-muted">COMING SOON</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <p className="font-mono text-xs tracking-wider mb-3 text-tealDark">BATCHES</p>
          <h2 className="font-display text-3xl md:text-4xl mb-10 text-charcoal">Pick your track</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c) => <CourseCard key={c._id} course={c} />)}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <p className="font-mono text-xs tracking-wider mb-3 text-tealDark">RESULTS</p>
          <h2 className="font-display text-3xl md:text-4xl mb-12 max-w-xl text-charcoal">What the timetable did for them</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t._id} className="p-6 rounded-xl bg-white border border-paperDark">
                <Quote size={20} className="text-saffron" />
                <p className="font-body text-sm mt-4 mb-5 text-charcoal">{t.text}</p>
                <p className="font-display text-sm text-charcoal">{t.name}</p>
                <p className="font-body text-xs mt-1 text-tealDark">{t.exam}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 mb-3">
            <Trophy size={16} className="text-saffronDark" />
            <p className="font-mono text-xs tracking-wider text-saffronDark">RANKERS WALL</p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl mb-10 max-w-xl text-charcoal">Giving wings to a thousand dreams, a thousand more to go</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {RANKERS.map((r, i) => (
              <div key={i} className="rounded-xl p-4 text-center bg-paper border border-paperDark">
                <div className="w-14 h-14 rounded-full mx-auto mb-3 bg-ink/10 flex items-center justify-center">
                  <span className="font-display text-lg text-ink">{r.name[0]}</span>
                </div>
                <span className="font-mono text-xs font-medium px-2 py-1 rounded bg-saffron/10 text-saffronDark">{r.rank}</span>
                <p className="font-body text-sm font-medium mt-2 text-charcoal">{r.name}</p>
                <p className="font-body text-xs mt-0.5 text-muted">{r.exam}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <p className="font-mono text-xs tracking-wider mb-3 text-tealDark">OFFLINE CENTRES</p>
          <h2 className="font-display text-3xl md:text-4xl mb-2 text-charcoal">Find a Vidyapeeth centre near you</h2>
          <p className="font-body text-sm mb-8 text-muted">Available in 50+ cities across India</p>
          <div className="relative max-w-md mb-8">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              value={centreSearch}
              onChange={(e) => setCentreSearch(e.target.value)}
              placeholder="Search your city"
              className="w-full font-body text-sm pl-11 pr-4 py-3 rounded-full outline-none border border-paperDark bg-white"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {CENTRES.filter((c) => c.toLowerCase().includes(centreSearch.toLowerCase())).map((c) => (
              <div key={c} className="rounded-xl p-4 flex items-center gap-2 bg-white border border-paperDark">
                <MapPin size={16} className="text-tealDark flex-shrink-0" />
                <span className="font-body text-sm text-charcoal">{c}</span>
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
