import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu, X, ChevronLeft, ChevronRight, RotateCw, ChevronDown, ChevronUp,
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
      title: "AYURVEDA: THE SCIENCE OF LIFE",
      subtitle: "Ancient Healing Modern Understanding",
      image: "/books/ayurveda_comic_cover.jpg",
      leftNeighbor: "/books/ncert_science_comic.jpg",
      rightNeighbor: "/books/math_comic_cover.jpg"
    },
    {
      id: "ncert",
      title: "NCERT SCIENCE: COMIC BOOK",
      subtitle: "Physics · Chemistry · Biology",
      image: "/books/ncert_science_comic.jpg",
      leftNeighbor: "/books/human_anatomy_comic.jpg",
      rightNeighbor: "/books/ayurveda_comic_cover.jpg"
    },
    {
      id: "maths",
      title: "MATHEMATICS MADE EASY",
      subtitle: "Formulas · Logic · Puzzles",
      image: "/books/math_comic_cover.jpg",
      leftNeighbor: "/books/ayurveda_comic_cover.jpg",
      rightNeighbor: "/books/human_anatomy_comic.jpg"
    },
    {
      id: "anatomy",
      title: "HUMAN ANATOMY: COMIC BOOK",
      subtitle: "Body Systems & Organs",
      image: "/books/human_anatomy_comic.jpg",
      leftNeighbor: "/books/math_comic_cover.jpg",
      rightNeighbor: "/books/ncert_science_comic.jpg"
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

  const currentBook = books[activeBookIdx];
  const prevBookImg = books[(activeBookIdx - 1 + books.length) % books.length].image;
  const nextBookImg = books[(activeBookIdx + 1) % books.length].image;

  return (
    <div className="md:hidden min-h-screen bg-[#FBF9F4] text-[#223525] font-sans antialiased select-none pb-10">
      
      {/* ================= 1. HEADER ================= */}
      <header className="sticky top-0 z-50 bg-[#FBF9F4]/95 backdrop-blur-md border-b border-[#E8E2D2] px-4 py-2.5 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-10 h-10 flex items-center justify-center">
            <img 
              src="/images/gurukul_logo.png" 
              alt="Gurukul Logo" 
              className="w-10 h-10 object-contain" 
            />
          </div>
          <div>
            <h1 style={{ fontFamily: "'Cinzel', serif" }} className="text-xl font-black text-[#1C3220] tracking-wider leading-none">
              GURUKUL
            </h1>
            <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-[11px] text-[#556950] font-medium tracking-tight">
              Powered by <span className="text-[#384F36] font-bold">Educa Veda</span>
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
        <div className="bg-[#FBF9F4] border-b border-[#E8E2D2] px-5 py-6 space-y-4 animate-fadeIn shadow-lg">
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

      {/* ================= 2. HERO SECTION WITH RICH MANUSCRIPT ARTWORK ================= */}
      <section className="relative px-3 pt-3 pb-6 text-center">
        
        {/* Full Rich Botanical Manuscript Banner (Direct from Ref Image) */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-xs border border-[#E8E2D0] bg-[#FAF7EE] mb-4">
          <img
            src="/images/hero_manuscript_bg.jpg"
            alt="Ancient Wisdom Modern Education - GURUKUL"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* 6 Feature Grid Cards (2 rows of 3 compact cards extracted directly from ref image) */}
        <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
          
          <div className="rounded-2xl overflow-hidden border border-[#E6DFC9] shadow-xs bg-white active:scale-95 transition-transform">
            <img src="/images/feat_mentorship.jpg" alt="Expert Mentorship" className="w-full h-auto object-cover" />
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#E6DFC9] shadow-xs bg-white active:scale-95 transition-transform">
            <img src="/images/feat_material.jpg" alt="Premium Study Material" className="w-full h-auto object-cover" />
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#E6DFC9] shadow-xs bg-white active:scale-95 transition-transform">
            <img src="/images/feat_test.jpg" alt="Test Series & Practice" className="w-full h-auto object-cover" />
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#E6DFC9] shadow-xs bg-white active:scale-95 transition-transform">
            <img src="/images/feat_progress.jpg" alt="Progress Tracking" className="w-full h-auto object-cover" />
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#E6DFC9] shadow-xs bg-white active:scale-95 transition-transform">
            <img src="/images/feat_certificate.jpg" alt="Certificate of Excellence" className="w-full h-auto object-cover" />
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#E6DFC9] shadow-xs bg-white active:scale-95 transition-transform">
            <img src="/images/feat_analytics.jpg" alt="Smart Analytics" className="w-full h-auto object-cover" />
          </div>

        </div>
      </section>

      {/* ================= 3. "EXPLORE OUR BOOKS" 3D COMIC CAROUSEL ================= */}
      <section className="px-3 py-6 text-center overflow-hidden">
        
        {/* Section Heading with Leaf Ornaments */}
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="text-[#5B734E] text-sm">🌿</span>
          <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl font-black text-[#1A2E1D]">
            Explore Our Books
          </h3>
          <span className="text-[#5B734E] text-sm">🌿</span>
        </div>

        <p className="text-xs text-[#526450] max-w-xs mx-auto mb-5 font-medium">
          Comics that make learning powerful, interactive &amp; unforgettable!
        </p>

        {/* 3D Carousel Stage with 3 Visible Books */}
        <div className="relative max-w-xs sm:max-w-sm mx-auto flex items-center justify-center py-2 min-h-[270px]">
          
          {/* Left Arrow Button */}
          <button
            onClick={prevBook}
            className="absolute left-0 z-30 w-8 h-8 rounded-full bg-white/95 border border-[#D5CDBC] shadow-md flex items-center justify-center text-[#2A3E2C] active:scale-90 transition-transform"
            aria-label="Previous Book"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Left Peeking Perspective Book */}
          <div className="absolute -left-5 z-10 w-28 scale-[0.84] opacity-70 transform -rotate-6 transition-all duration-300 pointer-events-none">
            <div className="rounded-xl overflow-hidden shadow-lg border border-[#1A2E1D]/50 bg-[#1A2E1D]">
              <img
                src={prevBookImg}
                alt="Previous Book"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Active Center 3D Comic Book with Swirling Golden Aura */}
          <div className="relative z-20 w-48 sm:w-52 mx-auto">
            
            {/* Swirling Golden Aura Ring */}
            <div className="absolute -inset-3 rounded-full border-2 border-[#EAB308]/60 blur-xs animate-spin [animation-duration:10s] pointer-events-none"></div>
            <div className="absolute -inset-1.5 rounded-full border border-[#EAB308]/40 blur-xs pointer-events-none"></div>

            {/* 3D Book Container */}
            <div className="comic-book-container">
              <div className={`comic-book-card-3d rounded-2xl overflow-hidden shadow-2xl border-2 border-[#182B1B] bg-[#182B1B] ${isRotating ? "animate-float3dIdle" : ""}`}>
                <div className="comic-spine-effect"></div>
                <img
                  src={currentBook.image}
                  alt={currentBook.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>

          {/* Right Peeking Perspective Book */}
          <div className="absolute -right-5 z-10 w-28 scale-[0.84] opacity-70 transform rotate-6 transition-all duration-300 pointer-events-none">
            <div className="rounded-xl overflow-hidden shadow-lg border border-[#1A2E1D]/50 bg-[#1A2E1D]">
              <img
                src={nextBookImg}
                alt="Next Book"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextBook}
            className="absolute right-0 z-30 w-8 h-8 rounded-full bg-white/95 border border-[#D5CDBC] shadow-md flex items-center justify-center text-[#2A3E2C] active:scale-90 transition-transform"
            aria-label="Next Book"
          >
            <ChevronRight size={18} />
          </button>

        </div>

        {/* 3D Rotating Book Interactive Pill */}
        <div className="mt-3 flex items-center justify-center">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-[#D5CDBC] text-[#344936] text-xs font-serif font-bold shadow-xs active:scale-95 transition-all"
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

      {/* ================= 4. "WHY GURUKUL?" 4 FEATURE CARDS ================= */}
      <section className="px-4 py-6">
        <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl font-black text-center text-[#1A2E1D] mb-5">
          Why Gurukul?
        </h3>

        <div className="grid grid-cols-2 gap-3 max-w-xs sm:max-w-sm mx-auto">
          
          {/* Card 1: Ayurvedic Wisdom */}
          <div className="bg-white rounded-2xl p-3.5 border border-[#E8E2D0] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-full overflow-hidden mb-2.5">
                <img src="/images/why_ayurveda_icon.png" alt="Ayurvedic Wisdom" className="w-full h-full object-cover" />
              </div>
              <h4 style={{ fontFamily: "'Playfair Display', serif" }} className="text-xs font-bold text-[#1A2E1D] mb-1 leading-snug">
                Ayurvedic Wisdom
              </h4>
              <p className="text-[10px] text-[#556754] leading-relaxed">
                Dive into the ancient knowledge of Ayurveda and holistic healing.
              </p>
            </div>
          </div>

          {/* Card 2: Interactive Learning */}
          <div className="bg-white rounded-2xl p-3.5 border border-[#E8E2D0] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-full overflow-hidden mb-2.5">
                <img src="/images/why_learn_icon.png" alt="Interactive Learning" className="w-full h-full object-cover" />
              </div>
              <h4 style={{ fontFamily: "'Playfair Display', serif" }} className="text-xs font-bold text-[#1A2E1D] mb-1 leading-snug">
                Interactive Learning
              </h4>
              <p className="text-[10px] text-[#556754] leading-relaxed">
                Comics, animations &amp; smart notes for better understanding.
              </p>
            </div>
          </div>

          {/* Card 3: Test & Improve */}
          <div className="bg-white rounded-2xl p-3.5 border border-[#E8E2D0] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-full overflow-hidden mb-2.5">
                <img src="/images/why_test_icon.png" alt="Test & Improve" className="w-full h-full object-cover" />
              </div>
              <h4 style={{ fontFamily: "'Playfair Display', serif" }} className="text-xs font-bold text-[#1A2E1D] mb-1 leading-snug">
                Test &amp; Improve
              </h4>
              <p className="text-[10px] text-[#556754] leading-relaxed">
                Take tests, analyze performance and improve your score.
              </p>
            </div>
          </div>

          {/* Card 4: Track Progress */}
          <div className="bg-white rounded-2xl p-3.5 border border-[#E8E2D0] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-full overflow-hidden mb-2.5">
                <img src="/images/why_track_icon.png" alt="Track Progress" className="w-full h-full object-cover" />
              </div>
              <h4 style={{ fontFamily: "'Playfair Display', serif" }} className="text-xs font-bold text-[#1A2E1D] mb-1 leading-snug">
                Track Progress
              </h4>
              <p className="text-[10px] text-[#556754] leading-relaxed">
                Monitor your learning journey and achieve your goals.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 5. "START YOUR LEARNING JOURNEY" CTA CARD ================= */}
      <section className="px-4 py-4">
        <div className="max-w-xs sm:max-w-sm mx-auto rounded-3xl bg-[#F0EAD8] border border-[#DDD3BC] p-5 relative overflow-hidden shadow-xs">
          
          <div className="relative z-10 max-w-[62%] space-y-2">
            <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-base font-bold text-[#1A2E1D] leading-snug">
              Start Your Learning Journey
            </h3>
            <p className="text-[10px] text-[#4E624A] leading-relaxed">
              Join thousands of learners and unlock the power of ancient wisdom with modern education.
            </p>
            <div className="pt-1.5">
              <Link
                to="/courses"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#4E5E3D] hover:bg-[#3D4D2E] text-white text-xs font-bold shadow-md active:scale-95 transition-all"
              >
                <span>Get Started Now</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Right Real Mortar & Herbs Artwork */}
          <div className="absolute -right-2 -bottom-2 w-32 h-32 pointer-events-none opacity-95">
            <img
              src="/images/cta_herbs.png"
              alt="Herbs"
              className="w-full h-full object-contain filter drop-shadow-sm"
            />
          </div>

        </div>
      </section>

      {/* ================= 6. TESTIMONIAL CARD ================= */}
      <section className="px-4 py-4">
        <div className="max-w-xs sm:max-w-sm mx-auto bg-white rounded-3xl p-5 border border-[#E8E2D0] shadow-xs relative">
          
          {/* Quote Symbol */}
          <span className="text-[#B28228] font-serif text-2xl font-black block leading-none mb-1.5">
            ❝
          </span>

          <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-xs text-[#2A3E2C] leading-relaxed font-normal mb-2.5">
            Gurukul made learning Ayurveda so interesting and easy through comics. Highly recommended!
          </p>

          {/* 5 Stars */}
          <div className="flex items-center gap-1 text-[#EAB308] text-xs mb-2.5">
            ★★★★★
          </div>

          {/* Student Info & Avatar */}
          <div className="flex items-center justify-between pt-2 border-t border-[#F2ECE0]">
            <div>
              <p className="text-[11px] font-bold text-[#1A2E1D]">
                — Aarav Sharma, Student
              </p>
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#A5BD96]">
              <img 
                src="/images/student_avatar.png" 
                alt="Aarav Sharma" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= 7. "STAY CONNECTED" SOCIAL MEDIA ICONS ================= */}
      <section className="px-4 py-6 text-center">
        <h4 style={{ fontFamily: "'Playfair Display', serif" }} className="text-sm font-bold text-[#2A3E2C] mb-3.5">
          Stay Connected
        </h4>

        <div className="flex items-center justify-center gap-3.5">
          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white border border-[#E8E2D0] shadow-sm flex items-center justify-center text-[#FF0000] active:scale-95 transition-transform"
            aria-label="YouTube"
          >
            <span className="font-bold text-base">▶</span>
          </a>

          {/* Telegram */}
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white border border-[#E8E2D0] shadow-sm flex items-center justify-center text-[#0088CC] active:scale-95 transition-transform"
            aria-label="Telegram"
          >
            <span className="font-bold text-sm">✈</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white border border-[#E8E2D0] shadow-sm flex items-center justify-center text-[#E1306C] active:scale-95 transition-transform"
            aria-label="Instagram"
          >
            <span className="font-bold text-base">📸</span>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white border border-[#E8E2D0] shadow-sm flex items-center justify-center text-[#1877F2] active:scale-95 transition-transform"
            aria-label="Facebook"
          >
            <span className="font-bold text-base">f</span>
          </a>
        </div>
      </section>

      {/* ================= 8. FOOTER WITH ACCORDIONS ================= */}
      <footer className="px-4 pt-5 pb-6 border-t border-[#E8E2D2] text-center">
        
        {/* Brand */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <img src="/images/gurukul_logo.png" alt="Logo" className="w-8 h-8 object-contain" />
          <div className="text-left">
            <h4 style={{ fontFamily: "'Cinzel', serif" }} className="text-lg font-bold text-[#1F3322] leading-none">
              GURUKUL
            </h4>
            <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-[10px] text-[#556950] font-normal">
              Powered by <span className="font-semibold text-[#3A5038]">Educa Veda</span>
            </p>
          </div>
        </div>

        {/* Accordions */}
        <div className="max-w-xs sm:max-w-sm mx-auto space-y-1.5 mb-6 text-left">
          
          {/* Quick Links */}
          <div className="border-b border-[#E8E2D2] pb-1.5">
            <button
              onClick={() => toggleAccordion("quick")}
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="w-full flex items-center justify-between text-xs font-bold text-[#1A2E1D] py-1"
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
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="w-full flex items-center justify-between text-xs font-bold text-[#1A2E1D] py-1"
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
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="w-full flex items-center justify-between text-xs font-bold text-[#1A2E1D] py-1"
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
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="w-full flex items-center justify-between text-xs font-bold text-[#1A2E1D] py-1"
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
        <p className="text-[10px] text-[#7A8A78] mb-1">
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
