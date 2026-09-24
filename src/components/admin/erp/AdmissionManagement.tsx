import React, { useState, useEffect } from 'react';
import {
  FileCheck2, Plus, Search, Filter, CheckCircle2, Clock, XCircle, AlertCircle, X,
  GraduationCap, Calendar, CheckSquare, Square
} from 'lucide-react';
import { Admission } from './types';
import { INITIAL_ERP_ADMISSIONS } from './erpInitialData';

export const AdmissionManagement: React.FC = () => {
  const [admissions, setAdmissions] = useState<Admission[]>(() => {
    const saved = localStorage.getItem('educa_erp_admissions');
    return saved ? JSON.parse(saved) : INITIAL_ERP_ADMISSIONS;
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [isNewAdmissionModalOpen, setIsNewAdmissionModalOpen] = useState(false);

  // Form State
  const [form, setForm] = useState({
    studentName: '',
    mobile: '',
    address: '',
    course: 'WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]',
    batch: 'WCNA Morning Batch A',
    admissionFee: 18500,
    marksheet: true,
    aadhaar: true,
    photo: true,
    medicalCert: true,
    remarks: 'Candidate registered successfully.'
  });

  useEffect(() => {
    localStorage.setItem('educa_erp_admissions', JSON.stringify(admissions));
  }, [admissions]);

  const handleCreateAdmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.studentName || !form.mobile) {
      alert('Please fill candidate name and mobile number.');
      return;
    }

    const newAdmission: Admission = {
      id: `adm-${Date.now()}`,
      studentId: `EDU-2026-${(admissions.length + 1).toString().padStart(3, '0')}`,
      studentName: form.studentName,
      mobile: form.mobile,
      address: form.address || 'Varanasi',
      course: form.course,
      batch: form.batch,
      admissionFee: Number(form.admissionFee),
      requiredDocuments: {
        marksheet: form.marksheet,
        aadhaar: form.aadhaar,
        photo: form.photo,
        medicalCert: form.medicalCert
      },
      status: 'Approved',
      admissionDate: new Date().toISOString().split('T')[0],
      remarks: form.remarks
    };

    setAdmissions([newAdmission, ...admissions]);
    setIsNewAdmissionModalOpen(false);
    setForm({
      studentName: '',
      mobile: '',
      address: '',
      course: 'WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]',
      batch: 'WCNA Morning Batch A',
      admissionFee: 18500,
      marksheet: true,
      aadhaar: true,
      photo: true,
      medicalCert: true,
      remarks: 'Candidate registered successfully.'
    });
  };

  const updateStatus = (id: string, newStatus: Admission['status']) => {
    setAdmissions(admissions.map(a => (a.id === id ? { ...a, status: newStatus } : a)));
  };

  const filteredAdmissions = admissions.filter(a => {
    const matchesSearch = a.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.mobile.includes(searchTerm) ||
      (a.studentId && a.studentId.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'ALL' || a.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
        <div>
          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-indigo-600" />
            <span>Admission Management Desk</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Process new admissions, verify document requirements, manage approval workflows and fees.
          </p>
        </div>

        <button
          onClick={() => setIsNewAdmissionModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>New Admission Entry</span>
        </button>
      </div>

      {/* Filters Toolbar */}
      <div className="flex flex-col sm:flex-row items-center gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search candidate name, mobile, or ID..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-4 h-4 text-slate-500" />
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:border-indigo-500"
          >
            <option value="ALL">All Statuses</option>
            <option value="Verified">Verified</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Admissions Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="bg-slate-50 text-slate-800 font-bold border-b border-slate-200 text-[11px] uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4">Candidate & ID</th>
                <th className="py-3.5 px-4">Course & Batch</th>
                <th className="py-3.5 px-4">Admission Fee</th>
                <th className="py-3.5 px-4">Required Documents</th>
                <th className="py-3.5 px-4">Admission Date</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Update Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredAdmissions.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-400">
                    No matching admission applications found.
                  </td>
                </tr>
              ) : (
                filteredAdmissions.map(adm => {
                  const docCount = Object.values(adm.requiredDocuments).filter(Boolean).length;
                  return (
                    <tr key={adm.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="font-bold text-slate-900">{adm.studentName}</div>
                        <div className="font-mono text-[11px] text-indigo-600 font-bold">{adm.studentId || 'ID Pending'}</div>
                        <div className="text-[10px] text-slate-400">{adm.mobile}</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-slate-900 line-clamp-1 max-w-xs">{adm.course}</div>
                        <div className="text-[11px] text-indigo-600 font-medium">{adm.batch}</div>
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-slate-800 whitespace-nowrap">
                        ₹{adm.admissionFee.toLocaleString()}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1.5 flex-wrap max-w-xs">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${adm.requiredDocuments.marksheet ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-600 border border-rose-200'}`}>
                            Marksheet
                          </span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${adm.requiredDocuments.aadhaar ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-600 border border-rose-200'}`}>
                            Aadhaar
                          </span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${adm.requiredDocuments.photo ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-600 border border-rose-200'}`}>
                            Photo
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap font-mono text-slate-600">
                        {adm.admissionDate}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                          adm.status === 'Verified'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : adm.status === 'Approved'
                            ? 'bg-blue-100 text-blue-800 border border-blue-200'
                            : adm.status === 'Pending'
                            ? 'bg-amber-100 text-amber-800 border border-amber-200'
                            : 'bg-rose-100 text-rose-800 border border-rose-200'
                        }`}>
                          {adm.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right whitespace-nowrap">
                        <select
                          value={adm.status}
                          onChange={e => updateStatus(adm.id, e.target.value as any)}
                          className="px-2.5 py-1 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:border-indigo-500 cursor-pointer shadow-2xs"
                        >
                          <option value="Approved">Approve</option>
                          <option value="Verified">Verify</option>
                          <option value="Pending">Pending</option>
                          <option value="Rejected">Reject</option>
                        </select>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Admission Modal */}
      {isNewAdmissionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 text-slate-900 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900">New Admission Entry</h3>
                <p className="text-[11px] text-slate-500">Record direct student admission & fee structure</p>
              </div>
              <button
                onClick={() => setIsNewAdmissionModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateAdmission} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 sm:col-span-1">
                  <label className="font-semibold text-slate-700 block mb-1">Candidate Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Candidate Name"
                    value={form.studentName}
                    onChange={e => setForm({ ...form, studentName: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="font-semibold text-slate-700 block mb-1">Mobile Phone *</label>
                  <input
                    type="text"
                    required
                    placeholder="+91 98765 00000"
                    value={form.mobile}
                    onChange={e => setForm({ ...form, mobile: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Residential Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  value={form.address}
                  onChange={e => setForm({ ...form, address: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Course Selection *</label>
                  <select
                    value={form.course}
                    onChange={e => {
                      const c = e.target.value;
                      const fee = c.includes('WCNA') ? 18500 : 22000;
                      setForm({ ...form, course: c, admissionFee: fee });
                    }}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-semibold focus:outline-none focus:border-indigo-500"
                  >
                    <option value="WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]">WCNA (Naturopathy & Ayurveda)</option>
                    <option value="WCFM [ WEALTH CONSULTANCY IN FINANCE MANAGEMENT ]">WCFM (Wealth & Finance)</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Batch Assignment *</label>
                  <select
                    value={form.batch}
                    onChange={e => setForm({ ...form, batch: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-semibold focus:outline-none focus:border-indigo-500"
                  >
                    <option value="WCNA Morning Batch A">WCNA Morning Batch A</option>
                    <option value="WCNA Evening Batch B">WCNA Evening Batch B</option>
                    <option value="WCFM Executive Morning Batch">WCFM Executive Morning Batch</option>
                    <option value="WCFM Weekend Pro Batch">WCFM Weekend Pro Batch</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Admission Fee (INR) *</label>
                <input
                  type="number"
                  required
                  value={form.admissionFee}
                  onChange={e => setForm({ ...form, admissionFee: Number(e.target.value) })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-mono font-bold focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Required Documents Checklist */}
              <div>
                <label className="font-semibold text-slate-700 block mb-1.5">Required Documents Submitted:</label>
                <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.marksheet}
                      onChange={e => setForm({ ...form, marksheet: e.target.checked })}
                      className="rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>10th / 12th Marksheet</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.aadhaar}
                      onChange={e => setForm({ ...form, aadhaar: e.target.checked })}
                      className="rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>Aadhaar Card Copy</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.photo}
                      onChange={e => setForm({ ...form, photo: e.target.checked })}
                      className="rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>Passport Photos (4)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.medicalCert}
                      onChange={e => setForm({ ...form, medicalCert: e.target.checked })}
                      className="rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>Medical / Fitness Proof</span>
                  </label>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsNewAdmissionModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold cursor-pointer"
                >
                  Submit Admission
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
