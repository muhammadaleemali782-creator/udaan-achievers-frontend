import React, { useState, useEffect } from 'react';
import { Home, BookOpen, GraduationCap, FileText, Smartphone, Download, Check, Sparkles, X, Share2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const MobileAppNavigation: React.FC = () => {
  const { activeView, navigateTo, showToast } = useApp();
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showIosGuide, setShowIosGuide] = useState(false);

  useEffect(() => {
    // Check if already in standalone app mode
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;
    if (isStandalone) {
      setIsInstalled(true);
    }

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
      showToast('Educa App installed successfully on your device!', 'success');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [showToast]);

  const handleInstallClick = async () => {
    if (isInstalled) {
      showToast('Educa App is already installed on your device!', 'info');
      return;
    }

    // Android / Chrome / Edge
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        showToast('Installing Educa App...', 'success');
      }
      setDeferredPrompt(null);
      return;
    }

    // iOS Safari detection
    const isIos = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
    if (isIos) {
      setShowIosGuide(true);
      return;
    }

    // Fallback info
    showToast('To install: Open browser menu (⋮) and tap "Install app" or "Add to Home screen"', 'info');
  };

  useEffect(() => {
    (window as any).__promptPwaInstall = handleInstallClick;
    return () => {
      delete (window as any).__promptPwaInstall;
    };
  });

  return (
    <>
      {/* iOS Install Guidance Bottom Sheet */}
      {showIosGuide && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-3 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-blue-50 text-[#0066FF]">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-900">Install on iPhone / iPad</h3>
                  <p className="text-[10px] text-slate-500">Add to your Home Screen in 2 taps</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowIosGuide(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2.5 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#0066FF] text-white flex items-center justify-center text-[10px] font-bold shrink-0">1</span>
                <span>Safari ke bottom bar par <strong>Share</strong> button <Share2 className="w-3.5 h-3.5 inline text-blue-600" /> dabayein.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#0066FF] text-white flex items-center justify-center text-[10px] font-bold shrink-0">2</span>
                <span>Scroll karein aur <strong>"Add to Home Screen"</strong> (होम स्क्रीन पर जोड़ें) chunein.</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowIosGuide(false)}
              className="w-full py-2.5 rounded-xl bg-[#0066FF] text-white text-xs font-black uppercase tracking-wider cursor-pointer shadow-md"
            >
              Samajh Gaya (Done)
            </button>
          </div>
        </div>
      )}

      {/* Floating Bottom App Bar for Mobile & Tablet (lg:hidden) */}
      <nav
        aria-label="Mobile and Tablet Navigation"
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-2 py-1.5 safe-area-pb"
      >
        <div className="flex items-center justify-around max-w-lg mx-auto">
          {/* Home */}
          <button
            type="button"
            onClick={() => navigateTo('home')}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all cursor-pointer ${
              activeView === 'home' ? 'text-[#0066FF]' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-0.5">Home</span>
          </button>

          {/* Courses */}
          <button
            type="button"
            onClick={() => navigateTo('courses', 'courses-section')}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all cursor-pointer ${
              activeView === 'courses' ? 'text-[#0066FF]' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-0.5">Courses</span>
          </button>

          {/* Student Portal / Vault */}
          <button
            type="button"
            onClick={() => navigateTo('student-portal')}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all cursor-pointer ${
              activeView === 'student-portal' ? 'text-[#0066FF]' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <GraduationCap className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-0.5">Portal</span>
          </button>

          {/* Admissions */}
          <button
            type="button"
            onClick={() => navigateTo('admission', 'admission-section')}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all cursor-pointer ${
              activeView === 'admission' ? 'text-[#0066FF]' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileText className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-0.5">Apply</span>
          </button>

          {/* Install App Button */}
          <button
            type="button"
            onClick={handleInstallClick}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all cursor-pointer ${
              isInstalled
                ? 'text-emerald-600 bg-emerald-50'
                : 'text-white bg-[#0066FF] shadow-xs active:scale-95'
            }`}
          >
            {isInstalled ? (
              <>
                <Check className="w-4 h-4" />
                <span className="text-[9px] font-black mt-0.5">Installed</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 animate-bounce" />
                <span className="text-[9px] font-black mt-0.5">Install App</span>
              </>
            )}
          </button>
        </div>
      </nav>
    </>
  );
};
