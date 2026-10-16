import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  User,
  BookOpen,
  DownloadCloud,
  Globe,
  MessageSquare,
  Shield,
  Users,
  LogOut,
  X,
  Target,
  ArrowRight,
  ChevronRight,
  GraduationCap,
  Phone
} from 'lucide-react';
import { getTranslation, AppLanguage } from '../../utils/i18n';
import { getOfflineDocs } from '../../utils/offlineStorage';

interface MobileAppDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenGoalModal: () => void;
  onOpenOfflineVault: () => void;
}

export const MobileAppDrawer: React.FC<MobileAppDrawerProps> = ({
  isOpen,
  onClose,
  onOpenGoalModal,
  onOpenOfflineVault
}) => {
  const {
    currentStudent,
    isAdminAuthenticated,
    logoutStudent,
    navigateTo,
    language,
    setLanguage,
    websiteSettings,
    setIsStudentAuthModalOpen,
    setIsAdminAuthModalOpen
  } = useApp();

  const t = getTranslation(language);
  const offlineCount = getOfflineDocs().length;
  const contactPhone = (websiteSettings?.contactPhone || '9876543210').replace(/[^0-9]/g, '');

  const languages: { id: AppLanguage; label: string; short: string }[] = [
    { id: 'en', label: 'English', short: 'EN' },
    { id: 'hinglish', label: 'Hinglish', short: 'HI' },
    { id: 'hi', label: 'हिंदी', short: 'हि' },
    { id: 'mr', label: 'मराठी', short: 'मर' }
  ];

  const studentAvatar = currentStudent?.avatar || '🎓';
  const studentGoal = currentStudent?.targetClass || currentStudent?.classEnrolled || 'Class 9-10';
  const studentSubjects = currentStudent?.selectedSubjects?.join(', ') || 'Maths, Science';

  return (
    <div
      className={`fixed inset-0 z-[9999] flex transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Drawer Panel */}
      <div
        className={`relative h-full shadow-2xl flex flex-col z-10 transition-transform duration-300 ease-out will-change-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '85%', maxWidth: '320px', backgroundColor: '#ffffff', color: '#1e293b' }}
      >

        {/* Profile Header */}
        <div
          className="p-4 text-white"
          style={{ background: 'linear-gradient(135deg, #0052CC 0%, #0066FF 60%, #1a73e8 100%)' }}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold shadow-md bg-amber-400 text-slate-900"
              >
                {studentAvatar}
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-sm leading-tight text-white truncate max-w-[170px]">
                  {currentStudent ? currentStudent.name : 'Welcome, Learner!'}
                </h3>
                <p className="text-[11px] text-blue-100 leading-tight mt-0.5 truncate">
                  {currentStudent ? (currentStudent.email || currentStudent.phone) : 'Educa Institute App'}
                </p>
                {currentStudent?.rollNumber && (
                  <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-white/20 text-[9px] font-mono font-bold tracking-wider">
                    Roll: {currentStudent.rollNumber}
                  </span>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Target Badge Button */}
          <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between">
            <div className="min-w-0">
              <span className="text-[9px] text-blue-100 uppercase tracking-wider block font-semibold">
                {t.activeGoal}
              </span>
              <span className="text-[11px] font-bold text-white truncate block">
                {studentGoal}
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenGoalModal();
              }}
              className="px-2.5 py-1 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-[10px] font-black uppercase tracking-wider cursor-pointer shadow-xs"
            >
              {t.changeGoal}
            </button>
          </div>
        </div>

        {/* Drawer Scrollable Links */}
        <div className="flex-1 overflow-y-auto p-3 space-y-4">
          
          {/* Main Navigation Links */}
          <div className="space-y-1">
            <button
              type="button"
              onClick={() => {
                onClose();
                navigateTo('home');
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl text-left hover:bg-slate-50 cursor-pointer font-bold text-xs text-slate-800 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span>{t.home}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                navigateTo('courses', 'courses-section');
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl text-left hover:bg-slate-50 cursor-pointer font-bold text-xs text-slate-800 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span>{t.exploreAllCourses}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                navigateTo('study-material', 'study-material-section');
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl text-left hover:bg-slate-50 cursor-pointer font-bold text-xs text-slate-800 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span>{t.freeNotesDpp}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenOfflineVault();
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl text-left hover:bg-slate-50 cursor-pointer font-bold text-xs text-slate-800 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <DownloadCloud className="w-4 h-4" />
                </div>
                <span>{t.offlineVault}</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                {offlineCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                navigateTo('notices', 'notices-section');
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl text-left hover:bg-slate-50 cursor-pointer font-bold text-xs text-slate-800 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <span>{t.notices}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Student Portal / Auth Option */}
          <div className="pt-2 border-t border-slate-100">
            {currentStudent ? (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  navigateTo('student-portal');
                }}
                className="w-full p-3 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-between font-bold text-xs cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <User className="w-4 h-4" />
                  <span>Open Student Dashboard</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  setIsStudentAuthModalOpen(true);
                }}
                className="w-full p-3 rounded-2xl bg-blue-600 text-white flex items-center justify-center gap-2 font-bold text-xs shadow-md shadow-blue-500/20 cursor-pointer"
              >
                <User className="w-4 h-4" />
                <span>{t.portalLogin}</span>
              </button>
            )}
          </div>

          {/* Language Switcher */}
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
              {t.selectLanguage}
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {languages.map(l => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => setLanguage(l.id)}
                  className={`p-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    language === l.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Direct WhatsApp Helpline */}
          <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5">
            <span className="text-[10px] font-black uppercase text-emerald-800 tracking-wider">
              Student Helpline
            </span>
            <p className="text-[11px] text-emerald-700 font-medium">
              Direct assistance with admissions and study counseling.
            </p>
            <a
              href={`https://wa.me/91${contactPhone || '9876543210'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-xs mt-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Admin Panel Link */}
          <div className="pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                onClose();
                if (isAdminAuthenticated) {
                  navigateTo('admin-panel');
                } else {
                  setIsAdminAuthModalOpen(true);
                }
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl text-left hover:bg-slate-50 cursor-pointer font-bold text-xs text-slate-500"
            >
              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-slate-400" />
                <span>{t.adminDesk}</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>

          {/* Logout if authenticated */}
          {currentStudent && (
            <div className="pt-1">
              <button
                type="button"
                onClick={() => {
                  logoutStudent();
                  onClose();
                }}
                className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl bg-red-50 text-red-600 font-bold text-xs cursor-pointer hover:bg-red-100"
              >
                <LogOut className="w-4 h-4" />
                <span>{t.logout}</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
