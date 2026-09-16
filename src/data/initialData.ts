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
    instructor: 'Dr. R. K. Sharma (Dean, BAMS, MD Naturopathy)',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80',
    badge: 'Flagship Wellness',
    features: [
      'Fundamental Principles of Ayurveda & Tridosha',
      'Clinical Naturopathy & Hydrotherapy Protocols',
      'Panchakarma Therapies & Detox Procedures',
      'Nadi Pariksha (Pulse Diagnosis) & Patient Counseling',
      'Verifiable Government Recognized Certification'
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
    fee: 30000,
    discountFee: 22000,
    rating: 4.9,
    enrolledCount: 188,
    instructor: 'Prof. Arvind Mehta (CFA, FinOps Advisory)',
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
  {
    id: 'mat-1',
    title: 'WCNA: Naturopathy Clinical Protocols & Diagnostic Handbook',
    category: 'pdf_notes',
    targetClass: 'WCNA Program',
    subject: 'Naturopathy & Ayurveda',
    chapter: 'Module 1: Clinical Diagnosis',
    pages: 36,
    downloadUrl: '#',
    isPremium: false,
    fileType: 'pdf',
    dateAdded: '2026-08-15',
    downloadsCount: 1840,
    previewContent: 'Comprehensive clinical guide covering Nadi Pariksha, Panchakarma preparation protocols, therapeutic dietary schedules, and contraindications.'
  },
  {
    id: 'mat-2',
    title: 'WCNA: Ayurvedic Tridosha Balance & Herbal Formulations Guide',
    category: 'pdf_notes',
    targetClass: 'WCNA Program',
    subject: 'Ayurvedic Pharmacopoeia',
    chapter: 'Module 2: Herbs & Formulations',
    pages: 42,
    downloadUrl: '#',
    isPremium: false,
    fileType: 'pdf',
    dateAdded: '2026-08-14',
    downloadsCount: 1520,
    previewContent: 'Complete reference for Vata-Pitta-Kapha balancing herbs, decoction preparations, rasayanas, and clinical wellness consultation guidelines.'
  },
  {
    id: 'mat-3',
    title: 'WCFM: Corporate Valuation & DCF Financial Modeling Handbook',
    category: 'pdf_notes',
    targetClass: 'WCFM Program',
    subject: 'Financial Modeling',
    chapter: 'Module 3: Corporate Valuation',
    pages: 48,
    downloadUrl: '#',
    isPremium: true,
    fileType: 'pdf',
    dateAdded: '2026-08-10',
    downloadsCount: 2150,
    previewContent: 'Step-by-step Discounted Cash Flow (DCF), Comparable Company Analysis (CCA), WACC calculations, and sensitivity analysis models.'
  },
  {
    id: 'mat-4',
    title: 'WCFM: Strategic Portfolio Management & Asset Allocation Blueprint',
    category: 'pdf_notes',
    targetClass: 'WCFM Program',
    subject: 'Wealth Management',
    chapter: 'Module 4: Portfolio Strategy',
    pages: 32,
    downloadUrl: '#',
    isPremium: false,
    fileType: 'pdf',
    dateAdded: '2026-08-08',
    downloadsCount: 1290,
    previewContent: 'Modern Portfolio Theory (MPT), efficient frontiers, multi-asset class allocation, tax-harvesting strategies, and client risk profiling.'
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
    description: 'A special hands-on practical session led by Dean Dr. R. K. Sharma covering Nadi Pariksha and therapeutic herbal preparation at the Varanasi Campus & Online Live Stream.',
    isImportant: true,
    badgeText: 'WORKSHOP ALERT'
  },
  {
    id: 'not-3',
    title: 'Corporate Financial Modeling & Valuation Masterclass by Prof. Arvind Mehta',
    date: '2026-08-16',
    category: 'batch',
    description: 'WCFM scholars are invited to participate in the live DCF and financial modeling lab. Case study materials available in the Study Vault.',
    isImportant: false,
    badgeText: 'NEW WORKSHOP'
  }
];

export const INITIAL_VIDEOS: VideoLecture[] = [
  {
    id: 'vid-1',
    title: 'Pulse Diagnosis & Tridosha Assessment Masterclass | Dr. R. K. Sharma',
    subject: 'Wellness Consultancy (WCNA)',
    targetClass: 'WCNA Scholars',
    duration: '48:30',
    youtubeId: 'kJQP7kiw5Fk',
    youtubeUrl: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
    thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80',
    instructor: 'Dr. R. K. Sharma',
    views: '18.4K views',
    isFeatured: true,
    notesPdfUrl: '#'
  },
  {
    id: 'vid-2',
    title: 'Corporate Valuation & DCF Modeling in Practice | Prof. Arvind Mehta',
    subject: 'Wealth Consultancy (WCFM)',
    targetClass: 'WCFM Scholars',
    duration: '52:15',
    youtubeId: 'kJQP7kiw5Fk',
    youtubeUrl: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    instructor: 'Prof. Arvind Mehta',
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
    title: 'Live pulse diagnosis clinical practicals at the Ayurveda & Naturopathy center with Dean Dr. Sharma 🌿🩺',
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
    email: 'aarav@educaveda.com',
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
    email: 'sneha@educaveda.com',
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
    studentEmail: 'aarav@educaveda.com',
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
    studentEmail: 'sneha@educaveda.com',
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
