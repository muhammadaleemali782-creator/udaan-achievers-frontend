import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Users, Check } from "lucide-react";
import api, { studentHeaders } from "../api";

function money(n) {
  const num = Number(n) || 0;
  return "₹" + num.toLocaleString("en-IN");
}

export default function CourseCard({ course }) {
  const navigate = useNavigate();
  const [status, setStatus] = useState("idle"); // idle | loading | done
  const bar = course.cat === "JEE" ? "bg-ink" : course.cat === "NEET" ? "bg-teal" : "bg-saffron";

  const handleEnroll = async () => {
    const loggedIn = !!localStorage.getItem("student_token");
    if (!loggedIn) {
      navigate("/login");
      return;
    }
    setStatus("loading");
    try {
      await api.post(`/enrollments/enroll/${course._id}`, {}, { headers: studentHeaders() });
      setStatus("done");
    } catch {
      setStatus("idle");
      navigate("/login");
    }
  };

  return (
    <div className="rounded-xl overflow-hidden flex flex-col bg-white border border-paperDark">
      <div className={`h-2 ${bar}`} />
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs font-medium px-2 py-1 rounded bg-paperDark text-charcoal">{course.cat}</span>
          <span className="font-body text-xs text-muted">{course.level}</span>
        </div>
        <h3 className="font-display text-xl mb-2 text-charcoal">{course.name}</h3>
        <p className="font-body text-sm mb-4 flex-1 text-muted">{course.desc}</p>
        <div className="flex items-center gap-3 mb-4 font-body text-xs text-muted">
          <span className="flex items-center gap-1"><Star size={13} className="fill-saffron text-saffron" /> {course.rating}</span>
          <span className="flex items-center gap-1"><Users size={13} /> {course.students}</span>
        </div>
        <div className="flex items-end justify-between mb-4">
          <div>
            <span className="font-mono text-lg font-semibold text-charcoal">{money(course.price)}</span>
            <span className="font-mono text-sm line-through ml-2 text-muted">{money(course.oldPrice)}</span>
          </div>
          <span className="font-body text-xs text-saffronDark">{course.seats}</span>
        </div>
        <button
          onClick={handleEnroll}
          disabled={status === "loading" || status === "done"}
          className="font-body text-sm font-medium py-2.5 rounded-full w-full text-center bg-ink text-white flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {status === "done" ? (<><Check size={14} /> Enrolled</>) : status === "loading" ? "Enrolling…" : "Enroll now"}
        </button>
      </div>
    </div>
  );
}
