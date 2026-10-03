import { Course, StudyMaterial, SyllabusItem, Notice, VideoLecture, InstagramPost, GalleryItem, Student, Transaction, MockTest } from '../types';

export const INITIAL_COURSES: Course[] = [
  {
    id: 'c-wcna',
    title: 'WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]',
    category: 'wellness',
    targetClass: 'Aspiring Practitioners & Wellness Consultants',
    duration: '6 Months Professional Certification',
    fee: 25000,
    discountFee: 18500,
    rating: 4.9,
    enrolledCount: 142,
    instructor: 'S. R. Anand (Founder & Director, BAMS, MD Naturopathy)',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80',
    badge: 'Flagship Wellness',
    features: [
      'Fundamental Principles of Ayurveda & Tridosha',
      'Clinical Naturopathy & Hydrotherapy Protocols',
      'Panchakarma Therapies & Detox Procedures',
      'Nadi Pariksha (Pulse Diagnosis) & Patient Counseling',
      'Professional Institute Certification & Clinical Training'
    ],
    description: 'Complete professional certification covering fundamental principles of Ayurveda, Panchakarma therapy, pulse diagnosis, and holistic health consultation with live clinical internship.',
    syllabusHighlights: [
      'Foundations of Naturopathy & Ancient Healing',
      'Ayurvedic Physiology, Prakriti & Dosha Analysis',
      'Herbal Pharmacology & Therapeutic Formulations',
      'Clinical Case Studies & Patient Practice'
    ],
    isPaid: true,
    schedule: 'Mon - Fri | 07:30 AM - 09:30 AM (Alpha Batch)'
  },
  {
    id: 'c-wcfm',
    title: 'WCFM [ WEALTH CONSULTANCY IN FINANCE MANAGEMENT ]',
    category: 'wealth',
    targetClass: 'Finance Professionals & Wealth Advisors',
    duration: '6 Months Professional Certification',
    fee: 200000,
    discountFee: 150000,
    rating: 4.9,
    enrolledCount: 188,
    instructor: 'A.D. Rao (Co-Founder & Wealth Advisory Lead)',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    badge: 'Flagship Wealth',
    features: [
      'Corporate Valuation & Financial Statement Analysis',
      'Portfolio Engineering & Strategic Asset Allocation',
      'Direct & Indirect Corporate Tax Optimization',
      'Wealth Management Ethics & Client Advisory Protocol',
      'Institutional FinOps Modeling & Capstone Projects'
    ],
    description: 'Comprehensive financial training in corporate valuation, portfolio engineering, personal wealth advisory, tax optimization, and regulatory compliance.',
    syllabusHighlights: [
      'Advanced Corporate Financial Analysis',
      'Portfolio Construction & Risk Hedging',
      'HNWI Wealth Structuring & Estate Planning',
      'Regulatory Compliance, SEBI & Advisory Standards'
    ],
    isPaid: true,
    schedule: 'Mon - Fri | 06:00 PM - 08:00 PM (Prime Batch)'
  }
];

