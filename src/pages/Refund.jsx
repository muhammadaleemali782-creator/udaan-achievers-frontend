import React from "react";

export default function Refund() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-black tracking-[0.3em] text-brand-teal uppercase block mb-4">Legal</span>
        <h1 className="text-4xl md:text-5xl font-black text-brand-navy tracking-tight mb-8">Refund Policy</h1>
        <div className="text-brand-slate leading-relaxed space-y-4 text-lg">
          <p>If you're not satisfied within the first 7 days of a batch starting, contact us for a full refund — no questions asked.</p>
          <p>After 7 days, refunds are considered case-by-case depending on classes attended and material accessed.</p>
          <p>This is a placeholder — replace it with your organisation's full refund terms before taking real payments.</p>
        </div>
      </div>
    </section>
  );
}
