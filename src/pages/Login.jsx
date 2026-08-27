import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { KeyRound, FileVideo, LogOut, Mail } from "lucide-react";
import api, { studentHeaders } from "../api";
import { AdminPanel } from "./Admin";
import LoadingButton from "../components/LoadingButton";

function StudentPanel({ me, onLogout }) {
  const navigate = useNavigate();
  const officialMail = me.educaEmail || `${me.studentId}@educaveda.com`;

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <p className="font-mono text-xs text-tealDark">WELCOME BACK</p>
          <h1 className="font-display text-3xl md:text-4xl text-charcoal">{me.name}</h1>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <span className="font-mono text-xs text-muted">ID: {me.studentId}</span>
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-tealDark/10 text-tealDark font-semibold">
              📬 {officialMail}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a 
            href="https://messages-frontend-brown.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-body text-xs font-semibold flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink text-white shadow-sm hover:opacity-90"
          >
            📬 Open Mailbox ↗
          </a>
          <button onClick={onLogout} className="font-body text-xs flex items-center gap-1 px-4 py-2 rounded-full border border-paperDark text-charcoal hover:bg-paperDark">
            <LogOut size={13} /> Log out
          </button>
        </div>
      </div>

      <p className="font-body text-sm font-medium mb-4 text-charcoal">Your enrolled courses</p>
      {!me.enrolledCourses || me.enrolledCourses.length === 0 ? (
        <div className="rounded-xl p-8 text-center bg-white border border-paperDark">
          <p className="font-body text-sm text-muted mb-4">Tumne abhi tak koi course enroll nahi kiya.</p>
          <button onClick={() => navigate("/courses")} className="font-body text-sm font-medium px-5 py-2.5 rounded-full bg-ink text-white">Courses dekho</button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {me.enrolledCourses.map((c) => (
            <div key={c._id} className="rounded-xl overflow-hidden bg-white border border-paperDark">
              <div className="h-24 flex items-center justify-center bg-ink">
                <FileVideo size={26} className="text-emerald-400" />
              </div>
              <div className="p-4">
                <p className="font-display text-sm mb-3 text-charcoal">{c.name}</p>
                <button onClick={() => navigate(`/lecture/${c._id}`)} className="font-body text-xs font-medium px-4 py-2 rounded-full w-full bg-ink text-white">
                  Resume lecture
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Login() {
  const [view, setView] = useState("login");
  const [form, setForm] = useState({ studentId: "", password: "", email: "", name: "" });
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(false);

  const [studentMe, setStudentMe] = useState(null);
  const [adminAuthed, setAdminAuthed] = useState(!!localStorage.getItem("admin_token"));

  useEffect(() => {
    if (localStorage.getItem("student_token")) fetchMe();
  }, []);

  const fetchMe = async () => {
    try {
      const res = await api.get("/enrollments/me", { headers: studentHeaders() });
      setStudentMe(res.data);
    } catch {
      localStorage.removeItem("student_token");
    }
  };

  const login = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await api.post("/auth/login", { studentId: form.studentId, password: form.password });
      if (res.data.role === "admin") {
        localStorage.setItem("admin_token", res.data.token);
        setAdminAuthed(true);
      } else {
        localStorage.setItem("student_token", res.data.token);
        fetchMe();
      }
    } catch (err) {
      setError(err.response?.data?.error || "Galat ID ya password");
    } finally {
      setLoading(false);
    }
  };

  const signup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await api.post("/auth/signup", form);
      localStorage.setItem("student_token", res.data.token);
      fetchMe();
    } catch (err) {
      setError(err.response?.data?.error || "Account nahi ban paya, dubara try karo");
    } finally {
      setLoading(false);
    }
  };

  const forgot = async (e) => {
    e.preventDefault();
    setError("");
    setNotice("");
    setLoading(true);
    try {
      await api.post("/auth/forgot-password", { email: form.email });
      setNotice("Password reset link bhej diya gaya hai. Apna email ya EDUCA Mailbox check karo.");
    } catch (err) {
      setError(err.response?.data?.error || "Kuch galat ho gaya");
    } finally {
      setLoading(false);
    }
  };

  const studentLogout = () => {
    localStorage.removeItem("student_token");
    setStudentMe(null);
    setForm({ studentId: "", password: "", email: "", name: "" });
  };

  const adminLogout = () => {
    localStorage.removeItem("admin_token");
    setAdminAuthed(false);
  };

  if (adminAuthed) {
    return (
      <section className="bg-paper py-10 md:py-14 min-h-[70vh]">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <AdminPanel onLogout={adminLogout} />
        </div>
      </section>
    );
  }

  if (studentMe) {
    return (
      <section className="bg-paper py-12 md:py-16 min-h-[60vh]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <StudentPanel me={studentMe} onLogout={studentLogout} />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-paper py-16 md:py-20 min-h-[70vh] flex items-center">
      <div className="max-w-sm mx-auto px-4 w-full">
        <div className="rounded-2xl p-8 bg-white border border-paperDark shadow-sm">
          <div className="w-12 h-12 rounded-full bg-ink/10 flex items-center justify-center mx-auto mb-4">
            {view === "forgot" ? <Mail size={22} className="text-ink" /> : <KeyRound size={22} className="text-ink" />}
          </div>
          <h2 className="font-display text-2xl mb-6 text-center text-charcoal">
            {view === "login" ? "Log in" : view === "signup" ? "Naya account banao" : "Password reset karo"}
          </h2>

          {view === "login" && (
            <form onSubmit={login} className="flex flex-col gap-3">
              <input required placeholder="ID / Username" value={form.studentId} onChange={(e) => setForm({ ...form, studentId: e.target.value })} className="w-full font-body text-sm px-4 py-3 rounded-lg outline-none border border-paperDark focus:border-ink" />
              <input required type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full font-body text-sm px-4 py-3 rounded-lg outline-none border border-paperDark focus:border-ink" />
              {error && <p className="font-body text-xs text-red-600">{error}</p>}
              <LoadingButton type="submit" loading={loading} className="w-full font-body font-medium py-3 rounded-full bg-ink text-white">Log in</LoadingButton>
              <div className="flex justify-between mt-2">
                <button type="button" onClick={() => { setView("signup"); setError(""); }} className="font-body text-xs text-tealDark">Naya ID banao</button>
                <button type="button" onClick={() => { setView("forgot"); setError(""); }} className="font-body text-xs text-muted">Password bhool gaye?</button>
              </div>
            </form>
          )}

          {view === "signup" && (
            <form onSubmit={signup} className="flex flex-col gap-3">
              <input required placeholder="Naam" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full font-body text-sm px-4 py-3 rounded-lg outline-none border border-paperDark focus:border-ink" />
              <input required placeholder="Naya ID chuno (eg: STU101)" value={form.studentId} onChange={(e) => setForm({ ...form, studentId: e.target.value })} className="w-full font-body text-sm px-4 py-3 rounded-lg outline-none border border-paperDark focus:border-ink" />
              <input type="email" placeholder="Recovery Email (Optional)" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full font-body text-sm px-4 py-3 rounded-lg outline-none border border-paperDark focus:border-ink" />
              <input required type="password" placeholder="Password banao" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full font-body text-sm px-4 py-3 rounded-lg outline-none border border-paperDark focus:border-ink" />
              {error && <p className="font-body text-xs text-red-600">{error}</p>}
              <LoadingButton type="submit" loading={loading} className="w-full font-body font-medium py-3 rounded-full bg-ink text-white">Account banao</LoadingButton>
              <button type="button" onClick={() => { setView("login"); setError(""); }} className="font-body text-xs text-tealDark mt-2 text-center">Already ID hai? Log in karo</button>
            </form>
          )}

          {view === "forgot" && (
            <form onSubmit={forgot} className="flex flex-col gap-3">
              <p className="font-body text-xs text-center text-muted mb-1">Apni registered email daalo, hum reset link bhej denge.</p>
              <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full font-body text-sm px-4 py-3 rounded-lg outline-none border border-paperDark focus:border-ink" />
              {error && <p className="font-body text-xs text-red-600">{error}</p>}
              {notice && <p className="font-body text-xs text-tealDark">{notice}</p>}
              <LoadingButton type="submit" loading={loading} className="w-full font-body font-medium py-3 rounded-full bg-ink text-white">Reset link bhejo</LoadingButton>
              <button type="button" onClick={() => { setView("login"); setError(""); setNotice(""); }} className="font-body text-xs text-tealDark mt-2 text-center">Wapas login pe jao</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
