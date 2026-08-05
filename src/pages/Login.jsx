import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { KeyRound, Lock, FileVideo, LogOut } from "lucide-react";
import api, { studentHeaders, adminHeaders } from "../api";
import { AdminPanel } from "./Admin";

function StudentPanel({ me, onLogout }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="font-mono text-xs text-tealDark">WELCOME BACK</p>
          <h1 className="font-display text-3xl md:text-4xl text-charcoal">{me.name}</h1>
          <p className="font-mono text-xs text-muted mt-1">ID: {me.studentId}</p>
        </div>
        <button onClick={onLogout} className="font-body text-sm flex items-center gap-1 px-4 py-2 rounded-full border border-paperDark text-charcoal">
          <LogOut size={14} /> Log out
        </button>
      </div>

      <p className="font-body text-sm font-medium mb-4 text-charcoal">Your courses</p>
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
                <FileVideo size={26} className="text-saffron" />
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
  const [mode, setMode] = useState("student"); // student | admin
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [needsName, setNeedsName] = useState(false);
  const [adminForm, setAdminForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

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

  const studentSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!studentId.trim()) { setError("Apna Student ID daalo"); return; }
    try {
      const res = await api.post("/auth/student/access", { studentId: studentId.trim(), name: name.trim() || undefined });
      localStorage.setItem("student_token", res.data.token);
      fetchMe();
    } catch (err) {
      const msg = err.response?.data?.error || "Kuch galat ho gaya";
      if (msg.toLowerCase().includes("name")) setNeedsName(true);
      setError(msg);
    }
  };

  const adminSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await api.post("/auth/admin/login", adminForm);
      localStorage.setItem("admin_token", res.data.token);
      setAdminAuthed(true);
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  const studentLogout = () => {
    localStorage.removeItem("student_token");
    setStudentMe(null);
    setStudentId("");
    setName("");
    setNeedsName(false);
  };

  const adminLogout = () => setAdminAuthed(false);

  // Already logged in as admin -> show admin panel directly
  if (adminAuthed) {
    return (
      <section className="bg-paper py-10 md:py-14 min-h-[70vh]">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <AdminPanel onLogout={adminLogout} />
        </div>
      </section>
    );
  }

  // Already logged in as student -> show student dashboard directly
  if (studentMe) {
    return (
      <section className="bg-paper py-12 md:py-16 min-h-[60vh]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <StudentPanel me={studentMe} onLogout={studentLogout} />
        </div>
      </section>
    );
  }

  // Not logged in -> show combined login form with a toggle
  return (
    <section className="bg-paper py-16 md:py-20 min-h-[70vh] flex items-center">
      <div className="max-w-sm mx-auto px-4 w-full">
        <div className="rounded-2xl p-8 bg-white border border-paperDark shadow-sm">
          <div className="flex gap-2 mb-6 p-1 rounded-full bg-paper">
            <button
              onClick={() => { setMode("student"); setError(""); }}
              className={`flex-1 font-body text-sm py-2 rounded-full ${mode === "student" ? "bg-ink text-white" : "text-charcoal"}`}
            >
              Student
            </button>
            <button
              onClick={() => { setMode("admin"); setError(""); }}
              className={`flex-1 font-body text-sm py-2 rounded-full ${mode === "admin" ? "bg-ink text-white" : "text-charcoal"}`}
            >
              Admin
            </button>
          </div>

          {mode === "student" ? (
            <>
              <div className="w-12 h-12 rounded-full bg-ink/10 flex items-center justify-center mx-auto mb-4">
                <KeyRound size={22} className="text-ink" />
              </div>
              <h2 className="font-display text-2xl mb-1 text-center text-charcoal">Apna Student ID daalo</h2>
              <p className="font-body text-xs text-center text-muted mb-6">Koi password nahi chahiye. Pehli baar ID daaloge to naya account ban jayega.</p>
              <form onSubmit={studentSubmit} className="flex flex-col gap-3">
                <input
                  required
                  placeholder="Student ID (jaise apna phone number)"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className="w-full font-body text-sm px-4 py-3 rounded-lg outline-none border border-paperDark focus:border-ink"
                />
                {needsName && (
                  <input
                    required
                    placeholder="Tumhara naam (naya ID hai)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full font-body text-sm px-4 py-3 rounded-lg outline-none border border-paperDark focus:border-ink"
                  />
                )}
                {error && <p className="font-body text-xs text-red-600">{error}</p>}
                <button type="submit" className="w-full font-body font-medium py-3 rounded-full bg-ink text-white">
                  Dashboard kholo
                </button>
              </form>
            </>
          ) : (
            <>
              <div className="w-12 h-12 rounded-full bg-ink/10 flex items-center justify-center mx-auto mb-4">
                <Lock size={22} className="text-ink" />
              </div>
              <h2 className="font-display text-2xl mb-6 text-center text-charcoal">Admin login</h2>
              <form onSubmit={adminSubmit} className="flex flex-col gap-3">
                <input required placeholder="Username" value={adminForm.username} onChange={(e) => setAdminForm({ ...adminForm, username: e.target.value })} className="w-full font-body text-sm px-4 py-3 rounded-lg outline-none border border-paperDark focus:border-ink" />
                <input required type="password" placeholder="Password" value={adminForm.password} onChange={(e) => setAdminForm({ ...adminForm, password: e.target.value })} className="w-full font-body text-sm px-4 py-3 rounded-lg outline-none border border-paperDark focus:border-ink" />
                {error && <p className="font-body text-xs text-red-600">{error}</p>}
                <button type="submit" className="w-full font-body font-medium py-3 rounded-full bg-ink text-white">Log in</button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
