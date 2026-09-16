import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ShieldCheck, Lock, Mail, ArrowRight, UserCheck, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter both ID/Email and Password.");
      return;
    }

    // Save session
    const authData = {
      email,
      role,
      name: role === "admin" ? "Administrator" : role === "faculty" ? "Dr. R. K. Sharma" : "Aarav Sharma",
      token: "erp_token_" + Date.now()
    };
    localStorage.setItem("erp_user", JSON.stringify(authData));

    toast.success(`Welcome back, ${authData.name}!`);
    navigate("/dashboard");
  };

  const handleDemoLogin = (demoRole, demoEmail, demoPass) => {
    setEmail(demoEmail);
    setPassword(demoPass);
    setRole(demoRole);

    const authData = {
      email: demoEmail,
      role: demoRole,
      name: demoRole === "admin" ? "Administrator" : demoRole === "faculty" ? "Dr. R. K. Sharma" : "Aarav Sharma",
      token: "erp_token_" + Date.now()
    };
    localStorage.setItem("erp_user", JSON.stringify(authData));

    toast.success(`Logged in as ${authData.name} (${demoRole.toUpperCase()})`);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors mb-4">
            <ArrowLeft size={14} />
            <span>Back to Public Website</span>
          </Link>
          <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white mx-auto flex items-center justify-center font-black text-xl shadow-md">
            EV
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            EDUCA VEDA ERP Portal
          </h2>
          <p className="text-xs text-slate-500">
            Sign in to access Student, Admission, Fees &amp; Attendance Management
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 sm:px-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Username / Official Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@educaveda.com"
                  className="w-full text-xs px-3.5 py-2.5 pl-9 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
                <Mail size={15} className="absolute left-3 top-3 text-slate-400" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full text-xs px-3.5 py-2.5 pl-9 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
                <Lock size={15} className="absolute left-3 top-3 text-slate-400" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-sm transition-all"
            >
              <span>Sign In to ERP</span>
              <ArrowRight size={14} />
            </button>
          </form>

          {/* Quick Demo Logins */}
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 text-center">
              Instant 1-Click Demo Logins
            </p>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleDemoLogin("admin", "admin@educaveda.com", "admin123")}
                className="p-2 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-bold text-center transition-colors"
              >
                👨‍💼 Admin
              </button>
              <button
                type="button"
                onClick={() => handleDemoLogin("faculty", "faculty@educaveda.com", "faculty123")}
                className="p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold text-center transition-colors"
              >
                👨‍🏫 Faculty
              </button>
              <button
                type="button"
                onClick={() => handleDemoLogin("student", "student@educaveda.com", "student123")}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-bold text-center transition-colors"
              >
                👨‍🎓 Student
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
