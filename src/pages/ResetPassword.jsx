import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Lock, CheckCircle2 } from "lucide-react";
import api from "../api";
import LoadingButton from "../components/LoadingButton";

export default function ResetPassword() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const token = params.get("token") || "";

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirm) { setError("Dono password same nahi hain"); return; }
    if (password.length < 4) { setError("Password thoda lamba rakho"); return; }
    setLoading(true);
    try {
      await api.post("/auth/reset-password", { token, newPassword: password });
      setDone(true);
    } catch (err) {
      setError(err.response?.data?.error || "Kuch galat ho gaya");
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <section className="bg-paper py-20 min-h-[60vh] flex items-center justify-center">
        <p className="font-body text-sm text-muted">Ye link sahi nahi hai. Login page se dubara "Password bhool gaye" try karo.</p>
      </section>
    );
  }

  return (
    <section className="bg-paper py-16 md:py-20 min-h-[70vh] flex items-center">
      <div className="max-w-sm mx-auto px-4 w-full">
        <div className="rounded-2xl p-8 bg-white border border-paperDark shadow-sm">
          {done ? (
            <div className="text-center">
              <CheckCircle2 size={32} className="mx-auto mb-3 text-tealDark" />
              <h2 className="font-display text-2xl mb-2 text-charcoal">Password badal gaya</h2>
              <p className="font-body text-sm text-muted mb-5">Ab naye password se login kar sakte ho.</p>
              <button onClick={() => navigate("/login")} className="font-body font-medium px-6 py-2.5 rounded-full bg-ink text-white">Login karo</button>
            </div>
          ) : (
            <>
              <div className="w-12 h-12 rounded-full bg-ink/10 flex items-center justify-center mx-auto mb-4">
                <Lock size={22} className="text-ink" />
              </div>
              <h2 className="font-display text-2xl mb-6 text-center text-charcoal">Naya password banao</h2>
              <form onSubmit={submit} className="flex flex-col gap-3">
                <input required type="password" placeholder="Naya password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full font-body text-sm px-4 py-3 rounded-lg outline-none border border-paperDark focus:border-ink" />
                <input required type="password" placeholder="Naya password dubara" value={confirm} onChange={(e) => setConfirm(e.target.value)} className="w-full font-body text-sm px-4 py-3 rounded-lg outline-none border border-paperDark focus:border-ink" />
                {error && <p className="font-body text-xs text-red-600">{error}</p>}
                <LoadingButton type="submit" loading={loading} className="w-full font-body font-medium py-3 rounded-full bg-ink text-white">Password badlo</LoadingButton>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
