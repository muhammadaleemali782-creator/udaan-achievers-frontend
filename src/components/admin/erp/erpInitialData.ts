import { Student, Admission, BatchItem, FeeRecord, AttendanceDayRecord } from './types';

export const INITIAL_ERP_STUDENTS: Student[] = [
  {
    id: 'std-1',
    studentId: 'EDU-2026-001',
    name: 'Rahul Sharma',
    mobile: '+91 98765 11223',
    email: 'rahul.sharma@educa.com',
    address: 'Sigra, Varanasi, Uttar Pradesh - 221010',
    course: 'WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]',
    batch: 'WCNA Morning Batch A',
    admissionDate: '2026-08-15',
    status: 'Active',
    guardianName: 'Manoj Sharma',
    bloodGroup: 'B+'
  },
  {
    id: 'std-2',
    studentId: 'EDU-2026-002',
    name: 'Ananya Verma',
    mobile: '+91 98111 22334',
    email: 'ananya.v@educa.com',
    address: 'Connaught Place, New Delhi - 110001',
    course: 'WCFM [ WEALTH CONSULTANCY IN FINANCE MANAGEMENT ]',
    batch: 'WCFM Executive Morning Batch',
    admissionDate: '2026-08-18',
    status: 'Active',
    guardianName: 'Ramesh Verma',
    bloodGroup: 'O+'
  },
  {
    id: 'std-3',
    studentId: 'EDU-2026-003',
    name: 'Vikram Singh',
    mobile: '+91 97222 33445',
    email: 'vikram.singh@educa.com',
    address: 'Lanka, BHU Road, Varanasi - 221005',
    course: 'WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]',
    batch: 'WCNA Evening Batch B',
    admissionDate: '2026-09-01',
    status: 'Active',
    guardianName: 'Harish Singh',
    bloodGroup: 'A+'
  },
  {
    id: 'std-4',
    studentId: 'EDU-2026-004',
    name: 'Sneha Kulkarni',
    mobile: '+91 99333 44556',
    email: 'sneha.k@educa.com',
    address: 'Sector 62, Noida, Uttar Pradesh - 201309',
    course: 'WCFM [ WEALTH CONSULTANCY IN FINANCE MANAGEMENT ]',
    batch: 'WCFM Weekend Pro Batch',
    admissionDate: '2026-09-05',
    status: 'Active',
    guardianName: 'Vijay Kulkarni',
    bloodGroup: 'AB+'
  },
  {
    id: 'std-5',
    studentId: 'EDU-2026-005',
    name: 'Amit Patel',
    mobile: '+91 98444 55667',
    email: 'amit.patel@educa.com',
    address: 'Civil Lines, Kanpur, Uttar Pradesh - 208001',
    course: 'WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]',
    batch: 'WCNA Morning Batch A',
    admissionDate: '2026-09-10',
    status: 'Active',
    guardianName: 'Suresh Patel',
    bloodGroup: 'B-'
  }
];

export const INITIAL_ERP_BATCHES: BatchItem[] = [
  {
    id: 'batch-wcna-1',
    batchName: 'WCNA Morning Batch A',
    courseCode: 'WCNA',
    courseName: 'WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]',
    duration: '6 Months Certification',
    courseFee: 18500,
    batchTiming: '08:00 AM - 10:30 AM (Mon - Fri)',
    faculty: 'Dr. R. K. Sharma (Dean & BAMS, MD)',
    capacity: 35,
    enrolledStudentsCount: 2
  },
  {
    id: 'batch-wcna-2',
    batchName: 'WCNA Evening Batch B',
    courseCode: 'WCNA',
    courseName: 'WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]',
    duration: '6 Months Certification',
    courseFee: 18500,
    batchTiming: '05:00 PM - 07:30 PM (Mon - Fri)',
    faculty: 'Dr. R. K. Sharma (Dean & BAMS, MD)',
    capacity: 35,
    enrolledStudentsCount: 1
  },
  {
    id: 'batch-wcfm-1',
    batchName: 'WCFM Executive Morning Batch',
    courseCode: 'WCFM',
    courseName: 'WCFM [ WEALTH CONSULTANCY IN FINANCE MANAGEMENT ]',
    duration: '1 Year Executive Diploma',
    courseFee: 22000,
    batchTiming: '09:00 AM - 11:30 AM (Mon - Fri)',
    faculty: 'Prof. Arvind Mehta (Corporate Advisory Lead)',
    capacity: 30,
    enrolledStudentsCount: 1
  },
  {
    id: 'batch-wcfm-2',
    batchName: 'WCFM Weekend Pro Batch',
    courseCode: 'WCFM',
    courseName: 'WCFM [ WEALTH CONSULTANCY IN FINANCE MANAGEMENT ]',
    duration: '1 Year Executive Diploma',
    courseFee: 22000,
    batchTiming: '10:00 AM - 02:00 PM (Sat - Sun)',
    faculty: 'CA Priya Verma (Senior Wealth Consultant)',
    capacity: 40,
    enrolledStudentsCount: 1
  }
];

