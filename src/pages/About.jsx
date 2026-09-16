import React from "react";
import { Link } from "react-router-dom";
import { Award, Users, BookOpen, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import PublicNavbar from "../components/PublicNavbar";
import PublicFooter from "../components/PublicFooter";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
      <PublicNavbar />

      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-bold">
            ABOUT EDUCA VEDA
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Empowering Modern Professionals with Clinical &amp; Financial Wisdom
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Founded with a vision to merge classical holistic wellness science with rigorous corporate financial advisory, EDUCA VEDA delivers premier vocational certifications across India.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-lg font-bold text-slate-900">Rigorous Pedagogy</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every course blends structured theory modules with case simulations, clinical diagnoses, and practical internship assignments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900">Academic Integrity</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our automated student tracking, continuous attendance audits, and transparent fee ledger guarantee highest institutional standards.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900">Career Advancement</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Graduates receive certified credentials enabling them to launch independent wellness practices or corporate wealth management consulting.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Faculty */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Expert Leadership</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Dean &amp; Faculty Chairs</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex gap-4 items-start">
              <div className="w-14 h-14 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-xl flex-shrink-0">
                DR
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-900">Dr. R. K. Sharma</h4>
                <p className="text-xs font-semibold text-emerald-700">Dean of Naturopathy &amp; Ayurveda (BAMS, MD)</p>
                <p className="text-xs text-slate-600 leading-relaxed pt-2">
                  Over 18 years of clinical hospital leadership and research in Ayurvedic diagnostics, herbal formulation, and integrative naturopathic wellness.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex gap-4 items-start">
              <div className="w-14 h-14 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-black text-xl flex-shrink-0">
                AM
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-900">Prof. Arvind Mehta</h4>
                <p className="text-xs font-semibold text-indigo-700">Chair of Wealth &amp; Finance Management (CFA)</p>
                <p className="text-xs text-slate-600 leading-relaxed pt-2">
                  Former senior portfolio strategist with FinOps Advisory, mentoring over 1,200 financial analysts in corporate valuation and portfolio structuring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">Ready to begin your certification journey?</h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Admissions for both WCNA and WCFM programs are currently open. Inquire with our counselling team today.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <span>Contact Admissions Office</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
