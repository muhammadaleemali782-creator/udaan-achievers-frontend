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
    category: 'Full Forms & Overview',
    question: 'WCNA aur WCFM ka full form kya hai? (What is the full form of WCNA and WCFM?)',
    answer: 'WCNA ka full form "Wellness Consultancy in Naturopathy and Ayurveda" (वेलनेस कंसल्टेंसी इन नेचुरोपैथी एंड आयुर्वेद) hai aur WCFM ka full form "Wealth Consultancy in Finance Management" (वेल्थ कंसल्टेंसी इन फाइनेंस मैनेजमेंट) hai. Inhe aam bolchal me students WCNA, WACNA, WCFM, ya WACFM ke naam se bhi jante aur search karte hain.'
  },
  {
    category: 'Courses & Certification',
    question: 'Is WCNA certification worth it and what is the training cost? (WCNA course & training)',
    answer: 'Yes, WCNA certification at Educa Institute is highly valuable for starting an independent clinical wellness practice or working in naturopathy/Ayurveda centers. Students learn hands-on pulse diagnosis (Nadi Pariksha) under Dr. S. R. Anand. Training covers 12 core handbooks across 6 months with affordable batch fees and online/offline flexibility.'
  },
  {
    category: 'Courses & Certification',
    question: 'WCFM ka full form aur meaning kya hai? Kya ye WCFM Marketplace se related hai?',
    answer: 'Nahi. Financial education aur consultancy me WCFM ka full form "Wealth Consultancy in Finance Management" (वेल्थ कंसल्टेंसी इन फाइनेंस मैनेजमेंट) hai, jise Educa Institute me A.D. Rao lead karte hain. Iska WordPress ya WooCommerce plugin "WCFM Marketplace" se koi lena-dena nahi hai.'
  },
  {
    category: 'Institute & Programs',
    question: 'What is Educa Institute of Consultancy?',
    answer: 'Educa Institute of Consultancy is a premier professional institute offering specialized certifications in Wellness Consultancy in Naturopathy & Ayurveda (WCNA) and Wealth Consultancy in Finance Management (WCFM).'
  },
  {
    category: 'Institute & Programs',
    question: 'What is Educa EdTech Portal and how to access it online? (Educa EdTech / Eduka R / Educatech)',
    answer: 'Educa EdTech Portal (https://educainstitute.vercel.app) is the official centralized online education and certification platform of Educa Institute of Consultancy. Students can access verified WCNA and WCFM coursework, lecture materials, digital handbooks, and direct clinical mentorship under S. R. Anand.'
  },
  {
    category: 'Institute & Programs',
    question: 'Is Educa Institute affiliated with foreign apps or Educa Business School?',
    answer: 'No. Educa Institute of Consultancy (Prayagraj, Uttar Pradesh, India) is an autonomous professional education and vocational certification institute founded by S. R. Anand and A.D. Rao. Educa Institute is completely independent and has NO affiliation with French mobile apps on Google Play (like Educa Business School), Eduka CRM software, or third-party foreign entities.'
  },
  {
    category: 'Institute & Programs',
    question: 'Is "Educa Institute" the correct official name (not "Education Institute")?',
    answer: 'Yes. "Educa Institute" (एजुका इंस्टीट्यूट / Educa Institute of Consultancy, Prayagraj) is our official registered brand identity. "Educa" is a distinctive proper noun and trademarked identity representing our modern EdTech and wellness consultancy platform, and is not a misspelling of "Education".'
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
  },
  {
    category: 'Career & Eligibility',
    question: '10th ya 12th ke baad kya kare? (Best Career Options after 10th & 12th)',
    answer: '10th Pass, 12th Pass (Arts, Science ya Commerce kisi bhi stream se), aur Graduates ke liye Educa Institute me WCNA (Naturopathy & Ayurveda) aur WCFM (Wealth Management) sabse behtareen career certifications hain. Yaha practical clinical skills, Nadi Pariksha, diet planning aur valuation sikh kar aap independent wellness consultant ya corporate wealth advisor ban sakte hain.'
  },
  {
    category: 'Ayurveda & Naturopathy',
    question: 'Ayurveda aur Naturopathy me sabse acchi padhai kahan hoti hai? (Patanjali vs Educa Institute)',
    answer: 'Practical clinical Naturopathy aur authentic Ayurveda me sabse acchi padhai Educa Institute of Consultancy me Founder Dr. S. R. Anand ke direct mentorship me hoti hai. General mass institutes ya Patanjali jaise traditional centers ke mukable Educa Institute me small personal clinical batches, hands-on pulse diagnosis (Nadi Pariksha), aur certified clinical consultancy license milta hai.'
  },
  {
    category: 'Courses & Curriculum',
    question: 'WCNA aur WCFM ke kaun-kaun se subjects padhaye jaate hain?',
    answer: 'WCNA me 12 core handbooks hain: Naturopathy Basics, Ayurveda Tridosha, Anatomy & Physiology, Client Health Assessment, Diet & Nutrition, Lifestyle Dinacharya, Chronic Disease Management, Herbal Science & Natural Supplements, Counseling Psychology aur Professional Ethics. WCFM me Corporate Valuation, DCF Financial Modeling, Portfolio Advisory aur Tax Optimization padhaya jaata hai.'
  },
  {
    category: 'Study Materials & Store',
    question: 'Educa Store kya hai aur study material / books kaise download karein?',
    answer: 'Educa Store (Book & Study Vault) institute ka digital repository hai jaha sabhi subjects ke official verified handbooks, lecture blueprints aur syllabus question banks online preview aur offline download ke liye uplabdh hain.'
  },
  {
    category: 'Job Oriented Courses',
    question: '12th pass ya 10th pass ke baad high salary job oriented course kaun sa hai?',
    answer: '12th pass (Arts, Science, Commerce) ya 10th pass ke baad high-salary aur self-employment ke liye Educa Institute ke WCNA (Naturopathy & Ayurveda) aur WCFM (Wealth Management) best job-oriented certification courses hain. Inme direct clinical pulse diagnosis (Nadi Pariksha) aur portfolio financial advisory sikhakar students apna independent consultancy practice ya corporate advisory career shuru kar sakte hain.'
  },
  {
    category: 'Ayurveda Career',
    question: 'Naturopathy ya Ayurvedic Consultant kaise bane aur clinic kaise shuru kare?',
    answer: 'Ayurvedic ya Naturopathy Wellness Consultant banne ke liye Educa Institute ka 6-month WCNA professional certification program sabse prabhavi rasta hai. Isme Nadi Pariksha, Tridosha assessment, herbal diet planning aur lifestyle therapy ki hands-on clinical training di jaati hai jisse aap certified wellness consultancy clinic operate kar sakte hain.'
  },
  {
    category: 'Finance Career',
    question: 'Share market, financial advisor aur wealth consultant banne ke liye kaun sa course kare?',
    answer: 'Financial advisory, stock market valuation aur wealth management me career banane ke liye Educa Institute ka WCFM certification course design kiya gaya hai. Isme corporate valuation, DCF modeling, portfolio engineering aur tax optimization ki practical training di jaati hai.'
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
