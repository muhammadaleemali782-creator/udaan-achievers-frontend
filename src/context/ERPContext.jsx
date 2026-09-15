import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

const ERPContext = createContext();

const INITIAL_COURSES = [
  {
    id: "WCNA",
    code: "WCNA",
    name: "WCNA [ Wellness Consultancy in Naturopathy and Ayurveda ]",
    shortName: "Wellness Consultancy (WCNA)",
    duration: "6 Months",
    fee: 25000,
    faculty: "Dr. R. K. Sharma (BAMS, MD Naturopathy)",
    batches: ["WCNA-M1", "WCNA-W1"],
    tag: "Ayurveda & Naturopathy",
    desc: "Complete professional certification covering fundamental principles of Ayurveda, Panchakarma therapy, pulse diagnosis, and herbal nutrition.",
    seats: "40 Seats",
    activeStudents: 18,
  },
  {
    id: "WCFM",
    code: "WCFM",
    name: "WCFM [ Wealth Consultancy in Finance Management ]",
    shortName: "Wealth Consultancy (WCFM)",
    duration: "6 Months",
    fee: 30000,
    faculty: "Prof. Arvind Mehta (CFA, FinOps Advisory)",
    batches: ["WCFM-E1", "WCFM-W1"],
    tag: "Finance & Wealth Advisory",
    desc: "Comprehensive financial training in corporate valuation, portfolio engineering, personal wealth advisory, tax optimization, and regulatory compliance.",
    seats: "35 Seats",
    activeStudents: 14,
  },
];

const INITIAL_BATCHES = [
  {
    id: "WCNA-M1",
    name: "WCNA Morning Alpha",
    courseId: "WCNA",
    timing: "08:00 AM - 10:30 AM",
    days: "Mon, Wed, Fri",
    faculty: "Dr. R. K. Sharma",
    room: "Ayurveda Lab 101",
    capacity: 25,
    status: "Active",
  },
  {
    id: "WCNA-W1",
    name: "WCNA Weekend Pro",
    courseId: "WCNA",
    timing: "10:00 AM - 02:00 PM",
    days: "Saturday & Sunday",
    faculty: "Dr. Priya Deshmukh",
    room: "Clinical Hall A",
    capacity: 20,
    status: "Active",
  },
  {
    id: "WCFM-E1",
    name: "WCFM Evening Prime",
    courseId: "WCFM",
    timing: "05:30 PM - 08:00 PM",
    days: "Tue, Thu, Sat",
    faculty: "Prof. Arvind Mehta",
    room: "Finance Suite 302",
    capacity: 25,
    status: "Active",
  },
  {
    id: "WCFM-W1",
    name: "WCFM Weekend Master",
    courseId: "WCFM",
    timing: "02:00 PM - 06:00 PM",
    days: "Sunday",
    faculty: "Dr. Neha Verma (CFA)",
    room: "Executive Boardroom",
    capacity: 20,
    status: "Active",
  },
];

