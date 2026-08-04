import React from "react";

export default function LiveTicker({ batches }) {
  if (!batches || batches.length === 0) return null;
  return (
    <div className="overflow-hidden py-3 bg-[#0F1830] border-t border-[#26305A] border-b">
      <div className="flex items-center gap-2 px-4 md:px-8 max-w-6xl mx-auto mb-2">
        <span className="w-2 h-2 rounded-full animate-pulse bg-[#4ADE80]" />
        <span className="font-mono text-xs text-white/70 tracking-wider">TODAY'S TIMETABLE — LIVE</span>
      </div>
      <div className="flex gap-4 px-4 md:px-8 overflow-x-auto pb-1 max-w-6xl mx-auto">
        {batches.map((b) => (
          <div key={b._id} className="flex-shrink-0 rounded-lg px-4 py-3 min-w-[220px] bg-ink border border-[#2A3557]">
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-xs text-saffron">{b.time}</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#1F7A6C33] text-[#5FC9B8]">{b.tag}</span>
            </div>
            <p className="font-body text-white text-sm font-medium">{b.subject}</p>
            <p className="font-body text-white/50 text-xs mt-0.5">{b.topic} · {b.teacher}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
