import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { VideoLecture, VideoPlatform } from '../../types';
import { Video, Plus, Trash2, Edit3, X, Save, Eye, EyeOff, Play, Share2, Sparkles, Radio, CheckCircle2, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { Youtube } from '../SocialIcons';

export const YouTubeManager: React.FC = () => {
  const { videos, addVideoLecture, updateVideoLecture, deleteVideoLecture, showToast, websiteSettings, updateWebsiteSettings } = useApp();
  const [isAdding, setIsAdding] = useState(false);
  const [editingVideo, setEditingVideo] = useState<VideoLecture | null>(null);

  // Live Stream Controls State
  const liveSession = websiteSettings?.liveStream || {
    isLive: false,
    youtubeUrl: '',
    title: '',
    instructor: 'S. R. Anand',
    targetClass: 'WCNA & WCFM Scholars',
    thumbnailUrl: ''
  };

  const [liveUrl, setLiveUrl] = useState(liveSession.youtubeUrl || '');
  const [liveTitle, setLiveTitle] = useState(liveSession.title || '');
  const [liveInstructor, setLiveInstructor] = useState(liveSession.instructor || 'S. R. Anand');
  const [liveBatch, setLiveBatch] = useState(liveSession.targetClass || 'WCNA & WCFM Scholars');
  const [liveThumb, setLiveThumb] = useState(liveSession.thumbnailUrl || '');
  const [archivedEditVideo, setArchivedEditVideo] = useState<VideoLecture | null>(null);

  const [newVideo, setNewVideo] = useState<{
    title: string;
    videoUrl: string;
    platform: VideoPlatform;
    duration: string;
    subject: string;
    targetClass: string;
    instructor: string;
  }>({
    title: '',
    videoUrl: '',
    platform: 'youtube',
    duration: '15:00',
    subject: 'Ayurveda & Naturopathy',
    targetClass: 'WCNA Program',
    instructor: 'S. R. Anand'
  });

  const detectPlatform = (url: string, current: VideoPlatform): VideoPlatform => {
    const trimmed = url.trim().toLowerCase();
    if (trimmed.includes('youtube.com') || trimmed.includes('youtu.be')) return 'youtube';
    if (trimmed.includes('instagram.com')) return 'instagram';
    if (trimmed.includes('facebook.com') || trimmed.includes('fb.watch')) return 'facebook';
    if (trimmed.includes('drive.google.com') || trimmed.includes('docs.google.com')) return 'google_drive';
    return current;
  };

  const extractYouTubeId = (url: string): string => {
    if (!url) return '';
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/))([\w-]{11})/);
    return match ? match[1] : '';
  };

  const extractEmbedInfo = (url: string, platform: VideoPlatform) => {
    let embedUrl = '';
    let videoId = '';
    let thumbnail = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80';

    if (platform === 'youtube' || url.includes('youtu')) {
      const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/))([\w-]{11})/);
      videoId = match ? match[1] : 'kJQP7kiw5Fk';
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
      thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    } else if (platform === 'google_drive' || url.includes('drive.google.com')) {
      const match = url.match(/(?:drive|docs)\.google\.com\/(?:file\/d\/|open\?id=|uc\?id=)([a-zA-Z0-9_-]+)/);
      videoId = match ? match[1] : 'gdrive';
      embedUrl = `https://drive.google.com/file/d/${videoId}/preview`;
      thumbnail = `https://lh3.googleusercontent.com/d/${videoId}`;
    } else if (platform === 'instagram' || url.includes('instagram.com')) {
      const cleanUrl = url.split('?')[0].replace(/\/+$/, '');
      embedUrl = `${cleanUrl}/embed/`;
      videoId = cleanUrl.split('/').pop() || 'insta';
      thumbnail = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80';
    } else if (platform === 'facebook' || url.includes('facebook.com') || url.includes('fb.watch')) {
      embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=0`;
      videoId = 'fb-vid';
      thumbnail = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80';
    }

    return { embedUrl, videoId, thumbnail };
  };

  const handleStartLive = async () => {
    if (!liveUrl.trim()) {
      showToast('Please enter a YouTube live stream link.', 'warning');
      return;
    }
    const ytId = extractYouTubeId(liveUrl);
    const autoThumb = ytId ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg` : '';

    await updateWebsiteSettings({
      liveStream: {
        isLive: true,
        youtubeUrl: liveUrl.trim(),
        title: liveTitle.trim() || '🔴 Live Masterclass Session',
        instructor: liveInstructor,
        targetClass: liveBatch,
        thumbnailUrl: liveThumb.trim() || autoThumb,
        startedAt: new Date().toISOString()
      }
    });
    showToast('🔴 Class is now LIVE on the website! Students can watch directly in the video section.', 'success');
  };

  const handleEndLive = async () => {
    const currentUrl = liveSession.youtubeUrl || liveUrl;
    const currentTitle = liveSession.title || liveTitle || 'Recorded Live Masterclass';
    const ytId = extractYouTubeId(currentUrl);
    const autoThumb = ytId
      ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`
      : 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80';
    const finalThumb = liveThumb.trim() || autoThumb;

    // Create archived recorded lecture automatically
    const newArchivedVideo: VideoLecture = {
      id: `vid-live-${Date.now()}`,
      title: currentTitle,
      youtubeUrl: currentUrl,
      videoUrl: currentUrl,
      platform: 'youtube',
      videoId: ytId || 'live-rec',
      youtubeId: ytId || 'live-rec',
      thumbnail: finalThumb,
      duration: 'Recorded Masterclass',
      views: '1.2K views',
      subject: liveBatch.toLowerCase().includes('wcna') ? 'Ayurveda & Naturopathy' : 'Wealth Management',
      targetClass: liveBatch || 'WCNA & WCFM Program',
      instructor: liveInstructor || 'S. R. Anand',
      isFeatured: true
    };

    await addVideoLecture(newArchivedVideo);

    await updateWebsiteSettings({
      liveStream: {
        ...liveSession,
        isLive: false,
        endedAt: new Date().toISOString()
      }
    });

    setArchivedEditVideo(newArchivedVideo);
    showToast('✅ Live Class ended! Auto-generated thumbnail and saved to recorded lectures.', 'success');
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVideo.title || !newVideo.videoUrl) {
      showToast('Please enter video title and video link.', 'warning');
      return;
    }

    const { videoId, thumbnail } = extractEmbedInfo(newVideo.videoUrl, newVideo.platform);

    await addVideoLecture({
      title: newVideo.title,
      youtubeUrl: newVideo.videoUrl,
      videoUrl: newVideo.videoUrl,
      platform: newVideo.platform,
      videoId,
      youtubeId: videoId,
      thumbnail,
      duration: newVideo.duration,
      subject: newVideo.subject,
      targetClass: newVideo.targetClass,
      instructor: newVideo.instructor,
      isFeatured: true
    });

    setIsAdding(false);
    setNewVideo({
      title: '',
      videoUrl: '',
      platform: 'youtube',
      duration: '15:00',
      subject: 'Ayurveda & Naturopathy',
      targetClass: 'WCNA Program',
      instructor: 'S. R. Anand'
    });
    showToast(`${newVideo.platform.toUpperCase()} video lecture published!`, 'success');
  };

  const isCurrentLive = Boolean(websiteSettings?.liveStream?.isLive);

  return (
    <div className="space-y-8">
      
      {/* 🔴 LIVE CLASSROOM STREAMING DESK */}
      <div className="bg-slate-950 border-2 border-red-500/50 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-2xl ${isCurrentLive ? 'bg-red-600 text-white animate-pulse' : 'bg-slate-900 text-red-500 border border-red-500/30'}`}>
              <Radio className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                <span>YouTube Live Stream & Broadcast Desk</span>
                {isCurrentLive && (
                  <span className="bg-red-600 text-white text-[10px] px-2.5 py-0.5 rounded-full font-black animate-ping uppercase tracking-wider">
                    STREAMING LIVE
                  </span>
                )}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Paste YouTube live link to broadcast live classes directly on the website. Ending the stream auto-generates a high-res thumbnail and archives it to lectures!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isCurrentLive ? (
              <button
                onClick={handleEndLive}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-red-400 border border-red-500/40 text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-lg cursor-pointer transition-colors"
              >
                <span>⏹️ End Live & Archive Lecture</span>
              </button>
            ) : (
              <button
                onClick={handleStartLive}
                className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-red-600/30 cursor-pointer transition-all"
              >
                <span>🔴 Go Live On Website</span>
              </button>
            )}
          </div>
        </div>

        {/* Live Stream Configuration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="lg:col-span-2">
            <label className="text-slate-300 font-bold block mb-1">
              YouTube Live Stream URL or Video Link *
            </label>
            <input
              type="text"
              placeholder="https://youtube.com/live/... or https://www.youtube.com/watch?v=..."
              value={liveUrl}
              onChange={e => setLiveUrl(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white font-mono focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="text-slate-300 font-bold block mb-1">
              Mentor / Faculty Lead
            </label>
            <select
              value={liveInstructor}
              onChange={e => setLiveInstructor(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white font-bold focus:outline-none focus:border-red-500"
            >
              <option value="S. R. Anand">S. R. Anand (Founder & Director)</option>
              <option value="A.D. Rao">A.D. Rao (Co-Founder & Wealth Lead)</option>
            </select>
          </div>

          <div className="lg:col-span-2">
            <label className="text-slate-300 font-bold block mb-1">
              Live Class Title *
            </label>
            <input
              type="text"
              placeholder="e.g. Clinical Naturopathy & Pulse Diagnosis Hands-On Masterclass"
              value={liveTitle}
              onChange={e => setLiveTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="text-slate-300 font-bold block mb-1">
              Target Program / Batch
            </label>
            <input
              type="text"
              placeholder="e.g. WCNA & WCFM Scholars"
              value={liveBatch}
              onChange={e => setLiveBatch(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-red-500"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="text-slate-300 font-bold block mb-1">
              Custom Thumbnail URL (Optional — if blank, auto-generates high-res thumbnail from YouTube)
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="https://... image link or leave empty for automatic YouTube max-res thumbnail"
                value={liveThumb}
                onChange={e => setLiveThumb(e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-red-500"
              />
              {extractYouTubeId(liveUrl) && (
                <button
                  type="button"
                  onClick={() => {
                    const ytId = extractYouTubeId(liveUrl);
                    setLiveThumb(`https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`);
                    showToast('Auto-generated YouTube high-res thumbnail preview!', 'info');
                  }}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer"
                >
                  Auto-Fetch Thumbnail
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Live Preview / Status Strip */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="text-slate-400 font-bold">Current Broadcast Status:</span>
            {isCurrentLive ? (
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Active on Public Website</span>
              </span>
            ) : (
              <span className="text-slate-500 font-bold">Idle (Click "Go Live On Website" to stream)</span>
            )}
          </div>

          {liveUrl && (
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Stream Video ID:</span>
              <span className="font-mono text-amber-400 font-bold">{extractYouTubeId(liveUrl) || 'Invalid Link'}</span>
            </div>
          )}
        </div>

        {/* Immediate Edit Card for Archived Session */}
        {archivedEditVideo && (
          <div className="p-5 rounded-2xl bg-blue-950/60 border border-blue-500/50 space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-black uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Lecture Successfully Archived! You can change the Title or Thumbnail anytime below:</span>
              </div>
              <button
                onClick={() => setArchivedEditVideo(null)}
                className="text-slate-400 hover:text-white text-xs font-bold p-1 cursor-pointer"
              >
                Dismiss
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="text-slate-300 font-bold block mb-1">Archived Lecture Title</label>
                <input
                  type="text"
                  value={archivedEditVideo.title}
                  onChange={e => setArchivedEditVideo({ ...archivedEditVideo, title: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">Thumbnail URL</label>
                <input
                  type="text"
                  value={archivedEditVideo.thumbnail || ''}
                  onChange={e => setArchivedEditVideo({ ...archivedEditVideo, thumbnail: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  updateVideoLecture(archivedEditVideo);
                  setArchivedEditVideo(null);
                  showToast('Archived lecture title and thumbnail updated!', 'success');
                }}
                className="px-5 py-2 rounded-xl bg-[#0066FF] hover:bg-blue-600 text-white font-black text-xs uppercase tracking-wider cursor-pointer shadow-md"
              >
                Save Title & Thumbnail
              </button>
            </div>
          </div>
        )}
      </div>

      {/* REGULAR RECORDED VIDEOS & REELS MANAGEMENT */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-black text-white">Curated Video Lectures & Concept Reels Catalog</h2>
            <p className="text-xs text-slate-400">Manage recorded video masterclasses, YouTube shorts, and clinic demonstrations.</p>
          </div>

          <button
            onClick={() => setIsAdding(!isAdding)}
            className="px-5 py-2.5 rounded-xl bg-[#0066FF] hover:bg-blue-600 text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-lg cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>{isAdding ? 'Cancel' : 'Add Video / Reel'}</span>
          </button>
        </div>

        {isAdding && (
          <form onSubmit={handleAdd} className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4 animate-in fade-in duration-150">
            <h3 className="text-sm font-black text-amber-400 uppercase tracking-wider">Embed Video (YouTube / Instagram / Facebook)</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Select Platform *</label>
                <select
                  value={newVideo.platform}
                  onChange={e => setNewVideo({ ...newVideo, platform: e.target.value as VideoPlatform })}
                  className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                >
                  <option value="youtube">YouTube (Video / Shorts)</option>
                  <option value="instagram">Instagram (Reel / Post)</option>
                  <option value="facebook">Facebook (Video / Reel)</option>
                  <option value="google_drive">Google Drive (Video)</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="text-xs font-bold text-slate-300 block mb-1">Video / Reel URL *</label>
                <input
                  type="text"
                  required
                  placeholder={
                    newVideo.platform === 'youtube'
                      ? 'https://www.youtube.com/watch?v=... or shorts URL'
                      : newVideo.platform === 'instagram'
                      ? 'https://www.instagram.com/reel/... or /p/...'
                      : newVideo.platform === 'google_drive'
                      ? 'https://drive.google.com/file/d/.../view'
                      : 'https://www.facebook.com/.../videos/... or fb.watch/...'
                  }
                  value={newVideo.videoUrl}
                  onChange={e => {
                    const url = e.target.value;
                    const autoPlat = detectPlatform(url, newVideo.platform);
                    setNewVideo({ ...newVideo, videoUrl: url, platform: autoPlat });
                  }}
                  className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Lecture / Reel Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Panchakarma Principles / Wealth Portfolio Strategy"
                  value={newVideo.title}
                  onChange={e => setNewVideo({ ...newVideo, title: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Target Class / Batch *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. WCNA / WCFM / Executive Communication"
                  value={newVideo.targetClass}
                  onChange={e => setNewVideo({ ...newVideo, targetClass: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Subject / Topic *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ayurveda / Naturopathy / Wealth Management / Public Speaking"
                  value={newVideo.subject}
                  onChange={e => setNewVideo({ ...newVideo, subject: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="submit"
                className="px-6 py-2 rounded-xl bg-emerald-600 text-white text-xs font-black uppercase tracking-wider"
              >
                Publish Video
              </button>
            </div>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map(v => {
            const platform = v.platform || (v.youtubeUrl && v.youtubeUrl.includes('instagram') ? 'instagram' : v.youtubeUrl && v.youtubeUrl.includes('facebook') ? 'facebook' : 'youtube');
            
            return (
              <div key={v.id} className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden flex flex-col justify-between shadow-lg">
                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                  {platform === 'youtube' ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${v.videoId || v.youtubeId || 'kJQP7kiw5Fk'}`}
                      title={v.title}
                      className="w-full h-full border-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="w-full h-full relative">
                      <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="px-3 py-1 rounded-full bg-slate-900/90 text-white text-xs font-bold uppercase border border-slate-700">
                          {platform.toUpperCase()} REEL
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-400 text-[10px] font-mono font-bold">
                      {v.subject} • {v.targetClass}
                    </span>
                    <span className={`px-2 py-0.5 rounded-md text-[9px] font-black uppercase ${
                      platform === 'instagram'
                        ? 'bg-pink-500/20 text-pink-400'
                        : platform === 'facebook'
                        ? 'bg-blue-600/20 text-blue-400'
                        : 'bg-rose-500/20 text-rose-400'
                    }`}>
                      {platform}
                    </span>
                  </div>

                  <h4 className="text-xs font-black text-white line-clamp-2">{v.title}</h4>
                  
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-[10px] text-slate-400">{v.instructor}</span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setEditingVideo({ ...v })}
                        className="p-1.5 rounded-lg text-amber-400 hover:bg-amber-500/10 cursor-pointer"
                        title="Edit Video"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`Delete video "${v.title}"?`)) {
                            deleteVideoLecture(v.id);
                          }
                        }}
                        className="p-1.5 rounded-lg text-red-400 hover:bg-red-500/10 cursor-pointer"
                        title="Delete Video"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Edit Video Modal */}
      {editingVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg bg-slate-950 text-white rounded-3xl border border-slate-800 p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-black uppercase">Edit Video Lecture / Reel</h3>
              </div>
              <button onClick={() => setEditingVideo(null)} className="p-1 text-slate-400 hover:text-white cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-bold text-slate-400 block mb-1">Video Title</label>
                <input
                  type="text"
                  value={editingVideo.title}
                  onChange={e => setEditingVideo({ ...editingVideo, title: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-400 block mb-1">Thumbnail URL</label>
                <input
                  type="text"
                  value={editingVideo.thumbnail || ''}
                  onChange={e => setEditingVideo({ ...editingVideo, thumbnail: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-400 block mb-1">Video Link (YouTube, Instagram Reel, or Facebook)</label>
                <input
                  type="text"
                  value={editingVideo.videoUrl || editingVideo.youtubeUrl || ''}
                  onChange={e => {
                    const url = e.target.value;
                    const plat = detectPlatform(url, editingVideo.platform || 'youtube');
                    const { videoId, thumbnail } = extractEmbedInfo(url, plat);
                    setEditingVideo({
                      ...editingVideo,
                      videoUrl: url,
                      youtubeUrl: url,
                      platform: plat,
                      videoId,
                      youtubeId: videoId,
                      thumbnail: editingVideo.thumbnail || thumbnail
                    });
                  }}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-400 block mb-1">Subject</label>
                  <input
                    type="text"
                    value={editingVideo.subject || ''}
                    onChange={e => setEditingVideo({ ...editingVideo, subject: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-400 block mb-1">Target Class / Audience</label>
                  <input
                    type="text"
                    value={editingVideo.targetClass || ''}
                    onChange={e => setEditingVideo({ ...editingVideo, targetClass: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-400 block mb-1">Instructor / Presenter</label>
                <select
                  value={editingVideo.instructor || 'S. R. Anand'}
                  onChange={e => setEditingVideo({ ...editingVideo, instructor: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-[#0066FF]"
                >
                  <option value="S. R. Anand">S. R. Anand</option>
                  <option value="A.D. Rao">A.D. Rao</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                onClick={() => setEditingVideo(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-bold text-slate-300 hover:bg-slate-700 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (editingVideo) {
                    updateVideoLecture(editingVideo);
                    setEditingVideo(null);
                    showToast('Video details updated!', 'success');
                  }
                }}
                className="px-6 py-2 rounded-xl bg-[#0066FF] hover:bg-blue-600 text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
