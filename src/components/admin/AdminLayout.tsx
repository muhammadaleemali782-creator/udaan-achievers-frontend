import React from 'react';
import {
  LayoutDashboard,
  Users,
  FileCheck2,
  GraduationCap,
  IndianRupee,
  CalendarCheck,
  FileText,
  Video,
  Megaphone,
  MessageSquare,
  Share2,
  Settings,
  Smartphone,
  LogOut,
  Shield,
  ExternalLink,
  ChevronRight,
  Image,
  BookOpen,
  Bell,
  HelpCircle,
  ArrowLeft,
  Menu,
  X
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export type AdminTab =
  | 'overview'
  | 'students'
  | 'admissions'
  | 'batches'
  | 'fees'
  | 'attendance'
  | 'courses'
  | 'pdfs'
  | 'videos'
  | 'gallery'
  | 'syllabus'
  | 'notices'
  | 'inquiries'
  | 'ads'
  | 'reviews'
  | 'socials'
  | 'settings'
  | 'preview';

interface AdminLayoutProps {
  activeTab: AdminTab;
  setActiveTab: (tab: AdminTab) => void;
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ activeTab, setActiveTab, children }) => {
  const { logoutAdmin, navigateTo } = useApp();

  const erpNavItems = [
    { id: 'overview' as AdminTab, label: 'Dashboard Overview', icon: LayoutDashboard, badge: 'Live' },
    { id: 'students' as AdminTab, label: 'Student Management', icon: Users, badge: 'Auto ID' },
    { id: 'admissions' as AdminTab, label: 'Admission Management', icon: FileCheck2, badge: 'Intake' },
    { id: 'batches' as AdminTab, label: 'Course & Batch Mgmt', icon: GraduationCap, badge: 'WCNA/WCFM' },
    { id: 'fees' as AdminTab, label: 'Fees & Payment Receipts', icon: IndianRupee, badge: 'Vouchers' },
    { id: 'attendance' as AdminTab, label: 'Attendance Management', icon: CalendarCheck, badge: 'Daily' },
  ];

  const contentNavItems = [
    { id: 'settings' as AdminTab, label: 'Website Settings', icon: Settings, badge: null },
    { id: 'notices' as AdminTab, label: 'Notices & Alerts', icon: Bell, badge: null },
    { id: 'inquiries' as AdminTab, label: 'Admission Inquiries', icon: HelpCircle, badge: 'Leads' },
    { id: 'courses' as AdminTab, label: 'Website Courses View', icon: BookOpen, badge: null },
    { id: 'pdfs' as AdminTab, label: 'Books & Drive PDFs', icon: FileText, badge: null },
    { id: 'videos' as AdminTab, label: 'Video Lectures', icon: Video, badge: null },
    { id: 'gallery' as AdminTab, label: 'Campus Photo Gallery', icon: Image, badge: null },
    { id: 'reviews' as AdminTab, label: 'Reviews Moderation', icon: MessageSquare, badge: null },
    { id: 'socials' as AdminTab, label: 'Social Media Handles', icon: Share2, badge: null },
    { id: 'preview' as AdminTab, label: 'Mobile QA Preview', icon: Smartphone, badge: null }
  ];

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = React.useState(false);
  const [mobileNavSection, setMobileNavSection] = React.useState<'erp' | 'cms'>('erp');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col md:flex-row font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Mobile Top Header */}
      <div className="md:hidden bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMobileDrawerOpen(true)}
              className="p-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 flex items-center gap-1 cursor-pointer transition-colors border border-indigo-200"
              title="Open All Admin Modules"
            >
              <Menu className="w-4 h-4" />
              <span className="text-[11px] font-bold">Menu</span>
            </button>

            <button
              onClick={() => navigateTo('home')}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center gap-1 cursor-pointer transition-colors"
              title="Back to Public Website"
            >
              <ArrowLeft className="w-4 h-4 text-indigo-600" />
              <span className="text-[11px] font-bold">Back</span>
            </button>

            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <h2 className="text-xs font-black text-slate-900">Director Desk</h2>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => navigateTo('home')}
              className="px-2 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 text-[10px] font-bold flex items-center gap-1 cursor-pointer"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Website</span>
            </button>

            <button
              onClick={logoutAdmin}
              className="p-1.5 rounded-lg bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100 cursor-pointer transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Category Switcher */}
        <div className="flex items-center justify-around px-3 py-1.5 bg-slate-100/80 border-t border-slate-200 text-[11px] font-bold">
          <button
            onClick={() => setMobileNavSection('erp')}
            className={`flex-1 py-1 rounded-lg transition-colors text-center cursor-pointer ${
              mobileNavSection === 'erp'
                ? 'bg-white text-indigo-700 shadow-xs font-black'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Core ERP ({erpNavItems.length})
          </button>
          <button
            onClick={() => setMobileNavSection('cms')}
            className={`flex-1 py-1 rounded-lg transition-colors text-center cursor-pointer ${
              mobileNavSection === 'cms'
                ? 'bg-white text-indigo-700 shadow-xs font-black'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Website CMS ({contentNavItems.length})
          </button>
        </div>

        {/* Mobile Horizontal Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-2 overflow-x-auto border-t border-slate-100 bg-slate-50 scrollbar-none">
          {(mobileNavSection === 'erp' ? erpNavItems : contentNavItems).map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 bg-white border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[8px] font-black px-1 py-0.2 rounded ${
                    isActive ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Full Mobile Slide-Out Drawer Modal */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileDrawerOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-4/5 max-w-xs bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
            {/* Drawer Header */}
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full border border-slate-300 p-0.5 bg-white shadow-xs flex items-center justify-center shrink-0">
                  <img src="/logo.jpg" alt="Educa Logo" className="w-full h-full object-contain rounded-full" />
                </div>
                <div>
                  <h3 className="text-xs font-black text-slate-900 leading-none">EDUCA INSTITUTE</h3>
                  <span className="text-[10px] font-bold text-indigo-600">Director Control Desk</span>
                </div>
              </div>
              <button
                onClick={() => setIsMobileDrawerOpen(false)}
                className="p-1 rounded-lg text-slate-500 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Items */}
            <div className="flex-1 p-3 space-y-4 overflow-y-auto">
              {/* Group 1: Core ERP */}
              <div>
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider px-2 block mb-1.5">
                  Core ERP System
                </span>
                <div className="space-y-1">
                  {erpNavItems.map(item => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id);
                          setMobileNavSection('erp');
                          setIsMobileDrawerOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          isActive
                            ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-xs'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-md ${
                            isActive ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Group 2: Website CMS & Operations */}
              <div>
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider px-2 block mb-1.5">
                  Website CMS & Operations
                </span>
                <div className="space-y-1">
                  {contentNavItems.map(item => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id);
                          setMobileNavSection('cms');
                          setIsMobileDrawerOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          isActive
                            ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold shadow-xs'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className="text-[9px] font-black px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-500">
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="p-3 border-t border-slate-200 bg-slate-50 space-y-2">
              <button
                onClick={() => {
                  navigateTo('home');
                  setIsMobileDrawerOpen(false);
                }}
                className="w-full py-2 px-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View Public Website</span>
              </button>
              <button
                onClick={logoutAdmin}
                className="w-full py-2 px-3 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out of Admin</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Executive Sidebar (Pure White & Slate-50) */}
      <aside className="hidden md:flex flex-col w-64 lg:w-72 bg-white border-r border-slate-200 shrink-0 h-screen sticky top-0 shadow-xs">
        {/* Brand Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-slate-300 p-0.5 bg-white shadow-xs flex items-center justify-center shrink-0">
              <img src="/logo.jpg" alt="Educa Logo" className="w-full h-full object-contain rounded-full" />
            </div>
            <div>
              <h1 className="text-xs font-black text-slate-900 tracking-tight leading-snug">
                EDUCA INSTITUTE
              </h1>
              <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-wider">
                Management Portal
              </p>
            </div>
          </div>
          <button
            onClick={() => navigateTo('home')}
            className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors cursor-pointer"
            title="Open Live Public Website"
          >
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Section */}
        <div className="flex-1 overflow-y-auto p-3 space-y-4">
          
          {/* Group 1: Core ERP Modules */}
          <div>
            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider px-3 block mb-1.5">
              Core ERP System
            </span>
            <div className="space-y-1">
              {erpNavItems.map(item => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-700 border border-indigo-200/80 shadow-xs'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-md ${
                        isActive
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-100 text-slate-500'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Group 2: Website CMS & Settings */}
          <div>
            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider px-3 block mb-1.5">
              Website CMS & Operations
            </span>
            <div className="space-y-1">
              {contentNavItems.map(item => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-700 border border-indigo-200/80 font-bold shadow-xs'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="text-[9px] font-black px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-500">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* User Account & Logout Footer */}
        <div className="p-3 border-t border-slate-200 bg-slate-50/50 space-y-2">
          <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-xs">
                DS
              </div>
              <div className="overflow-hidden">
                <span className="font-bold text-slate-900 text-xs block truncate">Director Desk</span>
                <span className="text-[10px] text-emerald-600 font-semibold block">● Online • Verified</span>
              </div>
            </div>
            <button
              onClick={logoutAdmin}
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
              title="Logout from Admin Portal"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => navigateTo('home')}
            className="w-full py-1.5 px-3 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-indigo-600" />
            <span>Return to Public Website</span>
          </button>
        </div>
      </aside>

      {/* Main Administrative Workspace */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto max-w-7xl">
        {children}
      </main>
    </div>
  );
};
