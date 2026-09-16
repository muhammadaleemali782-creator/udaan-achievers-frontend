import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Users,
  CheckCircle2,
  BookOpen,
  CalendarDays,
  FileSignature,
  CreditCard,
  AlertCircle,
  TrendingUp,
  ArrowUpRight,
  ArrowRight,
  PlusCircle,
  CalendarCheck2,
  ShieldCheck,
  Award,
} from "lucide-react";
import { useERP } from "../../context/ERPContext";

function formatINR(val) {
  return "₹" + Number(val || 0).toLocaleString("en-IN");
}

export default function ERPDashboard() {
  const navigate = useNavigate();
  const {
    courses,
    batches,
    students,
    admissions,
    payments,
    totalStudents,
    activeStudents,
    totalCoursesCount,
    totalBatchesCount,
    todayAdmissionsCount,
    todayFeesCollection,
    pendingFeesTotal,
  } = useERP();

  const recentAdmissions = admissions.slice(0, 4);
  const recentPayments = payments.slice(0, 4);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* ================= GREETING & HERO BANNER ================= */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold backdrop-blur-xs">
              <ShieldCheck size={14} />
              <span>Educa Veda Institute Control Center</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Institute Operations Dashboard
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
              Real-time monitoring of Students, Admissions, WCNA &amp; WCFM Batches, Daily Attendance, and Fee Collections.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => navigate("/admissions?action=new")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-xs font-bold shadow-md shadow-indigo-900/50 transition-all cursor-pointer"
            >
              <PlusCircle size={15} />
              <span>New Admission</span>
            </button>
            <button
              onClick={() => navigate("/attendance")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white text-xs font-bold backdrop-blur-xs transition-all cursor-pointer"
            >
              <CalendarCheck2 size={15} />
              <span>Mark Attendance</span>
            </button>
            <button
              onClick={() => navigate("/fees")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <CreditCard size={15} />
              <span>Collect Fees</span>
            </button>
          </div>
        </div>
      </div>

      {/* ================= 7 CORE KPI METRIC CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        
        {/* 1. Total Students */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Total Students
            </span>
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Users size={18} />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
              {totalStudents}
            </span>
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-0.5">
              <TrendingUp size={12} /> Live
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Enrolled across all programs
          </p>
        </div>

        {/* 2. Active Students */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Active Students
            </span>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 size={18} />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
              {activeStudents}
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
              {Math.round((activeStudents / (totalStudents || 1)) * 100)}% Regular
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Currently attending classes
          </p>
        </div>

        {/* 3. Total Courses */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Total Courses
            </span>
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <BookOpen size={18} />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
              {totalCoursesCount}
            </span>
            <span className="text-xs text-indigo-600 font-semibold font-mono">
              WCNA + WCFM
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Naturopathy &amp; Finance Management
          </p>
        </div>

        {/* 4. Total Batches */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Total Batches
            </span>
            <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <CalendarDays size={18} />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
              {totalBatchesCount}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Morning &amp; Weekend
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Active faculty-led timetables
          </p>
        </div>

        {/* 5. Today's Admissions */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Today's Admissions
            </span>
            <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
              <FileSignature size={18} />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
              {todayAdmissionsCount}
            </span>
            <span className="text-xs text-teal-600 font-semibold">
              Applications
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            New entries processed today
          </p>
        </div>

        {/* 6. Today's Fees Collection */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Today's Collection
            </span>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CreditCard size={18} />
            </div>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
              {formatINR(todayFeesCollection)}
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Receipts cleared today
          </p>
        </div>

        {/* 7. Pending Fees (Spans 2 columns on large screens) */}
        <div className="sm:col-span-2 bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-2xl p-5 border border-amber-200 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
              Pending Fees Total
            </span>
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <AlertCircle size={18} />
            </div>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-950 font-mono">
                {formatINR(pendingFeesTotal)}
              </span>
              <p className="text-xs text-amber-700 mt-0.5">
                Outstanding balance from active student enrollments
              </p>
            </div>
            <Link
              to="/fees"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold transition-all active:scale-95"
            >
              <span>View Defaulters</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

      </div>

      {/* ================= FEATURED COURSES HIGHLIGHT: WCNA & WCFM ================= */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Specialized Certification Programs
            </h2>
            <p className="text-xs text-slate-500">
              Flagship institute offerings with batch timings and enrolled scholars
            </p>
          </div>
          <Link
            to="/erp/courses"
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            <span>All Courses &amp; Batches</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {course.code}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Duration: {course.duration}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 leading-snug mb-1">
                  {course.name}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                  {course.desc}
                </p>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Lead Faculty:</span>
                    <span className="font-semibold text-slate-800">{course.faculty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Course Fee:</span>
                    <span className="font-bold text-emerald-700 font-mono">{formatINR(course.fee)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  Batches: <b className="text-slate-800">{course.batches.join(", ")}</b>
                </span>
                <Link
                  to={`/erp/courses?focus=${course.code}`}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 inline-flex items-center gap-1"
                >
                  <span>Manage Batch Roster</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RECENT ACTIVITY: ADMISSIONS & PAYMENTS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Recent Admissions */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <FileSignature size={18} className="text-indigo-600" />
              <h3 className="font-bold text-sm text-slate-900">
                Recent Admissions Pipeline
              </h3>
            </div>
            <Link to="/admissions" className="text-xs font-semibold text-indigo-600 hover:underline">
              View All
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {recentAdmissions.map((adm) => (
              <div key={adm.id} className="py-3 flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-xs text-slate-900">{adm.name}</p>
                    <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-600">
                      {adm.course}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">{adm.mobile}</p>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      adm.status === "Confirmed"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {adm.status}
                  </span>
                  <p className="text-[10px] text-slate-400 font-mono mt-0.5">{adm.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Fee Transactions */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <CreditCard size={18} className="text-emerald-600" />
              <h3 className="font-bold text-sm text-slate-900">
                Recent Fee Receipts
              </h3>
            </div>
            <Link to="/fees" className="text-xs font-semibold text-indigo-600 hover:underline">
              View Ledger
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {recentPayments.map((pay) => (
              <div key={pay.id} className="py-3 flex items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-xs text-slate-900">{pay.studentName}</p>
                  <p className="text-[11px] text-slate-500 font-mono">
                    {pay.id} • {pay.mode}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-mono font-bold text-xs text-emerald-700">
                    +{formatINR(pay.amount)}
                  </p>
                  <p className="text-[10px] text-slate-400 font-mono mt-0.5">{pay.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
