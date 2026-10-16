import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {
  BookOpen,
  DownloadCloud,
  FileText,
  ArrowRight,
  CheckCircle2,
  Bell,
  MessageSquare,
  Target,
  ChevronLeft,
  ChevronRight,
  Home,
  User,
  Menu,
  Play,
  GraduationCap,
  X,
  Heart,
  Sparkles,
  Search,
  ExternalLink,
  Phone
} from 'lucide-react';
import { getTranslation, AppLanguage } from '../../utils/i18n';
import { saveOfflineDoc } from '../../utils/offlineStorage';
import { Course, VideoLecture, GalleryItem, InstagramPost } from '../../types';

interface MobileAppHomeProps {
  onOpenDrawer: () => void;
  onOpenGoalModal: () => void;
  onOpenOfflineVault: () => void;
}

export const MobileAppHome: React.FC<MobileAppHomeProps> = ({
  onOpenDrawer,
  onOpenGoalModal,
  onOpenOfflineVault
}) => {
  const {
    currentStudent,
    courses,
    studyMaterials,
    videos,
    galleryItems,
    notices,
    websiteSettings,
    language,
    setLanguage,
    setSelectedCourseForPayment,
    setSelectedVideoForPlayer,
    setSelectedDocForPreview,
    setIsStudentAuthModalOpen,
    navigateTo,
    showToast
  } = useApp();

  const t = getTranslation(language);
  const studentGoal = currentStudent?.targetClass || currentStudent?.classEnrolled || '12th Pass / Graduate (WCNA & WCFM)';
  const studentSubjects = currentStudent?.selectedSubjects || ['WCNA Naturopathy', 'WCFM Wealth Mgmt'];
  const contactPhone = (websiteSettings?.contactPhone || '9876543210').replace(/[^0-9]/g, '');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhotoForModal, setSelectedPhotoForModal] = useState<any | null>(null);

  // Featured Slides
  const slides = [
    {
      id: 'slide-1',
      title: 'WCNA & WCFM Professional Certifications 2026-27',
      subtitle: 'Open for 10th Pass, 12th Pass & Graduates with Clinical Training',
      tag: 'NEW BATCH',
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'slide-2',
      title: '100% Comprehensive Handwritten Notes Vault',
      subtitle: 'Complete Chapter PYQs & Solved Concept Blueprints',
      tag: 'STUDY VAULT',
      img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'slide-3',
      title: 'Personalized Academic & Career Counseling',
      subtitle: 'Guided by Senior Director S. R. Anand & Academic Head A.D. Rao',
      tag: 'DIRECTOR DESK',
      img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const languages: { id: AppLanguage; label: string }[] = [
    { id: 'en', label: 'EN' },
    { id: 'hinglish', label: 'HI' },
    { id: 'hi', label: 'हि' },
    { id: 'mr', label: 'मर' }
  ];

  // Offline Download Handler
  const handleSaveOffline = (mat: any) => {
    saveOfflineDoc({
      id: mat.id,
      title: mat.title,
      category: mat.category,
      targetClass: mat.targetClass,
      subject: mat.subject,
      fileUrl: mat.downloadUrl || mat.googleDriveUrl || '',
      fileType: mat.fileType || 'pdf',
      fileSize: `${mat.pages || 12} Pages`,
      contentSnippet: mat.previewContent || `[OFFLINE EDUCA INSTITUTE STUDY NOTE]\n• Title: ${mat.title}\n• Subject: ${mat.subject}\n• Program: ${mat.targetClass}`
    });
    showToast(`"${mat.title}" saved offline!`, 'success');
  };

  return (
    <div className="w-full bg-slate-50 pb-24 overflow-x-hidden" style={{ backgroundColor: '#f8fafc' }}>

      {/* ═══════════ TOP APP BAR ═══════════ */}
      <div
        className="sticky top-0 z-30 px-3 py-2.5 flex items-center justify-between shadow-sm"
        style={{ background: 'linear-gradient(135deg, #0052CC 0%, #0066FF 60%, #1a73e8 100%)' }}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <button
            type="button"
            id="mobile-drawer-toggle"
            aria-label="Open App Menu"
            onClick={onOpenDrawer}
            className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer shrink-0 bg-amber-400 text-slate-900 shadow-xs"
          >
            <Menu className="w-4 h-4" />
          </button>
          {/* Institute Official Logo */}
          <img
            src="/logo.jpg"
            alt="Educa Institute Logo"
            className="w-8 h-8 rounded-full object-contain bg-white border border-amber-300 p-0.5 shrink-0 shadow-xs aspect-square"
            onError={(e: any) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/logo.jpg';
            }}
          />
          <div className="min-w-0">
            <div className="text-xs font-bold text-white leading-tight truncate">
              {currentStudent ? `Hi, ${currentStudent.name.split(' ')[0]}` : 'Educa Institute'}
            </div>
            <div className="text-[10px] font-medium text-blue-100 leading-tight truncate">
              {t.appSubtitle}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {/* Language selector */}
          <div className="flex items-center rounded-full overflow-hidden border border-white/30" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
            {languages.map(l => (
              <button
                key={l.id}
                type="button"
                onClick={() => setLanguage(l.id)}
                className="px-1.5 py-0.5 text-[9px] font-bold cursor-pointer transition-all"
                style={{
                  backgroundColor: language === l.id ? '#fbbf24' : 'transparent',
                  color: language === l.id ? '#1e293b' : 'rgba(255,255,255,0.8)'
                }}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Notification bell */}
          <button
            type="button"
            onClick={() => navigateTo('notices', 'notices-section')}
            className="w-7 h-7 rounded-full flex items-center justify-center cursor-pointer relative shrink-0"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
          >
            <Bell className="w-3.5 h-3.5 text-white" />
            {notices.filter(n => n.isImportant).length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-red-500" />
            )}
          </button>
        </div>
      </div>

      {/* ═══════════ GOAL STRIP ═══════════ */}
      <div className="px-3 pt-2.5">
        <div className="p-2.5 rounded-xl flex items-center justify-between gap-2 shadow-xs bg-white border border-slate-200">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-blue-50 text-blue-600">
              <Target className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <div className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                {t.activeGoal}
              </div>
              <div className="text-[11px] font-bold text-slate-900 truncate">
                {studentGoal} • {studentSubjects.slice(0, 2).join(', ')}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenGoalModal}
            className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider cursor-pointer shrink-0 bg-blue-50 text-blue-600 border border-blue-200"
          >
            {t.changeGoal}
          </button>
        </div>
      </div>

      {/* ═══════════ SLIDER / HERO BANNER ═══════════ */}
      <div className="px-3 pt-3">
        <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[16/9] bg-slate-900">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: idx === currentSlide ? 1 : 0, pointerEvents: idx === currentSlide ? 'auto' : 'none' }}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 p-3 sm:p-4 flex flex-col justify-end text-white bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent">
                <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full w-max mb-1 bg-amber-400 text-slate-950">
                  {slide.tag}
                </span>
                <h3 className="text-xs sm:text-sm font-bold leading-snug drop-shadow-md pr-6 line-clamp-1">
                  {slide.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] mt-0.5 opacity-90 line-clamp-1">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* Indicator Dots */}
          <div className="absolute bottom-2 right-3 flex items-center gap-1 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all ${
                  currentSlide === i ? 'w-4 bg-amber-400' : 'w-1.5 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════ QUICK ACTIONS GRID ═══════════ */}
      <div className="px-3 pt-3.5">
        <div className="grid grid-cols-4 gap-2 text-center">
          <button
            type="button"
            onClick={() => navigateTo('courses', 'courses-section')}
            className="p-2.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col items-center gap-1 active:scale-95 transition-transform"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-800 line-clamp-1">Batches</span>
          </button>

          <button
            type="button"
            onClick={() => navigateTo('study-material', 'study-material-section')}
            className="p-2.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col items-center gap-1 active:scale-95 transition-transform"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-800 line-clamp-1">Notes Vault</span>
          </button>

          <button
            type="button"
            onClick={() => navigateTo('videos', 'videos-section')}
            className="p-2.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col items-center gap-1 active:scale-95 transition-transform"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              <Play className="w-5 h-5 fill-rose-600" />
            </div>
            <span className="text-[10px] font-bold text-slate-800 line-clamp-1">Lectures</span>
          </button>

          <button
            type="button"
            onClick={onOpenOfflineVault}
            className="p-2.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col items-center gap-1 active:scale-95 transition-transform"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <DownloadCloud className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-800 line-clamp-1">Offline</span>
          </button>
        </div>
      </div>

      {/* ═══════════ POPULAR BATCHES ═══════════ */}
      <div className="px-3 pt-5">
        <div className="flex items-center justify-between mb-2.5">
          <div>
            <h3 className="text-xs font-black text-slate-900 tracking-tight uppercase">
              {t.recommendedForYou}
            </h3>
            <p className="text-[10px] text-slate-500">Live & Classroom Certification Batches</p>
          </div>
          <button
            type="button"
            onClick={() => navigateTo('courses', 'courses-section')}
            className="text-[10px] font-bold text-blue-600 flex items-center gap-0.5"
          >
            <span>{t.seeAll}</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        <div className="space-y-2.5">
          {courses.slice(0, 3).map(course => (
            <div
              key={course.id}
              className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-3"
            >
              <img
                src={course.image || '/logo.jpg'}
                alt={course.title}
                className="w-16 h-16 rounded-xl object-cover shrink-0"
              />
              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                  {course.targetClass || 'Special Batch'}
                </span>
                <h4 className="text-xs font-bold text-slate-900 leading-tight mt-1 truncate">
                  {course.title}
                </h4>
                <p className="text-[10px] text-slate-500 truncate mt-0.5">
                  Faculty: S. R. Anand & A.D. Rao
                </p>
                <div className="flex items-center justify-between mt-1.5">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs font-black text-slate-900">
                      ₹{course.discountFee || course.fee}
                    </span>
                    {course.originalFee && (
                      <span className="text-[10px] text-slate-400 line-through">
                        ₹{course.originalFee}
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (setSelectedCourseForPayment) {
                        setSelectedCourseForPayment(course);
                      } else {
                        navigateTo('admission', 'admission-section');
                      }
                    }}
                    className="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold text-[10px] shadow-xs active:scale-95 transition-transform"
                  >
                    {t.enrollNow}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════ FREE NOTES & STUDY VAULT ═══════════ */}
      <div className="px-3 pt-5">
        <div className="flex items-center justify-between mb-2.5">
          <div>
            <h3 className="text-xs font-black text-slate-900 tracking-tight uppercase">
              {t.freeNotes}
            </h3>
            <p className="text-[10px] text-slate-500">Official Question Banks & Books</p>
          </div>
          <button
            type="button"
            onClick={() => navigateTo('study-material', 'study-material-section')}
            className="text-[10px] font-bold text-blue-600 flex items-center gap-0.5"
          >
            <span>{t.seeAll}</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        <div className="space-y-2">
          {studyMaterials.slice(0, 3).map(mat => (
            <div
              key={mat.id}
              className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                    {mat.targetClass || 'Study Material'}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 truncate mt-0.5">
                    {mat.title}
                  </h4>
                  <p className="text-[10px] text-slate-400">
                    {mat.subject || 'All Subjects'} • PDF
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedDocForPreview(mat)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-bold"
                >
                  {t.readNow}
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveOffline(mat)}
                  className="p-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-600"
                  title="Download Offline"
                >
                  <DownloadCloud className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════ DIRECT WHATSAPP SUPPORT BANNER ═══════════ */}
      <div className="px-3 pt-5">
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm flex items-center justify-between gap-3">
          <div className="min-w-0">
            <span className="text-[9px] font-black uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full inline-block mb-1">
              DIRECT COUNSELING
            </span>
            <h4 className="text-xs font-bold leading-tight truncate">
              Have doubts about batches or fees?
            </h4>
            <p className="text-[10px] text-emerald-100 mt-0.5">
              Talk directly with Educa Institute mentors.
            </p>
          </div>
          <a
            href={`https://wa.me/91${contactPhone || '9876543210'}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-xl bg-white text-emerald-700 font-bold text-xs shadow-xs shrink-0 flex items-center gap-1"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat</span>
          </a>
        </div>
      </div>

      {/* ═══════════ BOTTOM NAVIGATION DOCK ═══════════ */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-4 items-center shadow-2xl bg-white border-t border-slate-200 py-1.5 safe-area-pb"
      >
        {/* Home */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center justify-center gap-0.5 cursor-pointer py-1"
        >
          <Home className="w-5 h-5 text-blue-600" />
          <span className="text-[10px] font-bold text-blue-600 truncate">{t.navHome}</span>
        </button>

        {/* Batches */}
        <button
          type="button"
          onClick={() => navigateTo('courses', 'courses-section')}
          className="flex flex-col items-center justify-center gap-0.5 cursor-pointer py-1 text-slate-500"
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px] font-semibold truncate">{t.batches}</span>
        </button>

        {/* Offline Vault */}
        <button
          type="button"
          onClick={onOpenOfflineVault}
          className="flex flex-col items-center justify-center gap-0.5 cursor-pointer py-1 text-slate-500"
        >
          <DownloadCloud className="w-5 h-5" />
          <span className="text-[10px] font-semibold truncate">{t.offlineVault}</span>
        </button>

        {/* Portal / Login */}
        <button
          type="button"
          onClick={() => {
            if (currentStudent) {
              navigateTo('student-portal');
            } else {
              setIsStudentAuthModalOpen(true);
            }
          }}
          className="flex flex-col items-center justify-center gap-0.5 cursor-pointer py-1 text-slate-500"
        >
          <User className="w-5 h-5" />
          <span className="text-[10px] font-semibold truncate">
            {currentStudent ? 'Portal' : 'Login'}
          </span>
        </button>
      </nav>

    </div>
  );
};