const INITIAL_STUDENTS = [
  {
    id: "STU-2026-001",
    name: "Aarav Sharma",
    mobile: "+91 98765 43210",
    email: "aarav.sharma@example.com",
    address: "Block B-4, Green Park, New Delhi",
    course: "WCNA",
    batch: "WCNA-M1",
    admissionDate: "2026-08-10",
    status: "Active",
    totalFee: 25000,
    paidFee: 25000,
    remainingFee: 0,
    attendanceRate: 94,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
    documents: ["Aadhaar Card", "12th Marksheet", "Passport Photo", "Signature"],
  },
  {
    id: "STU-2026-002",
    name: "Pooja Verma",
    mobile: "+91 98112 34567",
    email: "pooja.verma@example.com",
    address: "Flat 203, Sunrise Heights, Jaipur",
    course: "WCNA",
    batch: "WCNA-M1",
    admissionDate: "2026-08-12",
    status: "Active",
    totalFee: 25000,
    paidFee: 15000,
    remainingFee: 10000,
    attendanceRate: 88,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    documents: ["Aadhaar Card", "Graduation Degree", "Passport Photo"],
  },
  {
    id: "STU-2026-003",
    name: "Rohan Kulkarni",
    mobile: "+91 99201 88442",
    email: "rohan.k@example.com",
    address: "Shivaji Nagar, Pune, Maharashtra",
    course: "WCFM",
    batch: "WCFM-E1",
    admissionDate: "2026-08-15",
    status: "Active",
    totalFee: 30000,
    paidFee: 30000,
    remainingFee: 0,
    attendanceRate: 96,
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80",
    documents: ["Aadhaar Card", "B.Com Marksheet", "Passport Photo", "Signature"],
  },
  {
    id: "STU-2026-004",
    name: "Ananya Iyer",
    mobile: "+91 97412 99011",
    email: "ananya.iyer@example.com",
    address: "Indiranagar 100ft Road, Bengaluru",
    course: "WCFM",
    batch: "WCFM-E1",
    admissionDate: "2026-08-18",
    status: "Active",
    totalFee: 30000,
    paidFee: 20000,
    remainingFee: 10000,
    attendanceRate: 91,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    documents: ["Aadhaar Card", "Passport Photo", "Pan Card"],
  },
  {
    id: "STU-2026-005",
    name: "Kabir Das",
    mobile: "+91 91234 56789",
    email: "kabir.das@example.com",
    address: "Salt Lake Sector V, Kolkata",
    course: "WCNA",
    batch: "WCNA-W1",
    admissionDate: "2026-09-01",
    status: "Active",
    totalFee: 25000,
    paidFee: 10000,
    remainingFee: 15000,
    attendanceRate: 85,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    documents: ["Aadhaar Card", "10th Marksheet", "Passport Photo"],
  },
  {
    id: "STU-2026-006",
    name: "Sneha Patel",
    mobile: "+91 98980 11223",
    email: "sneha.patel@example.com",
    address: "Satellite Road, Ahmedabad",
    course: "WCFM",
    batch: "WCFM-W1",
    admissionDate: "2026-09-02",
    status: "Active",
    totalFee: 30000,
    paidFee: 30000,
    remainingFee: 0,
    attendanceRate: 100,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    documents: ["Aadhaar Card", "MBA Degree", "Passport Photo", "Signature"],
  },
  {
    id: "STU-2026-007",
    name: "Manish Joshi",
    mobile: "+91 94140 22334",
    email: "manish.joshi@example.com",
    address: "Malviya Nagar, Jaipur",
    course: "WCNA",
    batch: "WCNA-M1",
    admissionDate: "2026-09-05",
    status: "Active",
    totalFee: 25000,
    paidFee: 5000,
    remainingFee: 20000,
    attendanceRate: 78,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    documents: ["Aadhaar Card"],
  }
];

const INITIAL_ADMISSIONS = [
  {
    id: "ADM-2026-101",
    studentId: "STU-2026-007",
    name: "Manish Joshi",
    mobile: "+91 94140 22334",
    email: "manish.joshi@example.com",
    course: "WCNA",
    batch: "WCNA-M1",
    admissionFee: 5000,
    totalFee: 25000,
    date: "2026-09-05",
    status: "Confirmed",
    documents: {
      aadhaar: true,
      marksheet: true,
      photo: true,
      signature: true,
    },
    paymentMode: "UPI",
    notes: "Part fee paid at desk. Remaining via monthly installments.",
  },
  {
    id: "ADM-2026-102",
    studentId: "STU-2026-006",
    name: "Sneha Patel",
    mobile: "+91 98980 11223",
    email: "sneha.patel@example.com",
    course: "WCFM",
    batch: "WCFM-W1",
    admissionFee: 30000,
    totalFee: 30000,
    date: "2026-09-02",
    status: "Confirmed",
    documents: {
      aadhaar: true,
      marksheet: true,
      photo: true,
      signature: true,
    },
    paymentMode: "Net Banking",
    notes: "Full payment cleared with one-shot discount eligibility.",
  },
  {
    id: "ADM-2026-103",
    studentId: null,
    name: "Vikas Malhotra",
    mobile: "+91 98200 44556",
    email: "vikas.malhotra@example.com",
    course: "WCFM",
    batch: "WCFM-E1",
    admissionFee: 5000,
    totalFee: 30000,
    date: "2026-09-15",
    status: "Under Review",
    documents: {
      aadhaar: true,
      marksheet: false,
      photo: true,
      signature: false,
    },
    paymentMode: "Cash",
    notes: "Pending marksheet verification from university.",
  },
  {
    id: "ADM-2026-104",
    studentId: null,
    name: "Divya Nair",
    mobile: "+91 94470 99887",
    email: "divya.nair@example.com",
    course: "WCNA",
    batch: "WCNA-W1",
    admissionFee: 5000,
    totalFee: 25000,
    date: "2026-09-16",
    status: "Pending",
    documents: {
      aadhaar: true,
      marksheet: true,
      photo: true,
      signature: true,
    },
    paymentMode: "UPI",
    notes: "Interview scheduled with Dr. R. K. Sharma.",
  },
];

