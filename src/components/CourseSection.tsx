import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CourseCategory, Course } from '../types';
import { ImageUploaderInput } from './common/ImageUploaderInput';
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Laptop,
  MessageCircle,
  Clock,
  Star,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Edit3,
  Trash2,
  Plus,
  X,
  Save,
  Loader2
} from 'lucide-react';
import { CourseCardSkeleton } from './common/SkeletonLoader';

export const CourseSection: React.FC = () => {
  const { courses, updateCourse, deleteCourse, addCourse, isAdminAuthenticated, setIsAdminAuthModalOpen, navigateTo, showToast, startEnrollment } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [isAddingCourse, setIsAddingCourse] = useState(false);
  const [loadingCourseId, setLoadingCourseId] = useState<string | null>(null);
  const [newCourse, setNewCourse] = useState<Partial<Course>>({
    title: '',
    category: 'wellness',
    targetClass: 'Aspiring Consultants & Practitioners',
    duration: '6 Months Certification',
    fee: 25000,
    discountFee: 18500,
    instructor: 'S. R. Anand',
    image: '/assets/debate.jpg',
    badge: 'New Program',
    description: '',
    features: ['Practical Clinical Case Studies', 'Live Internship Mentorship', 'Verifiable Certificate'],
    isPaid: true
  });

    const categories: { id: string; label: string; icon: string }[] = [
    { id: 'all', label: 'All Programs', icon: '✨' },
    { id: 'wellness', label: 'WCNA (Naturopathy & Ayurveda)', icon: '🌿' },
    { id: 'wealth', label: 'WCFM (Wealth & Finance)', icon: '💼' }
  ];

  const enrichedCourses = courses.map(c => {
    if (!c.image) {
      return {
        ...c,
        image: '/assets/debate.jpg'
      };
    }
    return c;
  });

  const filteredCourses = enrichedCourses.filter(course => {
    if (!course) return false;
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const q = (searchQuery || '').toLowerCase();
    const matchesSearch = !q || (
      (course.title || '').toLowerCase().includes(q) ||
      (course.targetClass || '').toLowerCase().includes(q) ||
      (course.description || '').toLowerCase().includes(q)
    );
    return matchesCategory && matchesSearch;
  });

  const handleEnroll = (course: Course) => {
    if (course.isPaid) {
      startEnrollment(course);
      return;
    }
    showToast(`Opening admission desk for ${course.title}`, 'info');
    navigateTo('admission', 'admission-section');
  };

  return (
    <section id="courses-section" className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Highlight Banner Matching Reference: "Choosing the right consultancy program for growth" */}
        <div className="text-center max-w-4xl mx-auto mb-10 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Choosing the right consultancy program <br className="hidden sm:inline" />
            <span className="text-[#0066FF]">for growth</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium max-w-2xl mx-auto">
            Join Educa Institute of Consultancy for industry-leading certifications in Wellness Consultancy (WCNA) and Wealth Consultancy (WCFM) led by S. R. Anand and certified corporate advisors.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                const elem = document.getElementById('all-courses-grid');
                elem?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wider shadow-md shadow-blue-500/25 transition-all cursor-pointer"
            >
              Explore All Courses
            </button>
            <button
              onClick={() => navigateTo('study-material', 'study-material-section')}
              className="px-6 py-3 rounded-full bg-white hover:bg-blue-50 text-[#0066FF] border border-blue-200 text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-2xs"
            >
              Free Study Vault
            </button>

            {isAdminAuthenticated && (
              <button
                onClick={() => setIsAddingCourse(true)}
                className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black uppercase tracking-wider shadow-md transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add New Course</span>
              </button>
            )}
          </div>

          {/* Key Metrics Strip - Clean, Modern & Elegant */}
          <div className="pt-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50/70 via-white to-blue-50/70 rounded-2xl p-5 sm:p-6 border border-blue-100 shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-blue-100/80">
              <div className="pt-2 sm:pt-0">
                <span className="text-2xl sm:text-3xl font-black text-[#0066FF] block font-mono">98.6%</span>
                <span className="text-[11px] sm:text-xs text-slate-600 font-bold mt-1 block">Certification Pass Rate</span>
              </div>
              <div className="pt-2 sm:pt-0">
                <span className="text-2xl sm:text-3xl font-black text-[#0B3B95] block font-mono">10+ Years</span>
                <span className="text-[11px] sm:text-xs text-slate-600 font-bold mt-1 block">Academic & Clinical Excellence</span>
              </div>
              <div className="pt-2 sm:pt-0">
                <span className="text-2xl sm:text-3xl font-black text-[#0066FF] block font-mono">1:1 Practical</span>
                <span className="text-[11px] sm:text-xs text-slate-600 font-bold mt-1 block">Clinical & Advisory Labs</span>
              </div>
              <div className="pt-2 sm:pt-0">
                <span className="text-2xl sm:text-3xl font-black text-[#0B3B95] block font-mono">1500+</span>
                <span className="text-[11px] sm:text-xs text-slate-600 font-bold mt-1 block">Certified Scholars</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header: Explore Top-Rated Consultancy & Certification Courses */}
        <div id="all-courses-grid" className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200 text-xs font-black uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Programs 2026-27</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Explore <span className="text-[#0066FF]">Specialized Consultancy Programs</span>
          </h3>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium">
            Industry-recognized certifications in Naturopathy, Ayurveda, and Corporate Wealth Advisory.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search courses, classes, subjects..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3 rounded-full bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0066FF] shadow-xs"
          />
        </div>

        {/* 1. TOP LINE: Clean, Native, Butter-Smooth Horizontal Swipe Rail (Never disappears, zero blank gaps) */}
        <div className="relative mb-6">
          <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-3 pt-1 scrollbar-none snap-x px-1 select-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    showToast(`Filtering: ${cat.label}`, 'info');
                  }}
                  className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-black whitespace-nowrap transition-all duration-200 flex items-center gap-2 shrink-0 snap-start shadow-card-clean border cursor-pointer ${
                    isSelected
                      ? 'bg-[#0066FF] text-white border-[#0066FF] shadow-lg shadow-blue-500/25 scale-105'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-[#0066FF] hover:bg-blue-50'
                  }`}
                >
                  <span className="text-base">{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. BOTTOM LINE: Smooth Auto-Gliding Infinite Trust Ticker Rail */}
        <div className="overflow-hidden mb-12 py-2 border-y border-slate-100 bg-slate-50/60 rounded-2xl">
          <div className="animate-marquee-slow flex items-center gap-6 text-xs font-bold text-slate-600 whitespace-nowrap">
            <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 shrink-0 shadow-2xs">
              🌿 Clinical Naturopathy & Pulse Diagnosis
            </span>
            <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 shrink-0 shadow-2xs">
              💼 Corporate Valuation & DCF Modeling
            </span>
            <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 shrink-0 shadow-2xs">
              🩺 Panchakarma & Herbal Formulations
            </span>
            <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 shrink-0 shadow-2xs">
              🏆 99.2% Professional Certification Success
            </span>
            <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 shrink-0 shadow-2xs">
              👨‍🏫 Founder & Director: S. R. Anand
            </span>
            {/* Loop Duplicate for Seamless Marquee */}
            <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 shrink-0 shadow-2xs">
              🌿 Clinical Naturopathy & Pulse Diagnosis
            </span>
            <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 shrink-0 shadow-2xs">
              💼 Corporate Valuation & DCF Modeling
            </span>
            <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 shrink-0 shadow-2xs">
              🩺 Panchakarma & Herbal Formulations
            </span>
            <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 shrink-0 shadow-2xs">
              🏆 99.2% Professional Certification Success
            </span>
            <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 shrink-0 shadow-2xs">
              👨‍🏫 Founder & Director: S. R. Anand
            </span>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course, idx) => (
            <div
              key={course.id}
              data-course-id={course.id}
              style={{ animationDelay: `${idx * 80}ms` }}
              className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl overflow-hidden shadow-card-clean hover:shadow-learner-lg transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col group animate-in fade-in slide-in-from-bottom-4 relative"
            >
              {/* Image & Price Badge */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                <img
                  src={course.image}
                  alt={course.title}
                  data-course-id={course.id}
                  data-course-field="image"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {course.badge && (
                  <span
                    data-course-id={course.id}
                    data-course-field="badge"
                    className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-sm"
                  >
                    {course.badge}
                  </span>
                )}

                <div
                  data-course-id={course.id}
                  data-course-field="discountFee"
                  className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#0066FF] text-white text-xs font-black shadow-sm"
                >
                  ₹{Number(course.discountFee || 150000).toLocaleString('en-IN')}
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                  <span
                    data-course-id={course.id}
                    data-course-field="targetClass"
                    className="bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-sm text-[11px] font-mono"
                  >
                    {course.targetClass}
                  </span>
                  <div className="flex items-center gap-1 bg-amber-400/90 text-slate-950 px-2 py-0.5 rounded-lg text-[11px] font-black pointer-events-none">
                    <Star className="w-3 h-3 fill-slate-950" />
                    <span>4.9</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3
                    data-course-id={course.id}
                    data-course-field="title"
                    className="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-[#0066FF] transition-colors leading-snug line-clamp-2"
                  >
                    {course.title}
                  </h3>
                  <p
                    data-course-id={course.id}
                    data-course-field="description"
                    className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium mt-1.5 line-clamp-2"
                  >
                    {course.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {(course.features || []).slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Enroll & Details */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span
                      data-course-field="fee"
                      onClick={(e) => {
                        if (isAdminAuthenticated) {
                          e.stopPropagation();
                          setEditingCourse({ ...course });
                        }
                      }}
                      className="text-[11px] sm:text-xs text-slate-400 block line-through cursor-pointer hover:text-amber-500 py-0.5 px-1 rounded transition-colors font-medium select-none"
                      title={isAdminAuthenticated ? "Click to edit original fee" : undefined}
                    >
                      ₹{Number(course.fee || 200000).toLocaleString('en-IN')}
                    </span>
                    <span
                      data-course-field="discountFee"
                      onClick={(e) => {
                        if (isAdminAuthenticated) {
                          e.stopPropagation();
                          setEditingCourse({ ...course });
                        }
                      }}
                      className="text-base sm:text-lg font-black text-slate-900 dark:text-white cursor-pointer hover:text-[#0066FF] py-0.5 px-1 rounded transition-colors select-none"
                      title={isAdminAuthenticated ? "Click to edit offer price" : undefined}
                    >
                      ₹{Number(course.discountFee || 150000).toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {isAdminAuthenticated && (
                      <div className="flex items-center gap-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingCourse({ ...course });
                          }}
                          className="p-2 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black shadow-md hover:scale-105 transition-all cursor-pointer"
                          title="Director: Edit Course Details & Photo"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (window.confirm(`Permanently delete "${course.title}"? This cannot be undone.`)) {
                              deleteCourse(course.id);
                            }
                          }}
                          className="p-2 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black shadow-md hover:scale-105 transition-all cursor-pointer"
                          title="Director: Permanently Delete this Course"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    <button
                      onClick={() => {
                        setLoadingCourseId(course.id);
                        setTimeout(() => {
                          handleEnroll(course);
                          setLoadingCourseId(null);
                        }, 400);
                      }}
                      disabled={loadingCourseId === course.id}
                      className="px-5 py-2.5 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wider shadow-md shadow-blue-500/20 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-75"
                    >
                      {loadingCourseId === course.id ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Loading...</span>
                        </>
                      ) : (
                        <>
                          <span>Enroll Now</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {courses.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <CourseCardSkeleton />
            <CourseCardSkeleton />
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="p-12 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-center space-y-3">
            <p className="text-slate-500 text-sm font-medium">No courses found matching your filter.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 bg-[#0066FF] text-white text-xs font-bold rounded-full cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : null}

        {/* Live Admin Course Editor Modal */}
        {editingCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="relative w-full max-w-lg bg-slate-950 text-white rounded-3xl border border-slate-800 p-6 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Edit3 className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-black uppercase">Edit Course Details (Director Desk)</h3>
                </div>
                <button
                  onClick={() => setEditingCourse(null)}
                  className="p-1.5 rounded-full text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="sm:col-span-2">
                  <label className="text-[11px] font-bold text-slate-400 block mb-1">Course Title</label>
                  <input
                    type="text"
                    value={editingCourse.title}
                    onChange={e => setEditingCourse({ ...editingCourse, title: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-400 block mb-1">Original Fee (₹)</label>
                  <input
                    type="number"
                    value={editingCourse.fee}
                    onChange={e => setEditingCourse({ ...editingCourse, fee: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-400 block mb-1">Discounted Fee (₹)</label>
                  <input
                    type="number"
                    value={editingCourse.discountFee}
                    onChange={e => setEditingCourse({ ...editingCourse, discountFee: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <ImageUploaderInput
                    label="Course Image (Upload from Phone/PC or Paste Link)"
                    value={editingCourse.image}
                    onChange={url => setEditingCourse({ ...editingCourse, image: url })}
                    placeholder="Upload course photo or paste image URL..."
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-[11px] font-bold text-slate-400 block mb-1">Description</label>
                  <textarea
                    rows={2}
                    value={editingCourse.description}
                    onChange={e => setEditingCourse({ ...editingCourse, description: e.target.value })}
                    className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-slate-400 block mb-1">WhatsApp Group Link</label>
                    <input
                      type="url"
                      placeholder="https://chat.whatsapp.com/..."
                      value={editingCourse.whatsappRedirectUrl || ''}
                      onChange={e => setEditingCourse({ ...editingCourse, whatsappRedirectUrl: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-400 block mb-1">Video / Playlist Link</label>
                    <input
                      type="url"
                      placeholder="https://youtube.com/playlist?list=..."
                      value={editingCourse.privatePlaylistUrl || ''}
                      onChange={e => setEditingCourse({ ...editingCourse, privatePlaylistUrl: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm(`Permanently delete "${editingCourse.title}"? This cannot be undone.`)) {
                      deleteCourse(editingCourse.id);
                      setEditingCourse(null);
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-rose-600/20 hover:bg-rose-600/30 text-rose-400 border border-rose-500/40 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete Course</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setEditingCourse(null)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-bold text-slate-300 hover:bg-slate-700 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      updateCourse(editingCourse);
                      setEditingCourse(null);
                      showToast('Course updated and saved permanently!', 'success');
                    }}
                    className="px-6 py-2 rounded-xl bg-[#0066FF] hover:bg-blue-600 text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Course</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Live Admin Add Course Modal */}
        {isAddingCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="relative w-full max-w-lg bg-slate-950 text-white rounded-3xl border border-slate-800 p-6 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Plus className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm font-black uppercase">Publish New Course (Director Desk)</h3>
                </div>
                <button
                  onClick={() => setIsAddingCourse(false)}
                  className="p-1.5 rounded-full text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="sm:col-span-2">
                  <label className="text-[11px] font-bold text-slate-400 block mb-1">Course Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Advanced Clinical Naturopathy Mastery"
                    value={newCourse.title}
                    onChange={e => setNewCourse({ ...newCourse, title: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-400 block mb-1">Category</label>
                  <select
                    value={newCourse.category}
                    onChange={e => setNewCourse({ ...newCourse, category: e.target.value as CourseCategory })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                  >
                    <option value="wellness">WCNA (Naturopathy & Ayurveda)</option>
                    <option value="wealth">WCFM (Wealth & Finance)</option>
                    <option value="secondary">Foundation Track</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-400 block mb-1">Target Audience</label>
                  <input
                    type="text"
                    value={newCourse.targetClass}
                    onChange={e => setNewCourse({ ...newCourse, targetClass: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-400 block mb-1">Original Fee (₹)</label>
                  <input
                    type="number"
                    value={newCourse.fee}
                    onChange={e => setNewCourse({ ...newCourse, fee: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-400 block mb-1">Discounted Fee (₹)</label>
                  <input
                    type="number"
                    value={newCourse.discountFee}
                    onChange={e => setNewCourse({ ...newCourse, discountFee: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <ImageUploaderInput
                    label="Course Image (Upload from Phone/PC or Paste Link)"
                    value={newCourse.image || ''}
                    onChange={url => setNewCourse({ ...newCourse, image: url })}
                    placeholder="Upload course banner or paste URL..."
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-[11px] font-bold text-slate-400 block mb-1">Course Description</label>
                  <textarea
                    rows={2}
                    placeholder="Short summary of what students will learn..."
                    value={newCourse.description}
                    onChange={e => setNewCourse({ ...newCourse, description: e.target.value })}
                    className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
                <button
                  onClick={() => setIsAddingCourse(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-bold text-slate-300 hover:bg-slate-700 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={async () => {
                    if (!newCourse.title) {
                      showToast('Course title is required!', 'warning');
                      return;
                    }
                    await addCourse(newCourse as any);
                    setIsAddingCourse(false);
                    showToast('New course published permanently!', 'success');
                  }}
                  className="px-6 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Publish Course</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
