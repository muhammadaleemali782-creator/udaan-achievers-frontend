import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles, ArrowUpRight, Mic, MessageSquare, CheckCircle, Feather, BookOpen, Box, Rocket,
  ArrowRight, Headphones, Radio, Compass, Edit3, TrendingUp, Trophy, Activity, Flame, Star,
  Zap, PhoneCall, Smartphone, Calculator,
} from "lucide-react";

const JOURNEY_STAGES = [
  { icon: Compass, color: "cyan", stage: "Stage 01", title: "DISCOVER", text: "Diagnostic 3D baseline assessment mapping your innate strengths and blindspots." },
  { icon: BookOpen, color: "blue", stage: "Stage 02", title: "LEARN", text: "Mastery lectures delivered with crystal visual breakdowns and first-principle logic." },
  { icon: Edit3, color: "orange", stage: "Stage 03", title: "PRACTICE", text: "Timed sprint tests, verbal simulated labs, and curated multi-tier question banks." },
  { icon: TrendingUp, color: "emerald", stage: "Stage 04", title: "IMPROVE", text: "24/7 dedicated doubt resolution pods resolving micro-errors in under 4 minutes." },
  { icon: Trophy, color: "amber", stage: "Stage 05", title: "ACHIEVE", text: "Top All India Ranks, fluid communication mastery, and premier college admissions." },
];

const STAGE_BG = { cyan: "bg-cyan-500 shadow-cyan-500/30", blue: "bg-blue-500 shadow-blue-500/30", orange: "bg-orange-500 shadow-orange-500/30", emerald: "bg-emerald-500 shadow-emerald-500/30", amber: "bg-amber-500 shadow-amber-500/30" };
const STAGE_TEXT = { cyan: "text-cyan-600", blue: "text-blue-600", orange: "text-orange-600", emerald: "text-emerald-600", amber: "text-amber-600" };

