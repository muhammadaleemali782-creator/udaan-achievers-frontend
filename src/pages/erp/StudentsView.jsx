import React, { useState } from "react";
import {
  Users,
  Plus,
  Search,
  Filter,
  Eye,
  Trash2,
  Edit2,
  X,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CreditCard,
  CheckCircle,
  FileText,
  Building2,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { useERP } from "../../context/ERPContext";

function formatINR(val) {
  return "₹" + Number(val || 0).toLocaleString("en-IN");
}

export default function StudentsView() {
  const {
    students,
    courses,
    batches,
    addStudent,
    updateStudent,
    deleteStudent,
    generateNextStudentId,
  } = useERP();

  const [search, setSearch] = useState("");
  const [filterCourse, setFilterCourse] = useState("ALL");
  const [filterBatch, setFilterBatch] = useState("ALL");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // Add student form state
  const [newStudent, setNewStudent] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    course: "WCNA",
    batch: "WCNA-M1",
    admissionDate: new Date().toISOString().split("T")[0],
    initialPayment: "5000",
    paymentMode: "UPI",
  });

  const nextId = generateNextStudentId();

  // Filtered student roster
  const filtered = students.filter((s) => {
    const matchQuery =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toLowerCase().includes(search.toLowerCase()) ||
      s.mobile.includes(search);
    const matchCourse = filterCourse === "ALL" || s.course === filterCourse;
    const matchBatch = filterBatch === "ALL" || s.batch === filterBatch;
    return matchQuery && matchCourse && matchBatch;
  });

  const handleCreateStudent = (e) => {
    e.preventDefault();
    if (!newStudent.name.trim()) {
      toast.error("Student name is required");
      return;
    }
    if (!newStudent.mobile.trim()) {
      toast.error("Mobile number is required");
      return;
    }

    addStudent(newStudent);
    setShowAddModal(false);
    setNewStudent({
      name: "",
      mobile: "",
      email: "",
      address: "",
      course: "WCNA",
      batch: "WCNA-M1",
      admissionDate: new Date().toISOString().split("T")[0],
      initialPayment: "5000",
      paymentMode: "UPI",
    });
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
            <Users size={26} className="text-indigo-600" />
            <span>Student Management Directory</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Total Enrolled Scholars: <b className="text-slate-800 font-mono">{students.length}</b>
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-xs font-bold shadow-sm shadow-indigo-200 transition-all cursor-pointer"
        >
          <Plus size={16} />
          <span>Add New Student</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search student by Name, Mobile, or Auto ID (e.g. STU-2026-001)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Course filter */}
          <select
            value={filterCourse}
            onChange={(e) => setFilterCourse(e.target.value)}
            className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium text-slate-700 bg-white focus:outline-hidden focus:border-indigo-500"
          >
            <option value="ALL">All Courses</option>
            {courses.map((c) => (
              <option key={c.id} value={c.code}>
                {c.code} ({c.shortName})
              </option>
            ))}
          </select>

          {/* Batch filter */}
          <select
            value={filterBatch}
            onChange={(e) => setFilterBatch(e.target.value)}
            className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium text-slate-700 bg-white focus:outline-hidden focus:border-indigo-500"
          >
            <option value="ALL">All Batches</option>
            {batches.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Student Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3.5 px-4">Student ID &amp; Name</th>
                <th className="py-3.5 px-4">Course &amp; Batch</th>
                <th className="py-3.5 px-4">Contact Info</th>
                <th className="py-3.5 px-4">Admission Date</th>
                <th className="py-3.5 px-4">Fees Status</th>
                <th className="py-3.5 px-4">Attendance</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-8 text-center text-slate-400">
                    No students found matching your filters.
                  </td>
                </tr>
              ) : (
                filtered.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50/70 transition-colors">
                    {/* ID & Name */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={s.avatar}
                          alt={s.name}
                          className="w-8 h-8 rounded-full border border-slate-200 object-cover bg-slate-100"
                        />
                        <div>
                          <p className="font-bold text-slate-900 leading-tight">{s.name}</p>
                          <span className="font-mono text-[10px] text-indigo-600 font-semibold">
                            {s.id}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Course & Batch */}
                    <td className="py-3.5 px-4">
                      <div>
                        <span className="font-mono font-bold text-[11px] text-slate-800">
                          {s.course}
                        </span>
                        <p className="text-[11px] text-slate-500">{s.batch}</p>
                      </div>
                    </td>

                    {/* Contact Info */}
                    <td className="py-3.5 px-4">
                      <p className="text-slate-800">{s.mobile}</p>
                      <p className="text-[11px] text-slate-400">{s.email}</p>
                    </td>

                    {/* Admission Date */}
                    <td className="py-3.5 px-4 font-mono text-slate-600">
                      {s.admissionDate}
                    </td>

                    {/* Fees Status */}
                    <td className="py-3.5 px-4">
                      {s.remainingFee === 0 ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          <CheckCircle size={10} /> Paid Full
                        </span>
                      ) : (
                        <div>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                            Due {formatINR(s.remainingFee)}
                          </span>
                          <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                            Paid: {formatINR(s.paidFee)}
                          </p>
                        </div>
                      )}
                    </td>

                    {/* Attendance */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              s.attendanceRate >= 90
                                ? "bg-emerald-500"
                                : s.attendanceRate >= 75
                                ? "bg-amber-500"
                                : "bg-rose-500"
                            }`}
                            style={{ width: `${s.attendanceRate}%` }}
                          />
                        </div>
                        <span className="font-mono text-[11px] font-semibold text-slate-700">
                          {s.attendanceRate}%
                        </span>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="inline-flex items-center gap-1">
                        <button
                          onClick={() => setSelectedStudent(s)}
                          className="p-1.5 rounded-lg text-indigo-600 hover:bg-indigo-50 active:scale-95 transition-all"
                          title="View Full Profile"
                        >
                          <Eye size={15} />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete ${s.name} (${s.id})?`)) {
                              deleteStudent(s.id);
                            }
                          }}
                          className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 active:scale-95 transition-all"
                          title="Delete Student"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= MODAL: ADD NEW STUDENT (WITH AUTO ID) ================= */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl w-full max-w-lg border border-slate-200 shadow-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <Users size={18} className="text-indigo-600" />
                <h3 className="font-bold text-sm text-slate-900">
                  Enroll New Student (Auto-Generated ID)
                </h3>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateStudent} className="p-6 space-y-4 text-xs">
              {/* Auto ID Display */}
              <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-between">
                <div>
                  <span className="text-indigo-700 font-medium">System Allocated Student ID:</span>
                  <p className="text-[11px] text-slate-500">Auto-incremented on enrollment</p>
                </div>
                <span className="px-3 py-1 rounded-lg bg-indigo-600 text-white font-mono font-bold text-sm">
                  {nextId}
                </span>
              </div>

              {/* Student Name */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">Student Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav Sharma"
                  value={newStudent.name}
                  onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-1 focus:ring-indigo-500 outline-hidden"
                />
              </div>

              {/* Contact grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={newStudent.mobile}
                    onChange={(e) => setNewStudent({ ...newStudent, mobile: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-1 focus:ring-indigo-500 outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="student@example.com"
                    value={newStudent.email}
                    onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-1 focus:ring-indigo-500 outline-hidden"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">Residential Address</label>
                <input
                  type="text"
                  placeholder="House/Street, Area, City"
                  value={newStudent.address}
                  onChange={(e) => setNewStudent({ ...newStudent, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-1 focus:ring-indigo-500 outline-hidden"
                />
              </div>

              {/* Course & Batch Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Course *</label>
                  <select
                    value={newStudent.course}
                    onChange={(e) => setNewStudent({ ...newStudent, course: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-1 focus:ring-indigo-500 outline-hidden font-medium"
                  >
                    {courses.map((c) => (
                      <option key={c.id} value={c.code}>
                        {c.code} - {c.shortName} (₹{c.fee.toLocaleString()})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Assigned Batch *</label>
                  <select
                    value={newStudent.batch}
                    onChange={(e) => setNewStudent({ ...newStudent, batch: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-1 focus:ring-indigo-500 outline-hidden font-medium"
                  >
                    {batches.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name} ({b.timing})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Admission Date & Initial Fee */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Admission Date</label>
                  <input
                    type="date"
                    value={newStudent.admissionDate}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, admissionDate: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-1 focus:ring-indigo-500 outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Initial Fee Payment (₹)</label>
                  <input
                    type="number"
                    min="0"
                    placeholder="e.g. 5000"
                    value={newStudent.initialPayment}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, initialPayment: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-1 focus:ring-indigo-500 outline-hidden font-mono"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-sm shadow-indigo-200 active:scale-95 transition-all cursor-pointer"
                >
                  Confirm &amp; Generate ID
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: STUDENT PROFILE VIEW ================= */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl w-full max-w-lg border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-900 text-white">
              <div className="flex items-center gap-3">
                <img
                  src={selectedStudent.avatar}
                  alt={selectedStudent.name}
                  className="w-10 h-10 rounded-full border border-white/20 object-cover bg-slate-800"
                />
                <div>
                  <h3 className="font-bold text-base leading-tight">{selectedStudent.name}</h3>
                  <span className="font-mono text-xs text-indigo-300">
                    ID: {selectedStudent.id}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedStudent(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Profile Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs">
              {/* Key Quick Stats */}
              <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Course</span>
                  <p className="font-mono font-bold text-indigo-700 text-sm">{selectedStudent.course}</p>
                </div>
                <div className="border-x border-slate-200">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Attendance</span>
                  <p className="font-mono font-bold text-emerald-700 text-sm">{selectedStudent.attendanceRate}%</p>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Fee Balance</span>
                  <p className="font-mono font-bold text-amber-700 text-sm">{formatINR(selectedStudent.remainingFee)}</p>
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-2.5">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[10px]">
                  Contact &amp; Admission Info
                </h4>
                <div className="space-y-2 p-3 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Phone size={14} className="text-slate-400" />
                    <span>Mobile: <b className="text-slate-800">{selectedStudent.mobile}</b></span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Mail size={14} className="text-slate-400" />
                    <span>Email: <b className="text-slate-800">{selectedStudent.email}</b></span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin size={14} className="text-slate-400" />
                    <span>Address: <b className="text-slate-800">{selectedStudent.address}</b></span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar size={14} className="text-slate-400" />
                    <span>Admission Date: <b className="text-slate-800 font-mono">{selectedStudent.admissionDate}</b></span>
                  </div>
                </div>
              </div>

              {/* Fee Breakdown */}
              <div className="space-y-2.5">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[10px]">
                  Fee Structure Summary
                </h4>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Total Course Fee:</span>
                    <span className="font-mono font-bold text-slate-800">{formatINR(selectedStudent.totalFee)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Amount Paid:</span>
                    <span className="font-mono font-bold text-emerald-700">{formatINR(selectedStudent.paidFee)}</span>
                  </div>
                  <div className="flex justify-between pt-1.5 border-t border-slate-200">
                    <span className="text-slate-700 font-bold">Remaining Balance:</span>
                    <span className="font-mono font-bold text-amber-700">{formatINR(selectedStudent.remainingFee)}</span>
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[10px]">
                  Submitted Documents Checklist
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {(selectedStudent.documents || ["Aadhaar Card", "Photograph"]).map((d, i) => (
                    <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-[10px] font-semibold border border-emerald-100">
                      <CheckCircle size={11} /> {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
              <button
                onClick={() => {
                  toast.success(`ID Card Generated for ${selectedStudent.name}! Ready to print.`);
                }}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-100 active:scale-95 cursor-pointer"
              >
                <FileText size={14} /> Print ID Card
              </button>
              <button
                onClick={() => setSelectedStudent(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold active:scale-95"
              >
                Close Profile
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
