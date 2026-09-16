import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Phone, MessageCircle, ArrowRight, CheckCircle2, ChevronRight,
  Sparkles, Award, Users, BookOpen, Clock, Calendar, Star,
  ShieldCheck, HelpCircle, FileText, Download, Play, Video,
  Search, ChevronDown, Check, Send
} from "lucide-react";
import LCCNavbar from "../components/LCCNavbar";
import LCCFooter from "../components/LCCFooter";
import { toast } from "sonner";

export default function Home() {
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Annual Convocation & Merit Award Ceremony 2026",
      tag: "FLAGSHIP EVENT",
      subtitle: "Celebrating certified scholars in Naturopathy, Ayurveda, and Wealth Management.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: "Interactive Clinical Practicals & Ayurveda Lab",
      tag: "CLINICAL EXCELLENCE",
      subtitle: "Practical training in pulse diagnosis, Panchakarma therapy, and natural diet planning.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: "Financial Analytics & Corporate FinOps Suite",
      tag: "WCFM TRADING DESK",
      subtitle: "Hands-on financial modeling, portfolio optimization, and valuation case studies.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Mission Tabs
  const [missionTab, setMissionTab] = useState("purpose");

  // Course Filter
  const [courseFilter, setCourseFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // FAQ Accordion
  const [openFaq, setOpenFaq] = useState(0);

  // Admission Form State
  const [admitForm, setAdmitForm] = useState({
    name: "",
    phone: "",
    course: "WCNA [ Wellness Consultancy in Naturopathy & Ayurveda ]",
    batch: "Morning Batch"
  });
  const [admitSubmitted, setAdmitSubmitted] = useState(false);

  const handleAdmissionSubmit = (e) => {
    e.preventDefault();
    if (!admitForm.name || !admitForm.phone) {
      toast.error("Please fill your Name and Contact Phone Number.");
      return;
    }
    const leads = JSON.parse(localStorage.getItem("erp_admissions_leads") || "[]");
    leads.push({
      ...admitForm,
      id: "ADM-" + Date.now(),
      date: new Date().toISOString().split("T")[0]
    });
    localStorage.setItem("erp_admissions_leads", JSON.stringify(leads));
    setAdmitSubmitted(true);
    toast.success("Seat reservation received! Our counsellor will call you shortly.");
  };

  const coursesList = [
    {
      id: "c1",
      cat: "wcna",
      title: "WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]",
      tag: "FLAGSHIP WELLNESS DIPLOMA",
      badgeColor: "bg-emerald-600 text-white",
      rating: "5.0 ★",
      reviews: "(540+ Enrolled)",
      duration: "6 Months + Internship",
      price: "₹24,999",
      oldPrice: "₹35,000",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80",
      points: [
        "Fundamental Principles of Ayurveda & Tridosha",
        "Clinical Naturopathy & Hydrotherapy Protocols",
        "Panchakarma Therapies & Detox Procedures",
        "Nadi Pariksha (Pulse Diagnosis) & Patient Counseling"
      ]
    },
    {
      id: "c2",
      cat: "wcfm",
      title: "WCFM [ WEALTH CONSULTANCY IN FINANCE MANAGEMENT ]",
      tag: "FLAGSHIP WEALTH DIPLOMA",
      badgeColor: "bg-[#0B3B95] text-white",
      rating: "4.9 ★",
      reviews: "(420+ Enrolled)",
      duration: "6 Months Intensive",
      price: "₹29,999",
      oldPrice: "₹40,000",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
      points: [
        "Corporate Valuation & DCF Modeling",
        "Portfolio Engineering & Risk Analytics",
        "Personal Wealth & Asset Allocation",
        "Tax Structuring & Regulatory Compliance"
      ]
    }
  ];

  const filteredCourses = coursesList.filter((c) => {
    const matchesCat = courseFilter === "all" || c.cat === courseFilter;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#0B3B95] selection:text-white">
      <LCCNavbar />

      {/* ================= 1. HERO 3-COLUMN LAYOUT (MATCHING LCC) ================= */}
      <section className="bg-slate-100/80 border-b border-slate-200 pb-8 sm:pb-12 pt-3 sm:pt-4 px-2 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          {/* Col 1: Quick Links Card */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-xs border border-slate-200 p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                <span className="w-2 h-2 rounded-full bg-[#0B3B95]"></span>
                <h3 className="font-black text-xs uppercase tracking-wider text-[#0B3B95]">
                  QUICK LINKS
                </h3>
              </div>

              <div className="space-y-2 text-xs font-semibold">
                <a
                  href="#admission-section"
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-amber-50 hover:text-amber-800 border border-slate-100 transition-colors"
                >
                  <span>📝 Admissions 2026–27</span>
                  <ChevronRight size={14} className="text-slate-400" />
                </a>
                <Link
                  to="/courses"
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-indigo-50 hover:text-indigo-800 border border-slate-100 transition-colors"
                >
                  <span>🌿 WCNA Naturopathy &amp; Ayurveda</span>
                  <ChevronRight size={14} className="text-slate-400" />
                </Link>
                <Link
                  to="/courses"
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-800 border border-slate-100 transition-colors"
                >
                  <span>💼 WCFM Wealth &amp; Finance</span>
                  <ChevronRight size={14} className="text-slate-400" />
                </Link>
                <a
                  href="#batches-section"
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-colors"
                >
                  <span>🗓️ Live Timetable &amp; Batches</span>
                  <ChevronRight size={14} className="text-slate-400" />
                </a>
                <a
                  href="#syllabus-section"
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-colors"
                >
                  <span>📚 Download Syllabus Blueprint</span>
                  <ChevronRight size={14} className="text-slate-400" />
                </a>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-center">
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block mb-1">
                ADMISSION COUNSELLING DESK
              </span>
              <a
                href="tel:+919876543210"
                className="font-black text-sm text-[#0B3B95] hover:underline"
              >
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Col 2: Featured Banner Slider */}
          <div className="lg:col-span-6 bg-slate-900 rounded-xl overflow-hidden shadow-sm relative min-h-[300px] flex flex-col justify-end">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

            <div className="relative z-10 p-5 sm:p-7 space-y-2 text-white">
              <span className="inline-block px-2.5 py-1 rounded bg-[#FFB800] text-slate-900 font-black text-[10px] tracking-wider uppercase">
                {slides[currentSlide].tag}
              </span>
              <h2 className="text-xl sm:text-2xl font-black leading-tight text-white">
                {slides[currentSlide].title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 line-clamp-2">
                {slides[currentSlide].subtitle}
              </p>

              {/* Slider Dots */}
              <div className="flex items-center gap-2 pt-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === idx ? "w-6 bg-[#FFB800]" : "w-2 bg-white/40"
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Col 3: Leadership / Founder Card */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-xs border border-slate-200 p-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="font-black text-[11px] uppercase tracking-wider text-[#0B3B95]">
                  DIRECTOR &amp; DEAN
                </span>
              </div>

              <div className="text-center space-y-2">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-[#0B3B95] shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
                    alt="Dean Dr. R. K. Sharma"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-black text-sm text-slate-900">Dr. R. K. Sharma</h4>
                  <p className="text-[11px] font-bold text-emerald-700">Dean of Naturopathy &amp; Ayurveda</p>
                  <p className="text-[10px] text-slate-500">BAMS, MD Naturopathy (18+ Yrs Exp)</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100 leading-relaxed text-center">
                "Our philosophy is simple: rigorous clinical practice, deep conceptual clarity, and individual scholar guidance."
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <a
                href="#about-section"
                className="w-full py-2 rounded-lg bg-slate-100 hover:bg-[#0B3B95] hover:text-white text-slate-800 text-xs font-bold flex items-center justify-center gap-1 transition-colors"
              >
                <span>View Profile &amp; Story</span>
                <ChevronRight size={14} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. ABOUT SECTION (MATCHING LCC) ================= */}
      <section id="about-section" className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#0B3B95] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              LEGACY OF ACADEMIC EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              About <span className="text-[#0B3B95]">Educa Institute of Consultancy</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Directed and founded by veteran practitioners, Educa Institute of Consultancy is recognized as a premier educational institute for certified wellness sciences and corporate wealth management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Leadership Box */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#0B3B95] text-white flex items-center justify-center font-black text-2xl shadow-md flex-shrink-0">
                  EV
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase text-emerald-700 tracking-wider">
                    ACADEMIC LEADERSHIP
                  </span>
                  <h3 className="font-black text-xl text-slate-900">Dr. R. K. Sharma &amp; Prof. Arvind Mehta</h3>
                  <p className="text-xs text-slate-500">Deans of Naturopathy &amp; Financial Advisory</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-xl border border-slate-200/80">
                "We ensure that every enrolled scholar masters core fundamentals through case simulations, individual attention, and daily clinical or analytical practice."
              </p>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <p className="font-black text-lg sm:text-xl text-[#0B3B95]">18+ Yrs</p>
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">Faculty Exp</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <p className="font-black text-lg sm:text-xl text-emerald-600">5,000+</p>
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">Scholars Trained</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <p className="font-black text-lg sm:text-xl text-[#0B3B95]">99.2%</p>
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">Student Rating</p>
                </div>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-slate-900 leading-tight">
                Empowering every student with confidence and modern skills
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At Educa Institute of Consultancy, education is beyond theory. We emphasize strong foundational principles, hands-on diagnostics, professional cap-table modeling, and verified credentials.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex gap-3 items-start">
                  <CheckCircle2 size={18} className="text-[#0B3B95] mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-slate-900">Personalized 1-on-1 Mentorship</h5>
                    <p className="text-slate-600 text-[11px]">Direct doubt solving, individualized guidance, and career direction.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex gap-3 items-start">
                  <CheckCircle2 size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-slate-900">Air-Conditioned Labs &amp; Smart Suites</h5>
                    <p className="text-slate-600 text-[11px]">Ayurveda herbarium, clinical intake room, and high-speed financial analytics stations.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex gap-3 items-start">
                  <CheckCircle2 size={18} className="text-[#0B3B95] mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-slate-900">Complete Syllabus Manuals &amp; Case Studies</h5>
                    <p className="text-slate-600 text-[11px]">Official study guides, verified certification, and active alumni network.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Timeline of Excellence */}
          <div className="pt-6">
            <h4 className="font-black text-sm uppercase tracking-wider text-center text-[#0B3B95] mb-6">
              OUR JOURNEY OF EXCELLENCE
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="font-black text-sm text-[#0B3B95] block mb-1">2018</span>
                <p className="font-bold text-xs text-slate-900">Founded Institute</p>
                <p className="text-[11px] text-slate-500 mt-1">Established with dedicated vision in wellness sciences.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="font-black text-sm text-[#0B3B95] block mb-1">2021</span>
                <p className="font-bold text-xs text-slate-900">Flagship WCNA Launch</p>
                <p className="text-[11px] text-slate-500 mt-1">Official comprehensive diploma in Naturopathy &amp; Ayurveda.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="font-black text-sm text-[#0B3B95] block mb-1">2024</span>
                <p className="font-bold text-xs text-slate-900">WCFM Wealth Division</p>
                <p className="text-[11px] text-slate-500 mt-1">Expanded to corporate valuation and FinOps advisory.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="font-black text-sm text-[#0B3B95] block mb-1">2026</span>
                <p className="font-bold text-xs text-slate-900">5,000+ Certified Alumni</p>
                <p className="text-[11px] text-slate-500 mt-1">Empowering scholars across clinics and corporate firms.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. SCHOLARSHIP CALLOUT BANNER ================= */}
      <section className="bg-slate-900 py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            <div>
              <h4 className="font-black text-white text-sm sm:text-base">
                Special Early-Bird Scholarship Test (2026–27 Session)
              </h4>
              <p className="text-xs text-slate-300">
                Register for counselling and secure up to 40% scholarship on program tuition.
              </p>
            </div>
          </div>
          <a
            href="#admission-section"
            className="px-5 py-2.5 rounded-lg bg-[#FFB800] hover:bg-amber-400 text-slate-900 font-black text-xs shadow-md flex-shrink-0 transition-all"
          >
            CLAIM OFFER →
          </a>
        </div>
      </section>

      {/* ================= 4. METRICS / STATS BAR ================= */}
      <div className="bg-[#0B3B95] text-white py-6 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-black text-amber-400">99.2%</p>
            <p className="text-xs text-white/80 font-medium">Certification Success Rate</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-white">18+ Years</p>
            <p className="text-xs text-white/80 font-medium">Dedicated Faculty Mentors</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-amber-400">1:1 Guidance</p>
            <p className="text-xs text-white/80 font-medium">Hands-on Diagnostic Labs</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-white">5,000+</p>
            <p className="text-xs text-white/80 font-medium">Certified Professionals</p>
          </div>
        </div>
      </div>

      {/* ================= 5. EXPLORE TOP-RATED COURSES ================= */}
      <section id="courses-section" className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#0B3B95]">
              ACADEMIC PROGRAMS 2026–27
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Explore <span className="text-[#0B3B95]">Top-Rated Coaching Courses</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              From foundational wellness science to advanced financial valuation and portfolio consulting.
            </p>

            {/* Search Bar */}
            <div className="pt-4 max-w-md mx-auto relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, modules, topics..."
                className="w-full text-xs px-4 py-2.5 pl-9 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B3B95]/20 focus:border-[#0B3B95] shadow-xs"
              />
              <Search size={15} className="absolute left-3.5 top-3 text-slate-400" />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
              <button
                onClick={() => setCourseFilter("all")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  courseFilter === "all"
                    ? "bg-[#0B3B95] text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                All Programs (2)
              </button>
              <button
                onClick={() => setCourseFilter("wcna")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  courseFilter === "wcna"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                WCNA (Naturopathy &amp; Ayurveda)
              </button>
              <button
                onClick={() => setCourseFilter("wcfm")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  courseFilter === "wcfm"
                    ? "bg-[#0B3B95] text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                WCFM (Wealth &amp; Finance)
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className={`absolute top-2 left-2 text-[10px] font-black px-2 py-0.5 rounded shadow-xs uppercase tracking-wide ${c.badgeColor}`}>
                      {c.tag}
                    </span>
                    <span className="absolute bottom-2 right-2 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {c.duration}
                    </span>
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-amber-500 font-bold">{c.rating}</span>
                      <span className="text-slate-400 text-[11px]">{c.reviews}</span>
                    </div>

                    <h3 className="font-bold text-sm text-slate-900 line-clamp-2 leading-snug">
                      {c.title}
                    </h3>

                    <ul className="space-y-1.5 text-[11px] text-slate-600 pt-1">
                      {c.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <Check size={13} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="line-clamp-1">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-100 mt-2">
                  <div className="flex items-baseline justify-between pt-3 mb-3">
                    <div>
                      <span className="font-black text-base text-slate-900">{c.price}</span>
                      <span className="text-[11px] text-slate-400 line-through ml-2">{c.oldPrice}</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600">Open for 2026-27</span>
                  </div>

                  <a
                    href="#admission-section"
                    className="w-full py-2 rounded-lg bg-[#0B3B95] hover:bg-[#082a6d] text-white text-xs font-bold text-center block transition-colors shadow-xs"
                  >
                    ENROLL NOW →
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 6. LIVE BATCHES SECTION (MATCHING LCC) ================= */}
      <section id="batches-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#0B3B95]">
              INTERACTIVE LIVE &amp; HYBRID BATCHES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Join Our High-Impact <span className="text-[#0B3B95]">Live Batches</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Limited batch intake (max 25 scholars per batch) for individualized faculty attention, daily attendance tracking, and verified roll calls.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Batch 1 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase">
                    WCNA MORNING ALPHA
                  </span>
                  <span className="text-[10px] text-rose-600 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                    Only 6 Seats Left
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-base text-slate-900">
                    WCNA: Naturopathy &amp; Ayurvedic Practice
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Dr. R. K. Sharma • Ayurveda Lab 101
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Timing:</span>
                    <span className="font-mono font-bold text-slate-800">08:00 AM – 10:30 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Days:</span>
                    <span className="font-semibold text-slate-700">Mon, Wed, Fri</span>
                  </div>
                </div>

                <ul className="text-xs text-slate-600 space-y-1.5">
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-emerald-600" />
                    <span>Clinical Intake Simulations</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-emerald-600" />
                    <span>Daily Roll Call &amp; Attendance</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-emerald-600" />
                    <span>Official 10 Study Manuals</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-xl font-black text-slate-900">₹24,999</span>
                  <span className="text-[11px] text-emerald-600 font-semibold">Installment Option</span>
                </div>
                <a
                  href="#admission-section"
                  className="w-full py-2.5 rounded-lg bg-[#0B3B95] hover:bg-[#082a6d] text-white font-bold text-xs text-center block transition-colors"
                >
                  ENROLL IN BATCH →
                </a>
              </div>
            </div>

            {/* Batch 2 */}
            <div className="bg-white rounded-xl p-6 border-2 border-[#0B3B95] shadow-md space-y-5 flex flex-col justify-between relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFB800] text-slate-900 text-[10px] font-black uppercase px-3 py-0.5 rounded-full shadow-xs">
                MOST POPULAR BATCH
              </span>

              <div className="space-y-4 pt-1">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 text-[10px] font-black uppercase">
                    WCFM EVENING PRIME
                  </span>
                  <span className="text-[10px] text-rose-600 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                    Only 4 Seats Left
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-base text-slate-900">
                    WCFM: Wealth &amp; Finance Valuation
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Prof. Arvind Mehta • Finance Suite 302
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Timing:</span>
                    <span className="font-mono font-bold text-slate-800">05:30 PM – 08:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Days:</span>
                    <span className="font-semibold text-slate-700">Tue, Thu, Sat</span>
                  </div>
                </div>

                <ul className="text-xs text-slate-600 space-y-1.5">
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-[#0B3B95]" />
                    <span>DCF &amp; Cap-Table Modeling</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-[#0B3B95]" />
                    <span>Portfolio Engineering Practicals</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-[#0B3B95]" />
                    <span>FinOps Mentorship &amp; Placement</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-xl font-black text-slate-900">₹29,999</span>
                  <span className="text-[11px] text-emerald-600 font-semibold">Installment Option</span>
                </div>
                <a
                  href="#admission-section"
                  className="w-full py-2.5 rounded-lg bg-[#FFB800] hover:bg-amber-400 text-slate-900 font-black text-xs text-center block transition-colors shadow-xs"
                >
                  ENROLL IN BATCH →
                </a>
              </div>
            </div>

            {/* Batch 3 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 text-[10px] font-black uppercase">
                    WEEKEND EXECUTIVE PRO
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded">
                    Admissions Open
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-base text-slate-900">
                    WCNA &amp; WCFM Combined Weekend
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Specialized for Working Professionals
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Timing:</span>
                    <span className="font-mono font-bold text-slate-800">10:00 AM – 02:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Days:</span>
                    <span className="font-semibold text-slate-700">Saturday &amp; Sunday</span>
                  </div>
                </div>

                <ul className="text-xs text-slate-600 space-y-1.5">
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-purple-600" />
                    <span>Hybrid Online + Classroom Access</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-purple-600" />
                    <span>Session Recordings in Portal</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-purple-600" />
                    <span>Weekend Executive Certificate</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-xl font-black text-slate-900">₹24,999</span>
                  <span className="text-[11px] text-emerald-600 font-semibold">Installment Option</span>
                </div>
                <a
                  href="#admission-section"
                  className="w-full py-2.5 rounded-lg bg-[#0B3B95] hover:bg-[#082a6d] text-white font-bold text-xs text-center block transition-colors"
                >
                  ENROLL IN BATCH →
                </a>
              </div>
            </div>

          </div>

          <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-center text-xs text-[#0B3B95] font-semibold max-w-xl mx-auto">
            🛡️ 100% Academic Satisfaction Guarantee: If not satisfied after your 1st week, full fee refund policy applies.
          </div>

        </div>
      </section>

      {/* ================= 7. YELLOW SECTION: NURTURING LEARNERS (MATCHING LCC) ================= */}
      <section className="py-16 bg-[#FFB800] text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <span className="text-3xl">🌿</span>
            <span className="text-3xl">📈</span>
            <span className="text-3xl">🏅</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Nurturing Confident, Happy &amp; Successful Scholars
          </h2>
          <p className="text-xs sm:text-sm font-semibold max-w-2xl mx-auto text-slate-800 leading-relaxed">
            From Ayurvedic Biology to Advanced Corporate Financial Modeling, Educa Institute of Consultancy provides complete conceptual clarity, hands-on diagnostics, and verified certifications.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 text-left">
            <div className="bg-white p-5 rounded-xl shadow-xs border border-amber-300">
              <span className="font-mono text-xs font-bold text-[#0B3B95] block mb-1">01. CONCEPTS</span>
              <h4 className="font-bold text-sm text-slate-900">Deep Theory Mastery</h4>
              <p className="text-[11px] text-slate-600 mt-1">
                Rigorous coverage of anatomy, Rogshashtra, and corporate DCF models.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-xs border border-amber-300">
              <span className="font-mono text-xs font-bold text-emerald-700 block mb-1">02. CLINICAL LABS</span>
              <h4 className="font-bold text-sm text-slate-900">Practical Applications</h4>
              <p className="text-[11px] text-slate-600 mt-1">
                Panchakarma demonstrations and live financial trading suite terminal tasks.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-xs border border-amber-300">
              <span className="font-mono text-xs font-bold text-purple-700 block mb-1">03. EXAM SUCCESS</span>
              <h4 className="font-bold text-sm text-slate-900">Mock Assessments</h4>
              <p className="text-[11px] text-slate-600 mt-1">
                Regular testing, case presentation audits, and continuous feedback.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-xs border border-amber-300">
              <span className="font-mono text-xs font-bold text-rose-700 block mb-1">04. PLACEMENT</span>
              <h4 className="font-bold text-sm text-slate-900">Career Guidance</h4>
              <p className="text-[11px] text-slate-600 mt-1">
                Assistance with wellness practice setup and FinOps consulting placement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 8. WHAT WE DO SECTION ================= */}
      <section className="py-16 bg-[#eef6fd] px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-2">
            <span className="text-xs font-black text-[#0B3B95] uppercase">METHODOLOGY</span>
            <h4 className="font-black text-lg text-slate-900">Overcoming Conceptual Blocks</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              When complex diagnostic Sanskrit terms or financial mathematics feel daunting, our faculty simplifies them with visual analogies and clinical diagrams.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-2">
            <span className="text-xs font-black text-emerald-700 uppercase">MENTORSHIP</span>
            <h4 className="font-black text-lg text-slate-900">Eliminating Exam Anxiety</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Continuous mock tests, clinical intake practice, and viva sessions train scholars to articulate solutions with complete poise and authority.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-2">
            <span className="text-xs font-black text-purple-700 uppercase">PROFESSIONAL</span>
            <h4 className="font-black text-lg text-slate-900">Digital &amp; Practice Skills</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipping every graduate with client communication skills, billing etiquette, and modern practice management software familiarity.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 9. FREE REVISION NOTES & HANDBOOKS (MATCHING LCC) ================= */}
      <section id="study-material-section" className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#0B3B95]">
              DIGITAL STUDY MATERIAL &amp; PDF VAULT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Official Revision <span className="text-[#0B3B95]">Notes &amp; Handbooks</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Download verified formula sheets, anatomical diagnostic charts, and valuation shortcuts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "WCNA Book 1: Wellness Coaching Principles",
                category: "Ayurveda & Naturopathy",
                pages: "48 Pages PDF",
                tag: "FREE DOWNLOAD",
                desc: "Introduction to holistic coaching, client mindset shifts, and natural lifestyle guidelines."
              },
              {
                title: "Tridosha & Prakriti Assessment Handbook",
                category: "Clinical Diagnostics",
                pages: "62 Pages PDF",
                tag: "HIGH DEMAND",
                desc: "Complete checklist of Vata, Pitta, and Kapha symptoms and diet balancing charts."
              },
              {
                title: "WCFM: Corporate Valuation & DCF Cheat Sheet",
                category: "Finance & Wealth",
                pages: "36 Pages PDF",
                tag: "VERIFIED FORMULAS",
                desc: "Key formulas for Discounted Cash Flow, WACC calculations, and beta estimations."
              },
              {
                title: "Panchakarma Therapies & Procedure Manual",
                category: "Ayurveda Practicals",
                pages: "54 Pages PDF",
                tag: "CLINICAL GUIDE",
                desc: "Step-by-step documentation of Virechana, Basti, Nasya, and herbal decoction brewing."
              },
              {
                title: "Portfolio Asset Allocation & Risk Framework",
                category: "Wealth Management",
                pages: "40 Pages PDF",
                tag: "CONSULTING TEMPLATE",
                desc: "Standard client investment policy statement (IPS) templates and risk scoring metrics."
              },
              {
                title: "Client Intake & Medical History Record Sheet",
                category: "Practice Setup",
                pages: "24 Pages PDF",
                tag: "CLINIC READY",
                desc: "Ready-to-print legal intake consent forms and symptom progress tracker sheets."
              }
            ].map((doc, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center text-[10px] font-bold">
                    <span className="text-[#0B3B95] uppercase">{doc.category}</span>
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono">{doc.tag}</span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 mt-2">{doc.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{doc.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-200 flex justify-between items-center text-xs">
                  <span className="font-mono text-slate-500 text-[11px]">{doc.pages}</span>
                  <button
                    onClick={() => toast.success(`Downloading ${doc.title}...`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0B3B95] hover:bg-[#082a6d] text-white font-bold text-[11px] transition-colors"
                  >
                    <Download size={12} />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 10. OFFICIAL SYLLABUS BLUEPRINT ================= */}
      <section id="syllabus-section" className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#0B3B95]">
              CURRICULUM &amp; MARKING SCHEME
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Official <span className="text-[#0B3B95]">Syllabus Blueprint</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Complete chapter-wise theoretical concepts, practical lab hours, and grading rubrics.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  WCNA + WCFM ACCREDITED SYLLABUS
                </span>
                <h3 className="font-black text-lg sm:text-xl text-slate-900 mt-1">
                  Professional Curriculum Blueprint (2026–27)
                </h3>
              </div>
              <button
                onClick={() => toast.success("Official Syllabus Blueprint PDF download started!")}
                className="px-4 py-2 rounded-lg bg-[#0B3B95] hover:bg-[#082a6d] text-white text-xs font-bold flex items-center gap-2"
              >
                <Download size={14} />
                <span>Download Blueprint PDF</span>
              </button>
            </div>

            <div className="space-y-3 text-xs">
              {[
                { title: "Module 1: Human Anatomy & Functional Physiology", hours: "30 Hours", weightage: "15% Weightage" },
                { title: "Module 2: Rogshashtra & Ayurvedic Tridosha Diagnostics", hours: "40 Hours", weightage: "20% Weightage" },
                { title: "Module 3: Naturopathic Hydrotherapy, Mud Packs & Detox", hours: "35 Hours", weightage: "15% Weightage" },
                { title: "Module 4: Corporate Valuation & Financial Modeling (DCF)", hours: "45 Hours", weightage: "25% Weightage" },
                { title: "Module 5: Portfolio Engineering & Wealth Tax Advisory", hours: "35 Hours", weightage: "15% Weightage" },
                { title: "Module 6: Clinical Case Study & Internship Viva", hours: "50 Hours", weightage: "10% Weightage" }
              ].map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0B3B95] text-white font-bold flex items-center justify-center text-[10px]">
                      {idx + 1}
                    </span>
                    <span className="font-bold text-slate-900">{m.title}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500 font-mono text-[11px] self-end sm:self-auto">
                    <span className="bg-white px-2 py-0.5 rounded border border-slate-200">{m.hours}</span>
                    <span className="bg-blue-50 text-[#0B3B95] font-bold px-2 py-0.5 rounded border border-blue-200">{m.weightage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 11. VIDEO LECTURES & SHORT REELS ================= */}
      <section id="videos-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3B95]">
                VIDEO LECTURES &amp; CONCEPT REELS
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Watch <span className="text-[#0B3B95]">Lectures &amp; Case Studies</span>
              </h2>
            </div>
            <button
              onClick={() => toast.info("Opening Educa Institute of Consultancy Official Video Channel...")}
              className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-2"
            >
              <Video size={14} />
              <span>Subscribe YouTube Channel</span>
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Ayurveda Basics: Understanding Vata, Pitta & Kapha in 1 Shot",
                tag: "AYURVEDA THEORY",
                faculty: "Dr. R. K. Sharma",
                duration: "24:15",
                views: "18.4K Views",
                image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80"
              },
              {
                title: "How to Build a 3-Statement Financial Model from Scratch",
                tag: "WCFM FINANCE",
                faculty: "Prof. Arvind Mehta",
                duration: "32:40",
                views: "24.1K Views",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80"
              },
              {
                title: "Panchakarma Detox Demonstration & Clinical Setup",
                tag: "CLINICAL PRACTICAL",
                faculty: "Dr. Priya Deshmukh",
                duration: "19:05",
                views: "12.8K Views",
                image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
              }
            ].map((v, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 group shadow-xs">
                <div className="relative h-48 bg-slate-900">
                  <img src={v.image} alt={v.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#0B3B95] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play size={20} className="ml-1 text-amber-400" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                    {v.duration}
                  </span>
                  <span className="absolute top-2 left-2 bg-[#0B3B95] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {v.tag}
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 line-clamp-2">{v.title}</h4>
                  <div className="flex justify-between text-[11px] text-slate-500 pt-1">
                    <span>👨‍🏫 {v.faculty}</span>
                    <span>{v.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 12. TESTIMONIALS (MATCHING LCC) ================= */}
      <section id="reviews-section" className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#0B3B95]">
              REAL STUDENT SUCCESS STORIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What Our <span className="text-[#0B3B95]">Students &amp; Scholars Say</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Verified testimonials from certified practitioners and corporate finance executives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Dr. Sharma's pulse diagnosis lectures changed everything for me. His clinical case studies made holistic healing crystal clear, and I opened my wellness center immediately after my WCNA diploma.",
                name: "Aarav Sharma",
                course: "WCNA Certified Consultant",
                batch: "Batch 2025–2026",
                rating: 5
              },
              {
                quote: "The financial modeling and DCF sessions in WCFM were on par with top global investment courses. Prof. Mehta guided us line-by-line through real valuation term sheets.",
                name: "Rohan Kulkarni",
                course: "WCFM Financial Analyst",
                batch: "Batch 2025–2026",
                rating: 5
              },
              {
                quote: "The personalized mentorship, daily roll call, and comprehensive 10 books gave me immense discipline. The certification helped me secure corporate advisory mandates.",
                name: "Ananya Iyer",
                course: "WCNA & WCFM Graduate",
                batch: "Batch 2025–2026",
                rating: 5
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex text-amber-400 gap-1 text-sm">
                    {"★".repeat(t.rating)}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <h5 className="font-bold text-sm text-slate-900">{t.name}</h5>
                  <p className="text-[11px] font-semibold text-[#0B3B95]">{t.course}</p>
                  <span className="text-[10px] text-slate-400">{t.batch}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 13. CAMPUS GALLERY (MATCHING LCC) ================= */}
      <section id="gallery-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#0B3B95]">
              MEMORIES &amp; WALL OF FAME
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Campus Gallery &amp; <span className="text-[#0B3B95]">Student Life</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Glimpse through our annual ceremonies, smart lecture halls, and practical laboratories.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80", cap: "Annual Felicitation & Convocation Day" },
              { img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80", cap: "Ayurvedic Diagnostic Lab Practicals" },
              { img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80", cap: "Modern Financial Analysis Terminal Lab" },
              { img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80", cap: "Interactive Seminar & Case Presentations" },
              { img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80", cap: "Faculty Mentorship & Clinical Discussion" },
              { img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80", cap: "Scholars Team Presentation & Awards" }
            ].map((g, idx) => (
              <div key={idx} className="group relative h-48 sm:h-56 rounded-xl overflow-hidden bg-slate-100 shadow-xs">
                <img src={g.img} alt={g.cap} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <p className="absolute bottom-3 left-3 right-3 text-white font-bold text-xs leading-tight">
                  {g.cap}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 14. RESERVE YOUR ADMISSION SEAT FORM (MATCHING LCC) ================= */}
      <section id="admission-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0B3B95] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-10">
            <span className="text-[11px] font-black uppercase tracking-wider text-amber-400 bg-white/10 px-3 py-1 rounded-full">
              ADMISSIONS OPEN 2026–27
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Reserve Your <span className="text-amber-400">Admission Seat</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto">
              Limited batch intake (maximum 25 seats per batch). Submit your details and our admission counsellor will guide you through verification and enrollment.
            </p>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl">
            {admitSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Application Received!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <span className="font-bold text-slate-900">{admitForm.name}</span>. Your seat reservation has been registered. An admission officer will call you at <span className="font-bold text-slate-900">{admitForm.phone}</span>.
                </p>
                <button
                  onClick={() => setAdmitSubmitted(false)}
                  className="px-5 py-2 rounded-lg bg-[#0B3B95] text-white font-bold text-xs hover:bg-[#082a6d]"
                >
                  Submit Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleAdmissionSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Student Full Name *</label>
                    <input
                      type="text"
                      required
                      value={admitForm.name}
                      onChange={(e) => setAdmitForm({ ...admitForm, name: e.target.value })}
                      placeholder="e.g. Aman Sharma"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B3B95]/20 focus:border-[#0B3B95]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp / Contact Phone *</label>
                    <input
                      type="tel"
                      required
                      value={admitForm.phone}
                      onChange={(e) => setAdmitForm({ ...admitForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B3B95]/20 focus:border-[#0B3B95]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Select Program *</label>
                    <select
                      value={admitForm.course}
                      onChange={(e) => setAdmitForm({ ...admitForm, course: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B3B95]/20 focus:border-[#0B3B95] bg-white"
                    >
                      <option value="WCNA [ Wellness Consultancy in Naturopathy & Ayurveda ]">
                        WCNA — Naturopathy &amp; Ayurveda (₹24,999)
                      </option>
                      <option value="WCFM [ Wealth Consultancy in Finance Management ]">
                        WCFM — Wealth &amp; Finance Management (₹29,999)
                      </option>
                      <option value="Foundation Health & Diet Planning">
                        Foundation Health &amp; Diet Planning (₹14,999)
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Batch Timing *</label>
                    <select
                      value={admitForm.batch}
                      onChange={(e) => setAdmitForm({ ...admitForm, batch: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B3B95]/20 focus:border-[#0B3B95] bg-white"
                    >
                      <option value="Morning Batch">Morning Batch (08:00 AM – 10:30 AM)</option>
                      <option value="Evening Batch">Evening Batch (05:30 PM – 08:00 PM)</option>
                      <option value="Weekend Batch">Weekend Batch (Saturday &amp; Sunday)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#FFB800] hover:bg-amber-400 text-slate-900 font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  <span>CONFIRM SEAT RESERVATION →</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ================= 15. FAQ ACCORDION (MATCHING LCC) ================= */}
      <section id="faq-section" className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#0B3B95]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Everything You Need to Know About <span className="text-[#0B3B95]">Educa Institute of Consultancy</span>
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "What is Educa Institute of Consultancy?",
                a: "Educa Institute of Consultancy is a recognized premier institute offering specialized certifications in Naturopathy & Ayurveda (WCNA) and Wealth Consultancy in Finance Management (WCFM), combining clinical wisdom with corporate financial acumen."
              },
              {
                q: "How can I access the Institute Portal?",
                a: "Admitted scholars, faculty, and administrators can click the 'Portal Login' button at the top of the website. Valid login credentials allow access to live attendance roll calls, student profiles, and fee receipts."
              },
              {
                q: "Are installment options available for fees?",
                a: "Yes. Both WCNA and WCFM offer flexible installment schemes (e.g. ₹5,000 initial admission fee with monthly balance clearance)."
              },
              {
                q: "Do you offer weekend batches for working professionals?",
                a: "Yes, both programs have dedicated Saturday & Sunday weekend batches with live interactive sessions and portal recordings."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-4 text-left flex justify-between items-center text-xs sm:text-sm font-bold text-slate-900 hover:bg-slate-50"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-slate-400 transition-transform ${openFaq === idx ? "rotate-180 text-[#0B3B95]" : ""}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <LCCFooter />
    </div>
  );
}
