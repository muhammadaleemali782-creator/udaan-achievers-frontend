import React from "react";

export default function Privacy() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-black tracking-[0.3em] text-brand-teal uppercase block mb-4">Legal</span>
        <h1 className="text-4xl md:text-5xl font-black text-brand-navy tracking-tight mb-8">Privacy Policy</h1>
        <div className="text-brand-slate leading-relaxed space-y-4 text-lg">
          <p>Udaan Achievers collects only the information needed to run your account — your name, ID, and email — used solely to manage enrollments, send password-reset emails, and provide academic updates.</p>
          <p>We never sell or share your personal data with third parties. Your data is stored securely and you can request its deletion at any time by writing to us via the Contact page.</p>
          <p>This is a placeholder policy — replace it with your organisation's full legal text before taking real payments or enrollments.</p>
        </div>
      </div>
    </section>
  );
}
