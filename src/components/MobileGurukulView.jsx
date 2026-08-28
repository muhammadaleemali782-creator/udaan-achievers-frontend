import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu, X, Bell, ChevronLeft, ChevronRight, ArrowRight,
  UserCheck, BookOpen, ClipboardCheck, TrendingUp, Award, ExternalLink
} from "lucide-react";

export default function MobileGurukulView() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDot, setActiveDot] = useState(0);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const books = [
    {
      id: "b1",
      num: "1",
      title: "WELLNESS COACHING INTRODUCTION",
      tag: "COMIC BOOK",
      subtitle: "Begin Your Journey To Better Health",
      image: "/books/book1_wellness_coaching.jpg"
    },
    {
      id: "b2",
      num: "2",
      title: "NATUROPATHY BASICS",
      tag: "COMIC BOOK",
      subtitle: "The Power of Nature For Healing",
      image: "/books/book2_naturopathy_basics.jpg"
    },
    {
      id: "b3",
      num: "3",
      title: "AYURVEDA BASICS",
      tag: "COMIC BOOK",
      subtitle: "The Ancient Wisdom For Health",
      image: "/books/book3_ayurveda_basics.jpg"
    }
  ];

  const whyFeatures = [
    {
      id: "w1",
      icon: "🌿",
      iconBg: "bg-[#EDF5E7]",
      title: "Ayurvedic Wisdom",
      desc: "Dive into the ancient knowledge of Ayurveda and holistic healing."
    },
    {
      id: "w2",
      icon: "💡",
      iconBg: "bg-[#FCF7E8]",
      title: "Interactive Learning",
      desc: "Comics, animations & smart notes for better understanding."
    },
    {
      id: "w3",
      icon: "📋",
      iconBg: "bg-[#F7EEF5]",
      title: "Test & Improve",
      desc: "Take tests, analyze performance and improve your score."
    },
    {
      id: "w4",
      icon: "📈",
      iconBg: "bg-[#EEF8F2]",
      title: "Track Your Progress",
      desc: "Monitor your learning journey and achieve your goals."
    }
  ];

  const handleScroll = (e) => {
    const left = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    const idx = Math.round(left / (width * 0.45));
    setActiveDot(Math.min(idx, 3));
  };

  const scrollByAmount = (amt) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amt, behavior: "smooth" });
    }
  };

  return (
    <div className="md:hidden min-h-screen bg-[#FBFAF6] text-[#223525] font-sans antialiased select-none pb-12">
      
      {/* ================= 1. CRISP TOP STATUS & NAV BAR ================= */}
      <header className="sticky top-0 z-50 bg-[#FBFAF6]/98 backdrop-blur-md px-4 py-2.5 flex items-center justify-between border-none">
        {/* Left: Clean Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#1F3322] p-1 active:scale-90 transition-transform cursor-pointer"
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Center: Brand Logo + Typography */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center">
            <span className="text-2xl leading-none">🪔</span>
          </div>
          <div className="text-left">
            <h1 style={{ fontFamily: "'Cinzel', serif" }} className="text-lg font-black text-[#1C3220] tracking-wider leading-none">
              GURUKUL
            </h1>
            <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-[10px] text-[#556950] font-normal leading-tight">
              Powered by <span className="text-[#384F36] font-bold">Educa Veda</span>
            </p>
          </div>
        </Link>

        {/* Right: Notification Bell with Orange Dot */}
        <button
          onClick={() => navigate("/courses")}
          className="relative text-[#1F3322] p-1 active:scale-90 transition-transform cursor-pointer"
          aria-label="Notifications"
        >
          <Bell size={22} />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#E57A24] ring-2 ring-[#FBFAF6]"></span>
        </button>
      </header>

      {/* Drawer Menu */}
      {menuOpen && (
        <div className="bg-[#FBFAF6] border-b border-[#EAE3D2] px-5 py-5 space-y-3.5 animate-fadeIn shadow-lg">
          <div className="flex items-center justify-between pb-2 border-b border-[#EAE3D2]">
            <span className="font-serif font-bold text-sm text-[#1C3220]">Menu</span>
            <button onClick={() => setMenuOpen(false)}><X size={20} /></button>
          </div>
          <Link
            to="/courses"
            onClick={() => setMenuOpen(false)}
            className="block font-serif text-sm font-bold text-[#1C3220] py-1.5"
          >
            📚 Explore All 10 Comic Books
          </Link>
          <a
            href="https://messages-frontend-brown.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between font-serif text-sm font-bold text-[#1C3220] py-1.5"
          >
            <span>📬 EDUCA Mailbox Portal</span>
            <ExternalLink size={15} className="text-[#556950]" />
          </a>
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center py-2.5 rounded-full bg-[#2A442A] text-white font-serif text-xs font-bold shadow-md mt-2"
          >
            Student Login / Admissions
          </Link>
        </div>
      )}

      {/* ================= 2. HERO SECTION (RICH BOTANICAL ARTWORK + CRISP VECTOR TYPOGRAPHY) ================= */}
      <section className="relative px-4 pt-3 pb-4 text-center overflow-hidden">
        
        {/* Botanical Artwork Background */}
        <div 
          className="absolute inset-0 z-0 bg-contain bg-no-repeat bg-center opacity-30 pointer-events-none"
          style={{ backgroundImage: "url('/images/botanical_hero_art.jpg')" }}
        />

        <div className="relative z-10">
          {/* Ancient Wisdom. Modern Education. */}
          <p style={{ fontFamily: "'Playfair Display', serif" }} className="italic text-xs sm:text-sm text-[#7A5B3E] font-bold tracking-wide mb-1">
            Ancient Wisdom. Modern Education.
          </p>

          {/* GURUKUL Title */}
          <h2 style={{ fontFamily: "'Cinzel', serif" }} className="text-3xl sm:text-4xl font-extrabold text-[#193620] tracking-[0.18em] my-1 uppercase">
            GURUKUL
          </h2>

          {/* Learn. Practice. Achieve. */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-[#3E553A] font-bold mb-2">
            <span>🌿</span>
            <span style={{ fontFamily: "'Playfair Display', serif" }}>Learn. Practice. Achieve.</span>
            <span>🌿</span>
          </div>

          {/* Description */}
          <p className="text-xs text-[#3D523C] max-w-xs mx-auto leading-relaxed mb-4 font-medium">
            A complete learning platform that blends the timeless knowledge of Ayurveda with modern education and technology.
          </p>

          {/* Explore Books Button */}
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2A442A] hover:bg-[#1E331E] text-white text-xs font-bold shadow-md active:scale-95 transition-all mb-4"
          >
            <span>Explore Books</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* 5-Feature Floating Bar (Crisp Native React Card with Vector SVG Icons) */}
        <div className="relative z-20 mt-1 max-w-sm mx-auto bg-white rounded-2xl p-2.5 border border-[#E6E0CF] shadow-sm flex items-center justify-between">
          
          <button onClick={() => navigate("/courses")} className="flex-1 flex flex-col items-center gap-1 text-center cursor-pointer active:scale-95 transition-transform">
            <div className="w-7 h-7 rounded-full bg-[#EEF5E8] flex items-center justify-center text-[#3B6632]">
              <UserCheck size={14} />
            </div>
            <span className="text-[9px] font-bold text-[#2A3E2D] leading-tight">Mentorship</span>
          </button>

          <button onClick={() => navigate("/courses")} className="flex-1 flex flex-col items-center gap-1 text-center cursor-pointer active:scale-95 transition-transform">
            <div className="w-7 h-7 rounded-full bg-[#FCF7E8] flex items-center justify-center text-[#B28228]">
              <BookOpen size={14} />
            </div>
            <span className="text-[9px] font-bold text-[#2A3E2D] leading-tight">Study<br />Material</span>
          </button>

          <button onClick={() => navigate("/courses")} className="flex-1 flex flex-col items-center gap-1 text-center cursor-pointer active:scale-95 transition-transform">
            <div className="w-7 h-7 rounded-full bg-[#F7EEF5] flex items-center justify-center text-[#8B3B82]">
              <ClipboardCheck size={14} />
            </div>
            <span className="text-[9px] font-bold text-[#2A3E2D] leading-tight">Test<br />Series</span>
          </button>

          <button onClick={() => navigate("/login")} className="flex-1 flex flex-col items-center gap-1 text-center cursor-pointer active:scale-95 transition-transform">
            <div className="w-7 h-7 rounded-full bg-[#EEF8F2] flex items-center justify-center text-[#2E8B57]">
              <TrendingUp size={14} />
            </div>
            <span className="text-[9px] font-bold text-[#2A3E2D] leading-tight">Progress</span>
          </button>

          <button onClick={() => navigate("/about")} className="flex-1 flex flex-col items-center gap-1 text-center cursor-pointer active:scale-95 transition-transform">
            <div className="w-7 h-7 rounded-full bg-[#EDF3F8] flex items-center justify-center text-[#2B6CB0]">
              <Award size={14} />
            </div>
            <span className="text-[9px] font-bold text-[#2A3E2D] leading-tight">Certificate</span>
          </button>

        </div>
      </section>

      {/* ================= 3. "EXPLORE OUR BOOKS" HORIZONTAL CAROUSEL ================= */}
      <section className="pt-4 pb-3 text-center overflow-hidden">
        
        {/* Section Heading with Leaf Ornaments */}
        <div className="flex items-center justify-center gap-2 mb-0.5 px-4">
          <span className="text-[#4E6743] text-sm">🌿</span>
          <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl font-bold text-[#1A2E1D]">
            Explore Our Books
          </h3>
          <span className="text-[#4E6743] text-sm">🌿</span>
        </div>

        <p className="text-[11px] text-[#556754] max-w-xs mx-auto mb-4 font-normal px-4">
          Comics that make learning powerful, interactive &amp; unforgettable!
        </p>

        {/* Carousel with Left/Right Arrows & Horizontal Scroll Strip */}
        <div className="relative w-full py-1">
          
          {/* Left Arrow Button */}
          <button
            onClick={() => scrollByAmount(-170)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white border border-[#D5CDBC] shadow-md flex items-center justify-center text-[#2A3E2C] active:scale-90 transition-transform cursor-pointer"
            aria-label="Previous Book"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Horizontal Scrollable Book Strip */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex items-center gap-3.5 overflow-x-auto scrollbar-none px-6 py-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Book 1 */}
            <div className="w-[152px] flex-shrink-0 snap-center rounded-2xl overflow-hidden shadow-md border-2 border-[#182B1B] bg-[#182B1B] transition-transform active:scale-95">
              <Link to="/courses">
                <img
                  src="/books/book1_wellness_coaching.jpg"
                  alt="Book 1: Wellness Coaching Introduction"
                  className="w-full h-[225px] object-cover block"
                />
              </Link>
            </div>

            {/* Book 2 */}
            <div className="w-[152px] flex-shrink-0 snap-center rounded-2xl overflow-hidden shadow-md border-2 border-[#182B1B] bg-[#182B1B] transition-transform active:scale-95">
              <Link to="/courses">
                <img
                  src="/books/book2_naturopathy_basics.jpg"
                  alt="Book 2: Naturopathy Basics"
                  className="w-full h-[225px] object-cover block"
                />
              </Link>
            </div>

            {/* Book 3 */}
            <div className="w-[152px] flex-shrink-0 snap-center rounded-2xl overflow-hidden shadow-md border-2 border-[#182B1B] bg-[#182B1B] transition-transform active:scale-95">
              <Link to="/courses">
                <img
                  src="/books/book3_ayurveda_basics.jpg"
                  alt="Book 3: Ayurveda Basics"
                  className="w-full h-[225px] object-cover block"
                />
              </Link>
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scrollByAmount(170)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white border border-[#D5CDBC] shadow-md flex items-center justify-center text-[#2A3E2C] active:scale-90 transition-transform cursor-pointer"
            aria-label="Next Book"
          >
            <ChevronRight size={18} />
          </button>

        </div>

        {/* 4 Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {[0, 1, 2, 3].map((idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === activeDot ? "bg-[#3B4D36]" : "bg-[#D5CDBC]"
              }`}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <p className="text-[11px] text-[#4E624A] font-medium mt-1.5 flex items-center justify-center gap-1">
          <span>Scroll left to explore more books</span>
          <span>👆</span>
        </p>

      </section>

      {/* ================= 4. "WHY GURUKUL?" 4 CRISP NATIVE CARDS ================= */}
      <section className="pt-2 pb-6 px-3">
        <div
          className="flex items-center gap-2.5 overflow-x-auto scrollbar-none py-2 px-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {whyFeatures.map((c) => (
            <div
              key={c.id}
              onClick={() => navigate("/courses")}
              className="w-[124px] sm:w-[132px] flex-shrink-0 rounded-2xl bg-white p-3 border border-[#E8E2D0] shadow-xs flex flex-col justify-between text-center items-center cursor-pointer active:scale-95 transition-transform"
            >
              <div>
                <div className={`w-9 h-9 rounded-full ${c.iconBg} flex items-center justify-center text-lg mb-2 mx-auto`}>
                  {c.icon}
                </div>
                <h4 style={{ fontFamily: "'Playfair Display', serif" }} className="text-xs font-bold text-[#1A2E1D] leading-tight mb-1">
                  {c.title}
                </h4>
                <p className="text-[9.5px] text-[#556754] leading-tight">
                  {c.desc}
                </p>
              </div>
              <div className="mt-2 text-[#B28228]">
                <ArrowRight size={13} />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
