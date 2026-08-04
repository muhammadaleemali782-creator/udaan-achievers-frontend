import React, { useEffect, useState } from "react";
import api from "../api";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [filter, setFilter] = useState("All");
  const cats = ["All", "JEE", "NEET", "Foundation"];

  useEffect(() => {
    api.get("/courses").then((r) => setCourses(Array.isArray(r.data) ? r.data : [])).catch(() => {});
  }, []);

  const list = courses.filter((c) => filter === "All" || c.cat === filter);

  return (
    <>
      <section className="bg-ink pt-14 pb-10 md:pt-20 md:pb-14">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <span className="font-mono text-xs font-medium px-2 py-1 rounded bg-saffron/10 text-saffron">{courses.length} active batches</span>
          <h1 className="font-display text-white text-4xl md:text-5xl mt-5">All courses</h1>
        </div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex gap-2 flex-wrap mb-10">
            {cats.map((c) => (
              <button key={c} onClick={() => setFilter(c)} className={`font-body text-sm px-4 py-2 rounded-full ${filter === c ? "bg-ink text-white" : "bg-paper text-charcoal"}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((c) => <CourseCard key={c._id} course={c} />)}
          </div>
        </div>
      </section>
    </>
  );
}
