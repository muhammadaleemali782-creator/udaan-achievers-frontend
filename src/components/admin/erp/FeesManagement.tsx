import React, { useState, useEffect } from 'react';
import {
  IndianRupee, Search, Filter, Plus, Printer, CheckCircle2, Clock, AlertCircle, X,
  History, ArrowUpRight, TrendingUp
} from 'lucide-react';
import { FeeRecord, PaymentTransaction } from './types';
import { INITIAL_ERP_FEES } from './erpInitialData';
import { ReceiptModal } from './ReceiptModal';

export const FeesManagement: React.FC = () => {
  const [fees, setFees] = useState<FeeRecord[]>(() => {
    const saved = localStorage.getItem('educa_erp_fees');
    return saved ? JSON.parse(saved) : INITIAL_ERP_FEES;
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [filterPending, setFilterPending] = useState(false);
  const [activeReceiptRecord, setActiveReceiptRecord] = useState<FeeRecord | null>(null);
  const [recordPaymentModal, setRecordPaymentModal] = useState<FeeRecord | null>(null);
  const [paymentAmount, setPaymentAmount] = useState<number>(5000);
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Bank Transfer' | 'Cash' | 'Card'>('UPI');
  const [paymentNotes, setPaymentNotes] = useState('Installment payment');

  useEffect(() => {
    localStorage.setItem('educa_erp_fees', JSON.stringify(fees));
  }, [fees]);

  // Aggregate Metrics
  const totalExpected = fees.reduce((acc, f) => acc + f.totalCourseFee, 0);
  const totalCollected = fees.reduce((acc, f) => acc + f.paidAmount, 0);
  const totalPending = fees.reduce((acc, f) => acc + f.remainingAmount, 0);

  const handleRecordPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recordPaymentModal) return;

    const amount = Number(paymentAmount);
    if (amount <= 0 || amount > recordPaymentModal.remainingAmount) {
      alert('Please enter a valid payment amount up to the remaining balance.');
      return;
    }

    const tx: PaymentTransaction = {
      id: `tx-${Date.now()}`,
      amount: amount,
      date: new Date().toISOString().split('T')[0],
      method: paymentMethod,
      receiptNo: `REC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      notes: paymentNotes
    };

    const updated = fees.map(f => {
      if (f.id === recordPaymentModal.id) {
        const newPaid = f.paidAmount + amount;
        const newRem = Math.max(0, f.totalCourseFee - newPaid);
        return {
          ...f,
          paidAmount: newPaid,
          remainingAmount: newRem,
          lastPaymentDate: tx.date,
          paymentHistory: [...f.paymentHistory, tx]
        };
      }
      return f;
    });

    setFees(updated);
    const updatedTarget = updated.find(f => f.id === recordPaymentModal.id);
    setRecordPaymentModal(null);
    if (updatedTarget) {
      setActiveReceiptRecord(updatedTarget);
    }
  };

  const filteredFees = fees.filter(f => {
    const matchesSearch = f.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPending = !filterPending || f.remainingAmount > 0;
    return matchesSearch && matchesPending;
  });

  return (
    <div className="space-y-6">
      {/* Top Financial Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Total Course Fees
            </span>
            <span className="text-xl font-black text-slate-900 mt-1 block">
              ₹{totalExpected.toLocaleString()}
            </span>
            <span className="text-[10px] text-slate-400 font-semibold">5 Enrolled Scholars</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
            <IndianRupee className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 shadow-xs flex items-center justify-between bg-gradient-to-br from-white to-emerald-50/30">
          <div>
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
              Fees Collected To-Date
            </span>
            <span className="text-xl font-black text-emerald-600 mt-1 block">
              ₹{totalCollected.toLocaleString()}
            </span>
            <span className="text-[10px] text-emerald-700 font-semibold">Verified Receipts Active</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-amber-200/80 shadow-xs flex items-center justify-between bg-gradient-to-br from-white to-amber-50/30">
          <div>
            <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block">
              Pending Balance Fees
            </span>
            <span className="text-xl font-black text-amber-600 mt-1 block">
              ₹{totalPending.toLocaleString()}
            </span>
            <span className="text-[10px] text-amber-700 font-semibold">Upcoming Installments</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
            <Clock className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Action and Search Toolbar */}
      <div className="flex flex-col sm:flex-row items-center gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by student name or student ID (EDU-2026-xxx)..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <button
          onClick={() => setFilterPending(!filterPending)}
          className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
            filterPending
              ? 'bg-amber-100 text-amber-900 border border-amber-300'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
          }`}
        >
          <span>Pending Fees Only</span>
        </button>
      </div>

      {/* Fees Records Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="bg-slate-50 text-slate-800 font-bold border-b border-slate-200 text-[11px] uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4">Student & ID</th>
                <th className="py-3.5 px-4">Course Program</th>
                <th className="py-3.5 px-4">Total Course Fee</th>
                <th className="py-3.5 px-4">Paid Amount</th>
                <th className="py-3.5 px-4">Remaining Balance</th>
                <th className="py-3.5 px-4">Last Payment Date</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredFees.map(fee => (
                <tr key={fee.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="font-bold text-slate-900">{fee.studentName}</div>
                    <div className="font-mono text-[11px] text-indigo-600 font-bold">{fee.studentId}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-medium text-slate-800 line-clamp-1 max-w-xs">{fee.courseName}</div>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-slate-900 whitespace-nowrap">
                    ₹{fee.totalCourseFee.toLocaleString()}
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-emerald-600 whitespace-nowrap">
                    ₹{fee.paidAmount.toLocaleString()}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    {fee.remainingAmount === 0 ? (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase">
                        Fully Paid
                      </span>
                    ) : (
                      <span className="font-mono font-black text-amber-600">
                        ₹{fee.remainingAmount.toLocaleString()}
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-600 whitespace-nowrap">
                    {fee.lastPaymentDate}
                  </td>
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-1.5">
                      {fee.remainingAmount > 0 && (
                        <button
                          onClick={() => {
                            setRecordPaymentModal(fee);
                            setPaymentAmount(Math.min(5000, fee.remainingAmount));
                          }}
                          className="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold transition-colors cursor-pointer"
                        >
                          + Record Payment
                        </button>
                      )}
                      <button
                        onClick={() => setActiveReceiptRecord(fee)}
                        className="px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>Receipt</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Record Payment Modal */}
      {recordPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 text-slate-900 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Record Fee Installment</h3>
                <p className="text-[11px] text-slate-500">{recordPaymentModal.studentName} ({recordPaymentModal.studentId})</p>
              </div>
              <button
                onClick={() => setRecordPaymentModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleRecordPayment} className="space-y-3.5 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-2 gap-2">
                <div>
                  <span className="text-[10px] text-slate-500 font-semibold block">Total Course Fee</span>
                  <span className="font-bold text-slate-800">₹{recordPaymentModal.totalCourseFee.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-semibold block">Remaining Balance</span>
                  <span className="font-bold text-amber-600">₹{recordPaymentModal.remainingAmount.toLocaleString()}</span>
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Payment Amount (INR) *</label>
                <input
                  type="number"
                  required
                  min={1}
                  max={recordPaymentModal.remainingAmount}
                  value={paymentAmount}
                  onChange={e => setPaymentAmount(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg font-mono font-bold text-slate-900 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Payment Method *</label>
                <select
                  value={paymentMethod}
                  onChange={e => setPaymentMethod(e.target.value as any)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg font-semibold text-slate-800 focus:outline-none focus:border-indigo-500"
                >
                  <option value="UPI">UPI (Google Pay / PhonePe / Paytm)</option>
                  <option value="Bank Transfer">Bank Transfer (NEFT / IMPS)</option>
                  <option value="Cash">Cash at Counter</option>
                  <option value="Card">Debit / Credit Card</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Remarks / Receipt Note</label>
                <input
                  type="text"
                  value={paymentNotes}
                  onChange={e => setPaymentNotes(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setRecordPaymentModal(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold cursor-pointer"
                >
                  Save & Print Receipt
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Official Printable Receipt Modal */}
      {activeReceiptRecord && (
        <ReceiptModal
          feeRecord={activeReceiptRecord}
          onClose={() => setActiveReceiptRecord(null)}
        />
      )}
    </div>
  );
};
