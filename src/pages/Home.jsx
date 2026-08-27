import MobileGurukulView from "../components/MobileGurukulView";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles, ArrowUpRight, BookOpen, Star, Award, Users, CheckCircle,
  Clock, ShieldCheck, HeartPulse, Stethoscope, Compass, ExternalLink
} from "lucide-react";
import CourseCard from "../components/CourseCard";

const WCNA_FLAGSHIP = {
  _id: "wcna-flagship",
  name: "WCNA — Wellness Consultancy of Naturopathy & Ayurveda",
  cat: "WCNA Program",
  level: "18 Months + 6 Mo Internship",
  price: 24999,
  oldPrice: 35000,
  seats: "Admissions Open 2026-2027",
  rating: 5.0,
  tag: "★ GURUKUL FLAGSHIP DIPLOMA ★",
  image: "/books/wcna_master_course.jpg",
  desc: "Comprehensive career-focused training course in Naturopathy & Ayurveda with 10 study books, 20+ clinical case studies, and 6-month clinical internship.",
  lectures: [
    "Anatomy & Physiology",
    "Rogshashtra",
    "Principal of Ayurveda",
    "Principal of Naturopathy",
    "Diet & Nutrition",
    "Yoga Science",
    "Counselling Skills",
    "Objection & Solution",
    "Client Follow Up",
    "Wellness Center Setup",
    "20+ Wellness Case Studies"
  ]
};

const FEATURED_COMIC_BOOKS = [
  {
    _id: "b1",
    name: "WCNA: Wellness Coaching (BOOK 01)",
    cat: "Curriculum Books",
    level: "Book 01",
    price: 499,
    oldPrice: 799,
    tag: "FOUNDATION ESSENTIALS",
    image: "/books/book1_wellness_coaching.jpg",
    desc: "Essential introduction to modern wellness coaching, client mindset transformation, and holistic health philosophy.",
    lectures: ["Holistic Health Principles", "Client Mindset Shifts", "Goal Setting", "Wellness Dimensions"]
  },
  {
    _id: "b2",
    name: "WCNA: Naturopathy Basics (BOOK 02)",
    cat: "Curriculum Books",
    level: "Book 02",
    price: 549,
    oldPrice: 849,
    tag: "5 ELEMENTS HEALING",
    image: "/books/book2_naturopathy_basics.jpg",
    desc: "Core principles of Naturopathic healing, 5 elements therapy, hydrotherapy, mud packs, and natural body detoxification.",
    lectures: ["5 Elements Therapy", "Hydrotherapy", "Mud Therapy", "Fasting & Detoxification"]
  },
  {
    _id: "b3",
    name: "WCNA: Ayurveda Basics (BOOK 03)",
    cat: "Curriculum Books",
    level: "Book 03",
    price: 599,
    oldPrice: 899,
    tag: "VEDIC ANATOMY",
    image: "/books/book3_ayurveda_basics.jpg",
    desc: "Foundational Ayurvedic concepts: Vata, Pitta, Kapha assessment, Agni, Ama diagnostics, and body constitution analysis.",
    lectures: ["Tridosha Analysis", "Dhatu & Mala Science", "Prakriti Assessment", "Agni & Ama Diagnostics"]
  },
  {
    _id: "b5",
    name: "WCNA: Client Assessment (BOOK 05)",
    cat: "Curriculum Books",
    level: "Book 05",
    price: 649,
    oldPrice: 949,
    tag: "CLINICAL INTAKE",
    image: "/books/book5_client_assessment.jpg",
    desc: "Comprehensive diagnostic framework for evaluating client medical history, physical symptoms, stress markers, and lifestyle assessment.",
    lectures: ["Health Intake Forms", "Nadi & Tongue Observation", "Vital Marker Analysis", "Lifestyle Stress Auditing"]
  },
  {
    _id: "b6",
    name: "WCNA: Diet Planning (BOOK 06)",
    cat: "Curriculum Books",
    level: "Book 06",
    price: 599,
    oldPrice: 899,
    tag: "AHARA VIDHI",
    image: "/books/book6_diet_planning.jpg",
    desc: "Scientific diet design combining Ahara principles, sattvic nutrition, calorie balance, and customized disease meal charts.",
    lectures: ["Ahara Vidhi", "Sattvic Nutrition", "Therapeutic Diet Charts", "Calorie & Micro-nutrient Balance"]
  },
  {
    _id: "b7",
    name: "WCNA: Lifestyle & Routine (BOOK 07)",
    cat: "Curriculum Books",
    level: "Book 07",
    price: 499,
    oldPrice: 799,
    tag: "CIRCADIAN CODE",
    image: "/books/book7_lifestyle_coaching.jpg",
    desc: "Step-by-step coaching tools for sleep optimization, morning rituals, stress reduction, and habit formation.",
    lectures: ["Dinacharya Protocol", "Circadian Rhythm Biology", "Sleep Architecture", "Stress & Breathwork"]
  },
  {
    _id: "b8",
    name: "WCNA: Managing Diseases (BOOK 08)",
    cat: "Clinical Practice",
    level: "Book 08",
    price: 749,
    oldPrice: 1099,
    tag: "REVERSAL PROTOCOLS",
    image: "/books/book8_managing_diseases.jpg",
    desc: "Proven holistic protocols for managing Diabetes, Hypertension, Thyroid imbalances, PCOD, and Digestive disorders.",
    lectures: ["Metabolic Syndrome", "Hypertension Protocols", "Thyroid Management", "Gut & Acid Reflux Protocols"]
  },
  {
    _id: "b9",
    name: "WCNA: Herbs & Supplements (BOOK 09)",
    cat: "Clinical Practice",
    level: "Book 09",
    price: 699,
    oldPrice: 999,
    tag: "BOTANICAL MATERIA",
    image: "/books/book9_herbs_supplements.jpg",
    desc: "Practical guide to potent medicinal herbs, classical formulations, safe dosages, contraindications, and supplement pairing.",
    lectures: ["Classical Formulations", "Herb Synergy & Anupana", "Dosage & Toxicity Safety", "Modern Supplement Pairings"]
  },
  {
    _id: "b10",
    name: "WCNA: Communication Skills (BOOK 10)",
    cat: "Clinical Practice",
    level: "Book 10",
    price: 599,
    oldPrice: 899,
    tag: "PRACTICE SETUP",
    image: "/books/book10_client_communication.jpg",
    desc: "Advanced consulting psychology, overcoming client objections, long-term retention, and establishing a successful wellness center.",
    lectures: ["Counseling Psychology", "Objection Handling", "Client Retention System", "Wellness Center Setup"]
  }
];

