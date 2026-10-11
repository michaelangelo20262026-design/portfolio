import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

function VisitorTracker() {
  const location = useLocation();

  useEffect(() => {
    async function trackVisit() {
      try {
        let visitorId = localStorage.getItem("portfolioVisitorId");

        if (!visitorId) {
          visitorId = crypto.randomUUID();

          localStorage.setItem("portfolioVisitorId", visitorId);
        }

        const response = await fetch("/api/track-visit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            visitorId,
            page: location.pathname,
          }),
        });

        if (!response.ok) {
          console.error("Failed to record visitor:", response.status);
        }
      } catch (error) {
        console.error("Visitor tracking error:", error);
      }
    }

    trackVisit();
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <VisitorTracker />

      <Navbar />

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
