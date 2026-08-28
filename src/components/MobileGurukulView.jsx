import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu, X, Bell, ChevronLeft, ChevronRight, ArrowRight, ExternalLink
} from "lucide-react";

export default function MobileGurukulView() {
  const [activeBookIdx, setActiveBookIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const nextBook = () => {
    setActiveBookIdx((prev) => (prev + 1) % books.length);
  };

  const prevBook = () => {
    setActiveBookIdx((prev) => (prev - 1 + books.length) % books.length);
  };

  return (
    <div className="md:hidden min-h-screen bg-[#FBF9F4] text-[#223525] font-sans antialiased select-none pb-12">
      
      {/* ================= 1. TOP STATUS & NAV BAR ================= */}
      <header className="sticky top-0 z-50 bg-[#FBF9F4]/98 backdrop-blur-md border-b border-[#EAE3D2] px-4 py-3 flex items-center justify-between">
        {/* Left: Clean Hamburger Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#203322] p-1 active:scale-95 transition-transform"
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Center: Gurukul Lotus Logo + Brand Name */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/gurukul_header_logo.png"
            alt="Gurukul Logo"
            className="h-8 object-contain"
          />
        </Link>

        {/* Right: Notification Bell with Orange Dot */}
        <button
          className="relative text-[#203322] p-1 active:scale-95 transition-transform"
          aria-label="Notifications"
        >
          <Bell size={22} />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#E57A24] ring-2 ring-[#FBF9F4]"></span>
        </button>
      </header>

      {/* Drawer Menu */}
      {menuOpen && (
        <div className="bg-[#FBF9F4] border-b border-[#EAE3D2] px-5 py-5 space-y-3.5 animate-fadeIn shadow-lg">
          <Link
            to="/courses"
            onClick={() => setMenuOpen(false)}
            className="block font-serif text-sm font-bold text-[#1C3220] py-2 border-b border-[#EAE3D2]"
          >
            📚 Explore All 10 Comic Books
          </Link>
          <a
            href="https://messages-frontend-brown.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between font-serif text-sm font-bold text-[#1C3220] py-2 border-b border-[#EAE3D2]"
          >
            <span>📬 EDUCA Mailbox Portal</span>
            <ExternalLink size={15} className="text-[#556950]" />
          </a>
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center py-2.5 rounded-full bg-[#2A442A] text-white font-serif text-xs font-bold shadow-md"
          >
            Student Login / Admissions
          </Link>
        </div>
      )}

      {/* ================= 2. HERO SECTION (FULL-BLEED BOTANICAL ARTWORK) ================= */}
      <section className="relative w-full overflow-hidden">
        {/* Full-Bleed Rich Botanical Manuscript Banner from Mockup */}
        <div className="w-full relative">
          <img
            src="/images/hero_full_banner.jpg"
            alt="Ancient Wisdom Modern Education - GURUKUL"
            className="w-full h-auto object-cover block"
          />
          {/* Clickable Overlay on 'Explore Books' button inside banner */}
          <Link
            to="/courses"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-44 h-10 rounded-full opacity-0 cursor-pointer"
            aria-label="Explore Books"
          />
        </div>
      </section>

      {/* ================= 3. 5-FEATURE FLOATING BAR ================= */}
      <section className="px-3.5 -mt-3 relative z-20">
        <div className="rounded-2xl overflow-hidden shadow-sm border border-[#E8E2D0] bg-white">
          <img
            src="/images/five_features_bar.jpg"
            alt="Mentorship · Study Material · Test Series · Progress · Certificate"
            className="w-full h-auto object-cover block"
          />
        </div>
      </section>

      {/* ================= 4. "EXPLORE OUR BOOKS" HORIZONTAL CAROUSEL ================= */}
      <section className="px-3 pt-6 pb-4 text-center overflow-hidden">
        
        {/* Section Heading with Leaf Ornaments */}
        <div className="flex items-center justify-center gap-2 mb-0.5">
          <span className="text-[#4E6743] text-sm">🌿</span>
          <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl font-bold text-[#1A2E1D]">
            Explore Our Books
          </h3>
          <span className="text-[#4E6743] text-sm">🌿</span>
        </div>

        <p className="text-[11px] text-[#556754] max-w-xs mx-auto mb-4 font-normal">
          Comics that make learning powerful, interactive &amp; unforgettable!
        </p>

        {/* Carousel Books Row with Numbers 1, 2, 3 */}
        <div className="relative max-w-full mx-auto flex items-center justify-center py-1">
          
          {/* Left Arrow Button */}
          <button
            onClick={prevBook}
            className="absolute left-1 z-30 w-8 h-8 rounded-full bg-white/95 border border-[#D5CDBC] shadow-md flex items-center justify-center text-[#2A3E2C] active:scale-90 transition-transform"
            aria-label="Previous Book"
          >
            <ChevronLeft size={18} />
          </button>

          {/* 3 Books Visible in Row (Book 1, Book 2, Book 3) */}
          <div className="flex items-center justify-center gap-3.5 w-full px-7">
            
            {/* Book 1 */}
            <div className="w-1/3 max-w-[130px] rounded-xl overflow-hidden shadow-md border-2 border-[#182B1B] bg-[#182B1B] transition-transform active:scale-95">
              <Link to="/courses">
                <img
                  src="/books/book1_wellness_coaching.jpg"
                  alt="Book 1: Wellness Coaching Introduction"
                  className="w-full h-auto object-cover"
                />
              </Link>
            </div>

            {/* Book 2 */}
            <div className="w-1/3 max-w-[130px] rounded-xl overflow-hidden shadow-md border-2 border-[#182B1B] bg-[#182B1B] transition-transform active:scale-95">
              <Link to="/courses">
                <img
                  src="/books/book2_naturopathy_basics.jpg"
                  alt="Book 2: Naturopathy Basics"
                  className="w-full h-auto object-cover"
                />
              </Link>
            </div>

            {/* Book 3 */}
            <div className="w-1/3 max-w-[130px] rounded-xl overflow-hidden shadow-md border-2 border-[#182B1B] bg-[#182B1B] transition-transform active:scale-95">
              <Link to="/courses">
                <img
                  src="/books/book3_ayurveda_basics.jpg"
                  alt="Book 3: Ayurveda Basics"
                  className="w-full h-auto object-cover"
                />
              </Link>
            </div>

          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextBook}
            className="absolute right-1 z-30 w-8 h-8 rounded-full bg-white/95 border border-[#D5CDBC] shadow-md flex items-center justify-center text-[#2A3E2C] active:scale-90 transition-transform"
            aria-label="Next Book"
          >
            <ChevronRight size={18} />
          </button>

        </div>

        {/* 4 Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-3.5">
          <span className="w-2 h-2 rounded-full bg-[#3B4D36]"></span>
          <span className="w-2 h-2 rounded-full bg-[#D5CDBC]"></span>
          <span className="w-2 h-2 rounded-full bg-[#D5CDBC]"></span>
          <span className="w-2 h-2 rounded-full bg-[#D5CDBC]"></span>
        </div>

        {/* Scroll hint */}
        <p className="text-[11px] text-[#4E624A] font-medium mt-2 flex items-center justify-center gap-1">
          <span>Scroll left to explore more books</span>
          <span>👆</span>
        </p>

      </section>

      {/* ================= 5. "WHY GURUKUL?" SECTION (4 CARDS ROW) ================= */}
      <section className="px-3 pt-4 pb-6">
        <div className="rounded-2xl overflow-hidden shadow-xs border border-[#E8E2D0] bg-white">
          <img
            src="/images/why_gurukul_cards.jpg"
            alt="Why Gurukul? Ayurvedic Wisdom · Interactive Learning · Test & Improve · Track Your Progress"
            className="w-full h-auto object-cover block"
          />
        </div>
      </section>

    </div>
  );
}
