import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, BookOpen, Target, Sparkles, Compass, CheckCircle2 } from 'lucide-react';

export const WhatWeDoSection: React.FC = () => {
  const { navigateTo } = useApp();

  const services = [
    {
      code: 'A',
      title: 'Conceptual Learning',
      badge: 'Core Pedagogy',
      icon: BookOpen,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      description: 'Helping learners master fundamental principles through simple explanations, structured lessons, audio-visual lectures, and practical case studies.',
      target: 'courses' as const
    },
    {
      code: 'B',
      title: 'Exam Preparation & Revision',
      badge: 'Assessments & Notes',
      icon: Target,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      description: 'Providing structured revision resources, comprehensive study materials, and learning support to prepare candidates for their certification assessments.',
      target: 'study-material' as const
    },
    {
      code: 'C',
      title: 'Career & Professional Skills',
      badge: 'Soft & Digital Skills',
      icon: Sparkles,
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      description: 'Focusing on executive communication skills, public speaking confidence, modern management practices, digital capabilities, and personal career development.',
      target: 'courses' as const
    },
    {
      code: 'D',
      title: 'Specialized Professional Education',
      badge: 'WCNA & WCFM',
      icon: Compass,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      description: 'In-depth professional training dedicated specifically to Naturopathy, Ayurveda (WCNA), and Wealth Management (WCFM) for independent advisory practice.',
      target: 'courses' as const
    }
  ];

  return (
    <section id="what-we-do-section" className="py-20 bg-[#EEF6FD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100 text-[#0066FF] text-xs font-black uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Educa Institute Core Pillars</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            WHAT WE DO
          </h2>

          <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium">
            EDUCA Institute of Consultancy provides professional and career-oriented learning opportunities in Naturopathy, Ayurveda, Wealth Management and essential professional skills, with structured learning resources for students from different educational backgrounds.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 shadow-soft hover:shadow-card-hover border border-slate-200/80 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${item.color} border flex items-center justify-center shadow-xs`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-black text-slate-300">
                    {item.code}
                  </span>
                </div>

                <span className="text-[10px] font-black uppercase tracking-wider text-[#0066FF] block mb-1">
                  {item.badge}
                </span>

                <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-medium mb-6">
                  {item.description}
                </p>
              </div>

              <button
                onClick={() => navigateTo(item.target)}
                className="text-xs font-black text-[#0066FF] hover:text-blue-800 uppercase tracking-wider flex items-center gap-1 pt-3 border-t border-slate-100 transition-colors cursor-pointer"
              >
                <span>EXPLORE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Banner Strip */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-black text-slate-900">
              Need personalized guidance on which program matches your goals?
            </h4>
            <p className="text-xs text-slate-500 font-medium">
              Talk directly with our academic mentors to choose the right learning track.
            </p>
          </div>

          <button
            onClick={() => navigateTo('contact', 'contact-section')}
            className="px-6 py-2.5 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider shadow-sm transition-all whitespace-nowrap cursor-pointer"
          >
            Connect With Mentors
          </button>
        </div>

      </div>
    </section>
  );
};