export const INITIAL_STUDY_MATERIALS: StudyMaterial[] = [
  // Master Course Blueprints
  {
    id: 'mat-blueprint-en',
    title: 'EDUCA Wellness Coaching Master Blueprint (Bilingual)',
    category: 'formulas',
    targetClass: 'WCNA Certification',
    subject: 'Wellness Master Blueprint',
    chapter: 'Course Blueprint & Student Study Guide: 12 Books | 120 Chapters',
    pages: 35,
    downloadUrl: '/documents/EDUCA_Wellness_Coaching_Blueprint.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-09-01',
    downloadsCount: 2450,
    previewContent: 'Official master syllabus blueprint and student study roadmap across all 12 modules (120 chapters) in Hindi & English.'
  },
  {
    id: 'mat-blueprint-hi',
    title: 'EDUCA वेलनेस कोचिंग संपूर्ण ब्लूप्रिंट (हिंदी संस्करण)',
    category: 'formulas',
    targetClass: 'WCNA Certification',
    subject: 'Wellness Master Blueprint (Hindi)',
    chapter: 'कोर्स ब्लूप्रिंट और विद्यार्थी अध्ययन गाइड: 12 पुस्तकें | 120 अध्याय',
    pages: 40,
    downloadUrl: '/documents/EDUCA_Wellness_Coaching_Blueprint_Hindi.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-09-01',
    downloadsCount: 2280,
    previewContent: 'एजुका इंस्टीट्यूट ऑफ कंसल्टेंसी की 12 पुस्तकों और 120 अध्यायों की विस्तृत हिंदी अध्ययन मार्गदर्शिका और परीक्षा तैयारी ब्लूप्रिंट।'
  },

  // Book 1
  {
    id: 'mat-wcna-book-1',
    title: 'Book 1: Wellness Coaching — Introduction',
    category: 'pdf_notes',
    targetClass: 'WCNA Program',
    subject: 'Naturopathy & Ayurveda',
    chapter: 'Book 1: Introduction to Wellness Coaching (9 Chapters)',
    pages: 48,
    downloadUrl: '/documents/Book1_Complete_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-08-15',
    downloadsCount: 3120,
    previewContent: 'Foundations of Wellness Coaching, Naturopathy and Ayurveda principles, scope of practice, and client consultation model in Hindi & English.'
  },
  {
    id: 'mat-wcna-qb-1',
    title: 'Book 1: Question Bank — 100 Q&A',
    category: 'practice_sets',
    targetClass: 'WCNA Program',
    subject: 'Naturopathy & Ayurveda',
    chapter: 'Book 1 Question Bank: MCQs, Short & Long Answers',
    pages: 42,
    downloadUrl: '/documents/Book1_QuestionBank_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-08-16',
    downloadsCount: 1980,
    previewContent: '100 Questions & Answers repository covering all 9 chapters of Book 1 with MCQs, short answers, and long clinical questions.'
  },

  // Book 2
  {
    id: 'mat-wcna-book-2',
    title: 'Book 2: Naturopathy Basics',
    category: 'pdf_notes',
    targetClass: 'WCNA Program',
    subject: 'Naturopathy',
    chapter: 'Book 2: Fundamentals of Naturopathy (10 Chapters)',
    pages: 52,
    downloadUrl: '/documents/Book2_Naturopathy_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-08-17',
    downloadsCount: 2840,
    previewContent: 'Pancha Mahabhuta (five elements) theory, vital force principles, hydrotherapy, mud therapy, fasting, and natural detoxification healing.'
  },
  {
    id: 'mat-wcna-qb-2',
    title: 'Book 2: Question Bank — 100 Q&A',
    category: 'practice_sets',
    targetClass: 'WCNA Program',
    subject: 'Naturopathy',
    chapter: 'Book 2 Question Bank: 100 Q&A Across 10 Chapters',
    pages: 44,
    downloadUrl: '/documents/Book2_QuestionBank_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-08-18',
    downloadsCount: 1720,
    previewContent: '100 Question evaluation bank testing Naturopathic principles, drugless modalities, safety guidelines, and clinical applications.'
  },

  // Book 3
  {
    id: 'mat-wcna-book-3',
    title: 'Book 3: Ayurveda Basics',
    category: 'pdf_notes',
    targetClass: 'WCNA Program',
    subject: 'Ayurveda',
    chapter: 'Book 3: Fundamentals of Ayurveda (11 Chapters)',
    pages: 58,
    downloadUrl: '/documents/Book3_Ayurveda_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-08-19',
    downloadsCount: 3410,
    previewContent: 'Tridosha analysis (Vata, Pitta, Kapha), Sapta Dhatus, Agni (digestive fire), Prakriti diagnosis, Ritucharya, and Ayurvedic pharmacology.'
  },
  {
    id: 'mat-wcna-qb-3',
    title: 'Book 3: Question Bank — 100 Q&A',
    category: 'practice_sets',
    targetClass: 'WCNA Program',
    subject: 'Ayurveda',
    chapter: 'Book 3 Question Bank: 100 Q&A Across 11 Chapters',
    pages: 46,
    downloadUrl: '/documents/Book3_QuestionBank_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-08-20',
    downloadsCount: 2150,
    previewContent: '100 Questions & Answers in Hindi & English spanning Doshas, Dhatus, Agni, Prakriti assessment, and seasonal therapeutic diets.'
  },

  // Book 4
  {
    id: 'mat-wcna-book-4',
    title: 'Book 4: Human Anatomy Basics',
    category: 'pdf_notes',
    targetClass: 'WCNA Program',
    subject: 'Anatomy & Physiology',
    chapter: 'Book 4: Human Anatomy & Organ Systems',
    pages: 45,
    downloadUrl: '/documents/Book4_Human_Anatomy_Basics.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-08-21',
    downloadsCount: 2620,
    previewContent: 'Structural overview of organ systems, circulatory and endocrine pathways, nervous system, and physiological mechanisms in holistic health.'
  },
  {
    id: 'mat-wcna-qb-4',
    title: 'Book 4: Question Bank — Anatomy Basics',
    category: 'practice_sets',
    targetClass: 'WCNA Program',
    subject: 'Anatomy & Physiology',
    chapter: 'Book 4 Question Bank: Organ Systems & Functions',
    pages: 38,
    downloadUrl: '/documents/Book4_QuestionBank_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-08-22',
    downloadsCount: 1640,
    previewContent: 'Curated anatomy examination questions, organ system identification, physiological explanations, and clinical correlation exercises.'
  },

  // Book 5
  {
    id: 'mat-wcna-book-5',
    title: 'Book 5: Client Assessment',
    category: 'pdf_notes',
    targetClass: 'WCNA Program',
    subject: 'Clinical Consultation',
    chapter: 'Book 5: Client Intake & Diagnostic Assessment (10 Chapters)',
    pages: 48,
    downloadUrl: '/documents/Book5_ClientAssessment_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-08-23',
    downloadsCount: 2310,
    previewContent: 'Standard intake protocols, Nadi Pariksha principles, tongue & eye examination, wellness questionnaire analysis, client records, and goal mapping.'
  },
  {
    id: 'mat-wcna-qb-5',
    title: 'Book 5: Question Bank — 100 Q&A',
    category: 'practice_sets',
    targetClass: 'WCNA Program',
    subject: 'Clinical Consultation',
    chapter: 'Book 5 Question Bank: Intake & Case Studies',
    pages: 42,
    downloadUrl: '/documents/Book5_QuestionBank_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-08-24',
    downloadsCount: 1490,
    previewContent: '100 Practical case assessment questions, intake evaluation scenarios, client consultation workflows, and record-keeping protocols.'
  },

  // Book 6
  {
    id: 'mat-wcna-book-6',
    title: 'Book 6: Diet Planning',
    category: 'pdf_notes',
    targetClass: 'WCNA Program',
    subject: 'Nutrition & Dietetics',
    chapter: 'Book 6: Therapeutic Dietetics & Nutrition (10 Chapters)',
    pages: 54,
    downloadUrl: '/documents/Book6_DietPlanning_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-08-25',
    downloadsCount: 2980,
    previewContent: 'Pathya-Apathya nutritional plans, caloric balance, seasonal eating (Ritucharya), therapeutic fasting, and individualized dietary blueprints.'
  },
  {
    id: 'mat-wcna-qb-6',
    title: 'Book 6: Question Bank — 100 Q&A',
    category: 'practice_sets',
    targetClass: 'WCNA Program',
    subject: 'Nutrition & Dietetics',
    chapter: 'Book 6 Question Bank: Nutritional Case Studies',
    pages: 45,
    downloadUrl: '/documents/Book6_QuestionBank_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-08-26',
    downloadsCount: 1810,
    previewContent: '100 Examination questions covering Dosha-based diets, food combinations, meal timing, seasonal charts, and dietary safety rules.'
  },

  // Book 7
  {
    id: 'mat-wcna-book-7',
    title: 'Book 7: Lifestyle & Routine Coaching',
    category: 'pdf_notes',
    targetClass: 'WCNA Program',
    subject: 'Lifestyle Medicine',
    chapter: 'Book 7: Dinacharya & Habit Formation (10 Chapters)',
    pages: 50,
    downloadUrl: '/documents/Book7_LifestyleCoaching_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-08-27',
    downloadsCount: 2540,
    previewContent: 'Dinacharya (daily regimen), Ratricharya (night routine), sleep hygiene, circadian rhythm optimization, exercise science, and sustainable habit coaching.'
  },
  {
    id: 'mat-wcna-qb-7',
    title: 'Book 7: Question Bank — 100 Q&A',
    category: 'practice_sets',
    targetClass: 'WCNA Program',
    subject: 'Lifestyle Medicine',
    chapter: 'Book 7 Question Bank: Lifestyle & Routine Coaching',
    pages: 44,
    downloadUrl: '/documents/Book7_QuestionBank_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-08-28',
    downloadsCount: 1530,
    previewContent: '100 Question evaluation bank testing sleep routine design, stress reduction strategies, habit tracking techniques, and client adherence coaching.'
  },

  // Book 8
  {
    id: 'mat-wcna-book-8',
    title: 'Book 8: Managing Common Lifestyle Diseases',
    category: 'pdf_notes',
    targetClass: 'WCNA Program',
    subject: 'Lifestyle Disorders',
    chapter: 'Book 8: Metabolic & Lifestyle Disorders (10 Chapters)',
    pages: 56,
    downloadUrl: '/documents/Book8_LifestyleDiseases_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-08-29',
    downloadsCount: 3260,
    previewContent: 'Evidence-based lifestyle support protocols for hypertension, type-2 diabetes, obesity, thyroid imbalance, fatty liver, and chronic acidity.'
  },
  {
    id: 'mat-wcna-qb-8',
    title: 'Book 8: Question Bank — 100 Q&A',
    category: 'practice_sets',
    targetClass: 'WCNA Program',
    subject: 'Lifestyle Disorders',
    chapter: 'Book 8 Question Bank: Therapeutic Lifestyle Cases',
    pages: 46,
    downloadUrl: '/documents/Book8_QuestionBank_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-08-30',
    downloadsCount: 1940,
    previewContent: '100 Clinical examination questions on metabolic disorder management, lifestyle intervention guidelines, and client progress monitoring.'
  },

  // Book 9
  {
    id: 'mat-wcna-book-9',
    title: 'Book 9: Herbs & Supplements Guidance',
    category: 'pdf_notes',
    targetClass: 'WCNA Program',
    subject: 'Herbal Science',
    chapter: 'Book 9: Herbs, Supplements & Safety (10 Chapters)',
    pages: 52,
    downloadUrl: '/documents/Book9_HerbsSupplements_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-08-31',
    downloadsCount: 2790,
    previewContent: 'Healing herbs (Ashwagandha, Giloy, Triphala, Brahmi, Shatavari), supplement guidance, extraction principles, safety margins, contraindications, and myth-busting.'
  },
  {
    id: 'mat-wcna-qb-9',
    title: 'Book 9: Question Bank — 100 Q&A',
    category: 'practice_sets',
    targetClass: 'WCNA Program',
    subject: 'Herbal Science',
    chapter: 'Book 9 Question Bank: Herbal Formulations & Safety',
    pages: 45,
    downloadUrl: '/documents/Book9_QuestionBank_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-09-01',
    downloadsCount: 1680,
    previewContent: '100 Questions on Ayurvedic herb selection, decoction preparation, therapeutic dosages, contraindication checks, and supplement guidelines.'
  },

  // Book 10
  {
    id: 'mat-wcna-book-10',
    title: 'Book 10: Client Communication & Counseling Skills',
    category: 'pdf_notes',
    targetClass: 'WCNA Program',
    subject: 'Communication & Counseling',
    chapter: 'Book 10: Communication & Counseling (10 Chapters)',
    pages: 50,
    downloadUrl: '/documents/Book10_Communication_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-09-02',
    downloadsCount: 2470,
    previewContent: 'Empathetic active listening, motivational interviewing, overcoming client resistance, non-violent communication, feedback delivery, and rapport building.'
  },
  {
    id: 'mat-wcna-qb-10',
    title: 'Book 10: Question Bank — 100 Q&A',
    category: 'practice_sets',
    targetClass: 'WCNA Program',
    subject: 'Communication & Counseling',
    chapter: 'Book 10 Question Bank: Counseling & Communication',
    pages: 44,
    downloadUrl: '/documents/Book10_QuestionBank_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-09-03',
    downloadsCount: 1590,
    previewContent: '100 Practical communication exam scenarios covering active listening tests, client negotiation, empathy demonstration, and motivational questioning.'
  },

  // Book 11
  {
    id: 'mat-wcna-book-11',
    title: 'Book 11: Professional Ethics & Legal Guidelines',
    category: 'pdf_notes',
    targetClass: 'WCNA Program',
    subject: 'Professional Ethics & Practice',
    chapter: 'Book 11: Ethics & Scope of Practice (10 Chapters)',
    pages: 46,
    downloadUrl: '/documents/Book11_Ethics_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-09-04',
    downloadsCount: 2210,
    previewContent: 'Ethical boundaries, legal scope of practice for non-medical wellness coaches, client consent, confidentiality, record keeping, and professional integrity standards.'
  },
  {
    id: 'mat-wcna-qb-11',
    title: 'Book 11: Question Bank — 100 Q&A',
    category: 'practice_sets',
    targetClass: 'WCNA Program',
    subject: 'Professional Ethics & Practice',
    chapter: 'Book 11 Question Bank: Legal & Ethical Dilemmas',
    pages: 42,
    downloadUrl: '/documents/Book11_QuestionBank_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-09-05',
    downloadsCount: 1420,
    previewContent: '100 Ethical case dilemma evaluations, legal compliance scenarios, consent form administration, and client data protection questions.'
  },

  // Book 12
  {
    id: 'mat-wcna-book-12',
    title: 'Book 12: Starting Your Own Wellness Practice',
    category: 'pdf_notes',
    targetClass: 'WCNA & Practice Setup',
    subject: 'Practice Setup & Business Management',
    chapter: 'Book 12: Business Setup & Practice Management (10 Chapters)',
    pages: 52,
    downloadUrl: '/documents/Book12_StartingPractice_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-09-06',
    downloadsCount: 3050,
    previewContent: 'Launching a successful clinic or consultancy, fee structuring, client onboarding systems, branding, digital marketing, ethical practice growth, and finance.'
  },
  {
    id: 'mat-wcna-qb-12',
    title: 'Book 12: Question Bank — 100 Q&A',
    category: 'practice_sets',
    targetClass: 'WCNA & Practice Setup',
    subject: 'Practice Setup & Business Management',
    chapter: 'Book 12 Question Bank: Practice & Business Management',
    pages: 44,
    downloadUrl: '/documents/Book12_QuestionBank_EDUCA.docx',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-09-07',
    downloadsCount: 1860,
    previewContent: '100 Practice management questions covering consultancy launch checklists, financial break-even models, marketing plans, and client retention strategies.'
  },

  // Wealth Management / Finance Section
  {
    id: 'mat-wcfm-1',
    title: 'WCFM: Corporate Valuation & DCF Financial Modeling Handbook',
    category: 'pdf_notes',
    targetClass: 'WCFM Program',
    subject: 'Financial Modeling & Valuation',
    chapter: 'Module 1: Corporate Valuation & DCF Modeling',
    pages: 48,
    downloadUrl: '#',
    isPremium: true,
    fileType: 'doc',
    dateAdded: '2026-08-10',
    downloadsCount: 2350,
    previewContent: 'Discounted Cash Flow (DCF), Comparable Company Analysis (CCA), WACC calculations, terminal value forecasting, and scenario sensitivity matrices.'
  },
  {
    id: 'mat-wcfm-2',
    title: 'WCFM: Strategic Portfolio Management & Asset Allocation Blueprint',
    category: 'formulas',
    targetClass: 'WCFM Program',
    subject: 'Wealth Management & Portfolio Strategy',
    chapter: 'Module 2: Portfolio Strategy & Wealth Allocation',
    pages: 36,
    downloadUrl: '#',
    isPremium: false,
    fileType: 'doc',
    dateAdded: '2026-08-08',
    downloadsCount: 1890,
    previewContent: 'Modern Portfolio Theory (MPT), Sharpe ratio optimization, multi-asset class allocation, tax-harvesting techniques, and client risk profiling blueprints.'
  }
];

