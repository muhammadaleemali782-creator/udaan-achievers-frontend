import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu, X, ChevronLeft, ChevronRight, RotateCw, ChevronDown, ChevronUp,
  Award, BookOpen, UserCheck, TrendingUp, CheckSquare, Clock,
  ExternalLink, ArrowRight
} from "lucide-react";

export default function MobileGurukulView() {
  const [activeBookIdx, setActiveBookIdx] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const books = [
    {
      id: "ayurveda",
      title: "AYURVEDA",
      subtitle: "THE SCIENCE OF LIFE",
      tag: "COMIC BOOK",
      footer1: "Ancient Healing",
      footer2: "Modern Understanding",
      image: "/books/ayurveda_comic_cover.jpg",
      color: "from-amber-700/20 via-emerald-800/30 to-amber-900/40"
    },
    {
      id: "ncert",
      title: "NCERT SCIENCE",
      subtitle: "PHYSICS · CHEMISTRY · BIO",
      tag: "COMIC BOOK",
      footer1: "Interactive Labs",
      footer2: "Concept Mastery",
      image: "/books/ncert_science_comic.jpg",
      color: "from-sky-700/20 via-blue-800/30 to-sky-900/40"
    },
    {
      id: "maths",
      title: "MATHEMATICS",
      subtitle: "MADE EASY",
      tag: "COMIC BOOK",
      footer1: "Formulas & Tricks",
      footer2: "Speed Problem Solving",
      image: "/books/math_comic_cover.jpg",
      color: "from-purple-700/20 via-amber-800/30 to-purple-900/40"
    },
    {
      id: "anatomy",
      title: "HUMAN ANATOMY",
      subtitle: "BODY SYSTEMS",
      tag: "COMIC BOOK",
      footer1: "Physiology & Organs",
      footer2: "3D Visual Guides",
      image: "/books/human_anatomy_comic.jpg",
      color: "from-rose-700/20 via-red-800/30 to-rose-900/40"
    }
  ];

  const nextBook = () => {
    setActiveBookIdx((prev) => (prev + 1) % books.length);
  };

  const prevBook = () => {
    setActiveBookIdx((prev) => (prev - 1 + books.length) % books.length);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="md:hidden min-h-screen bg-[#FAF7F0] text-[#243324] font-sans antialiased pb-12 select-none">
      
      {/* 1. TOP MOBILE APP HEADER */}
      <header className="sticky top-0 z-50 bg-[#FAF7F0]/95 backdrop-blur-md border-b border-[#E8E2D2] px-4 py-3 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src="/images/gurukul_logo.png" alt="Gurukul Logo" className="w-9 h-9 object-contain" />
          </div>
          <div>
            <h1 className="font-serif text-xl font-black text-[#1F3322] tracking-wider leading-none">
              GURUKUL
            </h1>
            <p className="font-serif text-[11px] text-[#556950] font-medium tracking-tight">
              Powered by <span className="text-[#3A5038] font-bold">Educa Veda</span>
            </p>
          </div>
        </Link>

        {/* Menu Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 rounded-xl border border-[#D5CDBC] bg-white flex items-center justify-center text-[#2A3F2D] shadow-xs active:scale-95 transition-transform"
          aria-label="Toggle Navigation"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="bg-[#FAF7F0] border-b border-[#E8E2D2] px-5 py-6 space-y-4 animate-fadeIn shadow-lg">
          <Link
            to="/courses"
            onClick={() => setMenuOpen(false)}
            className="block font-serif text-base font-bold text-[#1F3322] py-2 border-b border-[#E8E2D2]"
          >
            📚 Explore All 10 Comic Books
          </Link>
          <a
            href="https://messages-frontend-brown.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between font-serif text-base font-bold text-[#1F3322] py-2 border-b border-[#E8E2D2]"
          >
            <span>📬 EDUCA Mailbox Portal</span>
            <ExternalLink size={16} className="text-[#556950]" />
          </a>
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center py-3 rounded-full bg-[#4E5E3D] text-white font-serif text-sm font-bold shadow-md"
          >
            Student Login / Admissions
          </Link>
        </div>
      )}

      {/* 2. HERO SECTION */}
      <section className="relative px-4 pt-6 pb-8 text-center overflow-hidden">
        
        {/* Real Mortar & Pestle with Herbs Hero Illustration */}
        <div className="relative mx-auto w-52 h-32 mb-4 flex items-center justify-center">
          <img
            src="/images/mortar_pestle.png"
            alt="Ayurvedic Herbs and Mortar"
            className="w-full h-full object-contain filter drop-shadow-md"
          />
        </div>

        {/* Headings */}
        <p className="font-serif italic text-base text-[#384D35] mb-0.5 font-semibold tracking-wide">
          Ancient Wisdom.
        </p>
        <p className="font-serif italic text-base text-[#384D35] mb-3 font-semibold tracking-wide">
          Modern Education.
        </p>

        <h2 className="font-serif text-4xl font-black text-[#182C1B] tracking-widest mb-1 uppercase">
          GURUKUL
        </h2>

        <p className="font-serif text-sm text-[#4E624A] font-bold tracking-wider mb-3">
          Learn. Practice. Achieve.
        </p>

        <p className="font-sans text-xs text-[#526450] max-w-xs mx-auto leading-relaxed mb-6">
          A complete learning platform that blends the timeless knowledge of Ayurveda with modern education and technology.
        </p>

        {/* 6 Feature Grid Cards (2 rows of 3) */}
        <div className="grid grid-cols-3 gap-2.5 max-w-sm mx-auto">
          
          <div className="bg-white rounded-2xl p-2.5 border border-[#E6DFC9] shadow-xs flex flex-col items-center justify-center text-center gap-1.5 min-h-[82px]">
            <div className="w-7 h-7 rounded-full bg-[#F5F2E9] flex items-center justify-center text-[#B28228]">
              <UserCheck size={15} />
            </div>
            <span className="font-serif text-[10px] font-bold text-[#2A3E2C] leading-tight">
              Expert Mentorship
            </span>
          </div>

          <div className="bg-white rounded-2xl p-2.5 border border-[#E6DFC9] shadow-xs flex flex-col items-center justify-center text-center gap-1.5 min-h-[82px]">
            <div className="w-7 h-7 rounded-full bg-[#F5F2E9] flex items-center justify-center text-[#B28228]">
              <BookOpen size={15} />
            </div>
            <span className="font-serif text-[10px] font-bold text-[#2A3E2C] leading-tight">
              Premium Study Material
            </span>
          </div>

          <div className="bg-white rounded-2xl p-2.5 border border-[#E6DFC9] shadow-xs flex flex-col items-center justify-center text-center gap-1.5 min-h-[82px]">
            <div className="w-7 h-7 rounded-full bg-[#F5F2E9] flex items-center justify-center text-[#B28228]">
              <CheckSquare size={15} />
            </div>
            <span className="font-serif text-[10px] font-bold text-[#2A3E2C] leading-tight">
              Test Series &amp; Practice
            </span>
          </div>

          <div className="bg-white rounded-2xl p-2.5 border border-[#E6DFC9] shadow-xs flex flex-col items-center justify-center text-center gap-1.5 min-h-[82px]">
            <div className="w-7 h-7 rounded-full bg-[#F5F2E9] flex items-center justify-center text-[#B28228]">
              <TrendingUp size={15} />
            </div>
            <span className="font-serif text-[10px] font-bold text-[#2A3E2C] leading-tight">
              Progress Tracking
            </span>
          </div>

          <div className="bg-white rounded-2xl p-2.5 border border-[#E6DFC9] shadow-xs flex flex-col items-center justify-center text-center gap-1.5 min-h-[82px]">
            <div className="w-7 h-7 rounded-full bg-[#F5F2E9] flex items-center justify-center text-[#B28228]">
              <Award size={15} />
            </div>
            <span className="font-serif text-[10px] font-bold text-[#2A3E2C] leading-tight">
              Certificate of Excellence
            </span>
          </div>

          <div className="bg-white rounded-2xl p-2.5 border border-[#E6DFC9] shadow-xs flex flex-col items-center justify-center text-center gap-1.5 min-h-[82px]">
            <div className="w-7 h-7 rounded-full bg-[#F5F2E9] flex items-center justify-center text-[#B28228]">
              <Clock size={15} />
            </div>
            <span className="font-serif text-[10px] font-bold text-[#2A3E2C] leading-tight">
              Smart Analytics
            </span>
          </div>

        </div>
      </section>

      {/* 3. "EXPLORE OUR BOOKS" 3D COMIC CAROUSEL */}
      <section className="px-4 py-8 text-center">
        
        {/* Section Heading with Leaf Ornaments */}
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <span className="text-[#647C56] text-sm">🌿</span>
          <h3 className="font-serif text-2xl font-black text-[#1A2E1D]">
            Explore Our Books
          </h3>
          <span className="text-[#647C56] text-sm">🌿</span>
        </div>

        <p className="font-sans text-xs text-[#526450] max-w-xs mx-auto mb-6">
          Comics that make learning powerful, interactive &amp; unforgettable!
        </p>

        {/* 3D Carousel Viewport */}
        <div className="relative max-w-xs mx-auto flex items-center justify-center py-2">
          
          {/* Left Navigation Arrow */}
          <button
            onClick={prevBook}
            className="absolute left-0 z-30 w-8 h-8 rounded-full bg-white/95 border border-[#D5CDBC] shadow-md flex items-center justify-center text-[#2A3E2C] active:scale-90 transition-transform"
            aria-label="Previous Book"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Active Center 3D Comic Book with Swirling Golden Aura */}
          <div className="relative z-20 w-52 sm:w-56 mx-auto">
            
            {/* Swirling Golden Aura Ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-[#EAB308]/60 blur-xs animate-spin [animation-duration:12s] pointer-events-none"></div>
            <div className="absolute -inset-2 rounded-full border border-[#EAB308]/40 blur-xs pointer-events-none"></div>

            {/* 3D Book Container */}
            <div className="comic-book-container">
              <div className={`comic-book-card-3d rounded-2xl overflow-hidden shadow-2xl border-2 border-[#182B1B] bg-[#182B1B] ${isRotating ? "animate-float3dIdle" : ""}`}>
                
                <div className="comic-spine-effect"></div>
                
                <img
                  src={books[activeBookIdx].image}
                  alt={books[activeBookIdx].title}
                  className="w-full h-auto object-cover"
                  onError={(e) => { e.target.src = "/books/ayurveda_comic_cover.jpg"; }}
                />

              </div>
            </div>

          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={nextBook}
            className="absolute right-0 z-30 w-8 h-8 rounded-full bg-white/95 border border-[#D5CDBC] shadow-md flex items-center justify-center text-[#2A3E2C] active:scale-90 transition-transform"
            aria-label="Next Book"
          >
            <ChevronRight size={18} />
          </button>

        </div>

        {/* 3D Rotating Book Interactive Pill */}
        <div className="mt-4 flex items-center justify-center">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/90 border border-[#D5CDBC] text-[#344936] text-xs font-serif font-bold shadow-xs active:scale-95 transition-all"
          >
            <RotateCw size={13} className={isRotating ? "animate-spin [animation-duration:8s]" : ""} />
            <span>3D Rotating Book</span>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {books.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveBookIdx(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === activeBookIdx ? "w-5 bg-[#4E5E3D]" : "w-2 bg-[#D1C8B4]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </section>

      {/* 4. "WHY GURUKUL?" 4 FEATURE CARDS */}
      <section className="px-4 py-6">
        <h3 className="font-serif text-2xl font-black text-center text-[#1A2E1D] mb-5">
          Why Gurukul?
        </h3>

        <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
          
          {/* Card 1: Ayurvedic Wisdom */}
          <div className="bg-white rounded-2xl p-3.5 border border-[#E6DFC9] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-full bg-[#EDF3E7] flex items-center justify-center text-lg mb-2.5">
                🌿
              </div>
              <h4 className="font-serif text-xs font-bold text-[#1A2E1D] mb-1 leading-snug">
                Ayurvedic Wisdom
              </h4>
              <p className="font-sans text-[10px] text-[#556754] leading-relaxed">
                Dive into the ancient knowledge of Ayurveda and holistic healing.
              </p>
            </div>
          </div>

          {/* Card 2: Interactive Learning */}
          <div className="bg-white rounded-2xl p-3.5 border border-[#E6DFC9] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-full bg-[#EDF3E7] flex items-center justify-center text-lg mb-2.5">
                💡
              </div>
              <h4 className="font-serif text-xs font-bold text-[#1A2E1D] mb-1 leading-snug">
                Interactive Learning
              </h4>
              <p className="font-sans text-[10px] text-[#556754] leading-relaxed">
                Comics, animations &amp; smart notes for better understanding.
              </p>
            </div>
          </div>

          {/* Card 3: Test & Improve */}
          <div className="bg-white rounded-2xl p-3.5 border border-[#E6DFC9] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-full bg-[#EDF3E7] flex items-center justify-center text-lg mb-2.5">
                📋
              </div>
              <h4 className="font-serif text-xs font-bold text-[#1A2E1D] mb-1 leading-snug">
                Test &amp; Improve
              </h4>
              <p className="font-sans text-[10px] text-[#556754] leading-relaxed">
                Take tests, analyze performance and improve your score.
              </p>
            </div>
          </div>

          {/* Card 4: Track Progress */}
          <div className="bg-white rounded-2xl p-3.5 border border-[#E6DFC9] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-full bg-[#EDF3E7] flex items-center justify-center text-lg mb-2.5">
                📈
              </div>
              <h4 className="font-serif text-xs font-bold text-[#1A2E1D] mb-1 leading-snug">
                Track Progress
              </h4>
              <p className="font-sans text-[10px] text-[#556754] leading-relaxed">
                Monitor your learning journey and achieve your goals.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. "START YOUR LEARNING JOURNEY" CTA CARD */}
      <section className="px-4 py-4">
        <div className="max-w-sm mx-auto rounded-3xl bg-[#F0EAD8] border border-[#DDD3BC] p-5 relative overflow-hidden shadow-xs">
          
          <div className="relative z-10 max-w-[62%] space-y-2">
            <h3 className="font-serif text-base font-black text-[#1A2E1D] leading-snug">
              Start Your Learning Journey
            </h3>
            <p className="font-sans text-[10px] text-[#4E624A] leading-relaxed">
              Join thousands of learners and unlock the power of ancient wisdom with modern education.
            </p>
            <div className="pt-1.5">
              <Link
                to="/courses"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#4E5E3D] hover:bg-[#3D4D2E] text-white font-serif text-xs font-bold shadow-md active:scale-95 transition-all"
              >
                <span>Get Started Now</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Right Mortar & Herbs Artwork */}
          <div className="absolute -right-3 -bottom-3 w-32 h-32 pointer-events-none opacity-90">
            <img
              src="/images/mortar_pestle.png"
              alt="Herbs"
              className="w-full h-full object-contain filter drop-shadow-sm"
            />
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIAL CARD */}
      <section className="px-4 py-4">
        <div className="max-w-sm mx-auto bg-white rounded-3xl p-5 border border-[#E6DFC9] shadow-xs relative">
          
          {/* Quote Symbol */}
          <span className="text-[#B28228] font-serif text-2xl font-black block leading-none mb-1.5">
            ❝
          </span>

          <p className="font-serif text-xs text-[#2A3E2C] leading-relaxed font-medium mb-2.5">
            Gurukul made learning Ayurveda so interesting and easy through comics. Highly recommended!
          </p>

          {/* 5 Stars */}
          <div className="flex items-center gap-1 text-[#EAB308] text-xs mb-2.5">
            ★★★★★
          </div>

          {/* Student Info & Avatar */}
          <div className="flex items-center justify-between pt-2 border-t border-[#F2ECE0]">
            <div>
              <p className="font-serif text-[11px] font-bold text-[#1A2E1D]">
                — Aarav Sharma, Student
              </p>
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#A5BD96]">
              <img src="/images/student_avatar.png" alt="Aarav Sharma" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* 7. "STAY CONNECTED" SOCIAL MEDIA ICONS */}
      <section className="px-4 py-6 text-center">
        <h4 className="font-serif text-sm font-bold text-[#2A3E2C] mb-3.5">
          Stay Connected
        </h4>

        <div className="flex items-center justify-center gap-3.5">
          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white border border-[#E6DFC9] shadow-sm flex items-center justify-center text-[#FF0000] active:scale-95 transition-transform"
            aria-label="YouTube"
          >
            <span className="font-bold text-base">▶</span>
          </a>

          {/* Telegram */}
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white border border-[#E6DFC9] shadow-sm flex items-center justify-center text-[#0088CC] active:scale-95 transition-transform"
            aria-label="Telegram"
          >
            <span className="font-bold text-sm">✈</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white border border-[#E6DFC9] shadow-sm flex items-center justify-center text-[#E1306C] active:scale-95 transition-transform"
            aria-label="Instagram"
          >
            <span className="font-bold text-base">📸</span>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white border border-[#E6DFC9] shadow-sm flex items-center justify-center text-[#1877F2] active:scale-95 transition-transform"
            aria-label="Facebook"
          >
            <span className="font-bold text-base">f</span>
          </a>
        </div>
      </section>

      {/* 8. FOOTER WITH ACCORDIONS */}
      <footer className="px-4 pt-5 pb-6 border-t border-[#E8E2D2] text-center">
        
        {/* Brand */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <img src="/images/gurukul_logo.png" alt="Logo" className="w-8 h-8 object-contain" />
          <div className="text-left">
            <h4 className="font-serif text-lg font-black text-[#1F3322] leading-none">
              GURUKUL
            </h4>
            <p className="font-serif text-[10px] text-[#556950] font-medium">
              Powered by <span className="font-bold text-[#3A5038]">Educa Veda</span>
            </p>
          </div>
        </div>

        {/* Accordions */}
        <div className="max-w-sm mx-auto space-y-1.5 mb-6 text-left">
          
          {/* Quick Links */}
          <div className="border-b border-[#E8E2D2] pb-1.5">
            <button
              onClick={() => toggleAccordion("quick")}
              className="w-full flex items-center justify-between font-serif text-xs font-bold text-[#1A2E1D] py-1"
            >
              <span>Quick Links</span>
              {openAccordion === "quick" ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {openAccordion === "quick" && (
              <div className="pt-2 pl-2 space-y-1.5 text-xs text-[#526450] animate-fadeIn font-sans">
                <p><Link to="/courses">Explore All Books</Link></p>
                <p><Link to="/about">About Gurukul</Link></p>
                <p><Link to="/contact">Contact &amp; Admissions</Link></p>
              </div>
            )}
          </div>

          {/* Resources */}
          <div className="border-b border-[#E8E2D2] pb-1.5">
            <button
              onClick={() => toggleAccordion("resources")}
              className="w-full flex items-center justify-between font-serif text-xs font-bold text-[#1A2E1D] py-1"
            >
              <span>Resources</span>
              {openAccordion === "resources" ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {openAccordion === "resources" && (
              <div className="pt-2 pl-2 space-y-1.5 text-xs text-[#526450] animate-fadeIn font-sans">
                <p><Link to="/courses">Free Sample Chapters</Link></p>
                <p><a href="https://messages-frontend-brown.vercel.app" target="_blank" rel="noopener noreferrer">EDUCA Mailbox</a></p>
              </div>
            )}
          </div>

          {/* Company */}
          <div className="border-b border-[#E8E2D2] pb-1.5">
            <button
              onClick={() => toggleAccordion("company")}
              className="w-full flex items-center justify-between font-serif text-xs font-bold text-[#1A2E1D] py-1"
            >
              <span>Company</span>
              {openAccordion === "company" ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {openAccordion === "company" && (
              <div className="pt-2 pl-2 space-y-1.5 text-xs text-[#526450] animate-fadeIn font-sans">
                <p><Link to="/about">About Educa Veda</Link></p>
                <p><Link to="/contact">Careers &amp; Mentorship</Link></p>
              </div>
            )}
          </div>

          {/* Support */}
          <div className="border-b border-[#E8E2D2] pb-1.5">
            <button
              onClick={() => toggleAccordion("support")}
              className="w-full flex items-center justify-between font-serif text-xs font-bold text-[#1A2E1D] py-1"
            >
              <span>Support</span>
              {openAccordion === "support" ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {openAccordion === "support" && (
              <div className="pt-2 pl-2 space-y-1.5 text-xs text-[#526450] animate-fadeIn font-sans">
                <p><Link to="/contact">Help Center &amp; FAQs</Link></p>
                <p><Link to="/privacy">Student Support</Link></p>
              </div>
            )}
          </div>

        </div>

        {/* Copyright & Legal */}
        <p className="font-sans text-[10px] text-[#7A8A78] mb-1">
          © 2025 Gurukul. All Rights Reserved.
        </p>
        <div className="flex items-center justify-center gap-3 text-[10px] text-[#7A8A78]">
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms" className="hover:underline">Terms &amp; Conditions</Link>
        </div>

      </footer>

    </div>
  );
}
