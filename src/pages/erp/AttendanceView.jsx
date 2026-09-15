import React, { useState } from "react";
import {
  CalendarCheck2,
  Users,
  CheckCircle,
  XCircle,
  Calendar,
  Filter,
  CheckCheck,
  FileBarChart,
  User,
  Clock,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { useERP } from "../../context/ERPContext";

export default function AttendanceView() {
  const {
    students,
    batches,
    attendance,
    markAttendance,
    markAllBatchPresent,
  } = useERP();

  const TODAY = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(TODAY);
  const [selectedBatchId, setSelectedBatchId] = useState("WCNA-M1");
  const [viewMode, setViewMode] = useState("DAILY"); // DAILY | MONTHLY | STUDENT

  // Students belonging to the chosen batch
  const batchStudents = students.filter((s) => s.batch === selectedBatchId);
  const selectedBatch = batches.find((b) => b.id === selectedBatchId);

  // Key for attendance state: date_batchId
  const attendanceKey = `${selectedDate}_${selectedBatchId}`;
  const currentRollCall = attendance[attendanceKey] || {};

  // Status counts for today's batch
  const presentCount = batchStudents.filter(
    (s) => (currentRollCall[s.id] || "Present") === "Present"
  ).length;
  const absentCount = batchStudents.length - presentCount;

  const handleToggle = (studentId, currentStatus) => {
    const nextStatus = currentStatus === "Present" ? "Absent" : "Present";
    markAttendance(selectedDate, selectedBatchId, studentId, nextStatus);
  };

  const handleMarkAll = () => {
    markAllBatchPresent(
      selectedDate,
      selectedBatchId,
      batchStudents.map((s) => s.id)
    );
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
            <CalendarCheck2 size={26} className="text-indigo-600" />
            <span>Attendance &amp; Roll Call Management</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Daily roll calls, batch-wise tracking, monthly summaries, and student-level reports
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-2xs">
          <button
            onClick={() => setViewMode("DAILY")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === "DAILY"
                ? "bg-indigo-600 text-white font-bold shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Daily Roll Call
          </button>
          <button
            onClick={() => setViewMode("REPORTS")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === "REPORTS"
                ? "bg-indigo-600 text-white font-bold shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Monthly &amp; Student Reports
          </button>
        </div>
      </div>

      {/* ================= VIEW 1: DAILY ROLL CALL ================= */}
      {viewMode === "DAILY" && (
        <div className="space-y-5">
          {/* Controls Bar */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            <div className="flex flex-wrap items-center gap-3">
              {/* Batch Selector */}
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                  Select Batch
                </label>
                <select
                  value={selectedBatchId}
                  onChange={(e) => setSelectedBatchId(e.target.value)}
                  className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 bg-white focus:outline-hidden focus:border-indigo-500"
                >
                  {batches.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.name} ({b.timing})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date Picker */}
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                  Attendance Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono font-bold text-slate-800 focus:outline-hidden focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Quick Actions & Live Stats */}
            <div className="flex items-center gap-3 justify-between md:justify-end">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-bold">
                  {presentCount} Present
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-rose-100 text-rose-800 font-bold">
                  {absentCount} Absent
                </span>
              </div>

              <button
                onClick={handleMarkAll}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
              >
                <CheckCheck size={15} />
                <span>Mark All Present</span>
              </button>
            </div>
          </div>

          {/* Batch Info Header */}
          <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
            <div>
              <span className="font-bold text-indigo-900 text-sm">{selectedBatch?.name}</span>
              <p className="text-indigo-700 mt-0.5">
                Instructor: <b>{selectedBatch?.faculty}</b> • Room: {selectedBatch?.room} • Days: {selectedBatch?.days}
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-white text-indigo-700 font-mono font-bold text-xs border border-indigo-200">
              {batchStudents.length} Students in Batch
            </span>
          </div>

          {/* Roster Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-3.5 px-4 w-12">#</th>
                  <th className="py-3.5 px-4">Student Name &amp; ID</th>
                  <th className="py-3.5 px-4">Mobile</th>
                  <th className="py-3.5 px-4">Historical Rate</th>
                  <th className="py-3.5 px-4 text-center">Status</th>
                  <th className="py-3.5 px-4 text-right">Quick Toggle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {batchStudents.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-10 text-center text-slate-400">
                      No students enrolled in this batch yet.
                    </td>
                  </tr>
                ) : (
                  batchStudents.map((s, idx) => {
                    const status = currentRollCall[s.id] || "Present";
                    const isPresent = status === "Present";
                    return (
                      <tr key={s.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3.5 px-4 font-mono text-slate-400">
                          {idx + 1}
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={s.avatar}
                              alt={s.name}
                              className="w-8 h-8 rounded-full border border-slate-200 object-cover"
                            />
                            <div>
                              <p className="font-bold text-slate-900">{s.name}</p>
                              <span className="font-mono text-[10px] text-indigo-600 font-semibold">
                                {s.id}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 font-mono">
                          {s.mobile}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="font-mono font-bold text-slate-700">
                            {s.attendanceRate}%
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <span
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold font-mono ${
                              isPresent
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-rose-100 text-rose-800"
                            }`}
                          >
                            {isPresent ? (
                              <>
                                <CheckCircle size={12} /> Present
                              </>
                            ) : (
                              <>
                                <XCircle size={12} /> Absent
                              </>
                            )}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => handleToggle(s.id, status)}
                            className={`px-3 py-1.5 rounded-xl font-bold text-xs active:scale-95 transition-all cursor-pointer ${
                              isPresent
                                ? "bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200"
                                : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200"
                            }`}
                          >
                            Mark {isPresent ? "Absent" : "Present"}
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ================= VIEW 2: MONTHLY & STUDENT REPORTS ================= */}
      {viewMode === "REPORTS" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Batch Monthly Summary */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center gap-2">
                <FileBarChart size={20} className="text-indigo-600" />
                <h3 className="font-bold text-base text-slate-900">
                  Monthly Attendance Summary by Batch
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                Aggregated monthly attendance percentages across active batches
              </p>

              <div className="space-y-3 pt-2">
                {batches.map((b) => {
                  const bStudents = students.filter((s) => s.batch === b.id);
                  const avgRate = bStudents.length
                    ? Math.round(
                        bStudents.reduce((sum, s) => sum + s.attendanceRate, 0) /
                          bStudents.length
                      )
                    : 90;

                  return (
                    <div key={b.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <div>
                          <span className="font-bold text-slate-900">{b.name}</span>
                          <span className="font-mono text-slate-400 text-[10px] ml-1.5">({b.timing})</span>
                        </div>
                        <span className="font-mono font-bold text-emerald-700 text-sm">
                          {avgRate}%
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-indigo-600"
                          style={{ width: `${avgRate}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Student-wise Attendance Profile Leaderboard */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center gap-2">
                <Users size={20} className="text-emerald-600" />
                <h3 className="font-bold text-base text-slate-900">
                  Student-wise Attendance Report
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                Individual regularity metrics and consistency rankings
              </p>

              <div className="divide-y divide-slate-100 overflow-y-auto max-h-80 text-xs">
                {students.map((s) => (
                  <div key={s.id} className="py-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={s.avatar}
                        alt={s.name}
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-bold text-slate-900">{s.name}</p>
                        <span className="text-[10px] font-mono text-slate-400">{s.course} • {s.batch}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span
                        className={`inline-block font-mono font-bold ${
                          s.attendanceRate >= 90
                            ? "text-emerald-700"
                            : s.attendanceRate >= 75
                            ? "text-amber-700"
                            : "text-rose-700"
                        }`}
                      >
                        {s.attendanceRate}% Attendance
                      </span>
                      <p className="text-[10px] text-slate-400">
                        {s.attendanceRate >= 85 ? "Eligible for Exam" : "Low Attendance Alert"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
