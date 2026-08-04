import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Play, Pause, ListVideo, Download } from "lucide-react";
import api from "../api";

export default function Lecture() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    api.get(`/courses/${courseId}`).then((r) => setCourse(r.data)).catch(() => {});
  }, [courseId]);

  if (!course) {
    return (
      <section className="bg-paper py-20 text-center">
        <p className="font-body text-muted">Loading lecture…</p>
      </section>
    );
  }

  const lectures = course.lectures?.length ? course.lectures : ["Introduction"];

  return (
    <section className="bg-[#0B1226] py-8 md:py-10 min-h-[70vh]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <button onClick={() => navigate("/dashboard")} className="font-body text-white/60 text-sm flex items-center gap-1 mb-4">
          <ChevronLeft size={16} /> Back to dashboard
        </button>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="rounded-xl aspect-video flex items-center justify-center relative bg-ink">
              <button onClick={() => setPlaying(!playing)} className="w-16 h-16 rounded-full flex items-center justify-center bg-saffron">
                {playing ? <Pause size={26} className="text-ink" /> : <Play size={26} className="text-ink" />}
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="w-full h-1.5 rounded-full bg-[#2A3557]">
                  <div className="h-1.5 rounded-full bg-saffron" style={{ width: playing ? "38%" : "12%" }} />
                </div>
              </div>
            </div>
            <h1 className="font-display text-white text-2xl mt-5">{lectures[active]}</h1>
            <p className="font-body text-white/50 text-sm mt-1">{course.name}</p>
            <button className="font-body text-sm text-white flex items-center gap-1 px-4 py-2 rounded-full border border-white/20 mt-4">
              <Download size={14} /> Notes PDF
            </button>
          </div>
          <div className="rounded-xl p-4 bg-ink">
            <p className="font-body text-white text-sm font-medium mb-3 flex items-center gap-2"><ListVideo size={16} /> Playlist</p>
            <div className="flex flex-col gap-1">
              {lectures.map((l, i) => (
                <button key={i} onClick={() => setActive(i)} className={`text-left font-body text-sm px-3 py-2.5 rounded-lg flex items-center gap-2 ${active === i ? "bg-[#1F2A4D] text-saffron" : "text-[#D8D9E0]"}`}>
                  <Play size={12} /> {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