export const INITIAL_ERP_ADMISSIONS: Admission[] = [
  {
    id: 'adm-101',
    studentId: 'EDU-2026-001',
    studentName: 'Rahul Sharma',
    mobile: '+91 98765 11223',
    address: 'Sigra, Varanasi, Uttar Pradesh',
    course: 'WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]',
    batch: 'WCNA Morning Batch A',
    admissionFee: 18500,
    requiredDocuments: {
      marksheet: true,
      aadhaar: true,
      photo: true,
      medicalCert: true
    },
    status: 'Verified',
    admissionDate: '2026-08-15',
    remarks: 'Full fees paid upfront. Verification completed.'
  },
  {
    id: 'adm-102',
    studentId: 'EDU-2026-002',
    studentName: 'Ananya Verma',
    mobile: '+91 98111 22334',
    address: 'Connaught Place, New Delhi',
    course: 'WCFM [ WEALTH CONSULTANCY IN FINANCE MANAGEMENT ]',
    batch: 'WCFM Executive Morning Batch',
    admissionFee: 22000,
    requiredDocuments: {
      marksheet: true,
      aadhaar: true,
      photo: true,
      medicalCert: false
    },
    status: 'Approved',
    admissionDate: '2026-08-18',
    remarks: 'Installment 1 paid (₹15,000). Balance ₹7,000 pending.'
  },
  {
    id: 'adm-103',
    studentId: 'EDU-2026-003',
    studentName: 'Vikram Singh',
    mobile: '+91 97222 33445',
    address: 'Lanka, BHU Road, Varanasi',
    course: 'WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]',
    batch: 'WCNA Evening Batch B',
    admissionFee: 18500,
    requiredDocuments: {
      marksheet: true,
      aadhaar: true,
      photo: true,
      medicalCert: true
    },
    status: 'Approved',
    admissionDate: '2026-09-01',
    remarks: 'Verified candidate.'
  },
  {
    id: 'adm-104',
    studentId: 'EDU-2026-004',
    studentName: 'Sneha Kulkarni',
    mobile: '+91 99333 44556',
    address: 'Sector 62, Noida, Uttar Pradesh',
    course: 'WCFM [ WEALTH CONSULTANCY IN FINANCE MANAGEMENT ]',
    batch: 'WCFM Weekend Pro Batch',
    admissionFee: 22000,
    requiredDocuments: {
      marksheet: true,
      aadhaar: true,
      photo: true,
      medicalCert: true
    },
    status: 'Verified',
    admissionDate: '2026-09-05',
    remarks: 'Corporate sponsored admission.'
  },
  {
    id: 'adm-105',
    studentId: 'EDU-2026-005',
    studentName: 'Amit Patel',
    mobile: '+91 98444 55667',
    address: 'Civil Lines, Kanpur, Uttar Pradesh',
    course: 'WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]',
    batch: 'WCNA Morning Batch A',
    admissionFee: 18500,
    requiredDocuments: {
      marksheet: true,
      aadhaar: false,
      photo: true,
      medicalCert: false
    },
    status: 'Pending',
    admissionDate: '2026-09-10',
    remarks: 'Aadhaar copy pending verification.'
  }
];