export const INITIAL_SYLLABUS: SyllabusItem[] = [
  {
    id: 'syl-wcna',
    targetClass: 'WCNA Certification',
    subject: 'Wellness Consultancy in Naturopathy & Ayurveda',
    examBoard: 'Educa Institute of Consultancy Board',
    totalMarks: 100,
    academicYear: '2026-2027',
    pdfUrl: '#',
    chapters: [
      { name: 'Foundations of Naturopathy & Ayurveda', subtopics: ['History & Philosophy', 'Five Elements (Pancha Mahabhuta)', 'Tridosha & Prakriti Concept'], weightage: '20 Marks', estimatedHours: 25 },
      { name: 'Diagnostic Methods & Pulse Analysis', subtopics: ['Nadi Pariksha Principles', 'Tongue & Eye Examination', 'Pathology & Dosha Imbalance'], weightage: '20 Marks', estimatedHours: 25 },
      { name: 'Nutritional Therapy & Dietetics', subtopics: ['Pathya-Apathya Diet', 'Herbal Nutrition & Seasonality (Ritucharya)', 'Therapeutic Fasting'], weightage: '20 Marks', estimatedHours: 20 },
      { name: 'Panchakarma Therapies & Detox Procedures', subtopics: ['Purva Karma (Snehana/Swedana)', 'Pradhana Karma (5 Cleanse Actions)', 'Paschat Karma Rejuvenation'], weightage: '20 Marks', estimatedHours: 30 },
      { name: 'Clinical Consultation & Ethical Practice', subtopics: ['Client History Documentation', 'Consultation Framework', 'Legal Standards & Practice Ethics'], weightage: '20 Marks', estimatedHours: 20 }
    ]
  },
  {
    id: 'syl-wcfm',
    targetClass: 'WCFM Certification',
    subject: 'Wealth Consultancy in Finance Management',
    examBoard: 'Educa Institute of Consultancy Board',
    totalMarks: 100,
    academicYear: '2026-2027',
    pdfUrl: '#',
    chapters: [
      { name: 'Financial Statement Analysis & Ratio Modeling', subtopics: ['Balance Sheet Breakdown', 'Cash Flow Analysis', 'Quality of Earnings'], weightage: '20 Marks', estimatedHours: 22 },
      { name: 'Corporate Valuation & DCF Modeling', subtopics: ['Free Cash Flow Projections', 'WACC Calculations', 'Terminal Value & Sensitivity'], weightage: '25 Marks', estimatedHours: 28 },
      { name: 'Investment Management & Portfolio Theory', subtopics: ['Asset Allocation Models', 'Risk & Beta Profiling', 'Derivatives & Hedging Basics'], weightage: '20 Marks', estimatedHours: 25 },
      { name: 'Direct Tax Laws & Estate Planning', subtopics: ['Capital Gains Planning', 'Family Trusts & Inheritance', 'Offshore & Regulatory Norms'], weightage: '20 Marks', estimatedHours: 25 },
      { name: 'Wealth Advisory Practice & Client Relations', subtopics: ['HNWI Mandate Drafting', 'Risk Disclosure Protocols', 'Consultancy Firm Management'], weightage: '15 Marks', estimatedHours: 20 }
    ]
  }
];