const INITIAL_PAYMENTS = [
  {
    id: "REC-2026-1001",
    studentId: "STU-2026-001",
    studentName: "Aarav Sharma",
    course: "WCNA",
    amount: 25000,
    date: "2026-08-10",
    mode: "UPI (GooglePay)",
    refNo: "UPI/30912491/HDFC",
    remarks: "Full Course Fee Paid",
  },
  {
    id: "REC-2026-1002",
    studentId: "STU-2026-002",
    studentName: "Pooja Verma",
    course: "WCNA",
    amount: 15000,
    date: "2026-08-12",
    mode: "Net Banking",
    refNo: "NEFT-SBIN002910",
    remarks: "First Installment",
  },
  {
    id: "REC-2026-1003",
    studentId: "STU-2026-003",
    studentName: "Rohan Kulkarni",
    course: "WCFM",
    amount: 30000,
    date: "2026-08-15",
    mode: "Credit Card",
    refNo: "TXN_CC_99812",
    remarks: "Full Tuition Fee",
  },
  {
    id: "REC-2026-1004",
    studentId: "STU-2026-004",
    studentName: "Ananya Iyer",
    course: "WCFM",
    amount: 20000,
    date: "2026-08-18",
    mode: "UPI (PhonePe)",
    refNo: "UPI/8821990/AXIS",
    remarks: "Installment 1 of 2",
  },
  {
    id: "REC-2026-1005",
    studentId: "STU-2026-005",
    studentName: "Kabir Das",
    course: "WCNA",
    amount: 10000,
    date: "2026-09-01",
    mode: "Cash",
    refNo: "CASH-REC-005",
    remarks: "Registration & Initial Installment",
  },
  {
    id: "REC-2026-1006",
    studentId: "STU-2026-006",
    studentName: "Sneha Patel",
    course: "WCFM",
    amount: 30000,
    date: "2026-09-02",
    mode: "Net Banking",
    refNo: "ICICI_NET_44901",
    remarks: "One-shot Full Tuition Payment",
  },
  {
    id: "REC-2026-1007",
    studentId: "STU-2026-007",
    studentName: "Manish Joshi",
    course: "WCNA",
    amount: 5000,
    date: "2026-09-05",
    mode: "UPI (Paytm)",
    refNo: "UPI/998120/PAYTM",
    remarks: "Admission Seat Booking Fee",
  },
];

const TODAY = new Date().toISOString().split("T")[0];

const INITIAL_ATTENDANCE = {
  [`${TODAY}_WCNA-M1`]: {
    "STU-2026-001": "Present",
    "STU-2026-002": "Present",
    "STU-2026-007": "Present",
  },
  [`${TODAY}_WCFM-E1`]: {
    "STU-2026-003": "Present",
    "STU-2026-004": "Absent",
  }
};

