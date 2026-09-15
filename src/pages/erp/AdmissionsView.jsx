import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  FileSignature,
  Plus,
  Search,
  CheckCircle,
  Clock,
  AlertCircle,
  X,
  FileCheck2,
  ArrowRight,
  ShieldAlert,
  CreditCard,
  Building2,
  UploadCloud,
} from "lucide-react";
import { toast } from "sonner";
import { useERP } from "../../context/ERPContext";

function formatINR(val) {
  return "₹" + Number(val || 0).toLocaleString("en-IN");
}

export default function AdmissionsView() {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    admissions,
    courses,
    batches,
    createAdmission,
    updateAdmissionStatus,
  } = useERP();

  const [activeTab, setActiveTab] = useState("ALL");
  const [search, setSearch] = useState("");
  const [showNewModal, setShowNewModal] = useState(false);

  useEffect(() => {
    if (searchParams.get("action") === "new") {
      setShowNewModal(true);
    }
  }, [searchParams]);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    course: "WCNA",
    batch: "WCNA-M1",
    admissionFee: "5000",
    paymentMode: "UPI",
    date: new Date().toISOString().split("T")[0],
    status: "Confirmed",
    documents: {
      aadhaar: true,
      marksheet: true,
      photo: true,
      signature: true,
    },
    notes: "",
  });

  const filteredAdmissions = admissions.filter((a) => {
    const matchQuery =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.id.toLowerCase().includes(search.toLowerCase()) ||
      a.mobile.includes(search);
    const matchTab = activeTab === "ALL" || a.status === activeTab;
    return matchQuery && matchTab;
  });

  const handleCreateAdmission = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      toast.error("Applicant name is required");
      return;
    }
    if (!formData.mobile.trim()) {
      toast.error("Mobile number is required");
      return;
    }

    createAdmission(formData);
    setShowNewModal(false);
    setSearchParams({});
    setFormData({
      name: "",
      mobile: "",
      email: "",
      course: "WCNA",
      batch: "WCNA-M1",
      admissionFee: "5000",
      paymentMode: "UPI",
      date: new Date().toISOString().split("T")[0],
      status: "Confirmed",
      documents: {
        aadhaar: true,
        marksheet: true,
        photo: true,
        signature: true,
      },
      notes: "",
    });
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
            <FileSignature size={26} className="text-indigo-600" />
            <span>Admission Pipeline &amp; Registrations</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Total Applications Tracked: <b className="text-slate-800 font-mono">{admissions.length}</b>
          </p>
        </div>

        <button
          onClick={() => setShowNewModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-xs font-bold shadow-sm shadow-indigo-200 transition-all cursor-pointer"
        >
          <Plus size={16} />
          <span>New Admission Form</span>
        </button>
      </div>

      {/* Tabs & Search */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto scrollbar-none">
          {["ALL", "Confirmed", "Pending", "Under Review"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === tab
                  ? "bg-white text-indigo-700 shadow-2xs font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab === "ALL" ? "All Applications" : tab}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by Applicant Name / ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Applications Roster */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredAdmissions.length === 0 ? (
          <div className="col-span-2 bg-white rounded-2xl p-12 text-center border border-slate-200 text-slate-400">
            No admission records found matching your selection.
          </div>
        ) : (
          filteredAdmissions.map((adm) => (
            <div
              key={adm.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 font-bold">
                      {adm.id}
                    </span>
                    <h3 className="font-bold text-base text-slate-900 leading-tight">
                      {adm.name}
                    </h3>
                    <p className="text-xs text-slate-500">{adm.mobile} • {adm.email}</p>
                  </div>

                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      adm.status === "Confirmed"
                        ? "bg-emerald-100 text-emerald-800"
                        : adm.status === "Pending"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {adm.status}
                  </span>
                </div>

                {/* Course Details Box */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-xs mb-3">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Selected Course:</span>
                    <span className="font-mono font-bold text-indigo-700">{adm.course}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Batch Timing:</span>
                    <span className="font-medium text-slate-800">{adm.batch}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Admission Fee Paid:</span>
                    <span className="font-mono font-bold text-emerald-700">{formatINR(adm.admissionFee)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Payment Mode:</span>
                    <span className="font-medium text-slate-700">{adm.paymentMode}</span>
                  </div>
                </div>

                {/* Required Documents Checklist */}
                <div className="space-y-1.5 mb-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Required Documents Checklist
                  </span>
                  <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                    <span className={`flex items-center gap-1.5 ${adm.documents?.aadhaar ? "text-emerald-700 font-medium" : "text-slate-400"}`}>
                      <CheckCircle size={13} className={adm.documents?.aadhaar ? "text-emerald-500" : "text-slate-300"} />
                      Aadhaar Card
                    </span>
                    <span className={`flex items-center gap-1.5 ${adm.documents?.marksheet ? "text-emerald-700 font-medium" : "text-slate-400"}`}>
                      <CheckCircle size={13} className={adm.documents?.marksheet ? "text-emerald-500" : "text-slate-300"} />
                      10th/12th Marksheet
                    </span>
                    <span className={`flex items-center gap-1.5 ${adm.documents?.photo ? "text-emerald-700 font-medium" : "text-slate-400"}`}>
                      <CheckCircle size={13} className={adm.documents?.photo ? "text-emerald-500" : "text-slate-300"} />
                      Passport Photo
                    </span>
                    <span className={`flex items-center gap-1.5 ${adm.documents?.signature ? "text-emerald-700 font-medium" : "text-slate-400"}`}>
                      <CheckCircle size={13} className={adm.documents?.signature ? "text-emerald-500" : "text-slate-300"} />
                      Candidate Signature
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">Date: {adm.date}</span>

                {adm.status !== "Confirmed" ? (
                  <button
                    onClick={() => updateAdmissionStatus(adm.id, "Confirmed")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold active:scale-95 transition-all cursor-pointer"
                  >
                    <CheckCircle size={13} />
                    <span>Approve &amp; Generate Student ID</span>
                  </button>
                ) : (
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-bold font-mono">
                    <CheckCircle size={14} /> Student ID: {adm.studentId}
                  </span>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* ================= MODAL: NEW ADMISSION APPLICATION ================= */}
      {showNewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl w-full max-w-lg border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <FileSignature size={18} className="text-indigo-600" />
                <h3 className="font-bold text-sm text-slate-900">
                  New Student Admission Form
                </h3>
              </div>
              <button
                onClick={() => {
                  setShowNewModal(false);
                  setSearchParams({});
                }}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateAdmission} className="p-6 overflow-y-auto space-y-4 text-xs">
              
              {/* Applicant Name */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">Applicant Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikas Malhotra"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-1 focus:ring-indigo-500 outline-hidden"
                />
              </div>

              {/* Mobile & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98200 44556"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-1 focus:ring-indigo-500 outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="vikas@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-1 focus:ring-indigo-500 outline-hidden"
                  />
                </div>
              </div>

              {/* Course Selection */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">Course Selection *</label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white font-medium focus:ring-1 focus:ring-indigo-500 outline-hidden"
                >
                  {courses.map((c) => (
                    <option key={c.id} value={c.code}>
                      {c.name} - {formatINR(c.fee)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Batch Assignment & Admission Fee */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Batch Assignment *</label>
                  <select
                    value={formData.batch}
                    onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white font-medium focus:ring-1 focus:ring-indigo-500 outline-hidden"
                  >
                    {batches.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name} ({b.timing})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Admission Fee (₹) *</label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={formData.admissionFee}
                    onChange={(e) => setFormData({ ...formData, admissionFee: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono focus:ring-1 focus:ring-indigo-500 outline-hidden"
                  />
                </div>
              </div>

              {/* Payment Mode & Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Payment Mode</label>
                  <select
                    value={formData.paymentMode}
                    onChange={(e) => setFormData({ ...formData, paymentMode: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white font-medium focus:ring-1 focus:ring-indigo-500 outline-hidden"
                  >
                    <option value="UPI">UPI (GPay / PhonePe / Paytm)</option>
                    <option value="Net Banking">Net Banking (IMPS / NEFT)</option>
                    <option value="Cash">Cash at Desk</option>
                    <option value="Credit/Debit Card">Credit / Debit Card</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Admission Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white font-medium focus:ring-1 focus:ring-indigo-500 outline-hidden"
                  >
                    <option value="Confirmed">Confirmed (Generate Student ID Immediately)</option>
                    <option value="Pending">Pending Verification</option>
                    <option value="Under Review">Under Review</option>
                  </select>
                </div>
              </div>

              {/* Required Documents Checklist */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                <span className="block font-bold text-slate-800 text-[11px]">
                  Required Documents Checklist:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.documents.aadhaar}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          documents: { ...formData.documents, aadhaar: e.target.checked },
                        })
                      }
                      className="rounded text-indigo-600"
                    />
                    <span>Aadhaar Card Copy</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.documents.marksheet}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          documents: { ...formData.documents, marksheet: e.target.checked },
                        })
                      }
                      className="rounded text-indigo-600"
                    />
                    <span>10th / 12th Marksheet</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.documents.photo}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          documents: { ...formData.documents, photo: e.target.checked },
                        })
                      }
                      className="rounded text-indigo-600"
                    />
                    <span>Passport Photographs (2)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.documents.signature}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          documents: { ...formData.documents, signature: e.target.checked },
                        })
                      }
                      className="rounded text-indigo-600"
                    />
                    <span>Signed Rules Form</span>
                  </label>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowNewModal(false);
                    setSearchParams({});
                  }}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-sm shadow-indigo-200 active:scale-95 transition-all cursor-pointer"
                >
                  Complete Admission
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
