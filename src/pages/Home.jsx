import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Calendar, Target, MessageCircle, TrendingUp, Quote } from "lucide-react";
import api from "../api";
import LiveTicker from "../components/LiveTicker";
import CourseCard from "../components/CourseCard";

export default function Home() {
  const [stats, setStats] = useState([]);
  const [batches, setBatches] = useState([]);
  const [courses, setCourses] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    api.get("/stats").then((r) => setStats(r.data)).catch(() => {});
    api.get("/batches").then((r) => setBatches(r.data)).catch(() => {});
    api.get("/courses").then((r) => setCourses(r.data.slice(0, 3))).catch(() => {});
    api.get("/testimonials").then((r) => setTestimonials(r.data)).catch(() => {});
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