export const INITIAL_ERP_FEES: FeeRecord[] = [
  {
    id: 'fee-1',
    studentId: 'EDU-2026-001',
    studentName: 'Rahul Sharma',
    courseName: 'WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]',
    totalCourseFee: 18500,
    paidAmount: 18500,
    remainingAmount: 0,
    lastPaymentDate: '2026-08-15',
    paymentHistory: [
      {
        id: 'tx-101',
        amount: 18500,
        date: '2026-08-15',
        method: 'UPI',
        receiptNo: 'REC-2026-8801',
        notes: 'Full payment via Razorpay UPI'
      }
    ]
  },
  {
    id: 'fee-2',
    studentId: 'EDU-2026-002',
    studentName: 'Ananya Verma',
    courseName: 'WCFM [ WEALTH CONSULTANCY IN FINANCE MANAGEMENT ]',
    totalCourseFee: 22000,
    paidAmount: 15000,
    remainingAmount: 7000,
    lastPaymentDate: '2026-08-18',
    paymentHistory: [
      {
        id: 'tx-102',
        amount: 15000,
        date: '2026-08-18',
        method: 'Bank Transfer',
        receiptNo: 'REC-2026-8802',
        notes: 'Installment 1 of 2'
      }
    ]
  },
  {
    id: 'fee-3',
    studentId: 'EDU-2026-003',
    studentName: 'Vikram Singh',
    courseName: 'WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]',
    totalCourseFee: 18500,
    paidAmount: 10000,
    remainingAmount: 8500,
    lastPaymentDate: '2026-09-01',
    paymentHistory: [
      {
        id: 'tx-103',
        amount: 10000,
        date: '2026-09-01',
        method: 'UPI',
        receiptNo: 'REC-2026-8803',
        notes: 'Registration advance fee'
      }
    ]
  },
  {
    id: 'fee-4',
    studentId: 'EDU-2026-004',
    studentName: 'Sneha Kulkarni',
    courseName: 'WCFM [ WEALTH CONSULTANCY IN FINANCE MANAGEMENT ]',
    totalCourseFee: 22000,
    paidAmount: 22000,
    remainingAmount: 0,
    lastPaymentDate: '2026-09-05',
    paymentHistory: [
      {
        id: 'tx-104',
        amount: 22000,
        date: '2026-09-05',
        method: 'Card',
        receiptNo: 'REC-2026-8804',
        notes: 'Online corporate credit card full payment'
      }
    ]
  },
  {
    id: 'fee-5',
    studentId: 'EDU-2026-005',
    studentName: 'Amit Patel',
    courseName: 'WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]',
    totalCourseFee: 18500,
    paidAmount: 5000,
    remainingAmount: 13500,
    lastPaymentDate: '2026-09-10',
    paymentHistory: [
      {
        id: 'tx-105',
        amount: 5000,
        date: '2026-09-10',
        method: 'Cash',
        receiptNo: 'REC-2026-8805',
        notes: 'Token seat booking fee'
      }
    ]
  }
];

export const INITIAL_ERP_ATTENDANCE: AttendanceDayRecord[] = [
  {
    id: 'att-1',
    date: new Date().toISOString().split('T')[0],
    batchName: 'WCNA Morning Batch A',
    courseCode: 'WCNA',
    records: [
      { studentId: 'EDU-2026-001', studentName: 'Rahul Sharma', status: 'Present' },
      { studentId: 'EDU-2026-005', studentName: 'Amit Patel', status: 'Present' }
    ]
  },
  {
    id: 'att-2',
    date: new Date().toISOString().split('T')[0],
    batchName: 'WCFM Executive Morning Batch',
    courseCode: 'WCFM',
    records: [
      { studentId: 'EDU-2026-002', studentName: 'Ananya Verma', status: 'Present' }
    ]
  }
];
