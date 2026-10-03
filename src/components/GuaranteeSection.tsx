import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  const { navigateTo } = useApp();

  const pathways = [
    {
      level: '10th Passed Students',
      badge: 'Foundation Pathway',
      headline: 'Foundation-Oriented Professional Learning & Skill Development',
      desc: 'Early introduction to essential communication, digital literacy, and holistic healthcare fundamentals to build career-ready confidence.',
      points: [
        'Core communication & public speaking basics',
        'Introductory wellness & natural health literacy',
        'Foundational digital & office productivity tools'
      ]
    },
    {
      level: '12th Passed Students',
      badge: 'Advanced Foundation',
      headline: 'Advanced Foundation Learning & Career-Oriented Programs',
      desc: 'Structured professional programs preparing learners for specialized certifications in Naturopathy, Ayurveda, and Wealth Management.',
      points: [
        'WCNA Naturopathy & Ayurvedic foundation studies',
        'WCFM Wealth & financial literacy modules',
        'Professional ethics & stage presentation coaching'
      ]
    },
    {
      level: 'Graduate Students',
      badge: 'Professional Specialization',
      headline: 'Professional Specialization & Consultancy-Oriented Programs',
      desc: 'Advanced consultancy training, practical clinical case studies, financial portfolio models, and independent practice setup guidance.',
      points: [
        'Advanced clinical consultation & pulse analysis',
        'Corporate valuation, portfolio engineering & advisory',
        'Consultancy practice setup & client management'
      ]
    },
    {
      level: 'Finance & Wealth Advisors',
      badge: 'Corporate Wealth (WCFM)',
      headline: 'Executive Wealth Consultancy & Financial Portfolio Advisory',
      desc: 'Comprehensive training in corporate valuation, equity research, tax optimization, and HNWI wealth consultancy under expert mentors.',
      points: [
        'DCF modeling & corporate balance sheet valuation',
        'Direct & indirect corporate tax strategy',
        'HNWI wealth management & regulatory compliance'
      ]
    }
  ];

  return (
    <section id="academic-promise-section" className="relative overflow-hidden pt-12 pb-24 bg-white">
      
      {/* Warm Honey Yellow Banner with Rainbow-Curved Floating Avatars */}
      <div className="w-full bg-[#fdb813] pt-14 pb-32 sm:pb-44 relative px-4 text-center overflow-hidden">
        
        {/* Subtle Decorative Rainbow Arc Background Lines */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-[500px] h-[300px] sm:w-[800px] sm:h-[450px] border-4 border-dashed border-slate-900 rounded-t-full -mb-32" />
        </div>

        {/* Professional Pathway Strip in Rainbow Arc Curve with Dynamic Floating Motion */}
        <div className="max-w-4xl mx-auto flex items-end justify-center gap-3 sm:gap-10 mb-10 relative z-10 pt-4">
          
          {/* 1. 10th Passed (Left Lower Rainbow Leg) */}
          <div className="flex flex-col items-center animate-rainbow-1 transition-transform">
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-3xl bg-white/35 backdrop-blur-sm border-2 border-white/70 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
              <span className="text-3xl sm:text-5xl select-none">🧑‍🎓</span>
            </div>
            <span className="text-[10px] sm:text-xs font-black text-slate-950 uppercase tracking-wider mt-2.5 bg-white/60 px-2.5 py-0.5 rounded-full shadow-2xs whitespace-nowrap">
              10TH PASSED
            </span>
          </div>

          {/* 2. 12th Passed (Mid-Left Arch) */}
          <div className="flex flex-col items-center animate-rainbow-2 transition-transform -translate-y-4 sm:-translate-y-6">
            <div className="w-16 h-16 sm:w-22 sm:h-22 rounded-3xl bg-white/45 backdrop-blur-sm border-2 border-white/80 flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform">
              <span className="text-4xl sm:text-6xl select-none">👩‍🎓</span>
            </div>
            <span className="text-[10px] sm:text-xs font-black text-slate-950 uppercase tracking-wider mt-2.5 bg-white/70 px-2.5 py-0.5 rounded-full shadow-2xs whitespace-nowrap">
              12TH PASSED
            </span>
          </div>

          {/* 3. Graduation (Peak of Rainbow Arch) */}
          <div className="flex flex-col items-center animate-rainbow-3 transition-transform -translate-y-7 sm:-translate-y-12">
            <div className="w-18 h-18 sm:w-24 sm:h-24 rounded-3xl bg-white/70 backdrop-blur-md border-3 border-white flex items-center justify-center shadow-2xl ring-4 ring-white/30 transform hover:scale-110 transition-transform">
              <span className="text-4xl sm:text-6xl select-none">🎓</span>
            </div>
            <span className="text-[10px] sm:text-xs font-black text-slate-950 uppercase tracking-wider mt-2.5 bg-white/90 px-3 py-1 rounded-full shadow-xs whitespace-nowrap">
              GRADUATION
            </span>
          </div>

          {/* 4. Finance & Wealth (Right Lower Rainbow Leg) */}
          <div className="flex flex-col items-center animate-rainbow-4 transition-transform">
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-3xl bg-white/35 backdrop-blur-sm border-2 border-white/70 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
              <span className="text-3xl sm:text-5xl select-none">💼</span>
            </div>
            <span className="text-[10px] sm:text-xs font-black text-slate-950 uppercase tracking-wider mt-2.5 bg-white/60 px-2.5 py-0.5 rounded-full shadow-2xs whitespace-nowrap">
              FINANCE & WEALTH
            </span>
          </div>

        </div>

        {/* Banner Headline */}
        <div className="max-w-3xl mx-auto text-slate-950 relative z-10 px-2 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/10 text-slate-950 text-[11px] font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Learning Pathways for Every Educational Level</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            THE EDUCA INSTITUTE — <span className="underline decoration-slate-950/30 decoration-wavy">ACADEMIC PROMISE</span>
          </h2>
          <p className="text-xs sm:text-sm font-bold text-slate-900/80 mt-2 max-w-xl mx-auto leading-relaxed">
            From 10th Passed foundational learning to 12th Passed career programs, Graduate specializations, and Professional Wealth & Naturopathy Consultancy.
          </p>
        </div>

      </div>

      {/* Floating White Guarantee Box */}
      <div className="max-w-6xl mx-auto px-4 -mt-20 sm:-mt-24 relative z-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-100 text-center space-y-8">
          
          <div className="space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black uppercase tracking-wider border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Rigorous Pedagogy & Conceptual Clarity</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-slate-900 leading-tight">
              Guiding Learners Towards Professional Excellence
            </h3>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium">
              Under the direct leadership of <strong className="text-slate-900 font-extrabold">Founder & Director S. R. Anand</strong>, we ensure step-by-step conceptual mastery, structured handbooks, dedicated doubt resolution, and practical skill development.
            </p>
          </div>

          {/* 4 Responsive Pathway Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
            {pathways.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-5 border border-slate-200 hover:border-[#0066FF] shadow-xs hover:shadow-card-clean transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0066FF] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                  </div>

                  <div>
                    <h4 className="text-sm font-black text-slate-900 group-hover:text-[#0066FF] transition-colors leading-snug">
                      {item.level}
                    </h4>
                    <p className="text-[11px] font-bold text-[#0B3B95] mt-1 leading-snug">
                      {item.headline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>

                  <ul className="space-y-1.5 pt-2 border-t border-slate-200/80">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => navigateTo('courses', 'courses-section')}
                    className="w-full py-2.5 rounded-xl bg-white group-hover:bg-[#0066FF] text-slate-700 group-hover:text-white border border-slate-200 group-hover:border-[#0066FF] text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => navigateTo('admission', 'admission-section')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/919369087032"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 font-bold text-xs uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Talk to S. R. Anand</span>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
};
