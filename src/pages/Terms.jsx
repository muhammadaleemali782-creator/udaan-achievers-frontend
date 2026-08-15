import React from "react";

export default function Terms() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-black tracking-[0.3em] text-brand-teal uppercase block mb-4">Legal</span>
        <h1 className="text-4xl md:text-5xl font-black text-brand-navy tracking-tight mb-8">Terms of Use</h1>
        <div className="text-brand-slate leading-relaxed space-y-4 text-lg">
          <p>By enrolling in a Udaan Achievers batch, you agree to attend classes respectfully, submit original work in tests, and use recorded lectures for personal study only.</p>
          <p>Course access is tied to your account and may not be shared or resold. We reserve the right to suspend accounts that violate these terms.</p>
          <p>This is a placeholder — replace it with your organisation's full legal text before taking real payments or enrollments.</p>
        </div>
      </div>
    </section>
  );
}
