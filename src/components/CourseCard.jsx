import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Star, ArrowUpRight } from "lucide-react";

export default function CourseCard({ course }) {
  const isFlagship = course.cat === "WCNA Program";

  return (
    <div className={`rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
      isFlagship
        ? "bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white border-2 border-emerald-500/50 shadow-2xl"
        : "bg-white border border-paperDark shadow-sm hover:shadow-md"
    }`}>
      {/* Visual Cover Thumbnail */}
      <div className="relative aspect-[4/5] bg-slate-950 overflow-hidden">
        <img
          src={course.image || "/books/wcna_master_course.jpg"}
          alt={course.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => { e.target.src = "/books/wcna_master_course.jpg"; }}
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          <span className="px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur text-emerald-300 text-[10px] font-extrabold tracking-wider uppercase border border-emerald-400/30">
            {course.tag || course.cat}
          </span>
        </div>
        {course.oldPrice > course.price && (
          <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-rose-600 text-white text-[10px] font-black">
            SAVE {Math.round(((course.oldPrice - course.price) / course.oldPrice) * 100)}%
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-muted mb-2 font-mono">
            <span className="flex items-center gap-1 text-emerald-600 font-bold">
              <Star size={12} fill="currentColor" /> {course.rating || 4.9}
            </span>
            <span>{course.level || "Study Material"}</span>
          </div>

          <h3 className={`font-display text-base mb-2 line-clamp-2 ${isFlagship ? "text-white" : "text-charcoal"}`}>
            {course.name}
          </h3>

          <p className="font-body text-xs text-muted line-clamp-2 leading-relaxed mb-4">
            {course.desc}
          </p>

          {/* Key Topics Pills */}
          {course.lectures && course.lectures.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {course.lectures.slice(0, 3).map((lec, idx) => (
                <span key={idx} className="font-body text-[10px] px-2 py-0.5 rounded-md bg-paper border border-paperDark text-muted">
                  ✓ {lec}
                </span>
              ))}
              {course.lectures.length > 3 && (
                <span className="font-body text-[10px] px-2 py-0.5 rounded-md bg-paper border border-paperDark text-muted">
                  +{course.lectures.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>

        {/* Pricing & CTA */}
        <div className="pt-4 border-t border-paperDark flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-lg font-bold text-emerald-600">
                ₹{Number(course.price).toLocaleString()}
              </span>
              {course.oldPrice > 0 && (
                <span className="font-body text-xs line-through text-muted">
                  ₹{Number(course.oldPrice).toLocaleString()}
                </span>
              )}
            </div>
            <p className="font-mono text-[10px] text-muted">{course.seats || "Available"}</p>
          </div>

          <Link
            to="/login"
            className="font-body text-xs font-semibold flex items-center gap-1 px-4 py-2 rounded-full bg-ink text-white hover:opacity-90 transition-opacity"
          >
            Enroll / Buy <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}
