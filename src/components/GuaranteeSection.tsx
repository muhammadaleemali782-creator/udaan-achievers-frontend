import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Award, CheckCircle2, ArrowRight, Sparkles, BookOpen, GraduationCap, Compass } from 'lucide-react';

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
    }
  ];

  return (
    <section id="academic-promise-section" className="relative overflow-hidden pt-12 pb-20 bg-slate-50 border-y border-slate-200/80">
      
      {/* Brand Header Banner */}
      <div className="w-full bg-gradient-to-br from-[#0B3B95] via-[#0066FF] to-[#0B3B95] pt-14 pb-32 sm:pb-36 relative px-4 text-center overflow-hidden text-white">
        
        {/* Subtle Background Accent */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full border-2 border-dashed border-white" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 px-2 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-amber-300 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Learning Pathways for Every Educational Level</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            THE EDUCA INSTITUTE — <span className="text-amber-300">ACADEMIC PROMISE</span>
          </h2>

          <p className="text-xs sm:text-base font-medium text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Programs and learning pathways structured according to your educational background and career goals — from foundational learning to advanced professional consultancy.
          </p>
        </div>

      </div>

      {/* Floating Main Box */}
      <div className="max-w-6xl mx-auto px-4 -mt-20 sm:-mt-24 relative z-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 space-y-8">
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black uppercase tracking-wider border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Rigorous Pedagogy & Conceptual Clarity</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
              Guiding Learners Towards Professional Excellence
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
              Under the direct leadership of <strong className="text-slate-900 font-extrabold">Founder & Director S. R. Anand</strong>, we ensure step-by-step conceptual mastery, structured handbooks, dedicated doubt resolution, and practical skill development.
            </p>
          </div>

          {/* 3 Responsive Pathway Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pathways.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#0066FF] shadow-sm hover:shadow-card-clean transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0066FF] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                  </div>

                  <div>
                    <h4 className="text-base font-black text-slate-900 group-hover:text-[#0066FF] transition-colors leading-snug">
                      {item.level}
                    </h4>
                    <p className="text-xs font-bold text-[#0B3B95] mt-1 leading-snug">
                      {item.headline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-slate-200/80">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-[11px] text-slate-700 font-medium">
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
              <span>Consult Academic Desk</span>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
};
