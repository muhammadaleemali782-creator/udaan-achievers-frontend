import React from 'react';
import { useApp } from '../context/AppContext';
import { Play, Clock, Eye, ExternalLink, Sparkles } from 'lucide-react';
import { Youtube, Instagram, Facebook } from './SocialIcons';

export const YouTubeSection: React.FC = () => {
  const { videos, setSelectedVideoForPlayer, websiteSettings } = useApp();
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');

  const categories = [
    'All',
    'Ayurveda',
    'Naturopathy',
    'Wealth Management',
    'Communication Skills',
    'Public Speaking',
    'Management Skills',
    'Career Development'
  ];

  const extractYouTubeId = (url?: string): string => {
    if (!url) return '';
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/))([\w-]{11})/);
    return match ? match[1] : '';
  };

  const filteredVideos = videos.filter(vid => {
    if (selectedCategory === 'All') return true;
    const cat = selectedCategory.toLowerCase();
    return (
      (vid.subject || '').toLowerCase().includes(cat) ||
      (vid.title || '').toLowerCase().includes(cat) ||
      (vid.targetClass || '').toLowerCase().includes(cat)
    );
  });

  const isLive = Boolean(websiteSettings?.liveStream?.isLive);
  const liveSession = websiteSettings?.liveStream;
  const liveYtId = extractYouTubeId(liveSession?.youtubeUrl);

  return (
    <section id="videos-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800 relative transition-colors">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs font-black uppercase tracking-wider mb-3">
              <Youtube className="w-3.5 h-3.5" />
              <span>Video Lectures & Educational Reels</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              WATCH <span className="text-rose-600">LECTURES & SHORT CONCEPT REELS</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base mt-2 font-medium max-w-2xl leading-relaxed">
              Learn through short concept videos, lectures and educational reels designed to make complex topics easier to understand and revise.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-black uppercase tracking-wider shadow-md shadow-rose-500/20 flex items-center gap-2 transition-all cursor-pointer"
            >
              <Youtube className="w-4 h-4" />
              <span>YouTube Channel</span>
            </a>
          </div>
        </div>

        {/* Live Stream Active Player Box (When Class is LIVE) */}
        {isLive && liveSession && (
          <div className="mb-12 bg-slate-950 text-white rounded-3xl overflow-hidden border-2 border-red-500/80 shadow-2xl animate-in fade-in duration-300">
            <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                  🔴 LIVE CLASSROOM IN SESSION
                </span>
                <span className="hidden sm:inline-block text-[11px] font-bold bg-black/30 px-2.5 py-0.5 rounded-full">
                  {liveSession.targetClass || 'WCNA & WCFM Scholars'}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-white/95">
                  Mentor: <strong className="text-amber-300">{liveSession.instructor || 'S. R. Anand'}</strong>
                </span>
                {liveSession.youtubeUrl && (
                  <a
                    href={liveSession.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full bg-white text-red-600 hover:bg-red-50 text-[11px] font-black uppercase tracking-wider transition-colors inline-flex items-center gap-1 shadow-xs"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Watch on YouTube</span>
                  </a>
                )}
              </div>
            </div>

            <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-inner border border-slate-800">
                  {liveYtId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${liveYtId}?autoplay=1&rel=0`}
                      title={liveSession.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-400">
                      <Youtube className="w-12 h-12 text-red-500 mb-2" />
                      <p className="text-sm font-bold text-white">Live Broadcast Player Ready</p>
                      <p className="text-xs text-slate-400 mt-1 max-w-md">The stream link is active. If video does not appear, click the "Watch on YouTube" button above.</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-4 space-y-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-red-400 bg-red-950/80 border border-red-800/80 px-2.5 py-0.5 rounded-full">
                    Live Stream Feed
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white mt-2 leading-snug">
                    {liveSession.title || 'Live Classroom Lecture'}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Live broadcast from Educa Institute of Consultancy studio. Watch real-time clinical demonstration and lecture.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-500 font-bold">Faculty Lead:</span>
                    <span className="font-bold text-white">{liveSession.instructor || 'S. R. Anand'}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-500 font-bold">Program:</span>
                    <span className="font-bold text-amber-400">{liveSession.targetClass || 'WCNA & WCFM'}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-500 font-bold">Status:</span>
                    <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>Streaming Live Now</span>
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/919369087032?text=${encodeURIComponent('Hello S. R. Anand, I am attending the live class: ' + (liveSession.title || ''))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Ask Question to Mentor on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none select-none">
          {categories.map(cat => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-rose-600 text-white border-rose-600 shadow-md shadow-rose-500/20'
                    : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-rose-300 hover:bg-rose-50/50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {(filteredVideos.length > 0 ? filteredVideos : videos).map(vid => {
            const platform = vid.platform || (vid.youtubeUrl?.includes('instagram') ? 'instagram' : vid.youtubeUrl?.includes('facebook') ? 'facebook' : 'youtube');

            return (
              <div
                key={vid.id}
                onClick={() => setSelectedVideoForPlayer(vid)}
                className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-rose-300 dark:hover:border-rose-500/50 rounded-3xl overflow-hidden shadow-card-clean hover:shadow-learner-lg transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer group flex flex-col justify-between"
              >
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Badges on Thumbnail */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 text-xs font-black shadow-sm">
                      {vid.targetClass}
                    </span>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase text-white shadow-sm ${
                      platform === 'instagram'
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500'
                        : platform === 'facebook'
                        ? 'bg-blue-600'
                        : 'bg-rose-600'
                    }`}>
                      {platform}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-black text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-1.5 block">
                      {vid.subject}
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white mb-3 line-clamp-2 leading-snug group-hover:text-rose-600 transition-colors">
                      {vid.title}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span className="font-bold text-slate-700 dark:text-slate-300">By {vid.instructor}</span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {vid.views}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
