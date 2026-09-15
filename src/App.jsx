import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ERPProvider } from "./context/ERPContext";
import ERPLayout from "./components/ERPLayout";

import ERPDashboard from "./pages/erp/ERPDashboard";
import StudentsView from "./pages/erp/StudentsView";
import AdmissionsView from "./pages/erp/AdmissionsView";
import CoursesBatchesView from "./pages/erp/CoursesBatchesView";
import FeesView from "./pages/erp/FeesView";
import AttendanceView from "./pages/erp/AttendanceView";

export default function App() {
  return (
    <ERPProvider>
      <ERPLayout>
        <Routes>
          <Route path="/" element={<ERPDashboard />} />
          <Route path="/dashboard" element={<ERPDashboard />} />
          <Route path="/students" element={<StudentsView />} />
          <Route path="/admissions" element={<AdmissionsView />} />
          <Route path="/courses" element={<CoursesBatchesView />} />
          <Route path="/fees" element={<FeesView />} />
          <Route path="/attendance" element={<AttendanceView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ERPLayout>
    </ERPProvider>
  );
}
