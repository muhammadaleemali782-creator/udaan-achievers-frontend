import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Check, Sparkles, BookOpen, Target, X, ArrowRight, UserCheck } from 'lucide-react';
import { getTranslation } from '../../utils/i18n';

interface StudentGoalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CLASS_OPTIONS = [
  { id: '12th Pass (WCNA / WCFM)', label: '12th Pass (Intermediate)', tag: 'Eligible: WCNA & WCFM', icon: '🎓' },
  { id: 'Graduate Passed (WCNA / WCFM)', label: 'Graduate Passed (Any Stream)', tag: 'Direct Consultant Track', icon: '💼' },
  { id: '10th Pass (WCNA Foundation)', label: '10th Pass (High School)', tag: 'Foundation & Diploma', icon: '🎯' },
  { id: 'Post-Graduate / Professional', label: 'Post-Graduate / Doctor', tag: 'Executive Practice', icon: '🔬' },
  { id: 'WCNA Naturopathy Track', label: 'WCNA Naturopathy & Ayurveda', tag: 'Clinical Practitioner', icon: '🌿' },
  { id: 'WCFM Wealth Advisory Track', label: 'WCFM Wealth Management', tag: 'Corporate & Portfolio', icon: '💰' }
];

const CLASS_SUBJECT_DEFAULTS: Record<string, string[]> = {
  '12th Pass (WCNA / WCFM)': ['WCNA Naturopathy', 'WCFM Wealth Mgmt', 'Diet & Nutrition'],
  'Graduate Passed (WCNA / WCFM)': ['WCFM Wealth Mgmt', 'Corporate Valuation', 'Client Advisory'],
  '10th Pass (WCNA Foundation)': ['WCNA Naturopathy', 'Computer DCA', 'Diet & Nutrition'],
  'Post-Graduate / Professional': ['Clinical Naturopathy', 'Corporate Valuation', 'Portfolio Strategy'],
  'WCNA Naturopathy Track': ['WCNA Naturopathy', 'Clinical Naturopathy', 'Diet & Nutrition'],
  'WCFM Wealth Advisory Track': ['WCFM Wealth Mgmt', 'Corporate Valuation', 'Portfolio Strategy']
};

const SUBJECT_OPTIONS = [
  { id: 'WCNA Naturopathy', label: 'WCNA Naturopathy & Ayurveda', icon: '🌿' },
  { id: 'WCFM Wealth Mgmt', label: 'WCFM Wealth Management', icon: '💰' },
  { id: 'Clinical Naturopathy', label: 'Pulse Diagnosis & Panchakarma', icon: '🩺' },
  { id: 'Diet & Nutrition', label: 'Dietetics & Herbal Formulations', icon: '🥗' },
  { id: 'Corporate Valuation', label: 'Corporate Valuation & Tax', icon: '📊' },
  { id: 'Portfolio Strategy', label: 'Portfolio & Wealth Advisory', icon: '📈' },
  { id: 'Computer DCA', label: 'Computer Applications (DCA)', icon: '💻' },
  { id: 'Client Advisory', label: 'Executive Client Consulting', icon: '🗣️' }
];

const AVATAR_OPTIONS = [
  '🎓', '🧑‍🎓', '👩‍🎓', '👨‍💻', '👩‍💻', '🔬', '🚀', '⭐'
];

export const StudentGoalModal: React.FC<StudentGoalModalProps> = ({ isOpen, onClose }) => {
  const { currentStudent, updateStudentGoal, language, showToast } = useApp();
  const t = getTranslation(language);

  const [selectedClass, setSelectedClass] = useState<string>(
    currentStudent?.targetClass || currentStudent?.classEnrolled || '12th Pass (WCNA / WCFM)'
  );
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(
    currentStudent?.selectedSubjects && currentStudent.selectedSubjects.length > 0
      ? currentStudent.selectedSubjects
      : ['WCNA Naturopathy', 'WCFM Wealth Mgmt']
  );
  const [selectedAvatar, setSelectedAvatar] = useState<string>(
    currentStudent?.avatar || '🎓'
  );

  if (!isOpen) return null;

  const handleClassSelect = (classId: string) => {
    setSelectedClass(classId);
    if (CLASS_SUBJECT_DEFAULTS[classId]) {
      setSelectedSubjects(CLASS_SUBJECT_DEFAULTS[classId]);
    }
  };

  const toggleSubject = (subjId: string) => {
    if (selectedSubjects.includes(subjId)) {
      if (selectedSubjects.length === 1) {
        showToast('Please select at least 1 subject.', 'warning');
        return;
      }
      setSelectedSubjects(prev => prev.filter(s => s !== subjId));
    } else {
      setSelectedSubjects(prev => [...prev, subjId]);
    }
  };

  const handleSave = async () => {
    if (!selectedClass) {
      showToast('Please select your class / target goal.', 'warning');
      return;
    }
    if (selectedSubjects.length === 0) {
      showToast('Please select at least one subject.', 'warning');
      return;
    }

    if (updateStudentGoal) {
      await updateStudentGoal(selectedClass, selectedSubjects, selectedAvatar);
    }
    showToast('Your study preferences have been customized!', 'success');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div
        className="relative w-full max-w-lg rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]"
        style={{ backgroundColor: '#ffffff', color: '#1e293b' }}
      >
        {/* Modal Header */}
        <div
          className="p-4 sm:p-5 text-white flex items-center justify-between"
          style={{ background: 'linear-gradient(135deg, #0052CC 0%, #0066FF 60%, #1a73e8 100%)' }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black tracking-tight leading-tight">
                {t.changeGoal || 'Customize Your Learning Track'}
              </h3>
              <p className="text-[11px] text-blue-100 font-medium">
                Educa Institute Personalized Study Feed
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

        {/* Modal Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* 1. Pick Class / Target */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-black">1</span>
                <span>Select Qualification (10th/12th/Graduate)</span>
              </label>
              <span className="text-[10px] text-blue-600 font-bold">Recommended</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {CLASS_OPTIONS.map(opt => {
                const isSelected = selectedClass === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleClassSelect(opt.id)}
                    className={`p-3 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer relative ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/70 shadow-sm ring-1 ring-blue-500'
                        : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-xl mb-1">{opt.icon}</span>
                      {isSelected && (
                        <div className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 leading-tight">{opt.label}</div>
                      <span className="text-[9px] font-bold text-blue-600 uppercase tracking-wide block mt-0.5">
                        {opt.tag}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Pick Subjects */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-black">2</span>
              <span>Select Key Subjects</span>
            </label>

            <div className="flex flex-wrap gap-1.5">
              {SUBJECT_OPTIONS.map(subj => {
                const isSelected = selectedSubjects.includes(subj.id);
                return (
                  <button
                    key={subj.id}
                    type="button"
                    onClick={() => toggleSubject(subj.id)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span>{subj.icon}</span>
                    <span>{subj.label}</span>
                    {isSelected && <Check className="w-3 h-3 ml-0.5" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Pick Avatar */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-black">3</span>
              <span>Student Profile Avatar</span>
            </label>

            <div className="flex items-center gap-2 overflow-x-auto py-1">
              {AVATAR_OPTIONS.map((av, i) => {
                const isSelected = selectedAvatar === av;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedAvatar(av)}
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xl shrink-0 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 ring-2 ring-blue-500 scale-105 shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200'
                    }`}
                  >
                    <span>{av}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer active:scale-95"
          >
            <span>Save Preferences</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