export const INITIAL_NOTICES: Notice[] = [
  {
    id: 'not-1',
    title: 'Admissions Open for Session 2026–2027 (WCNA & WCFM Programs)',
    date: '2026-08-20',
    category: 'admission',
    description: 'Admissions are now open for WCNA (Wellness Consultancy in Naturopathy and Ayurveda) and WCFM (Wealth Consultancy in Finance Management). Direct admission helpline: +91 98765 43210.',
    isImportant: true,
    badgeText: 'ADMISSIONS OPEN'
  },
  {
    id: 'not-2',
    title: 'Practical Pulse Diagnosis & Clinical Naturopathy Workshop on Sunday',
    date: '2026-08-18',
    category: 'exam',
    description: 'A special hands-on practical session led by Founder & Director S. R. Anand covering Nadi Pariksha and therapeutic herbal preparation at the Varanasi Campus & Online Live Stream.',
    isImportant: true,
    badgeText: 'WORKSHOP ALERT'
  },
  {
    id: 'not-3',
    title: 'Corporate Financial Modeling & Valuation Masterclass by A.D. Rao',
    date: '2026-08-16',
    category: 'batch',
    description: 'WCFM scholars are invited to participate in the live DCF and financial modeling lab led by A.D. Rao. Case study materials available in the Study Vault.',
    isImportant: false,
    badgeText: 'NEW WORKSHOP'
  }
];

