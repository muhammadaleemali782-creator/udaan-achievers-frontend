import React, { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle, Send } from "lucide-react";
import LCCNavbar from "../components/LCCNavbar";
import LCCFooter from "../components/LCCFooter";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    course: "WCNA [ Wellness Consultancy in Naturopathy & Ayurveda ]",
    batchPreference: "Morning Batch",
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.mobile) {
      toast.error("Please provide both your Name and Mobile number.");
      return;
    }

    // Save lead in localStorage so it can be seen in admissions
    const leads = JSON.parse(localStorage.getItem("erp_admissions_leads") || "[]");
    leads.push({
      ...form,
      id: "LEAD-" + Date.now(),
      date: new Date().toISOString().split("T")[0]
    });
    localStorage.setItem("erp_admissions_leads", JSON.stringify(leads));

    setSubmitted(true);
    toast.success("Application request received! Our counsellor will call you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
      <LCCNavbar />

      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-bold">
            ADMISSIONS &amp; COUNSELLING
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Connect with an Academic Advisor
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Have questions regarding batch timings, fee structures, or curriculum details? Submit an inquiry and our counselling desk will guide you.
          </p>
        </div>
      </section>

      {/* Form & Info Grid */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Form */}
          <div className="md:col-span-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Inquiry Submitted Successfully!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to Educa Institute of Consultancy. Your inquiry has been registered. An academic counsellor will contact you at <span className="font-semibold text-slate-900">{form.mobile}</span> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Direct Admission Inquiry Form</h3>
                
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.mobile}
                      onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="student@example.com"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Select Program *</label>
                  <select
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white"
                  >
                    <option value="WCNA [ Wellness Consultancy in Naturopathy & Ayurveda ]">
                      WCNA — Wellness Consultancy in Naturopathy &amp; Ayurveda (₹25,000)
                    </option>
                    <option value="WCFM [ Wealth Consultancy in Finance Management ]">
                      WCFM — Wealth Consultancy in Finance Management (₹30,000)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Batch Schedule Preference</label>
                  <select
                    value={form.batchPreference}
                    onChange={(e) => setForm({ ...form, batchPreference: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white"
                  >
                    <option value="Morning Batch">Morning Batch (08:00 AM – 10:30 AM)</option>
                    <option value="Evening Batch">Evening Batch (05:30 PM – 08:00 PM)</option>
                    <option value="Weekend Batch">Weekend Batch (Saturday &amp; Sunday)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Any Specific Queries / Notes</label>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Tell us about your educational background or any questions..."
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm transition-all"
                >
                  <Send size={14} />
                  <span>Submit Admission Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
              <h4 className="font-bold text-sm text-slate-900">Institute Admissions Desk</h4>
              
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-indigo-600 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Admissions Helpline</span>
                    <span>+91 98765 43210 / +91 98123 45678</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-indigo-600 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Email Inquiries</span>
                    <span>admissions@educaveda.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-indigo-600 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Campus Location</span>
                    <span>Knowledge Park III, Institutional Area, Greater New Delhi, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-3">
              <h4 className="font-bold text-sm">Counseling Hours</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Monday to Saturday: 09:00 AM – 06:30 PM<br />
                Sunday: 10:00 AM – 02:00 PM (By Appointment)
              </p>
            </div>
          </div>
        </div>
      </section>

      <LCCFooter />
    </div>
  );
}
