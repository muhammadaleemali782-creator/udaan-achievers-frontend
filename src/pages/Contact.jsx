import React, { useEffect, useState } from "react";
import { CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import api from "../api";

export default function Contact() {
  const [courses, setCourses] = useState([]);
  const [contact, setContact] = useState({ phone: "", email: "", address: "" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "" });

  useEffect(() => {
    api.get("/courses").then((r) => {
      setCourses(r.data);
      if (r.data[0]) setForm((f) => ({ ...f, course: r.data[0].name }));
    }).catch(() => {});
    api.get("/site-info").then((r) => setContact(r.data)).catch(() => {});
  }, []);

  // NOTE: this demo form doesn't send anywhere yet — wire it to a
  // "leads" endpoint on your backend (or an email service) when ready.
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <>
      <section className="bg-ink pt-14 pb-16 md:pt-20 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <span className="font-mono text-xs font-medium px-2 py-1 rounded bg-saffron/10 text-saffron">We reply within a day</span>
          <h1 className="font-display text-white text-4xl md:text-5xl mt-5">Talk to an academic counsellor</h1>
        </div>
      </section>
      <section className="bg-paper py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8 grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 rounded-xl p-6 md:p-8 bg-white border border-paperDark">
            {sent ? (
              <div className="py-10 text-center">
                <CheckCircle2 size={36} className="mx-auto mb-4 text-tealDark" />
                <h3 className="font-display text-2xl mb-2 text-charcoal">Request received</h3>
                <p className="font-body text-sm text-muted">A counsellor will call you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-4">
                <div>
                  <label className="font-body text-xs font-medium block mb-1.5 text-charcoal">Full name</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full font-body text-sm px-4 py-2.5 rounded-lg outline-none border border-paperDark bg-paper" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-medium block mb-1.5 text-charcoal">Phone number</label>
                    <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="98765 43210" className="w-full font-body text-sm px-4 py-2.5 rounded-lg outline-none border border-paperDark bg-paper" />
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium block mb-1.5 text-charcoal">Email</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className="w-full font-body text-sm px-4 py-2.5 rounded-lg outline-none border border-paperDark bg-paper" />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs font-medium block mb-1.5 text-charcoal">Interested course</label>
                  <select value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })} className="w-full font-body text-sm px-4 py-2.5 rounded-lg outline-none border border-paperDark bg-paper">
                    {courses.map((c) => <option key={c._id}>{c.name}</option>)}
                  </select>
                </div>
                <button type="submit" className="font-body font-medium py-3 rounded-full mt-2 bg-ink text-white">Request a callback</button>
              </form>
            )}
          </div>
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="rounded-xl p-6 bg-ink">
              <Phone size={18} className="text-saffron" />
              <p className="font-body text-white text-sm font-medium mt-3">Call us</p>
              <p className="font-mono text-white/70 text-sm mt-1">{contact.phone}</p>
            </div>
            <div className="rounded-xl p-6 bg-white border border-paperDark">
              <Mail size={18} className="text-tealDark" />
              <p className="font-body text-sm font-medium mt-3 text-charcoal">Email us</p>
              <p className="font-body text-sm mt-1 text-muted">{contact.email}</p>
            </div>
            <div className="rounded-xl p-6 bg-white border border-paperDark">
              <MapPin size={18} className="text-saffronDark" />
              <p className="font-body text-sm font-medium mt-3 text-charcoal">Visit our centre</p>
              <p className="font-body text-sm mt-1 text-muted">{contact.address}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
