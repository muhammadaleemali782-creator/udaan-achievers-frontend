import React, { useState } from 'react';
import { Award, BookOpen, Clock, HeartHandshake, Sparkles, Target, Users, CheckCircle2, ShieldCheck, ArrowRight, Flag, Rocket, Trophy, Monitor, Laptop } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ImageUploaderInput } from './common/ImageUploaderInput';

export const AboutSection: React.FC = () => {
  const { websiteSettings, isAdminAuthenticated, updateWebsiteSettings, showToast } = useApp();
  const director = websiteSettings?.directorName || websiteSettings?.founderName || 'S. R. Anand';
  const founderRole = websiteSettings?.founderRole || 'Founder & Managing Director';
  const coFounder = websiteSettings?.coFounderName || 'A.D. Rao';
  const coFounderRole = websiteSettings?.coFounderRole || 'Co-Founder & Managing Director';
  const institute = websiteSettings?.instituteName || 'Educa Institute of Consultancy';
  const [aboutPhotoLoaded, setAboutPhotoLoaded] = useState(false);
  const [aboutPhotoEdit, setAboutPhotoEdit] = useState(false);
  const [aboutPhotoUrl, setAboutPhotoUrl] = useState('');
  const [coPhotoLoaded, setCoPhotoLoaded] = useState(false);
  const [coPhotoEdit, setCoPhotoEdit] = useState(false);
  const [coPhotoUrl, setCoPhotoUrl] = useState('');

  const milestones = [
    {
      year: '2016',
      title: `Founded by ${director}`,
      icon: Flag,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      desc: 'Started with a passionate mission to eliminate rote cramming and provide conceptual education to every student.'
    },
    {
      year: '2022',
      title: 'Specialized Program Launch',
      icon: Trophy,
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      desc: 'Launched comprehensive certifications in Naturopathy & Ayurveda (WCNA) and Corporate Wealth Consultancy (WCFM).'
    },
    {
      year: '2024',
      title: 'Smart Interactive Classrooms',
      icon: Laptop,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
      desc: 'Equipped audio-visual smart screens and automated weekly chapter testing with parent progress SMS reports.'
    },
    {
      year: '2026',
      title: 'Hybrid EdTech & Learner Portal',
      icon: Rocket,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      desc: 'Introduced 24/7 student learning vault, online mock tests, digital certificate generator, and mobile app.'
    }
  ];

  return (
    <section id="about-section" className="py-20 px-3 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 text-[#0066FF] text-xs font-black uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Legacy of Educational Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            About <span className="text-[#0066FF]">{institute}</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-medium">
            Founded by <strong className="text-slate-900 font-extrabold">{director}</strong> and Co-Founded by <strong className="text-slate-900 font-extrabold">{coFounder}</strong>, {institute} is recognized as a premier educational haven for Naturopathy, Ayurveda, and Corporate Wealth Management Consultancy.
          </p>
        </div>

        {/* 2-Column Founder & Philosophy Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Founder Spotlight Card */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Founder Card */}
            <div className="bg-gradient-to-br from-blue-50/80 via-white to-blue-50/40 rounded-3xl p-5 sm:p-6 border-2 border-blue-200/80 shadow-learner-lg space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="relative shrink-0">
                  <div id="about-director-card" className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-4 border-[#0066FF] shadow-lg shadow-blue-500/25 bg-slate-200">
                    {!aboutPhotoLoaded && (
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
                    )}
                    <img
                      id="about-director-photo"
                      src={websiteSettings?.aboutDirectorPhotoUrl || websiteSettings?.directorPhotoUrl || "/assets/founder.png"}
                      alt={`${director} - Founder & Director`}
                      className={`w-full h-full object-cover object-top hover:scale-105 transition-all duration-300 cursor-pointer ${aboutPhotoLoaded ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => setAboutPhotoLoaded(true)}
                      onError={(e: any) => {
                        setAboutPhotoLoaded(true);
                        if (e.target.src !== window.location.origin + '/assets/founder.png') {
                          e.target.src = '/assets/founder.png';
                        }
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 p-1.5 rounded-xl bg-[#0066FF] text-white shadow-md">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>

                  {isAdminAuthenticated && (
                    <div className="mt-2 text-center">
                      {!aboutPhotoEdit ? (
                        <button
                          type="button"
                          onClick={() => { setAboutPhotoUrl(websiteSettings?.aboutDirectorPhotoUrl || websiteSettings?.directorPhotoUrl || ''); setAboutPhotoEdit(true); }}
                          className="text-[10px] font-bold text-[#0066FF] hover:underline cursor-pointer bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200 inline-flex items-center gap-1"
                        >
                          📸 Edit Founder Photo
                        </button>
                      ) : (
                        <div className="mt-2 p-2 bg-white rounded-xl border border-blue-300 shadow-md text-left space-y-2 w-56">
                          <ImageUploaderInput
                            label="Founder Photo"
                            value={aboutPhotoUrl}
                            onChange={setAboutPhotoUrl}
                            placeholder="Upload or paste URL..."
                          />
                          <div className="flex gap-1.5">
                            <button
                              type="button"
                              onClick={async () => {
                                setAboutPhotoLoaded(false);
                                await updateWebsiteSettings({ ...websiteSettings, aboutDirectorPhotoUrl: aboutPhotoUrl });
                                showToast('Founder photo updated!', 'success');
                                setAboutPhotoEdit(false);
                              }}
                              className="flex-1 py-1 text-[10px] font-black bg-[#0066FF] text-white rounded-lg cursor-pointer"
                            >
                              Save
                            </button>
                            <button
                              type="button"
                              onClick={() => setAboutPhotoEdit(false)}
                              className="flex-1 py-1 text-[10px] font-bold bg-slate-100 text-slate-700 rounded-lg cursor-pointer"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="space-y-1 text-center sm:text-left">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0066FF] text-white font-black text-[9px] uppercase tracking-wider">
                    {founderRole.toUpperCase()}
                  </span>
                  <h3 id="about-director-name" className="text-xl sm:text-2xl font-black text-slate-900 cursor-pointer">{director}</h3>
                  <p className="text-xs text-[#0066FF] font-bold">
                    Founder & Lead Director • {institute}
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-blue-100 shadow-xs text-xs text-slate-700 italic leading-relaxed">
                "Har learner me ek successful professional chupa hota hai. Bas use sahi guidance, practical training aur self-belief ki zaroorat hoti hai. Educa Institute of Consultancy me hum har student par personally focus karte hain."
              </div>
            </div>

            {/* Co-Founder Card */}
            <div className="bg-gradient-to-br from-indigo-50/70 via-white to-blue-50/30 rounded-3xl p-5 sm:p-6 border border-indigo-200/80 shadow-card-clean space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="relative shrink-0">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-indigo-600 shadow-md bg-slate-200">
                    {!coPhotoLoaded && (
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
                    )}
                    <img
                      src={websiteSettings?.coFounderPhotoUrl || "/assets/founder.png"}
                      alt={`${coFounder} - ${coFounderRole}`}
                      className={`w-full h-full object-cover object-top hover:scale-105 transition-all duration-300 cursor-pointer ${coPhotoLoaded ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => setCoPhotoLoaded(true)}
                      onError={(e: any) => {
                        setCoPhotoLoaded(true);
                        if (e.target.src !== window.location.origin + '/assets/founder.png') {
                          e.target.src = '/assets/founder.png';
                        }
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 p-1 rounded-lg bg-indigo-600 text-white shadow-xs">
                    <Award className="w-3 h-3" />
                  </div>

                  {isAdminAuthenticated && (
                    <div className="mt-2 text-center">
                      {!coPhotoEdit ? (
                        <button
                          type="button"
                          onClick={() => { setCoPhotoUrl(websiteSettings?.coFounderPhotoUrl || ''); setCoPhotoEdit(true); }}
                          className="text-[10px] font-bold text-indigo-600 hover:underline cursor-pointer bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200 inline-flex items-center gap-1"
                        >
                          📸 Edit Co-Founder Photo
                        </button>
                      ) : (
                        <div className="mt-2 p-2 bg-white rounded-xl border border-indigo-300 shadow-md text-left space-y-2 w-56">
                          <ImageUploaderInput
                            label="Co-Founder Photo"
                            value={coPhotoUrl}
                            onChange={setCoPhotoUrl}
                            placeholder="Upload or paste URL..."
                          />
                          <div className="flex gap-1.5">
                            <button
                              type="button"
                              onClick={async () => {
                                setCoPhotoLoaded(false);
                                await updateWebsiteSettings({ ...websiteSettings, coFounderPhotoUrl: coPhotoUrl });
                                showToast('Co-Founder photo updated!', 'success');
                                setCoPhotoEdit(false);
                              }}
                              className="flex-1 py-1 text-[10px] font-black bg-indigo-600 text-white rounded-lg cursor-pointer"
                            >
                              Save
                            </button>
                            <button
                              type="button"
                              onClick={() => setCoPhotoEdit(false)}
                              className="flex-1 py-1 text-[10px] font-bold bg-slate-100 text-slate-700 rounded-lg cursor-pointer"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="space-y-1 text-center sm:text-left">
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-600 text-white font-black text-[9px] uppercase tracking-wider">
                    {coFounderRole.toUpperCase()}
                  </span>
                  <h3 id="about-cofounder-name" className="text-xl sm:text-2xl font-black text-slate-900 cursor-pointer">{coFounder}</h3>
                  <p className="text-xs text-indigo-600 font-bold">
                    {coFounderRole} & Operations • {institute}
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-indigo-100 shadow-xs text-xs text-slate-700 italic leading-relaxed whitespace-pre-line">
                "Mera maanna hai ki education sirf knowledge ya certificate hasil karne ka madhyam nahi hai. Education woh power hai jo ek insaan ko apni capabilities samajhne, apni direction choose karne aur apne future ke liye better decisions lene ka confidence deti hai. Mera vision hai ki EDUCA ke through har learner ko sirf learning nahi, balki growth, guidance aur opportunities ke saath connect kiya ja sake. Kyunki jab learning ko sahi direction aur opportunity milti hai, tab ek simple dream bhi ek meaningful journey ban sakta hai."
                <span className="block mt-1 font-bold text-slate-900 not-italic text-[11px]">— A.D. Rao, Co-Founder</span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-2.5 pt-1 text-center">
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <span className="text-lg sm:text-xl font-black text-[#0066FF] block">6+</span>
                <span className="text-[10px] text-slate-500 font-bold">Years Mentorship</span>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <span className="text-lg sm:text-xl font-black text-[#0066FF] block">5,000+</span>
                <span className="text-[10px] text-slate-500 font-bold">Students Taught</span>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <span className="text-lg sm:text-xl font-black text-[#0066FF] block">98.6%</span>
                <span className="text-[10px] text-slate-500 font-bold">Satisfaction Rate</span>
              </div>
            </div>

          </div>

          {/* Right Column: Mission & Core Pedagogy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                Empowering every student with <br />
                <span className="text-[#0066FF]">confidence and modern skills</span>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                At <strong className="text-slate-900 font-extrabold">{institute}</strong>, we bridge theory and practice. We emphasize comprehensive professional training in Naturopathy, Ayurveda, Wealth Management, and executive communication skills.
              </p>
            </div>

            <div className="space-y-2.5">
              {[
                { title: 'Personalized 1-on-1 Attention', desc: 'Small batch sizes (15–25 students) so every question is heard and resolved.' },
                { title: 'Air-Conditioned  classroom ', desc: 'With peaceful students and best environment, culture, decipline, and many more facilities. ' },
                { title: 'Complete Study Vault & Handbooks', desc: 'Modular handbooks, reference blueprints, and structured clinical/financial study guides.' }
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-blue-100 text-[#0066FF] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* High-End Milestone Timeline (Our Journey of Excellence) */}
        <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-card-clean space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0066FF] text-[10px] font-black uppercase tracking-wider">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>MILESTONES & PROVEN RECORD</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Our Journey of Excellence</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">6+ Years of inspiring students under {director} & {coFounder}'s leadership</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {milestones.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.year}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-card-clean hover:shadow-learner-lg hover:border-[#0066FF]/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-[#0066FF] font-mono bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-xl">
                        {item.year}
                      </span>
                      <div className={`p-2 rounded-xl border ${item.color} shadow-xs`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-[#0066FF] transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
