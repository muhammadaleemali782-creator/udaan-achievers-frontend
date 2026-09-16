import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FileSignature,
  BookOpen,
  CreditCard,
  CalendarCheck2,
  PlusCircle,
  Search,
  Bell,
  Menu,
  X,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Building2,
  ExternalLink,
} from "lucide-react";
import { Toaster, toast } from "sonner";
import { useERP } from "../context/ERPContext";

export default function ERPLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalStudents, pendingFeesTotal, todayAdmissionsCount } = useERP();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleDateString("en-IN", {
          weekday: "short",
          day: "numeric",
          month: "short",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    {
      id: "dashboard",
      path: "/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      badge: null,
    },
    {
      id: "students",
      path: "/students",
      label: "Students",
      icon: Users,
      badge: totalStudents,
    },
    {
      id: "admissions",
      path: "/admissions",
      label: "Admissions",
      icon: FileSignature,
      badge: todayAdmissionsCount > 0 ? `+${todayAdmissionsCount}` : null,
      badgeColor: "bg-emerald-500 text-white",
    },
    {
      id: "courses",
      path: "/erp/courses",
      label: "Courses & Batches",
      icon: BookOpen,
      badge: "WCNA / WCFM",
      badgeColor: "bg-indigo-100 text-indigo-700 font-mono text-[10px]",
    },
    {
      id: "fees",
      path: "/fees",
      label: "Fees Management",
      icon: CreditCard,
      badge: pendingFeesTotal > 0 ? "₹ Pending" : null,
      badgeColor: "bg-amber-100 text-amber-800",
    },
    {
      id: "attendance",
      path: "/attendance",
      label: "Attendance",
      icon: CalendarCheck2,
      badge: "Live",
      badgeColor: "bg-emerald-100 text-emerald-800",
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Mounted once at root as per Sonner principles */}
      <Toaster richColors position="top-right" />

      {/* ================= TOP ANNOUNCEMENT & INSTITUTION HEADER ================= */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Left: Brand Identity */}
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-indigo-900 flex items-center justify-center text-white shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform">
                  <Building2 size={22} className="text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display font-extrabold text-lg text-slate-900 tracking-tight leading-none">
                      EDUCA VEDA
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                      Portal v3.0
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Institute &amp; Student Management Portal
                  </p>
                </div>
              </Link>
            </div>

            {/* Center: Live Portal Status & Clock */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Active Session:</span>
                <span className="font-semibold text-slate-800">{currentTime || "Live"}</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="px-2 py-0.5 rounded bg-indigo-50 border border-indigo-100 text-indigo-700 font-mono font-medium">
                  WCNA
                </span>
                <span>&amp;</span>
                <span className="px-2 py-0.5 rounded bg-sky-50 border border-sky-100 text-sky-700 font-mono font-medium">
                  WCFM
                </span>
                <span>Specialized Portal</span>
              </div>
            </div>

            {/* Right: Quick Action & Profile */}
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-xs transition-colors"
              >
                <span>🌐 Website</span>
              </Link>

              <button
                onClick={() => {
                  localStorage.removeItem("erp_user");
                  toast.success("Signed out successfully");
                  navigate("/");
                }}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-rose-200 bg-white hover:bg-rose-50 text-rose-600 text-xs font-semibold shadow-xs transition-colors"
                title="Sign out"
              >
                <span>Log Out</span>
              </button>

              <button
                onClick={() => navigate("/admissions?action=new")}
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-xs font-semibold shadow-sm shadow-indigo-200 transition-all cursor-pointer"
              >
                <PlusCircle size={15} />
                <span>New Admission</span>
              </button>

              <button
                onClick={() => toast.info("No unread alerts. All institute systems operational!")}
                className="w-9 h-9 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-600 relative active:scale-95 transition-all cursor-pointer"
                aria-label="Notifications"
              >
                <Bell size={17} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white"></span>
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-9 h-9 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* ================= PRIMARY HORIZONTAL NAVIGATION BAR ================= */}
          <nav className="hidden lg:flex items-center gap-1 py-1.5 overflow-x-auto border-t border-slate-100 scrollbar-none">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                    active
                      ? "bg-indigo-50 text-indigo-700 shadow-2xs font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <Icon
                    size={16}
                    className={active ? "text-indigo-600" : "text-slate-400"}
                  />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                        item.badgeColor ||
                        (active
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-200 text-slate-700")
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* ================= MOBILE DRAWER MENU ================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 shadow-lg animate-fadeIn">
          <div className="pb-2 mb-2 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Navigation Menu</span>
            <span className="font-mono text-emerald-600">Session: Active</span>
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium ${
                  active
                    ? "bg-indigo-50 text-indigo-700 font-bold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={18}
                    className={active ? "text-indigo-600" : "text-slate-400"}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-mono ${
                      item.badgeColor || "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-xs font-bold"
            >
              <span>🌐 Public Website</span>
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate("/admissions?action=new");
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow-sm"
            >
              <PlusCircle size={16} />
              <span>Create New Admission</span>
            </button>
            <button
              onClick={() => {
                localStorage.removeItem("erp_user");
                setMobileMenuOpen(false);
                toast.success("Signed out successfully");
                navigate("/");
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl border border-rose-200 text-rose-600 text-xs font-bold"
            >
              <span>Log Out</span>
            </button>
          </div>
        </div>
      )}

      {/* ================= MAIN ERP CONTENT CANVAS ================= */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {children}
      </main>

      {/* ================= MINIMAL MODERN FOOTER ================= */}
      <footer className="bg-white border-t border-slate-200 py-4 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            &copy; {new Date().getFullYear()} <b className="text-slate-800">Educa Veda</b>. Complete Management System for WCNA &amp; WCFM Management.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1 text-emerald-600 font-medium">
              <ShieldCheck size={14} /> Database Synchronized
            </span>
            <span className="text-slate-300">|</span>
            <span className="font-mono text-slate-400">All Modules Active</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
