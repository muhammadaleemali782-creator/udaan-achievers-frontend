import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ERPProvider } from "./context/ERPContext";
import ERPLayout from "./components/ERPLayout";
import { Toaster, toast } from "sonner";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

// Protected ERP Pages
import ERPDashboard from "./pages/erp/ERPDashboard";
import StudentsView from "./pages/erp/StudentsView";
import AdmissionsView from "./pages/erp/AdmissionsView";
import CoursesBatchesView from "./pages/erp/CoursesBatchesView";
import FeesView from "./pages/erp/FeesView";
import AttendanceView from "./pages/erp/AttendanceView";

// Protected Route Guard
function ProtectedERPRoute({ children }) {
  const authUser = localStorage.getItem("erp_user");
  const location = useLocation();

  if (!authUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default function App() {
  return (
    <ERPProvider>
      <Toaster richColors position="top-right" />
      <Routes>
        {/* Public Website Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Protected ERP Routes (Accessible after Login) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedERPRoute>
              <ERPLayout>
                <ERPDashboard />
              </ERPLayout>
            </ProtectedERPRoute>
          }
        />
        <Route
          path="/students"
          element={
            <ProtectedERPRoute>
              <ERPLayout>
                <StudentsView />
              </ERPLayout>
            </ProtectedERPRoute>
          }
        />
        <Route
          path="/admissions"
          element={
            <ProtectedERPRoute>
              <ERPLayout>
                <AdmissionsView />
              </ERPLayout>
            </ProtectedERPRoute>
          }
        />
        <Route
          path="/erp/courses"
          element={
            <ProtectedERPRoute>
              <ERPLayout>
                <CoursesBatchesView />
              </ERPLayout>
            </ProtectedERPRoute>
          }
        />
        <Route
          path="/fees"
          element={
            <ProtectedERPRoute>
              <ERPLayout>
                <FeesView />
              </ERPLayout>
            </ProtectedERPRoute>
          }
        />
        <Route
          path="/attendance"
          element={
            <ProtectedERPRoute>
              <ERPLayout>
                <AttendanceView />
              </ERPLayout>
            </ProtectedERPRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ERPProvider>
  );
}
