import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-40 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-light -z-10 rounded-l-[100px] hidden lg:block"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/20 mb-8 animate-pulse-subtle">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-teal">2026 Batch Admissions Open</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-brand-navy mb-8">
                Your Rank is a <br />
                <span className="gradient-text">Consistent Habit.</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-slate leading-relaxed mb-12">
                Beyond coaching, we provide a precision-engineered learning system for JEE & NEET. Discipline isn't taught; it's scheduled.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/courses" className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white bg-brand-navy rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl shadow-brand-navy/20">
                  <span className="relative z-10">Explore Courses</span>
                  <i className="fa-solid fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform relative z-10"></i>
                  <div className="absolute inset-0 bg-brand-teal translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </Link>
                <Link to="/login" className="inline-flex items-center justify-center px-8 py-5 font-bold text-brand-navy border border-brand-border rounded-2xl hover:bg-white hover:border-brand-teal transition-all duration-300">
                  <i className="fa-solid fa-play text-brand-teal mr-3"></i>
                  Watch Free Class
                </Link>
              </div>

              <div className="mt-16 pt-10 border-t border-brand-border">
                <p className="text-xs font-bold text-brand-slate uppercase tracking-widest mb-6">Trusted by 50,000+ Aspirants</p>
                <div className="flex items-center space-x-12 grayscale opacity-50">
                  <div className="text-xl font-black">JEE ADVANCED</div>
                  <div className="text-xl font-black">NEET UG</div>
                  <div className="text-xl font-black">KVPY</div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-teal/10 rounded-[3rem] blur-2xl group-hover:bg-brand-teal/20 transition-all duration-1000"></div>
              <div className="relative bg-white p-4 rounded-[3rem] border border-brand-border premium-shadow overflow-hidden">
                <img className="w-full h-[550px] object-cover rounded-[2.5rem]" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_4e6b4e13b7_715fda663f7c4f78.png" alt="focused student at a minimalist high-tech study desk" />
                <div className="absolute bottom-10 left-10 right-10 bg-brand-navy/90 backdrop-blur-md p-8 rounded-3xl text-white transform hover:scale-105 transition-all duration-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-black tracking-tighter">AIR 143</p>
                      <p className="text-[10px] font-bold text-brand-teal uppercase tracking-widest">Sahil Pradhan | JEE 2025</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                      <i className="fa-solid fa-quote-left text-brand-teal"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Marquee */}
      <div className="bg-brand-navy py-10 overflow-hidden relative border-y border-white/5">
        <div className="flex whitespace-nowrap animate-marquee">
          {[0, 1].map((rep) => (
            <div key={rep} className="flex items-center space-x-20 px-10">
              <span className="text-2xl font-black text-white/20 tracking-tighter uppercase italic">98.5% Success Rate</span>
              <span className="text-2xl font-black text-white/20 tracking-tighter uppercase italic">AIR 88 NEET</span>
              <span className="text-2xl font-black text-white/20 tracking-tighter uppercase italic">24/7 Expert Doubt Support</span>
              <span className="text-2xl font-black text-white/20 tracking-tighter uppercase italic">AIR 318 JEE Advanced</span>
              <span className="text-2xl font-black text-white/20 tracking-tighter uppercase italic">Weekly Benchmarking Tests</span>
              <span className="text-2xl font-black text-white/20 tracking-tighter uppercase italic">50+ Physical Learning Hubs</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-32 bg-brand-light scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-black tracking-[0.3em] text-brand-teal uppercase block mb-4">The Methodology</span>
            <h2 className="text-4xl md:text-6xl font-black text-brand-navy tracking-tight mb-8">Systematic Excellence.</h2>
            <p className="text-lg text-brand-slate">We've broken down JEE/NEET preparation into a repeatable, high-output daily workflow. No confusion, just progress.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "fa-clock-rotate-left", title: "Fixed Timetable", text: "Classes at the same time, every day. Routine is the antidote to exam anxiety." },
              { icon: "fa-vial-circle-check", title: "Weekly Sprints", text: "Weekly tests that mirror actual exam patterns with nationwide ranking." },
              { icon: "fa-comment-nodes", title: "Doubt Resolve", text: "Real-time doubt clearing with top faculty via our mobile app 24/7." },
              { icon: "fa-layer-group", title: "Smart Notes", text: "Precision-curated study material that focuses on high-yield concepts." },
            ].map((f, i) => (
              <div key={i} className="group relative p-10 bg-white rounded-[2.5rem] border border-brand-border hover:border-brand-teal transition-all duration-500 hover:-translate-y-2 premium-shadow">
                <div className="w-16 h-16 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-teal transition-colors duration-500">
                  <i className={`fa-solid ${f.icon} text-brand-teal text-2xl group-hover:text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">{f.title}</h3>
                <p className="text-brand-slate leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Showcase */}
      <section id="app" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-navy rounded-[4rem] p-12 md:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center gap-20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/10 rounded-full blur-[120px]"></div>

            <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left">
              <span className="text-brand-teal font-black tracking-widest text-xs uppercase mb-6 block">Udaan Digital Ecosystem</span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">The Coaching Center in your pocket.</h2>
              <p className="text-lg text-slate-400 mb-12 max-w-lg mx-auto lg:mx-0">Live tests, performance analytics, and every single lecture recording available 24/7. Learning never stops.</p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link to="/contact" className="flex items-center justify-center px-8 py-4 bg-white text-brand-navy rounded-2xl font-bold hover:bg-brand-teal hover:text-white transition-all shadow-xl">
                  <i className="fa-brands fa-apple text-2xl mr-3"></i>
                  iOS App
                </Link>
                <Link to="/contact" className="flex items-center justify-center px-8 py-4 bg-white/10 text-white border border-white/10 rounded-2xl font-bold hover:bg-white/20 transition-all">
                  <i className="fa-brands fa-google-play text-2xl mr-3"></i>
                  Android App
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-80">
                <div className="absolute -inset-4 bg-brand-teal/20 rounded-[4rem] blur-3xl animate-pulse-subtle"></div>
                <img className="relative w-full h-auto object-contain" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_cae560d3a6_3d0a804329386f5c.png" alt="education app dashboard mockup" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results / Hall of Fame */}
      <section id="results" className="py-32 bg-brand-light scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24">
            <div className="max-w-2xl">
              <span className="text-xs font-black tracking-[0.3em] text-brand-teal uppercase block mb-4">Our Track Record</span>
              <h2 className="text-4xl md:text-6xl font-black text-brand-navy tracking-tight leading-none">Exceptional Outcomes.</h2>
            </div>
          </div>

          <div className="flex overflow-x-auto space-x-8 pb-12 no-scrollbar">
            {[
              { img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_e7dbede267_ad089c844f0fdbbd.png", rank: "AIR 143", exam: "JEE Advanced", name: "Sahil Pradhan", quote: "The discipline of the system was my biggest asset. Udaan removed the guesswork from my daily study routine." },
              { img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_6011b738fd_13686e496d934b25.png", rank: "AIR 88", exam: "NEET UG", name: "Aman Khatri", quote: "24/7 doubt resolution meant I never went to bed with a confusion. That momentum kept me ahead of the curve." },
              { img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_03e1d8387f_6c320925fba7a751.png", rank: "AIR 318", exam: "JEE Advanced", name: "Avanish Sharma", quote: "Weekly benchmarking tests were a reality check. I knew exactly where I stood compared to the whole country." },
            ].map((r, i) => (
              <div key={i} className="min-w-[350px] md:min-w-[450px] bg-white rounded-[3rem] p-12 premium-shadow border border-brand-border group transition-all duration-500 hover:border-brand-teal/30">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-24 h-24 rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ring-4 ring-brand-light">
                    <img className="w-full h-full object-cover" src={r.img} alt={r.name} />
                  </div>
                  <div className="text-right">
                    <p className="text-5xl font-black text-brand-teal tracking-tighter">{r.rank}</p>
                    <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest mt-1">{r.exam}</p>
                  </div>
                </div>
                <h4 className="text-2xl font-black text-brand-navy mb-4">{r.name}</h4>
                <p className="text-brand-slate text-lg leading-relaxed italic">"{r.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offline Centres */}
      <section id="centres" className="py-32 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-teal/10 rounded-full blur-3xl"></div>
                <div className="rounded-[3.5rem] overflow-hidden premium-shadow transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                  <img className="w-full h-[600px] object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_7c49c3d9bf_81437b7be82fd387.png" alt="modern educational architecture" />
                </div>
                <div className="absolute top-10 right-10 glass p-6 rounded-2xl shadow-xl border border-brand-border text-center">
                  <p className="text-4xl font-black text-brand-teal mb-1">50+</p>
                  <p className="text-[10px] font-bold text-brand-navy uppercase tracking-widest">Cities Covered</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-black tracking-[0.3em] text-brand-teal uppercase block mb-4">Udaan Learning Hubs</span>
              <h2 className="text-4xl md:text-6xl font-black text-brand-navy tracking-tight leading-tight mb-10">Hybrid Education. <br />Local Presence.</h2>
              <p className="text-lg text-brand-slate mb-12 leading-relaxed">Experience the discipline of offline coaching combined with our world-class digital pedagogy. Our hubs are designed for deep focus.</p>

              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <p className="text-3xl font-black text-brand-navy mb-2">100k+</p>
                  <p className="text-sm font-bold text-brand-slate uppercase">Offline Students</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-brand-navy mb-2">500+</p>
                  <p className="text-sm font-bold text-brand-slate uppercase">Expert Mentors</p>
                </div>
              </div>

              <Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-brand-navy text-white font-bold rounded-2xl hover:bg-brand-teal transition-all shadow-2xl shadow-brand-navy/10">
                Locate Nearest Centre
                <i className="fa-solid fa-map-location-dot ml-3"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-brand-navy rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-teal/20 rounded-full blur-[120px] -mr-40 -mt-40"></div>

          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-12 leading-none italic uppercase">Stop Wishing. <br />Start Studying.</h2>
            <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto">Take your first step towards an All India Rank. Our academic advisors are waiting to map your success journey.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/courses" className="w-full sm:w-auto px-12 py-6 bg-white text-brand-navy rounded-2xl font-black text-xl hover:bg-brand-teal hover:text-white transition-all shadow-2xl">Book Your Free Class</Link>
              <Link to="/contact" className="w-full sm:w-auto px-12 py-6 border border-white/20 text-white rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">Talk to Academic Expert</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
