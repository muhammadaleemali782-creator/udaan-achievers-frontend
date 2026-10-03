import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    category: 'Institute & Programs',
    question: 'What is Educa Institute of Consultancy?',
    answer: 'Educa Institute of Consultancy is a premier professional institute offering specialized certifications in Wellness Consultancy in Naturopathy & Ayurveda (WCNA) and Wealth Consultancy in Finance Management (WCFM).'
  },
  {
    category: 'Institute & Programs',
    question: 'Who are the lead mentors and faculty members?',
    answer: 'The wellness programs are directed by Founder & Director S. R. Anand (BAMS, MD Naturopathy with 18+ years of clinical experience), while financial consultancy programs are mentored by Co-Founder & Managing Director A.D. Rao (Corporate Wealth & Financial Advisory Lead).'
  },
  {
    category: 'Courses & Certification',
    question: 'What is the duration and structure of the WCNA program?',
    answer: 'WCNA is a 6-month intensive professional certification covering fundamentals of Naturopathy, Ayurvedic Tridosha physiology, Nadi Pariksha (Pulse Diagnosis), Panchakarma therapy protocols, and client wellness consultation.'
  },
  {
    category: 'Courses & Certification',
    question: 'What is covered under the WCFM (Wealth Management) certification?',
    answer: 'WCFM is a 6-month comprehensive program covering corporate valuation, DCF modeling, portfolio engineering, direct/indirect tax planning, and high-net-worth client wealth advisory.'
  },
  {
    category: 'Batches & Schedule',
    question: 'What are the batch timings for WCNA and WCFM?',
    answer: 'WCNA Morning Alpha runs Monday to Friday from 07:30 AM to 09:30 AM. WCFM Evening Prime runs Monday to Friday from 06:00 PM to 08:00 PM. Weekend Executive schedules are also available.'
  },
  {
    category: 'Admissions & Enrollment',
    question: 'How can students reserve an admission seat?',
    answer: 'Candidates can reserve their seat directly through the online admission form on this portal or contact the official admissions helpline at +91 9369087032.'
  }
];

export const FaqSection: React.FC = () => {
  const { navigateTo, websiteSettings } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const phone = websiteSettings?.contactPhone || '+91 9369087032';
  const cleanPhone = phone.replace(/[^\d+]/g, '');
  const waPhone = phone.replace(/[^\d]/g, '');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200 text-xs font-black uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Everything You Need to Know About <span className="text-[#0066FF]">Educa Institute</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-medium">
            Clear answers on WCNA & WCFM programs, clinical batches, faculties, and admissions.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-blue-50/40 border-blue-200 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 px-5 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0066FF]">
                      {faq.category}
                    </span>
                    <h3 className={`text-sm sm:text-base font-bold ${isOpen ? 'text-[#0066FF]' : 'text-slate-900'}`}>
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`p-1.5 rounded-full shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-100 text-[#0066FF]' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA — Premium Redesigned Admissions Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/40 border border-blue-200/80 shadow-card-clean text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-[#0066FF] text-[10px] font-black uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>ADMISSIONS HELPLINE & ADVISORY DESK</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Have questions about WCNA or WCFM certifications?
          </h3>
          
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto font-medium leading-relaxed">
            Connect directly with our admissions counselors for batch timings, curriculum details, and fee assistance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${cleanPhone}`}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#0066FF] hover:bg-blue-700 active:scale-[0.98] text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call Admissions ({phone})</span>
            </a>
            <a
              href={`https://wa.me/${waPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
