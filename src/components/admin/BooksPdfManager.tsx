import React, { useState, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { StudyMaterial, MaterialCategory } from '../../types';
import { FileText, Plus, Trash2, Download, Eye, Layers, HardDrive, CheckCircle2, Sparkles, ExternalLink, Upload, Edit3, X } from 'lucide-react';

export const BooksPdfManager: React.FC = () => {
  const { studyMaterials, addStudyMaterial, updateStudyMaterial, deleteStudyMaterial, showToast } = useApp();
  const [isAdding, setIsAdding] = useState(false);
  const [editingMat, setEditingMat] = useState<StudyMaterial | null>(null);
  const [googleDriveFolder, setGoogleDriveFolder] = useState<string>(
    localStorage.getItem('lcc_google_drive_folder') || 'https://drive.google.com/drive/folders/1aBcDeFgHiJkLmNoPqRsTuVwXyZ'
  );
  const [isEditingDriveFolder, setIsEditingDriveFolder] = useState(false);
  const pdfFileInputRef = useRef<HTMLInputElement>(null);

  const [newPdf, setNewPdf] = useState<Partial<StudyMaterial>>({
    title: '',
    category: 'pdf_notes',
    targetClass: 'WCNA – Naturopathy & Ayurveda',
    subject: 'Ayurveda & Naturopathy',
    chapter: 'Module 1',
    pages: 25,
    downloadUrl: '',
    googleDriveUrl: '',
    isGoogleDrive: false,
    isPremium: false,
    previewContent: 'Official module handbook, clinical protocols, and practical case studies.'
  });

  // Convert Google Drive share link to clean direct download and preview links
  const processDriveLink = (url: string) => {
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
    if (fileIdMatch) {
      const fileId = fileIdMatch[1];
      return {
        isDrive: true,
        downloadUrl: `https://drive.google.com/uc?export=download&id=${fileId}`,
        previewUrl: `https://drive.google.com/file/d/${fileId}/preview`
      };
    }
    return {
      isDrive: false,
      downloadUrl: url || '/assets/sample_notes.pdf',
      previewUrl: url || '/assets/sample_notes.pdf'
    };
  };

  const handleSaveDriveFolder = () => {
    localStorage.setItem('lcc_google_drive_folder', googleDriveFolder);
    setIsEditingDriveFolder(false);
    showToast('Master Google Drive Cloud Storage synced!', 'success');
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPdf.title || !newPdf.subject) {
      showToast('Please provide PDF title and subject.', 'warning');
      return;
    }

    const { isDrive, downloadUrl } = processDriveLink(newPdf.googleDriveUrl || newPdf.downloadUrl || '');

    await addStudyMaterial({
      title: newPdf.title,
      category: newPdf.category as MaterialCategory,
      targetClass: newPdf.targetClass || 'Class 10',
      subject: newPdf.subject,
      chapter: newPdf.chapter || 'Chapter 1',
      pages: Number(newPdf.pages) || 15,
      downloadUrl: downloadUrl,
      googleDriveUrl: newPdf.googleDriveUrl,
      isGoogleDrive: isDrive,
      isPremium: Boolean(newPdf.isPremium),
      fileType: 'pdf',
      previewContent: newPdf.previewContent || 'Comprehensive theory and questions.'
    } as StudyMaterial);

    setIsAdding(false);
    setNewPdf({
      title: '',
      category: 'pdf_notes',
      targetClass: 'Class 10',
      subject: 'Science',
      chapter: 'Chapter 1',
      pages: 15,
      downloadUrl: '',
      googleDriveUrl: '',
      isGoogleDrive: false,
      isPremium: false,
      previewContent: 'Comprehensive theoretical notes and board sample questions.'
    });
    showToast('Study PDF published & linked successfully!', 'success');
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-white">Books & PDF Study Vault</h2>
          <p className="text-xs text-slate-400">Manage downloadable notes with direct Google Drive cloud storage integration.</p>
        </div>

        <button
          onClick={() => setIsAdding(!isAdding)}
          className="px-5 py-2.5 rounded-xl bg-[#0066FF] hover:bg-blue-600 text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-lg cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>{isAdding ? 'Cancel' : 'Upload / Link Study PDF'}</span>
        </button>
      </div>

      {/* Google Drive Master Cloud Folder Card */}
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
            <HardDrive className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-black text-white">Google Drive Cloud Storage Attached</h3>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
                SYNCED
              </span>
            </div>
            <p className="text-xs text-slate-400">
              PDFs and study notes linked to Google Drive are automatically resolved into high-speed direct download links for students.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          {isEditingDriveFolder ? (
            <div className="flex items-center gap-2 w-full">
              <input
                type="text"
                value={googleDriveFolder}
                onChange={e => setGoogleDriveFolder(e.target.value)}
                placeholder="Paste Google Drive Folder link"
                className="px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white w-full md:w-64 focus:outline-none focus:border-[#0066FF]"
              />
              <button
                onClick={handleSaveDriveFolder}
                className="px-3 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-xl"
              >
                Save
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditingDriveFolder(true)}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-300 cursor-pointer"
            >
              Configure Drive Link
            </button>
          )}
        </div>
      </div>

      {isAdding && (
        <form onSubmit={handleAdd} className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4 animate-in fade-in duration-150">
          <h3 className="text-sm font-black text-amber-400 uppercase tracking-wider">Add Study PDF (Google Drive or Direct URL)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Module Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. Class 10 Science Formula Handbook"
                value={newPdf.title}
                onChange={e => setNewPdf({ ...newPdf, title: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Target Class *</label>
              <select
                value={newPdf.targetClass}
                onChange={e => setNewPdf({ ...newPdf, targetClass: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
              >
                <option>WCNA – Naturopathy & Ayurveda</option>
                <option>WCFM – Wealth Management</option>
                <option>Communication & Public Speaking</option>
                <option>Management & Career Development</option>
                <option>Foundation (10th Passed)</option>
                <option>Advanced Foundation (12th Passed)</option>
                <option>Graduate Specialization</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Subject *</label>
              <input
                type="text"
                required
                placeholder="e.g. Naturopathy / Wealth Management / Public Speaking"
                value={newPdf.subject}
                onChange={e => setNewPdf({ ...newPdf, subject: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-xs font-bold text-slate-300 block mb-1">
                Google Drive Share Link or Upload PDF from Device *
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="https://drive.google.com/file/d/.../view or direct PDF link"
                  value={newPdf.googleDriveUrl || newPdf.downloadUrl}
                  onChange={e => setNewPdf({ ...newPdf, googleDriveUrl: e.target.value, downloadUrl: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                />
                <input
                  type="file"
                  ref={pdfFileInputRef}
                  accept=".pdf,application/pdf"
                  onChange={e => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    if (file.size > 25 * 1024 * 1024) {
                      showToast('File exceeds 25MB. For large books, please use Google Drive link.', 'warning');
                      return;
                    }
                    const reader = new FileReader();
                    reader.onload = (evt) => {
                      const dataUrl = evt.target?.result as string;
                      setNewPdf(prev => ({
                        ...prev,
                        downloadUrl: dataUrl,
                        googleDriveUrl: '',
                        title: prev.title || file.name.replace(/\.[^/.]+$/, "")
                      }));
                      showToast(`Loaded ${file.name} successfully!`, 'success');
                    };
                    reader.readAsDataURL(file);
                  }}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => pdfFileInputRef.current?.click()}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-slate-200 flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
                  title="Upload PDF Book from Phone/PC"
                >
                  <Upload className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Upload File</span>
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Estimated Pages</label>
              <input
                type="number"
                value={newPdf.pages}
                onChange={e => setNewPdf({ ...newPdf, pages: Number(e.target.value) })}
                className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="submit"
              className="px-6 py-2 rounded-xl bg-emerald-600 text-white text-xs font-black uppercase tracking-wider"
            >
              Publish to Vault
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {studyMaterials.map(mat => (
          <div key={mat.id} className="bg-slate-950 border border-slate-800 rounded-3xl p-5 flex flex-col justify-between space-y-3 shadow-lg">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-black uppercase">
                  {mat.targetClass}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">{mat.pages} Pages</span>
              </div>
              <h4 className="text-sm font-black text-white">{mat.title}</h4>
              <p className="text-xs text-slate-400 line-clamp-2">{mat.previewContent}</p>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-emerald-400 font-mono">📥 {mat.downloadsCount || 0} Downloads</span>
                {mat.isGoogleDrive && (
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] font-bold">
                    DRIVE
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setEditingMat(mat)}
                  className="p-1.5 rounded-lg text-blue-400 hover:bg-blue-500/10 cursor-pointer"
                  title="Edit Handbook Details"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => deleteStudyMaterial(mat.id)}
                  className="p-1.5 rounded-lg text-red-400 hover:bg-red-500/10 cursor-pointer"
                  title="Delete Handbook"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Handbook Modal */}
      {editingMat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-xs animate-in fade-in">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-[#0066FF]" />
                <span>Edit Handbook / Study Material</span>
              </h3>
              <button
                type="button"
                onClick={() => setEditingMat(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateStudyMaterial(editingMat.id, editingMat);
                setEditingMat(null);
              }}
              className="space-y-4 text-xs"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="md:col-span-2">
                  <label className="text-slate-300 font-bold block mb-1">Title *</label>
                  <input
                    type="text"
                    required
                    value={editingMat.title}
                    onChange={e => setEditingMat({ ...editingMat, title: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">Target Program / Class *</label>
                  <input
                    type="text"
                    required
                    value={editingMat.targetClass}
                    onChange={e => setEditingMat({ ...editingMat, targetClass: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">Subject *</label>
                  <input
                    type="text"
                    required
                    value={editingMat.subject}
                    onChange={e => setEditingMat({ ...editingMat, subject: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">Chapter / Module *</label>
                  <input
                    type="text"
                    required
                    value={editingMat.chapter}
                    onChange={e => setEditingMat({ ...editingMat, chapter: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">Total Pages</label>
                  <input
                    type="number"
                    value={editingMat.pages}
                    onChange={e => setEditingMat({ ...editingMat, pages: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-slate-300 font-bold block mb-1">Download / Document URL</label>
                  <input
                    type="text"
                    value={editingMat.downloadUrl}
                    onChange={e => setEditingMat({ ...editingMat, downloadUrl: e.target.value })}
                    placeholder="/documents/Book1_Complete_EDUCA.docx or Google Drive URL"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-slate-300 font-bold block mb-1">Preview Summary / Overview</label>
                  <textarea
                    rows={3}
                    value={editingMat.previewContent || ''}
                    onChange={e => setEditingMat({ ...editingMat, previewContent: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setEditingMat(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 cursor-pointer font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-wider cursor-pointer shadow-md"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