const CURRICULUM_SUBJECTS = [
  { icon: "🫀", title: "Anatomy & Physiology", desc: "Scientific understanding of the human body systems, organs, and biomechanics." },
  { icon: "📖", title: "Rogshashtra", desc: "Pathology and root-cause analysis of modern lifestyle disorders." },
  { icon: "✨", title: "Principal of Ayurveda", desc: "Vedic science of Tridosha (Vata, Pitta, Kapha), Dhatus, and Agni." },
  { icon: "🌿", title: "Principal of Naturopathy", desc: "5 Elements nature cure, hydrotherapy, fasting, and vital force awakening." },
  { icon: "🥗", title: "Diet & Nutrition", desc: "Therapeutic Ahara Vidhi, seasonal meal design, and macronutrient balance." },
  { icon: "🧘", title: "Yoga Science", desc: "Asanas, Pranayama, and breathwork for psychosomatic balance and stress reduction." },
];

const PROFESSIONAL_SKILLS = [
  { icon: "🗣️", title: "Counselling Skills", desc: "Master deep listening, empathy, and client psychology." },
  { icon: "💡", title: "Objection & Solution", desc: "Overcome client hesitations with clinical clarity and confidence." },
  { icon: "🔄", title: "Client Follow Up", desc: "Structured accountability system for long-term health transformations." },
  { icon: "🏥", title: "Wellness Center Setup", desc: "Step-by-step roadmap to launch and scale your own wellness clinic." },
  { icon: "📋", title: "20+ Clinical Case Studies", desc: "Hands-on real patient scenarios from intake to complete recovery." },
];

const GURUKUL_SERVICES = [
  { icon: "🎧", title: "24x7 Support System", desc: "Direct faculty query resolution anytime via student portal & mailbox." },
  { icon: "👥", title: "1:1 Personal Guidance", desc: "Dedicated mentor to guide your clinical practice and case reviews." },
  { icon: "💻", title: "Online Notes & Lectures", desc: "High-definition recorded lectures and digital comic-study material." },
  { icon: "🏛️", title: "Offline Marathon Classes", desc: "Immersive hands-on weekend practicals and diagnostic workshops." },
];

const TESTIMONIALS = [
  {
    name: "Dr. Ritika Solanki",
    role: "Certified Wellness Consultant (WCNA Batch 2025)",
    text: "The 18-month curriculum and practical internship gave me complete confidence to start my own Naturopathy center. The 10 comic-illustrated books make complex medical concepts crystal clear."
  },
  {
    name: "Aman Khatri",
    role: "Holistic Diet & Ayurveda Coach",
    text: "Book 1 to 10 cover every single real-world client situation, from personalized diet charts to herbal dosages. GURUKUL provided the exact framework I needed."
  },
  {
    name: "Simran Kaur",
    role: "Lifestyle Disease Reversal Specialist",
    text: "1:1 personal guidance and marathon classes helped me successfully consult over 80+ clients suffering from thyroid and metabolic disorders."
  }
];