export const INITIAL_VIDEOS: VideoLecture[] = [
  {
    id: 'vid-1',
    title: 'Pulse Diagnosis & Tridosha Assessment Masterclass | S. R. Anand',
    subject: 'Wellness Consultancy (WCNA)',
    targetClass: 'WCNA Scholars',
    duration: '48:30',
    youtubeId: 'kJQP7kiw5Fk',
    youtubeUrl: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
    thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80',
    instructor: 'S. R. Anand',
    views: '18.4K views',
    isFeatured: true,
    notesPdfUrl: '#'
  },
  {
    id: 'vid-2',
    title: 'Corporate Valuation & DCF Modeling in Practice | A.D. Rao',
    subject: 'Wealth Consultancy (WCFM)',
    targetClass: 'WCFM Scholars',
    duration: '52:15',
    youtubeId: 'kJQP7kiw5Fk',
    youtubeUrl: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    instructor: 'A.D. Rao',
    views: '14.9K views',
    isFeatured: true,
    notesPdfUrl: '#'
  }
];

export const INITIAL_INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'insta-1',
    title: 'Annual Convocation & Merit Award Ceremony 2026: Celebrating our certified WCNA and WCFM consultants! 🎓✨',
    likes: '1,840',
    comments: '94',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80',
    postUrl: 'https://instagram.com',
    type: 'post',
    date: '2 days ago'
  },
  {
    id: 'insta-2',
    title: 'Live pulse diagnosis clinical practicals at the Ayurveda & Naturopathy center with Director S. R. Anand 🌿🩺',
    likes: '4,120',
    comments: '240',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop&q=80',
    postUrl: 'https://instagram.com',
    type: 'reel',
    date: '4 days ago'
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Annual Convocation & Merit Award Ceremony 2026',
    category: 'toppers',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
    date: 'July 2026',
    description: 'Awarding professional consultancy certifications and excellence badges to WCNA and WCFM graduates.'
  },
  {
    id: 'gal-2',
    title: 'Ayurvedic Clinical Diagnostics & Herbal Formulation Lab',
    category: 'classroom',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80',
    date: 'August 2026',
    description: 'Hands-on practical diagnosis, herbal preparations, and patient pulse assessment under direct supervision.'
  },
  {
    id: 'gal-3',
    title: 'Executive Financial Modeling & Wealth Seminar Suite',
    category: 'classroom',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    date: 'June 2026',
    description: 'High-tech computer laboratory equipped for financial analysis, corporate valuation, and portfolio simulation.'
  }
];

