import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, CheckCircle, Award, Users, BookOpen, Clock,
  Calendar, ShieldCheck, Star, Sparkles, PhoneCall, ChevronRight
} from "lucide-react";
import PublicNavbar from "../components/PublicNavbar";
import PublicFooter from "../components/PublicFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold">
              <Sparkles size={14} />
              <span>Admissions Open for 2026–2027 Academic Session</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Empowering Next-Gen Leaders in <span className="text-indigo-600">Wellness</span> &amp; <span className="text-emerald-600">Finance</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              EDUCA VEDA delivers industry-accredited professional certification programs designed with practical clinical training, corporate valuation mentorship, and career-first guidance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                to="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-600/20 transition-all"
              >
                <span>Explore Certification Courses</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-300 transition-all"
              >
                <PhoneCall size={16} className="text-slate-500" />
                <span>Request Free Counselling</span>
              </Link>
            </div>

            {/* Quick Stats Banner */}
            <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-2xl font-black text-indigo-600">2 Programs</p>
                <p className="text-xs text-slate-500 mt-0.5">WCNA &amp; WCFM</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-2xl font-black text-slate-900">6 Months</p>
                <p className="text-xs text-slate-500 mt-0.5">Program Duration</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-2xl font-black text-emerald-600">100%</p>
                <p className="text-xs text-slate-500 mt-0.5">Certified Mentorship</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-2xl font-black text-slate-900">4 Batches</p>
                <p className="text-xs text-slate-500 mt-0.5">Morning &amp; Weekend</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Programs Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Certified Curriculum</p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Flagship Certification Programs
          </h2>
          <p className="text-sm text-slate-600">
            Choose your specialized career path with in-depth syllabus, experienced faculty, and flexible batch timings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Program 1: WCNA */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-emerald-500/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                  WCNA SPECIALIZATION
                </span>
                <span className="text-xs text-slate-500 font-medium">Duration: 6 Months</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  WCNA [ Wellness Consultancy in Naturopathy &amp; Ayurveda ]
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  Complete professional certification covering fundamental principles of Ayurveda, Panchakarma therapy, pulse diagnosis, and herbal nutrition.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Lead Faculty:</span>
                  <span className="font-semibold text-slate-800">Dr. R. K. Sharma (BAMS, MD Naturopathy)</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Course Fee:</span>
                  <span className="font-black text-slate-900 text-sm">₹25,000</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Available Batches:</span>
                  <span className="font-medium text-indigo-600">WCNA-M1 (Morning) &amp; WCNA-W1 (Weekend)</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-700">
                <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Curriculum Highlights:</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-emerald-500 flex-shrink-0" />
                    <span>Anatomy &amp; Physiology</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-emerald-500 flex-shrink-0" />
                    <span>Principles of Ayurveda</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-emerald-500 flex-shrink-0" />
                    <span>Panchakarma Science</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-emerald-500 flex-shrink-0" />
                    <span>Clinical Case Studies</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/courses"
                className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1"
              >
                <span>View Full Syllabus</span>
                <ChevronRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
              >
                Apply for WCNA
              </Link>
            </div>
          </div>

          {/* Program 2: WCFM */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-indigo-500/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-bold">
                  WCFM SPECIALIZATION
                </span>
                <span className="text-xs text-slate-500 font-medium">Duration: 6 Months</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  WCFM [ Wealth Consultancy in Finance Management ]
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  Comprehensive financial training in corporate valuation, portfolio engineering, personal wealth advisory, tax optimization, and regulatory compliance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Lead Faculty:</span>
                  <span className="font-semibold text-slate-800">Prof. Arvind Mehta (CFA, FinOps Advisory)</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Course Fee:</span>
                  <span className="font-black text-slate-900 text-sm">₹30,000</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Available Batches:</span>
                  <span className="font-medium text-indigo-600">WCFM-E1 (Evening) &amp; WCFM-W1 (Weekend)</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-700">
                <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Curriculum Highlights:</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-indigo-500 flex-shrink-0" />
                    <span>Portfolio Engineering</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-indigo-500 flex-shrink-0" />
                    <span>Corporate Valuation</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-indigo-500 flex-shrink-0" />
                    <span>Tax &amp; FinOps Advisory</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-indigo-500 flex-shrink-0" />
                    <span>Risk Analytics &amp; Models</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/courses"
                className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1"
              >
                <span>View Full Syllabus</span>
                <ChevronRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors"
              >
                Apply for WCFM
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Educa Veda */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Institutional Excellence</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Why Study At EDUCA VEDA?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                <Users size={20} />
              </div>
              <h4 className="font-bold text-base text-slate-900">Industry-Led Faculty</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Learn directly from verified doctors and senior financial analysts with 15+ years of clinical and market practice.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <BookOpen size={20} />
              </div>
              <h4 className="font-bold text-base text-slate-900">Case-Based Learning</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hands-on practicals, clinical case diagnoses, and real portfolio models rather than dry textbook memorization.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <Award size={20} />
              </div>
              <h4 className="font-bold text-base text-slate-900">Verified Certification</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Earn recognized certificates with verifiable Student IDs that validate your credentials across industry employers.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center font-bold">
                <Clock size={20} />
              </div>
              <h4 className="font-bold text-base text-slate-900">Flexible Batches</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Choose between regular weekday morning/evening timetables or working-professional weekend schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff / ERP Callout Banner */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="px-3 py-1 rounded-full bg-slate-800 text-indigo-400 border border-slate-700 text-xs font-semibold">
            Institute Management Portal
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Are you an Administrator, Faculty, or Enrolled Student?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Access real-time roll call, admission applications, fee receipts, student profiles, and batch rosters via the secure Portal.
          </p>
          <div className="pt-2">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md transition-all"
            >
              <ShieldCheck size={16} />
              <span>Login to Institute Portal</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
