import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Clock, Calendar, Users, Award, ArrowRight, Sparkles } from "lucide-react";
import LCCNavbar from "../components/LCCNavbar";
import LCCFooter from "../components/LCCFooter";

export default function Courses() {
  const [activeTab, setActiveTab] = useState("all");

  const programs = [
    {
      id: "wcna",
      code: "WCNA",
      title: "Wellness Consultancy in Naturopathy & Ayurveda",
      tagline: "Flagship Holistic Healthcare Certification",
      duration: "6 Months",
      fee: "₹25,000",
      seats: "40 Seats per batch",
      leadFaculty: "Dr. R. K. Sharma (BAMS, MD Naturopathy)",
      color: "emerald",
      overview: "Designed for aspiring holistic health consultants, lifestyle advisors, and wellness center directors. Combines foundational Ayurvedic biology, Tridosha analysis, and clinical Naturopathic therapies.",
      modules: [
        "Human Anatomy & Functional Physiology",
        "Rogshashtra & Diagnostics Framework",
        "Foundational Principles of Ayurveda & Tridoshas",
        "Naturopathic Hydrotherapy & Mud Packs",
        "Nutritional Diet Planning & Ahara Vidhi",
        "Clinical Case Studies & Patient Management",
        "Wellness Practice Setup & Ethical Standards"
      ],
      batches: [
        { name: "WCNA Morning Alpha", timing: "08:00 AM – 10:30 AM", days: "Mon, Wed, Fri" },
        { name: "WCNA Weekend Pro", timing: "10:00 AM – 02:00 PM", days: "Saturday & Sunday" }
      ]
    },
    {
      id: "wcfm",
      code: "WCFM",
      title: "Wealth Consultancy in Finance Management",
      tagline: "Professional Financial Advisory & Valuation Certification",
      duration: "6 Months",
      fee: "₹30,000",
      seats: "35 Seats per batch",
      leadFaculty: "Prof. Arvind Mehta (CFA, FinOps Advisory)",
      color: "indigo",
      overview: "Built for finance executives, portfolio consultants, and wealth advisors. In-depth focus on DCF modeling, financial statement analysis, asset allocation, and wealth tax advisory.",
      modules: [
        "Corporate Financial Analysis & Modeling",
        "Portfolio Engineering & Risk Optimization",
        "Corporate Valuation & DCF Methodologies",
        "Personal Wealth & Asset Allocation Strategies",
        "Tax Structuring & Regulatory Compliance",
        "Client Advisory & Consulting Practice",
        "Cap-table Management & Seed Investments"
      ],
      batches: [
        { name: "WCFM Evening Prime", timing: "05:30 PM – 08:00 PM", days: "Tue, Thu, Sat" },
        { name: "WCFM Weekend Master", timing: "02:00 PM – 06:00 PM", days: "Sunday" }
      ]
    }
  ];

  const filteredPrograms = activeTab === "all" ? programs : programs.filter(p => p.id === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
      <LCCNavbar />

      {/* Page Header */}
      <section className="bg-white border-b border-slate-200 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-bold">
            ACADEMIC CURRICULUM
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Comprehensive Programs &amp; Batch Schedules
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Detailed curriculum specifications, faculty assignments, fee breakdowns, and active batch timetables.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === "all"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Programs (2)
            </button>
            <button
              onClick={() => setActiveTab("wcna")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === "wcna"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              WCNA (Naturopathy &amp; Ayurveda)
            </button>
            <button
              onClick={() => setActiveTab("wcfm")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === "wcfm"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              WCFM (Wealth &amp; Finance)
            </button>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredPrograms.map((prog) => (
          <div
            key={prog.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold ${
                      prog.color === "emerald"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-indigo-50 text-indigo-700 border border-indigo-200"
                    }`}>
                      {prog.code} PROGRAM
                    </span>
                    <span className="text-xs text-slate-500 font-medium">Duration: {prog.duration}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">{prog.title}</h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">{prog.tagline}</p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-slate-500">Total Course Fee</p>
                  <p className="text-2xl font-black text-slate-900">{prog.fee}</p>
                  <span className="text-[11px] text-emerald-600 font-medium">Installment plans available</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                {prog.overview}
              </p>

              <div className="grid md:grid-cols-2 gap-8 pt-2">
                {/* Modules */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                    Curriculum Modules (Theory + Practical)
                  </h4>
                  <ul className="space-y-2">
                    {prog.modules.map((m, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 size={14} className={prog.color === "emerald" ? "text-emerald-500 mt-0.5 flex-shrink-0" : "text-indigo-500 mt-0.5 flex-shrink-0"} />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Batches & Faculty */}
                <div className="space-y-5">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                      Assigned Lead Faculty
                    </h4>
                    <p className="text-xs font-semibold text-slate-800 p-3 rounded-lg bg-slate-50 border border-slate-100">
                      👨‍🏫 {prog.leadFaculty}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                      Active Batch Timetables
                    </h4>
                    <div className="space-y-2">
                      {prog.batches.map((b, bIdx) => (
                        <div key={bIdx} className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs flex justify-between items-center">
                          <div>
                            <span className="font-bold text-slate-800">{b.name}</span>
                            <p className="text-[11px] text-slate-500">{b.days}</p>
                          </div>
                          <span className="font-mono text-[11px] text-indigo-600 font-semibold">{b.timing}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  Includes study manual, examination fees, and completion credential.
                </span>
                <Link
                  to="/contact"
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-white font-semibold text-xs transition-colors ${
                    prog.color === "emerald" ? "bg-emerald-600 hover:bg-emerald-700" : "bg-indigo-600 hover:bg-indigo-700"
                  }`}
                >
                  <span>Apply for {prog.code}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <LCCFooter />
    </div>
  );
}
