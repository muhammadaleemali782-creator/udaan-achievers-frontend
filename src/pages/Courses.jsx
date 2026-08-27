import React, { useEffect, useState, useMemo } from "react";
import api from "../api";
import CourseCard from "../components/CourseCard";
import { Search } from "lucide-react";

// Fallback WCNA Curriculum in case backend is loading
const FALLBACK_WCNA_COURSES = [
  {
    "name": "WCNA \u2014 Wellness Consultancy of Naturopathy & Ayurveda",
    "cat": "WCNA Program",
    "level": "18 Months + 6 Mo Internship",
    "price": 24999,
    "oldPrice": 35000,
    "seats": "Admissions Open",
    "rating": 5.0,
    "students": "540 enrolled",
    "image": "/books/wcna_master_course.jpg",
    "tag": "CAREER FOCUSED TRAINING",
    "desc": "Complete 18-Month career focused training course in Wellness Consultancy of Naturopathy & Ayurveda with 6-month internship, personal guidance, and clinical case studies.",
    "lectures": [
      "Anatomy & Physiology",
      "Rogshashtra",
      "Principal of Ayurveda",
      "Principal of Naturopathy",
      "Diet & Nutrition",
      "Yoga Science",
      "Counselling Skills",
      "Objection & Solution",
      "Client Follow Up",
      "Wellness Center Setup",
      "20+ Wellness Case Studies"
    ]
  },
  {
    "name": "WCNA: Wellness Coaching (BOOK 01)",
    "cat": "Curriculum Books",
    "level": "Book 01",
    "price": 499,
    "oldPrice": 799,
    "seats": "Instant Access",
    "rating": 4.9,
    "students": "320+ copies",
    "image": "/books/book1_wellness_coaching.jpg",
    "tag": "FOUNDATION",
    "desc": "Essential introduction to modern wellness coaching, client mindset transformation, and holistic health philosophy.",
    "lectures": [
      "Holistic Health Principles",
      "Client Mindset Shifts",
      "Goal Setting",
      "Wellness Dimensions"
    ]
  },
  {
    "name": "WCNA: Naturopathy Basics (BOOK 02)",
    "cat": "Curriculum Books",
    "level": "Book 02",
    "price": 549,
    "oldPrice": 849,
    "seats": "Instant Access",
    "rating": 4.9,
    "students": "320+ copies",
    "image": "/books/book2_naturopathy_basics.jpg",
    "tag": "NATURE CURE",
    "desc": "Core principles of Naturopathic healing, 5 elements therapy, hydrotherapy, mud packs, and natural body detoxification.",
    "lectures": [
      "5 Elements Therapy",
      "Hydrotherapy",
      "Mud Therapy",
      "Fasting & Detoxification"
    ]
  },
  {
    "name": "WCNA: Ayurveda Basics (BOOK 03)",
    "cat": "Curriculum Books",
    "level": "Book 03",
    "price": 599,
    "oldPrice": 899,
    "seats": "Instant Access",
    "rating": 4.9,
    "students": "320+ copies",
    "image": "/books/book3_ayurveda_basics.jpg",
    "tag": "ANCIENT WISDOM",
    "desc": "Foundational Ayurvedic concepts: Vata, Pitta, Kapha assessment, Agni, Ama diagnostics, and body constitution analysis.",
    "lectures": [
      "Tridosha Analysis",
      "Dhatu & Mala Science",
      "Prakriti Assessment",
      "Agni & Ama Diagnostics"
    ]
  },
  {
    "name": "WCNA: Client Assessment (BOOK 05)",
    "cat": "Curriculum Books",
    "level": "Book 05",
    "price": 649,
    "oldPrice": 949,
    "seats": "Instant Access",
    "rating": 4.9,
    "students": "320+ copies",
    "image": "/books/book5_client_assessment.jpg",
    "tag": "CLINICAL PRACTICE",
    "desc": "Comprehensive framework for evaluating client medical history, physical symptoms, stress markers, and lifestyle assessment.",
    "lectures": [
      "Health Intake Forms",
      "Nadi & Tongue Observation",
      "Vital Marker Analysis",
      "Lifestyle Stress Auditing"
    ]
  },
  {
    "name": "WCNA: Diet Planning (BOOK 06)",
    "cat": "Curriculum Books",
    "level": "Book 06",
    "price": 599,
    "oldPrice": 899,
    "seats": "Instant Access",
    "rating": 4.9,
    "students": "320+ copies",
    "image": "/books/book6_diet_planning.jpg",
    "tag": "NUTRITION",
    "desc": "Scientific diet design combining Ahara principles, sattvic nutrition, calorie balance, and customized disease meal charts.",
    "lectures": [
      "Ahara Vidhi",
      "Sattvic Nutrition",
      "Therapeutic Diet Charts",
      "Calorie & Micro-nutrient Balance"
    ]
  },
  {
    "name": "WCNA: Lifestyle & Routine (BOOK 07)",
    "cat": "Curriculum Books",
    "level": "Book 07",
    "price": 499,
    "oldPrice": 799,
    "seats": "Instant Access",
    "rating": 4.9,
    "students": "320+ copies",
    "image": "/books/book7_lifestyle_coaching.jpg",
    "tag": "DAILY HABITS",
    "desc": "Step-by-step coaching tools for sleep optimization, morning rituals, stress reduction, and habit formation.",
    "lectures": [
      "Dinacharya Protocol",
      "Circadian Rhythm Biology",
      "Sleep Architecture",
      "Stress & Breathwork"
    ]
  },
  {
    "name": "WCNA: Managing Diseases (BOOK 08)",
    "cat": "Clinical Practice",
    "level": "Book 08",
    "price": 749,
    "oldPrice": 1099,
    "seats": "Instant Access",
    "rating": 4.9,
    "students": "320+ copies",
    "image": "/books/book8_managing_diseases.jpg",
    "tag": "REVERSAL PROTOCOLS",
    "desc": "Proven holistic protocols for managing Diabetes, Hypertension, Thyroid imbalances, PCOD, and Digestive disorders.",
    "lectures": [
      "Metabolic Syndrome",
      "Hypertension Protocols",
      "Thyroid Management",
      "Gut & Acid Reflux Protocols"
    ]
  },
  {
    "name": "WCNA: Herbs & Supplements (BOOK 09)",
    "cat": "Clinical Practice",
    "level": "Book 09",
    "price": 699,
    "oldPrice": 999,
    "seats": "Instant Access",
    "rating": 4.9,
    "students": "320+ copies",
    "image": "/books/book9_herbs_supplements.jpg",
    "tag": "HERBOLOGY",
    "desc": "Practical guide to potent medicinal herbs, classical formulations, safe dosages, contraindications, and supplement pairing.",
    "lectures": [
      "Classical Formulations",
      "Herb Synergy & Anupana",
      "Dosage & Toxicity Safety",
      "Modern Supplement Pairings"
    ]
  },
  {
    "name": "WCNA: Communication Skills (BOOK 10)",
    "cat": "Clinical Practice",
    "level": "Book 10",
    "price": 599,
    "oldPrice": 899,
    "seats": "Instant Access",
    "rating": 4.9,
    "students": "320+ copies",
    "image": "/books/book10_client_communication.jpg",
    "tag": "CONSULTANCY PRACTICE",
    "desc": "Advanced consulting psychology, overcoming client objections, long-term retention, and establishing a successful wellness center.",
    "lectures": [
      "Counseling Psychology",
      "Objection Handling",
      "Client Retention System",
      "Wellness Center Setup"
    ]
  }
];

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [cat, setCat] = useState("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/api/courses")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setCourses(res.data);
        } else {
          setCourses(FALLBACK_WCNA_COURSES);
        }
      })
      .catch(() => setCourses(FALLBACK_WCNA_COURSES))
      .finally(() => setLoading(false));
  }, []);

  const displayList = courses.length > 0 ? courses : FALLBACK_WCNA_COURSES;

  const categories = useMemo(() => [
    { id: "all", label: "All Curriculum & Books", count: displayList.length },
    { id: "WCNA Program", label: "WCNA Master Program", count: displayList.filter(c => c.cat === "WCNA Program").length },
    { id: "Curriculum Books", label: "Curriculum Books (01 - 07)", count: displayList.filter(c => c.cat === "Curriculum Books").length },
    { id: "Clinical Practice", label: "Clinical & Coaching (08 - 10)", count: displayList.filter(c => c.cat === "Clinical Practice").length },
  ], [displayList]);

  const filtered = useMemo(() => {
    return displayList.filter((c) => {
      const matchCat = cat === "all" || c.cat === cat;
      const matchSearch =
        !search ||
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        (c.desc && c.desc.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [displayList, cat, search]);

  return (
    <div className="bg-paper min-h-screen py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="font-mono text-xs text-tealDark font-bold uppercase tracking-wider mb-2">
            🌿 EDUCA VEDA · UDAAN ACHIEVERS
          </p>
          <h1 className="font-display text-3xl md:text-5xl text-charcoal mb-4">
            WCNA Curriculum &amp; Study Books
          </h1>
          <p className="font-body text-sm md:text-base text-muted">
            18-Month Career Focused Training Course in Naturopathy &amp; Ayurveda with 10 comprehensive study books, 20+ clinical case studies, and 1:1 guidance.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((item) => (
              <button
                key={item.id}
                onClick={() => setCat(item.id)}
                className={`font-body text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  cat === item.id
                    ? "bg-ink text-white shadow-sm"
                    : "bg-white border border-paperDark text-muted hover:text-charcoal"
                }`}
              >
                {item.label} ({item.count})
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search books & modules..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full font-body text-xs px-4 py-2 pl-9 rounded-full bg-white border border-paperDark outline-none focus:border-ink"
            />
            <Search size={14} className="absolute left-3 top-2.5 text-muted" />
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="rounded-2xl p-12 text-center bg-white border border-paperDark">
            <p className="font-body text-sm text-muted">Koi book ya course nahi mila.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course, idx) => (
              <CourseCard key={course._id || idx} course={course} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
