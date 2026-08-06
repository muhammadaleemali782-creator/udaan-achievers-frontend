import React, { useEffect, useState } from "react";
import { Lock, LogOut, Plus, Pencil, Trash2, Save } from "lucide-react";
import api, { adminHeaders } from "../api";

function money(n) {
  return "₹" + (Number(n) || 0).toLocaleString("en-IN");
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="font-body text-xs font-medium block mb-1 text-charcoal">{label}</label>
      <input {...props} className="w-full font-body text-sm px-3 py-2 rounded-lg outline-none border border-paperDark" />
    </div>
  );
}

function EmptyRow({ text }) {
  return <p className="font-body text-sm text-center py-6 text-muted">{text}</p>;
}

/* ---------------- LOGIN GATE ---------------- */
function AdminGate({ onAuth }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [err, setErr] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      const res = await api.post("/auth/admin/login", form);
      localStorage.setItem("admin_token", res.data.token);
      onAuth();
    } catch (error) {
      setErr(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <section className="bg-paper py-20 min-h-[60vh] flex items-center">
      <div className="max-w-sm mx-auto px-4 w-full">
        <div className="rounded-xl p-8 bg-white border border-paperDark">
          <Lock size={24} className="mb-3 text-ink" />
          <h2 className="font-display text-2xl mb-4 text-charcoal">Admin login</h2>
          <form onSubmit={submit} className="flex flex-col gap-3">
            <input required placeholder="Username" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} className="w-full font-body text-sm px-4 py-2.5 rounded-lg outline-none border border-paperDark" />
            <input required type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full font-body text-sm px-4 py-2.5 rounded-lg outline-none border border-paperDark" />
            {err && <p className="font-body text-xs text-red-600">{err}</p>}
            <button type="submit" className="w-full font-body font-medium py-2.5 rounded-full bg-ink text-white">Log in</button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COURSES TAB ---------------- */
function AdminCourses() {
  const [courses, setCourses] = useState([]);
  const [editing, setEditing] = useState(null);
  const blank = { name: "", cat: "JEE", level: "", price: "", oldPrice: "", seats: "", rating: 4.5, students: "0", desc: "", lectures: [] };

  const load = () => api.get("/courses").then((r) => setCourses(Array.isArray(r.data) ? r.data : [])).catch(() => {});
  useEffect(() => { load(); }, []);

  const submit = async (e) => {
    e.preventDefault();
    const payload = { ...editing, lectures: Array.isArray(editing.lectures) ? editing.lectures : String(editing.lectures).split(",").map((s) => s.trim()).filter(Boolean) };
    if (editing._id) {
      await api.put(`/courses/${editing._id}`, payload, { headers: adminHeaders() });
    } else {
      await api.post("/courses", payload, { headers: adminHeaders() });
    }
    setEditing(null);
    load();
  };

  const remove = async (id) => {
    await api.delete(`/courses/${id}`, { headers: adminHeaders() });
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="font-body text-sm font-medium text-charcoal">Courses ({courses.length})</p>
        <button onClick={() => setEditing({ ...blank })} className="font-body text-xs font-medium flex items-center gap-1 px-3 py-2 rounded-full bg-ink text-white"><Plus size={14} /> Add course</button>
      </div>

      {editing && (
        <form onSubmit={submit} className="rounded-xl p-4 mb-5 grid sm:grid-cols-2 gap-3 bg-paper border border-paperDark">
          <Field label="Course name" required value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} />
          <div>
            <label className="font-body text-xs font-medium block mb-1 text-charcoal">Category</label>
            <select value={editing.cat} onChange={(e) => setEditing({ ...editing, cat: e.target.value })} className="w-full font-body text-sm px-3 py-2 rounded-lg outline-none border border-paperDark">
              <option>JEE</option><option>NEET</option><option>Foundation</option>
            </select>
          </div>
          <Field label="Level" value={editing.level} onChange={(e) => setEditing({ ...editing, level: e.target.value })} />
          <Field label="Seats text" value={editing.seats} onChange={(e) => setEditing({ ...editing, seats: e.target.value })} />
          <Field label="Price (₹)" type="number" required value={editing.price} onChange={(e) => setEditing({ ...editing, price: e.target.value })} />
          <Field label="Old price (₹)" type="number" value={editing.oldPrice} onChange={(e) => setEditing({ ...editing, oldPrice: e.target.value })} />
          <Field label="Rating" value={editing.rating} onChange={(e) => setEditing({ ...editing, rating: e.target.value })} />
          <Field label="Students count" value={editing.students} onChange={(e) => setEditing({ ...editing, students: e.target.value })} />
          <div className="sm:col-span-2">
            <label className="font-body text-xs font-medium block mb-1 text-charcoal">Description</label>
            <textarea required rows={2} value={editing.desc} onChange={(e) => setEditing({ ...editing, desc: e.target.value })} className="w-full font-body text-sm px-3 py-2 rounded-lg outline-none border border-paperDark" />
          </div>
          <div className="sm:col-span-2">
            <label className="font-body text-xs font-medium block mb-1 text-charcoal">Lecture titles (comma separated)</label>
            <input value={Array.isArray(editing.lectures) ? editing.lectures.join(", ") : editing.lectures} onChange={(e) => setEditing({ ...editing, lectures: e.target.value })} className="w-full font-body text-sm px-3 py-2 rounded-lg outline-none border border-paperDark" />
          </div>
          <div className="sm:col-span-2 flex gap-2 mt-1">
            <button type="submit" className="font-body text-sm font-medium flex items-center gap-1 px-4 py-2 rounded-full bg-teal text-white"><Save size={14} /> Save</button>
            <button type="button" onClick={() => setEditing(null)} className="font-body text-sm px-4 py-2 rounded-full border border-paperDark text-charcoal">Cancel</button>
          </div>
        </form>
      )}

      <div className="flex flex-col gap-2">
        {courses.map((c) => (
          <div key={c._id} className="flex items-center justify-between rounded-lg px-4 py-3 bg-white border border-paperDark">
            <div>
              <p className="font-body text-sm font-medium text-charcoal">{c.name} <span className="font-mono text-xs ml-1 text-muted">{c.cat}</span></p>
              <p className="font-mono text-xs mt-0.5 text-saffronDark">{money(c.price)}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setEditing({ ...c })} className="p-2 rounded-full bg-paper"><Pencil size={14} className="text-charcoal" /></button>
              <button onClick={() => remove(c._id)} className="p-2 rounded-full bg-red-100"><Trash2 size={14} className="text-red-600" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- BATCHES TAB ---------------- */
function AdminBatches() {
  const [batches, setBatches] = useState([]);
  const [editing, setEditing] = useState(null);
  const blank = { time: "", subject: "", topic: "", teacher: "", tag: "JEE" };

  const load = () => api.get("/batches").then((r) => setBatches(Array.isArray(r.data) ? r.data : [])).catch(() => {});
  useEffect(() => { load(); }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (editing._id) await api.put(`/batches/${editing._id}`, editing, { headers: adminHeaders() });
    else await api.post("/batches", editing, { headers: adminHeaders() });
    setEditing(null);
    load();
  };

  const remove = async (id) => { await api.delete(`/batches/${id}`, { headers: adminHeaders() }); load(); };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="font-body text-sm font-medium text-charcoal">Live timetable ({batches.length})</p>
        <button onClick={() => setEditing({ ...blank })} className="font-body text-xs font-medium flex items-center gap-1 px-3 py-2 rounded-full bg-ink text-white"><Plus size={14} /> Add slot</button>
      </div>
      {editing && (
        <form onSubmit={submit} className="rounded-xl p-4 mb-5 grid sm:grid-cols-2 gap-3 bg-paper border border-paperDark">
          <Field label="Time (e.g. 07:00 AM)" required value={editing.time} onChange={(e) => setEditing({ ...editing, time: e.target.value })} />
          <Field label="Subject" required value={editing.subject} onChange={(e) => setEditing({ ...editing, subject: e.target.value })} />
          <Field label="Topic" value={editing.topic} onChange={(e) => setEditing({ ...editing, topic: e.target.value })} />
          <Field label="Teacher" value={editing.teacher} onChange={(e) => setEditing({ ...editing, teacher: e.target.value })} />
          <div>
            <label className="font-body text-xs font-medium block mb-1 text-charcoal">Tag</label>
            <select value={editing.tag} onChange={(e) => setEditing({ ...editing, tag: e.target.value })} className="w-full font-body text-sm px-3 py-2 rounded-lg outline-none border border-paperDark">
              <option>JEE</option><option>NEET</option><option>Foundation</option>
            </select>
          </div>
          <div className="sm:col-span-2 flex gap-2 mt-1">
            <button type="submit" className="font-body text-sm font-medium flex items-center gap-1 px-4 py-2 rounded-full bg-teal text-white"><Save size={14} /> Save</button>
            <button type="button" onClick={() => setEditing(null)} className="font-body text-sm px-4 py-2 rounded-full border border-paperDark text-charcoal">Cancel</button>
          </div>
        </form>
      )}
      <div className="flex flex-col gap-2">
        {batches.map((b) => (
          <div key={b._id} className="flex items-center justify-between rounded-lg px-4 py-3 bg-white border border-paperDark">
            <p className="font-body text-sm text-charcoal"><span className="font-mono text-xs text-saffronDark">{b.time}</span> — {b.subject}: {b.topic} ({b.teacher})</p>
            <div className="flex gap-2">
              <button onClick={() => setEditing({ ...b })} className="p-2 rounded-full bg-paper"><Pencil size={14} className="text-charcoal" /></button>
              <button onClick={() => remove(b._id)} className="p-2 rounded-full bg-red-100"><Trash2 size={14} className="text-red-600" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- TESTIMONIALS TAB ---------------- */
function AdminTestimonials() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const blank = { name: "", exam: "", text: "" };

  const load = () => api.get("/testimonials").then((r) => setItems(Array.isArray(r.data) ? r.data : [])).catch(() => {});
  useEffect(() => { load(); }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (editing._id) await api.put(`/testimonials/${editing._id}`, editing, { headers: adminHeaders() });
    else await api.post("/testimonials", editing, { headers: adminHeaders() });
    setEditing(null);
    load();
  };
  const remove = async (id) => { await api.delete(`/testimonials/${id}`, { headers: adminHeaders() }); load(); };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="font-body text-sm font-medium text-charcoal">Testimonials ({items.length})</p>
        <button onClick={() => setEditing({ ...blank })} className="font-body text-xs font-medium flex items-center gap-1 px-3 py-2 rounded-full bg-ink text-white"><Plus size={14} /> Add</button>
      </div>
      {editing && (
        <form onSubmit={submit} className="rounded-xl p-4 mb-5 grid gap-3 bg-paper border border-paperDark">
          <Field label="Student name" required value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} />
          <Field label="Exam / result" required value={editing.exam} onChange={(e) => setEditing({ ...editing, exam: e.target.value })} />
          <div>
            <label className="font-body text-xs font-medium block mb-1 text-charcoal">Quote</label>
            <textarea required rows={2} value={editing.text} onChange={(e) => setEditing({ ...editing, text: e.target.value })} className="w-full font-body text-sm px-3 py-2 rounded-lg outline-none border border-paperDark" />
          </div>
          <div className="flex gap-2">
            <button type="submit" className="font-body text-sm font-medium flex items-center gap-1 px-4 py-2 rounded-full bg-teal text-white"><Save size={14} /> Save</button>
            <button type="button" onClick={() => setEditing(null)} className="font-body text-sm px-4 py-2 rounded-full border border-paperDark text-charcoal">Cancel</button>
          </div>
        </form>
      )}
      <div className="flex flex-col gap-2">
        {items.map((t) => (
          <div key={t._id} className="flex items-center justify-between rounded-lg px-4 py-3 bg-white border border-paperDark">
            <p className="font-body text-sm text-charcoal">{t.name} — <span className="text-muted">{t.exam}</span></p>
            <div className="flex gap-2">
              <button onClick={() => setEditing({ ...t })} className="p-2 rounded-full bg-paper"><Pencil size={14} className="text-charcoal" /></button>
              <button onClick={() => remove(t._id)} className="p-2 rounded-full bg-red-100"><Trash2 size={14} className="text-red-600" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- STATS + CONTACT TAB ---------------- */
function AdminBanners() {
  const [banners, setBanners] = useState([]);
  const [editing, setEditing] = useState(null);
  const blank = { image: "", title: "", link: "/courses", order: 0 };

  const load = () => api.get("/banners").then((r) => setBanners(Array.isArray(r.data) ? r.data : [])).catch(() => {});
  useEffect(() => { load(); }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (editing._id) await api.put(`/banners/${editing._id}`, editing, { headers: adminHeaders() });
    else await api.post("/banners", editing, { headers: adminHeaders() });
    setEditing(null);
    load();
  };
  const remove = async (id) => { await api.delete(`/banners/${id}`, { headers: adminHeaders() }); load(); };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="font-body text-sm font-medium text-charcoal">Homepage banner slider ({banners.length})</p>
        <button onClick={() => setEditing({ ...blank })} className="font-body text-xs font-medium flex items-center gap-1 px-3 py-2 rounded-full bg-ink text-white"><Plus size={14} /> Add banner</button>
      </div>
      <p className="font-body text-xs text-muted mb-4">Image ka URL daalo (koi bhi image-hosting site jaise imgur, ya apni website ki koi image link).</p>
      {editing && (
        <form onSubmit={submit} className="rounded-xl p-4 mb-5 grid gap-3 bg-paper border border-paperDark">
          <Field label="Image URL" required value={editing.image} onChange={(e) => setEditing({ ...editing, image: e.target.value })} placeholder="https://..." />
          <Field label="Title (banner ke neeche dikhega, optional)" value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} />
          <Field label="Click karne pe kahan jaaye (link)" value={editing.link} onChange={(e) => setEditing({ ...editing, link: e.target.value })} placeholder="/courses" />
          <Field label="Order (chhota number pehle dikhega)" type="number" value={editing.order} onChange={(e) => setEditing({ ...editing, order: e.target.value })} />
          <div className="flex gap-2 mt-1">
            <button type="submit" className="font-body text-sm font-medium flex items-center gap-1 px-4 py-2 rounded-full bg-teal text-white"><Save size={14} /> Save</button>
            <button type="button" onClick={() => setEditing(null)} className="font-body text-sm px-4 py-2 rounded-full border border-paperDark text-charcoal">Cancel</button>
          </div>
        </form>
      )}
      <div className="flex flex-col gap-2">
        {banners.length === 0 && <EmptyRow text="Koi banner nahi hai abhi." />}
        {banners.map((b) => (
          <div key={b._id} className="flex items-center justify-between rounded-lg px-4 py-3 bg-white border border-paperDark">
            <div className="flex items-center gap-3">
              <img src={b.image} alt="" className="w-16 h-10 object-cover rounded" />
              <p className="font-body text-sm text-charcoal">{b.title || "(no title)"}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setEditing({ ...b })} className="p-2 rounded-full bg-paper"><Pencil size={14} className="text-charcoal" /></button>
              <button onClick={() => remove(b._id)} className="p-2 rounded-full bg-red-100"><Trash2 size={14} className="text-red-600" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminSite() {
  const [stats, setStats] = useState([]);
  const [contact, setContact] = useState({ phone: "", email: "", address: "" });
  const [editingStat, setEditingStat] = useState(null);

  const load = () => {
    api.get("/stats").then((r) => setStats(Array.isArray(r.data) ? r.data : [])).catch(() => {});
    api.get("/site-info").then((r) => setContact(r.data)).catch(() => {});
  };
  useEffect(() => { load(); }, []);

  const saveStat = async (e) => {
    e.preventDefault();
    if (editingStat._id) await api.put(`/stats/${editingStat._id}`, editingStat, { headers: adminHeaders() });
    else await api.post("/stats", editingStat, { headers: adminHeaders() });
    setEditingStat(null);
    load();
  };
  const removeStat = async (id) => { await api.delete(`/stats/${id}`, { headers: adminHeaders() }); load(); };

  const saveContact = async () => {
    await api.put("/site-info", contact, { headers: adminHeaders() });
    load();
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="flex items-center justify-between mb-4">
          <p className="font-body text-sm font-medium text-charcoal">Homepage stats ({stats.length})</p>
          <button onClick={() => setEditingStat({ value: "", label: "" })} className="font-body text-xs font-medium flex items-center gap-1 px-3 py-2 rounded-full bg-ink text-white"><Plus size={14} /> Add stat</button>
        </div>
        {editingStat && (
          <form onSubmit={saveStat} className="rounded-lg p-3 mb-3 flex gap-2 bg-paper border border-paperDark">
            <input required placeholder="Value e.g. 2.4L+" value={editingStat.value} onChange={(e) => setEditingStat({ ...editingStat, value: e.target.value })} className="w-32 font-mono text-sm px-2 py-1 rounded outline-none border border-paperDark" />
            <input required placeholder="Label" value={editingStat.label} onChange={(e) => setEditingStat({ ...editingStat, label: e.target.value })} className="flex-1 font-body text-sm px-2 py-1 rounded outline-none border border-paperDark" />
            <button type="submit" className="font-body text-xs px-3 rounded-full bg-teal text-white">Save</button>
            <button type="button" onClick={() => setEditingStat(null)} className="font-body text-xs px-3 rounded-full border border-paperDark">Cancel</button>
          </form>
        )}
        <div className="grid sm:grid-cols-2 gap-3">
          {stats.map((s) => (
            <div key={s._id} className="rounded-lg p-3 flex items-center justify-between bg-white border border-paperDark">
              <p className="font-body text-sm text-charcoal"><span className="font-mono text-saffronDark">{s.value}</span> — {s.label}</p>
              <div className="flex gap-1">
                <button onClick={() => setEditingStat({ ...s })} className="p-1.5 rounded-full bg-paper"><Pencil size={13} className="text-charcoal" /></button>
                <button onClick={() => removeStat(s._id)} className="p-1.5 rounded-full bg-red-100"><Trash2 size={13} className="text-red-600" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="font-body text-sm font-medium mb-4 text-charcoal">Contact details</p>
        <div className="grid sm:grid-cols-2 gap-3 mb-3">
          <Field label="Phone" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
          <Field label="Email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
          <div className="sm:col-span-2">
            <Field label="Address" value={contact.address} onChange={(e) => setContact({ ...contact, address: e.target.value })} />
          </div>
        </div>
        <button onClick={saveContact} className="font-body text-sm font-medium flex items-center gap-1 px-4 py-2 rounded-full bg-teal text-white"><Save size={14} /> Save contact</button>
      </div>

      <div>
        <p className="font-body text-sm font-medium mb-1 text-charcoal">Homepage hero section</p>
        <p className="font-body text-xs mb-4 text-muted">Ye sab homepage ke sabse upar wale banner me dikhta hai.</p>
        <div className="grid gap-3 mb-3">
          <Field label="Badge text (chhota tag upar)" value={contact.heroBadge || ""} onChange={(e) => setContact({ ...contact, heroBadge: e.target.value })} />
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="Title line 1" value={contact.heroTitleLine1 || ""} onChange={(e) => setContact({ ...contact, heroTitleLine1: e.target.value })} />
            <Field label="Title line 2" value={contact.heroTitleLine2 || ""} onChange={(e) => setContact({ ...contact, heroTitleLine2: e.target.value })} />
            <Field label="Highlighted word (green)" value={contact.heroTitleHighlight || ""} onChange={(e) => setContact({ ...contact, heroTitleHighlight: e.target.value })} />
            <Field label="Title line 3" value={contact.heroTitleLine3 || ""} onChange={(e) => setContact({ ...contact, heroTitleLine3: e.target.value })} />
          </div>
          <div>
            <label className="font-body text-xs font-medium block mb-1 text-charcoal">Subtitle</label>
            <textarea rows={2} value={contact.heroSubtitle || ""} onChange={(e) => setContact({ ...contact, heroSubtitle: e.target.value })} className="w-full font-body text-sm px-3 py-2 rounded-lg outline-none border border-paperDark" />
          </div>
          <Field label="Background image URL (khali chhod do to plain color rahega)" value={contact.heroImage || ""} onChange={(e) => setContact({ ...contact, heroImage: e.target.value })} placeholder="https://..." />
        </div>
        <button onClick={saveContact} className="font-body text-sm font-medium flex items-center gap-1 px-4 py-2 rounded-full bg-teal text-white"><Save size={14} /> Save hero section</button>
      </div>
    </div>
  );
}

/* ---------------- MAIN ADMIN PANEL (used inside Login.jsx after admin auth) ---------------- */
export function AdminPanel({ onLogout }) {
  const [tab, setTab] = useState("courses");

  const tabs = [
    { id: "courses", label: "Courses" },
    { id: "batches", label: "Timetable" },
    { id: "testimonials", label: "Testimonials" },
    { id: "banners", label: "Banners" },
    { id: "site", label: "Hero, Stats & Contact" },
  ];

  const logout = () => {
    localStorage.removeItem("admin_token");
    onLogout();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="font-mono text-xs text-tealDark">ADMIN PANEL</p>
          <h1 className="font-display text-3xl text-charcoal">Manage your site</h1>
        </div>
        <button onClick={logout} className="font-body text-sm flex items-center gap-1 px-4 py-2 rounded-full border border-paperDark text-charcoal">
          <LogOut size={14} /> Log out
        </button>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto">
        {tabs.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} className={`font-body text-sm px-4 py-2 rounded-full flex-shrink-0 border border-paperDark ${tab === t.id ? "bg-ink text-white" : "bg-white text-charcoal"}`}>
            {t.label}
          </button>
        ))}
      </div>

      <div className="rounded-xl p-5 md:p-6 bg-white border border-paperDark">
        {tab === "courses" && <AdminCourses />}
        {tab === "batches" && <AdminBatches />}
        {tab === "testimonials" && <AdminTestimonials />}
        {tab === "banners" && <AdminBanners />}
        {tab === "site" && <AdminSite />}
      </div>
    </div>
  );
}
