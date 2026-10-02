import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import ScrollToTop from "./components/ScrollToTop"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

// Page Routes
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import CoursesPage from "./pages/CoursesPage"
import CourseDetailPage from "./pages/CourseDetailPage"
import ProgramsPage from "./pages/ProgramsPage"
import InternshipsPage from "./pages/InternshipsPage"
import InternshipDetailPage from "./pages/internships/InternshipDetailPage"
import ProjectsPage from "./pages/ProjectsPage"
import ProjectDetailPage from "./pages/ProjectDetailPage"
import ResourcesPage from "./pages/ResourcesPage"
import ContactPage from "./pages/ContactPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
import ProfilePage from "./pages/ProfilePage"
import MyCoursesPage from "./pages/MyCoursesPage"
import CheckoutPage from "./pages/CheckoutPage"

// Blueprint Flowchart Routes
import GeneralHubPage from "./pages/general/GeneralHubPage"
import GeneralTopicDetailPage from "./pages/general/GeneralTopicDetailPage"
import EmergingTechHubPage from "./pages/emerging-tech/EmergingTechHubPage"
import PathwayDetailPage from "./pages/emerging-tech/PathwayDetailPage"
import NonTechHubPage from "./pages/non-tech/NonTechHubPage"
import NonTechDetailPage from "./pages/non-tech/NonTechDetailPage"
import IndustryPartnersPage from "./pages/partners/IndustryPartnersPage"
import InstitutionsHubPage from "./pages/institutions/InstitutionsHubPage"
import InstitutionServiceDetailPage from "./pages/institutions/InstitutionServiceDetailPage"
import TechnologyDetailPage from "./pages/technology/TechnologyDetailPage"
import PartnerDetailPage from "./pages/partners/PartnerDetailPage"
import InstitutionDetailPage from "./pages/institutions/InstitutionDetailPage"
import NotFoundPage from "./pages/NotFoundPage"

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-[#0d4545] text-slate-100 flex flex-col font-['Manrope',sans-serif]">
          {/* Global Sticky Navigation Bar */}
          <Navbar />

          {/* Main Application Routes */}
          <main className="flex-1">
            <Routes>
              {/* Primary Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/:courseId" element={<CourseDetailPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route
                path="/projects/:projectId"
                element={<ProjectDetailPage />}
              />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Student Portal & Checkout */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/my-courses" element={<MyCoursesPage />} />
              <Route path="/checkout/:courseId" element={<CheckoutPage />} />

              {/* Blueprint Branch 1: General */}
              <Route path="/general" element={<GeneralHubPage />} />
              <Route
                path="/general/:topicSlug"
                element={<GeneralTopicDetailPage />}
              />

              {/* Blueprint Branch 2: Emerging Tech */}
              <Route path="/emerging-tech" element={<EmergingTechHubPage />} />
              <Route
                path="/emerging-tech/:pathwaySlug"
                element={<PathwayDetailPage />}
              />

              {/* Blueprint Branch 3: Non Tech */}
              <Route path="/non-tech" element={<NonTechHubPage />} />
              <Route
                path="/non-tech/:pathwaySlug"
                element={<NonTechDetailPage />}
              />

              {/* Blueprint Branch 4: Industry / Partners / Solutions */}
              <Route
                path="/industry-partners"
                element={<IndustryPartnersPage />}
              />

              {/* Blueprint Branch 5: Internship / Placement Assistance */}
              <Route path="/internships" element={<InternshipsPage />} />
              <Route
                path="/internships/:trackSlug"
                element={<InternshipDetailPage />}
              />

              {/* Master Architecture & Specialization Routes */}
              <Route
                path="/technology/:technologyId"
                element={<TechnologyDetailPage />}
              />
              <Route
                path="/partners/:partnerId"
                element={<PartnerDetailPage />}
              />

              {/* Institutional Offerings (Chapter 06) */}
              <Route path="/institutions" element={<InstitutionsHubPage />} />
              <Route
                path="/institutions/:institutionId"
                element={<InstitutionDetailPage />}
              />

              {/* Wildcard Fallback: Vintage Comic Editorial 404 Panel */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}
