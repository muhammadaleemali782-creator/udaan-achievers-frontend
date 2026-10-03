import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { StudyMaterial, MaterialCategory } from '../types';
import {
  FileText,
  Download,
  Eye,
  Search,
  Filter,
  BookOpen,
  Sparkles,
  CheckCircle,
  FileCheck,
  HelpCircle,
  Clock,
  Layers,
  ArrowDownToLine,
  Edit3,
  X
} from 'lucide-react';
import { AdBanner } from './ads/AdBanner';

export const StudyMaterialSection: React.FC = () => {
  const { studyMaterials, setSelectedDocForPreview, showToast, isAdminAuthenticated, updateStudyMaterial } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [editingMaterial, setEditingMaterial] = useState<StudyMaterial | null>(null);

  const categories = [
    { id: 'all', label: 'All Resources', icon: Layers },
    { id: 'pdf_notes', label: 'Course Handbooks (12 Books)', icon: BookOpen },
    { id: 'practice_sets', label: 'Question Banks (100 Q&A)', icon: HelpCircle },
    { id: 'formulas', label: 'Course Blueprints', icon: FileCheck },
    { id: 'wcfm', label: 'Wealth Management (Finance)', icon: Sparkles }
  ];

  const classFilters = ['all', 'WCNA Program', 'WCFM Program', 'Ayurveda', 'Naturopathy', 'Nutrition & Diet', 'Consultation', 'Finance'];

  const filteredMaterials = studyMaterials.filter(mat => {
    if (!mat) return false;
    let matchesCat = true;
    if (selectedCategory === 'wcfm') {
      matchesCat = (mat.targetClass || '').includes('WCFM') || (mat.subject || '').toLowerCase().includes('wealth') || (mat.subject || '').toLowerCase().includes('financial') || (mat.subject || '').toLowerCase().includes('valuation');
    } else if (selectedCategory !== 'all') {
      matchesCat = mat.category === selectedCategory;
    }

    let matchesClass = true;
    if (selectedClass === 'Finance') {
      matchesClass = (mat.targetClass || '').includes('WCFM') || (mat.subject || '').toLowerCase().includes('wealth') || (mat.subject || '').toLowerCase().includes('financial') || (mat.subject || '').toLowerCase().includes('valuation');
    } else if (selectedClass !== 'all') {
      matchesClass = (mat.targetClass || '').toLowerCase().includes(selectedClass.toLowerCase()) || (mat.subject || '').toLowerCase().includes(selectedClass.toLowerCase());
    }

    const q = (searchQuery || '').toLowerCase();
    const matchesSearch = !q || (
      (mat.title || '').toLowerCase().includes(q) ||
      (mat.subject || '').toLowerCase().includes(q) ||
      (mat.chapter || '').toLowerCase().includes(q)
    );
    return matchesCat && matchesClass && matchesSearch;
  });

  const handleDownload = (mat: StudyMaterial) => {
    showToast(`Downloading: ${mat.title}`, 'success');
    
    if (mat.downloadUrl && mat.downloadUrl !== '#' && !mat.downloadUrl.startsWith('data:')) {
      const a = document.createElement('a');
      a.href = mat.downloadUrl;
      const fileName = mat.downloadUrl.split('/').pop() || `${mat.title.replace(/[^a-z0-9]/gi, '_')}.docx`;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      return;
    }

    const element = document.createElement('a');
    const file = new Blob([`Educa Institute of Consultancy Study Material\n\nTitle: ${mat.title}\nProgram: ${mat.targetClass}\nSubject: ${mat.subject}\nChapter: ${mat.chapter}\nPages: ${mat.pages}\n\nNotes Summary:\n${mat.previewContent || 'Official verified educational handbook from Educa Institute Academic Mentors.'}\n\nWebsite: https://educainstitute.vercel.app/\nHelpline: +91 9369087032`], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${mat.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="study-material-section" className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200 text-xs font-black uppercase tracking-wider shadow-xs">
            <FileText className="w-3.5 h-3.5" />
            <span>Digital Study Material & PDF Vault</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            OFFICIAL COURSE <span className="text-[#0066FF]">HANDBOOKS & QUESTION BANKS</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium">
            Access official 12-book course handbooks, modular revision notes, 100 Q&A question banks, and practitioner blueprints curated by academic mentors.
          </p>
        </div>

        {/* Dynamic Study Vault Advertisement Banner */}
        <AdBanner placement="study_vault" />

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
          {categories.map(cat => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0066FF] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-[#0066FF]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search & Class Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-slate-200 shadow-card-clean">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic, chapter, subject..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0066FF]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {classFilters.map(cls => (
              <button
                key={cls}
                onClick={() => setSelectedClass(cls)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedClass === cls
                    ? 'bg-[#0066FF] text-white shadow-sm'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cls === 'all' ? 'All Subjects' : cls}
              </button>
            ))}
          </div>
        </div>

        {/* Materials Grid with pixel-perfect alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredMaterials.map((mat) => (
            <div
              key={mat.id}
              className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-6 shadow-card-clean hover:shadow-learner-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group h-full"
            >
              <div className="space-y-3">
                {/* Header Tag Row */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#0066FF] text-[10px] font-black uppercase border border-blue-100 truncate max-w-[170px]">
                    {mat.targetClass}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-lg border border-slate-200 shrink-0">
                    {mat.category === 'practice_sets' ? '100 Q&A Bank' : mat.category === 'formulas' ? 'Blueprint' : 'DOCX • Notes'}
                  </span>
                </div>

                {/* Subject & Pages Info */}
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400">
                  <span className="truncate">{mat.subject}</span>
                  <span className="shrink-0 font-mono text-slate-500">{mat.pages} Pages</span>
                </div>

                {/* Title with uniform 2-line height */}
                <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-[#0066FF] transition-colors leading-snug line-clamp-2 min-h-[2.85rem] flex items-center">
                  {mat.title}
                </h3>

                {/* Preview with uniform 2-line height */}
                <p className="text-xs text-slate-500 line-clamp-2 min-h-[2.5rem] leading-relaxed font-medium">
                  {mat.previewContent || 'Comprehensive theory, clinical frameworks, and practitioner study highlights.'}
                </p>
              </div>

              {/* Action Buttons Pinned to Bottom */}
              <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setSelectedDocForPreview(mat)}
                    className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-200"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#0066FF]" />
                    <span>Preview</span>
                  </button>

                  {isAdminAuthenticated && (
                    <button
                      onClick={() => setEditingMaterial(mat)}
                      className="px-2 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors"
                      title="Admin: Edit Handbook"
                    >
                      <Edit3 className="w-3 h-3 text-amber-600" />
                      <span className="hidden sm:inline">Edit</span>
                    </button>
                  )}
                </div>

                <button
                  onClick={() => handleDownload(mat)}
                  className="px-3.5 py-1.5 rounded-xl bg-[#0066FF] hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredMaterials.length === 0 && (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-500 text-xs font-medium">
            No study materials found matching the selected filters.
          </div>
        )}

      </div>

      {/* Admin Edit Handbook Modal */}
      {editingMaterial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-[#0066FF]" />
                <span>Admin: Edit Handbook Details</span>
              </h3>
              <button
                type="button"
                onClick={() => setEditingMaterial(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateStudyMaterial(editingMaterial.id, editingMaterial);
                setEditingMaterial(null);
                showToast(`Updated "${editingMaterial.title}" successfully!`, 'success');
              }}
              className="space-y-3.5 text-xs"
            >
              <div>
                <label className="text-slate-700 font-bold block mb-1">Book / Handbook Title</label>
                <input
                  type="text"
                  required
                  value={editingMaterial.title}
                  onChange={(e) => setEditingMaterial({ ...editingMaterial, title: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:outline-none focus:border-[#0066FF]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-700 font-bold block mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    value={editingMaterial.subject}
                    onChange={(e) => setEditingMaterial({ ...editingMaterial, subject: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:outline-none focus:border-[#0066FF]"
                  />
                </div>
                <div>
                  <label className="text-slate-700 font-bold block mb-1">Pages Count</label>
                  <input
                    type="number"
                    value={editingMaterial.pages}
                    onChange={(e) => setEditingMaterial({ ...editingMaterial, pages: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:outline-none focus:border-[#0066FF]"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-700 font-bold block mb-1">Target Class / Category</label>
                <input
                  type="text"
                  value={editingMaterial.targetClass}
                  onChange={(e) => setEditingMaterial({ ...editingMaterial, targetClass: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:outline-none focus:border-[#0066FF]"
                />
              </div>

              <div>
                <label className="text-slate-700 font-bold block mb-1">Overview / Preview Description</label>
                <textarea
                  rows={3}
                  value={editingMaterial.previewContent || ''}
                  onChange={(e) => setEditingMaterial({ ...editingMaterial, previewContent: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:outline-none focus:border-[#0066FF]"
                />
              </div>

              <div>
                <label className="text-slate-700 font-bold block mb-1">Download URL / File Link</label>
                <input
                  type="text"
                  value={editingMaterial.downloadUrl || ''}
                  onChange={(e) => setEditingMaterial({ ...editingMaterial, downloadUrl: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-mono text-[11px] focus:outline-none focus:border-[#0066FF]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditingMaterial(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#0066FF] text-white font-black uppercase tracking-wider hover:bg-blue-700 cursor-pointer shadow-sm"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