export default function Home() {
  return (
    <div className="space-y-20 pb-20 overflow-hidden font-sans">

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/40">
        
        {/* Glow orb */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black tracking-wider uppercase">
              <span className="text-base">🪔</span>
              <span>GURUKUL · POWERED BY EDUCA VEDA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Ancient Gurukul Wisdom Meets <br />
              <span className="text-emerald-400 underline decoration-emerald-500/40 decoration-wavy">Modern Wellness Science</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Official <strong>18-Month Career Focused Training Course (WCNA)</strong> in Naturopathy &amp; Ayurveda with <strong>10 Comic-Illustrated Study Books</strong>, 20+ Clinical Case Studies, and <strong>6-Month Clinical Internship</strong>.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/courses"
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-7 py-4 rounded-full shadow-lg shadow-emerald-500/30 flex items-center gap-2 transition-all hover:scale-105"
              >
                <Sparkles size={18} />
                <span>Explore 10 3D Comic Books</span>
                <ArrowUpRight size={18} />
              </Link>
              <a
                href="#curriculum"
                className="bg-slate-900/90 border border-slate-700 hover:bg-slate-800 text-white font-bold px-7 py-4 rounded-full flex items-center gap-2 transition-all"
              >
                <span>Syllabus Breakdown</span>
              </a>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
              <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <h4 className="text-xl font-black text-emerald-400">18 Months</h4>
                <p className="text-[11px] text-slate-400 font-semibold">Theory + Practical</p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <h4 className="text-xl font-black text-emerald-400">10 Books</h4>
                <p className="text-[11px] text-slate-400 font-semibold">3D Comic Manuals</p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <h4 className="text-xl font-black text-emerald-400">20+</h4>
                <p className="text-[11px] text-slate-400 font-semibold">Clinical Cases</p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <h4 className="text-xl font-black text-emerald-400">6 Months</h4>
                <p className="text-[11px] text-slate-400 font-semibold">Clinical Internship</p>
              </div>
            </div>

          </div>

          {/* 3D Rotating Hero Book Preview */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full max-w-sm">
              <CourseCard course={WCNA_FLAGSHIP} />
            </div>
          </div>

        </div>
      </section>

      {/* 2. 10 COMIC-STYLE 3D BOOKS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-black uppercase">
            <span>📚 OFFICIAL STUDY MATERIAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            10 Official Comic-Illustrated Study Books
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every subject engineered as a vibrant, 3D rotating comic manual. From foundation coaching to disease reversal protocols and clinic setup.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_COMIC_BOOKS.map((book) => (
            <CourseCard key={book._id} course={book} />
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white font-black hover:bg-emerald-600 shadow-xl transition-all hover:scale-105"
          >
            <span>View Full Curriculum &amp; Order Books</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>

      </section>

      {/* 3. CURRICULUM & SUBJECTS (POSTER MATCH) */}
      <section id="curriculum" className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-black tracking-widest text-emerald-400 uppercase">
              ★ WCNA CORE SYLLABUS ★
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">
              Comprehensive 6-Subject Academic Rigor
            </h2>
            <p className="text-slate-400 text-sm">
              Taught by senior Vaidyas, Naturopathy doctors, and clinical wellness experts.
            </p>
          </div>

          {/* Core Subjects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CURRICULUM_SUBJECTS.map((sub, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 transition-all hover:-translate-y-1">
                <span className="text-4xl mb-4 block">{sub.icon}</span>
                <h3 className="text-lg font-black text-white mb-2">{sub.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{sub.desc}</p>
              </div>
            ))}
          </div>

          {/* Professional Development */}
          <div className="pt-10 border-t border-slate-800">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
              <span className="text-xs font-black text-amber-400 uppercase tracking-wider">
                💼 CAREER &amp; CLINIC ACCELERATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">Professional Development Modules</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {PROFESSIONAL_SKILLS.map((skill, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-2">
                  <span className="text-3xl block">{skill.icon}</span>
                  <h4 className="text-sm font-black text-white">{skill.title}</h4>
                  <p className="text-[11px] text-slate-400">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. GURUKUL 4-PILLAR SUPPORT SYSTEM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-tealDark uppercase tracking-wider">
            🏛️ GURUKUL ADVANTAGE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-charcoal">
            Our 4-Pillar Academic Support System
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GURUKUL_SERVICES.map((srv, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-paperDark shadow-sm hover:shadow-md transition-all text-center space-y-3">
              <span className="text-4xl block">{srv.icon}</span>
              <h3 className="text-base font-black text-charcoal">{srv.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. VERIFIED ALUMNI TESTIMONIALS */}
      <section className="bg-paper py-16 px-4 sm:px-6 lg:px-8 border-y border-paperDark">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-tealDark uppercase">
              ⭐ SUCCESS STORIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-charcoal">
              Empowering India's Next Wellness Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-paperDark shadow-sm flex flex-col justify-between gap-4">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.text}"
                </p>
                <div className="pt-4 border-t border-paperDark">
                  <h4 className="text-sm font-black text-charcoal">{t.name}</h4>
                  <p className="text-[11px] text-tealDark font-semibold">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. FINAL ENROLLMENT CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 text-white p-8 sm:p-14 border border-emerald-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
              ADMISSIONS OPEN 2026-2027
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Build Your Career in the Field of Wellness
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Empower Yourself · Heal Others · Create Impact. Join GURUKUL &amp; transform lives with verified WCNA certification.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              to="/courses"
              className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-center shadow-lg shadow-emerald-500/20"
            >
              Enroll in WCNA Course ➔
            </Link>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
