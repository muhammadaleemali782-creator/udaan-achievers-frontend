import React, { useState, useEffect } from 'react';
import {
  Users, Plus, Search, Filter, Eye, Edit, Trash2, X,
  Phone, Mail, MapPin, Calendar, BookOpen, CheckCircle, Clock
} from 'lucide-react';
import { Student } from './types';
import { INITIAL_ERP_STUDENTS } from './erpInitialData';

export const StudentManagement: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(() => {
    const saved = localStorage.getItem('educa_erp_students');
    return saved ? JSON.parse(saved) : INITIAL_ERP_STUDENTS;
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('ALL');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [viewProfileStudent, setViewProfileStudent] = useState<Student | null>(null);

  // Form State
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    course: 'WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]',
    batch: 'WCNA Morning Batch A',
    guardianName: '',
    bloodGroup: 'B+'
  });

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('educa_erp_students', JSON.stringify(students));
  }, [students]);

  const generateStudentId = () => {
    const count = students.length + 1;
    return `EDU-2026-${count.toString().padStart(3, '0')}`;
  };

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.mobile) {
      alert('Please fill in Student Name and Mobile Number');
      return;
    }

    const newStudent: Student = {
      id: `std-${Date.now()}`,
      studentId: generateStudentId(),
      name: form.name,
      mobile: form.mobile,
      email: form.email || `${form.name.toLowerCase().replace(/\s+/g, '.')}@example.com`,
      address: form.address || 'Vihar Gali No. 3, Utthan Road, Jhalwa, Prayagraj',
      course: form.course,
      batch: form.batch,
      admissionDate: new Date().toISOString().split('T')[0],
      status: 'Active',
      guardianName: form.guardianName,
      bloodGroup: form.bloodGroup
    };

    setStudents([newStudent, ...students]);
    setIsAddModalOpen(false);
    setForm({
      name: '',
      mobile: '',
      email: '',
      address: '',
      course: 'WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]',
      batch: 'WCNA Morning Batch A',
      guardianName: '',
      bloodGroup: 'B+'
    });
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to remove this student?')) {
      setStudents(students.filter(s => s.id !== id));
    }
  };

  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.mobile.includes(searchTerm);
    const matchesCourse = selectedCourse === 'ALL' || s.course.includes(selectedCourse);
    return matchesSearch && matchesCourse;
  });

  return (
    <div className="space-y-6">
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
        <div>
          <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-600" />
            <span>Student Management Desk</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Auto-generate student IDs, manage profiles, enrollments, batches and directory.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Student</span>
        </button>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="flex flex-col sm:flex-row items-center gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by Name, Student ID (EDU-2026-xxx), or Mobile..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-4 h-4 text-slate-500" />
          <select
            value={selectedCourse}
            onChange={e => setSelectedCourse(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:border-indigo-500"
          >
            <option value="ALL">All Courses</option>
            <option value="WCNA">WCNA (Naturopathy & Ayurveda)</option>
            <option value="WCFM">WCFM (Wealth & Finance)</option>
          </select>
        </div>
      </div>

      {/* Students Data Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="bg-slate-50 text-slate-800 font-bold border-b border-slate-200 text-[11px] uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4">Student ID</th>
                <th className="py-3.5 px-4">Student Name</th>
                <th className="py-3.5 px-4">Contact Info</th>
                <th className="py-3.5 px-4">Course & Batch</th>
                <th className="py-3.5 px-4">Admission Date</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-400">
                    No matching students found in directory.
                  </td>
                </tr>
              ) : (
                filteredStudents.map(student => (
                  <tr key={student.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-indigo-600 whitespace-nowrap">
                      {student.studentId}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <div className="font-bold text-slate-900">{student.name}</div>
                      <div className="text-[10px] text-slate-400">{student.guardianName ? `S/O ${student.guardianName}` : ''}</div>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <div className="font-medium text-slate-800">{student.mobile}</div>
                      <div className="text-[10px] text-slate-400">{student.email}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-slate-900 line-clamp-1 max-w-xs">{student.course}</div>
                      <div className="text-[11px] text-indigo-600 font-medium">{student.batch}</div>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap font-mono text-slate-600">
                      {student.admissionDate}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                        student.status === 'Active'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => setViewProfileStudent(student)}
                          className="p-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-600 transition-colors cursor-pointer"
                          title="View Full Profile"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(student.id)}
                          className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors cursor-pointer"
                          title="Delete Student"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
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

      {/* Add Student Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 text-slate-900 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Add New Student</h3>
                <p className="text-[11px] text-slate-500">Auto Student ID will be generated automatically: {generateStudentId()}</p>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddStudent} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 sm:col-span-1">
                  <label className="font-semibold text-slate-700 block mb-1">Student Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="font-semibold text-slate-700 block mb-1">Mobile Number *</label>
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
                <label className="font-semibold text-slate-700 block mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="student@example.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Address</label>
                <input
                  type="text"
                  placeholder="Street, City, State, PIN"
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
                    onChange={e => setForm({ ...form, course: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-semibold focus:outline-none focus:border-indigo-500"
                  >
                    <option value="WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]">WCNA (Naturopathy & Ayurveda)</option>
                    <option value="WCFM [ WEALTH CONSULTANCY IN FINANCE MANAGEMENT ]">WCFM (Wealth & Finance)</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Batch *</label>
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

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Guardian / Parent Name</label>
                  <input
                    type="text"
                    placeholder="Father/Mother Name"
                    value={form.guardianName}
                    onChange={e => setForm({ ...form, guardianName: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Blood Group</label>
                  <select
                    value={form.bloodGroup}
                    onChange={e => setForm({ ...form, bloodGroup: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-indigo-500"
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold cursor-pointer"
                >
                  Save & Register Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Student Profile Card Modal */}
      {viewProfileStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 text-slate-900 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-black flex items-center justify-center text-sm">
                  {viewProfileStudent.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{viewProfileStudent.name}</h3>
                  <span className="font-mono text-[11px] text-indigo-600 font-bold">{viewProfileStudent.studentId}</span>
                </div>
              </div>
              <button
                onClick={() => setViewProfileStudent(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Enrolled Program</span>
                <p className="font-bold text-slate-900">{viewProfileStudent.course}</p>
                <span className="inline-block px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 font-semibold text-[11px]">
                  Batch: {viewProfileStudent.batch}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase block">Mobile Phone</span>
                  <span className="font-bold text-slate-800">{viewProfileStudent.mobile}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase block">Admission Date</span>
                  <span className="font-bold text-slate-800">{viewProfileStudent.admissionDate}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase block">Blood Group</span>
                  <span className="font-bold text-slate-800">{viewProfileStudent.bloodGroup || 'N/A'}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase block">Guardian Name</span>
                  <span className="font-bold text-slate-800">{viewProfileStudent.guardianName || 'N/A'}</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-400 font-semibold uppercase block">Residential Address</span>
                <span className="font-medium text-slate-800">{viewProfileStudent.address}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setViewProfileStudent(null)}
                className="px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold cursor-pointer"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