export function ERPProvider({ children }) {
  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem("erp_courses");
    return saved ? JSON.parse(saved) : INITIAL_COURSES;
  });

  const [batches, setBatches] = useState(() => {
    const saved = localStorage.getItem("erp_batches");
    return saved ? JSON.parse(saved) : INITIAL_BATCHES;
  });

  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("erp_students");
    return saved ? JSON.parse(saved) : INITIAL_STUDENTS;
  });

  const [admissions, setAdmissions] = useState(() => {
    const saved = localStorage.getItem("erp_admissions");
    return saved ? JSON.parse(saved) : INITIAL_ADMISSIONS;
  });

  const [payments, setPayments] = useState(() => {
    const saved = localStorage.getItem("erp_payments");
    return saved ? JSON.parse(saved) : INITIAL_PAYMENTS;
  });

  const [attendance, setAttendance] = useState(() => {
    const saved = localStorage.getItem("erp_attendance");
    return saved ? JSON.parse(saved) : INITIAL_ATTENDANCE;
  });

  useEffect(() => { localStorage.setItem("erp_courses", JSON.stringify(courses)); }, [courses]);
  useEffect(() => { localStorage.setItem("erp_batches", JSON.stringify(batches)); }, [batches]);
  useEffect(() => { localStorage.setItem("erp_students", JSON.stringify(students)); }, [students]);
  useEffect(() => { localStorage.setItem("erp_admissions", JSON.stringify(admissions)); }, [admissions]);
  useEffect(() => { localStorage.setItem("erp_payments", JSON.stringify(payments)); }, [payments]);
  useEffect(() => { localStorage.setItem("erp_attendance", JSON.stringify(attendance)); }, [attendance]);

  const generateNextStudentId = () => {
    const year = new Date().getFullYear();
    const count = students.length + 1;
    const pad = String(count).padStart(3, "0");
    return `STU-${year}-${pad}`;
  };

  const generateNextReceiptId = () => {
    const year = new Date().getFullYear();
    const count = payments.length + 1001;
    return `REC-${year}-${count}`;
  };

  const addStudent = (data) => {
    const newId = generateNextStudentId();
    const courseObj = courses.find((c) => c.id === data.course || c.code === data.course);
    const totalFee = courseObj ? courseObj.fee : 25000;
    const paid = Number(data.initialPayment) || 0;

    const newStudent = {
      id: newId,
      name: data.name,
      mobile: data.mobile,
      email: data.email || `${data.name.toLowerCase().replace(/\s+/g, ".")}@example.com`,
      address: data.address || "New Delhi",
      course: data.course || "WCNA",
      batch: data.batch || "WCNA-M1",
      admissionDate: data.admissionDate || TODAY,
      status: "Active",
      totalFee,
      paidFee: paid,
      remainingFee: Math.max(0, totalFee - paid),
      attendanceRate: 100,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(data.name)}`,
      documents: data.documents || ["Aadhaar Card", "Passport Photo"],
    };

    setStudents((prev) => [newStudent, ...prev]);

    if (paid > 0) {
      const recId = generateNextReceiptId();
      const newPay = {
        id: recId,
        studentId: newId,
        studentName: data.name,
        course: data.course || "WCNA",
        amount: paid,
        date: data.admissionDate || TODAY,
        mode: data.paymentMode || "UPI",
        refNo: `AUTO/${Date.now().toString().slice(-8)}`,
        remarks: "Admission Initial Fee",
      };
      setPayments((prev) => [newPay, ...prev]);
    }

    toast.success(`Student ${data.name} enrolled successfully with ID: ${newId}`);
    return newStudent;
  };

  const updateStudent = (id, updatedData) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updatedData } : s))
    );
    toast.success("Student profile updated successfully");
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
    toast.info("Student record removed");
  };

  const createAdmission = (data) => {
    const count = admissions.length + 101;
    const year = new Date().getFullYear();
    const admId = `ADM-${year}-${count}`;

    const courseObj = courses.find((c) => c.id === data.course);
    const totalFee = courseObj ? courseObj.fee : 25000;
    const admissionFee = Number(data.admissionFee) || 5000;

    let studentId = null;
    if (data.status === "Confirmed") {
      studentId = generateNextStudentId();
    }

    const newAdm = {
      id: admId,
      studentId,
      name: data.name,
      mobile: data.mobile,
      email: data.email,
      course: data.course || "WCNA",
      batch: data.batch || "WCNA-M1",
      admissionFee,
      totalFee,
      date: data.date || TODAY,
      status: data.status || "Confirmed",
      documents: data.documents || {
        aadhaar: true,
        marksheet: true,
        photo: true,
        signature: true,
      },
      paymentMode: data.paymentMode || "UPI",
      notes: data.notes || "New application processed via portal",
    };

    setAdmissions((prev) => [newAdm, ...prev]);

    if (data.status === "Confirmed") {
      const newStu = {
        id: studentId,
        name: data.name,
        mobile: data.mobile,
        email: data.email,
        address: data.address || "Address provided during admission",
        course: data.course || "WCNA",
        batch: data.batch || "WCNA-M1",
        admissionDate: data.date || TODAY,
        status: "Active",
        totalFee,
        paidFee: admissionFee,
        remainingFee: Math.max(0, totalFee - admissionFee),
        attendanceRate: 100,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(data.name)}`,
        documents: Object.keys(data.documents || {})
          .filter((k) => data.documents[k])
          .map((k) => k.charAt(0).toUpperCase() + k.slice(1)),
      };
      setStudents((prev) => [newStu, ...prev]);

      if (admissionFee > 0) {
        const recId = generateNextReceiptId();
        const pay = {
          id: recId,
          studentId,
          studentName: data.name,
          course: data.course || "WCNA",
          amount: admissionFee,
          date: data.date || TODAY,
          mode: data.paymentMode || "UPI",
          refNo: `ADM/${Date.now().toString().slice(-7)}`,
          remarks: "Admission Seat Confirmation Fee",
        };
        setPayments((prev) => [pay, ...prev]);
      }
    }

    toast.success(`Admission application ${admId} recorded successfully!`);
    return newAdm;
  };

  const updateAdmissionStatus = (admId, newStatus) => {
    setAdmissions((prev) =>
      prev.map((a) => {
        if (a.id === admId) {
          let sid = a.studentId;
          if (newStatus === "Confirmed" && !sid) {
            sid = generateNextStudentId();
            const newStu = {
              id: sid,
              name: a.name,
              mobile: a.mobile,
              email: a.email,
              address: "Address on file",
              course: a.course,
              batch: a.batch,
              admissionDate: TODAY,
              status: "Active",
              totalFee: a.totalFee || 25000,
              paidFee: a.admissionFee || 5000,
              remainingFee: Math.max(0, (a.totalFee || 25000) - (a.admissionFee || 5000)),
              attendanceRate: 100,
              avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(a.name)}`,
              documents: ["Aadhaar Verified", "Admission Receipt"],
            };
            setStudents((sPrev) => [newStu, ...sPrev]);
            toast.success(`Admission Approved! Generated Student ID: ${sid}`);
          }
          return { ...a, status: newStatus, studentId: sid };
        }
        return a;
      })
    );
  };

  const recordFeePayment = (studentId, amount, mode = "UPI", remarks = "Tuition installment") => {
    const numAmt = Number(amount);
    if (!numAmt || numAmt <= 0) {
      toast.error("Please enter a valid payment amount");
      return null;
    }

    const student = students.find((s) => s.id === studentId);
    if (!student) {
      toast.error("Student not found");
      return null;
    }

    const recId = generateNextReceiptId();
    const newPay = {
      id: recId,
      studentId,
      studentName: student.name,
      course: student.course,
      amount: numAmt,
      date: TODAY,
      mode,
      refNo: `${mode.toUpperCase().slice(0, 3)}/${Date.now().toString().slice(-8)}`,
      remarks,
    };

    setPayments((prev) => [newPay, ...prev]);

    setStudents((prev) =>
      prev.map((s) => {
        if (s.id === studentId) {
          const updatedPaid = s.paidFee + numAmt;
          return {
            ...s,
            paidFee: updatedPaid,
            remainingFee: Math.max(0, s.totalFee - updatedPaid),
          };
        }
        return s;
      })
    );

    toast.success(`Payment of ₹${numAmt.toLocaleString("en-IN")} recorded! Receipt: ${recId}`);
    return newPay;
  };

  const markAttendance = (date, batchId, studentId, status) => {
    const key = `${date}_${batchId}`;
    setAttendance((prev) => ({
      ...prev,
      [key]: {
        ...(prev[key] || {}),
        [studentId]: status,
      },
    }));
  };

  const markAllBatchPresent = (date, batchId, studentIds) => {
    const key = `${date}_${batchId}`;
    const updated = {};
    studentIds.forEach((id) => {
      updated[id] = "Present";
    });

    setAttendance((prev) => ({
      ...prev,
      [key]: {
        ...(prev[key] || {}),
        ...updated,
      },
    }));
    toast.success(`All ${studentIds.length} students marked Present!`);
  };

  const addCourse = (c) => {
    setCourses((prev) => [...prev, { ...c, id: c.code || `C-${Date.now().toString().slice(-4)}` }]);
    toast.success(`Course ${c.name} added!`);
  };

  const addBatch = (b) => {
    setBatches((prev) => [...prev, { ...b, id: b.id || `B-${Date.now().toString().slice(-4)}` }]);
    toast.success(`Batch ${b.name} added!`);
  };

  const totalStudents = students.length;
  const activeStudents = students.filter((s) => s.status === "Active").length;
  const totalCoursesCount = courses.length;
  const totalBatchesCount = batches.length;
  const todayAdmissionsCount = admissions.filter((a) => a.date === TODAY).length;
  const todayFeesCollection = payments
    .filter((p) => p.date === TODAY)
    .reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
  const pendingFeesTotal = students.reduce(
    (sum, s) => sum + (Number(s.remainingFee) || 0),
    0
  );

  return (
    <ERPContext.Provider
      value={{
        courses,
        batches,
        students,
        admissions,
        payments,
        attendance,
        totalStudents,
        activeStudents,
        totalCoursesCount,
        totalBatchesCount,
        todayAdmissionsCount,
        todayFeesCollection,
        pendingFeesTotal,
        addStudent,
        updateStudent,
        deleteStudent,
        createAdmission,
        updateAdmissionStatus,
        recordFeePayment,
        markAttendance,
        markAllBatchPresent,
        addCourse,
        addBatch,
        generateNextStudentId,
        generateNextReceiptId,
      }}
    >
      {children}
    </ERPContext.Provider>
  );
}

export function useERP() {
  const ctx = useContext(ERPContext);
  if (!ctx) throw new Error("useERP must be used within an ERPProvider");
  return ctx;
}
