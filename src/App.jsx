import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useCachedData } from "./hooks/useCachedData";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Lecture from "./pages/Lecture";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";

// The homepage's hero already has its own large top padding designed to
// clear the fixed navbar (pt-32 / lg:pt-56) — so it renders with no wrapper.
// Every other page just needs the navbar's height (h-20) cleared.
function Page({ children }) {
  return <div className="pt-20">{children}</div>;
}

export default function App() {
  const contact = useCachedData("/site-info", { phone: "", email: "", address: "" });
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="font-body min-h-screen bg-paper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Page><Courses /></Page>} />
        <Route path="/about" element={<Page><About /></Page>} />
        <Route path="/contact" element={<Page><Contact /></Page>} />
        <Route path="/login" element={<Page><Login /></Page>} />
        <Route path="/reset-password" element={<Page><ResetPassword /></Page>} />
        <Route path="/lecture/:courseId" element={<Page><Lecture /></Page>} />
        <Route path="/privacy" element={<Page><Privacy /></Page>} />
        <Route path="/terms" element={<Page><Terms /></Page>} />
        <Route path="/refund" element={<Page><Refund /></Page>} />
      </Routes>
      <Footer contact={contact} />
    </div>
  );
}
