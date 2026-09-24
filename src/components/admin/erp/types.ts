export interface Student {
  id: string;
  studentId: string; // Auto generated e.g. EDU-2026-001
  name: string;
  mobile: string;
  email: string;
  address: string;
  course: string; // 'WCNA [ WELLNESS CONSULTANCY IN NATUROPATHY AND AYURVEDA ]' | 'WCFM [ WEALTH CONSULTANCY IN FINANCE MANAGEMENT ]'
  batch: string;
  admissionDate: string;
  status: 'Active' | 'Inactive';
  guardianName?: string;
  bloodGroup?: string;
}

export interface Admission {
  id: string;
  studentId?: string;
  studentName: string;
  mobile: string;
  address: string;
  course: string;
  batch: string;
  admissionFee: number;
  requiredDocuments: {
    marksheet: boolean;
    aadhaar: boolean;
    photo: boolean;
    medicalCert: boolean;
  };
  status: 'Pending' | 'Approved' | 'Verified' | 'Rejected';
  admissionDate: string;
  remarks?: string;
}

export interface BatchItem {
  id: string;
  batchName: string;
  courseCode: 'WCNA' | 'WCFM';
  courseName: string;
  duration: string;
  courseFee: number;
  batchTiming: string;
  faculty: string;
  capacity: number;
  enrolledStudentsCount: number;
}

export interface PaymentTransaction {
  id: string;
  amount: number;
  date: string;
  method: 'UPI' | 'Bank Transfer' | 'Cash' | 'Card';
  receiptNo: string;
  notes?: string;
}

export interface FeeRecord {
  id: string;
  studentId: string;
  studentName: string;
  courseName: string;
  totalCourseFee: number;
  paidAmount: number;
  remainingAmount: number;
  lastPaymentDate: string;
  paymentHistory: PaymentTransaction[];
}

export interface AttendanceEntry {
  studentId: string;
  studentName: string;
  status: 'Present' | 'Absent' | 'Late';
}

export interface AttendanceDayRecord {
  id: string;
  date: string; // YYYY-MM-DD
  batchName: string;
  courseCode: string;
  records: AttendanceEntry[];
}
