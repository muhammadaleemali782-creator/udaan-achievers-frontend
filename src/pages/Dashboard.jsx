import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard, LogOut, FileVideo } from "lucide-react";
import api, { studentHeaders } from "../api";

export default function Dashboard() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login"); // login | signup
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [me, setMe] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("student_token")) fetchMe();
  }, []);

  const fetchMe = async () => {
    try {
      const res = await api.get("/enrollments/me", { headers: studentHeaders() });
      setMe(res.data);
    } catch {
      localStorage.removeItem("student_token");
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const path = mode === "login" ? "/auth/student/login" : "/auth/student/signup";
      const payload = mode === "login" ? { email: form.email, password: form.password } : form;
      const res = await api.post(path, payload);
      localStorage.setItem("student_token", res.data.token);
      fetchMe();
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  const logout = () => {
    localStorage.removeItem("student_token");
    setMe(null);
  };

  if (!me) {
    return (
      <section className="bg-paper py-20 min-h-[60vh] flex items-center">
        <div className="max-w-sm mx-auto px-4 w-full">
          <div className="rounded-xl p-8 bg-white border border-paperDark">
            <LayoutDashboard size={28} className="mx-auto mb-3 text-tealDark" />
            <h2 className="font-display text-2xl mb-1 text-center text-charcoal">{mode === "login" ? "Student login" : "Create account"}</h2>
            <form onSubmit={submit} className="flex flex-col gap-3 mt-5">
              {mode === "signup" && (
                <input required placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full font-body text-sm px-4 py-2.5 rounded-lg outline-none border border-paperDark" />
              )}
              <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full font-body text-sm px-4 py-2.5 rounded-lg outline-none border border-paperDark" />
              <input required type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full font-body text-sm px-4 py-2.5 rounded-lg outline-none border border-paperDark" />
              {error && <p className="font-body text-xs text-red-600">{error}</p>}
              <button type="submit" className="w-full font-body font-medium py-2.5 rounded-full bg-ink text-white">
                {mode === "login" ? "Log in" : "Sign up"}
              </button>
            </form>
            <button onClick={() => setMode(mode === "login" ? "signup" : "login")} className="font-body text-xs mt-4 w-full text-center text-tealDark">
              {mode === "login" ? "New here? Create an account" : "Already have an account? Log in"}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-paper py-12 md:py-16 min-h-[60vh]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="font-mono text-xs text-tealDark">WELCOME BACK</p>
            <h1 className="font-display text-3xl md:text-4xl text-charcoal">{me.name}</h1>
          </div>
          <button onClick={logout} className="font-body text-sm flex items-center gap-1 px-4 py-2 rounded-full border border-paperDark text-charcoal">
            <LogOut size={14} /> Log out
          </button>
        </div>

        <p className="font-body text-sm font-medium mb-4 text-charcoal">Your courses</p>
        {me.enrolledCourses.length === 0 ? (
          <div className="rounded-xl p-8 text-center bg-white border border-paperDark">
            <p className="font-body text-sm text-muted mb-4">You haven't enrolled in any course yet.</p>
            <button onClick={() => navigate("/courses")} className="font-body text-sm font-medium px-5 py-2.5 rounded-full bg-ink text-white">Browse courses</button>
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
    </section>
  );
}
