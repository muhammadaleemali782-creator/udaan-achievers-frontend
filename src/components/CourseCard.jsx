import React from "react";
import { Link } from "react-router-dom";
import { Star, ArrowUpRight, Sparkles } from "lucide-react";

export default function CourseCard({ course }) {
  const isFlagship = course.cat === "WCNA Program";

  return (
    <div className="comic-book-container">
      <div className={`comic-book-card-3d rounded-3xl overflow-hidden flex flex-col justify-between border-2 ${
        isFlagship
          ? "bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white border-emerald-500 shadow-2xl"
          : "bg-white border-slate-900 shadow-xl"
      }`}>
        
        {/* 3D Comic Book Cover Area */}
        <div className="relative aspect-[4/5] bg-slate-950 overflow-hidden group">
          <div className="comic-spine-effect"></div>
          <img
            src={course.image || "/books/wcna_master_course.jpg"}
            alt={course.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
            onError={(e) => { e.target.src = "/books/wcna_master_course.jpg"; }}
          />
          
          {/* Top Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1 z-20">
            <span className="px-3 py-1 rounded-md bg-slate-950/90 backdrop-blur text-emerald-300 text-[10px] font-black tracking-wider uppercase border border-emerald-400/40 shadow-md">
              {course.tag || "OFFICIAL GURUKUL MANUAL"}
            </span>
          </div>

          {course.oldPrice > course.price && (
            <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-amber-400 text-slate-950 text-[11px] font-black border-2 border-slate-950 shadow-md z-20">
              SAVE {Math.round(((course.oldPrice - course.price) / course.oldPrice) * 100)}%
            </span>
          )}

          {/* 3D Floating Action Pill */}
          <div className="absolute bottom-3 inset-x-3 flex items-center justify-between px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur border border-white/20 text-white text-[11px] font-bold z-20">
            <span className="flex items-center gap-1 text-emerald-400">
              <Sparkles size={12} /> 3D Comic Edition
            </span>
            <span className="text-amber-400">★ ★ ★ ★ ★</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 flex-1 flex flex-col justify-between gap-4">
          <div>
            <div className="flex items-center justify-between text-xs text-muted mb-2 font-mono">
              <span className="flex items-center gap-1 text-emerald-600 font-extrabold">
                <Star size={13} fill="currentColor" /> {course.rating || 5.0} (500+ Reviews)
              </span>
              <span className="font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                {course.level || "Curriculum Manual"}
              </span>
            </div>

            <h3 className={`font-display text-lg font-black leading-snug mb-2 line-clamp-2 ${isFlagship ? "text-white" : "text-charcoal"}`}>
              {course.name}
            </h3>

            <p className="font-body text-xs text-muted line-clamp-2 leading-relaxed mb-3">
              {course.desc}
            </p>

            {/* Topics Pills */}
            {course.lectures && course.lectures.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {course.lectures.slice(0, 3).map((lec, idx) => (
                  <span key={idx} className="font-body text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 border border-slate-300 text-slate-700">
                    ✓ {lec}
                  </span>
                ))}
                {course.lectures.length > 3 && (
                  <span className="font-body text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                    +{course.lectures.length - 3} more modules
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Pricing & CTA */}
          <div className="pt-4 border-t border-paperDark flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-black text-emerald-600">
                  ₹{Number(course.price).toLocaleString()}
                </span>
                {course.oldPrice > 0 && (
                  <span className="font-body text-xs line-through text-muted">
                    ₹{Number(course.oldPrice).toLocaleString()}
                  </span>
                )}
              </div>
              <p className="font-mono text-[10px] text-tealDark font-bold">
                {course.seats || "Instant Access"}
              </p>
            </div>

            <Link
              to="/login"
              className="font-body text-xs font-black flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-ink text-white hover:bg-emerald-600 shadow-md transition-all hover:scale-105"
            >
              <span>Enroll / Order</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
