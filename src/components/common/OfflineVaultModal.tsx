import React, { useState, useEffect } from 'react';
import { DownloadCloud, Trash2, BookOpen, X, ArrowLeft, FileText, CheckCircle2, Search, ExternalLink } from 'lucide-react';
import { getOfflineDocs, deleteOfflineDoc, OfflineDoc } from '../../utils/offlineStorage';
import { useApp } from '../../context/AppContext';
import { getTranslation } from '../../utils/i18n';

interface OfflineVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OfflineVaultModal: React.FC<OfflineVaultModalProps> = ({ isOpen, onClose }) => {
  const { language, showToast } = useApp();
  const t = getTranslation(language);

  const [docs, setDocs] = useState<OfflineDoc[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [readingDoc, setReadingDoc] = useState<OfflineDoc | null>(null);

  useEffect(() => {
    if (isOpen) {
      setDocs(getOfflineDocs());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDelete = (id: string, title: string) => {
    deleteOfflineDoc(id);
    setDocs(getOfflineDocs());
    showToast(`Removed "${title}" from offline vault.`, 'info');
    if (readingDoc?.id === id) {
      setReadingDoc(null);
    }
  };

  const filteredDocs = docs.filter(d =>
    d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (d.subject && d.subject.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (d.targetClass && d.targetClass.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]">
        
        {/* Header */}
        <div className="px-5 py-4 bg-emerald-600 text-white flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white">
              <DownloadCloud className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black tracking-tight">{t.offlineVault}</h3>
              <p className="text-[11px] text-emerald-100 font-medium">
                {t.offlineReady} • Read anytime without data
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {readingDoc ? (
            /* Offline Reading View */
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setReadingDoc(null)}
                  className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Saved Notes</span>
                </button>
                <span className="text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                  Saved on {readingDoc.downloadedAt}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
                  {readingDoc.targetClass} • {readingDoc.subject || 'Study Note'}
                </span>
                <h2 className="text-lg font-black text-slate-900 dark:text-white leading-snug mt-1">
                  {readingDoc.title}
                </h2>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-mono whitespace-pre-wrap max-h-96 overflow-y-auto">
                {readingDoc.contentSnippet || 'Full document ready for offline reference. Review your key formulas, concepts and notes.'}
              </div>

              {readingDoc.fileUrl && readingDoc.fileUrl !== '#' && (
                <div className="pt-2 flex justify-end">
                  <a
                    href={readingDoc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-sm"
                  >
                    <span>Open Original Source</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ) : (
            /* Saved List View */
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search saved notes, subjects, classes..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* List */}
              {filteredDocs.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center mx-auto">
                    <DownloadCloud className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      {docs.length === 0 ? t.noOfflineNotes : 'No Matching Saved Notes'}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto mt-1">
                      {docs.length === 0 ? t.noOfflineNotesSub : 'Try searching with another keyword.'}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {filteredDocs.map(doc => (
                    <div
                      key={doc.id}
                      className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40 flex items-center justify-between gap-3 shadow-xs hover:border-emerald-300 transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 flex items-center justify-center shrink-0">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600">
                              {doc.targetClass}
                            </span>
                            <span className="text-[10px] text-slate-400">• {doc.subject || 'Note'}</span>
                          </div>
                          <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                            {doc.title}
                          </h4>
                          <span className="text-[10px] text-slate-400">
                            Saved on {doc.downloadedAt}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => setReadingDoc(doc)}
                          className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs cursor-pointer"
                        >
                          {t.readNow}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(doc.id, doc.title)}
                          className="p-1.5 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 cursor-pointer transition-colors"
                          title="Remove from offline vault"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
