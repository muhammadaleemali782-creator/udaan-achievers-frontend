import React, { useState, useEffect } from 'react';
import {
  GraduationCap, Clock, UserCheck, Users, Plus, X, Search,
  Calendar, Award, BookOpen, Layers
} from 'lucide-react';
import { BatchItem, Student } from './types';
import { INITIAL_ERP_BATCHES, INITIAL_ERP_STUDENTS } from './erpInitialData';

export const CourseBatchManagement: React.FC = () => {
  const [batches, setBatches] = useState<BatchItem[]>(() => {
    const saved = localStorage.getItem('educa_erp_batches');
    return saved ? JSON.parse(saved) : INITIAL_ERP_BATCHES;
  });

  const [students] = useState<Student[]>(() => {
    const saved = localStorage.getItem('educa_erp_students');
    return saved ? JSON.parse(saved) : INITIAL_ERP_STUDENTS;
  });

  const [selectedBatchForStudents, setSelectedBatchForStudents] = useState<BatchItem | null>(null);
  const [isAddBatchModalOpen, setIsAddBatchModalOpen] = useState(false);

  // Form State
  const [newBatch, setNewBatch] = useState({
    batchName: '',
    courseCode: 'WCNA' as 'WCNA' | 'WCFM',
    duration: '6 Months Certification',
    courseFee: 18500,
    batchTiming: '08:00 AM - 10:30 AM (Mon - Fri)',
    faculty: 'Dr. R. K. Sharma (Dean & BAMS, MD)',
    capacity: 35
  });

  useEffect(() => {
    localStorage.setItem('educa_erp_batches', JSON.stringify(batches));
  }, [batches]);

  const handleAddBatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBatch.batchName) {
      alert('Please provide a batch name');
      return;
    }

    const item: BatchItem = {
      id: `batch-${Date.now()}`,
      batchName: newBatch.batchName,
      courseCode: newBatch.courseCode,
      courseName: newBatch.courseCode === 'WCNA'
        ? 'WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]'
        : 'WCFM [ WEALTH CONSULTANCY IN FINANCE MANAGEMENT ]',
      duration: newBatch.duration,
      courseFee: Number(newBatch.courseFee),
      batchTiming: newBatch.batchTiming,
      faculty: newBatch.faculty,
      capacity: Number(newBatch.capacity),
      enrolledStudentsCount: 0
    };

    setBatches([...batches, item]);
    setIsAddBatchModalOpen(false);
    setNewBatch({
      batchName: '',
      courseCode: 'WCNA',
      duration: '6 Months Certification',
      courseFee: 18500,
      batchTiming: '08:00 AM - 10:30 AM (Mon - Fri)',
      faculty: 'Dr. R. K. Sharma (Dean & BAMS, MD)',
      capacity: 35
    });
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
        <div>
          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-indigo-600" />
            <span>Course & Batch Management Desk</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage course certifications, fee structures, faculty assignments, batch timings and batch-wise student lists.
          </p>
        </div>

        <button
          onClick={() => setIsAddBatchModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Create New Batch</span>
        </button>
      </div>

      {/* Courses Overview Cards (Strictly WCNA & WCFM) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* WCNA Card */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-black uppercase">
                FLAGSHIP WELLNESS CERTIFICATION
              </span>
              <h3 className="text-sm font-black text-slate-900">
                WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]
              </h3>
            </div>
            <span className="text-base font-black text-emerald-600">₹18,500</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs pt-1 border-t border-slate-100">
            <div>
              <span className="text-[10px] text-slate-400 block font-semibold">Duration</span>
              <span className="font-bold text-slate-800">6 Months</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block font-semibold">Faculty Lead</span>
              <span className="font-bold text-slate-800">Dr. R. K. Sharma</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block font-semibold">Active Batches</span>
              <span className="font-bold text-slate-800">2 Batches</span>
            </div>
          </div>
        </div>

        {/* WCFM Card */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <span className="px-2.5 py-0.5 rounded-md bg-purple-50 border border-purple-200 text-purple-700 text-[10px] font-black uppercase">
                EXECUTIVE WEALTH DIPLOMA
              </span>
              <h3 className="text-sm font-black text-slate-900">
                WCFM [ WEALTH CONSULTANCY IN FINANCE MANAGEMENT ]
              </h3>
            </div>
            <span className="text-base font-black text-purple-600">₹22,000</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs pt-1 border-t border-slate-100">
            <div>
              <span className="text-[10px] text-slate-400 block font-semibold">Duration</span>
              <span className="font-bold text-slate-800">1 Year</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block font-semibold">Faculty Lead</span>
              <span className="font-bold text-slate-800">Prof. Arvind Mehta</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block font-semibold">Active Batches</span>
              <span className="font-bold text-slate-800">2 Batches</span>
            </div>
          </div>
        </div>
      </div>

      {/* Batches Table with Batch-wise Student List trigger */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>Active Batch Schedule & Student Roster</span>
          </h3>
          <span className="text-xs text-slate-500 font-semibold">{batches.length} Total Batches</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="bg-slate-100/70 text-slate-800 font-bold border-b border-slate-200 text-[11px] uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Batch Name</th>
                <th className="py-3 px-4">Course</th>
                <th className="py-3 px-4">Batch Timing</th>
                <th className="py-3 px-4">Faculty / Teacher</th>
                <th className="py-3 px-4">Course Fee</th>
                <th className="py-3 px-4">Enrolled Students</th>
                <th className="py-3 px-4 text-right">View Students</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {batches.map(batch => {
                const enrolled = students.filter(s => s.batch.toLowerCase().includes(batch.batchName.toLowerCase()) || batch.batchName.toLowerCase().includes(s.batch.toLowerCase()));
                return (
                  <tr key={batch.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">
                      {batch.batchName}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="font-semibold text-indigo-600">{batch.courseCode}</span>
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{batch.batchTiming}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-800 whitespace-nowrap">
                      {batch.faculty}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-900 whitespace-nowrap">
                      ₹{batch.courseFee.toLocaleString()}
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 font-bold text-slate-700 text-[11px]">
                        {enrolled.length} / {batch.capacity} Students
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <button
                        onClick={() => setSelectedBatchForStudents(batch)}
                        className="px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-bold cursor-pointer transition-colors"
                      >
                        View Student List →
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Batch-wise Student List Modal */}
      {selectedBatchForStudents && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 text-slate-900 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  {selectedBatchForStudents.batchName} — Student Roster
                </h3>
                <p className="text-[11px] text-slate-500">
                  Faculty: {selectedBatchForStudents.faculty} | Timing: {selectedBatchForStudents.batchTiming}
                </p>
              </div>
              <button
                onClick={() => setSelectedBatchForStudents(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Students enrolled */}
            {(() => {
              const enrolled = students.filter(s =>
                s.batch.toLowerCase().includes(selectedBatchForStudents.batchName.toLowerCase()) ||
                selectedBatchForStudents.batchName.toLowerCase().includes(s.batch.toLowerCase())
              );

              if (enrolled.length === 0) {
                return (
                  <div className="py-8 text-center text-slate-400 text-xs">
                    No students currently assigned to this batch.
                  </div>
                );
              }

              return (
                <div className="divide-y divide-slate-100 text-xs">
                  {enrolled.map((std, i) => (
                    <div key={std.id} className="py-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-slate-400 w-5">{i + 1}.</span>
                        <div>
                          <span className="font-bold text-slate-900 block">{std.name}</span>
                          <span className="font-mono text-[11px] text-indigo-600 font-bold">{std.studentId}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-700 font-medium block">{std.mobile}</span>
                        <span className="text-[10px] text-emerald-600 font-bold">Admitted: {std.admissionDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}

            <div className="pt-3 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedBatchForStudents(null)}
                className="px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold cursor-pointer"
              >
                Close Roster
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add New Batch Modal */}
      {isAddBatchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 text-slate-900 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Create New Batch</h3>
                <p className="text-[11px] text-slate-500">Configure batch timing, capacity and mentor lead</p>
              </div>
              <button
                onClick={() => setIsAddBatchModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddBatch} className="space-y-3.5 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Batch Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. WCNA Fast-Track Evening Batch"
                  value={newBatch.batchName}
                  onChange={e => setNewBatch({ ...newBatch, batchName: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Course Code</label>
                  <select
                    value={newBatch.courseCode}
                    onChange={e => {
                      const c = e.target.value as 'WCNA' | 'WCFM';
                      setNewBatch({
                        ...newBatch,
                        courseCode: c,
                        courseFee: c === 'WCNA' ? 18500 : 22000,
                        duration: c === 'WCNA' ? '6 Months Certification' : '1 Year Executive Diploma',
                        faculty: c === 'WCNA' ? 'Dr. R. K. Sharma (Dean & BAMS, MD)' : 'Prof. Arvind Mehta (Corporate Advisory Lead)'
                      });
                    }}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-semibold focus:outline-none focus:border-indigo-500"
                  >
                    <option value="WCNA">WCNA (Naturopathy & Ayurveda)</option>
                    <option value="WCFM">WCFM (Wealth & Finance)</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Batch Capacity</label>
                  <input
                    type="number"
                    value={newBatch.capacity}
                    onChange={e => setNewBatch({ ...newBatch, capacity: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Batch Timings & Days</label>
                <input
                  type="text"
                  placeholder="e.g. 06:00 PM - 08:30 PM (Mon - Fri)"
                  value={newBatch.batchTiming}
                  onChange={e => setNewBatch({ ...newBatch, batchTiming: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Faculty / Lead Mentor</label>
                <input
                  type="text"
                  value={newBatch.faculty}
                  onChange={e => setNewBatch({ ...newBatch, faculty: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddBatchModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold cursor-pointer"
                >
                  Save Batch
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