const REVIEWS = [
  { img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80", name: "Sahil Pradhan", sub: "IIT Bombay (Computer Science)", quote: "The discipline of the Udaan timetable removed all anxiety. Instead of guessing what to study each morning, the 3D sprint test engine gave me immediate clarity on weak spots." },
  { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80", name: "Aman Khatri", sub: "AIIMS New Delhi (MBBS)", quote: "The 24/7 doubt resolution pod meant I never went to bed confused. That momentum kept me ahead of national competition while keeping my health and confidence intact." },
  { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80", name: "Avanish Sharma", sub: "Product Strategist & Speaker", quote: "I always scored high in written exams but choked in group interviews. Udaan's interactive speech laboratory gave me effortless articulation and self-belief." },
];

export default function Home() {
  return (
    <main className="pt-24 lg:pt-32 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* 1. HERO */}
      <section id="hero" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[75vh] scroll-mt-24">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
            2026 BATCH ADMISSIONS LIVE • JEE | NEET | SPOKEN ENGLISH
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Your Goals Deserve A <br />
            <span className="text-cyan-500 underline decoration-cyan-300 decoration-wavy">Dimensional Beginning.</span>
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl font-normal max-w-2xl">
            Beyond conventional coaching. Enter a precision-engineered 3D learning world combining academic rigor for <strong className="text-slate-900">AIR Rankers</strong> with active <strong className="text-slate-900">English Fluency Simulators.</strong>
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/courses" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-cyan-500/30 flex items-center gap-2 transition-all hover:-translate-y-0.5">
              <Sparkles size={20} /> Explore 3D Courses <ArrowUpRight size={16} />
            </Link>
            <Link to="/#english" className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-bold px-7 py-4 rounded-xl card-shadow flex items-center gap-2 transition-all">
              <Mic size={20} className="text-red-500" /> Try Live English Demo
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200/80 max-w-xl">
            <div className="bg-white p-4 rounded-2xl border border-slate-100 card-shadow text-center">
              <h3 className="text-2xl font-extrabold text-slate-900">AIR 143</h3>
              <p className="text-xs font-medium text-cyan-600 uppercase">JEE Advanced</p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 card-shadow text-center">
              <h3 className="text-2xl font-extrabold text-slate-900">AIR 88</h3>
              <p className="text-xs font-medium text-emerald-600 uppercase">NEET UG Specialist</p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 card-shadow text-center">
              <h3 className="text-2xl font-extrabold text-slate-900">99.4%</h3>
              <p className="text-xs font-medium text-purple-600 uppercase">Fluency Success</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-3xl p-1 shadow-2xl">
            <div className="bg-slate-900 rounded-[22px] overflow-hidden p-6 text-white space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden border border-cyan-400">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Student" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Sahil Pradhan (AIR 143)</h4>
                    <p className="text-xs text-cyan-400">Udaan Advanced Classroom + Doubt Matrix</p>
                  </div>
                </div>
                <span className="bg-cyan-500/20 text-cyan-300 text-xs px-2.5 py-1 rounded-md font-bold">JEE 2025</span>
              </div>

              <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5"><MessageSquare size={16} className="text-pink-400" /> SPOKEN LAB</span>
                  <span className="text-emerald-400 flex items-center gap-1"><CheckCircle size={14} /> AI Feedback: 98%</span>
                </div>
                <p className="text-xs text-slate-300 italic">"Can you introduce yourself and your preparation strategy?"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY CARDS */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">Personalized Trajectory</span>
          <h2 className="text-3xl font-extrabold text-slate-900">What Are You Working Toward?</h2>
          <p className="text-slate-500 text-sm">Select your aspiration below. Our 3D pedagogical engine adapts to your timeline and skill gap.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Feather, bg: "bg-orange-100", color: "text-orange-600", tag: "Communication", tagColor: "text-orange-500", title: "Speak Confident English", text: "Master natural pronunciation, public speaking, and real-world conversational spontaneity.", cta: "Explore Modules", to: "/contact" },
            { icon: BookOpen, bg: "bg-blue-100", color: "text-blue-600", tag: "Competitive Edge", tagColor: "text-blue-500", title: "Crack JEE & NEET", text: "Daily test sprints, question decomposition drills, and rank-targeted formula mastery.", cta: "View Rank Track", to: "/courses" },
            { icon: Box, bg: "bg-emerald-100", color: "text-emerald-600", tag: "Grades 8-10", tagColor: "text-emerald-500", title: "Early Foundation Hub", text: "Deep mental model structuring in Science & Math for early Olympiad and NTSE distinction.", cta: "Early Blueprint", to: "/courses?cat=Foundation" },
            { icon: Rocket, bg: "bg-purple-100", color: "text-purple-600", tag: "Life Ready", tagColor: "text-purple-500", title: "Prepare For The Future", text: "Critical thinking, interview poise, analytical decision systems, and high-impact aptitude.", cta: "Explore Skills", to: "/contact" },
          ].map((c, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 card-shadow space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className={`w-12 h-12 rounded-2xl ${c.bg} ${c.color} flex items-center justify-center font-bold`}>
                  <c.icon size={24} />
                </div>
                <span className={`text-[10px] font-extrabold tracking-wider uppercase ${c.tagColor} block`}>{c.tag}</span>
                <h3 className="text-xl font-bold text-slate-900 leading-snug">{c.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{c.text}</p>
              </div>
              <Link to={c.to} className="text-xs font-bold text-slate-700 flex items-center justify-between pt-4 border-t border-slate-100 hover:text-cyan-600">
                {c.cta} <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ENGLISH 3D LAB */}
      <section id="english" className="bg-slate-900 text-white rounded-[36px] p-6 sm:p-12 shadow-2xl relative overflow-hidden scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-xs font-bold">
              <Headphones size={16} /> UDAAN SPOKEN ENGLISH & PERSONA STUDIO
            </div>
            <h2 className="text-3xl sm:text-5xl font-black leading-tight">
              English Is Not A Subject. <br />
              <span className="text-cyan-400">It Is Your Superpower.</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Break past hesitation. Our multi-sensory 3D dialogue laboratory helps you think, articulate, and debate in fluent English through real-time feedback loops.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              {[["01. LISTEN", "Acoustic Audio"], ["02. SPEAK", "3D Mic Drills"], ["03. CORRECT", "Instant Nuance"], ["04. CONQUER", "Confidence"]].map(([a, b], i) => (
                <div key={i} className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-center">
                  <span className="text-[10px] text-cyan-400 font-bold block">{a}</span>
                  <span className="text-xs font-semibold">{b}</span>
                </div>
              ))}
            </div>

            <Link to="/contact" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-8 py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all">
              <Radio size={20} /> BOOK 1-ON-1 SPEECH EVALUATION
            </Link>
            <p className="text-xs text-amber-400 flex items-center gap-1.5"><Sparkles size={14} /> Zero hesitation guarantee</p>
          </div>

          <div className="lg:col-span-6 bg-slate-800/90 rounded-2xl border border-slate-700 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-700 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-xs font-bold text-slate-400 ml-2">Udaan AI Verbal Sandbox</span>
              </div>
              <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-black px-2.5 py-1 rounded-full uppercase">Real-time Active</span>
            </div>

            <div className="space-y-3">
              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-700/60">
                <span className="text-[10px] text-cyan-400 font-extrabold uppercase block mb-1">Mentor Prompt</span>
                <p className="text-xs text-slate-200">"Could you describe a challenging problem you solved recently and your thought process?"</p>
              </div>
              <div className="bg-cyan-950/40 p-3.5 rounded-xl border border-cyan-800/50">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] text-emerald-400 font-extrabold uppercase">Student Response</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">Pitch: Optimal</span>
                </div>
                <p className="text-xs text-slate-300 italic">"Certainly! When tackling complex organic synthesis, I first systematically categorized the reaction mechanisms into baseline functional groups..."</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2 text-center">
              <div className="bg-slate-900 p-2.5 rounded-xl">
                <span className="text-[10px] text-slate-400 block">Vocabulary Richness</span>
                <span className="text-lg font-black text-amber-400">94 <span className="text-xs font-normal text-slate-500">/ 100</span></span>
              </div>
              <div className="bg-slate-900 p-2.5 rounded-xl">
                <span className="text-[10px] text-slate-400 block">Fluency Cadence</span>
                <span className="text-lg font-black text-emerald-400">140 <span className="text-xs font-normal text-slate-500">WPM</span></span>
              </div>
              <div className="bg-slate-900 p-2.5 rounded-xl">
                <span className="text-[10px] text-slate-400 block">Confidence Index</span>
                <span className="text-lg font-black text-cyan-400">High <span className="text-xs font-bold text-emerald-400">A+</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 5-STAGE FLIGHT PATH */}
      <section id="journey" className="space-y-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">The 5-Stage Spatial Engine</span>
          <h2 className="text-3xl font-extrabold text-slate-900">The 3D Flight Path To Excellence</h2>
          <p className="text-slate-500 text-sm">Education isn't passive memory; it's an evolving dimensional track. Here is how Udaan transforms every student from learner to topper.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {JOURNEY_STAGES.map((s, i) => (
            <div key={i} className="bg-white p-5 rounded-3xl border border-slate-100 card-shadow text-center space-y-3">
              <div className={`w-12 h-12 rounded-2xl text-white flex items-center justify-center mx-auto shadow-md ${STAGE_BG[s.color]}`}>
                <s.icon size={24} />
              </div>
              <span className={`text-[10px] font-black uppercase ${STAGE_TEXT[s.color]}`}>{s.stage}</span>
              <h4 className="font-extrabold text-slate-900">{s.title}</h4>
              <p className="text-xs text-slate-500">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PROGRAM CARDS */}
      <section id="programs" className="space-y-8 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">Precision Curriculums</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">3D Engineered Programs</h2>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm max-w-md">Each program features physical offline labs paired with spatial online analytics and round-the-clock mentorship.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl border border-slate-100 p-6 card-shadow space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-extrabold bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-200 uppercase">Target 2025 / 2026</span>
                <Calculator size={20} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">JEE Main & Advanced</h3>
              <p className="text-xs text-slate-500">Comprehensive Physics, Chemistry & Mathematics architecture with 10,000+ solved question models.</p>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500" /> Daily 4-Hour Intensive Rigor Sprints</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500" /> All India Test Series with Percentile Predictor</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500" /> 1-on-1 Weekly Faculty Mentorship</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 block font-bold">BATCH TYPE</span>
                <span className="text-xs font-bold text-slate-800">Classroom + 3D Portal</span>
              </div>
              <Link to="/courses?cat=JEE" className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl">Enroll Now</Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 p-6 card-shadow space-y-6 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-400 text-slate-950 font-black text-[9px] uppercase px-4 py-1 rounded-bl-xl tracking-wider">Highest Qualification Rate</div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-extrabold bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full border border-emerald-200 uppercase">Target 680+ Marks</span>
                <Activity size={20} className="text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">NEET UG Medical Pinnacle</h3>
              <p className="text-xs text-slate-500">NCERT line-by-line 3D conceptual dissection with Botany, Zoology & Clinical Problem Solving drills.</p>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500" /> 100% NCERT Dissection System</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500" /> OMR Speed & Error Minimization Labs</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500" /> Doctor Mentorship Network</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 block font-bold">BATCH TYPE</span>
                <span className="text-xs font-bold text-slate-800">Hybrid Full Immersion</span>
              </div>
              <Link to="/courses?cat=NEET" className="bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl">Reserve Seat</Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 p-6 card-shadow space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-extrabold bg-purple-50 text-purple-600 px-3 py-1 rounded-full border border-purple-200 uppercase">All Age Groups</span>
                <Mic size={20} className="text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Fluent English & Poise</h3>
              <p className="text-xs text-slate-500">Transform hesitant instant translation into stage command, executive vocabulary, and spontaneous dialogue.</p>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500" /> Daily Live Speaking Roundtables</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500" /> Accent & Diction Calibration</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500" /> Job Interview & Group Discussion Prep</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 block font-bold">BATCH TYPE</span>
                <span className="text-xs font-bold text-slate-800">Interactive Studio 1:1</span>
              </div>
              <Link to="/contact" className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl">Join Cohort</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STUDENT DASHBOARD PREVIEW */}
      <section id="dashboard" className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 card-shadow space-y-6 scroll-mt-24">
        <div className="text-center space-y-1">
          <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">Udaan Student Portal</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Your Personal 3D Learning Universe</h2>
          <p className="text-xs text-slate-500">Not an administrative table. An engaging spatial command deck tracking real daily momentum.</p>
        </div>

        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 sm:p-6 space-y-6">
          <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500" alt="Student Avatar" />
              <div>
                <h4 className="font-bold text-slate-900 text-base">Welcome back, Ananya Sharma</h4>
                <p className="text-xs text-slate-500">Enrolled: JEE Elite Track & Spoken Studio • Batch 2025</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5">
                <Flame size={16} className="text-amber-500" /> 18-Day Active Streak
              </div>
              <div className="bg-cyan-50 border border-cyan-200 text-cyan-700 px-3 py-1.5 rounded-lg text-xs font-bold">
                Rank Projection: Top 150
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500">SYLLABUS COMPLETION</span>
                <span className="text-xs font-bold text-cyan-600">78%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div className="bg-cyan-500 h-full w-[78%]"></div>
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>Physics & Math: 84%</span>
                <span>Spoken Nuance: 92%</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-600 bg-purple-50 px-2 py-0.5 rounded">Upcoming Sprint</span>
                <span className="text-[11px] text-slate-400">In 45 Mins</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Electrodynamics Masterclass & Doubt Hour</h4>
              <p className="text-xs text-slate-500">Mentor: Prof. R. K. Singhania (Ex-IIT Delhi)</p>
              <Link to="/login" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-bold py-2 rounded-lg transition-colors mt-2 flex items-center justify-center">Join Interactive Studio</Link>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded">Due Today</span>
                <span className="text-[11px] text-emerald-600 font-bold">AI GRADED</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Sprint 42: Rotational Mechanics</h4>
              <p className="text-xs text-slate-500">30 Questions • Advanced Benchmark</p>
              <div className="flex justify-between items-center pt-2">
                <span className="text-xs text-slate-400">Avg Time: 45 min</span>
                <Link to="/login" className="text-xs font-bold text-cyan-600 hover:underline">Start Test →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REVIEWS */}
      <section id="reviews" className="space-y-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">Hall of Champions</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Exceptional Outcomes, Proven Year After Year</h2>
          <p className="text-slate-500 text-sm">Real rankers who trusted the Udaan ecosystem to transform their discipline into All India selections.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 card-shadow space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, s) => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic">"{r.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img src={r.img} className="w-10 h-10 rounded-full object-cover" alt={r.name} />
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">{r.name}</h4>
                  <p className="text-[10px] text-slate-500">{r.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section id="cta" className="bg-slate-900 text-white rounded-[36px] p-8 sm:p-14 text-center space-y-6 relative overflow-hidden shadow-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider">
          <Zap size={16} /> The Time To Begin Is Now
        </div>
        <h2 className="text-3xl sm:text-5xl font-black max-w-3xl mx-auto leading-tight">
          Stop Wishing. <br />
          <span className="text-cyan-400">Start Studying In 3D.</span>
        </h2>
        <p className="text-slate-400 text-xs sm:text-base max-w-xl mx-auto">
          Take your first decisive step toward an All India Rank or effortless English fluency. Our academic advisors will map your custom roadmap today.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link to="/courses" className="bg-white hover:bg-slate-100 text-slate-900 font-extrabold px-8 py-4 rounded-xl shadow-lg transition-all text-sm">
            BOOK YOUR FREE DIAGNOSTIC CLASS
          </Link>
          <Link to="/contact" className="bg-slate-800 hover:bg-slate-700 text-white font-extrabold px-8 py-4 rounded-xl border border-slate-700 flex items-center gap-2 text-sm transition-all">
            <PhoneCall size={16} /> TALK TO ACADEMIC EXPERT
          </Link>
        </div>
        <p className="text-[11px] text-slate-400">⚡ 100% Free Consultation • Zero Obligation • Free Diagnostic Test Included</p>
      </section>

    </main>
  );
}
