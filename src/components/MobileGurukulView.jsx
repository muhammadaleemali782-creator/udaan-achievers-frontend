import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronLeft, ChevronRight, X, ExternalLink
} from "lucide-react";

export default function MobileGurukulView() {
  const [activeDot, setActiveDot] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const books = [
    {
      id: "b1",
      num: "1",
      title: "WELLNESS COACHING INTRODUCTION",
      tag: "COMIC BOOK",
      subtitle: "Begin Your Journey To Better Health",
      image: "/books/book1_wellness_coaching.png"
    },
    {
      id: "b2",
      num: "2",
      title: "NATUROPATHY BASICS",
      tag: "COMIC BOOK",
      subtitle: "The Power of Nature For Healing",
      image: "/books/book2_naturopathy_basics.png"
    },
    {
      id: "b3",
      num: "3",
      title: "AYURVEDA BASICS",
      tag: "COMIC BOOK",
      subtitle: "The Ancient Wisdom For Health",
      image: "/books/book3_ayurveda_basics.png"
    }
  ];

  const whyCards = [
    { id: "w1", title: "Ayurvedic Wisdom", image: "/images/why_card1.png" },
    { id: "w2", title: "Interactive Learning", image: "/images/why_card2.png" },
    { id: "w3", title: "Test & Improve", image: "/images/why_card3.png" },
    { id: "w4", title: "Track Your Progress", image: "/images/why_card4.png" }
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
    <div className="md:hidden min-h-screen bg-[#FBFAF6] text-[#223525] font-sans antialiased select-none pb-10">
      
      {/* ================= 1. CLEAN BOTANICAL HEADER & HERO & 5-FEATURE BAR ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="w-full relative">
          <img
            src="/images/top_header_and_hero.png"
            alt="GURUKUL • Powered by Educa Veda - Ancient Wisdom Modern Education"
            className="w-full h-auto object-cover block"
          />

          {/* Touch Hotspot: Hamburger Menu (Top Left) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute top-1 left-1 w-14 h-12 cursor-pointer z-20"
            aria-label="Toggle Menu"
          />

          {/* Touch Hotspot: Gurukul Logo (Top Center) */}
          <Link
            to="/"
            className="absolute top-1 left-1/4 right-1/4 h-12 cursor-pointer z-20"
            aria-label="Home"
          />

          {/* Touch Hotspot: Notification Bell (Top Right) */}
          <button
            onClick={() => navigate("/courses")}
            className="absolute top-1 right-1 w-14 h-12 cursor-pointer z-20"
            aria-label="Notifications"
          />

          {/* Touch Hotspot: 'Explore Books' Button */}
          <Link
            to="/courses"
            className="absolute top-[68%] left-1/2 -translate-x-1/2 w-44 h-11 rounded-full cursor-pointer z-20"
            aria-label="Explore Books"
          />

          {/* Touch Hotspots: 5 Feature Badges */}
          <div className="absolute bottom-[2%] left-0 right-0 h-[20%] flex z-20">
            <button onClick={() => navigate("/courses")} className="flex-1 cursor-pointer" aria-label="Mentorship" />
            <button onClick={() => navigate("/courses")} className="flex-1 cursor-pointer" aria-label="Study Material" />
            <button onClick={() => navigate("/courses")} className="flex-1 cursor-pointer" aria-label="Test Series" />
            <button onClick={() => navigate("/login")} className="flex-1 cursor-pointer" aria-label="Progress" />
            <button onClick={() => navigate("/about")} className="flex-1 cursor-pointer" aria-label="Certificate" />
          </div>
        </div>
      </section>

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

      {/* ================= 2. "EXPLORE OUR BOOKS" HORIZONTAL CAROUSEL ================= */}
      <section className="pt-5 pb-3 text-center overflow-hidden">
        
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
                  src="/books/book1_wellness_coaching.png"
                  alt="Book 1: Wellness Coaching Introduction"
                  className="w-full h-[225px] object-cover block"
                />
              </Link>
            </div>

            {/* Book 2 */}
            <div className="w-[152px] flex-shrink-0 snap-center rounded-2xl overflow-hidden shadow-md border-2 border-[#182B1B] bg-[#182B1B] transition-transform active:scale-95">
              <Link to="/courses">
                <img
                  src="/books/book2_naturopathy_basics.png"
                  alt="Book 2: Naturopathy Basics"
                  className="w-full h-[225px] object-cover block"
                />
              </Link>
            </div>

            {/* Book 3 */}
            <div className="w-[152px] flex-shrink-0 snap-center rounded-2xl overflow-hidden shadow-md border-2 border-[#182B1B] bg-[#182B1B] transition-transform active:scale-95">
              <Link to="/courses">
                <img
                  src="/books/book3_ayurveda_basics.png"
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

      {/* ================= 3. "WHY GURUKUL?" 4 CARDS SECTION ================= */}
      <section className="pt-2 pb-6 px-3">
        <div
          className="flex items-center gap-2.5 overflow-x-auto scrollbar-none py-2 px-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {whyCards.map((c) => (
            <div
              key={c.id}
              onClick={() => navigate("/courses")}
              className="w-[115px] sm:w-[124px] flex-shrink-0 rounded-2xl overflow-hidden shadow-xs border border-[#E8E2D0] bg-white cursor-pointer active:scale-95 transition-transform"
            >
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-auto object-cover block"
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