export const INITIAL_STUDENTS: Student[] = [
  {
    id: 'stu-demo',
    name: 'Aarav Patel',
    email: 'aarav@educa.com',
    phone: '+91 98765 43210',
    classEnrolled: 'WCNA Program',
    enrolledCourses: ['c-wcna'],
    courseProgress: {
      'c-wcna': 75
    },
    completedLessons: ['lesson-1', 'lesson-2', 'lesson-3'],
    joinedDate: '2026-06-15',
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'stu-2',
    name: 'Sneha Kumari',
    email: 'sneha@educa.com',
    phone: '+91 98765 11223',
    classEnrolled: 'WCFM Program',
    enrolledCourses: ['c-wcfm'],
    courseProgress: {
      'c-wcfm': 85
    },
    completedLessons: ['lesson-1', 'lesson-2'],
    joinedDate: '2026-05-20'
  }
];

export const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: 'TXN-98421',
    studentName: 'Aarav Patel',
    studentEmail: 'aarav@educa.com',
    studentPhone: '+91 98765 43210',
    courseId: 'c-wcna',
    courseName: 'WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]',
    amount: 18500,
    paymentMethod: 'UPI',
    date: '2026-08-18 14:22',
    status: 'Completed',
    utrNumber: 'UPI/20260818/8892104'
  },
  {
    id: 'TXN-98420',
    studentName: 'Sneha Kumari',
    studentEmail: 'sneha@educa.com',
    studentPhone: '+91 98765 11223',
    courseId: 'c-wcfm',
    courseName: 'WCFM [ WEALTH CONSULTANCY IN FINANCE MANAGEMENT ]',
    amount: 22000,
    paymentMethod: 'Card',
    date: '2026-08-16 11:05',
    status: 'Completed',
    utrNumber: 'CARD/HDFC/992147'
  }
];

