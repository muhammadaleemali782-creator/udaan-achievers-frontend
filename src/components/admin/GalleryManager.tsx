import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { GalleryItem } from '../../types';
import { Plus, Trash2, Edit3, Image, Layers, Sparkles, ExternalLink, X, Save } from 'lucide-react';
import { ImageUploaderInput } from '../common/ImageUploaderInput';

export const GalleryManager: React.FC = () => {
  const { galleryItems, addGalleryItem, updateGalleryItem, deleteGalleryItem, showToast } = useApp();
  const [isAdding, setIsAdding] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);

  const [newItem, setNewItem] = useState<Partial<GalleryItem>>({
    title: '',
    category: 'classroom',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80',
    date: 'August 2026',
    description: 'Modern digital classrooms with live doubt sessions.'
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.title || !newItem.imageUrl) {
      showToast('Title and Image URL are required.', 'warning');
      return;
    }
    addGalleryItem({
      title: newItem.title,
      category: newItem.category || 'classroom',
      imageUrl: newItem.imageUrl,
      description: newItem.description || 'Campus photo from Educa Institute of Consultancy.'
    });
    setIsAdding(false);
    setNewItem({
      title: '',
      category: 'classroom',
      imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80',
      date: 'August 2026',
      description: 'Modern digital classrooms with live doubt sessions.'
    });
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this photo from gallery?')) {
      deleteGalleryItem(id);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <Image className="w-6 h-6 text-purple-400" />
            <span>Campus Photo Gallery Manager</span>
          </h2>
          <p className="text-xs text-slate-400">Upload and curate felicitation day photos, digital lab pictures, topper ceremonies, and events.</p>
        </div>

        <button
          onClick={() => setIsAdding(!isAdding)}
          className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-lg cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>{isAdding ? 'Cancel' : 'Upload Gallery Photo'}</span>
        </button>
      </div>

      {/* Add Form */}
      {isAdding && (
        <form onSubmit={handleAdd} className="bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-4 animate-in fade-in duration-150">
          <h3 className="text-sm font-black text-purple-400 uppercase tracking-wider">Add Campus Photo</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300 block mb-1">Photo Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. Annual Felicitation & Merit Award Ceremony 2026"
                value={newItem.title}
                onChange={e => setNewItem({ ...newItem, title: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Category</label>
              <select
                value={newItem.category}
                onChange={e => setNewItem({ ...newItem, category: e.target.value as any })}
                className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-purple-500"
              >
                <option value="toppers">🏆 Toppers & Awards</option>
                <option value="classroom">📚 Classroom in Session</option>
                <option value="lab">💻 Computer & Science Lab</option>
                <option value="events">🎉 Events & Seminars</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Event Date</label>
              <input
                type="text"
                placeholder="e.g. August 2026"
                value={newItem.date}
                onChange={e => setNewItem({ ...newItem, date: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="sm:col-span-2">
              <ImageUploaderInput
                label="Photo Image (File Upload or URL)"
                value={newItem.imageUrl || ''}
                onChange={url => setNewItem({ ...newItem, imageUrl: url })}
                placeholder="Upload campus photo file or paste image URL..."
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300 block mb-1">Description</label>
              <textarea
                rows={2}
                value={newItem.description}
                onChange={e => setNewItem({ ...newItem, description: e.target.value })}
                className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-black uppercase tracking-wider shadow-md"
            >
              Add to Gallery
            </button>
          </div>
        </form>
      )}

      {/* Grid of Gallery Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {galleryItems.map(item => (
          <div key={item.id} className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between">
            <div className="relative h-48 overflow-hidden bg-slate-900">
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-purple-600 text-white text-[10px] font-black uppercase">
                {item.category}
              </span>
              <span className="absolute bottom-2.5 right-3 text-[10px] text-slate-300 font-mono">
                {item.date}
              </span>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h4 className="text-sm font-black text-white line-clamp-1">{item.title}</h4>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">{item.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end gap-1.5">
                <button
                  onClick={() => setEditingItem({ ...item })}
                  className="p-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 cursor-pointer"
                  title="Edit Photo"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 cursor-pointer"
                  title="Delete Photo"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Gallery Photo Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg bg-slate-950 text-white rounded-3xl border border-slate-800 p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-purple-400" />
                <h3 className="text-sm font-black uppercase">Edit Gallery Photo</h3>
              </div>
              <button onClick={() => setEditingItem(null)} className="p-1 text-slate-400 hover:text-white cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-bold text-slate-400 block mb-1">Photo Title *</label>
                <input
                  type="text"
                  value={editingItem.title}
                  onChange={e => setEditingItem({ ...editingItem, title: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-400 block mb-1">Category</label>
                  <select
                    value={editingItem.category}
                    onChange={e => setEditingItem({ ...editingItem, category: e.target.value as any })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-purple-500"
                  >
                    <option value="toppers">🏆 Toppers & Awards</option>
                    <option value="classroom">📚 Classroom in Session</option>
                    <option value="lab">💻 Computer & Science Lab</option>
                    <option value="events">🎉 Events & Seminars</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-400 block mb-1">Event Date</label>
                  <input
                    type="text"
                    value={editingItem.date}
                    onChange={e => setEditingItem({ ...editingItem, date: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <ImageUploaderInput
                  label="Photo Image (Upload Local File, Paste URL or Google Drive Link)"
                  value={editingItem.imageUrl}
                  onChange={url => setEditingItem({ ...editingItem, imageUrl: url })}
                  placeholder="Upload file, paste image URL or Google Drive link..."
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-400 block mb-1">Description</label>
                <textarea
                  rows={2}
                  value={editingItem.description}
                  onChange={e => setEditingItem({ ...editingItem, description: e.target.value })}
                  className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                onClick={() => setEditingItem(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-bold text-slate-300 hover:bg-slate-700 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (editingItem) {
                    updateGalleryItem(editingItem);
                    setEditingItem(null);
                  }
                }}
                className="px-6 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md cursor-pointer"
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
