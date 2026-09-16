import React, { useState } from 'react';
import {
  Users,
  GraduationCap,
  Layers,
  FileCheck2,
  IndianRupee,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  TrendingUp,
  CalendarCheck,
  ShieldCheck,
  Plus
} from 'lucide-react';
import { AdminTab } from './AdminLayout';
import { Student, Admission, BatchItem, FeeRecord, AttendanceDayRecord } from './erp/types';
import {
  INITIAL_ERP_STUDENTS,
  INITIAL_ERP_ADMISSIONS,
  INITIAL_ERP_BATCHES,
  INITIAL_ERP_FEES,
  INITIAL_ERP_ATTENDANCE
} from './erp/erpInitialData';

interface DashboardOverviewProps {
  onSelectTab?: (tab: AdminTab) => void;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({ onSelectTab }) => {
  const [students] = useState<Student[]>(() => {
    const saved = localStorage.getItem('educa_erp_students');
    return saved ? JSON.parse(saved) : INITIAL_ERP_STUDENTS;
  });

  const [admissions] = useState<Admission[]>(() => {
    const saved = localStorage.getItem('educa_erp_admissions');
    return saved ? JSON.parse(saved) : INITIAL_ERP_ADMISSIONS;
  });

  const [batches] = useState<BatchItem[]>(() => {
    const saved = localStorage.getItem('educa_erp_batches');
    return saved ? JSON.parse(saved) : INITIAL_ERP_BATCHES;
  });

  const [fees] = useState<FeeRecord[]>(() => {
    const saved = localStorage.getItem('educa_erp_fees');
    return saved ? JSON.parse(saved) : INITIAL_ERP_FEES;
  });

  // KPI Calculations
  const totalStudents = students.length;
  const activeStudents = students.filter(s => s.status === 'Active').length;
  const totalCourses = 2; // WCNA & WCFM
  const totalBatches = batches.length;
  const todayAdmissions = admissions.filter(a => a.admissionDate === new Date().toISOString().split('T')[0]).length || 1;
  const totalCollectedFees = fees.reduce((acc, f) => acc + f.paidAmount, 0);
  const totalPendingFees = fees.reduce((acc, f) => acc + f.remainingAmount, 0);
  const todaysFeeCollection = fees[0]?.paymentHistory[0]?.amount || 18500;

  const kpis = [
    {
      label: 'Total Students',
      value: totalStudents,
      subtext: `${activeStudents} Enrolled in Session`,
      tab: 'students' as AdminTab,
      icon: Users,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50 border-indigo-200'
    },
    {
      label: 'Active Students',
      value: activeStudents,
      subtext: '100% Attendance Eligible',
      tab: 'students' as AdminTab,
      icon: CheckCircle2,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50 border-emerald-200'
    },
    {
      label: 'Total Courses',
      value: totalCourses,
      subtext: 'WCNA & WCFM Flagship',
      tab: 'batches' as AdminTab,
      icon: GraduationCap,
      color: 'text-blue-600',
      bg: 'bg-blue-50 border-blue-200'
    },
    {
      label: 'Total Batches',
      value: totalBatches,
      subtext: 'Morning & Evening Tracks',
      tab: 'batches' as AdminTab,
      icon: Layers,
      color: 'text-purple-600',
      bg: 'bg-purple-50 border-purple-200'
    },
    {
      label: "Today's Admissions",
      value: todayAdmissions,
      subtext: 'Session 2026-27 Intake',
      tab: 'admissions' as AdminTab,
      icon: FileCheck2,
      color: 'text-rose-600',
      bg: 'bg-rose-50 border-rose-200'
    },
    {
      label: "Today's Fees Collection",
      value: `₹${todaysFeeCollection.toLocaleString()}`,
      subtext: 'Direct Razorpay / Counter',
      tab: 'fees' as AdminTab,
      icon: IndianRupee,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50 border-emerald-200'
    },
    {
      label: 'Pending Fees',
      value: `₹${totalPendingFees.toLocaleString()}`,
      subtext: 'Upcoming Installments',
      tab: 'fees' as AdminTab,
      icon: Clock,
      color: 'text-amber-600',
      bg: 'bg-amber-50 border-amber-200'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Top Banner (Crisp Light Executive Theme) */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
              Session 2026–2027 Active
            </span>
            <span className="text-[10px] font-bold text-slate-400">
              Last Synced: Just now
            </span>
          </div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight">
            Educa Institute Executive ERP Center
          </h2>
          <p className="text-xs text-slate-500">
            Real-time management for Students, Admissions, Courses, Batches, Fees Collection & Attendance.
          </p>
        </div>

        {/* Quick Action Shortcuts */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => onSelectTab && onSelectTab('admissions')}
            className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Admission</span>
          </button>
          <button
            onClick={() => onSelectTab && onSelectTab('attendance')}
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-200"
          >
            <CalendarCheck className="w-3.5 h-3.5 text-indigo-600" />
            <span>Mark Attendance</span>
          </button>
        </div>
      </div>

      {/* 7 Core KPI Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div
              key={idx}
              onClick={() => onSelectTab && onSelectTab(kpi.tab)}
              className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:border-indigo-300 hover:shadow-sm transition-all cursor-pointer space-y-2 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                  {kpi.label}
                </span>
                <div className={`w-8 h-8 rounded-xl ${kpi.bg} flex items-center justify-center ${kpi.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div>
                <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight block">
                  {kpi.value}
                </span>
                <span className="text-[10px] text-slate-400 font-medium block mt-0.5">
                  {kpi.subtext}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Launchpad & Operational Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Module Navigators */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Institute Core Management Modules</span>
          </h3>

          <div className="grid grid-cols-2 gap-2.5 text-xs">
            <button
              onClick={() => onSelectTab && onSelectTab('students')}
              className="p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-200/80 text-left transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800 group-hover:text-indigo-600">Student Directory</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600" />
              </div>
              <p className="text-[10px] text-slate-400 mt-1">5 Registered Candidates</p>
            </button>

            <button
              onClick={() => onSelectTab && onSelectTab('admissions')}
              className="p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-200/80 text-left transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800 group-hover:text-indigo-600">Admissions Desk</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600" />
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Verification & Approval</p>
            </button>

            <button
              onClick={() => onSelectTab && onSelectTab('batches')}
              className="p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-200/80 text-left transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800 group-hover:text-indigo-600">Courses & Batches</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600" />
              </div>
              <p className="text-[10px] text-slate-400 mt-1">WCNA & WCFM Rosters</p>
            </button>

            <button
              onClick={() => onSelectTab && onSelectTab('fees')}
              className="p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-200/80 text-left transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800 group-hover:text-indigo-600">Fees & Receipts</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600" />
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Print Official Vouchers</p>
            </button>
          </div>
        </div>

        {/* Live Admissions Stream */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-600" />
              <span>Recent Admission Activity</span>
            </h3>
            <button
              onClick={() => onSelectTab && onSelectTab('admissions')}
              className="text-[11px] font-bold text-indigo-600 hover:underline cursor-pointer"
            >
              View All →
            </button>
          </div>

          <div className="divide-y divide-slate-100 text-xs">
            {admissions.slice(0, 4).map(adm => (
              <div key={adm.id} className="py-2.5 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-900 block">{adm.studentName}</span>
                  <span className="text-[10px] text-slate-400 font-mono">{adm.studentId} • {adm.course.slice(0, 25)}...</span>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${
                    adm.status === 'Verified'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {adm.status}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">{adm.admissionDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