export const INITIAL_MOCK_TESTS: MockTest[] = [
  {
    id: 'test-wcna-1',
    title: 'WCNA: Tridosha & Naturopathy Fundamentals Assessment',
    targetClass: 'WCNA Program',
    subject: 'Ayurveda & Naturopathy',
    durationMinutes: 20,
    totalMarks: 25,
    passingMarks: 15,
    questions: [
      {
        id: 1,
        question: 'Which element predominantly constitutes the Vata dosha in Ayurvedic physiology?',
        options: ['Ether and Air', 'Fire and Water', 'Earth and Water', 'Fire and Air'],
        correctOption: 0,
        explanation: 'Vata dosha is governed by Akasha (Ether/Space) and Vayu (Air), controlling all movements in the body.'
      },
      {
        id: 2,
        question: 'What is the primary objective of Panchakarma therapy?',
        options: ['Symptom suppression', 'Systemic detoxification and cellular rejuvenation', 'Surgical intervention', 'Antibiotic administration'],
        correctOption: 1,
        explanation: 'Panchakarma aims at root-cause elimination of morbid doshas and metabolic toxins (Ama).'
      },
      {
        id: 3,
        question: 'In Naturopathic science, which modality utilizes water at varying temperatures for healing?',
        options: ['Chromotherapy', 'Hydrotherapy', 'Heliotherapy', 'Mud Therapy'],
        correctOption: 1,
        explanation: 'Hydrotherapy utilizes hot and cold water applications to stimulate circulation and metabolic detoxification.'
      }
    ]
  },
  {
    id: 'test-wcfm-1',
    title: 'WCFM: Corporate Valuation & DCF Modeling Quiz',
    targetClass: 'WCFM Program',
    subject: 'Finance Management',
    durationMinutes: 20,
    totalMarks: 25,
    passingMarks: 15,
    questions: [
      {
        id: 1,
        question: 'In Discounted Cash Flow (DCF) analysis, what does WACC represent?',
        options: ['Weighted Average Capital Cost', 'Weighted Average Cost of Capital', 'World Accounting Current Cost', 'Working Asset Capital Coefficient'],
        correctOption: 1,
        explanation: 'WACC is the Weighted Average Cost of Capital, reflecting the required rate of return for equity and debt holders.'
      },
      {
        id: 2,
        question: 'Which financial statement is directly used to calculate Free Cash Flow to Firm (FCFF)?',
        options: ['Income Statement and Cash Flow Statement', 'Only Balance Sheet', 'Bank Reconciliation Statement', 'Ledger Journal'],
        correctOption: 0,
        explanation: 'FCFF begins with EBIT(1-t) from the Income Statement, adding Depreciation and subtracting Capex and Change in Working Capital.'
      }
    ]
  }
];
