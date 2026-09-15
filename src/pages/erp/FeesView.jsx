import React, { useState } from "react";
import {
  CreditCard,
  Plus,
  Search,
  CheckCircle,
  AlertCircle,
  FileText,
  Printer,
  X,
  Building2,
  Calendar,
  DollarSign,
  ShieldCheck,
  ArrowRight,
  User,
} from "lucide-react";
import { toast } from "sonner";
import { useERP } from "../../context/ERPContext";

function formatINR(val) {
  return "₹" + Number(val || 0).toLocaleString("en-IN");
}

export default function FeesView() {
  const {
    students,
    payments,
    recordFeePayment,
    pendingFeesTotal,
    todayFeesCollection,
  } = useERP();

  const [activeTab, setActiveTab] = useState("LEDGER"); // LEDGER | HISTORY
  const [search, setSearch] = useState("");
  const [selectedStudentForPay, setSelectedStudentForPay] = useState(null);
  const [payAmount, setPayAmount] = useState("");
  const [payMode, setPayMode] = useState("UPI");
  const [payRemarks, setPayRemarks] = useState("Tuition installment");

  // Receipt Modal State
  const [viewingReceipt, setViewingReceipt] = useState(null);

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toLowerCase().includes(search.toLowerCase()) ||
      s.mobile.includes(search)
  );

  const filteredPayments = payments.filter(
    (p) =>
      p.studentName.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase()) ||
      p.studentId.toLowerCase().includes(search.toLowerCase())
  );

  const handlePaySubmit = (e) => {
    e.preventDefault();
    if (!selectedStudentForPay) return;

    const receipt = recordFeePayment(
      selectedStudentForPay.id,
      payAmount,
      payMode,
      payRemarks
    );

    if (receipt) {
      setSelectedStudentForPay(null);
      setPayAmount("");
      setViewingReceipt({
        ...receipt,
        totalFee: selectedStudentForPay.totalFee,
        remainingAfter: Math.max(0, selectedStudentForPay.remainingFee - Number(payAmount)),
        studentMobile: selectedStudentForPay.mobile,
      });
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
            <CreditCard size={26} className="text-indigo-600" />
            <span>Fees &amp; Financial Management</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Student fee accounts, installment collections, payment history, and instant receipts
          </p>
        </div>
      </div>

      {/* Financial Summary KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            Total Fees Collected (All-Time)
          </span>
          <p className="text-2xl font-extrabold text-emerald-700 font-mono mt-1">
            {formatINR(
              payments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0)
            )}
          </p>
          <span className="text-[10px] text-slate-400">{payments.length} successful transactions</span>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            Today's Collection
          </span>
          <p className="text-2xl font-extrabold text-indigo-700 font-mono mt-1">
            {formatINR(todayFeesCollection)}
          </p>
          <span className="text-[10px] text-emerald-600 font-medium">Cleared today via UPI/Cards</span>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 border border-amber-200 shadow-2xs">
          <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
            Total Outstanding Balance
          </span>
          <p className="text-2xl font-extrabold text-amber-900 font-mono mt-1">
            {formatINR(pendingFeesTotal)}
          </p>
          <span className="text-[10px] text-amber-700 font-medium">Pending from active students</span>
        </div>
      </div>

      {/* Tabs & Search */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
          <button
            onClick={() => setActiveTab("LEDGER")}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "LEDGER"
                ? "bg-white text-indigo-700 shadow-2xs font-bold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Student Fee Accounts ({students.length})
          </button>
          <button
            onClick={() => setActiveTab("HISTORY")}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "HISTORY"
                ? "bg-white text-indigo-700 shadow-2xs font-bold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Payment Transaction History ({payments.length})
          </button>
        </div>

        <div className="relative w-full sm:w-72">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search student or receipt..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-indigo-500"
          />
        </div>
      </div>

      {/* ================= TAB 1: STUDENT FEE ACCOUNTS (LEDGER) ================= */}
      {activeTab === "LEDGER" && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-3.5 px-4">Student Name &amp; ID</th>
                  <th className="py-3.5 px-4">Course</th>
                  <th className="py-3.5 px-4">Total Fee</th>
                  <th className="py-3.5 px-4">Paid Amount</th>
                  <th className="py-3.5 px-4">Remaining Balance</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Collect Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {filteredStudents.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="py-8 text-center text-slate-400">
                      No records found.
                    </td>
                  </tr>
                ) : (
                  filteredStudents.map((s) => (
                    <tr key={s.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4">
                        <p className="font-bold text-slate-900">{s.name}</p>
                        <span className="font-mono text-[10px] text-indigo-600 font-semibold">
                          {s.id}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-mono font-bold text-slate-700">
                        {s.course}
                      </td>
                      <td className="py-3.5 px-4 font-mono font-bold text-slate-800">
                        {formatINR(s.totalFee)}
                      </td>
                      <td className="py-3.5 px-4 font-mono font-bold text-emerald-700">
                        {formatINR(s.paidFee)}
                      </td>
                      <td className="py-3.5 px-4 font-mono font-bold text-amber-700">
                        {formatINR(s.remainingFee)}
                      </td>
                      <td className="py-3.5 px-4">
                        {s.remainingFee === 0 ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                            <CheckCircle size={10} /> Fully Cleared
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                            Installment Due
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        {s.remainingFee > 0 ? (
                          <button
                            onClick={() => {
                              setSelectedStudentForPay(s);
                              setPayAmount(String(Math.min(s.remainingFee, 5000)));
                            }}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold active:scale-95 transition-all cursor-pointer shadow-2xs"
                          >
                            <CreditCard size={13} />
                            <span>Collect</span>
                          </button>
                        ) : (
                          <span className="text-[11px] text-slate-400 font-medium">Nil Due</span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ================= TAB 2: PAYMENT HISTORY LOG ================= */}
      {activeTab === "HISTORY" && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-3.5 px-4">Receipt No</th>
                  <th className="py-3.5 px-4">Student Details</th>
                  <th className="py-3.5 px-4">Course</th>
                  <th className="py-3.5 px-4">Amount Paid</th>
                  <th className="py-3.5 px-4">Payment Mode</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4 text-right">Receipt Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {filteredPayments.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="py-8 text-center text-slate-400">
                      No payment records found.
                    </td>
                  </tr>
                ) : (
                  filteredPayments.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-indigo-600">
                        {p.id}
                      </td>
                      <td className="py-3.5 px-4">
                        <p className="font-bold text-slate-900">{p.studentName}</p>
                        <span className="font-mono text-[10px] text-slate-400">
                          {p.studentId}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-mono font-medium text-slate-700">
                        {p.course}
                      </td>
                      <td className="py-3.5 px-4 font-mono font-bold text-emerald-700">
                        {formatINR(p.amount)}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono font-medium">
                          {p.mode}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-mono text-slate-600">
                        {p.date}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => setViewingReceipt(p)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-indigo-600 font-bold active:scale-95 transition-all cursor-pointer"
                        >
                          <FileText size={13} />
                          <span>View Receipt</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ================= MODAL: COLLECT FEE INSTALLMENT ================= */}
      {selectedStudentForPay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl w-full max-w-md border border-slate-200 shadow-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <CreditCard size={18} className="text-indigo-600" />
                <h3 className="font-bold text-sm text-slate-900">
                  Collect Fee Installment
                </h3>
              </div>
              <button
                onClick={() => setSelectedStudentForPay(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handlePaySubmit} className="p-6 space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <p className="font-bold text-slate-900 text-sm">{selectedStudentForPay.name}</p>
                <p className="font-mono text-slate-500">{selectedStudentForPay.id} • Course: {selectedStudentForPay.course}</p>
                <div className="flex justify-between pt-1 border-t border-slate-200 mt-2">
                  <span className="text-slate-500">Remaining Balance:</span>
                  <span className="font-mono font-bold text-amber-700">{formatINR(selectedStudentForPay.remainingFee)}</span>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Payment Amount (₹) *</label>
                <input
                  type="number"
                  required
                  min="1"
                  max={selectedStudentForPay.remainingFee}
                  value={payAmount}
                  onChange={(e) => setPayAmount(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-mono font-bold text-slate-900 focus:ring-1 focus:ring-indigo-500 outline-hidden"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Payment Mode</label>
                <select
                  value={payMode}
                  onChange={(e) => setPayMode(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white font-medium focus:ring-1 focus:ring-indigo-500 outline-hidden"
                >
                  <option value="UPI (GPay / PhonePe)">UPI (GPay / PhonePe / Paytm)</option>
                  <option value="Net Banking">Net Banking / IMPS</option>
                  <option value="Cash">Cash at Counter</option>
                  <option value="Debit / Credit Card">Debit / Credit Card</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Remarks / Note</label>
                <input
                  type="text"
                  placeholder="e.g. Installment 2 of 3"
                  value={payRemarks}
                  onChange={(e) => setPayRemarks(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-1 focus:ring-indigo-500 outline-hidden"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedStudentForPay(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-sm shadow-emerald-200 active:scale-95 transition-all cursor-pointer"
                >
                  Confirm &amp; Issue Receipt
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= FORMAL PRINTABLE PAYMENT RECEIPT MODAL ================= */}
      {viewingReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl w-full max-w-lg border border-slate-200 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
            
            {/* Modal Actions Header */}
            <div className="px-6 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50 print:hidden">
              <span className="font-mono text-xs font-bold text-slate-600">
                Official Fee Receipt Document
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold active:scale-95 transition-all cursor-pointer"
                >
                  <Printer size={14} /> Print Receipt
                </button>
                <button
                  onClick={() => setViewingReceipt(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Printable Receipt Paper Container */}
            <div className="p-8 overflow-y-auto space-y-6 text-slate-900 bg-white" id="printable-receipt">
              {/* Receipt Header */}
              <div className="flex items-start justify-between border-b-2 border-slate-900 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-900 flex items-center justify-center text-white font-bold text-xl">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h2 className="font-display font-extrabold text-lg text-slate-900 leading-tight">
                      EDUCA VEDA INSTITUTE
                    </h2>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Accredited Center for Wellness &amp; Wealth Sciences
                    </p>
                    <p className="text-[10px] text-slate-400">
                      Reg: EV/2026/DELHI • Support: admissions@educaveda.com
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 rounded bg-emerald-100 text-emerald-900 font-mono font-extrabold text-xs">
                    PAID RECEIPT
                  </span>
                  <p className="font-mono text-xs font-bold text-slate-900 mt-1">
                    {viewingReceipt.id}
                  </p>
                  <p className="text-[10px] text-slate-500 font-mono">
                    Date: {viewingReceipt.date}
                  </p>
                </div>
              </div>

              {/* Student Details Grid */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Student Name</span>
                  <p className="font-bold text-slate-900 text-sm">{viewingReceipt.studentName}</p>
                  <p className="font-mono text-indigo-700 text-xs">ID: {viewingReceipt.studentId}</p>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Enrolled Program</span>
                  <p className="font-bold text-slate-900">{viewingReceipt.course}</p>
                  <p className="text-[11px] text-slate-500">Payment Mode: {viewingReceipt.mode}</p>
                </div>
              </div>

              {/* Fee Breakdown Table */}
              <div className="space-y-2">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 text-[10px] uppercase font-bold">
                      <th className="py-2">Description</th>
                      <th className="py-2 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-2.5">
                        <p className="font-semibold text-slate-800">Tuition &amp; Certification Fee Installment</p>
                        <span className="text-[11px] text-slate-400">{viewingReceipt.remarks || "Standard payment"}</span>
                      </td>
                      <td className="py-2.5 text-right font-mono font-bold text-slate-900">
                        {formatINR(viewingReceipt.amount)}
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-slate-900 font-bold text-sm">
                      <td className="py-3">Total Amount Paid (INR)</td>
                      <td className="py-3 text-right font-mono text-emerald-700 text-base">
                        {formatINR(viewingReceipt.amount)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Stamp & Authorized Signature */}
              <div className="pt-6 flex items-end justify-between border-t border-slate-200 text-xs">
                <div className="flex items-center gap-2 text-emerald-700">
                  <ShieldCheck size={20} />
                  <span className="font-mono text-[11px] font-bold">
                    SYSTEM GENERATED &amp; VERIFIED
                  </span>
                </div>

                <div className="text-center">
                  <div className="w-32 h-10 border-b border-dashed border-slate-400 mb-1 flex items-center justify-center text-[10px] font-mono text-slate-400 italic">
                    [Authorized Seal]
                  </div>
                  <span className="font-bold text-slate-700 text-[11px]">
                    Accounts Officer, Educa Veda
                  </span>
                </div>
              </div>

            </div>

            {/* Footer button */}
            <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 text-right print:hidden">
              <button
                onClick={() => setViewingReceipt(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-white text-xs font-bold active:scale-95"
              >
                Close Receipt
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
