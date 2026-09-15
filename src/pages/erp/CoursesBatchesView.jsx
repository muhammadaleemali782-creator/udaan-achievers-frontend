import React, { useState } from "react";
import {
  BookOpen,
  Calendar,
  Users,
  Clock,
  UserCheck,
  Building,
  Plus,
  ArrowRight,
  Eye,
  CheckCircle,
  Sparkles,
  Award,
  Layers,
  X,
} from "lucide-react";
import { useERP } from "../../context/ERPContext";

function formatINR(val) {
  return "₹" + Number(val || 0).toLocaleString("en-IN");
}

export default function CoursesBatchesView() {
  const { courses, batches, students } = useERP();
  const [selectedBatch, setSelectedBatch] = useState(null);

  // Get students enrolled in a specific batch
  const getBatchStudents = (batchId) => {
    return students.filter((s) => s.batch === batchId);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
          <BookOpen size={26} className="text-indigo-600" />
          <span>Course &amp; Batch Management</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Curriculum specifications for WCNA, WCFM, and assigned batch student rosters
        </p>
      </div>

      {/* ================= SECTION 1: FLAGSHIP COURSES ================= */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Award size={20} className="text-indigo-600" />
            <span>Curriculum Certification Programs</span>
          </h2>
          <span className="text-xs font-mono text-indigo-600 font-bold">
            2 Flagship Degrees Active
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {courses.map((course) => {
            const courseStudents = students.filter((s) => s.course === course.code);
            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-extrabold bg-indigo-50 text-indigo-700 border border-indigo-100">
                      {course.code}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                      Duration: {course.duration}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2 leading-snug">
                    {course.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {course.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs mb-4">
                    <div>
                      <span className="text-slate-400 font-bold uppercase text-[10px]">Total Course Fee</span>
                      <p className="font-mono font-extrabold text-emerald-700 text-base">
                        {formatINR(course.fee)}
                      </p>
                    </div>
                    <div>
                      <span className="text-slate-400 font-bold uppercase text-[10px]">Enrolled Students</span>
                      <p className="font-mono font-extrabold text-slate-800 text-base">
                        {courseStudents.length} Students
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-700">
                    <p className="flex items-center gap-2">
                      <UserCheck size={14} className="text-indigo-600" />
                      <span><b>Head Faculty:</b> {course.faculty}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Layers size={14} className="text-sky-600" />
                      <span><b>Seats Allocated:</b> {course.seats}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    Assigned Batches: <b className="text-indigo-700">{course.batches.join(", ")}</b>
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600">
                    <CheckCircle size={14} /> Admissions Open
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= SECTION 2: BATCH ROSTER & TIMETABLE ================= */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Calendar size={20} className="text-indigo-600" />
              <span>Timetable &amp; Batch-wise Student Rosters</span>
            </h2>
            <p className="text-xs text-slate-500">
              Click "View Student Roster" to view enrolled students in any batch
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {batches.map((batch) => {
            const batchStudents = getBatchStudents(batch.id);
            return (
              <div
                key={batch.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-100 text-slate-700">
                      {batch.id}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      {batch.status}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-slate-900 mb-1">
                    {batch.name}
                  </h3>

                  <div className="space-y-2 text-xs text-slate-600 my-3">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-slate-400" />
                      <span className="font-medium text-slate-800">{batch.timing}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-slate-400" />
                      <span>{batch.days}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UserCheck size={14} className="text-slate-400" />
                      <span>{batch.faculty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building size={14} className="text-slate-400" />
                      <span>{batch.room}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="text-slate-500">Enrolled Students:</span>
                    <span className="font-mono font-bold text-indigo-700">
                      {batchStudents.length} / {batch.capacity}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedBatch({ ...batch, students: batchStudents })}
                    className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 active:scale-95 text-indigo-700 text-xs font-bold transition-all cursor-pointer"
                  >
                    <Eye size={14} />
                    <span>View Student List ({batchStudents.length})</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= MODAL: BATCH STUDENT ROSTER ================= */}
      {selectedBatch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl w-full max-w-2xl border border-slate-200 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <h3 className="font-bold text-base text-slate-900">
                  {selectedBatch.name} — Student Roster
                </h3>
                <p className="text-xs text-slate-500">
                  Timing: {selectedBatch.timing} • Faculty: {selectedBatch.faculty}
                </p>
              </div>
              <button
                onClick={() => setSelectedBatch(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              {selectedBatch.students.length === 0 ? (
                <p className="text-center py-8 text-xs text-slate-400">
                  No students currently assigned to this batch.
                </p>
              ) : (
                <div className="divide-y divide-slate-100 text-xs">
                  {selectedBatch.students.map((s, idx) => (
                    <div key={s.id} className="py-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="w-5 font-mono text-slate-400">{idx + 1}.</span>
                        <img
                          src={s.avatar}
                          alt={s.name}
                          className="w-8 h-8 rounded-full border border-slate-200 object-cover"
                        />
                        <div>
                          <p className="font-bold text-slate-900">{s.name}</p>
                          <span className="font-mono text-[10px] text-indigo-600 font-semibold">
                            {s.id} • {s.mobile}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="font-mono font-bold text-emerald-700">
                          {s.attendanceRate}% Attendance
                        </span>
                        <p className="text-[10px] text-slate-400">
                          {s.remainingFee === 0 ? "Fee Cleared" : `Due ${formatINR(s.remainingFee)}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 text-right">
              <button
                onClick={() => setSelectedBatch(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-white text-xs font-bold active:scale-95"
              >
                Close Roster
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
