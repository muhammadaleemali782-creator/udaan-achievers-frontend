import React from 'react';
import { X, Printer, CheckCircle2 } from 'lucide-react';
import { FeeRecord, PaymentTransaction } from './types';

interface ReceiptModalProps {
  feeRecord: FeeRecord;
  transaction?: PaymentTransaction;
  onClose: () => void;
}

export const ReceiptModal: React.FC<ReceiptModalProps> = ({ feeRecord, transaction, onClose }) => {
  const currentTx = transaction || feeRecord.paymentHistory[feeRecord.paymentHistory.length - 1] || {
    id: 'tx-default',
    amount: feeRecord.paidAmount,
    date: feeRecord.lastPaymentDate,
    method: 'UPI',
    receiptNo: 'REC-2026-8801',
    notes: 'Official Fee Receipt'
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Fee Payment Receipt</h3>
              <p className="text-[11px] text-slate-500 font-mono">Receipt #{currentTx.receiptNo}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Receipt</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Receipt Body */}
        <div className="p-8 overflow-y-auto space-y-6 text-slate-800" id="printable-receipt">
          {/* Institution Header */}
          <div className="text-center border-b border-slate-200 pb-6 space-y-1">
            <div className="w-16 h-16 mx-auto mb-2 rounded-full border-2 border-slate-300 p-1 bg-white flex items-center justify-center">
              <img src="/logo.jpg" alt="Educa-Veda Logo" className="w-full h-full object-contain rounded-full" />
            </div>
            <h1 className="text-lg font-black tracking-tight text-slate-900 uppercase">
              Educa Institute of Consultancy
            </h1>
            <p className="text-xs font-bold text-indigo-700">
              एडुका इंस्टीट्यूट ऑफ कंसल्टेंसी • प्रयागराज
            </p>
            <p className="text-[10px] text-slate-500">
              VIHAR GALI NO. 3 UTTHAN ROAD JHALWA PRAYAGRAJ | Phone: +91 98765 43210 | admissions@educaveda.com
            </p>
            <div className="inline-block mt-2 px-3 py-0.5 rounded-full bg-slate-100 border border-slate-300 text-[10px] font-mono font-bold text-slate-700 uppercase">
              Official Student Fee Payment Voucher
            </div>
          </div>

          {/* Receipt Details Grid */}
          <div className="grid grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div>
              <span className="text-slate-500 block text-[10px] uppercase font-semibold">Student Name:</span>
              <span className="font-bold text-slate-900 text-sm">{feeRecord.studentName}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase font-semibold">Student ID:</span>
              <span className="font-mono font-bold text-indigo-700 text-sm">{feeRecord.studentId}</span>
            </div>
            <div className="col-span-2">
              <span className="text-slate-500 block text-[10px] uppercase font-semibold">Enrolled Course:</span>
              <span className="font-semibold text-slate-900">{feeRecord.courseName}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase font-semibold">Payment Date:</span>
              <span className="font-medium text-slate-800">{currentTx.date}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase font-semibold">Payment Mode:</span>
              <span className="font-medium text-slate-800">{currentTx.method}</span>
            </div>
          </div>

          {/* Financial Breakdown Table */}
          <table className="w-full text-xs border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-100 text-slate-700 font-semibold">
              <tr>
                <th className="py-2.5 px-4 text-left border-b border-slate-200">Description</th>
                <th className="py-2.5 px-4 text-right border-b border-slate-200">Amount (INR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="py-2.5 px-4 text-slate-700">Total Approved Course Fee</td>
                <td className="py-2.5 px-4 text-right font-medium">₹{feeRecord.totalCourseFee.toLocaleString()}</td>
              </tr>
              <tr className="bg-emerald-50/60 font-semibold text-emerald-900">
                <td className="py-2.5 px-4">Amount Paid in this Receipt ({currentTx.method})</td>
                <td className="py-2.5 px-4 text-right font-bold text-emerald-700">₹{currentTx.amount.toLocaleString()}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 text-slate-700">Cumulative Total Paid to Date</td>
                <td className="py-2.5 px-4 text-right font-medium">₹{feeRecord.paidAmount.toLocaleString()}</td>
              </tr>
              <tr className="bg-amber-50/70 font-semibold text-amber-900">
                <td className="py-2.5 px-4">Balance Remaining Amount</td>
                <td className="py-2.5 px-4 text-right font-bold text-amber-700">₹{feeRecord.remainingAmount.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>

          {/* Verification & Signature */}
          <div className="pt-8 flex items-end justify-between text-xs text-slate-600">
            <div className="space-y-1">
              <div className="w-24 h-12 rounded border border-dashed border-slate-300 flex items-center justify-center text-[10px] text-slate-400">
                Official Seal
              </div>
              <p className="text-[10px] text-slate-400">System Generated Receipt</p>
            </div>
            <div className="text-right space-y-1">
              <div className="border-b border-slate-400 w-36 pb-1 text-center font-bold text-slate-800 text-[11px]">
                Dr. R. K. Sharma
              </div>
              <p className="text-[10px] text-slate-500 uppercase font-semibold">Authorized Signatory</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
